interface prop {
    color?: string,
    aspect: number,
    onClick?: any,
}

import style from "./style.module.scss";

const Add = ({ aspect, color, onClick }: prop) => (
    <button onClick={onClick} className={style.button__delete}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={aspect / 2}
            height={aspect / 2}
            fill={(color) ? color : 'white'}
            viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
        </svg>
    </button>)


export default Add;


