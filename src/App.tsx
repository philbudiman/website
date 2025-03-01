import './App.css';
import Header from './components/Header/Header';
// import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Router from './components/Router/Router';
import { ThemeProvider } from './components/Theme/ThemeProvider';

function App() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.screen.height * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
      // We execute the same script as before
      const vh = window.screen.height * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  return (
    <div className="Base">
      <ThemeProvider>
        <Header/>
        <Router/>
        <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default App
