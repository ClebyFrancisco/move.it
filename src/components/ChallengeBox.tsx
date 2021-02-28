import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts'
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    
    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);


    
    return(
        <div className={ styles.ChallengeBoxContainer }>
           { activeChallenge ? (
           <div className={ styles.ChallengeActive}>
               <header>
                   Ganhe { activeChallenge.amount } xp
               </header>

               <main>
                   <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                   <strong>Novo desafio</strong>
                   <p> { activeChallenge.description } </p>
               </main>

               <footer>
                   <button 
                   type="button"
                   onClick={resetChallenge}
                   className={ styles.ChallengerFailedButton}
                   >
                       Falhei
                   </button>
                   <button
                   type="button"
                   className={ styles.ChallengerSucceededButton}
                   >
                       Completei
                   </button>
               </footer>

           </div>

           ):(
                <div className ={styles.ChallengeNotactive}>
                <strong>Finalize um ciclo para receber um desafio!</strong>
                <p>
                  <img src="icons/level-up.svg" alt=""/>
                  Avance de level completando desafios.
                </p>

            </div>
           )}

        </div>
    )
}