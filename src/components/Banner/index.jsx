import styles from './banner.module.css'
import picMobile from './banner-pic.png'

export default function Banner() {
  return (
    <div className={styles.banner_wrapper}>

      <div className={styles.textbox}> 
        <h1> Olá, Mundo!</h1>
        <p>Boas vindas ao meu espaço pessoal. Eu sou Paulo, Desenvolvedor front end e aqui compartilho meus projetos mais bacanas. Espero que aprenda, se inspire ou goste de algo! :) </p>
      </div>
     
      <div className={styles.image_box}>
          <img src={picMobile} alt='Paulo Nogueira, desenvolvedor front end'/> 
      </div>
    </div>
  )
}
