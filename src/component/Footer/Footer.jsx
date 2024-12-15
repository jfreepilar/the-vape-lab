import React from 'react'
import styles from './Footer.module.css'
import logo from '/assets/image/the-vape-lab-logo-footer.png'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";


const navItem = ["About Us", "Contact Us", "Customer Support", "Jobs", "Legal"];

const socialMediaIcons = [
    {icon: <BsTwitterX />},
    {icon: <FaFacebookF />},
    {icon: <BsInstagram />},
    {icon: <SiLinkedin />}
];

export default function Footer() {
  return (
    <footer className={`${styles.sectionFooter}`}>
        <div>
            <div className="row mt-5">
                <div className="col col-lg-4 mt-4">
                    <div className="container">
                        <div className="container d-flex ps-3">
                            <img src={logo} 
                                alt="The Vape Lab Official logo"
                                className={styles.brandLogo}/>
                                <h1 className={`text-white mt-3 ${styles.theVapeLab}`}>The Vape Lab</h1>

                        </div>

                        <div className="container d-flex">
                            {socialMediaIcons.map((item, index) => (
                                <div key={index}
                                     className={`me-3 rounded-circle ${styles.iconContainer}`}>
                                    <p className={`text-white fw-bold ${styles.icon}`}>
                                            {item.icon}
                                    </p>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

                <div className="col col-lg-4 mt-3">
                    <div className="container">
                        <nav>
                            <ul className="list-unstyled d-flex flex-wrap justify-content-center align-content-center mt-4">
                                {navItem.map((item, index) => (
                                    <li key={index} 
                                        className={`text-white mx-2 ${styles.navList}`}>
                                            <a href="#"
                                               className="text-white text-decoration-none">
                                                {item}
                                            </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className={`col-12 col-lg-4 ${styles.formMainContainer}`}>
                    <div className="container">
                        <p className="text-white mt-2">Subscribe to The Vape Lab</p>
                        <div className="input-group pe-3">
                        <div className="form-floating flex-grow-1">
                            <input type="email"
                                   className="form-control"
                                   id="floatingInput"
                                   placeholder="name@example.com"
                                   aria-describedby="input-group-button-right"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <button type="button"
                                className="btn btn-primary"
                                id="input-group-button-right">
                                Submit
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-3 mt-md-5">
            <p className={`text-white text-center pt-5 ${styles.copyright}`}>ⓒ THE VAPE LAB</p>
        </div>
    </footer>
  )
}
