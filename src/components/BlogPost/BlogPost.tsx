import { useRoute } from 'wouter';
import { useEffect, useState } from 'react';
import { BlogUtils } from '../../utils/BlogUtils';
import ReactMarkdown from 'react-markdown';

import './BlogPost.css';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { navigate } from 'wouter/use-browser-location';
import FadeInSection from '../FadeInSection/FadeInSection';

import { getBaseUrl } from '../../utils';

const BlogPost = () => {
  const [match, params] = useRoute('/blog/:slug');
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [dateString, setDateString] = useState<string>('');

  useEffect(() => {
    if (params?.slug) {
      const post = BlogUtils.get(params.slug);
      if (post) {
        setTitle(post.title);
        setContent(post.content);

        // Format date in human-readable format
        const date = new Date(post.date);
        const formattedDateString = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timeZone: 'UTC'
        });
        setDateString(formattedDateString);
      } else {
        navigate('/404');
      }
    }
  }, [params]);

  if (!match) {
    return null;
  }

  return (
    <FadeInSection className='BlogPost'>
      <Button className='button' onClick={() => navigate('/blog')}>
        <ArrowBackIcon/>
        Back
      </Button>
      <div className='header'>
        <h1>{title}</h1>
        <sub>{dateString}</sub>
      </div>
      <article>
        <ReactMarkdown
          urlTransform={url => `${getBaseUrl()}${url}`}
        >{content}</ReactMarkdown>
      </article>
    </FadeInSection>
  );
}

export default BlogPost;
