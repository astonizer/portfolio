import React from 'react'
import '../../styles/Button.css'

const STYLES = [
    'btn_primary',
    'btn_outline'
]

const SIZES = [
    'btn_medium', 
    'btn_large'
]

function Button() {
    const {value, type, handleClick, buttonStyle, buttonSize} = this.props;
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} onClick={handleClick} type={type}>
            {value}
        </button>
    )
}

export default Button
