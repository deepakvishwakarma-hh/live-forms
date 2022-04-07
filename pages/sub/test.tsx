import { Transformer } from "../../components/elements";

const test = () => {

    const fake = {
        __header: {
            title: 'Recruting React Developer',
            subtitle: 'Now, we are recruting....',
        },
        __custom: [
            {
                action: 'input',
                name: " Name",
                paragraph: "your full name",
                placeholder: "ex. Deepak lohar",
                options: false
            },
            {
                action: 'input',
                name: "Current Work",
                paragraph: "what are you doing now in IT ",
                placeholder: "ex. freelancing",
                options: false
            },
            {
                action: 'input',
                name: "Education history",
                paragraph: "your education feed",
                placeholder: "ex. BCA, DCA",
                options: false
            }

        ]
    }

    return <Transformer live>{fake}</Transformer>
}
export default test