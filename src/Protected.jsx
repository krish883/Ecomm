import React, { useState, useEffect } from 'react';
import Header from './Header'
function Protected(props){
    let Cmp=props.Cmp


    useEffect(()=>{

        if(!localStorage.getItem('user-info'))

        {
            window.location.href = '/register';
        }

    },[]) 
    return(

        <div>
            <Cmp/>
        </div>
    )
}

export default Protected