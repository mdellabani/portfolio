import {memo, useEffect,useState} from 'react';
import {IconContext} from 'react-icons'; // for customazing the icons
import {AiFillPauseCircle, AiFillPlayCircle} from 'react-icons/ai'; // icons for play and pause
import useSound from 'use-sound';

import music from '../../music/jazz.mp3';

const SoundPlayer = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, {pause}] = useSound(music, {volume: 0.75});
  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    const play = document.getElementById('playButton');
    if (play !== null) {
      play.click();
    }
  });

  return (
    <div className="component">
      <div>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{size: '2em', color: '#b8cfc1'}}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{size: '2em', color: '#b8cfc1'}}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
      </div>
    </div>
  );
});

export default SoundPlayer;
