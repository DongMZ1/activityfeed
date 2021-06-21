//Component which render the list of calls
import React from 'react';
import {IoMdMailUnread} from 'react-icons/io';
import {VscMailRead} from 'react-icons/vsc'
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';
const ActivityFeed = ({allcalls, fetchdata, setshowdetail}) =>{
   if(!allcalls) return <div style={{display:'flex', height:'400px'}}>
       <h2 style={{margin:'auto'}}> Loading...</h2>
   </div>
   return <div className='allcalls'> 
     <TransitionGroup>   
        {allcalls.map(eachcall => 
        <CSSTransition appear classNames='item' timeout={300}>
             <Eachcall setshowdetail={setshowdetail} fetchdata={fetchdata} eachcall={eachcall} />
        </CSSTransition>)}  
    </TransitionGroup>      
   </div>
}

export default ActivityFeed;

const Eachcall = ({eachcall, fetchdata, setshowdetail}) =>{
    const updatecall = async () =>{
        const res = await fetch(`https://aircall-job.herokuapp.com/activities/${eachcall.id}`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    is_archived: true
                  }
            ),
        })
        fetchdata();
    }

    const date = eachcall.created_at.substring(0, 10);
    const time = eachcall.created_at.substring(12, 20);
    return  <div className='eachcall'>
          <div className='notchecked' onClick={()=>setshowdetail(state => !state)}>
              {date} at {time}
          </div>
          <div onClick={updatecall} className='checked'>
              {eachcall.is_archived? <VscMailRead fontSize='18px' />:
              <React.Fragment>
                <IoMdMailUnread fontSize='18px' /><span>Archive without check</span>
              </React.Fragment>
               }
        </div>
    </div>
}
