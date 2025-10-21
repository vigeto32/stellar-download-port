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
      
      {/* Particle dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Decorative icon */}
        <div className="mb-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <Sparkles className="w-16 h-16 text-secondary animate-neon-flicker" />
        </div>

        {/* Game title */}
        <h1 
          className="mb-4 text-6xl md:text-8xl lg:text-9xl font-black text-center animate-fade-in-up bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent"
          style={{ 
            animationDelay: "0.4s",
            textShadow: "0 0 40px rgba(96, 165, 250, 0.5), 0 0 80px rgba(168, 85, 247, 0.3)"
          }}
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

        {/* Download button */}
        <div className="animate-scale-in" style={{ animationDelay: "0.8s" }}>
          <a 
            href="https://drive.google.com/drive/folders/1YGIiIfegPZntJX1Z2xwqSVgr94LC2A8b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="gaming" 
              size="lg"
              className="text-lg md:text-xl px-12 py-8 rounded-2xl transition-all duration-300"
            >
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
