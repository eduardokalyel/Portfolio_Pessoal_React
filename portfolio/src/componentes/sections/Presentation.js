import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'
import ButtonB from './elements/ButtonB'

function Presentation(){  
    return (
        <div className={styles.presentation} id="Presentation">
           <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
           <h1>Olá, eu sou o Eduardo Silveira!</h1>
           <p>
            
            Sempre sonhei em programação e desenvolvimento.<br/> 
            Estou determinado a seguir essa nova jornada, buscando oportunidades<br/>
            para aplicar minhas habilidades interpessoais e paixão pelo aprendizado<br/>
            na área de tecnologia.<br/> 
            Sou um profissional versátil, dedicado e focado em resultados, pronto para contribuir<br/> 
            significativamente para equipes de tecnologia.<br/>

           </p>

           <ButtonA link='https://www.linkedin.com/in/eduardo-kalyel-freitas-silveira-4703bb196/' text='Conecte-se comigo!'/>
        </div>
    )

}

export default Presentation