import { useAppSelector, fetchMetaWithArr, useAppDispatch } from "../../state-store"

const useSave = () => {

    const dispatch = useAppDispatch()

    const meta = useAppSelector(store => store.__generator.__meta.__custom);

    const T = useAppSelector(store => store.T);

    const saveSteps = () => {

        const len = meta.length;

        const ls = JSON.parse(localStorage.getItem('editor') as string);

        if (len !== 0) {
            localStorage.setItem('editor', JSON.stringify(meta))
        } else {

            if (T) {
                localStorage.setItem('editor', JSON.stringify(meta))
            }
            else { dispatch(fetchMetaWithArr(ls)) }
        }
    }


    return { saveSteps }
}

export default useSave

