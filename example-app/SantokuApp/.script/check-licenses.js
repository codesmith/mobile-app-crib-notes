const lodash = require('lodash');
const listDependencies = require("./list-dependencies");

const licenseWhitelist = [
  '0BSD', // [パーミッシブ・ライセンス] = BSDスタイルライセンス
  'Apache-2.0', // [パーミッシブ・ライセンス]
  'BSD-2-Clause', // 二条項BSDライセンス [パーミッシブ・ライセンス]
  'BSD-3-Clause', // 三条項BSDライセンス [パーミッシブ・ライセンス]
  'CC-BY-4.0', // クリエイティブ・コモンズ
  'CC0-1.0', // パブリック・ドメイン
  'ISC', // [パーミッシブ・ライセンス]
  'MIT', // [パーミッシブ・ライセンス]
  'Unlicense', // ≒ パブリックドメイン
  'WTFPL', // = パブリックドメイン
  'Python-2.0',// ≒ BSD
  'BSL-1.0', // [パーミッシブ・ライセンス]
  'Zlib', // [パーミッシブ・ライセンス]
  'Android Software Development Kit License', // TODO: check
];

/**
 * 
 * @param {string} target ライセンス文字列. example: 'MIT', '(MIT OR Apache-2.0)', ...
 * @param {string[]} licenseList 
 * @returns {boolean}
 */
const includeLicenses = (target, licenseList) => {
  if (target.startsWith('(') && target.endsWith(')')) {
    return target.slice(1, -1).split(' OR ').some(s => licenseList.includes(s))
  } else {
    return licenseList.includes(target);
  }
};

const compact = dependency => {
  // `util.inspect` の `maxStringLength` で制限すると file path が壊れる場合があるので文字列の行数で制限するようにした
  const limitLines = 3;
  const entries = Object.entries(dependency).map(([k, v]) => {
    if ((typeof v === 'string') && (v.split(/\n/).length > limitLines)) {
      v = v.split(/\n/).slice(0, limitLines).join('\n') + '\n...';
    }
    return [k, v];
  });
  return Object.fromEntries(entries);
};

listDependencies().then(dependencies => {
  const errors = [];

  const nameDuplication = lodash(dependencies)
    .groupBy(d => `${d.name}@${d.version}`)
    .pickBy(x => x.length >= 2)
    .mapValues(list => list.map(({id}) => id))
    .value();
  if (Object.keys(nameDuplication).length) {
    const message = 'Name Duplication!!!!';
    // errors.push(message); // TODO: name 重複の対応が決まったらチェック内容を変更する
    console.warn('[WARN]', message, nameDuplication);
  }

  const suspiciousLicenseFileList = dependencies.filter(d => String(d.licenseFile).match(/README/i));
  if (suspiciousLicenseFileList.length) {
    const message = 'licenseFile is README!!!!';
    // errors.push(message); // TODO: managed-license.js で管理するようにしたらコメントアウトを外す 
    console.warn('[WARN]', message, Object.fromEntries(suspiciousLicenseFileList.map(({id, licenseFile}) => ([id, licenseFile]))));
  }

  const licenseNameNotFoundList = dependencies.filter(d => !d.licenseName);
  if (licenseNameNotFoundList.length) {
    const message = 'License Name NotFound!!!!';
    errors.push(message);
    console.warn('[WARN]', message, licenseNameNotFoundList.map(compact));
  }

  const ngLicenseList = dependencies.filter(d => !includeLicenses(d.licenseName, licenseWhitelist));
  if (ngLicenseList.length) {
    const message = 'License unsafe!!!!';
    errors.push(message);
    console.warn('[WARN]', message, ngLicenseList.map(compact));
  }

  const licenseTextNotFoundList = dependencies.filter(d => !(d.licenseFile || d.licenseText || d.licenseUrl));
  if (licenseTextNotFoundList.length) {
    const message = 'License Text or Url NotFound!!!!';
    errors.push(message);
    console.warn('[WARN]', message, licenseTextNotFoundList.map(compact));
  }

  if (errors.length) throw new Error(errors.join('\n'));
  console.info('check-licenses: OK');
});
