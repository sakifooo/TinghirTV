
import { Tv, Zap, Trophy, Newspaper, Smartphone, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: "Live Football Matches",
    description: "Experience every goal as it happens with our low-latency live streaming technology covering all major leagues.",
    icon: Tv,
  },
  {
    title: "HD Streaming",
    description: "Crystal clear picture quality optimized for mobile screens. Watch in 1080p without interruptions.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Performance",
    description: "Lightweight application designed for speed. Switch between matches and news instantly.",
    icon: Zap,
  },
  {
    title: "Match Highlights",
    description: "Missed the game? Catch up with detailed match recaps and best moments shortly after the whistle.",
    icon: Trophy,
  },
  {
    title: "Sports News",
    description: "Stay updated with breaking news, transfer rumors, and match analysis from our editorial team.",
    icon: Newspaper,
  },
  {
    title: "User-Friendly Interface",
    description: "Intuitive navigation designed for sports fans. Find your favorite team with just a few taps.",
    icon: Smartphone,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Ultimate Streaming Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tinghir TV brings the stadium atmosphere to your pocket with professional-grade features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="glass-card group hover:border-primary/50 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <feature.icon size={80} />
              </div>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
