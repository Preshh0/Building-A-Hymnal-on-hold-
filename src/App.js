// import logo from './logo.svg';
import './App.css';

import Hymn from "./Hymn"
import hymnData from "./hymnData"

function App(){

    const hymnComponents = hymnData.map(hymn => <Hymn key={hymn.id} title={hymn.title} hymnal={hymn.hymnal} />)
    // need to show an example of the filter higher order
    
  
    return(
        <div>
            {hymnComponents}
        </div>
        
    )
}

export default App;