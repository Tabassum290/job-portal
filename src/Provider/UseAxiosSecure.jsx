import axios from "axios";
import UseAuth from "../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosInstance = axios.create({
    baseURL:'http://localhost:4000',
    withCredentials: true
})
const UseAxiosSecure = () => {
    const {signOutUser} = UseAuth();
    const navigate = useNavigate();
    useEffect (() => {
    axiosInstance.interceptors.response.use(response =>{
        return response;
    },error=>{
        console.log('error caught in interceptor');
if(error.status === 401 || error.status === 403){
    console.log('need to logput user');
    signOutUser()
    .then(() =>{
        console.log('log out user');
        navigate ('/signin');
    })
    .catch(error => console.log(error))
}

return Promise.reject(error);
    })
    },[])
    return axiosInstance;
};

export default UseAxiosSecure;