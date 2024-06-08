import {createBrowserRouter} from 'react-router-dom'
import App from '../../App'
import LoginForm from '../../Components/Authentication/LoginForm';
import RegisterForm from '../../Components/Authentication/RegisterForm';
import ForgetPasswordForm from '../../Components/Authentication/ForgetPasswordForm';
import ResetPasswordForm from '../../Components/Authentication/ResetPasswordForm';

const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>
            
        },
        {
            path:'/login',
            element :<LoginForm/>
        },
        {
            path:'/signup',
            element :<RegisterForm/>
        },
        {
            path:'/forget-password',
            element :<ForgetPasswordForm/>
        },
        {
            path:'/reset-password',
            element :<ResetPasswordForm/>
        }
    ]
)
export default router;