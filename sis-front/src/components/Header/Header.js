import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from '../Cart';
import './Header.css';

const Header = () => {
    return(
        <Grid className='Grid' container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h4'>
                <div className='Logo'>Padaria do Zé!</div>
            </Typography>
            <Link to="/">
                <span className='btn'><i className="fas fa-home"></i> Home</span>
            </Link>
            <Link to="/contato">
                <span className='btn'><i className="fas fa-users"></i> Contatos</span>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
