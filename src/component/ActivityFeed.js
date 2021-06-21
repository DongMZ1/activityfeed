import React from 'react';
import Calls from './Calls'
import {BsArchive} from 'react-icons/bs'
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';

const ActivityFeed = ({isinbox, allcalls, fetchdata, setshowdetail}) =>{
    return <div className='activityfeed'>

        <CSSTransition appear in={isinbox} classNames='item' unmountOnExit timeout={300} > 
         <div className='archiveallcalls'>
            <BsArchive fontSize='12px' /> <span style={{fontSize:'15px'}}>Archive all calls</span>
         </div>
        </CSSTransition>
      
     {isinbox && <Calls setshowdetail={setshowdetail} fetchdata={fetchdata} allcalls={(allcalls.filter(eachcall => eachcall.is_archived === false))} />}
     {!isinbox && <Calls setshowdetail={setshowdetail} fetchdata={fetchdata} allcalls={allcalls} />}

    </div>
}

export default ActivityFeed;