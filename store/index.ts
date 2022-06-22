import jwt from 'jsonwebtoken';
import type initial from './state';
import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const initialState: initial = {
    __generator: {
        action: undefined,
        headerBox: false,
        __popup: {
            name: '',
            paragraph: '',
            options: ['default'],
            inputs: '',
            placeholder: ''
        },
        __meta: {
            __header: {
                title: 'untitled',
                subtitle: 'untitled',
            },
            __custom: [
            ]
        }
    },
    T: false,// True if Meta option delete by editor -FF
    user: {
        displayName: undefined,
        email: undefined
    },
    dashboard: {
        formsArray: [],
    },
    alearts: { // by default they are false;
        formCreated: false,
    }
}

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // generator's action reducer
        setAction: (state, action) => {
            state.__generator.action = action.payload;
        },

        // reducer for popup's name 
        setPopupName: (state, action) => {
            state.__generator.__popup.name = action.payload;
        },

        // reducer for popup's paragraph 
        setPopupParagraph: (state, action) => {
            state.__generator.__popup.paragraph = action.payload;
        },

        // reducer for header box
        toggleHeaderBox: (state, action) => {
            state.__generator.headerBox = action.payload;
        },

        // reducer for popup's options (add) 
        pushPopupOptions: (state, action) => {
            state.__generator.__popup.options.push(action.payload)
        },

        // reducer for popup's option(remove) 
        removePopupOption: (state, action) => {
            // Exclude payload : filter
            const filteredArr = state.__generator.__popup.options.filter((item: string) => item !== action.payload);
            state.__generator.__popup.options = filteredArr;
        },

        // reducer for popup's placeholder 
        setPopupPlaceholder: (state, action) => {
            state.__generator.__popup.placeholder = action.payload;
        },


        //reducer for delete from meta
        deleteFromMeta: (state, action) => {
            state.__generator.__meta.__custom.splice(action.payload, 1);
            state.T = true
        },

        //reducer for update from meta
        editFromMeta: (state, action) => {
            const { index, object } = action.payload;
            state.__generator.__meta.__custom[index] = object;
        },


        // reducer for meta > header > title 
        setMetaHeaderTitle: (state, action) => {
            state.__generator.__meta.__header.title = action.payload
        },
        // reducer for meta > header > subtitle 
        setMetaHeaderSubTitle: (state, action) => {
            state.__generator.__meta.__header.subtitle = action.payload
        },
        // reducer for user 
        setUser: (state) => {
            state.user = jwt.decode(localStorage.getItem('token') as string) as any
        },
        // reducer for alearts 
        alerts: (state, action) => {
            state.alearts[action.payload.type] = action.payload.payload;
        },
        // reducer for fething history (auto save in browser memory) re-save to states : update require
        fetchWithAutoSave: (state, action) => {
            action.payload && action.payload.__custom?.map((value: any) => {
                state.__generator.__meta.__custom.push(value)
            })
            // header isnt fetching..
        },

        //reducer for store meta
        pushMeta: (state) => {
            const _Constructor = {
                action: state.__generator.action,
                name: state.__generator.__popup.name,
                paragraph: state.__generator.__popup.paragraph,
                placeholder: state.__generator.__popup.placeholder,
                options: (state.__generator.action === 'dropdown') ? state.__generator.__popup.options : false,
            };
            state.__generator.__meta.__custom.push(_Constructor);
        }
    }
});

const store = configureStore({
    reducer: slice.reducer
})

export const { setAction, setPopupName, pushPopupOptions, removePopupOption, setPopupPlaceholder, pushMeta, setPopupParagraph, deleteFromMeta, editFromMeta, fetchWithAutoSave, setMetaHeaderTitle, setMetaHeaderSubTitle, setUser, alerts, toggleHeaderBox } = slice.actions;
export default store;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector




