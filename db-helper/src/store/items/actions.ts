import { ITEMS_POST, ITEMS_GET } from '../actionTypes'
import { Action, Dispatch } from '@hs/shared'

export const getItems: Dispatch = () => async (dispatch: (args: Action) => void) => {
    dispatch({
        type: ITEMS_GET,
        $fetch: {
            url: `/items`,
            options: {
                method: 'GET'
            }
        }
    })
}

export const postItems: Dispatch = (data: [] | undefined) => async (dispatch: (args: Action) => void) => {
    dispatch({
        type: ITEMS_POST,
        $fetch: {
            url: `/items`,
            options: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            },
        }
    })
}
