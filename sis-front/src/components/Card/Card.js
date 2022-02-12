import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';
import './Card.css';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Card = ({ product, children }) => { // 
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch();
    const classes = useStyles();
     
    return(
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Grid container direction='column'>
                        <Grid item>
                        <img title={product.category} width="140px" height='140px' src={product.image} alt={product.name_product}/>
                        <Typography variant='h6'>
                            {children}
                        </Typography>
                        <Typography variant='subtitle1'>
                            R$ {product.price.toFixed(2)}
                        </Typography>
                        </Grid>
                    
                    <div className="btn_green">
                    <span
                        onClick={()=>dispatch(cartActions.Add(cart, product))}
                    >
                    Adicionar <i className="fas fa-shopping-cart"></i>
                    </span></div>
                    </Grid>
                </Paper>
            </Grid>
        )
} 
export default Card;
