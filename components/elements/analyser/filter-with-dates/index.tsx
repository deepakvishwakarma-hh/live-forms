/* eslint-disable react-hooks/exhaustive-deps */
interface prop {
    DB: any
}

import Element from "./element";
import { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";

const FilterWithDates = ({ DB }: prop) => {

    // store seperate dates as string 
    const [dateSeperateFromDatabase, setDateSeperateFromDatabase] = useState<string[]>([]);
    //just set the upper arrey
    const __DateSeperateFromDatabase = [...new Set(dateSeperateFromDatabase) as any];

    useEffect(() => {
        // map Database extract dates and store to state
        const extractDates = DB?.map((value: any, index: number) => {
            // timestamp to date
            const date = new Date(value.additional.date);
            // date to human readable string date
            const humanReadableDate: string = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
            //storing to store : conditionally
            (dateSeperateFromDatabase.includes(humanReadableDate))
                ? null
                : setDateSeperateFromDatabase(prevState => [...prevState, humanReadableDate]);
        })
    }, [DB])

    const ElementsList = __DateSeperateFromDatabase?.map((value: string, index: number) => {
        return <Element value={value} index={index} DB={DB} key={index} />
    })

    return (
        <Flex flexDir={'column'}>
            <Text fontWeight={500} textTransform={'uppercase'} ml={5} letterSpacing={2}> Filter by Dates</Text>
            <Flex flexDir={'column'} >{ElementsList}</Flex>
        </Flex>
    )
};
export default FilterWithDates