import style from "./style.module.scss";
import { useState } from "react";
import Link from "next/link"

interface prop {
    login?: boolean,
    signup?: boolean,
}

interface stateType {
    email: string,
    password: string,
}

const Forms = ({ login, signup }: prop) => {



    const initial: stateType = {
        email: "",
        password: ""
    }

    const [form, setForm] = useState(initial)


    const validator = () => {

        if (!form.email.includes('@')) {
            alert('Invalid email');
            return false
        } else if (form.password.length < 6) {
            alert('password must be at least 6 characters')
            return false
        }
        return true

    }


    const onSubmit = (e: any) => {
        e.preventDefault();

        if (validator()) {
            // expression goes here
            console.log(form)

        }
    }

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setForm(prev => { return { ...prev, [name]: value } })
    }


    const properties: any = {
        email: {
            name: 'email',
            type: 'text',
            placeholder: 'example@example.com',
            onChange,
            required: true
        },
        password: {
            name: 'password',
            type: 'password',
            placeholder: '6+ strong character',
            onChange,
            required: true
        }
    }


    const flexible = {
        nextRef: (!login) ? "Have an account? " : 'Creata New Account?',
        nextHref: (login) ? "/signup" : "/login",
        nextAnchor: (login) ? "Signup" : "Login",
        heading: (login) ? "Welcome back to Hire" : "Connect with  Hire",
        buttonVariant: (!login) ? "Create an account" : "Log in",
    }

    return (
        <div className={style.wrapper}>


            <div className={style.content}>

                <div>
                    <span>{flexible.nextRef}</span>
                    <Link href={flexible.nextHref} passHref>
                        <a>{flexible.nextAnchor}</a>
                    </Link>
                </div>

                <div>
                    <h1>{flexible.heading}</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <form onSubmit={onSubmit}>
                        <fieldset>
                            <legend>Email</legend>
                            <input {...properties.email} />
                        </fieldset>

                        <fieldset>
                            <legend>Password</legend>
                            <input {...properties.password} />
                        </fieldset>
                        <button type="submit">{flexible.buttonVariant}</button>
                    </form>
                </div>

            </div>
            <div className={style.illustration}></div>

        </div>
    )
}

export default Forms
