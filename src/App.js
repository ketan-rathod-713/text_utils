import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {useState} from "react"
import Alert from './components/Alert';


function App() {
  
  const [mode, setMode] = useState("light"); // wheather dark mode is enabled or not 
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = `#277BC0`
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"

    }
  }

  return (
    <>
    <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
    <Alert alert="This is a alert"/>
    <div className="container">
    <TextForm heading="Enter the text below" mode={mode}/>
    {/* <About/> */}
    </div>
   
    </>
  );
}

export default App;
