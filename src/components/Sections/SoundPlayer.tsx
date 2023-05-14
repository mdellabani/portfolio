import {memo, useState} from 'react';
import {IconContext} from 'react-icons'; // for customazing the icons
import {AiFillPauseCircle, AiFillPlayCircle} from 'react-icons/ai'; // icons for play and pause

import useAudio from '../../hooks/useAudio';
import music from '../../music/jazz.mp3';

const SoundPlayer = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useAudio(music);
  const playingButton = () => {
    console.log('click:' + audio + ',state:' + isPlaying);
    if (isPlaying) {
      audio?.pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      audio?.play(); // this will play the audio
      setIsPlaying(true);
    }
  };

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
