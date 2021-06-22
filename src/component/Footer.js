import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'
import {GrApps} from 'react-icons/gr'
const Footer = ({numberofunread}) =>{
    return <div className='footer'>
          <div style={{position:'relative'}}><MdCall /><span className='callicon'>{numberofunread}</span></div>
          <div style={{color:'grey'}}><BsFillPersonLinesFill /></div>
          <div style={{color:'grey'}}><GrApps /></div>
          <div style={{color:'grey'}}><AiFillSetting /></div>
    </div>
}

export default Footer;