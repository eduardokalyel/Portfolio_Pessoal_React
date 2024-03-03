import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){  
    return (
        <div className={styles.footer}> 
            <ul>
                <li><a href='https://www.instagram.com/eduardokalyel/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/eduardokalyel'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/eduardo-kalyel-freitas-silveira-4703bb196/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>eduardokalyel@gmail.com</p>
            <p>Eduardo Silveira © 2024</p>
        </div>
    )

}

export default Footer