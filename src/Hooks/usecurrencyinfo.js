import {useEffect, useState} from "react";

function usecurrencyinfo(currency){

    const [data, setData] = useState({});
    useEffect(() =>{
        // fetch(` https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch('https://api.exchangerate-api.com/v4/latest/{currecy}.json')
        .then((res) => res.json())
        .then((res) =>setData(res[currency]))
    },[currency])

    console.log(data)
    return data
}

export default usecurrencyinfo;