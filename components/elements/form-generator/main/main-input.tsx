
import { Text, Input } from '@chakra-ui/react'

interface prop {
    label: string;
    placeholder: string;
    onChange?: (e: any) => void;
    value?: string,
}

const Inputs = ({ label, placeholder, onChange, value }: prop) => {
    return (
        <label>
            <Text>{label}</Text>
            <Input onChange={onChange} type="text" placeholder={placeholder} value={value ? value : undefined} />
        </label>
    )
}
export default Inputs;