import React, {useState} from 'react';
import {FaInbox} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
const Menu = () =>{
    const [isinbox, setisinbox] = useState(true);
    
    return<div className='menu'>
        <div onClick={()=>setisinbox(true)} style={{border: isinbox? 'black 2px solid' : 'none', padding:'2px'}}>inbox</div>
        <div onClick={()=>setisinbox(false)} style={{border: isinbox? 'none' : 'black 2px solid', padding:'2px'}}>all calls</div>
    </div>
}

export default Menu;