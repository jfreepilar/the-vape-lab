    import React from 'react';
    import imageOne from '/assets/image/image-1.png';
    import imageTwo from '/assets/image/image-2.png';
    import imageThree from '/assets/image/image-3.png';
    import imageFour from '/assets/image/image-4.png';
    import { TbTargetArrow } from 'react-icons/tb';
    import { SiLibreofficewriter } from 'react-icons/si';
    import { HiOutlineMailOpen } from 'react-icons/hi';
    import { CgCopy } from 'react-icons/cg';
    import styles from './SectionThree.module.css'
        
    const cardContent = [
        {title: 'Brand Strategy',
        text: "Our team understands the cannabis industry's unique regulations and challenges. We create tailored strategies to increase your brand’s presence and revenue, while ensuring full compliance.",
        image: imageOne,
        icon: <TbTargetArrow />,},
        {title: 'Copy Writting',
        text: "We craft engaging, compliant copy that resonates with your audience and adheres to industry regulations. Overcome the limitations of social media and paid ads with our expert copy.",
        image: imageTwo,
        icon: <CgCopy />,},
        {title: 'Email Design',
        text: "Our designs stand out and drive engagement, focusing on creativity and compliance. Navigate email provider restrictions with our expertly crafted emails.",
        image: imageThree,
        icon: <SiLibreofficewriter />,},
        {title: 'Klaviyo Management',
        text: "Leave the heavy lifting to us! We manage your Klaviyo account, ensuring optimal performance and compliance with vape industry regulations.",
        image: imageFour,
        icon: <HiOutlineMailOpen />,},
    ];

    export default function SectionThree() {
    return (
        <section className={styles.sectionThree}>
            <h3 className="text-center display-3">Full Stack Email & SMS</h3>
            <div className="row">
                <div className="col-8 col-lg-5 mx-auto">
                    <p className={`text-center ${styles.strategyParagraph}`}>
                        We create your strategy, craft compelling copy, design engaging emails, and constantly measure, analyze, test, and optimize
                        your campaigns to keep your brand ahead of the competition.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row vstack mx-auto gy-4 w-100">
                    {cardContent.map((item, index) => (
                        <div key={index} className="col-10 col-md-8 col-lg-6  mx-auto">
                            <div className="card box-shadow" >
                            <img src={item.image}
                                alt={`Illustration for ${item.title}`}
                                className="card-img-top"/>
                                <div className="card-body">
                                    <div className="px-5 d-flex flex-column justify-content-center">
                                        <div className="d-flex py-3">
                                            <div className={`rounded-5 d-flex justify-content-center text-white me-3 ${styles.iconContainer}`}>
                                                <p className={`rounded-5 text-white ${styles.icon}`}>{item.icon}</p>
                                            </div>
                                            <h4>{item.title}</h4>
                                        </div>
                                        <div className="col">
                                            <p className={styles.cardParagraph}>{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>


            <div className="generic-button mx-auto mt-5">FREE CONSULTATION</div>
        </section>
    )
    }
