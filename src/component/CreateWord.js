import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    //단어추가
    function onSubmit(e) {
        e.preventDefault();
        // console.log(engRef.current.value); 
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);
        //current 해당 요소에 접근 할 수 있다. value는 input 입력값을 얻을수 있다.

        if(!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3001/words/`, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({ //=> json 문자열로 변환
                    day : dayRef.current.value,
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone : false,
                }),
            }).then (res =>{
                if(res.ok){
                    alert("생성이 완료되었습니다.");
                    history.push(`/day/${dayRef.current.value}`);
                    setIsLoading(false);
                }
            });
        }
       

    }

    //useRef(hooks) DOM에 접근할 수 있도록 해줌 예를들어 스크롤 위치 포커스를 줄때 사용할 수 있다. 
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef} />
        </div>
        <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef} />
        </div>
        <div className="input_area">
            <label>Day</label>
            <select ref={dayRef}>
                {days.map(day => (
                    <option key={day.id} value={day.day}>
                        {day.day}
                    </option>
                ))}
                
            </select>
        </div>
        <button style={{opacity: isLoading ? 0.3: 1,}}> {isLoading ? "saving..." : "저장"} </button>
    </form>
    );

}