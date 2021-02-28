import { createContext, useState, ReactNode} from 'react';
import challenges from '../../challenges.json';

interface challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level:number;
    currentExperience: number;
    experienceToNextLevel:number;
    challengesCompleted: number;
    activeChallenge: challenge;
    levelUp: () =>void;
    startNewChallenge: () =>void;
    resetChallenge: () =>void;

}

interface ChallengProviderProps{
    children: ReactNode;

}
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }:ChallengProviderProps ){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentEcperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel =Math.pow((level + 1) * 4, 2)
    

    

  function levelUp() {
    setLevel(level + 1)

  }
  function startNewChallenge(){
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
      const challenge = challenges[randomChallengeIndex];


      setActiveChallenge( challenge);
      
  }
  function resetChallenge(){
      setActiveChallenge(null);
  }

    return(
        <ChallengesContext.Provider 
        value={
            {level, 
            currentExperience, 
            challengesCompleted,
            experienceToNextLevel,
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge }}>
            { children }

        </ChallengesContext.Provider>

    );
}