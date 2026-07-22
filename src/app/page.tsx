
import { BrandLogo } from '@/components/BrandLogo';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { DownloadSection } from '@/components/DownloadSection';
import { MobileGallery } from '@/components/MobileGallery';
import { FAQ } from '@/components/FAQ';
import { SEOBlock } from '@/components/SEOBlock';
import { Button } from '@/components/ui/button';
import { Mail, Github, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Brand Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-headline font-bold text-xl tracking-tighter">
            TINGHIR <span className="text-primary">TV</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <div className="pt-8">
          <BrandLogo />
        </div>
        
        <Hero />
        
        <Features />
        
        <DownloadSection />
        
        <MobileGallery />

{/* Why Choose Section */}
<section className="py-24 bg-secondary/10">
  <div className="max-w-5xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
          Why Choose Tinghir TV?
        </h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              1
            </div>
            <div>
              <h4 className="font-bold mb-1">Direct Access</h4>
              <p className="text-sm text-muted-foreground">
                No middleman, no account required. Just download and start watching your favorite teams instantly.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              2
            </div>
            <div>
              <h4 className="font-bold mb-1">Low Latency Technology</h4>
              <p className="text-sm text-muted-foreground">
                Our servers are optimized for live sports, ensuring you see the goal before the neighbors scream.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              3
            </div>
            <div>
              <h4 className="font-bold mb-1">Privacy First</h4>
              <p className="text-sm text-muted-foreground">
                We don't track your personal data. Your sports viewing habits are your own business.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              4
            </div>
            <div>
              <h4 className="font-bold mb-1">Educational Purpose & Disclaimer</h4>
              <p className="text-sm text-muted-foreground">
                Tinghir TV is provided for educational and informational purposes only. We are not responsible for how users access or use third-party content. Users are solely responsible for ensuring their use complies with applicable laws, regulations, and copyright requirements in their country.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 glow-red bg-secondary/20 flex items-center justify-center p-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        <div className="relative z-10 glass p-8 rounded-2xl">
          <p className="text-white font-headline font-bold italic text-xl">
            "The best companion for any football fan who is always on the move."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        <FAQ />

        {/* Contact CTA Section */}
        <section className="py-24 bg-primary/5 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-headline font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-10">Have questions or feedback? Our support team is here to help you 24/7.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8 rounded-full font-bold">
                <Mail className="mr-2" /> saki.sasin@gmail.com
              </Button>
            </Link>
          </div>
        </section>

        <SEOBlock />
      </main>

      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="font-headline font-bold text-2xl tracking-tighter mb-2">
                TINGHIR <span className="text-primary">TV</span>
              </div>
              <p className="text-sm text-muted-foreground">© 2026 Tinghir TV. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Github size={20} /></a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-primary">About Us</Link>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
