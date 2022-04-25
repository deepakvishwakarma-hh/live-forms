import React from 'react'

export default function useDateConvertion(date: any) {

    const param = new Date(date);

    var month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const day = param.getDate();
    const year = param.getFullYear();
    const monthIndex = param.getMonth();

    return `${day} ${month[monthIndex]} ${year}`;


}
