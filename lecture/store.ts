import { createStore, MiddlewareAPI, Dispatch,AnyAction, applyMiddleware,compose } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {
    user: {
        isLoggingIn: false,
        data:null
    },
    posts:[]
}

// 첫번째 미들웨어
const firstMiddleware = (store:MiddlewareAPI) => (next:Dispatch<AnyAction>) => (action:AnyAction) => {
    console.log('로깅', action);
    next(action);
}


// 두번째 미들웨어
const thunkMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
  if (typeof action === 'function') { // 비동기
    return action(store.dispatch, store.getState);
  }
  return next(action); // 동기
};


// 미들웨어 장착
const enhancer = process.env.NODE_ENV ==='production' ? compose(applyMiddleware(firstMiddleware)) : composeWithDevTools(applyMiddleware(firstMiddleware,thunkMiddleware))

const store = createStore(reducer, initialState,enhancer);

export default store;