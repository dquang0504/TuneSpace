import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import '../src/index.css'
import Main from './Components/Main';
import LeftNavBar from './Components/LeftNavBar';
import { Routes,Route } from 'react-router-dom';
import Player from './Components/Player';


function App() {

  return (
    <div className="h-screen w-screen bg-[#243B55] text-white overflow-hidden">
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-[#1e2e46] shadow-md z-50 flex items-center px-6">
        <NavBar />
      </div>

      {/* Left Navbar */}
      <div className="fixed top-14 left-0 w-64 h-[calc(100vh-56px)] bg-[#243B55] border-r border-[#14B8A650] z-40">
        <LeftNavBar />
      </div>

      {/* Main Content */}
      <div className="ml-64 pt-14 h-[calc(100vh-56px)] overflow-y-auto">
        <Routes>
          <Route path='/' element={ <Main></Main> } />
          <Route path='/play' element={ <Player></Player> } />
        </Routes>
        <Main />
      </div>
    </div >
  )
}

export default App
