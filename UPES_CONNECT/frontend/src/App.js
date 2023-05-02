
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Main from "./component/Main";
import Signup from "./component/Singup";
import Login from "./component/Login";
import User1 from './component/User1';
import User2 from './component/User2';

const UserType = {
  Public: "public",
  Basic: "Basic",
  Standard: "Standard",
  Premium: "Premium"
}

const CurrentUser = UserType.Premium;

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
        <Route path="/user1" element={<BasicAccess><User1 /></BasicAccess>}></Route>
        <Route path="/user2" element={<User2/>}></Route>
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
    </>
  );

}
function BasicAccess({ children }) {
  if (CurrentUser === UserType.Basic) {
    return <>{children}</>
  }
  else {
    return <Navigate to={"/"} />
    // return <><center><h1>Sorry No Access</h1></center></>
  }
}
export default App;
