
import { Button } from '@/components/ui/button';
import { Download, ShieldCheck, Smartphone, Zap } from 'lucide-react';

export function DownloadSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">Ready for Kickoff?</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Take Tinghir TV with you wherever you go. Direct APK installation ensures you get the latest features and fastest streaming speeds without middleman delays.
        </p>

        <div className="bg-card/40 backdrop-blur-xl border border-white/10 p-12 rounded-3xl glow-red-hover transition-all group">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
              <Download size={40} />
            </div>
            
            <h3 className="text-2xl font-headline font-bold mb-2">Tinghir TV v4.2.0</h3>
            <p className="text-xs text-muted-foreground mb-8">Size: 18.5 MB • Last Updated: 2 hours ago</p>

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
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl border-t border-white/5 pt-12">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="text-primary" size={20} />
                <span className="text-sm font-bold">Secure Scan</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="text-primary" size={20} />
                <span className="text-sm font-bold">No Ads</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Smartphone className="text-primary" size={20} />
                <span className="text-sm font-bold">All Androids</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
