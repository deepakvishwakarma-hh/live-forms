
import jwt from 'jsonwebtoken'
import database from "../../firebase.config";
import { useAppSelector, useAppDispatch, alerts } from "../../state-store";
import { ref, set, onValue, update, get, child } from "firebase/database";
import Router from 'next/router';

const useGenerate = () => {

    const dispatch = useAppDispatch()
    const meta = useAppSelector(state => state.__generator.__meta);

    const Schema = () => {
        const id = + new Date();
        const Client = { ...meta }
        const Database: any[] = [];

        const user = jwt.decode(localStorage.getItem('token') as string);

        const Creator = {
            ...user as object
        }
        return { id, Client, Database, Creator }
    }

    const store = () => {

        const schema = Schema()

        set(
            ref(database, 'forms/' + schema.id)
            , schema)
            .then(() => {

                // aleat box behaviour

                dispatch(alerts({ type: 'formCreated', payload: true }))

                setTimeout(() => {
                    dispatch(alerts({ type: 'formCreated', payload: false }))
                    Router.push('/forms/' + schema.id)
                }, 4000)

            })
            .catch((err: string) => { console.log(err) })
    }



    const saveToDatabase = (id: string, data: any) => {

        const dbRef = ref(database);
        get(child(dbRef, 'forms/' + id))
            .then((snapshot) => {
                let storedData = snapshot.val();

                update(
                    ref(database, 'forms/' + id), { Database: [...storedData['Database'] ?? [], data] })
                    .then(() => { alert('pushed') })
                    .catch((err: string) => { console.log(err) })


            }).catch((error) => {
                console.error(error);
            });

    }

    const getData = (id: string, callback = (data: any) => { console.table(data) }) => {
        // Referance to firebase
        const starCountRef = ref(database, 'forms/' + id);
        onValue(starCountRef, (snapshot) => {
            callback(snapshot.val())
        });
    }
    return { store, saveToDatabase, getData }
}
export default useGenerate