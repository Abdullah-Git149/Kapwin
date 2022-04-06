import logo from './logo.svg';
import './App.css';
import Home from './components/Home.';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditPage from './components/Editpage';
import { Provider } from "react-redux"
import Store from './store';
function App() {
  return (
    <div className="App">
      <Provider store={Store}>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/editpage' element={<EditPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
