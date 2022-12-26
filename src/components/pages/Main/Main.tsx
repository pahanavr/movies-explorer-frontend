import { AboutMe } from '../../features/AboutMe/AboutMe';
import { AboutProject } from '../../features/AboutProject/AboutProject';
import { Footer } from '../../features/Footer/Footer';
import { Header } from '../../features/Header/Header'
import { Portfolio } from '../../features/Portfolio/Portfolio';
import { Promo } from '../../features/Promo/Promo'
import { Techs } from '../../features/Techs/Techs';
import styles from './Main.module.css';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  )
}