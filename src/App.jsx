import './App.css'
import EmployeeComponenet from './componenets/EmployeeComponenet';
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
                {/* // http://localhost:3000/add-employee */}
              <Route path = 'add-employee' element = { <EmployeeComponenet />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
