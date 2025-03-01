import { useRef, useState } from "react";

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <audio ref={audioRef} loop>
        <source src="/audio/bgsound.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>

      <button
        onClick={toggleAudio}
        className={`w-32 h-10 rounded-full flex items-center justify-center 
                    transition-all duration-300 ease-in-out text-white font-bold shadow-lg
                    ${isPlaying ? "bg-red-500 scale-110" : "bg-green-500 scale-100"}`}
        style={{
          backgroundColor: isPlaying ? "#EF4444" : "#22C55E", // Red when playing, Green when paused
          transform: isPlaying ? "scale(1.1)" : "scale(1)",
        }}
      >
        {isPlaying ? "⏸" : "▶️"}
      </button>
    </div>
  );
};

export default BackgroundAudio;
