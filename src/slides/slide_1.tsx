import React, {useEffect} from 'react';
import './style.css';

import {sldrCompType, SliderComp} from '../tools/slider'
import {TitleComp} from '../tools/title'

type firstSlideContentProp = {
    title: string, src: string, desc: string
}

const FirstSlideContentComp: React.FunctionComponent<firstSlideContentProp> = (props) => {
    return <div className="first_content">
        <div className="content_block">
            <div className="first_content_video">
                <div className="video_block">
                    <iframe src={props.src} title={props.title} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                </div>
            </div>
            <div className="first_content_desc">{props.desc}</div>
        </div>
    </div>
}

const FirstSlideComp: React.FunctionComponent = () => {

    const nestedSlides: { id: string, title: string, src: string, desc: string }[] = [
        {
            id: "nested_1_1", title: "MIND GAMES", src: "https://www.youtube.com/embed/INx5hyVWUUc",
            desc: "Новый клип - MIND GAMES. В жизни всегда есть место конкуренции. И казалось бы, заветный приз лежит уже перед носом, как понимаешь, что ты не единственный претендент на желанную сладость. Каждый ход оппонента воспринимается как немыслимая наглость! И зачастую, такая призма восприятия раскачивает лодку еще сильнее..."
        },
        {
            id: "nested_1_2", title: "MANIAC", src: "https://www.youtube.com/embed/UHkQHGiOD4Q",
            desc: "Самый популярный клип - MANIAC.\nВ картине под музыку известного исполнителя GSPD раскрывается история двух судеб.  Действия разворачиваются в осеннем лесу, где неспеша прогуливается рассказчик. Как хранитель истории, он знает, что произойдет, но вмешиваться не в его власти..."
        },
        {
            id: "nested_1_3", title: "RETRO MODERN BATTLE", src: "https://www.youtube.com/embed/Nw0pJkZ7a2g",
            desc: "Выбор подписчиков - Retro Modern Battle Comeback.\nВремя всегда было относительным понятием. Мы ностальгируем по прошлому, с теплотой вспоминая все лучшее. Но если на секунду представить, что два поколения соединятся? Retro и Modern. Что получится? Вы узнаете в клипе Retro Modern Battle!"
        },
        {
            id: "nested_1_4", title: "LIGHT A FIRE", src: "https://www.youtube.com/embed/2NVCSJguzso",
            desc: ""
        }
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
                        <FirstSlideContentComp title={slide.title} src={slide.src} desc={slide.desc} />
                    </div>
                })
            }
        </SliderComp>
    </div>
}
export default FirstSlideComp;