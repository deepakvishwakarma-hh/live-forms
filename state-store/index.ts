import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

interface initialState {
    __generator: {
        __action: "input" | 'dropdown' | "textarea" | undefined;
        __popup: {
            name: string,
            paragraph: string,
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
    T: boolean
}

const initialState: initialState = {
    __generator: {
        __action: undefined,
        __popup: {
            name: '',
            paragraph: '',
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
    },
    T: false // True if Meta option delet by editor -FF
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

        setPopupParagraph: (state, action) => {
            state.__generator.__popup.paragraph = action.payload;
        },
        pushPopupOptions: (state, action) => {
            state.__generator.__popup.options.push(action.payload)
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
                paragraph: state.__generator.__popup.paragraph,
                placeholder: state.__generator.__popup.placeholder,
                options: (state.__generator.__action === 'dropdown') ? state.__generator.__popup.options : false,
            };
            state.__generator.__meta.__custom.push(_Constructor);
        },
        deleteFromMeta: (state, action) => {
            state.__generator.__meta.__custom.splice(action.payload, 1);
            state.T = true
        },
        editFromMeta: (state, action) => {
            const { index, object } = action.payload;
            state.__generator.__meta.__custom[index] = object;
        },
        fetchMetaWithArr: (state, action) => {

            action.payload && action.payload.map((value: any) => {
                state.__generator.__meta.__custom.push(value)
            })

        }
    }
});

const store = configureStore({
    reducer: slice.reducer
})

export const { setAction, setPopupName, pushPopupOptions, removePopupOption, setPopupPlaceholder, pushMeta, setPopupParagraph, deleteFromMeta, editFromMeta, fetchMetaWithArr } = slice.actions;

export default store;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector




// {
//     action: 'input',
//     name: " Name",
//     paragraph: "your full name",
//     placeholder: "ex. Deepak lohar",
//     options: false
// }