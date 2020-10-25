import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import LayoutProvider from '../Providers/LayoutProvider';
import TopNavigation from '../Components/Navigation/TopNavigation';
import LeftNavigation from '../Components/Navigation/LeftNavigation';
import Container from '@material-ui/core/Container';
import TopLoader from '../Components/Loader/TopLoader';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TenantsContext from '../Contexts/TenantsContext';
import TenantSelectionPage from '../Pages/TenantSelectionPage';

const Dashboard = React.lazy(() => import('../../Dashboard/Dashboard'));
const Applications = React.lazy(() => import('../../Applications/Applications'));
const Translations = React.lazy(() => import('../../Translations/Translations'));

const useStyles = makeStyles(() => ({
  mainContainer: {
    paddingTop: '4rem',
    paddingLeft: '5rem',
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();
  const { selectedTenant } = useContext(TenantsContext);

  return (
    <LayoutProvider>
      <Container component="header" maxWidth={false}>
        <TopNavigation />
      </Container>
      <Container component="aside" maxWidth={false}>
        <LeftNavigation />
      </Container>
      <React.Suspense fallback={<TopLoader />}>
        <Container component="main" className={classes.mainContainer} maxWidth={false}>
          {!selectedTenant && <TenantSelectionPage />}
          {selectedTenant && (
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/applications" component={Applications} />
              <Route path="/translations" component={Translations} />
            </Switch>
          )}
        </Container>
      </React.Suspense>
    </LayoutProvider>
  );
};

Main.displayName = 'Main';
export default Main;
