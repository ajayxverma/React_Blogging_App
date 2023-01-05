import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

    const {id} = useParams();
    const {data : blog ,isLoading, err} = useFetch('http://localhost:8000/blogs/'+id);

    return (
        <div className="blog_details">
           
            { isLoading && <div> Loading ... </div> }
            { err && <div > {err} </div>}
            { blog && (
                <article>
                    <h2 className="blogtitle">
                        Title : {blog.title}
                    </h2>
                    <p className="writtenBy"> {blog.body} </p>
                    <div className="blogContent">
                        {blog.data}
                    </div>

                </article>
            )}
            
        </div>
    );
}

export default BlogDetails;
