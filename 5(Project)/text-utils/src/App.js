import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils"/> {/*title="TextUtils", aboutText="About TextUtils -> these are props means we want to set the value of the tile and aboutText by sending it from here so we used props. not necessary that only string is passed in the props we can also pass the object as well as link or any other thing that we want to pass*/}
      {/* <Navbar title="TextUtils"/> */}
      {/* <Navbar/> for this default props are called that are defined in the navbar component */}
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze"/>
      </div>
      <About/>
    </>
  );
}

export default App;
