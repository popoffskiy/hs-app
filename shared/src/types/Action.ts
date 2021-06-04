export type Action = {
    $fetch: {
        url: string,
        options: Record<string, unknown>,
        body?: unknown
    };
    type?: string;
    params?: unknown;
}
