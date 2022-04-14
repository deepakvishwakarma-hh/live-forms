import database from "../../firebase.config"
import { ref, onValue } from "firebase/database"
import style from "../../styles/form.module.scss";
import { Transformer } from "../../components/elements";
import Image from "next/image"
import { useRouter } from "next/router";

const Page = () => {

    const router = useRouter()


    return (
        <div className={style.wrapper}>
            <header>
                <div>
                    <h5>Powerd by
                        <Image width={50} height={50} src="/logo.svg" alt="none" />
                    </h5>
                </div>
            </header>
            <main>
                {router.query.id}
            </main>

        </div>
    )
}

export default Page
