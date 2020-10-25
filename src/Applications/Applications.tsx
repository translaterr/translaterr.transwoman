import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ApplicationsOverviewPage from "./Pages/ApplicationsOverviewPage";
import ApplicationsCreatePage from "./Pages/ApplicationsCreatePage";

const Applications: React.FC = () => {

  return (
      <Switch>
        <Route exact path="" component={ApplicationsOverviewPage} />
        <Route path="create" component={ApplicationsCreatePage} />
      </Switch>
  )
};

Applications.displayName = "Applications";
export default Applications;