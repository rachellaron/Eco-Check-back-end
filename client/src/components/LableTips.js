import React, { useState } from 'react'
import LabelTips from './images/LabelTips.png'
import LabelTipsTrans from './images/lable-tips-trans.png'
import './LableTips.css'



function TipsToggle() {
    const [show, setShow] = useState(false)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    return (


        <div className="label-tips">
            <label>Lable Tips</label>
            <button className="dropdown-btn" onClick={() => setShow(!show)} ><div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-chevron-down'} />
                </div></button>

            <div className="lable-tips-open">
                {
                    show ? <img className="label-tips-img" src={LabelTipsTrans} alt="" /> : null
                }

            </div>
        </div>
    );
}

export default TipsToggle

