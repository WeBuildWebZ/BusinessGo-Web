import Head from 'next/head'
import Image from 'next/image'


import Logo from '../components/Logo'
import Frase from '../components/Frase'
import Section from '../components/Section'
import Slide from '../components/Slide'
import Pregunta from '../components/Pregunta'
import Copyright from '../components/Copyright'


import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Globy Taxi App</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,500;0,800;1,600&family=Raleway:wght@300;400;500&display=swap" rel="stylesheet"/>

        {/* etiquetas og facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Curso Avanzado de Python" />
        <meta property="og:description" content="Curso Avanzado de Python. Uso avanzado de Python para un dominio eficiente y organizado del lenguaje." />
        <meta property="og:image" content="http://eit.local.com/uploads/python-avanzado-10.jpg" />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:url" content="https://escuela.it/cursos/curso-avanzado-python" />
        <meta property="og:site_name" content="EscuelaIT" />
        <meta property="fb:app_id" content="928977633900253" />
        {/* aditional */}
        <meta name="author" content="Globy Mexico" />
        <meta name="copyright" content="Globy Mexico" />
        <meta name="Description" content="Tutorial html. Meta tags" />

      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <Logo />
          <Frase />
        </header>

        <section className={styles.iconsection}>
        <Section />
        </section>

        


        <section className={styles.image}>
        <Image
          src="/images/car.jpg"
          alt="calling taxi"
          width={1000}
          height={700}
         />
        </section>
        

        <section className={styles.pregunta}>
        <Pregunta />
        </section>
        
        <section className={styles.backgrounfinal}>
          <h3><b>Damos lo Mejor de Nosotros cada dia</b>, para brindarte a ti, el mejor servicio en tu ciudad.</h3>
        </section>

        <section className={styles.slide}>
          <Slide />
        </section>



      </main>

      <footer className={styles.footer}>

      <Copyright />
      </footer>
    </div>
  )
}
