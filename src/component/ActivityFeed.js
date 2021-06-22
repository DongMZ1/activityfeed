import React from 'react';
import Calls from './Calls'
import {BsArchive} from 'react-icons/bs'
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';

const ActivityFeed = ({isinbox, allcalls, fetchdata, setshowdetail, setdetailedcallcontent}) =>{
    const updateallcalls = async () =>{
        allcalls.forEach(async(eachcall) => {
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
        });
        });
        fetchdata();
    }
    return <div className='activityfeed'>
    <SwitchTransition>
        <CSSTransition key={isinbox ? "hi!" : "Hello!"}
       addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
        classNames='item' timeout={300} > 
      {isinbox ? 
       <React.Fragment>
        <div className='archiveallcalls' onClick={updateallcalls}>
      <BsArchive fontSize='12px' /> <span style={{fontSize:'15px'}}>Archive all calls</span>
       </div>
      <Calls setdetailedcallcontent={setdetailedcallcontent}
       setshowdetail={setshowdetail} fetchdata={fetchdata} 
       allcalls={(allcalls.filter(eachcall => eachcall.is_archived === false))} />
       </React.Fragment>
      : <Calls setdetailedcallcontent={setdetailedcallcontent} setshowdetail={setshowdetail} fetchdata={fetchdata} allcalls={allcalls} />}
     </CSSTransition>
     </SwitchTransition>
    </div>
}

export default ActivityFeed;