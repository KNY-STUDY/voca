import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch"

export default function CreateDay () {
    const days = useFetch("http://localhost:3001/days")
    const navigate = useNavigate();
    
    
} 