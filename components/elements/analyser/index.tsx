
interface prop {
    DB: any
}

import Top from "./top"
import UseLess from "./useless"
import FilterWithDates from "./filter-with-dates"

const Analyser = ({ DB }: prop) => {

    // while DB is'nt avail
    if (!DB) {
        return <UseLess />
    }

    return (
        <>
            <Top DB={DB} />
            <FilterWithDates DB={DB} />
        </>
    )
}
export default Analyser