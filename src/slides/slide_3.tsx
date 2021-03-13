import React from 'react';
import './style.css';

import {TitleComp} from "../tools/title";

const ThirdSlideComp: React.FunctionComponent = () => {
    return <div className="main_slide" id="main_slide_3">
        <div className="main_slide_title" style={{zIndex: 301}}>
            <TitleComp textWithColor={[
                {text: "Наши", color: "white"}, {text: " контакты", color: "yellow"}
            ]}/>
        </div>
    </div>
}
export default ThirdSlideComp;