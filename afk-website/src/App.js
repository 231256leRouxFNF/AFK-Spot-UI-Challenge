import './App.css';
import NavBar from './components/NavBar'; // Importing the NavBar component
import Home from './pages/Home'; // Importing the Home page
import Footer from './components/Footer'; // Importing the Footer component

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Displaying the NavBar */}
      <Home /> {/* Displaying the Home page */}

      <Footer />
    </div>
  );
}

export default App;
