import React from 'react';
import './style.css';

import {TitleComp} from "../tools/title";
// @ts-ignore
import icon_1 from '../img/contact_icons/icons_1.png'
// @ts-ignore
import icon_2 from '../img/contact_icons/icons_2.png'
// @ts-ignore
import icon_3 from '../img/contact_icons/icons_3.png'
// @ts-ignore
import icon_4 from '../img/contact_icons/icons_4.png'

const ThirdSlideComp: React.FunctionComponent = () => {

    const data: {icon: string, url: string}[] = [
        { icon: icon_2, url: "" },
        { icon: icon_3, url: "" },
        { icon: icon_4, url: "" },
        { icon: icon_1, url: "" }
    ];

    return <div className="main_slide" id="main_slide_3">
        <div className="slide_skeleton">
            <TitleComp textWithColor={[
                {text: "Наши", color: "white"}, {text: " контакты", color: "yellow"}
            ]}/>
            <div className="slide_3_content">
                {
                    data.map((value) => {
                        return <div>
                            <img src={value.icon} style={{width: "20%"}} />
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}
export default ThirdSlideComp;