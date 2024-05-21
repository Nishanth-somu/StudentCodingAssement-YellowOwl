import './App.css';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loginpage } from './LoginPage/login';
import { Menuwork } from './MenuBar/menuwork';
import { AddStudentDet } from './Adding Students Detail/addstudentdet';
import { Admindashboard } from './AdminDashBoard/admindashboard';
import { Edit } from './Editdetail/edit';

function App() {
  return (
<>

  <BrowserRouter>
    <Routes>
      <Route path ='/'  element={ <Loginpage/>} /> 
      <Route path = '/addstudent' element = {[<Menuwork/> ,<AddStudentDet/>]} />
      <Route path = '/admin' element = {[<Menuwork/> ,<Admindashboard/>]} />
      <Route path = '/edit/:sno' element ={<Edit/>}/>
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App;


