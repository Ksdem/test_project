import axios from "axios";
import {useState} from "react";


const useLoading = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    return {
        isLoading, error, setError, setLoading
    }

}


export default useLoading;
