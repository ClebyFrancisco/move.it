import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ClebyFrancisco.png" alt=""/>
       
        <div>
            <strong> Cleby Francisco</strong>
            <p>
                <img src="icons/level.svg" alt="level"/> level 1</p>
        </div>
        </div>
    );
}