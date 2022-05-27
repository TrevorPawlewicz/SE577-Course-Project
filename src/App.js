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
        <Route path="main" element={<Main />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
