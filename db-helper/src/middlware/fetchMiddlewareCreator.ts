import { Middleware, Dispatch } from 'redux'
import { FetchType } from '@hs/shared'

type fetchMiddlewareCreator = unknown

type Action = {
    $fetch: {
        url: string,
        options: Record<string, unknown>
    };
    type?: string;
    params?: unknown
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const fetchMiddlewareCreator: Middleware = (config = { types: FetchType }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { types } = config
    return ({ dispatch }: { dispatch: Dispatch }) => (next: (arg0: unknown) => unknown) => async (action: Action) => {

        if (!action || !action.$fetch) {
            return next(action)
        }
        const {
            type,
            $fetch,
            params = {}
        } = action

        const {
            url,
            options
        } = $fetch

        dispatch({
            type: `${type}_${types.REQUEST}`,
            params
        })
        const resp = await fetch(url, options)

        if (!resp.ok) {
            dispatch({
                type: `${type}_${types.FAILURE}`,
                payload: await resp.json(),
                params
            })
        }
        if (resp.ok) {
            const respJson = await resp.clone()
                .json()
                .catch(() => null)

            dispatch({
                type: `${type}_${types.SUCCESS}`,
                payload: respJson,
                params
            })
        }
    }
}

export default fetchMiddlewareCreator
