import styles from '../../sections/Card.module.css'
import basednc from '../../../Images/projects/basednc.jpg'
import APIdnc from '../../../Images/projects/APIdnc.jpg'
import ButtonB from '../elements/ButtonB'

function Card({img, title, tech, description, repo, site}){
    return(
        <div className={styles.card}>

            <a href={site}>
                <img src={img} alt='ERRO'/>
            </a>

            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse meu repositório' link={repo}/>
            </section>
        </div>
    )
}

export default Card