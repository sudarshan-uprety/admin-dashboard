import { AXIOS } from '../config';
import { toast } from 'react-toastify';

export const registerAPI = async (params) => {
    try{
        console.log('params before sending: ', params);
    const data = await AXIOS.post('/register/user', Object.fromEntries(params))
    return data
    }
    catch(e){
        console.log(e)
        toast.error(e.response.data.message)
    }
}

export const loginAPI = async (params) => {
    try{
        console.log('params before sending: ', params);
    const data = await AXIOS.post('/user/login', Object.fromEntries(params))
    if (data.status === 200){
        toast.success(data.data.message)
    }
    return data
    }
    catch(e){
        toast.error(e.response.data.message)
    }
}
