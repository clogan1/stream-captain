import '../App.css'
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar'
import MyDashboard from './Pages/MyDashboard'
import AddEntry from './Pages/AddEntry'
import Login from './Pages/Login'
import MyHistory from './Pages/MyHistory'

function App() {


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
