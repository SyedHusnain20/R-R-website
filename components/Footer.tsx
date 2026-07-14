import Link from "next/link";
import { Share2, Network, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-secondary/20 pt-20 pb-10 mt-auto">
      <div className="max-w-[1280px] mx-auto px-5 md:px-[64px]">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <img
                alt="R&R Logo"
                className="h-12 w-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX-Q6Su-LPEnn-nNhgl9Bd0lB0TawW6b8DNHoFQj6tnsa2Ac1Iz4mGBg7Y6Xeib-g1rn8v00I76mbF8WTXD5uHSwAPaBfT3Q3eCNnPfU6GhcMTKpowUnMUDlScrbh44oFLeNFayRqiDRKlO9ofIGAsHyfQRoSgyVNLnEXbuOIj3IruIUeXYOVV3sfgvQ8LMJuugAeY2xU9RGox8BPIVWvfaY9YvcqtIJw4Q-ruyesFek923gbrOolBANAeK1K2qVjOXtrwtpOAID2U"
              />
              <span className="font-headline text-2xl font-bold text-primary">
                R&R Digital Solutions
              </span>
            </div>
            <p className="text-on-surface-variant font-body mb-8 text-sm leading-relaxed">
              Engineering superior digital products for the next generation of global industry leaders.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-all text-on-surface-variant"
                href="#"
                aria-label="Share"
              >
                <Share2 size={16} />
              </a>
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-all text-on-surface-variant"
                href="#"
                aria-label="Network Hub"
              >
                <Network size={16} />
              </a>
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-all text-on-surface-variant"
                href="#"
                aria-label="Teams"
              >
                <Users size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 w-full md:w-auto">
            <div>
              <h6 className="font-mono-custom text-xs text-on-surface uppercase mb-6 tracking-widest font-semibold">
                Solutions
              </h6>
              <ul className="space-y-4 font-mono-custom text-xs text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    AI Integration
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Custom Chatbots
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Digital solutions
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Data Analysis
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Custom Softwares
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Web Applications
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-mono-custom text-xs text-on-surface uppercase mb-6 tracking-widest font-semibold">
                Company
              </h6>
              <ul className="space-y-4 font-mono-custom text-xs text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary transition-colors" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-mono-custom text-xs text-on-surface uppercase mb-6 tracking-widest font-semibold">
                Legal
              </h6>
              <ul className="space-y-4 font-mono-custom text-xs text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary transition-colors" href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/terms">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/cookie-policy">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-10 border-t border-outline-variant/10 text-on-surface-variant font-mono-custom text-[11px] opacity-60 gap-4">
          <p>© 2026 R&R Digital Solutions. Engineering the Future.</p>
          <div className="flex gap-8">
            <span>Designed for High Performance</span>
            <span>System Status: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
