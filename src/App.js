import logo from './logo.svg';
import './App.css';
import Counter from './components/StarGame/counter';
import PageNotFound from './components/StarGame/PageNotFound';
import { StarMatch } from './components/StarGame/starmatch';
import { BrowserRouter as Router, Route, Switch  ,Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCForm from './components/Courses/components/AddCForm';
import Navbaar from './components/Courses/components/navbar';
import ShowCourses from './components/Courses/components/ShowCourses';


function App() {
  return (
    <div className="App">


  <Router>
  <Navbaar/>
    <Switch>
   
      <Route exact path="/" component={ShowCourses}></Route>
      <Route path ="/counter" component={Counter}></Route>
      <Route path ="/addcourse" component={AddCForm}></Route>
      <Route component={PageNotFound}></Route>
    </Switch>
    </Router>       
    
   {/* <AddCForm/> */}
   {/* <ShowCourses/> */}
    
    </div>
  );
}

export default App;
