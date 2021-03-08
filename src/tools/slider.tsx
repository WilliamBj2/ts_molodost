import React from 'react';
import './style.css';

/*--------------------------------------------------------------------------------------------------*/

enum sldrCompType { VSlider = "VSlider", HSlider = "HSlider" }
enum sldrCompBtn { BtnPred = "Pred", BtnNext = "Next" }

type sldrCompProp = {
    sliderType: sldrCompType, sliderName: string
}
const sldrUpdDuration = 1000;

/*--------------------------------------------------------------------------------------------------*/

const SliderComp: React.FunctionComponent<sldrCompProp> = (props) => {

    const itemSet: HTMLCollectionOf<Element> = document.getElementsByClassName(props.sliderName)
    let btnPredClass: string, btnNextClass: string
    let sldrCurItemNumber = 0, inProcOfUpdating = false

    switch (props.sliderType) {
        case sldrCompType.HSlider:
            [btnPredClass, btnNextClass] = ["slider_h_nav h_pred", "slider_h_nav h_next"]; break
        case sldrCompType.VSlider:
            [btnPredClass, btnNextClass] = ["slider_v_nav", "slider_v_nav"]; break
    }

    const updating = (itemNum: number, btn: sldrCompBtn) => {

        const htmlItem = itemSet[itemNum] as HTMLElement, start = performance.now()
        let pos: number, interval: number

        requestAnimationFrame(function req(time) {

            const transformPos = (pos: number) => {
                switch (props.sliderType) {
                    case sldrCompType.HSlider: htmlItem.style.left = pos + '%'; break
                    case sldrCompType.VSlider: htmlItem.style.top = pos + '%'; break
                }
            }
            interval = time - start

            if (interval < sldrUpdDuration) {
                switch (btn) {
                    case sldrCompBtn.BtnPred: pos = 100 * (interval / sldrUpdDuration); break
                    case sldrCompBtn.BtnNext:
                        pos = 100 * (sldrUpdDuration - interval) / sldrUpdDuration; break
                }
                transformPos(pos)
                requestAnimationFrame(req)
            }
            else {
                pos = (btn === sldrCompBtn.BtnPred) ? 100 : 0;
                transformPos(pos)
                inProcOfUpdating = false
            }
        })
    }

    const btnProcessor = (btn: sldrCompBtn) => {
        switch (btn) {
            case sldrCompBtn.BtnPred:
                if (sldrCurItemNumber !== 0) {
                    inProcOfUpdating = true
                    updating(sldrCurItemNumber--, sldrCompBtn.BtnPred)
                }
                break;
            case sldrCompBtn.BtnNext:
                if (sldrCurItemNumber + 1 !== React.Children.count(props.children)) {
                    inProcOfUpdating = true
                    updating(++sldrCurItemNumber, sldrCompBtn.BtnNext)
                }
                break;
        }
    }

    const sliderItemStyle = "slider_item " + props.sliderName

    return <div className="slider_screen"
        onWheel = { (event) => {
            if (inProcOfUpdating || (props.sliderType !== sldrCompType.VSlider)) return
            event.stopPropagation()
            btnProcessor((event.nativeEvent.deltaY > 0) ? sldrCompBtn.BtnNext : sldrCompBtn.BtnPred)
        }}>
        {
            React.Children.map(props.children, (item, index) => {
                if (index === 0) return <div className={sliderItemStyle}>{ item }</div>
                else {
                    switch (props.sliderType) {
                        case sldrCompType.HSlider:
                            return <div className={sliderItemStyle + " h_item"}>{ item }</div>;
                        case sldrCompType.VSlider:
                            return <div className={sliderItemStyle + " v_item"}>{ item }</div>;
                    }
                }
            })
        }
        <div
            className={ btnPredClass }
            onClick={ () => {
                if (inProcOfUpdating || (props.sliderType !== sldrCompType.HSlider)) return
                btnProcessor(sldrCompBtn.BtnPred)
            }}>
        </div>
        <div
            className={ btnNextClass }
            onClick={ () => {
                if (inProcOfUpdating || (props.sliderType !== sldrCompType.HSlider)) return
                btnProcessor(sldrCompBtn.BtnNext)
            }}>
        </div>
    </div>
}

export { sldrCompType, SliderComp }