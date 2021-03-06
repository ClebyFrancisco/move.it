import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ClebyFrancisco.png" alt="" />

            <div>
                <strong> Cleby Francisco</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                 level {level}
                </p>
            </div>
        </div>
    );
}