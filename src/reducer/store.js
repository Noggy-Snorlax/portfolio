import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter'
import appBevReducer from './AppBev'
import expandDialogReducer from './ExpandDialog'

export default configureStore({
  reducer: {
    counter: counterReducer,
    appBev: appBevReducer,
    expandDialog: expandDialogReducer
  },
})