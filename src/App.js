import logo from './logo.svg';
import './App.css';
// import Counter from './components/StarGame/counter';
// import PageNotFound from './components/StarGame/PageNotFound';
// import { StarMatch } from './components/Stargame/starmatch';
// import { BrowserRouter as Router, Route, Switch  ,Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCForm from './components/Courses/components/AddCForm';


function App() {
  return (
    <div className="App">


  {/* <Router>
    <Switch>
      <Route exact path="/" component={StarMatch}></Route>
      <Route path ="/counter" component={Counter}></Route>
      <Route component={PageNotFound}></Route>
    </Switch>
    </Router>        */}

   <AddCForm/>
    
    </div>
  );
}

export default App;
