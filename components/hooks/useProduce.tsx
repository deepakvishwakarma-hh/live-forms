import jwt from 'jsonwebtoken'
import Router from 'next/router';
import * as Redux from "../../state-store"
import database from "../../firebase.config"
import * as firebaseDB from "firebase/database"

const useProduce = () => {
    const dispatch = Redux.useAppDispatch();
    const meta = Redux.useAppSelector(store => store.__generator.__meta);

    // decoded ~ with json web token
    const user = jwt.decode(localStorage.getItem('token') as string);

    const schema = {
        id: + new Date(),
        Client: { ...meta },
        Database: [] as any[],
        Creator: { ...user as object }
    }

    // finding obstacle ;
    const preProductionModel = () => {

        const everyNameAttributeUsedInMeta: string[] = []

        //storing names in arr
        schema.Client.__custom.map((value) => {
            everyNameAttributeUsedInMeta.push(value.name)
        })

        // Cheaking is any name-attribute is similar to blank string
        const filterEmptyNameAttributes = () => {
            const arr = everyNameAttributeUsedInMeta.filter(item => item == '');
            return (arr.length == 0) ? false : true
        }

        // Cheaking is any name-attribute is similar to each other
        const findDuplicateNameAttribute = () => {
            const settedArr = [... new Set(everyNameAttributeUsedInMeta) as any]
            return settedArr.length !== everyNameAttributeUsedInMeta.length;
        }

        const isNameAttributeEmpty: boolean = filterEmptyNameAttributes()
        const isMetaEmpty: boolean = schema.Client.__custom.length == 0;
        const isDuplicateNameAttributePresence: boolean = findDuplicateNameAttribute()
        const isTitleDefault: boolean = schema.Client.__header.title == "default"
        const isSubTitleDefault: boolean = schema.Client.__header.subtitle == "default"

        // for re-cheaking code

        if (isMetaEmpty) { console.log('Please add Input Box') }
        else {
            if (isNameAttributeEmpty) { console.log('Cheak Name Attribute is Empty') }
            else {
                if (isDuplicateNameAttributePresence) { console.log(' Duplicate Name Attribute found') }
                else {
                    if (isTitleDefault) { console.log('Please set Title') }
                    else {
                        if (isSubTitleDefault) { console.log('Please set subTitle') }
                    }
                }
            }
        }

        return isNameAttributeEmpty || isMetaEmpty || isDuplicateNameAttributePresence || isTitleDefault || isSubTitleDefault
    }

    const postProductionModel = () => {

        alert('produced')

        dispatch(Redux.alerts({ type: 'formCreated', payload: true }))

        setTimeout(() => {

            dispatch(Redux.alerts({ type: 'formCreated', payload: false }))

            Router.push('/survey/' + schema.id)

        }, 4000)

    }


    const Produce = () => {

        const isObstcle = preProductionModel()

        const { ref, set } = firebaseDB


        if (!isObstcle) {

            const targetRef = ref(database, 'forms/' + schema.id);
            const save = set(targetRef, schema);
            save.then(postProductionModel)
            save.catch(err => alert(err))

        }
    }

    return { Produce }
}
export default useProduce