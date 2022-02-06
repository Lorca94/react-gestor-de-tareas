import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/authActions';

function httpFetch(request) {
    return function () {
        return (axios(request));
    };
}

// Se le llama desde watcher trata de hacer la petición y despacha una action
export function* workerSaga(action) {
    try {
        const response = yield call(httpFetch(action.payload.request));
        // Se obtiene el token desde response
        const { token } = response.data;

        yield put({
            type: action.payload.okAction,
            payload: {
                token,
            },
        });
    } catch (error) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error,
            },
        });
    }
}

// Escucha la accion e inicia el worker
export function* watcherSaga() {
    yield takeLatest(API_CALL_REQUEST, workerSaga);
}
