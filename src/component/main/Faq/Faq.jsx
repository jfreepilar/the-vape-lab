import React from 'react';
import styles from './Faq.module.css'

const answerList = [
    'A dedicated team including an Email Marketing Specialist, Copywriter, Designer, Email         Marketing Technician, and Account Manager.',
    'Customer-centered marketing strategy with Customer Lifecycle Flows and Advanced Flows.',
    'Regular account audits and ongoing adjustments.',
    'Advanced segmentation and targeting.',
    'Optimized ROI and engagement.',
    'Customizable email and SMS communication from your Email Marketing Specialist.',
    'Comprehensive monthly campaign review.',
    'Monthly reports that are in-depth with common KPIs we track and prioritize for your account.'
  ];
  
  const questionsAndAnswers= [
     {question:'Which ESPs & eCommerce platforms do you work with?',
      answer: 'We specialize in Klaviyo, one of the only platforms that allows vape-related marketing. We work with Shopify, Shopify Plus, Magento, WooCommerce, and other eCommerce stores. Our expertise ensures compliance with vape industry regulations across all platforms.',
     },
     {question:'How many emails come with my plan?',
      answer: 'We have several plan options based on the number of emails you would like us to create for your strategy each month. Depending on your company & marketing objectives, your Account Executive will help you select the plan that best fits your needs.',
     },
     {question:'What does onboarding look like?',
      answer: 'The first thing we do is have you fill out a simple onboarding document. Then, we launch your project with a kick-off call where you meet your Email Marketing Specialist.',
     },
     {question:'Is there a minimum commitment required for your services?',
      answer: 'Absolutely not. We don’t believe in tying anyone down. If you stay, it’s because of the excellent service we provide, not a binding contract.',
     },
  ]

export default function Faq() {
  return (
    <section className="container">

        <h3>FREQUENTLY ASKED QUESTIONS</h3>

        <div className="row d-flex flex-column align-content-center">
            <div className="col-9">
                    <div className="card box-shadow mb-3">
                        <div className="card-body px-5">
                            <h4>What do your service plans include?</h4>
                            {answerList.map((item, index) => (
                                <ul key={index}>
                                    <li className={styles.smallList}>{item}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
            </div>
        </div>

        <div className="row d-flex flex-column align-content-center">
            <div className="col-9">
                {questionsAndAnswers.map((item, index) => (
                    <div key={index} className="card box-shadow mb-3">
                        <div className="card-body px-5">
                            <h4>{item.question}</h4>
                            <div className={styles.cardText}>{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
  )
}
