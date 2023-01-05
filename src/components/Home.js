import { useState, React } from 'react';
import Blog from './Blog';
import Button from 'react-bootstrap/Button';
import useFetch from './useFetch';

const Home = () => {
    
  
    const deleteBlog = (id) => {
      const newBlog= blogs.filter(blog => blog.id !== id);
      setblogs(newBlog);
    }
    
    const [demo, setdemo] = useState("this is a demo");
    console.log(demo);
    const { data : blogs, isLoading, err, setdata : setblogs} = useFetch('http://localhost:8000/blogs');
    
    
    return (
     <div className="home">
         <div className="main_div">
            
            {err && <div> { err }</div>}
            {isLoading && <div>Please Wait Loading....</div>}
          <div className="blogs_container">
            {blogs && <Blog blog={blogs} deleteBlog={deleteBlog}></Blog> }
          </div>
        </div>
          <Button variant="primary" onClick={() => setdemo(" this change the original demo")}>demo</Button>
     </div>

     
    )
}

export default Home;



