import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Switch, Route, useLocation} from 'react-router-dom';

//Page Transition
import { AnimatePresence } from 'framer-motion';

//pages
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Coherent from './pages/Coherent';
import Inntech from './pages/Inntech';
import Article from './pages/Article';

import ManageBlog from "./components/Blog/ManageBlog"

//Scroll To Top
import ScrollToTop from './components/ScrollToTop';

function App() {
  let location = useLocation();

  return (
    <>
      <Navbar/>
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop/>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/blog/manage" component={ManageBlog}/>
          <Route path="/blog/:id" render={(props) => (<Article {...props}/>)}/>
          <Route path="/coherent" component={Coherent}/>
          <Route path="/inntech" component={Inntech}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/blog" component={Blog}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </AnimatePresence>
      <Footer/>
    </>
  );
}

export default App;
