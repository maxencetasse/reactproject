//Importation des modules
import { Route, Switch } from 'react-router-dom';

//Importation des pages
import Home from '../../pages/home';
import Sein from '../../pages/sein';
import Colon from '../../pages/colon';
import Uterus from '../../pages/uterus';

function Main(props){

  const useStyles = props.styles;
  const classes = useStyles;

  return(
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        <Route path="/Sein">
          <Sein />
        </Route>
        <Route path="/Colon">
          <Colon />
        </Route>
        <Route path="/Uterus">
          <Uterus />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

export default Main