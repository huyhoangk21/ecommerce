import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducers/';

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
