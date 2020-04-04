
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// import { persistStore, persistReducer } from 'redux-persist'

import dataReducer from './reducers/dataReducer'

const rootReducer = combineReducers({
    data: dataReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))



// const persistedReducer = persistReducer(persistConfig, rootReducer)


//const persistor = persistorStore(store)


// export default () => {
//     let store = createStore(persistedReducer, applyMiddleware(thunk))
//     let persistor = persistStore(store)
//     return { store, persistor }
// }
