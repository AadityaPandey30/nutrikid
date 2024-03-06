
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Suggest from "./components/Suggest"


function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Body />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/suggest' element={<Suggest />}/>

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
