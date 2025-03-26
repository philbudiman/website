import { Link } from 'wouter';
import { useEffect, useState } from 'react';
import { BlogPost, BlogUtils } from '../../utils/BlogUtils';
import './Blog.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const allPosts = BlogUtils.getAll()
    setBlogPosts(allPosts);
  }, []);

  return (
    <div className='fade-in Blog'>
      <h1>blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link className='post-link' href={`/blog/${post.slug}`}>{post.title}</Link> - {post.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
