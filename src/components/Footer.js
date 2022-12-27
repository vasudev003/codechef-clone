import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';
import React from 'react';


function Footer() {
  return (

    <footer className="l-footer">
            <div className="l-footer__content m-footer__content">
                <div className="l-footer__text">
                    <span className="m-footer__text">Important Links of our resources &amp; information -</span>
                </div>
                <div className="l-footer__links"><div className="l-footer__column"><div className="l-footer__head"><p className="m-footer__head">Programming Tools</p></div><div className="l-footer__list"><div className="l-footer__link"><a href className="m-footer__link">Online IDE</a></div><div className="l-footer__link"><a href className="m-footer__link">Upcoming Coding Contests</a></div><div className="l-footer__link"><a href className="m-footer__link">Host Your Contest</a></div><div className="l-footer__link"><a href className="m-footer__link">Problem Setting</a></div></div></div><div className="l-footer__column"><div className="l-footer__head"><p className="m-footer__head">Learning Resources</p></div><div className="l-footer__list"><div className="l-footer__link"><a href className="m-footer__link">Getting Started</a></div><div className="l-footer__link"><a href  className="m-footer__link">Practice Problems</a></div><div className="l-footer__link"><a href  className="m-footer__link">CodeChef Discuss</a></div><div className="l-footer__link"><a href  className="m-footer__link">FAQ's</a></div></div></div><div className="l-footer__column"><div className="l-footer__head"><p className="m-footer__head">More</p></div><div className="l-footer__list"><div className="l-footer__link"><a href  className="m-footer__link">CodeChef For Business</a></div><div className="l-footer__link"><a href  className="m-footer__link">Contact Us</a></div><div className="l-footer__link"><a href  className="m-footer__link">Code Of Conduct</a></div><div className="l-footer__link"><a href className="m-footer__link">User Ranklist</a></div><div className="l-footer__link"><a href className="m-footer__link">Privacy policy</a></div><div className="l-footer__link"><a href className="m-footer__link">Terms</a></div></div></div></div>
            </div>
            <div className="l-footer__social">
                <div className="m-footer__social">
                    <div className="l-footer__site">
                        <a href="/"  className="m-footer__site is-link-hovered ">www.codechef.com</a>
                    </div>
                    <div className="l-footer__follow-sec">
                        <div className="l-footer__follow">
                            <span className="m-footer__follow">Follow Us</span>
                        </div>
                        <div className="l-footer__icons">
                            <a href ><InstagramIcon /></a>
                            <a href ><LinkedInIcon /></a>
                            <a href ><TelegramIcon /></a>
                            <a href ><TwitterIcon /></a>
                        </div>
                    </div>
                </div>
           </div>
        </footer>

    
  )
}

export default Footer
