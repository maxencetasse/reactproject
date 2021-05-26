import MenuItem from './MenuItem.js';

let listeSousMenu = ["Accueil", "Sein", "Colon", "Utérus"];

listeSousMenu = listeSousMenu.map((sousMenu) =>
  <ul>
    <MenuItem key={sousMenu.toString()} label={sousMenu}>
    </MenuItem>
  </ul>
);

function MenuList(props){
  return (
    <div>
      {listeSousMenu}
    </div>
  );
}

export default MenuList