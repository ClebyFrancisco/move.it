import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/CompletedChallenger.module.css';

export function CompletedChallenger() {

    const {challengesCompleted} = useContext(ChallengesContext);
    return (
        <div className={styles.CompletedChallengerContainer}>
            <span>
                Desafios completos
            </span>
            <span>
                {challengesCompleted}
            </span>

        </div>
    );
}