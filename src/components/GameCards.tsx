import axios from "axios";
import { GameCard } from "./types";
import styles from '@/styles/Home.module.css'

interface IGameCards {
  gameInfos: GameCard[];
  callback: () => void;
};
export const GameCards = ({gameInfos, callback}: IGameCards) => {

  const playedToggle = async (e:any) => {
    // console.log('current value:', e.currentTarget.id)
    // try {
    //   axios.post(`http://localhost:3000/api/users/user001/${e.currentTarget.id}`).then(item => callback())
    // } catch(err) {
    //   console.log(err)
    // }
  }
  
  return (
    <div>
       {gameInfos? (
        <ul className="gamelist">
          {gameInfos.map((game, index) => (
            <li key={index} className='gamecard' >
              <p className="gamecard_description" >{game.name}</p>
              {game.played? (
                <>
                <img src={game.imgUrl} className="img squareImg gameImg --played" id={game.name} onClick={playedToggle} />
                <h1 className="playmark">PLAYED</h1>
                </>
              ) : (
                <img src={game.imgUrl} className="img squareImg gameImg" id={game.name} onClick={playedToggle}/>
              )}
            </li>
          ))
          }
        </ul>    
       ) : (
        <p>Loading...</p>
       )}
      </div>
  )

}