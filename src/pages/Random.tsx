import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";

export default function Random() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen p-8 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Beyond code</h1>
        </div>

        <Separator />

        <section>
          <h2 className="text-xl text-muted-foreground mb-6">
            Music that I like
          </h2>

          <div className="space-y-8">
            {/* Currently on repeat */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">Currently on repeat</span>
                  <span className="text-sm text-muted-foreground font-normal">
                    September 2024
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <iframe
                  title="deezer-widget-current"
                  src="https://widget.deezer.com/widget/dark/track/642837342"
                  width="100%"
                  height="300"
                  {...({
                    frameborder: "0",
                    allowtransparency: "true",
                  } as any)}
                  allow="encrypted-media; clipboard-write"
                  className="rounded-lg"
                ></iframe>
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I discovered George Clanton a week ago from the time of
                    writing this (9/9), but I have been listening to his music
                    nonstop since then. The song that got me hooked was{" "}
                    <strong>"You Lost Me There"</strong>. I don't have a
                    technical music background so I have trouble explaining my
                    thoughts sometimes but I will try my best.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The synths + drums + effects on his voice create so much
                    emotion that makes it addicting to listen to. It's also a
                    song where the beat comes in and it feels like it punches
                    you in the face. I'm definitely not describing that right,
                    but I love songs like this. One other song that comes to
                    mind where I feel like I'm "punched in the face" is{" "}
                    <strong>"Trojan Horse"</strong> (Sebastian Paul). I highly
                    recommend giving that a listen if you've never heard it
                    before.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Previously on repeat */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">Previously on repeat</span>
                  <span className="text-sm text-muted-foreground font-normal">
                    August 2024
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <iframe
                  title="deezer-widget-previous"
                  src="https://widget.deezer.com/widget/dark/track/82265248"
                  width="100%"
                  height="300"
                  {...({
                    frameborder: "0",
                    allowtransparency: "true",
                  } as any)}
                  allow="encrypted-media; clipboard-write"
                  className="rounded-lg"
                />
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A few weeks before the time of writing this (9/1), I
                    stumbled across the song "Born Slippy" on Spotify. To be
                    honest, it kind of gave me a headache when I heard it for
                    the first time, but Spotify decided to keep shuffling it
                    into my playlists so I ended up listening to it more and
                    more and after a while I became hooked. This spurred a three
                    week phase where I only listened to Underworld.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    One of the things I love most about them is that even though
                    most of their music is from the 90's, it still sounds fresh
                    today. Some of my other favorite songs by them are{" "}
                    <strong>"Cowgirl"</strong>,{" "}
                    <strong>"Shudder / King Of Snake"</strong>, and{" "}
                    <strong>"Sola Sistim"</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
