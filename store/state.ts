export default interface initialState {
    __generator: {
        __action: "input" | 'dropdown' | "textarea" | undefined;
        __headerBox: boolean;
        __popup: {
            name: string,
            paragraph: string,
            options: string[],
            inputs: string,
            placeholder: string
        };
        __meta: {
            __header: {
                title: string | undefined;
                subtitle: string | undefined;
            }
            __custom: any[];
        }
    }
    T: boolean,
    user: {
        displayName: string | undefined;
        email: string | undefined;
    },
    dashboard: {
        formsArray: string[],
    },
    alearts: {
        [key: string]: any,
        formCreated: boolean | string[],
    }
}

// const a: generator['__action'] = undefined