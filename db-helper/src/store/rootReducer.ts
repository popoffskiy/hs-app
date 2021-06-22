import { combineReducers } from 'redux'
import { itemsReducer } from './items'
import { generateItemsReducer } from './generate-mock'

export const rootReducer = combineReducers({
    items: itemsReducer,
    generateItems: generateItemsReducer
})
