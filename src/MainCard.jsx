import { Button } from "./components/ui/button";
export default function LandingPage() {
  return (
    <div className="min-h-screen  flex flex-col items-start ml-1 md:ml-3 sm:ml-1 space-y-1 justify-center w-full">
      <h1 className="text-3xl font-bold leading-tight  tracking-tight">
        ShadCN + Vite + React + JavaScript
      </h1>
      <p className="text-lg text-muted-foreground">
        A template, fast, and modern UI setup using ShadCN and Vite.
      </p>
      <a href="https://github.com/Algoture/vite-template" target="_blank">
        <Button variant="default">Github</Button>
      </a>
    </div>
  );
}
