import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-[hsl(280,50%,10%)] to-background">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "3s" }} />
      
      {/* Rotating rings */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] border-2 border-primary/10 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] border-2 border-accent/10 rounded-full animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-32 animate-scanline" />
      </div>
      
      {/* Particle dots with varied sizes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => {
          const size = Math.random() > 0.7 ? 'w-2 h-2' : 'w-1 h-1';
          const color = Math.random() > 0.5 ? 'bg-secondary' : Math.random() > 0.5 ? 'bg-primary' : 'bg-accent';
          return (
            <div
              key={i}
              className={`absolute ${size} ${color} rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
                opacity: 0.2 + Math.random() * 0.5,
                filter: Math.random() > 0.5 ? 'blur(1px)' : 'none',
              }}
            />
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Decorative icon with pulse rings */}
        <div className="relative mb-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 animate-pulse-ring">
            <Sparkles className="w-16 h-16 text-secondary opacity-30" />
          </div>
          <div className="absolute inset-0 animate-pulse-ring" style={{ animationDelay: "0.5s" }}>
            <Sparkles className="w-16 h-16 text-primary opacity-20" />
          </div>
          <Sparkles className="relative w-16 h-16 text-secondary animate-neon-flicker" />
        </div>

        {/* Game title */}
        <h1 
          className="mb-4 text-6xl md:text-8xl lg:text-9xl font-black text-center animate-fade-in-up bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-text-glow"
          style={{ animationDelay: "0.4s" }}
        >
          EPIC GAME
        </h1>

        {/* Subtitle */}
        <p 
          className="mb-12 text-xl md:text-2xl text-muted-foreground animate-fade-in-up text-center max-w-2xl"
          style={{ animationDelay: "0.6s" }}
        >
          Experience the ultimate gaming adventure
        </p>

        {/* Download button with shimmer effect */}
        <div className="relative animate-scale-in" style={{ animationDelay: "0.8s" }}>
          {/* Pulse rings around button */}
          <div className="absolute inset-0 -m-4 rounded-3xl border-2 border-primary/30 animate-pulse-ring" />
          <div className="absolute inset-0 -m-4 rounded-3xl border-2 border-accent/30 animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
          
          <a 
            href="https://drive.google.com/drive/folders/1YGIiIfegPZntJX1Z2xwqSVgr94LC2A8b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="gaming" 
              size="lg"
              className="relative text-lg md:text-xl px-12 py-8 rounded-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: "1000px 100%" }} />
              <Download className="w-6 h-6 md:w-8 md:h-8" />
              <span className="relative z-10">Download Here</span>
            </Button>
          </a>
        </div>

        {/* Decorative lines */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Grid overlay for cyberpunk effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(280 100% 60% / 0.3) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(280 100% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default Index;
