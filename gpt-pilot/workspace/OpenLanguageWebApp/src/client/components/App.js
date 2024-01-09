import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from './common/Navbar';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import LessonBuilder from './lessonBuilder/LessonBuilder';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/lesson-builder' component={LessonBuilder} />
      </Switch>
    </Router>
  );
};

export default App;
