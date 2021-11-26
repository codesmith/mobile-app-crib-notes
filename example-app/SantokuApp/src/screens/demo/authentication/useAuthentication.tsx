import {
  ActiveAccountIdNotFoundError,
  AuthnService,
  csrfToken,
  generatePassword,
  PasswordNotFoundError,
} from 'framework';
import {useCallback, useState} from 'react';

import {ApiResponseError} from '../../../framework/backend';

export const useAuthentication = () => {
  const [accountId, setAccountId] = useState<string>();
  const [accountIdInput, setAccountIdInput] = useState('');

  const signup = useCallback(async () => {
    try {
      await csrfToken();
      const password = await generatePassword();
      const res = await AuthnService.signup('demoNickname', password);
      setAccountId(res.accountId);
      await csrfToken();
      alert(`アカウントIDは${res.accountId}です`);
    } catch (e) {
      if (e instanceof ApiResponseError) {
        alert(e.response.data.message);
        return;
      }
      alert(e);
    }
  }, [setAccountId]);

  const changeAccount = useCallback(async () => {
    try {
      await csrfToken();
      const res = await AuthnService.changeAccount(accountIdInput);
      await csrfToken();
      alert(`ログイン成功しました state=${res.status}`);
    } catch (e) {
      if (e instanceof ApiResponseError) {
        alert(e.response.data.message);
        return;
      }
      if (e instanceof PasswordNotFoundError) {
        alert('アカウントIDに紐づくパスワードが見つかりません');
        return;
      }
      alert(e);
    }
  }, [accountIdInput]);

  const canAutoLogin = useCallback(async () => {
    try {
      const res = await AuthnService.canAutoLogin();
      alert(res ? '自動ログイン可能です' : '自動ログインできません');
    } catch (e) {
      alert(e);
    }
  }, []);

  const autoLogin = useCallback(async () => {
    try {
      await csrfToken();
      const res = await AuthnService.autoLogin();
      await csrfToken();
      alert(`自動ログイン成功しました state=${res.status}`);
    } catch (e) {
      if (e instanceof ApiResponseError) {
        alert(e.response.data.message);
        return;
      }
      if (e instanceof ActiveAccountIdNotFoundError) {
        alert('自動ログイン可能なアカウントIDが見つかりません');
        return;
      }
      if (e instanceof PasswordNotFoundError) {
        alert('アカウントIDに紐づくパスワードが見つかりません');
        return;
      }
      alert(e);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await AuthnService.logout();
      alert(`ログアウト成功しました`);
    } catch (e) {
      if (e instanceof ApiResponseError) {
        alert(e.response.data.message);
        return;
      }
      alert(e);
    }
  }, []);

  return {
    accountId,
    accountIdInput,
    setAccountIdInput,
    signup,
    changeAccount,
    canAutoLogin,
    autoLogin,
    logout,
  };
};