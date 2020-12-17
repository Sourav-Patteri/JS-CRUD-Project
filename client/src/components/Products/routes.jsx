  
import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from './index';
import New from './New';
import Edit from './Edit';
import Destroy from './Destroy';
import Show from './Show';

const Routes = () => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/products" component={Index}/>

      {user && user.token ? (
        <>
          <Route exact path="/products/new" component={New}/>
          <Route exact path="/products/edit/:id" component={Edit}/>
          <Route exact path="/products/destroy/:id" component={Destroy}/>
          <Route exact path="/products/show/:id" component={Show}/>
        </>
      ) : null}
    </Switch>
  );
}
 
export default Routes;