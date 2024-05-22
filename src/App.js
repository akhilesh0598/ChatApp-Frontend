import HomePage from './Components/Home/HomePage';
import {useLocation,Outlet} from 'react-router-dom';
import Navbar from './Components/Home/Navbar';

function App() {

  var location=useLocation();

  return (
    <>
    <div className='container'>
        {
            location.pathname==='/'?<HomePage />:(
                <>
                <Navbar/>
                <div className='container-fluid' style={{marginTop:'7em'}}>
                    <Outlet/>
                </div>
                </>
            )
        }
        </div>
        </>
  );
}

export default App;
