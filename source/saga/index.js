import { all, fork } from 'redux-saga/effects';

const root = function* () {
  yield all([
  ].map((item) => fork(item)));
};

export default root;
