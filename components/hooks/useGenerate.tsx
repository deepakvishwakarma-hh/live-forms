
import database from "../../firebase.config";
import { useAppSelector } from "../../state-store";
import { ref, set, onValue, update } from "firebase/database";

const useGenerate = () => {

    const meta = useAppSelector(state => state.__generator.__meta);


    const Schema = () => {

        const id = + new Date();

        const Client = {
            ...meta
        }

        const Database: any[] = []

        return { id, Client, Database }

    }

    const store = () => {

        const schema = Schema()

        set(
            ref(database, 'forms/' + schema.id)
            , schema)
            .then(() => { console.log('stored') })
            .catch((err: string) => { console.log(err) })
    }

    const get = (id: string) => {

        let Result: any = {
        }

        const T = onValue(ref(database, 'forms/' + id), (snapshot) => {
            Result = snapshot.val()
        });

        console.log(Result)

        return Result;
    }

    const saveToDatabase = (id: string, data: any) => {


        const Result = get(id);

        const payload = { ...Result, Database: [...Result['Database'] ?? [], data] };

        update(
            ref(database, 'forms/' + id)
            , payload)
            .then(() => { console.log('stored') })
            .catch((err: string) => { console.log(err) })
    }


    return { store, saveToDatabase }
}
export default useGenerate