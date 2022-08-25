import { combineReducers } from 'redux';

import { accountReducer } from './account';
import { problemReducer } from './problem';
import { notificationReducer } from './notifications';
import { redirectReducer } from './redirect';
import { translatorReducer } from './translator';

const allReducers = combineReducers({
  account: accountReducer,
  problem: problemReducer,
  notifications: notificationReducer,
  redirect: redirectReducer,
  Intl: translatorReducer,
});

export default allReducers;
