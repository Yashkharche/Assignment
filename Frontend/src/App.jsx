import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Signup from '../page/Signup/Signup'
import Signin from '../page/Signin/Signin'
import Product from '../page/Product/Product'
import ProtectedRoutes from '../component/ProtectedRoutes/ProtectedRoutes'
import UpdateProduct from '../page/UpdateProduct/UpdateProduct'
import AddProduct from '../page/AddProduct/AddProduct'
import { addAdmin } from '../../Backend/controller/authController'


function App() {
  

  return (
    <Router>
      <Routes>
       <Route path='/' element={<Signin/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route element={<ProtectedRoutes/>}>
       <Route path='/product' element={<Product/>}/>
       <Route path='/addproduct' element={<AddProduct/>}/>
       <Route path='/product/update/:id' element={<UpdateProduct/>}/>
       <Route path='/addadmin' element={<addAdmin/>}/>
       </Route>
      </Routes>
    </Router>
  )
}

export default App
