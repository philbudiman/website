import './App.css';
import Header from './components/Header/Header';
// import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Router from './components/Router/Router';

function App() {
  return (
    <div className="Base">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  )
}

export default App
