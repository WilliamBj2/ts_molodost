import React, {useEffect} from 'react';
import './style.css';

import {sldrCompType, SliderComp} from '../tools/slider'
import {TitleComp} from '../tools/title'

type firstSlideContentProp = {
    title: string, src: string, desc: string
}

const FirstSlideContentComp: React.FunctionComponent<firstSlideContentProp> = (props) => {
    return <div className="first_content">
        <div className="first_content_video">
            <div style={{height: "0", paddingTop: "56.25%"}}>
                <iframe src={props.src} title={props.title} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
            </div>
            <div style={{flexGrow: 1, border: "2px solid white"}} />
        </div>
        <div className="first_content_desc">
        </div>
    </div>
}

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
                    return <div id={slide.id} className="nested_1" key={index}>
                        <FirstSlideContentComp title={slide.title} src={slide.src} desc={""} />
                    </div>
                })
            }
        </SliderComp>
    </div>
}
export default FirstSlideComp;