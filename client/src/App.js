import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'; 

import Home from './pages/Home/Home';
import CreatePost from './pages/CreatePost/CreatePost';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/create-post" component={CreatePost}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
