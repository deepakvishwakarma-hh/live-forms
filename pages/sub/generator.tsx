
import { useEffect } from "react";
import * as Elements from "../../components/elements"
import useSave from "../../components/hooks/useSave";

const _Generator = () => {

    const save = useSave();

    useEffect(() => {
        // save.saveSteps();
    })

    return (
        <Elements.FormGenerator />
    )
};
export default _Generator