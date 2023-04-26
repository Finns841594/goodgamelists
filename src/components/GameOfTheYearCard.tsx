import { GameCard } from "./types";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import styles from '@/styles/Home.module.css'

interface IGOTYC {
  gameInfo: GameCard;
  callback: () => void
};
export const GameOfTheYearCard = ({gameInfo, callback }: IGOTYC) => {
  const playedToggle = async (e:any) => {
    // console.log('current value:', e.currentTarget.id)
    // try {
    //   axios.post(`http://localhost:3000/api/users/user001/${e.currentTarget.id}`).then(item => callback())
    // } catch(err) {
    //   console.log(err)
    // }
  }
  
  return (
    <div className="gamecard-goty" >
       {gameInfo? (
        <div>
          <p className="gamecard_description">{gameInfo.name}</p>
          {gameInfo.played? (
              <>
                <img src={gameInfo.imgUrl} className="img gameImg-goty --played" id={gameInfo.name} onClick={playedToggle}/>
                <h1 className="playmark">PLAYED</h1>
              </>
              ) : (
                <img src={gameInfo.imgUrl} className="img gameImg-goty" id={gameInfo.name} onClick={playedToggle}/>
              )}
        </div>    
       ) : (
        <p>Loading...</p>
       )}
      </div>
  )

}