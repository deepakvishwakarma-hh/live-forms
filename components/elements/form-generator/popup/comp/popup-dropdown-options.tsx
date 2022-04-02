import {
    useAppSelector,
    useAppDispatch,
    removePopupOption
} from "../../../../../state-store";

import { Delete } from "../../../buttons"

interface prop {
    value: string,
    index: number,
}

const Options = ({ value, index }: prop) => {

    const opt = useAppSelector(store => store.__generator.__popup.options)

    const dispatch = useAppDispatch();

    const onRemove = () => {
        const optToBeRemoved = opt[index]
        dispatch(removePopupOption(optToBeRemoved))
    }
    return (
        <li>
            {value}
            <Delete aspect={50} onClick={onRemove} />
        </li>
    )
}


export default Options;