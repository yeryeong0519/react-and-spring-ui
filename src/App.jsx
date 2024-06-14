import './App.css'
import FooterComponent from './componenets/FooterComponent';
import HeaderComponenet from './componenets/HeaderComponenet';
import ListEmployeeComponent from './componenets/ListEmployeeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponenet />
          <Routes>
            {/* // http://localhost:3000 */}
              <Route path='/' element = { <ListEmployeeComponent />}></Route>
                {/* // http://localhost:3000/employees */}
              <Route path ='/employees' element = { <ListEmployeeComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
