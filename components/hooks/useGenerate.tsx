
import jwt from 'jsonwebtoken'
import Router from 'next/router';
import database from "../../firebase.config";
import { useAppSelector, useAppDispatch, alerts } from "../../state-store";
import { ref, set, onValue, update, get, child } from "firebase/database";

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

        const Err = {
            isEmpty: schema.Client.__custom.length == 0,
            isNameAttrEmpty: () => {
                const _filter = schema.Client.__custom.filter(item => item.name == '')
                if (_filter.length == 0) {
                    return false
                } else {
                    return true
                }
            }
        }

        if (Err.isEmpty || Err.isNameAttrEmpty()) {
            alert('plese fill all custom fields');
        } else {
            set(
                ref(database, 'forms/' + schema.id)
                , schema)
                .then(() => {

                    dispatch(alerts({ type: 'formCreated', payload: true }))

                    setTimeout(() => {
                        dispatch(alerts({ type: 'formCreated', payload: false }))
                        Router.push('/survey/' + schema.id)
                    }, 4000)

                })
                .catch((err: string) => { console.log(err) })
        }

    }

    const saveToDatabase = (id: string, data: any) => {

        const payload = {
            ...data, additional: {
                user: jwt.decode(localStorage.getItem('token') as string),
                date: + new Date(),
            }
        }

        const dbRef = ref(database);
        get(child(dbRef, 'forms/' + id))
            .then((snapshot) => {

                let storedData = snapshot.val();

                update(
                    ref(database, 'forms/' + id), { Database: [...storedData['Database'] ?? [], payload] })
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

    const restoreDB = (id: string) => {
        update(
            ref(database, 'forms/' + id), { Database: [] })
            .catch((err: string) => { console.log(err) })
    }
    const deleteDB = (id: string) => {
        update(
            ref(database, 'forms/' + id), { Database: [] })
            .catch((err: string) => { console.log(err) })
    }

    return { store, saveToDatabase, getData, restoreDB }
}
export default useGenerate