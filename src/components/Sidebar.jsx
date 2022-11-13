import { useState } from "react";
import "./ModelSelection.css"
import {jsonMock} from "./data"
import { Collapse, Drawer, List, ListItem, ListItemText} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

function Sidebar(){

    const [openCollapse, setOpenCollapse] = useState(false);    

    function handleOpenSettings(){
        setOpenCollapse(!openCollapse);
    }
    return(
        <Drawer>
            <h1>pedro</h1>
            <ListItem button onClick={handleOpenSettings}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Settings" />
              {openCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </Drawer>
    )
}
export default Sidebar