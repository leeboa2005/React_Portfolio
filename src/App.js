import React from 'react';
import Main from './components/pages/Main';
import About from './components/pages/About';
import Reference from './components/pages/Reference';
import ReferDetail from './components/pages/ReferDetail';
import Script from './components/pages/Script';
import Youtube from './components/pages/Youtube';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// 외부 컴퍼런트 불러오는 방법 
function App(){
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/about" exact component={About} />
      <Route path="/reference" exact component={Reference} />
      <Route path="/reference-detail" exact component={ReferDetail} />
      <Route path="/script" exact component={Script} />
      <Route path="/youtube" exact component={Youtube} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Router>
  )
}

export default App;