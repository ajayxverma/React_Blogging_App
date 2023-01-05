
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Mainnavbar from './components/Mainnavbar';
import AllBlogs from './components/AllBlogs';
import BlogDetails from './components/BlogDetails';


function App() {
  return (
    <Router>
      <Mainnavbar/>
        <Routes>
          <Route path='/' element = { <Home/> }/>
          <Route path='/blogs' element = { <AllBlogs/> } />
          <Route path='/blogs/:id' element = {<BlogDetails/>} />
        </Routes>
        
          
      
      
    </Router>  
   
  );
}

export default App;


//Run the json server 
// the command to run the json server is : npx json-server --watch Data/BlogData.json --port 8000
