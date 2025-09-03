import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "Success");
      document.title = 'TextUtils - Dark Mode'
      setInterval(() => {
        document.title = 'Hello hye bye bye';
      }, 2000)
      setInterval(() => {
        document.title = 'kyu bye bye bhai';
      }, 6000)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "Success");
      document.title = 'TextUtils - Light Mode'
    }
  }
//   return (
//     <>
//       <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/> {/*title="TextUtils", aboutText="About TextUtils -> these are props means we want to set the value of the tile and aboutText by sending it from here so we used props. not necessary that only string is passed in the props we can also pass the object as well as link or any other thing that we want to pass*/}
//       <Alert alert={alert}/>
//       <div className="container my-3">
//       <Switch>
//         <Route path = "/about">
//           <About/>
//         </Route>
//         <Route path = "/">
//         <TextForm heading="Enter the text below to analyze"/>            
//         </Route>
//       </Switch>
//       </div>
        
//       {/* <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/> title="TextUtils", aboutText="About TextUtils -> these are props means we want to set the value of the tile and aboutText by sending it from here so we used props. not necessary that only string is passed in the props we can also pass the object as well as link or any other thing that we want to pass */}
//       {/* <Navbar title="TextUtils"/> */}
//       {/* <Navbar/> for this default props are called that are defined in the navbar component */}
//       {/* <About/> */}
//     </>
//   );
// }


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <TextForm heading="Enter the text below to analyze" />
        </div>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <About />
        </div>
      </>
    ),
  },
]);

return <RouterProvider router={router} />;
}
export default App;
