/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/TriumphPay_logo_light.svg';
// import {loginHtml} from 'constants/loginHtml';
// import {fetchExternalData} from 'hooks/fetch'
import "./loginPageWrapper.scss"

const LoginPage = ({userData,setUserData,sendData}) => {
    const [ error, setError ] = useState({emailMessage:'default',passMessage:'default'});
    const [ show, setShow ] = useState({step:1,buttonText:'Next'});
    const [ showPass,setShowPass ] = useState(false);
    
    function validateEmail(val) {        
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(val)) {
            return true
        } else {
            return false
        }
    }
    

    const emailErrorCheckAndSet = ()=>{
        const error_message = document.getElementById("email_error_message");
        if(error_message){
            error_message.style.display="flex";
        }
        const emailError = document.getElementById("email");
        if(emailError){
            emailError.classList.replace('css-1mzxa04', 'css-9t0ns');
            emailError.classList.replace('css-ue2bqk', 'css-9t0ns');
        } 
    }

    const emailSuccessCheckAndSet = ()=>{
        const error_message = document.getElementById("email_error_message");
         if(error_message){
            error_message.style.display="none";
         }
        const emailError = document.getElementById("email")
        if(emailError){
            emailError.classList.replace('css-9t0ns', 'css-1mzxa04');
            emailError.classList.replace('css-ue2bqk', 'css-1mzxa04');
        }
    }

    const passSuccessCheckAndSet = ()=>{
        const emailError = document.getElementById("pass")
        if(emailError){
            emailError.classList.replace('css-9t0ns', 'css-1mzxa04');
            emailError.classList.replace('css-ue2bqk', 'css-1mzxa04');
        }
    }
    const passErrorCheckAndSet = ()=>{
        const emailError = document.getElementById("pass");
        if(emailError){
            emailError.classList.replace('css-1mzxa04', 'css-9t0ns');
            emailError.classList.replace('css-ue2bqk', 'css-9t0ns');
        } 
    };

    useEffect(() => {
       const passwordInput = document.getElementById('passwordInput');
       if(passwordInput){
            if(showPass){
                passwordInput.type = 'text';
            }else{
                passwordInput.type = 'password';
            }
        }
    },[showPass]);

    useEffect(()=>{
       if(error.emailMessage === 'true'){
        emailErrorCheckAndSet();
       }
       else if(error.emailMessage === 'false'){
        emailSuccessCheckAndSet();
       }
       if(error.passMessage === 'true'){
        passErrorCheckAndSet();
       }
       else if(error.passMessage === 'false'){
        passSuccessCheckAndSet();
       }
    },[ error.emailMessage, error.passMessage ])

    const emailOnBlur = (e)=>{
        const isValid = validateEmail(e.target.value)
        if(!isValid){
            setError({...error, emailMessage:"true"})
        }else{
            const element = document.getElementById("email");
            if (element.classList.contains('css-9t0ns')) {
                element.classList.replace('css-9t0ns', 'css-ue2bqk');
            } else if(element.classList.contains('css-1mzxa04')){
                element.classList.replace('css-1mzxa04', 'css-ue2bqk');
            }
        }
    }

    const emailOnChange = (e)=>{
        setUserData({...userData,email:e.target.value})
        const isValid = validateEmail(e.target.value)
        if(error.emailMessage !== 'default'){
            if(!isValid){
                setError({...error, emailMessage:"true"})
            }else{
                setError({...error, emailMessage:"false"});
            }
        }
    }
    const changeStyles = (step1,step2) =>{
        const step1Elements = document.getElementById(step1);
        const step2Elements = document.getElementById(step2);
        step1Elements.style.opacity = "0";
        step1Elements.style.width = "0px";
        step1Elements.style.height = "0px";
        step1Elements.style.visibility = "hidden";

        step2Elements.style.width = "100%";
        step2Elements.style.height = "100%";
        step2Elements.style.visibility = "visible";
        step2Elements.style.opacity = "1";
    }

    const buttonOnclick = ()=> {
        if(error.message !== 'true' && userData.email){
            if(show.step === 1){
                changeStep(2);
            }else if(show.step === 2){
                sendData(userData)
            }
        }
    }
    const changeStep = ( step ) => {
        let text = 'Next';
        if(step === 1){
            text = "Next";
            changeStyles("step_2","step_1");
            setUserData({ ...userData, password:'' })
        }
        else if(step === 2){
           changeStyles("step_1","step_2");
           text = 'Verify';
        }
        setShow({...show,step:step,buttonText:text})
    }

    const passOnChange = ( e ) => {
        setUserData({...userData, password:e.target.value})
        if(e.target.value?.length>0){
          document.getElementById("pass_vizible").style.visibility='visible'
        }else if(e.target.value?.length <= 0){
          document.getElementById("pass_vizible").style.visibility='hidden'
        }
        if(error.passMessage !== 'default'){
            if(e.target.value?.length < 4){
                setError({...error, passMessage:"true"})
            }else{
                setError({...error, passMessage:"false"});
            }
        }
    }
    const passOnBlur = ( e ) => {
        const passError = document.getElementById("pass");
        if(e.target.value?.length < 4){
            setError({...error, passMessage:"true"})
        }else{
            if(passError){
                if (passError.classList.contains('css-9t0ns')) {
                    passError.classList.replace('css-9t0ns', 'css-ue2bqk');
                } else if(passError.classList.contains('css-1mzxa04')){
                    passError.classList.replace('css-1mzxa04', 'css-ue2bqk');
                }
            } 
        }
    }
  return (
    <div>
        <div >
            <div>
                <div className="css-woojob" style={{height: "245px"}}>
                    <div className="css-u43oo6">
                        <div className="css-1t1k9mk image_background">
                            <div filter="none" className="css-1gjm3wb">
                                <div width="60%" filter="none" className="css-1gjm3wb"></div>
                            </div>
                        </div>
                        <section className="css-fdghpp content_background">
                            <div className="css-q51nkd">
                                <div className="css-24a9ye">
                                    <h1 className="css-15oxi1s"></h1>
                                    <p className="css-1dalvqf"></p>
                                    <div className="css-o2jwpy">
                                        <img alt="Triumph Logo which navigates to dashboard" className="logo" src={Logo} width="176"/>
                                    </div>
                                    <div className="css-rvbkhl">
                                        <h2 className="css-bhmeaf">Sign In</h2>
                                        <p className="css-1dalvqf">or <a tabIndex="0" className="css-1lr5uvs" href="https://secure.triumphpay.com/register/payee">create an account</a></p>
                                    </div>
                                    <div className="css-1rkzce0">
                                        <div className="css-xhlbw6">
                                            {/* {
                                            show.step === 1
                                            ?
                                            ( */}
                                                <div id="step_1" className="css-c69604">
                                                    <div className="css-1yge50y">
                                                        <div className="css-12p1dus">
                                                            <div className="css-9mrbwp">
                                                                <div className="css-1mzxa04" id="email">
                                                                    <div className="css-xsg3g">
                                                                        <input onChange={emailOnChange}  name="email" placeholder='Email' className="css-1fohvm8" value={userData.email} autoFocus onBlur={emailOnBlur}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <label className="css-1l131jg">Email</label>
                                                            <div className="css-1d3wyv5" id="email_error_message">
                                                                <svg height="16px" viewBox="0 0 16 16" width="16px">
                                                                    <path clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.7301 4.4169C10.9564 4.4169 11.1734 4.50678 11.3334 4.66677C11.4136 4.74612 11.4773 4.8406 11.5208 4.94474C11.5642 5.04887 11.5866 5.16059 11.5866 5.27343C11.5866 5.38627 11.5642 5.498 11.5208 5.60213C11.4773 5.70626 11.4136 5.80074 11.3334 5.8801L9.20673 8.0001L11.3334 10.1268C11.4934 10.2868 11.5833 10.5038 11.5833 10.7301C11.5833 10.9564 11.4934 11.1734 11.3334 11.3334C11.1706 11.4907 10.9531 11.5785 10.7267 11.5785C10.5004 11.5785 10.2829 11.4907 10.1201 11.3334L8.00006 9.2001L5.88673 11.3334C5.72495 11.4952 5.50553 11.5861 5.27673 11.5861C5.04794 11.5861 4.82851 11.4952 4.66673 11.3334C4.50495 11.1717 4.41406 10.9522 4.41406 10.7234C4.41406 10.6101 4.43638 10.498 4.47973 10.3933C4.52308 10.2886 4.58663 10.1935 4.66673 10.1134L6.80007 8.0001L4.66673 5.8801C4.50794 5.71809 4.41899 5.50029 4.41899 5.27343C4.41899 5.04658 4.50794 4.82877 4.66673 4.66677C4.7462 4.58553 4.84109 4.52099 4.94584 4.47692C5.05059 4.43286 5.16309 4.41016 5.27673 4.41016C5.39037 4.41016 5.50287 4.43286 5.60762 4.47692C5.71237 4.52099 5.80726 4.58553 5.88673 4.66677L8.00006 6.79343L10.1267 4.66677C10.2868 4.50678 10.5038 4.4169 10.7301 4.4169Z" fill="var(--icon-color)" fillRule="evenodd"></path>
                                                                </svg>
                                                                <p className="css-1kk0tyz">Invalid email</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        
                                            <div id="step_2" className="css-j3ggb8">
                                                <div className="css-1yge50y fade-enter-done">
                                                        <div className="css-aky38">
                                                            <div className="css-1pdpq0l">
                                                                <div className="css-9mrbwp">
                                                                    <div className="css-ue2bqk">
                                                                        <div className="css-xsg3g">
                                                                            <input  rows="1" className="css-1fohvm8" value={userData.email} disabled={true} />
                                                                            <div className="css-17c4fmr">
                                                                                <div className="css-st4ipo">
                                                                                    <button  type="button" className="css-177bt51" onClick={()=>changeStep(1)}>edit</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <label className="css-1l131jg">Email</label>
                                                            </div>
                                                        </div>
                                                    <div className="css-1yge50y">
                                                        <div className="css-12p1dus">
                                                            <div className="css-9mrbwp">
                                                                <div className="css-1mzxa04" id="pass">
                                                                    <div className="css-xsg3g">
                                                                        <input id="passwordInput" onChange={passOnChange} type="password" className="css-1fohvm8" value={userData.password} autoFocus onBlur={passOnBlur}/>
                                                                        <div className="css-17c4fmr" id="pass_vizible">
                                                                            <button ariaLabel="activate to reveal password" className="css-b6pc11" pointerEvents="auto" type="button" onClick={() => !showPass ? setShowPass(true) : setShowPass(false)}>
                                                                                <span className="css-1vmu5qv">
                                                                                    <svg height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg">
                                                                                        {!showPass?
                                                                                            <g fill="none" fillRule="evenodd" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
                                                                                                <path d="M8,3.5 C5.49179157,3.45466472 2.89678208,5.33463561 1.2659177,7.25805135 C0.911360766,7.67980458 0.911360766,8.3203617 1.2659177,8.74211493 C2.86131498,10.6248623 5,12.5 8,12.5 C11,12.5 13.1374406,10.6248623 14.7340823,8.74211493 C15.0886392,8.3203617 15.0886392,7.67980458 14.7340823,7.25805135 C13.1013512,5.33463561 10.5082084,3.45466472 8,3.5 Z" id="Shape" stroke="var(--icon-color)" strokeWidth="2"></path>
                                                                                                <path d="M10,8.00053337 C9.99970518,9.10503337 9.10414435,10.0001963 7.99964436,10 C6.89514437,9.99980363 5.99990185,9.10432235 6,7.9998223 C6.00009815,6.89532226 6.89549981,6 8,6 C8.53056859,5.99985847 9.03943951,6.2105999 9.41455828,6.58581872 C9.78967704,6.96103753 10.0002828,7.46996464 10,8.00053337 L10,8.00053337 Z" id="Shape" stroke="var(--icon-color)" strokeWidth="2"></path>
                                                                                            </g>
                                                                                        :
                                                                                            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                                                                                                <path d="M10.9735,7.7629 C10.9735,9.4199 9.6305,10.7629 7.9735,10.7629 C6.3165,10.7629 4.9735,9.4199 4.9735,7.7629 C4.9735,6.1059 6.3165,4.7629 7.9735,4.7629 C9.6305,4.7629 10.9735,6.1059 10.9735,7.7629" id="Fill-1" fill="var(--icon-color)"></path><line id="Stroke-3" stroke="var(--icon-color)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.2001" x2="14.3881" y1="13.6999" y2="1.9999"></line>
                                                                                                <path d="M7.9989,12.2619 C10.5499,12.3079 13.1379,10.3869 14.7339,8.5039 C15.0889,8.0819 15.0889,7.4419 14.7339,7.0199 C14.4729,6.7119 14.1869,6.4059 13.8799,6.1079 C13.2699,5.5139 12.5789,4.9549 11.8409,4.4929" id="Stroke-5" stroke="var(--icon-color)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M7.9989,3.2638 C5.4909,3.2188 2.8969,5.0968 1.2659,7.0198 C0.9119,7.4418 0.9119,8.0818 1.2659,8.5038 C2.1499,9.5468 3.3379,10.6018 4.6559,11.3278" id="Stroke-7" stroke="var(--icon-color)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                                                                            </g>
                                                                                        }
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <label className="css-1l131jg">Password</label>
                                                        </div>
                                                    </div>
                                               </div>
                                            </div>
                                          
                                            <label className="css-1ag2b8b">
                                                <input type="checkbox" className="css-en939q"/>
                                                <span> 
                                                    <span className="css-15gzeug" onClick={
                                                        (e) => {
                                                            const remember_me = document.getElementById("remember_me");
                                                            const visible = remember_me.style.visibility;
                                                            if(visible === 'hidden'){
                                                                remember_me.style.visibility = 'visible'
                                                            }else{
                                                                remember_me.style.visibility = 'hidden'; 
                                                            }
                                                        }}
                                                    >
                                                        <svg id="remember_me" height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg" style={{"--icon-color":"var(--button-content-color, var(--color-blue500))",visibility:'hidden'}}><g fill="none" fillRule="evenodd" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><polyline id="Path" points="10.8284271 -1.07106781 10.8284271 13.0710678 5.17157288 13.0710678" stroke="var(--icon-color)" strokeWidth="2" transform="translate(8.000000, 6.000000) rotate(-315.000000) translate(-8.000000, -6.000000) "></polyline></g></svg>
                                                    </span>
                                                </span>
                                                <span className="css-1kk0tyz">Remember me</span>
                                            </label>
                                                <div className="css-1hktnvt">
                                                    <button className="css-1y6plhi" onClick={()=>buttonOnclick()} disabled={(show.step === 2 && userData.password?.length < 4  ) ? true : false}>
                                                        <span className="css-1vmu5qv">{show.buttonText}</span>
                                                    </button>
                                                </div>
                                            <div className="css-lbsuye">
                                                <a tabIndex="0" className="css-1lr5uvs" href="https://secure.triumphpay.com/" style={{fontSize:"16px"}}>I forgot my password</a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage