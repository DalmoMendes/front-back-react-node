import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Grid, Typography, List, makeStyles } from '@material-ui/core/';
import Item from '../components/Item/Item';
import Card from '../components/Card/Card';
import './Pages.css';

const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: 'center',
      margin: 'auto',
      width: '100%',
      display: 'flex',
      flexwrap: 'wrap',
      marginTop: '5px',
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center'
    },
  }));

const HomePage = () => {
    const products = useSelector(state => state.products)
    const classes = useStyles();

    const categorys = products.map(
        category => {
            const container = { };
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify)
                    .filter(function(item, index, arr){
                        return arr.indexOf(item, index + 1) === -1;
                    })
                    .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count = { };

    for(let i = 0; i < arrayCategory.length; i++){
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }

    /*
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        <div className='Category'>Categorias</div>
                    </Typography>
                    <List>
                        {category.map(
                            category => {
                                return (
                                    <Item
                                        key = {category.id} 
                                        name= {category.name}details={count[category.name]}
                                    />
                                )
                            }
                        )}
                    </List>
                </Paper>
            </Grid>
    */ /* container */

    return(
        <Grid container spacing={3} className={classes.root}>
            <Grid container container_box xs={9} spacing={3} className={classes.root}>
                {products.map(item => {
                    return(
                        <Card
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default HomePage;
