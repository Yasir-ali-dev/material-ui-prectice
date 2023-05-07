import React from "react";
// import { Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import Navbar from "./components/Navbar";
// import Home from './components/Home';
// import About from './components/About';
// import Products from './components/Products';

// import Menu from "./HOCs/Menu";

import Buttons from "./UI/Buttons";
import CheckBoxes from "./UI/CheckBoxes";
import RadioGroup from "./UI/RadioGroups";
import { Box } from "@mui/material";
import Ratings from "./UI/Ratings";
import Selects from "./UI/Selects";
import Sliders from "./UI/Sliders";
import Switches from "./UI/Switches";
import TextFieldComponent from "./UI/TextFieldComponent";
import ToggleButtons from "./UI/ToggleButtons";
import Avatars from "./UI/Avatars";
import BadgesComponent from "./UI/BadgesComponent";
import DividerComponent from "./UI/DividerComponent";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
      {/* <Navbar/>
      <div className="container">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}></Route>
        </Routes>
      </div> */}
      {/* <Menu/> */}

      <Buttons />
      <CheckBoxes />
      <RadioGroup />
      <Ratings />
      <Selects />
      <Sliders />
      <Switches />
      <TextFieldComponent />
      <ToggleButtons />
      <Avatars />
      <BadgesComponent />
      <DividerComponent />
    </Box>
  );
}

// function App (){
//     return(
//       <>
//         <Menu/>
//       </>
//     )

// }

export default App;
