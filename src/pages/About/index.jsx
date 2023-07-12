import PostDefault from 'components/PostDefault'
import styles from './about.module.css'
import coverImage from './sobre_mim_capa.png'
import photo from './sobre_mim_foto.png'

export default function About () {
  return (
    <>
      <PostDefault title='Sobre mim' coverImage={coverImage}>

        <h3 className={styles.subtitle}> Olá, eu sou o Paulo!</h3>

          <p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste porro nemo autem in, dolor expedita asperiores quidem tempore doloribus nostrum. Explicabo aliquid eligendi sequi iure molestiae asperiores eaque dolorum ipsa</p>

          <p className={styles.paragraph}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam! </p>


          <img className={styles.image} src={photo} alt="Minha foto de perfil" />
       

        <p className={styles.paragraph}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam! </p>

        <p className={styles.paragraph}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam! </p>

        <p className={styles.paragraph}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam! </p>

        <p className={styles.paragraph}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam! </p>

        <p className={styles.paragraph}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aliquam commodi tenetur delectus. Molestiae culpa dolorum reprehenderit suscipit commodi, laboriosam soluta sapiente quo, placeat nisi ipsam tempora quae quos nam! </p>
      </PostDefault>
    </>
  )
}