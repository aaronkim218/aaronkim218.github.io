import { ThemeProvider } from "../components/theme-provider";

export default function More() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="aaronkim-portfolio-theme">
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">More</h1>
          <p className="text-muted-foreground mb-8">Add random stuff here</p>

          <iframe
            title="deezer-widget"
            src="https://widget.deezer.com/widget/dark/track/82265248"
            width="100%"
            height="300"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media; clipboard-write"
          ></iframe>
        </div>
      </div>
    </ThemeProvider>
  );
}
