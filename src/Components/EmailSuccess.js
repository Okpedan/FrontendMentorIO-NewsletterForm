import React from 'react';
import checkLogo from "../assets/images/icon-success.svg";

function EmailSuccess({email}) {

    const handleClick = () =>{
        window.location.reload()
    }

    return (
        <div className={'email-status'}>
            <div className={'email-info'}>
                <img src={checkLogo} alt={'success'}/>
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <a href={'https://docs.google.com/spreadsheets/d/1AAAsCi8KfRu76wO-GtKhWTaC2ZuG7L-vJxW69dIy-K4/edit#gid=0'} style={{fontWeight: "bold"}}>{email}.</a> Please open it and click
                    the button inside to confirm your subscription.</p>

                <button type={"submit"} onClick={handleClick}>Dismiss message</button>
            </div>
        </div>
    );
}

export default EmailSuccess;