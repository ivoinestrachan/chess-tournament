import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Prizes from './components/Prizes';
import Home from './components/Home';
import { InformationContextProvider } from './context/InformationContext';
import Players from './components/Players';
/* import ProtectedRoutes from './ProtectedRoutes'; */

const App = () => {
  return (
    <InformationContextProvider>
    <div>
      <BrowserRouter>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/prizes" element={<Prizes />}/>
    {/* <Route element={<ProtectedRoutes />}> */}
     <Route path="/players" element={<Players />} />
    {/* </Route> */}
      </Routes>
   </BrowserRouter>
    </div>
    </InformationContextProvider>
    
  );
}

export default App;
