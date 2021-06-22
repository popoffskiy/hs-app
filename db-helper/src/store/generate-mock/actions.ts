import { ITEMS_GENERATE } from '../actionTypes'
import { Action, Dispatch } from '@hs/shared'

export const generateItems: Dispatch = () => async (dispatch: (args: Action) => void) => {
    dispatch({
        type: ITEMS_GENERATE,
        $fetch: {
            url: `/generate-mocks`,
            options: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            },
        }
    })
}
