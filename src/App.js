import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {useState} from "react"
import Alert from './components/Alert';


function App() {
  
  const [mode, setMode] = useState("light"); // wheather dark mode is enabled or not 
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = `#277BC0`
      showAlert("Dark mode has been enabled","success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <>
    <Navbar title="TExT UTilS" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm heading="Enter the text below" mode={mode} showAlert={showAlert}/>
    {/* <About/> */}
    </div>
   
    </>
  );
}

export default App;
