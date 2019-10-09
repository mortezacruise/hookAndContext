import React, {useState} from 'react';
const BlogContext = React.createContext();
export const BlogProvider = ({children}) => {
  const [blogPosts, setBlogPost] = useState([]);
  const BlogPost = [{title: 'blog post #1'}, {title: 'blog post #2'}];
  const addBlogPost = () => {
    console.log('add');
    setBlogPost([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}]);
  };
  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContext;
