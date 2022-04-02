// I thing we should use CreateElement like functionality


// convert meta code into  functional form; 


interface prop {
    children: any
}

const Transformer = ({ children }: prop) => {

    console.log(children);

    const Form_Constructor = children.map(
        (value: any, index: number) => {

            const { action, name, placeholder, options } = value;

            // Construct Input tag;
            if (action == 'input') {
                return (
                    <div>
                        <h3>{name}</h3>
                        <input type="text" name={name} placeholder={placeholder} />
                    </div>)
            }
            else if (action == 'textarea') {
                return (
                    <div>
                        <h3>{name}</h3>
                        <textarea name={name} ></textarea>
                    </div >)
            }
            else {
                const optMaps = options.map((value: string, index2: number) => {
                    return <option key={index2}>{value}</option>
                })
                return (
                    <div>
                        <h3>{name}</h3>
                        <select name={name} >{optMaps}</select>
                    </div >)
            }

        })

    return (
        <div>

            {Form_Constructor}

        </div>
    )

}
export default Transformer


