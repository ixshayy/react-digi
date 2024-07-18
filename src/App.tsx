import './App.scss'
import { Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import  Draw  from './components/draw/draw';
import  Type  from './components/type/type';

function App() {
  return (<>
    <Header/>
    <Routes>
      <Route path="/" element={<Draw />} />
      <Route path="/type" element={<Type />} />
      <Route path="/sign-pdf" element={<Type />} />
    </Routes>
   </>
  )
}

export default App
