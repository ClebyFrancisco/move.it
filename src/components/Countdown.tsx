import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Countdown.module.css';

let CountdownTimeOut: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25*60);
    const [isActive, setIsActive]= useState(false)
    const [hasFinished, setHasfinished]= useState(false);

    const minutes = Math.floor(time / 60);
    const seconds =time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    function startCountdown(){
        setIsActive(true)

    }
    function resetCountdown(){
        clearTimeout(CountdownTimeOut);
        setIsActive(false);
        setTime( 25 * 60);

    }
    useEffect(() =>{
        if (isActive && time > 0){
            CountdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1)
        } else if( isActive && time == 0){
            setHasfinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    },[isActive, time])

    return (
        <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>

        </div>
        { hasFinished ? (
        <button
        disabled
        className={styles.countdownButton}
      
        >
           Ciclo Encerrado!
        </button>
         ):(
             <>
        { isActive ?( 
        <button 
        type="button" 
        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
        onClick={resetCountdown}
        >
            Abandonar Ciclo
        </button>
        ) : (
        <button 
        type="button" 
        className={styles.countdownButton}
        onClick={startCountdown}
        >
            Iniciar um Ciclo
        </button>

        ) }

             </>
         )}


        
        </div>
    );
}