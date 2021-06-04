import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { rootReducer } from './rootReducer'
import { fetchMiddlewareCreator } from '../middlware/fetchMiddlewareCreator'

const logger = createLogger()

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const configureStore = (initialState: Record<string, unknown>) => {
    return createStore(rootReducer, initialState,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        applyMiddleware(thunkMiddleware, fetchMiddlewareCreator(), logger),
    )
}
