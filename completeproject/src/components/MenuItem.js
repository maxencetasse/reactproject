import { Link } from "react-router-dom";

function MenuItem(props){
  return(<div>
    <Link to={"/" + props.label}>
      {props.label}
    </Link>

  </div>
  );
}

export default MenuItem;