
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-12 hover:text-primary transition-colors">← Back to Home</Link>
        <h1 className="text-4xl font-headline font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-2xl bg-secondary/10 border border-white/5">
            <Mail className="mx-auto text-primary mb-4" />
            <h3 className="font-bold mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">support@tinghirtv.com</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-secondary/10 border border-white/5">
            <MessageSquare className="mx-auto text-primary mb-4" />
            <h3 className="font-bold mb-1">Social</h3>
            <p className="text-sm text-muted-foreground">@tinghirtv_live</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-secondary/10 border border-white/5">
            <MapPin className="mx-auto text-primary mb-4" />
            <h3 className="font-bold mb-1">Region</h3>
            <p className="text-sm text-muted-foreground">Tinghir, Morocco</p>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-headline font-bold mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold">Name</label>
                <Input placeholder="John Doe" className="bg-white/5 border-white/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Email</label>
                <Input placeholder="john@example.com" className="bg-white/5 border-white/10" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Message</label>
              <Textarea placeholder="How can we help you?" className="bg-white/5 border-white/10 min-h-[150px]" />
            </div>
            <Button className="w-full bg-primary hover:bg-accent text-white font-bold h-12 rounded-xl">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
