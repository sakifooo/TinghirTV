
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-12 hover:text-primary transition-colors">← Back to Home</Link>
        <h1 className="text-4xl font-headline font-bold mb-8">About Tinghir TV</h1>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-xl text-white">The ultimate destination for football fans seeking direct, high-quality sports access.</p>
          
          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">Our Mission</h2>
            <p>Tinghir TV was founded with a single goal: to bridge the gap between fans and the beautiful game. We understand the frustration of delayed streams and complicated subscriptions, which is why we built a lightweight, high-performance platform for true football enthusiasts.</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-secondary/20 border border-white/5">
              <h3 className="font-bold text-white mb-2">Global Coverage</h3>
              <p className="text-sm">From the Premier League to the Atlas Lions' matches, we bring global football to your local screen.</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/20 border border-white/5">
              <h3 className="font-bold text-white mb-2">Tech Excellence</h3>
              <p className="text-sm">Our engineering team focuses on low-latency delivery and APK security, ensuring a safe and fast experience.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
