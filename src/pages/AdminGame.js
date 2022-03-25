import { useEffect, useState } from "react";
import ScoreBoard from "../components/GameAdmin/ScoreBoard";
import Timer from "../components/GameAdmin/Timer";
import GameConsole from "../components/GameAdmin/GameConsole";

const AdminGame = (props) => {
  const [home, setHome] = useState({
    id: 1,
    league_id: 1,
    name: "Chelsea",
    thumbnail_logo:
      "https://resources.premierleague.com/premierleague/badges/25/t8.png",
    score: 0,
  });

  const [away, setAway] = useState({
    id: 2,
    league_id: 1,
    name: "Manchester City",
    thumbnail_logo:
      "https://resources.premierleague.com/premierleague/badges/25/t43.png",
    score: 0,
  });

  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const startTimer = () => {
    setTimerOn(true);
  };
  const stopTimer = () => {
    setTimerOn(false);
  };

  const updateHome = () => {
    setHome((prev) => {
      return { ...prev, score: prev.score + 1 };
    });
  };

  const updateAway = () => {
    setAway((prev) => {
      return { ...prev, score: prev.score + 1 };
    });
  };

  return (
    <main>
      <section>
        <ScoreBoard home={home} away={away} />
      </section>
      <section>
        <GameConsole
          home={home}
          away={away}
          updateHome={updateHome}
          updateAway={updateAway}
        />
      </section>
      <section>
        <Timer timer={timer} onStart={startTimer} onStop={stopTimer} />
      </section>
    </main>
  );
};

export default AdminGame;