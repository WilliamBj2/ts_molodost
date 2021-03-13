import React from 'react';
import './style.css';

import {sldrCompType, SliderComp} from '../tools/slider'
import {TitleComp} from '../tools/title'

const FirstSlideComp: React.FunctionComponent = () => {

    const nestedSlides: { id: string, title: string, src: string }[] = [
        {id: "nested_1_1", title: "MIND GAMES", src: "https://www.youtube.com/embed/INx5hyVWUUc"},
        {id: "nested_1_2", title: "MANIAC", src: "https://www.youtube.com/embed/UHkQHGiOD4Q"},
        {id: "nested_1_3", title: "LIGHT A FIRE", src: "https://www.youtube.com/embed/2NVCSJguzso"},
        {id: "nested_1_4", title: "RETRO MODERN BATTLE", src: "https://www.youtube.com/embed/Nw0pJkZ7a2g"}
    ]

    return <div className="main_slide" id="main_slide_1">
        <div className="main_slide_title" style={{zIndex: 101}}>
            <TitleComp textWithColor={[
                {text: "MOLODOST", color: "white"}, {text: "'", color: "yellow"}
            ]}/>
        </div>
        <SliderComp sliderType={sldrCompType.HSlider}>
            {
                nestedSlides.map((slide, index) => {
                    return <div id={slide.id} className="nested_1" key={index}/>
                })
            }
        </SliderComp>
    </div>
}
export default FirstSlideComp;