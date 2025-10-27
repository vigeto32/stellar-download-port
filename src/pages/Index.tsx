import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import gamePreviewMenu from "@/assets/game-preview-menu.png";
import gamePreviewGameplay from "@/assets/game-preview-gameplay.png";
import gamePreviewBattle from "@/assets/game-preview-battle.png";
import backgroundMusic from "@/assets/background-music.mp3";
import everafterLogo from "@/assets/everafter-logo.png";
import { useEffect, useRef } from "react";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    const handleUserClick = () => {
      audio.play().catch(console.error);
      window.removeEventListener("click", handleUserClick);
    };

    window.addEventListener("click", handleUserClick);

    return () => window.removeEventListener("click", handleUserClick);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-blue-950 to-black">
      {/* Background music (plays on first click) */}
      <audio ref={audioRef} loop preload="auto">
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>

      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-blue-800/10 to-blue-950/10 animate-gradient-shift bg-[length:200%_200%]" />

      {/* Falling stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() > 0.8 ? "w-1 h-1" : "w-0.5 h-0.5";
          const duration = 3 + Math.random() * 7;
          const delay = Math.random() * 5;
          const leftPosition = Math.random() * 100;
          const isTwinkle = Math.random() > 0.7;
          
          return (
            <div
              key={i}
              className={`absolute ${size} bg-white rounded-full animate-fall ${isTwinkle ? 'animate-pulse' : ''}`}
              style={{
                left: `${leftPosition}%`,
                top: `-5%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                opacity: 0.3 + Math.random() * 0.7,
                boxShadow: `0 0 ${Math.random() > 0.5 ? '4px' : '2px'} rgba(255, 255, 255, 0.8)`,
              }}
            />
          );
        })}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${10 + Math.random() * 30}%`,
              animationDelay: `${i * 3 + Math.random() * 2}s`,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.9), 0 0 12px rgba(147, 197, 253, 0.5)',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <img
          src={everafterLogo}
          alt="Ever After"
          className="mb-4 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl animate-fade-in-up drop-shadow-2xl"
          style={{ animationDelay: "0.4s" }}
        />

        <p
          className="mb-12 text-xl md:text-2xl text-muted-foreground animate-fade-in-up text-center max-w-2xl font-cormorant italic"
          style={{ animationDelay: "0.6s" }}
        >
          Experience the ultimate gaming adventure
        </p>

        <div
          className="relative animate-scale-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="absolute inset-0 -m-4 rounded-3xl border-2 border-primary/30 animate-pulse-ring" />
          <div
            className="absolute inset-0 -m-4 rounded-3xl border-2 border-accent/30 animate-pulse-ring"
            style={{ animationDelay: "0.5s" }}
          />

          <a
            href="https://drive.google.com/uc?export=download&id=1voT2LDVkMPgAphqVm0pHok1VpemOGfNA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="gaming"
              size="lg"
              className="relative text-lg md:text-xl px-12 py-8 rounded-2xl transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                style={{ backgroundSize: "1000px 100%" }}
              />
              <Download className="w-6 h-6 md:w-8 md:h-8" />
              <span className="relative z-10">Download Here</span>
            </Button>
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(280 100% 60% / 0.3) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(280 100% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* About Section */}
      <div className="relative z-10 px-4 py-20 max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-center mb-8 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            About Ever After
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed font-cormorant">
            In the halls of the prestigious Academy of Legends, a young student awakens to a brutal truth:
            only the strongest survive. Thrust into a world where combat prowess determines fate, you must
            face fellow students in intense battles that will test your skills, strategy, and determination.
          </p>
        </div>

        {/* Preview Section */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-center mb-12 bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
            Game Preview
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group animate-fade-in-up rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={gamePreviewMenu}
                alt="Ever After game menu"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative group animate-fade-in-up rounded-2xl overflow-hidden border border-secondary/20 hover:border-secondary/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={gamePreviewGameplay}
                alt="Ever After gameplay battle"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative group animate-fade-in-up rounded-2xl overflow-hidden border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={gamePreviewBattle}
                alt="Ever After battle scene"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
