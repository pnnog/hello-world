import styles from './notFound.module.css'
import dogPic from './erro_404.png'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  function backOnePage(e) {
    e.preventDefault()
    navigate(-1)
  }


  return (
  <>
    <div className={styles.conteudoContainer}>
      <span className={styles.texto404}>404</span>
      
      <h1 className={styles.titulo}>
        Ops! Página não encontrada
      </h1>

      <p className={styles.paragrafo}>
        Tem certeza de que era isso que você estava procurando? 
      </p>
      
      <p className={styles.paragrafo}>
        Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
      </p>

      <div className={styles.botaoContainer}>
        <Button onClick={backOnePage} size='lg'> Voltar </Button>
      </div>

      <img className={styles.cachorro} src={dogPic} alt="Foto de um cachorrinho de óculos" />
    </div>

    <div className={styles.espacoEmBranco}></div>
    </>
  
  )
}
