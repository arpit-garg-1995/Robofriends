import React, { useState, useEffect } from 'react';
import CardList from '../component/CardList';
// import { robots } from '../component/Robots';
import SearchBox from '../component/SearchBox'
import ErrorBoundary from '../component/ErrorBoundary';
import './App.css'
import Scroll from '../component/Scroll';

// function App() {


  
//     const onSearchChange = (event) => {
//       setSearchfield(event.target.value)
//     }
  
    
  
//     return !robots.length ?
//       <h1>Loading</h1> :
//       (
//         <div className='tc'>
//           <h1 className='f1'>RoboFriends</h1>
//           <button onClick={()=>setCount(count+1)}>Click Me!</button>
//           <SearchBox searchChange={onSearchChange}/>
//           <Scroll>
//             <CardList robots={filteredRobots} />
//           </Scroll>
//         </div>
//       );
//   }
  
//   export default App;

function App() {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {setRobots(users)});
        // console.log(count)
      },[]) // if you add count, only run if count changes.

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        console.log(robot)
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    if (!robots.length){
        return <h1 className='tc'>Loading........</h1>
    }else{
        return (
            <div className='tc'>
                <h1>Robofirens</h1>
                <SearchBox searchChange = { onSearchChange }/>
                <Scroll>
                    {/* <ErrorBoundary> */}
                        <CardList robots = { filteredRobots }/>
                    {/* </ErrorBoundary> */}
                </Scroll>
            </div>
        );
    }
    
}

export default App;