
import { BrandLogo } from '@/components/BrandLogo';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-12 hover:text-primary transition-colors">← Back to Home</Link>
        <h1 className="text-4xl font-headline font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last Updated: October 2026</p>
          
          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">1. Information We Collect</h2>
            <p>At Tinghir TV, we prioritize your privacy. We do not require users to create an account or provide personal identification to use our APK service. However, we may collect non-identifiable technical information such as device type and connection speed to optimize your streaming experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">2. Cookies and Third-Party Advertising</h2>
            <p>We use Google AdSense to serve ads. Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.</p>
            <p className="mt-2">Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary underline">Google Ad Settings</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">3. External Links</h2>
            <p>Our application and website may contain links to third-party sports news or broadcast partners. We are not responsible for the privacy practices or content of these external sites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">4. Security</h2>
            <p>We implement industry-standard security measures to protect the integrity of our APK downloads and website data.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
