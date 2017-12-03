import { Platform } from 'react-native';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

const middleWare = applyMiddleware(thunk, promise, logger);

const Store = createStore(
  RootReducer,
  compose(
    middleWare,
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 8000
    }),
  )
);

//const composeEnhancers = devTools({ name: Platform.OS, hostname: 'localhost', port: 8000 });
// const Store = createStore(
//   RootReducer,
//   devTools(applyMiddleware(thunk, promise, logger))
// )

export default Store;