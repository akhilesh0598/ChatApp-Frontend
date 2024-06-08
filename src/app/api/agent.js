import axios from 'axios';
import { useSelector } from 'react-redux';
const slpeep=(delay)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,delay);
    })
}

axios.defaults.baseURL='http://localhost:5000';

axios.interceptors.request.use(
    config=>{
        const token=useSelector(state=>state.common.token);
        if(token)
            config.headers.Authorization=`Bearer ${token}`;
        return config;
    }
)
 
axios.interceptors.response.use( async (response)=>{
    await slpeep(1000);
    return response;
},(error=>{
    const {status}=error.response;

    switch(status)
    {
        case 401:
            console.log('unauthorized');
        break;
    }
    return Promise.reject(error);

}))

const requests={
    get:(url)=>axios.get(url).then((response=>response.data)),
    post:(url,body)=>axios.post(url,body).then((response)=>response.data)
}

const Account={
    current:()=>requests.get('/account'),
    login:(user)=>requests.post('/login',user),
    register:(user)=>requests.post('/register',user)
}

const agent={
    Account
}

export default agent;

