'use client';

import { Linkedin } from 'lucide-react';

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian text-ivory border-t border-border-custom py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Left — Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-ivory tracking-tight">
              Au<span className="text-teal">q</span>ira
            </h3>
            <p className="text-slate-custom text-sm leading-relaxed">
              Fixed-price AI audits for boutique recruitment agencies.
            </p>
            <a
              href="https://linkedin.com/in/sohamsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex p-2 hover:bg-teal/10 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate-custom hover:text-teal transition-colors" />
            </a>
          </div>

          {/* Center — Quick Links */}
          <div>
            <h4 className="font-semibold text-ivory mb-4 text-xs uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'The Audit', target: 'audit' },
                { label: 'Pricing', target: 'pricing' },
                { label: 'FAQ', target: 'faq' },
                { label: 'Book a Call', href: 'https://calendly.com/auqira' },
              ].map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-custom hover:text-ivory transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollTo(link.target!)}
                      className="text-slate-custom hover:text-ivory transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-ivory mb-4 text-xs uppercase tracking-wider">Still have questions?</h4>
            <p className="text-slate-custom text-sm">
              Email:{' '}
              <a
                href="mailto:hello@auqira.com"
                className="text-ivory hover:text-teal transition-colors underline underline-offset-2"
              >
                hello@auqira.com
              </a>
            </p>
            <p className="text-slate-custom text-sm">
              Or book a free 15-min intro call:{' '}
              <a
                href="https://calendly.com/auqira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-ivory transition-colors underline underline-offset-2"
              >
                calendly.com/auqira
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-custom/20 pt-8 text-center">
          <p className="text-slate-custom text-xs">
            © 2026 Auqira · Soham Singh · Vendor-agnostic AI advisory
          </p>
        </div>
      </div>
    </footer>
  );
}
