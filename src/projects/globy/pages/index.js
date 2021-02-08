import Logo from '../components/Logo';
import Frase from '../components/Frase';
import Section from '../components/Section';
import BoxCuatroImages from '../components/BoxCuatroImages';
import Slide from '../components/Slide';
import Pregunta from '../components/Pregunta';
import Copyright from '../components/Copyright';
import styles from '../styles/Home.module.scss';
import Suscripcion from '../components/Suscripcion';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Logo />
      <Frase />
      <Section />
      <BoxCuatroImages />
      <Pregunta />
      <Slide />
      <section className={styles.backgrounfinal}>
        <h3>
          <b>Damos lo Mejor de Nosotros cada dia</b>, para brindarte a ti, el mejor servicio en tu ciudad.
        </h3>
      </section>
      <Logo />
      <Suscripcion />
      <Footer />
      <Copyright />
    </>
  );
}
