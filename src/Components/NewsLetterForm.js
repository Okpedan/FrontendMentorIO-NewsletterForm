import React, {useEffect, useState} from 'react';
import formIllustration from '../assets/images/illustration-sign-up-desktop.svg'
import formIllustrationMobile from '../assets/images/illustration-sign-up-mobile.svg'
import checkLogo from '../assets/images/icon-list.svg'
import EmailSuccess from "./EmailSuccess";

function NewsLetterForm() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700)
    const [emailStatus, setEmailStatus] = useState(true)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    const handleResize = () => {
        if (window.innerWidth <= 700) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    },[])


    function ValidateEmail(e) {
        e.preventDefault()
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.length !== 0 && validRegex.test(email)) {
            Submit(e)
        } else {
            setEmailError(true)
        }
    }


    function Submit(e) {
        e.preventDefault()
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        fetch(
            "https://script.google.com/macros/s/AKfycbxNcsYcAZ2GMB0dwSC5u-rVsbx62M2vXd3PXzJd-RA09hJ0YFwaP_ZNpgN07DtSuKJP/exec",
            {
                method: "POST",
                body: formDatab
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
                setEmailError(true)
            });
        setEmailStatus(false)
    }

    return (
        <div>
            {emailStatus ? (<div className={'news'}>
                <div className={'news-letter-form'}>
                    <div className={'news-info'}>
                        <h1>Stay updated!</h1>
                        <p>Join 60,000+ product managers receiving monthly updates on:</p>

                        <div className={'info-bullet-points'}>
                            <div className={'bullet-points'}>
                                <img src={checkLogo} alt={'bulletpoint'}/>
                                <p>Product discovery and building what matters</p>
                            </div>
                            <div className={'bullet-points'}>
                                <img src={checkLogo} alt={'bulletpoint'}/>
                                <p>Measuring to ensure updates are a success</p>
                            </div>
                            <div className={'bullet-points'}>
                                <img src={checkLogo} alt={'bulletpoint'}/>
                                <p>And much more!</p>
                            </div>
                        </div>

                        <form className={"form"} onSubmit={(e) => ValidateEmail(e)}>
                            <div className={'email-group'}>
                                <div className={'error-tab'}>
                                    <label htmlFor={"email"} style={{width: 200}}>Email Address</label>
                                    {emailError? <p>Valid email required</p> : ''}
                                </div>

                                <input
                                    placeholder={"email@company.com"}
                                    name={"Email"}
                                    id={"email"}
                                    style={{
                                        border: emailError ? '1px solid red': '',
                                        background: emailError ? "rgb(252, 230, 227)": '',
                                        color: emailError ? "red": ''}}
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <button name="Name" type={"submit"}>Subscribe to monthly newsletter</button>
                        </form>
                    </div>
                    <div className={'news-img'}>
                        {!isMobile ? (<img src={formIllustration} alt={'illustration'}/>
                        ) : <img src={formIllustrationMobile} alt={'illustration'}/>

                        }
                    </div>
                </div>
            </div>): <EmailSuccess email={email}/>

                }

        </div>
    );
}

export default NewsLetterForm;