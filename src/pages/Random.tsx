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
            {/* Currently on repeat */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">Currently on repeat</span>
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

            {/* Previously on repeat */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">Previously on repeat</span>
                  <span className="text-sm text-muted-foreground font-normal">
                    September 2025
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <iframe
                  title="deezer-widget-previous"
                  src="https://widget.deezer.com/widget/dark/track/642837342"
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
                    I discovered George Clanton a week ago from the time of
                    writing this (9/9), but I have been listening to his music
                    nonstop since then. The song that got me hooked was{" "}
                    <strong>"You Lost Me There"</strong>. The synths + drums +
                    effects on his voice create so much emotion that makes it
                    addicting to listen to. Some of my other favorite songs by
                    him are <strong>"Walk Slowly"</strong>,{" "}
                    <strong>"Bleed"</strong>, and <strong>"Warmpop"</strong>.
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
