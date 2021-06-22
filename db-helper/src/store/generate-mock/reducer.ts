import { ITEMS_GENERATE } from '../actionTypes'
import { actionTypeDecorator } from '../actionTypeDecorator'

const GenerateItemsGet = new actionTypeDecorator(ITEMS_GENERATE)

const initialState = {
    loading: false,
}

type Action = {
    type: string,
    payload: unknown
}

export function generateItemsReducer(state = initialState, action: Action): Record<string, unknown> {
    switch (action.type) {
    case GenerateItemsGet.request():
        return ({
            ...state,
            loading: true
        })
    case GenerateItemsGet.success():
        return ({
            ...state,
            loading: false,
        })
    default:
        return ({
            ...state,
        })
    }
}
