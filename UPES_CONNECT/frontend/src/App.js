
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Main from "./component/Main";
import Signup from "./component/Singup";
import Login from "./component/Login";
import Mail from './component/Mail';

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {user && <Route path="/welcome" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/getStarted" element={<Navigate replace to="/login" />} />
        <Route path="/mail" element={<Mail/>}></Route>
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
    </>
  );

}

export default App;
