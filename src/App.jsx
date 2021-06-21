import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Menu from './component/Menu'

const App = () => {
  //initial rendering to fetch data
  const [allcalls, setallcalls] = useState();
  useEffect(
    async () =>{
      while(!allcalls){
            const response = await fetch('https://aircall-job.herokuapp.com/activities', {
              method:'GET'
            });
            const responsedata = await response.json();
            setallcalls(responsedata);
      }
    },[]
  )
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <Menu isinbox={isinbox} />
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
