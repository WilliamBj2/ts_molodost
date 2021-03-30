import React from 'react';
import './style.css';

import {TitleComp} from "../tools/title";

const SecondSlideComp: React.FunctionComponent = () => {
    return <div className="main_slide" id="main_slide_2">
        <div className="main_title_for_slider" style={{zIndex: 201}}>
            <TitleComp textWithColor={[
                {text: "О", color: "yellow"}, {text: " нас", color: "white"}
            ]}/>
        </div>
    </div>
}
export default SecondSlideComp;