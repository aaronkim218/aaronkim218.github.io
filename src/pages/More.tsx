import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/mode-toggle";
import MusicPlayer from "../components/MusicPlayer";

export default function More() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="aaronkim-portfolio-theme">
      <div className="min-h-screen p-8">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">More</h1>
          <p className="text-muted-foreground mb-8">Add random stuff here</p>

          <MusicPlayer
            deezerPreviewUrl="https://cdnt-preview.dzcdn.net/api/1/1/f/7/c/0/f7cee80e768c59de453420f5ea49f056.mp3?hdnea=exp=1756930749~acl=/api/1/1/f/7/c/0/f7cee80e768c59de453420f5ea49f056.mp3*~data=user_id=0,application_id=42~hmac=4c50e00514ab32d3a6f20cebdc1fdf188bdda0cbe371e8cca86cfeacf77bf8c8"
            songTitle="Born Slippy (Nuxx)"
            artistName="Underworld"
            albumCoverUrl="https://cdn-images.dzcdn.net/images/cover/97460d8b65336a11623fb223930e74d0/1000x1000-000000-80-0-0.jpg"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
