import Head from 'next/head'
import { CompletedChallenger } from '../components/CompletedChallenger';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/profile";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from '../components/ChallengeBox'
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      

      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenger />
          <Countdown />

        </div>
        <div>
          <ChallengeBox />


        </div>
      </section>


    </div>
  )
}
