import { useState, useEffect } from "react";

export default function useFetch (url) {
    const [data, setData] = useState([]);

    useEffect(()=> { //랜더링이 되고 api호출
        fetch(url)
        .then(res => {
            return res.json ()
        })
        .then(data => {
            setData(data);
        })
    }, [url]); 

    return data;
}