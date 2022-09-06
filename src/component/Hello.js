import {useState} from "react";

const Hello = ({age}) => {
    const [name , setName] = useState("Mike");
    const msg = age > 19 ? " 성인입니다 " : "미성년입니다.";

    function changeName() {
        setName(name === "Mike" ? "Jane" : "Mike");
    }

    return (
        <div>
           <h2 id="name">{name} ({age}) : {msg}</h2> 
           <userName name={name} />
           <button onClick={changeName}>Change</button>
        </div>
    );
};


export default Hello;