import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'
import {SiAppstore} from 'react-icons/si'
import {RiAppsFill} from 'react-icons/ri'
const Footer = ({numberofunread}) =>{
    return <div className='footer'>
          <div style={{position:'relative'}}><MdCall /><span className='callicon'>{numberofunread}</span></div>
          <div style={{color:'grey'}}><BsFillPersonLinesFill /></div>
          <div className='centericon'><RiAppsFill style={{color:'white'}} /></div>
          <div style={{color:'grey'}}><SiAppstore /></div>
          <div style={{color:'grey'}}><AiFillSetting /></div>
    </div>
}

export default Footer;