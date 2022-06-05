import React, { createContext, useReducer } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Requirements from "./pages/Requirements";
import Dates from "./pages/Dates";
import Administrative from "./pages/Administrative";
import Archtiecture from "./pages/Archtiecture";
import Experience from "./pages/Experience";
import Interface from "./pages/Interface";
import { initialState, reducer } from "./store/reducer";

// import Pages from "./pages/Pages";
import Main from "./gist/Main";

export const AuthContext = createContext();


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">

      <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="1" element={<Requirements />} />
        <Route path="2" element={<Dates />} />
        <Route path="3" element={<Administrative />} />
        <Route path="4" element={<Archtiecture />} />
        <Route path="5" element={<Experience />} />
        <Route path="6" element={<Interface />} />
        <Route path="main" element={<Main />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
