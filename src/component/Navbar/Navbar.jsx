import {useState, useEffect} from 'react';
import logo from '/assets/image/the-vape-lab-logo.png';
import styles from './Navbar.module.css'; 

const navItem = ["CASE STUDIES", "WHAT WE DO", "OUR PROCESS", "FAQ"]

export default function Navbar() {

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
  
        if (width >= 992 ) {
          setIsCollapsed(true);
        } else {
          setIsCollapsed(false);
        }
      };
  
      window.addEventListener('resize', handleResize);
  

      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container container-fluid">
            <img src={logo} alt="The Vape Lab Official Logo" 
                 className={styles.brandLogo}/>

                <button className='navbar-toggler' 
                        data-bs-toggle='collapse' 
                        data-bs-target="#nav" 
                        aria-controls="nav" 
                        aria-label="Expand Navigation"
                        aria-expanded={!isCollapsed}>
                  <div className="navbar-toggler-icon"></div>
                </button>

                <div className="navbar-collapse collapse" id="nav">
                  <ul className={`navbar-nav ${isCollapsed ? styles.notCollapsed : styles.collapsed }`}> 
                    {navItem.map((item, index) => (
                      <li key={index} className="nav-item">{item}</li>
                    ))}
                  </ul>
                  <div className={`${styles.increaseRevenue} ${isCollapsed ? "" : "mt-2"}`}>
                    INCREASE REVENUE
                  </div>
                </div>
        </div>
    </nav>
  )
}
