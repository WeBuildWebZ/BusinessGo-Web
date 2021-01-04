import Head from 'next/head'

import Logo from '../components/Logo'
import Frase from '../components/Frase'
import Section from '../components/Section'
import BoxCuatroImages from '../components/BoxCuatroImages'

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
        <meta property="og:title" content="Globy Taxi App" />
        <meta property="og:description" content="Somos una app mexicana de taxis que opera con autos concesionados." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/globy.jpg?alt=media&token=55c1445f-de46-4b59-b47f-f39dd89899e2" />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:url" content="https://globy-design.vercel.app/" />
        <meta property="og:site_name" content="Globy" />
        <meta property="fb:app_id" content="928977633900253" />
        {/* aditional */}
        <meta name="author" content="Globy Mexico" />
        <meta name="copyright" content="Globy Mexico" />
        <meta name="Description" content="Globy, la App para taxistas." />

      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <Logo />
          <Frase />
        </header>

{/* seccion color negro con iconos verdes */}
        <section>
        <Section />
        </section>

        <section className={styles.image}>
        <BoxCuatroImages />
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
