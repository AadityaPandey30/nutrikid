
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'


function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Body />}/>
          {/* <Route path='/about' element={<About />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
