import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

interface initialState {
    __generator: {
        __action: "input" | 'dropdown' | "textarea" | undefined;
        __popup: {
            name: string,
            options: string[],
            inputs: string,
            placeholder: string
        };
        __meta: {
            __heder: {
                title: string | undefined;
                subtitle: string | undefined;
            }
            __custom: any[];
        }
    }
}

const initialState: initialState = {
    __generator: {
        __action: undefined,
        __popup: {
            name: '',
            options: ['default'],
            inputs: '',
            placeholder: ''
        },
        __meta: {
            __heder: {
                title: '',
                subtitle: '',
            },
            __custom: []
        }
    }
}

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setAction: (state, action) => {
            state.__generator.__action = action.payload;
        },
        setPopupName: (state, action) => {
            state.__generator.__popup.name = action.payload;
        },
        pushPopupOptions: (state, action) => {

            state.__generator.__popup.options.push(action.payload)

            // state.__generator.__popup.options.push(action.payload);


        },
        removePopupOption: (state, action) => {

            // Exclude payload : filter
            const filteredArr = state.__generator.__popup.options.filter((item: string) => item !== action.payload);

            state.__generator.__popup.options = filteredArr;
        },
        setPopupPlaceholder: (state, action) => {
            state.__generator.__popup.placeholder = action.payload;
        },
        pushMeta: (state) => {
            const _Constructor = {
                action: state.__generator.__action,
                name: state.__generator.__popup.name,
                placeholder: state.__generator.__popup.placeholder,
                options: (state.__generator.__action === 'dropdown') ? state.__generator.__popup.options : false,
            };
            state.__generator.__meta.__custom.push(_Constructor);


        }
    }
});

const store = configureStore({
    reducer: slice.reducer
})

export const { setAction, setPopupName, pushPopupOptions, removePopupOption, setPopupPlaceholder, pushMeta } = slice.actions;

export default store;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector