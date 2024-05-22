import axios from 'axios';

const slpeep=(delay)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,delay);
    })
}

axios.defaults.baseURL='http://localhost:5000';

axios.interceptors.request.use(
    config=>{
        
    }
)