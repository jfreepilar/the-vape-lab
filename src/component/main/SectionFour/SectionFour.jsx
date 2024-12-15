import React from 'react';
import topCloud from '/assets/image/top-cloud.png';
import bottomCloud from '/assets/image/bottom-cloud.png';
import { TbMessage2Search } from 'react-icons/tb';
import { FaComputer } from 'react-icons/fa6';
import { BsRocketTakeoff } from 'react-icons/bs';
import { BsBarChartLine } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { SiLibreofficewriter } from 'react-icons/si';
import styles from './SectionFour.module.css'


const process = [
    {steps: 'Email Marketing Audit',
     icon: <TbMessage2Search />,
     text: 'Schedule a 15-minute discovery call to discuss your specific needs and provide you with a complimentary Email Marketing Audit.',
     number: 1,
    },
    {steps: 'Consultation & Strategy Call',
      icon: <FaComputer />,
      text: 'We craft a customized strategy plan on how to best market your brand. Learn about our expertise, services offered, and how we can help scale your business.',
      number: 2,
    },
    {steps: 'Onboarding & Kickoff Call',
      icon: <BsRocketTakeoff />,
      text: 'Once you are ready to partner with us, we get you onboarded and get the party started. We get your sales and customer engagement high as a kite.',
      number: 3,
    },
    {
     steps: 'Produce First Designs',
     icon: <SiLibreofficewriter />,
     text: 'Within the first few days, we deliver the initial email design drafts. You provide feedback, and we revise as needed.',
     number: 4,
    },
    {
      steps: 'Launch Campaigns & Flows',
      icon: <HiOutlineMailOpen />,
      text: 'We get your campaigns and automations live and generating revenue, engagement and customers.',
      number: 5,
     },
    {steps: 'Split test, Analyze, and Improve Performance',
      icon: <BsBarChartLine/>,
      text: 'We review performance data, make improvements, and constantly split-test to achieve better metrics over time.',
      number: 6,
    }
  ];


export default function SectionFour() {
  return (
    <section className={`mt-5 ${styles.sectionFour}`}>
        <img src={topCloud} 
              alt="Cloud Photo" 
              className={styles.cloudAbove}/>
        <h3 className="display-3 text-white">OUR PROCESS</h3>
        <p className={styles.headingParagraph}>Ready to grow your vape brand?</p>
        <p className={styles.headingParagraph}>Here's how we work together</p>

        <div className="row g-5 mt-2">
            {process.map((item, index) => (
              <div key={index} className={`col-12 col-md-6 col-lg-4 ${styles.cardParent}`}>
                      <div className={`mx-auto rounded-circle ${styles.numberContainer}`}>
                        <p className="text-center text-white fw-bold">{item.number}</p>
                      </div>
                
                    <div className={`card h-100 border-0 ${styles.card}`}>
                        <div className={`card-body ${styles.cardBody}`}>
                            <p className="text-center text-white fw-bolder display-2">{item.icon}</p>
                            <h4 className="card-title text-center text-white">{item.steps}</h4>
                            <p className={`text-white text-center ${styles.cardParagraph}`}>{item.text}</p>
                        </div>
                    </div>       
              </div>
            ))}
        </div>
        <img src={bottomCloud} 
                 alt="Cloud Photo" 
                 className={styles.cloudBelow}/>
    </section>
  )
}
