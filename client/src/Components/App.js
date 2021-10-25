import '../App.css'
import { Switch, Route } from "react-router-dom";
import { useEffect } from 'react';
import NavBar from './NavBar'
import MyDashboard from './Pages/MyDashboard'
import AddEntry from './Pages/AddEntry'
import Login from './Pages/Login'
import MyHistory from './Pages/MyHistory'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from '../Redux/Actions/index';

function App() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch()
    // console.log(user)

    useEffect(()=>{
        dispatch(getLoggedInUser())
    }, [])

  if(!user) return (<Login />)  

  return (
   <>
   <NavBar />
   <Switch>
      <Route path="/add">
          <AddEntry />
      </Route>
      <Route path="/myhistory">
          <MyHistory />
      </Route>
      <Route path="/">
          <MyDashboard />
      </Route>
  </Switch>
  </>
  );
}

export default App;
