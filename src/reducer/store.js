import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter'
import appBevReducer from './AppBev'

export default configureStore({
  reducer: {
    counter: counterReducer,
    appBev: appBevReducer

  },
})