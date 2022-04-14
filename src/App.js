import logo from './logo.svg';
import './App.css';
import Home from './components/Home.';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ResizeEditPage from './components/ResizeEditpage';
import TrimEditPage from './components/TrimEditpage';
import { Provider } from "react-redux"
import Store from './store';
import Editor from "./Video_Editor/Editor"
import VideoEditor from "./Video_Editor/VideoEditor"
import Abc from './components/Abc';
function App() {
  return (
    <div className="App">
      <Provider store={Store}>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/trim' element={<TrimEditPage />} />
            <Route path='/resize' element={<ResizeEditPage />} />
            <Route path='/page2' element={<Abc />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* <Editor />  */}
    

    </div>
  );
}

export default App;