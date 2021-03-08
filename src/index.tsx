import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import FirstSlideComp from "./slides/slide_1";
import SecondSlideComp from "./slides/slide_2";
import ThirdSlideComp from "./slides/slide_3";

import { SliderComp, sldrCompType } from "./tools/slider"

function App() {
    return <div className="app">
        <SliderComp sliderType={ sldrCompType.VSlider } sliderName={"mainSlider"}>
            <FirstSlideComp />
            <SecondSlideComp />
            <ThirdSlideComp />
        </SliderComp>
    </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
