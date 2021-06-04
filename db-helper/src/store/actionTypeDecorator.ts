import { FetchType } from '@hs/shared'

export class actionTypeDecorator {
    type

    constructor(type: string) {
        this.type = type
    }

    request(): string {
        return `${this.type}_${FetchType.REQUEST}`
    }

    success(): string {
        return `${this.type}_${FetchType.SUCCESS}`
    }

    failure(): string {
        return `${this.type}_${FetchType.FAILURE}`
    }
}
