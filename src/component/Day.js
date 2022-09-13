//import dummy from "../db/data.json";
//import { useState } from "react";
//import { useEffect } from "react";
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
    const  { day } = useParams(); //주소창에 문자들이 들어온다
    //const wordList = dummy.words.filter(word => word.day === Number(day));
    //const [words, setWords] = useState([]);
    // useEffect(()=> { //랜더링이 되고 api호출
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res => {
    //         return res.json ()
    //     })
    //     .then(data => {
    //         setWords(data);
    //     })
    // }, [day]); //day라는 특정값을 입력 (의존성배열) 최신값 보장
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    
    return (
        <>
        <h2>Day {day}</h2>
        {words.length === 0 && <span>Loading</span>}
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id} />
                ))}    
            </tbody>
        </table>
        </>
    ); 
}