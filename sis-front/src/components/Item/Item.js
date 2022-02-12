import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';
import './Item.css';

const Item = ({ name, details }) => {
    return(
        <div className='ListItem'>
        <ListItem>
            <div className='ListItem_div70'><ListItemText primary={name} /></div>
            <div className='ListItem_div30'><ListItemText secondary={details} /></div>
        </ListItem>
        </div>
    )
}

export default Item;
