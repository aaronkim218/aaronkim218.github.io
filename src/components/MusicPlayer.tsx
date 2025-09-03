import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { Play, Pause, Volume2 } from "lucide-react";

interface MusicPlayerProps {
  deezerPreviewUrl: string;
  songTitle: string;
  artistName: string;
  albumCoverUrl: string;
}

export default function MusicPlayer({
  deezerPreviewUrl,
  songTitle,
  artistName,
  albumCoverUrl,
}: MusicPlayerProps) {
  const [volume, setVolume] = useState([75]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePositionChange = (value: number[]) => {
    if (audioRef.current) {
      const newTime = (value[0] / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const currentPosition = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <audio ref={audioRef} src={deezerPreviewUrl} />

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-lg">Now Playing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="aspect-square w-full rounded-lg overflow-hidden">
            <img
              src={albumCoverUrl}
              alt="Album Cover"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center space-y-1">
            <h3 className="font-semibold">{songTitle}</h3>
            <p className="text-sm text-muted-foreground">{artistName}</p>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              onClick={togglePlayPause}
              className="rounded-full w-16 h-16"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 ml-0.5" />
              )}
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <Slider
              value={[currentPosition]}
              onValueChange={handlePositionChange}
              max={100}
              step={0.1}
              className="w-full"
            />
          </div>

          <div className="flex items-center space-x-3">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground w-8">
              {volume[0]}%
            </span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
