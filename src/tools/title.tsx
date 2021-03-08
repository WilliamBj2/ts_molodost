import React from 'react'

type titleProps = {
    textWithColor: { text: string, color: string }[]
}

export const TitleComp: React.FunctionComponent<titleProps> = (props) => {
    return <div className="title">
        {
            props.textWithColor.map((textItem, index) => {
                return <span style={
                    {color: textItem.color, textShadow: "0 0 17px " + textItem.color}
                }>{ textItem.text }</span>
            })
        }
    </div>
}