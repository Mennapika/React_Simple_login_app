import React from 'react'
import Inputfield from './Inputfield'
import "./LoginForm.css"
import "./Inputfield.css"
import TrustedCompanies from './TrustedCompanies'
import Carsoul from "./Carsoul"
function Login() {

    return (
        /* Start Of Grid Container */
        <div className="grid__container">
            <div className="wrapper">
                <div className="row">
                    <div className="Left__container">
                   <Carsoul/>
                    </div>
                    <div className="right__container">
                        <div className="base-container">
                        <div className="content">
                       <div class="title_containter">
                            <img className="logo" src={require("../../Images/logo.png").default} />
                            <h3 className="title"> Log in to Instabug</h3>
                            </div>
                        </div>
                        <div className="btn__wrapper">
                            <button class="googlebtn">
                                <div class="btn__img__container"> <img class="btn__logo" src={require("../../Images/google.jpg").default} /></div>
                                <span class="btn__link"> Google</span>
                            </button>
                            <button class="githubbtn">
                                <div class="btn__img__container"> <img class="btn__logo" src={require("../../Images/github.png").default} /></div>
                                <span class="btn__link"> Github</span>
                            </button>
                            <button class="microsoftbtn">
                                <div class="btn__img__container"> <img class="btn__logo" src={require("../../Images/microsoft.png").default} /></div>
                                <span class="btn__link__microsoft"> Microsoft</span>
                            </button>
                        
                        <div class="separator"></div>
                         <div>
                         <Inputfield/>
                         </div>
                         <div>
                         <TrustedCompanies/>
                         </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
