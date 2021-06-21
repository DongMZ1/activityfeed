import React, {useState} from 'react';
import {FaInbox} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
const Menu = ({isinbox, setisinbox, fetchdata}) =>{

    const resetdata = async () =>{
        const res = await fetch('https://aircall-job.herokuapp.com/reset');
        fetchdata();
    }
    
    return<div className='menu'>
        <div onClick={()=>setisinbox(true)} style={{border: isinbox? 'black 2px solid' : 'transparent 2px solid', padding:'2px'}}>
           <FaInbox fontSize='15px' /> <span style={{fontSize:'22px'}}>inbox</span>
        </div>
        <div onClick={()=>setisinbox(false)} style={{border: isinbox? 'transparent 2px solid' : 'black 2px solid', padding:'2px'}}>
            <BiPhoneCall fontSize='15px' /><span style={{fontSize:'22px'}}>all calls</span>
        </div>
        <div onClick={resetdata} style={{border: 'transparent 2px solid', padding:'2px'}}>
            <span style={{fontSize:'15px'}}>Reset data(test only)</span>
        </div>
    </div>
}

export default Menu;