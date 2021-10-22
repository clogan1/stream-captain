import '../App.css'
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar'
import MyDashboard from './Pages/MyDashboard'
import AddEntry from './Pages/AddEntry'
import Login from './Pages/Login'
import MyHistory from './Pages/MyHistory'
import { useSelector } from "react-redux";

function App() {
    const user = useSelector((state) => state.user.user);

    console.log(user)

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
