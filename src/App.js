
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
// import First from './Componants/First';
// import StateVar from './Componants/StateVar';
// import FormBul from './Componants/FormBul';

// import A from './Componants/A';
// import B from './Componants/B';
// import Mount from './Componants/Mount';

// import Student from './Componants/Student';

// import UseStateApp from './ComponentForFunction/UseStateApp'
// import FormApp from './ComponentForFunction/FormApp';
import Home from './Componants/Home';
import About from './Componants/About';
import Contact from './Componants/Contact';
import Services from './Componants/Services';
function App() {
  return (
    <div className="App">
      {/* <First/> */}
      {/* <StateVar/> */}
      {/* <FormBul/> */}
      {/* <A nameA="I am props from Componenet A"/>
      <B nameB="I am props from Componenet B"/> */}
      {/* <Mount/> */}
      {/* <Student/> */}
      {/* <UseStateApp/> */}
      {/* <FormApp/> */}

      <BrowserRouter>
        <nav>
          <ul>
            <li><NavLink to="/" style={{color:"white", textDecoration:"none"}}>Home</NavLink></li>
            <li><NavLink to="/About"  style={{color:"white", textDecoration:"none"}}>About</NavLink></li>
            <li><NavLink to="/Contact" style={{color:"white", textDecoration:"none"}}>Contact</NavLink></li>
            <li><NavLink to="/Services" style={{color:"white", textDecoration:"none"}}>Services</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Services' element={<Services/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
