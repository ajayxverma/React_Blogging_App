import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Blog({blog, deleteBlog}) {
  return ( 
      <div className="blog_container">   
        {blog.map((blog) => (
            <Link to={`/blogs/${blog.id}`}>
            <Card style={{ padding: '5px 5px'}} key={blog.id}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>
              {blog.body}
              </Card.Text>
              <Button variant="primary" onClick={() => deleteBlog(blog.id)}>Delete</Button>
            </Card.Body>
          </Card>
          </Link>
          ))}
      </div>  
  );
}

export default Blog;