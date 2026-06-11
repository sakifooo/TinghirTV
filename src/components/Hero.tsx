import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-secondary/5">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(229,0,48,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold mb-6 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Live match streaming available now
        </div>
        
        <h2 className="text-5xl md:text-7xl font-headline font-bold mb-6 leading-tight tracking-tight text-white">
          Watch Football <br />
          <span className="text-primary">Anytime, Anywhere</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Download Tinghir TV app and enjoy live football matches, high-quality highlights, and the latest sports news.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/TinghirTV.apk" download>
  <Button
    size="lg"
    className="bg-primary hover:bg-accent text-white h-16 px-12 rounded-full font-bold text-xl glow-red shadow-primary/40 group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-3">
      <Download /> Download APK
    </span>
    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
  </Button>
</a>
        </div>
      </div>
    </section>
  );
}
