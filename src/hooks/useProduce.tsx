import jwt from 'jsonwebtoken'
import * as Redux from "../../state-store"
import database from "../../firebase.config"
import * as firebaseDB from "firebase/database"

const useProduce = () => {

    const isInDevelopmentMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

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

        // all name attribute in Meta;
        const everyNameAttributeUsedInMeta: string[] = []

        //storing names in arr;
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

        // Cheaking is any name-attribute is inluded in database
        const findDotInNameAttribute = () => {
            let isDotPresent: boolean = false;
            schema.Client.__custom.map((value) => {
                if (value.name.includes('.')) {
                    isDotPresent = true
                }
            })
            return isDotPresent
        }

        const isDotInNameAttribute = findDotInNameAttribute()
        const isMetaEmpty = schema.Client.__custom.length == 0;
        const isNameAttributeEmpty = filterEmptyNameAttributes()
        const isTitleDefault = schema.Client.__header.title == "untitled"
        const isDuplicateNameAttributePresence = findDuplicateNameAttribute()
        const isSubTitleDefault = schema.Client.__header.subtitle == "untitled"

        // for re-cheaking code
        const OBSTACLE: string[] = []
        // conditionally pushing obstacles
        isMetaEmpty && OBSTACLE.push('Form is empty!')
        isTitleDefault && OBSTACLE.push('Form title is empty!')
        isSubTitleDefault && OBSTACLE.push('Form sub title is empty!')
        isNameAttributeEmpty && OBSTACLE.push('Cheak your name attributes!')
        isDuplicateNameAttributePresence && OBSTACLE.push('Cheak your duplicate name attributes!')
        isDotInNameAttribute && OBSTACLE.push('Cheak your name attributes, Remove " . " (Dot) from name attributes!')
        //store obstacles
        dispatch(Redux.alerts({ type: 'formCreated', payload: OBSTACLE }))

        return isNameAttributeEmpty || isMetaEmpty || isDuplicateNameAttributePresence || isTitleDefault || isSubTitleDefault || isDotInNameAttribute
    }

    const Produce = () => {

        const isObstcle = preProductionModel()

        const { ref, set } = firebaseDB

        if (!isObstcle) {

            isInDevelopmentMode && alert('form deployed')

            const targetRef = ref(database, 'forms/' + schema.id);
            const save = set(targetRef, schema);
            save.catch(err => alert(err))
        }
    }

    return { Produce }
}
export default useProduce