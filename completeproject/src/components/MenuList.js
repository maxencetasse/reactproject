//Importation des modules
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";

let listMenu = ["Accueil", "Sein", "Colon", "Uterus"];

listMenu = listMenu.map((elementMenu, index) =>
  <Link key={index} to={"/" + elementMenu}>
    <ListItem button >
      <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <MailIcon />}</ListItemIcon>
      <ListItemText primary={elementMenu}/>
    </ListItem>
  </Link>
);

function MenuList(props){
  return (
    <List>
      {listMenu}
    </List>
  );
}

export default MenuList