import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
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
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group mb-4"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm">Back to portfolio</span>
        </Link>

        <div className="text-center">
          <h1 className="text-4xl mb-4">Beyond code</h1>
        </div>

        <Separator />

        <section>
          <h2 className="text-xl text-muted-foreground mb-6">
            Music that I like
          </h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-normal">
                    November 2025
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <iframe
                  title="deezer-widget"
                  src="https://widget.deezer.com/widget/dark/track/1255932992"
                  width="100%"
                  height="300"
                  {...({
                    frameborder: "0",
                    allowtransparency: "true",
                  } as any)}
                  allow="encrypted-media; clipboard-write"
                ></iframe>

                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a TWICE stan now
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-normal">
                    November 2025
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <iframe
                  title="deezer-widget"
                  src="https://widget.deezer.com/widget/dark/track/2854215502"
                  width="100%"
                  height="300"
                  {...({
                    frameborder: "0",
                    allowtransparency: "true",
                  } as any)}
                  allow="encrypted-media; clipboard-write"
                ></iframe>
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Beautiful ambient + jazz fusion. Discovered this song
                    through an Uber ride lol. Driver ended up being a Berklee
                    student so it made sense.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-normal">
                    November 2025
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <iframe
                  title="deezer-widget"
                  src="https://widget.deezer.com/widget/dark/track/3017277861"
                  width="100%"
                  height="300"
                  {...({
                    frameborder: "0",
                    allowtransparency: "true",
                  } as any)}
                  allow="encrypted-media; clipboard-write"
                ></iframe>
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    2nd favorite song on the GOAT album.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-normal">
                    October 2025
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <iframe
                  title="deezer-widget-current"
                  src="https://widget.deezer.com/widget/dark/track/3315735991"
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
                    Ethereal sound that is absolutely addicting.
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
