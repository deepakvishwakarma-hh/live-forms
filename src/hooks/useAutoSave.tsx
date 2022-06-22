import { useAppSelector, fetchWithAutoSave, useAppDispatch } from "../../store"

const useSave = () => {

    const dispatch = useAppDispatch()

    const meta = useAppSelector(store => store.__generator.__meta);

    // special target key for auto save;
    const T = useAppSelector(store => store.T);

    const saveSteps = () => {

        const len = meta.__custom.length;

        const localstorageData = JSON.parse(localStorage.getItem('editor') as string);

        if (len !== 0) {
            localStorage.setItem('editor', JSON.stringify(meta))
        } else {

            if (T) {
                localStorage.setItem('editor', JSON.stringify(meta))
            }
            else { dispatch(fetchWithAutoSave(localstorageData)) }
        }
    }

    return { saveSteps }
}

export default useSave

