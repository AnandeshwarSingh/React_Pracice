
import './App.css';
// import First from './Componants/First';
// import StateVar from './Componants/StateVar';
// import FormBul from './Componants/FormBul';

import A from './Componants/A';
import B from './Componants/B';
function App() {
  return (
    <div className="App">
      {/* <First/> */}
      {/* <StateVar/> */}
      {/* <FormBul/> */}
      <A nameA="I am props from Componenet A"/>
      <B nameB="I am props from Componenet B"/>
    </div>
  );
}

export default App;
