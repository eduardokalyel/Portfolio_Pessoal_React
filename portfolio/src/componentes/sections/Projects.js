import styles from './Projects.module.css'
import ButtonC from './elements/ButtonC'
import Card from '../sections/elements/Card'
import basednc from '../../Images/projects/basednc.jpg'
import APIdnc from '../../Images/projects/APIdnc.jpg'

function Projects(){  
    return (
        <div className={styles.projects} id="Project">

            <h1> Projetos </h1>

            <Card
            img={basednc}
            title="Landing Page - Empresa Arquitetura"
            tech="HTML, CSS" 
            description="Desenvolvimento de uma Landig Page para uma empresa de arquitetura para captura de Leads"
            repo="https://github.com/eduardokalyel/DesafioBaseDNC"
            site="https://projetobasekalyel.netlify.app/"
            />

            <Card
            img={APIdnc}
            title="Landing Page para consulta de CEP e Temperatura da região"
            tech="HTML, CSS e JS" 
            description="API criada para consultar Rua, Bairro, Cidade de acordo com o CEP informado e também a temperatura do momento de acordo com a Latitude e Longitude informada"
            repo="https://github.com/eduardokalyel/DesafioAPI_DNC"
            site="https://desafioapidnc.netlify.app/"
            />
            
            <ButtonC text='Acesse meu repositório completo!' link='https://github.com/eduardokalyel?tab=repositories'/>
        </div>
    )

}

export default Projects