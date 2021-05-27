import MenuItem from './MenuItem.js';

let listeSousMenu = ["Accueil", "Sein", "Colon", "Uterus"];

listeSousMenu = listeSousMenu.map((sousMenu, index) =>
  <li key={index}>
    <MenuItem index={index} label={sousMenu}>
    </MenuItem>
  </li>
);

function MenuList(props){
  return (
    <div>
      <nav>
        <ul>
          {listeSousMenu}
        </ul>
      </nav>
    </div>
  );
}

export default MenuList