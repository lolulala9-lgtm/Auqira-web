'use client';

import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-obsidian text-ivory border-t border-border-custom py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-ivory">Auqira</h3>
            <p className="text-slate-custom text-sm leading-relaxed">Executive advisory for AI adoption in recruitment.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-ivory mb-4 text-xs uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5">
              <li>
                <button className="text-slate-custom hover:text-ivory transition-colors text-sm">The Audit</button>
              </li>
              <li>
                <button className="text-slate-custom hover:text-ivory transition-colors text-sm">Pricing</button>
              </li>
              <li>
                <button className="text-slate-custom hover:text-ivory transition-colors text-sm">How It Works</button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-ivory mb-4 text-xs uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <button className="text-slate-custom hover:text-ivory transition-colors text-sm">About</button>
              </li>
              <li>
                <button className="text-slate-custom hover:text-ivory transition-colors text-sm">FAQ</button>
              </li>
              <li>
                <button className="text-slate-custom hover:text-ivory transition-colors text-sm">Book a Discovery Call</button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-ivory mb-4 text-xs uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:hello@auqira.com"
                className="p-2 hover:bg-teal/10 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-slate-custom hover:text-teal transition-colors" />
              </a>
              <a
                href="#linkedin"
                className="p-2 hover:bg-teal/10 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-custom hover:text-teal transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border-custom/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-custom text-xs">© 2026 Auqira. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="text-slate-custom hover:text-ivory transition-colors text-xs">Privacy Policy</button>
            <button className="text-slate-custom hover:text-ivory transition-colors text-xs">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
