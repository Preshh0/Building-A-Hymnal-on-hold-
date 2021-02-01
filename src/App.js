// import logo from './logo.svg';
import './App.css';

import Hymn from "./Hymn"
import hymnData from "./hymnData"

function App(){
  //An example of a higher order methods in javascript
  // const nums = [1,2,3,4,5,6,7,8,9,10]
  // const doubled = nums.map(function(num){
  //   return num * 2
  // })

  // console.log(doubled)
    const hymnComponents = hymnData.map(hymn => <Hymn key={hymn.id} Title={hymn.title} Hymnal={hymn.hymnal} />)
   
      //if the componnets is repeated give it a new prop called key and put something unique inside the key prop.
    
      //Tried using filter, didn't work.
      // const jokeFilter = jokesData.filter(joke =>{
    //   return(
    //     <Joke key={joke.id} !question = {joke.question} ? punchLine={joke.punchLine} : punchLine  />
    //   )
    // })
    // })
    return(
        <div>
            {hymnComponents}

        </div>
        
    )
}

export default App;