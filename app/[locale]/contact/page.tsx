import { NavbarClient } from '@/components/navbar-client';
import { ContactPanelSSR } from '@/components/contact-panel-ssr';
import { FooterSSR } from '@/components/footer-ssr';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
interface ContactPageProps {
  params: {
    locale: string;
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen">
      <NavbarClient locale={locale} />
      
      <section className="pt-40 pb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-[38px] font-serif font-normal text-black leading-[42px] mb-6">
Send us a Message
              </h1>
            </div>
            
            <div className="max-w-2xl mx-auto">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-gray-500 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical"
                        placeholder="Tell us about what you're looking for, preferred move-in date, or any questions you have..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-black text-white hover:bg-gray-800 rounded-none py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
      
      <ContactPanelSSR />
      <FooterSSR locale={locale} />
    </main>
  );
}