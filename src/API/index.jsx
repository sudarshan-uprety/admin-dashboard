import { data } from 'autoprefixer';
import axios from 'axios';
import { AXIOS } from '../config';
import { toast } from 'react-toastify';
import { json } from 'react-router-dom';

export const registerAPI = async (params) => {
    try{
        console.log('params before sending: ', params);
    const data = await AXIOS.post('/register/user',Object.fromEntries(params))
    return data
    }
    catch(e){
        console.log(e)
        toast.error(e.response.data.errors)
    }
}
