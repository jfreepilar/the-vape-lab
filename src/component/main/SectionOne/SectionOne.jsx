import React from 'react';
import vapeJuice from '/assets/image/vape-juice.png';
import splash from '/assets/image/splash.png';
import voopoo from '/assets/image/voopoo.png';
import geekVape from '/assets/image/geek-vape.png';
import nakedOneHundred from '/assets/image/naked-100.png';
import GradientIcon from '../GradientIcon';
import { GoShieldCheck } from 'react-icons/go';
import { FaScaleBalanced } from 'react-icons/fa6';
import { VscSend } from 'react-icons/vsc';
import { BsBarChartLine } from 'react-icons/bs';
import styles from './SectionOne.module.css';

const container = [
    {icon: GoShieldCheck, text: "MARKET & REGULATION COMPLIANT"},
    {icon: FaScaleBalanced, text: "ATTORNEY REVIEWED CONTENT" },
    {icon: VscSend, text: "GUARANTEED EMAIL DELIVERABILITY" },
    {icon: BsBarChartLine, text: "INCREASE CUSTOMERS & REVENUE" },
  ];

const brands = [
    {source: voopoo, alt:"VooPoo Logo"},
    {source: geekVape, alt:"Geek Vape Logo"},
    {source: nakedOneHundred, alt:"Naked Logo"},
];

const trustedByBrands = [ "TRUSTED BY LEADING", "VAPE BRANDS"]


export default function SectionOne() {


  return (
    <section className="container my-5">
        <div className="row">
            <div className="col d-flex w-full justify-content-center">
                <div>
                    <img 
                        src={vapeJuice} 
                        alt="Vape Juice"
                        className={styles.vapeJuice} />
                    <img 
                        src={splash} 
                        alt="Splash"
                        className={styles.splash} />
                </div>
            </div>

            <div className="row my-5 ms-1">
                <div className={`container d-flex flex-column flex-lg-row  align-content-lg-center justify-content-lg-center bg-white p-4 rounded-3 box-shadow ${styles.brandContainer}`}>
                    <div className={`col col-lg-5 col-sm  d-flex flex-column justify-content-center fw-bold ${styles.paragraph}`}>
                        {trustedByBrands.map((item, index) => (
                            <h4 key={index} 
                                className="display-6 fw-bold text-center">
                                {item}
                            </h4>
                        ))}
                    </div>
                    <div className="col col-lg-7 d-flex justify-content-around">
                        {brands.map((item,index) => (
                            <div key={index}>
                                <img src={item.source} 
                                     alt={item.alt}
                                     className={styles.leadingBrand}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="row gy-5">
            {container.map((item, index) => (
                <div key={index} className="col-6 col-lg d-flex justify-content-evenly">
                    <div className={`${styles.container} card d-flex flex-column justify-content-center box-shadow`}>
                        <div className="card-body">
                            <p className={`${styles.icons}`}>
                                <GradientIcon icon={item.icon} index={index}/>
                            </p>
                            <h4 className={`text-center fw-bold ${styles.iconText}`}>{item.text}</h4>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </section>
  )
}
