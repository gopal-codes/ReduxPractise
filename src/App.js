import './App.css';
import Counter from './react/components/Counter';
import Heading from './react/components/Heading';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ApiFetching from './react/components/ApiFetching';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            
          </Route>
          <Route exact path="/" element=
          {
            <div className='container'>
              <Heading />
              <Counter />
            </div>
          } />
          <Route path='/apifetch' element={<ApiFetching />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
