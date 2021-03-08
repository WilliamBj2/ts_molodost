import React from 'react';
import './style.css';

import {sldrCompType, SliderComp} from '../tools/slider'

const FirstSlideComp: React.FunctionComponent = () => {

    const nestedSlides: { id: string, title: string, src: string}[] = [
        { id: "nested_1_1", title: "MIND GAMES", src: "https://www.youtube.com/embed/INx5hyVWUUc" },
        { id: "nested_1_2", title: "MANIAC", src: "https://www.youtube.com/embed/UHkQHGiOD4Q" },
        { id: "nested_1_3", title: "LIGHT A FIRE", src: "https://www.youtube.com/embed/2NVCSJguzso" },
        { id: "nested_1_4", title: "RETRO MODERN BATTLE", src: "https://www.youtube.com/embed/Nw0pJkZ7a2g"}
    ]

    return <div className="main_slide" id="main_slide_1">
        <SliderComp sliderType={ sldrCompType.HSlider } sliderName="nestedSlider1">
            {
                nestedSlides.map((slide, index) => {
                    return <div id={slide.id} className="nested_1" key={index}></div>
                })
            }
        </SliderComp>
    </div>
}
export default FirstSlideComp;