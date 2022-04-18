import jwt from 'jsonwebtoken';
import Router from 'next/router';
import { signInWithPopup } from "firebase/auth";
import { googleAuth, provider } from "../../firebase.config"

const useAuth = () => {

    const localisation = (data: any) => {
        const { displayName, email } = data.user;
        const payload = JSON.stringify({ displayName, email })
        const enc = jwt.sign(payload, 'lorme');
        localStorage.setItem("token", enc)
    }

    const autheticateWithGoogle = () => {
        signInWithPopup(googleAuth, provider)
            .then((data: any) => {
                localisation(data);
                Router.reload();
            })
            .catch((err: any) => { alert(err) })
    }

    const loginOnHomePage = () => {
        if (!localStorage.getItem("token")) {
            autheticateWithGoogle()
        }
        else {
            alert("You are already logged in")
            Router.push('/dashboard')
        }
    }


    return { googleAuth: autheticateWithGoogle, loginOnHomePage }
}

export default useAuth;