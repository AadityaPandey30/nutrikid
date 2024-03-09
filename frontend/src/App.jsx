
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Suggest from "./components/Suggest"
import Connect from './components/Connect'
import Kiddo from './components/Kiddo'
import Customize from './components/Customize'
import RecipeCardDetails from './components/smallComponents/RecipeCardDetails';
import Plan from './components/smallComponents/Plan'
import Footer from './components/Footer'
import RecipeCardDetailsCustomize from './components/smallComponents/RecipeCardDetailCustomize'


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
          <Route path='/connect' element={<Connect />}/>
          <Route path='/customize' element={<Customize />}/>
          <Route path='/kiddo' element={<Kiddo />}/>
          <Route path='/recipe/:id' element={<RecipeCardDetails />} />
          <Route path='/recipecustomize/:id' element={<RecipeCardDetailsCustomize />} />

          <Route path='/cough/plan' element={<Plan />}/>
          <Route path='/fever/plan' element={<Plan />}/>



          <Route path='/plan' element={<Plan  />}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
