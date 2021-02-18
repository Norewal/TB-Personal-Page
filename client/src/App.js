import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from './pages/HomePage/homepage';
import MainNavBar from './components/NavBar/NavBar';
import AboutLong from './pages/AboutPage/AboutLong';
import Services from './pages/ServicesPage/Services';
import BioBay from './pages/BioBay/BioBay';
import ContactSection from './pages/ContactSection/ContactSection';
import ServiceLab from './pages/ServicesPage/ServiceLab';
import ServiceEdu from './pages/ServicesPage/ServiceEdu';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="main">
      <div className="content">
        <Router>
          <MainNavBar />
    
          <Switch>
            <Route path="/" exact activeClassName="active" component={Homepage}/>
            <Route path="/services" exact activeClassName="active" component={Services}/>
            <Route path="/serviceLab" exact activeClassName="active" component={ServiceLab}/>
            <Route path="/serviceEdu"  exact activeClassName="active" component={ServiceEdu}/>
            <Route path="/about" exact activeClassName="active" component={AboutLong} />
            <Route path="/biobay"  exact activeClassName="active" component={BioBay} />
            <Route path="/contact" exact activeClassName="active" component={ContactSection} />
          </Switch>

        </Router>
      </div>
      <Footer className="footer" />
    </div>
  );

}

export default App;
