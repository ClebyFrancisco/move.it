import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContexts";

let CountdownTimeOut: NodeJS.Timeout;

interface CountdownContextData {
    minutes: number;
           seconds: number;
           hasFinished: boolean;
           isActive: boolean;
           startCountdown: () =>void;
           resetCountdown:  () =>void;


}
interface CountdownProviderProps{
    children: ReactNode;

}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }:CountdownProviderProps){
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25*60);
    const [isActive, setIsActive]= useState(false)
    const [hasFinished, setHasfinished]= useState(false);

    const minutes = Math.floor(time / 60);
    const seconds =time % 60;

    function startCountdown(){
        setIsActive(true)

    }
    function resetCountdown(){
        clearTimeout(CountdownTimeOut);
        setIsActive(false);
        setHasfinished(false);
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
        <CountdownContext.Provider value={{
           minutes,
           seconds,
           hasFinished,
           isActive,
           startCountdown,
           resetCountdown,



        }}>
            {children}
        </CountdownContext.Provider>
    )
}