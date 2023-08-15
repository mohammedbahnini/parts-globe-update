import { all, put, takeEvery } from 'redux-saga/effects';

import { actionTypes, changeLangSuccess } from './action';

function* changeLangSaga({ payload }) {
    try {
        yield put(changeLangSuccess(payload));
    } catch (err) {
        console.error(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.CHANGE_TO_FR, changeLangSaga)]);
    yield all([takeEvery(actionTypes.CHANGE_TO_EN, changeLangSaga)]);
}
