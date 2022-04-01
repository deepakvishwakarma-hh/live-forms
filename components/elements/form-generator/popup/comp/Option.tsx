interface prop {
    value: string,
    index: number,
}

const Options = ({ value, index }: prop) => {

    const onRemoveHandler = () => {
        console.log(index)
    }
    return (
        <li>
            {value}
            <button onClick={onRemoveHandler}>remove</button>
        </li>
    )
}


export default Options;