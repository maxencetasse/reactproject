import { Link } from "react-router-dom";

function MenuItem(props){
  return(<li>
    <Link to={"/" + props.label}>
      {props.label}
    </Link>
  </li>
  );
}

export default MenuItem;