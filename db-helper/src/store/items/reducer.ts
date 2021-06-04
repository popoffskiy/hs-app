import { ITEMS_POST, ITEMS_GET } from '../actionTypes'
import { actionTypeDecorator } from '../actionTypeDecorator'

const ActionTypeGet = new actionTypeDecorator(ITEMS_GET)
const ActionTypePost = new actionTypeDecorator(ITEMS_POST)

const initialState = {
    data: [],
    loading: false,
    saving: false,
}

type Action = {
    type: string,
    payload: unknown
}

export function itemsReducer(state = initialState, action: Action): Record<string, unknown> {
    switch (action.type) {
    case ActionTypeGet.request():
        return ({
            ...state,
            loading: true
        })
    case ActionTypeGet.success():
        return ({
            ...state,
            loading: false,
            data: action.payload
        })
    case ActionTypePost.request():
        return ({
            ...state,
            saving: true,
        })
    case ActionTypePost.success():
        return ({
            ...state,
            saving: false,
        })
    default:
        return ({
            ...state,
        })
    }
}
