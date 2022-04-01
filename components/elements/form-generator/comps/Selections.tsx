interface prop {
    options: string[];
}

const Selections = ({ options }: prop) => {

    const optionMap = options?.map((option: string, index: number) => <option key={index} value="volvo">Volvo</option>)

    return (
        <select name="cars" >
            {optionMap}
        </select>
    )
}


export default Selections;