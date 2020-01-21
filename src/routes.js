import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NewClient from './pages/NewClient';
import EditClient from './pages/EditClient';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/new-client" component={NewClient} />
        <Route path="/edit-client/:id" component={EditClient} />
      </Switch>
    </BrowserRouter>
  );
}
