import React from 'react'

type titleProps = {
    textWithColor: { text: string, color: string }[]
}

export const TitleComp: React.FunctionComponent<titleProps> = (props) => {
    return <div className="main_title">
        {
            props.textWithColor.map((textItem) => {
                return <span style={
                    {color: textItem.color, textShadow: "0 0 17px " + textItem.color}
                }>{textItem.text}</span>
            })
        }
    </div>
}