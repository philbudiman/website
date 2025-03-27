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
          <li className='post-link' key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}<span> - {post.date}</span></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
