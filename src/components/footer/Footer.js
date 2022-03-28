import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import './Footer.css';

const Footer = () => {
    const [isEnglish, setEnglish] = useContext(LanguageContext);
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        {/* <img className="w-50" src="https://i.ibb.co/r0KDpzF/logo.png" alt="logo" /> */}
                    </div>
                    <div className="col-md-3">
                        <ul className="p-5">
                            <li><a href="/"> {isEnglish ? 'About Online News' : 'অনলাইন সংবাদ সম্পর্কে'}</a></li>
                            <li><a href="/">{isEnglish ? 'Read Our Blog' : 'আমাদের ব্লগ পড়ুন'} </a></li>
                            <li><a href="/">{isEnglish ? 'Sign up to' : 'সাইন আপ করুন'}</a></li>
                            <li><a href="/">{isEnglish ? 'Add your news' : 'আপনার খবর যোগ করুন'}</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="p-5">
                            <li><a href="/">{isEnglish ? 'Need help' : 'সাহায্য দরকার'}</a></li>
                            <li><a href="/">{isEnglish ? 'Online FAQs' : 'অনলাইন FAQs'}</a></li>
                            <li><a href="/">{isEnglish ? 'View all cities' : 'সব শহর দেখুন'}</a></li>
                            <li><a href="/">{isEnglish ? 'near me' : 'আমার কাছে'}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col-md-6">
                        <p>{isEnglish ? 'Copyright © Online News' : 'কপিরাইট © অনলাইন সংবাদ'}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-right d-flex">
                            <ul>
                                <li ><a href="/">{isEnglish ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}</a></li>
                                <li><a href="/">{isEnglish ? 'Terms of use' : 'ব্যবহারের শর্তাবলী'}</a></li>
                                <li><a href="/">{isEnglish ? 'Condition' : 'শর্ত'}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;