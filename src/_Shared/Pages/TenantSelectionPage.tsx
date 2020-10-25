import React from 'react';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Paper} from "@material-ui/core";
import TenantSelector from "../Components/Form/TenantSelector";

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    alignSelf: 'center'
  }
}));

const TenantSelectionPage: React.FC = () => {
  const classes = useStyles();

  return(
      <Container className={classes.container} maxWidth="md">
        <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h3">
            Select a tenant
          </Typography>
          <TenantSelector />
        </Paper>

      </Container>

  )
};

TenantSelectionPage.displayName = "TenantSelectionPage";
export default TenantSelectionPage;