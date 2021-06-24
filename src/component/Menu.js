import React, {useState} from 'react';
import {FaInbox} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import {GrPowerReset} from 'react-icons/gr'
const Menu = ({isinbox, setisinbox, fetchdata}) =>{

    const resetdata = async () =>{
        const res = await fetch('https://aircall-job.herokuapp.com/reset');
        await fetchdata();
    }
    
    return<div className='menu'>
        <div className='activity'>Activity</div>
        <div onClick={()=>setisinbox(true)} style={{borderBottom: isinbox? 'black 4px solid' : 'transparent 4px solid', padding:'2px'}}>
           <FaInbox fontSize='15px' /> <span style={{fontSize:'20px'}}>inbox</span>
        </div>
        <div onClick={()=>setisinbox(false)} style={{borderBottom: isinbox? 'transparent 4px solid' : 'black 4px solid', padding:'2px'}}>
            <BiPhoneCall fontSize='15px' /><span style={{fontSize:'20px'}}>All calls</span>
        </div>
        <div onClick={resetdata} style={{border: 'transparent 4px solid', padding:'2px'}}>
           <GrPowerReset fontSize='15px' /><span style={{fontSize:'20px'}}>Reset</span>
        </div>
    </div>
}

export default Menu;