import { takeEvery, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions'
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  yield console.log('I am fired');

  try {
    const collectionRef = firestore.collection('collections');
    // when we set new snapshot value equal to yielded value of collectionRef.get(), when the value comes back it returns as a promise form that gets resolved with the value of the collection reference, which is the snapshot. Essentially the value goes through the yield statement as is set to the declared snapshot value
    const snapshot = yield collectionRef.get();
    //call method is an effect that invokes functions. Call is a method that takes a function as first argument then subsequent arguements are parameters you pass into that function call. B/c you are yielding the call it allows you to differ control back to the saga middleware, in case we need to cancel we give it another place to do so
    //adding more yields wherever we can makes it easier to test
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);

    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}