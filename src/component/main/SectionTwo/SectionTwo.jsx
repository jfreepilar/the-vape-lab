import React from 'react';
import borderOne from '/assets/image/border-1.png'
import juiceHead from '/assets/image/juice-head.png';
import smok from '/assets/image/smok.png';
import vapetasia from '/assets/image/vapetasia.png';
import borderTwo from '/assets/image/border-2.png'
import attentive from '/assets/image/attentive.png';
import bigCommerce from '/assets/image/big-commerce.png';
import shopify from '/assets/image/shopify.png';
import openSend from '/assets/image/opensend.png';
import klaviyo from '/assets/image/klaviyo.png';
import styles from './SectionTwo.module.css'

const productList = [
    {name: "Juice Head",
     image: juiceHead, 
     alt: "Photo of Juice Head product",
     ariaLabelDescription: "Explore Juice Head products"},
    {name: "SMOK", 
     image: smok, 
     alt: "Photo of SMOK product",
     ariaLabelDescription: "Explore SMOK products"},
    {name: "Vapetasia", 
     image: vapetasia, 
     alt: "Photo of Vapetasia product",
     arialLabelDescription: "Explore Vapetasia products"},
  ];

const techPartners = [
    {logo: attentive, alt: "Photo of Attentive logo"},
    {logo: bigCommerce, alt: "Photo of Big Commerce logo"},
    {logo: shopify, alt: "Photo of Shopify logo"},
    {logo: openSend, alt: "Photo of OpenSend logo"},
    {logo: klaviyo, alt: "Photo of Klaviyo logo"},
  ];


export default function SectionTwo() {
  return (
    <section> 
        <div className={styles.firstRow}>
            <img src={borderOne} alt="Torn Paper" className={`${styles.borderOne}`}/>
            <div className="text-center mt-5">
                <h3 className="text-white mb-0 display-3">OUR SUCCESS STORIES</h3>
                <p className={`fw-bold text-white ${styles.willYouBeNext}`}>WILL YOU BE NEXT?</p>
            </div>

            <div className="row d-flex">
                {productList.map((item, index) => (
                    <div key={index} className="col d-flex gy-4 d-flex justify-content-center">
                            <div className={`card ${styles.cardContainer}`}>
                                <div className="card-body d-flex flex-column">
                                    <img src={item.image} 
                                        alt={item.alt}
                                        className="h-75 rounded" />
                                    <h4 className="text-center fw-bold mt-3">{item.name}</h4>
                                    <button className="generic-button mx-auto"
                                            aria-label={item.ariaLabelDescription || `Explore ${item.name}`}>
                                                Explore
                                    </button>
                                </div>
                            </div>
                    </div>
                ))} 
            </div>
            <img src={borderTwo} alt="Torn Paper" className={`${styles.borderTwo}`}/>
        </div>

        <div className="row mx-auto" >
            <h3 className="text-center display-3">OUR TECH PARTNERS</h3>
            <div className={`col d-flex flex-wrap justify-content-around ${styles.brandContainer}`}>
                {techPartners.map((item, index) => (
                    <div key={index}>
                        <img src={item.logo} alt={item.alt} className={`mt-3 ${styles.brandLogo}`} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
