import React from 'react';
import './TrustedCompanies.css';
import './Inputfield.css'

const TrustedCompanies = () => {
    return (
        <div className="base-container">
            <div className="content">
                <div className="form">
                <h2 class="trustedComapny__text">Trusted by the top Companies.</h2>
                <div class="trustedCompany__logoCotainer">
                        <img  class="trustedCompany__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Lyft_Logo_Grey.svg/1200px-Lyft_Logo_Grey.svg.png"/>
                        <img  class="trustedCompany__logo"  src="https://images.squarespace-cdn.com/content/v1/59967c766a4963119596fdc4/1511804227838-VWFGWYX5G1SAZI1ME940/ke17ZwdGBToddI8pDm48kEDSkvPxgtywJX34EjCY3IdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzIuNjmiqiL2qyiCc57TtLOIQPjfFmeljZKFxm0iTAYaSevZNjNtNecLT6RMXzYUTM/BuzzFeed-Logo-Grey.png"/>
                        <img  class="trustedCompany__logo asana"  src="https://www.azendoo.com/wp-content/uploads/2020/09/asana-logo-azendoo.png"/>
                        <img  class="trustedCompany__logo asana"  src="https://i2.wp.com/theschedio.com/wp-content/uploads/2020/03/OnePlus_LU_Black_RGB.png?fit=740%2C254&ssl=1"/>
                        <img class="trustedCompany__logo houseparty" src="https://houseparty.com/in-the-house/images/houseparty-logo-black.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedCompanies
