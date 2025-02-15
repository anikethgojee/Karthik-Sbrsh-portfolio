import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';


const App = () =>  {

  return (
    <div>
      <Navbar />
      < Home />
      <Profile />
      <Education />
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default App
