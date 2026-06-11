
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-12 hover:text-primary transition-colors">← Back to Home</Link>
        <h1 className="text-4xl font-headline font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By downloading the Tinghir TV APK or using our website, you agree to comply with these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">2. Use of Service</h2>
            <p>Tinghir TV provides access to sports-related content, news, and streaming links. Users are responsible for ensuring that their use of the app complies with local laws and regulations regarding streaming content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">3. Intellectual Property</h2>
            <p>All logos, app code, and proprietary content are the property of Tinghir TV. Sports logos and team names used in previews are for identification purposes only and belong to their respective owners.</p>
          </section>

          <section>
            <h2 className="text-2xl font-headline font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p>Tinghir TV is provided "as is" without warranties of any kind. We are not liable for any interruptions in streaming services or technical issues arising from device incompatibility.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
