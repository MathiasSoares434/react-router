import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import CustomersCard from '../component/CustomerCard' 
import { makeStyles } from '@mui/styles';

const useStyle= makeStyles()

const Customers= () =>{
    const classes= useStyle()
    const [customers, setCustomers]= useState([])
    

    
    useEffect(() =>{
        axios.get('https://reqres.in/api/users')
        .then((response)=>{
            const { data }= response.data
            setCustomers(data)
        })
    }, [])
    //XS - EXTRA SMALL
    //SM - SMALL
    //MD - MEDIUM
    //LG - LARGE
    //XL - EXTRA LARGE
    
    return (
    <>
    <h1>Customers</h1>

    
    <Grid container>
        {
        
        customers.map(item =>(
            <Grid item xs={12} md={6} lg={3}>
                <CustomersCard
                    name={item.first_name}
                    lastname= {item.last_name}
                    email={item.email}
                    avatar={item.avatar}
                    className={classes.card}
                    />
            </Grid>
                ))
                
        }
    </Grid>


    </>
    )
}

export default Customers