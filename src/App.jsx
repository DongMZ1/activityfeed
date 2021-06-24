import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "regenerator-runtime/runtime";

import Header from './Header.jsx';
import Menu from './component/Menu'
import ActivityFeed from './component/ActivityFeed.js';
import CallDetail from './component/CallDetail.js';
import Footer from './component/Footer';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const App = () => {

  //if it is inbox then return true, if it is in all calls return false
  const [isinbox, setisinbox] = useState(true);

  //allcalls from fetch api
  const [allcalls, setallcalls] = useState([]);

  //information pass to detail of a all 
  const [detailedcallcontent, setdetailedcallcontent] = useState();

  //show detail or activityfeed
  const [showdetail, setshowdetail] = useState(false);
  
  const fetchdata = async () =>{ 
      const response = await fetch('https://aircall-job.herokuapp.com/activities', {
        method:'GET'
      });
      const responsedata = await response.json();
      setallcalls(responsedata);
    }
  
  useEffect( () =>{
     async function fetchdata(){  while(allcalls.length ===0){
            const response = await fetch('https://aircall-job.herokuapp.com/activities', {
              method:'GET'
            });
            const responsedata = await response.json();
            setallcalls(responsedata);
      }
    }
    fetchdata();
    },[]
  );
  
  
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        {/**----------------------show detail is a boolean true === activity feed // false detail of specific call */}
        <SwitchTransition>
          <CSSTransition key={showdetail ? "hi!" : "Hello!"}
       addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
       classNames='calltransition'>
        {showdetail?
          <CallDetail detailedcallcontent={detailedcallcontent} setshowdetail={setshowdetail} />
         :
        <React.Fragment>
          <Menu fetchdata={fetchdata} isinbox={isinbox} setisinbox={setisinbox} />
          <ActivityFeed
          setdetailedcallcontent={setdetailedcallcontent} setshowdetail={setshowdetail}
          fetchdata={fetchdata} isinbox={isinbox}  allcalls={allcalls} />
        </React.Fragment>
        }
          </CSSTransition>
        </SwitchTransition>
      <Footer numberofunread={(allcalls.filter(eachcall => eachcall.is_archived === false).length)} />
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
