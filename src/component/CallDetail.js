import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'
const CallDetail = ({setshowdetail, detailedcallcontent}) =>{

    const date = detailedcallcontent.created_at.substring(0, 10);
    const time = detailedcallcontent.created_at.substring(11, 20);
       return <div className='calldetail'>
           <div className='closedetailIcon' onClick={()=>setshowdetail(false)}><AiOutlineCloseCircle /></div>
           <div><b>ID:</b> {detailedcallcontent.id}</div>
           <div><b>Date: </b>{date} at {time}</div>
           <div><b>Direction: </b>{detailedcallcontent.direction}</div>
           <div><b>From: </b>{detailedcallcontent.from}</div>
           <div>{detailedcallcontent.to? <React.Fragment><b>To:</b> {detailedcallcontent.to}<br /></React.Fragment> : null}</div>
           <div><b>Via: </b>{detailedcallcontent.via}</div>
           <div><b>Duration: </b>{detailedcallcontent.duration} minutes</div>
           <div><b>Call type: </b>{detailedcallcontent.call_type}</div>

       </div>
}

export default CallDetail;