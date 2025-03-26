import './App.css';
import Header from './components/Header/Header';
// import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Router from './components/Router/Router';
import { ThemeProvider } from './components/Theme/ThemeProvider';

const App = () =>  {
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
