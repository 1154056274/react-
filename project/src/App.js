import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import Login from './pages/Login'
import Exam from './pages/Exam'


function App() {
  return (
    <div className="App">
      <Router >
      <Switch>
        <Route exact  path='/'   >
          {
           sessionStorage.getItem('user')?<Redirect to='/exam'/>:<Redirect to='/login'/> 
          }
        </Route>
        <Route path='/login'  component={Login} >
        {
           sessionStorage.getItem('user')?<Redirect to='/exam'/>:''
          }
        </Route>
        <Route path='/exam'  component={Exam} >
        {
           sessionStorage.getItem('user')?'':<Redirect to='/login'/> 
          }
        </Route>
        </Switch> 
      </Router>
     
    </div>
  );
}

export default App;
