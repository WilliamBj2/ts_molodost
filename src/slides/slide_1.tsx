import React, {useEffect} from 'react';
import './style.css';

import {sldrCompType, SliderComp} from '../tools/slider'
import {TitleComp} from '../tools/title'

type firstSlideContentProp = {
    title: string, src: string, desc: React.ReactElement
}
type firstContentDescProp = { desc: React.ReactElement }

function updateFontSize() {

    const elemColl = document.getElementsByClassName("first_content_desc");
    let descHeight_source: number, descHeight_new: number;

    for (let i = 0; i < elemColl.length; i++)
    {
        let fontSMin = 8, fontSMax = 64, fontS = fontSMax;
        let el: HTMLElement = elemColl[i] as HTMLElement;

        // устанавливаем минимальный размер шрифта и фиксируем текущий размер блока
        el.style.fontSize = (0).toString() + "px";
        descHeight_source = Number(window.getComputedStyle(el).height.slice(0, -2));

        do {
            // вычисляем среднее значение размера шрифта и реагируем на изменения
            el.style.fontSize = ((fontSMin + fontSMax) / 2).toString() + "px";
            descHeight_new = Number(window.getComputedStyle(el).height.slice(0, -2));

            if (Math.abs(descHeight_source - descHeight_new) > 0.0001)
            {
                fontSMax = (fontSMin + fontSMax) / 2
            }
            else fontSMin = (fontS = (fontSMin + fontSMax) / 2)
        }
        while (Math.abs(fontSMin - fontSMax) > 0.0001);

        // устанавливаем последний, не ломающий верстку, размер шрифта
        el.style.fontSize = fontS.toString() + "px";
    }
}

const FirstContentDesc: React.FunctionComponent<firstContentDescProp> = ({desc}) => {

    useEffect(() => {
        window.addEventListener('resize', updateFontSize);
        window.addEventListener('load', updateFontSize);
        return () =>
        {
            window.removeEventListener('resize', updateFontSize);
            window.removeEventListener('load', updateFontSize);
        }
    }, []);
    return <div className="first_content_desc">{desc}</div>
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
            <FirstContentDesc desc={props.desc} />
        </div>
    </div>
}

const FirstSlideComp: React.FunctionComponent = () => {

    const nestedSlides: { id: string, title: string, src: string, desc: React.ReactElement }[] = [
        {
            id: "nested_1_1", title: "MIND GAMES", src: "https://www.youtube.com/embed/INx5hyVWUUc",
            desc: <span>Новый клип - MIND GAMES<br/>В жизни всегда есть место конкуренции. И казалось бы, заветный приз лежит уже перед носом, как понимаешь, что ты не единственный претендент на желанную сладость. Каждый ход оппонента воспринимается как немыслимая наглость! И зачастую, такая призма восприятия раскачивает лодку еще сильнее...</span>
        },
        {
            id: "nested_1_2", title: "MANIAC", src: "https://www.youtube.com/embed/UHkQHGiOD4Q",
            desc: <span>Самый популярный клип - MANIAC<br/>В картине под музыку известного исполнителя GSPD раскрывается история двух судеб.  Действия разворачиваются в осеннем лесу, где неспеша прогуливается рассказчик. Как хранитель истории, он знает, что произойдет, но вмешиваться не в его власти...</span>
        },
        {
            id: "nested_1_3", title: "RETRO MODERN BATTLE", src: "https://www.youtube.com/embed/Nw0pJkZ7a2g",
            desc: <span>Выбор подписчиков - Retro Modern Battle Comeback<br/>Время всегда было относительным понятием. Мы ностальгируем по прошлому, с теплотой вспоминая все лучшее. Но если на секунду представить, что два поколения соединятся? Retro и Modern. Что получится? Вы узнаете в клипе Retro Modern Battle!</span>
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
            <div id="nested_1_4" className="nested_1" />
        </SliderComp>
    </div>
}
export default FirstSlideComp;