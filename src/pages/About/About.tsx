import './About.css';
import headshot from '../../assets/headshot.jpg';
import Markdown from 'react-markdown';
import type { Components } from 'react-markdown';

const LinkRenderer: Components['a'] = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

const About = () => {
  const textContent = [
    "hey! i'm phil. i'm a **software engineer** at **eightfold.ai** currently based in **san jose, ca**",
    "i graduated from boston university in 2023 with a b.a. in computer science and a minor in economics.\nyou can check out my resume [here](https://drive.google.com/file/d/1k3o7g6inPE2JwOwuCIm-oUiTBCLH3PUi/view?usp=sharing)",
    "i'm passionate about:\n(1) building great user experiences\n(2) working across the stack\n(3) tinkering with vintage technology",
  ];
  return (
    <div className="fade-in">
      <div className="content-wrapper">
        <img
          src={headshot}
          alt="headshot"
        />
        <div className='txt' >
          <Markdown components={{ a: LinkRenderer }}>
            {textContent.join('\n\n')}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default About;