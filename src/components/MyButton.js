import React, { useState } from 'react';

import '../styles/mybutton_styles.css';

function MyButton(props) {
    const [clicked, setClicked] = useState(false);

    function button_clicked() {
        setClicked(true);

        setTimeout(() => {
            setClicked(false);
        }, 2000);
    }

    return (
        <div className="button_container">
            <div onClick={button_clicked} className={`my_button ${clicked ? 'clicked' : null}`}>
                <span>{props.name}</span>
            </div>
            <img src="./images/rocket.png" alt="" className={`button_image ${clicked ? 'launch_rocket' : null}`} />
        </div>
    )
}

export default MyButton;
