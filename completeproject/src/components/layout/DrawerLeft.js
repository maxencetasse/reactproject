//Importation des modules
import React from "react";
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuList from "../MenuList";

function DrawerLeft(props) {
    const useStyles = props.componentstyles;
    const classes = useStyles;
    const theme = useTheme();
    const [open, setOpen] = React.useState(props.open);
  
    const handleDrawerClose = () => {
      setOpen(false);
      console.log('DrawerLeft');
      console.log(open);
    };
  
    return (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
          <MenuList></MenuList>
      </Drawer>      
    );
  }

  export default DrawerLeft;