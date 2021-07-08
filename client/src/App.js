import React from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom';import StreamCreate from './components/Streams/StreamCreate/StreamCreate';
import StreamDelete from './components/Streams/StreamDelete/StreamDelete';
import StreamEdit from './components/Streams/StreamEdit/StreamEdit';
import StreamShow from './components/Streams/StreamShow/StreamShow';
import StreamList from './components/Streams/StreamList/StreamList';
import Header from './components/Header/Header';
import history from './history';

function App() {
  return (
    <div className="ui container">
      
      <Router history={history}>
      <Header/>
      <div>
        <Switch>
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/new" exact component={StreamCreate}/>
          <Route path="/streams/delete/:id" exact component={StreamDelete}/>
          <Route path="/streams/:id" exact component={StreamShow}/>
          <Route path="/streams/edit/:id" exact component={StreamEdit}/>
        </Switch>        
      </div>
      </Router>
    </div>
  );
}

export default App;
