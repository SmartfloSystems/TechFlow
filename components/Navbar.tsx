import React, { useState, useEffect } from 'react';
import { useToast } from './Toast';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { showToast } = useToast();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent, item: string) => {
        // If it's a section that exists, let it scroll naturally.
        // Otherwise show toast.
        const id = item.toLowerCase();
        const element = document.getElementById(id);
        
        if (!element) {
            e.preventDefault();
            showToast(`${item} page coming soon!`);
        }
        // If element exists, default behavior (scroll) occurs.
    };

    const handleAuthClick = () => {
        showToast("Authentication demo mode");
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'border-white/10 bg-[#0f172a]/90 backdrop-blur-md shadow-lg' : 'border-transparent bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="flex items-center justify-center w-8 h-8 rounded bg-primary text-white shadow-lg shadow-primary/40">
                            <span className="material-symbols-outlined text-[20px]">bolt</span>
                        </div>
                        <span className="text-white text-lg font-bold tracking-tight">TechFlow</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Product', 'Solutions', 'Pricing', 'Company'].map((item) => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className="text-slate-300 hover:text-white text-sm font-medium transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <button 
                            onClick={handleAuthClick}
                            className="text-slate-300 hover:text-white text-sm font-medium px-3 py-2 transition-colors"
                        >
                            Sign In
                        </button>
                        <button 
                            onClick={() => showToast("Setup started! (Demo)")}
                            className="bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-4 py-2 rounded shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-300 hover:text-white p-2"
                        >
                            <span className="material-symbols-outlined">
                                {mobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-16 left-0 w-full bg-[#0f172a] border-b border-white/5 transition-all duration-300 ease-in-out origin-top ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
                    {['Product', 'Solutions', 'Pricing', 'Company'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => {
                                setMobileMenuOpen(false);
                                handleNavClick(e, item);
                            }}
                            className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
                        >
                            {item}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                        <button 
                            onClick={() => {
                                handleAuthClick();
                                setMobileMenuOpen(false);
                            }}
                            className="w-full text-center text-slate-300 hover:text-white py-2 font-medium"
                        >
                            Sign In
                        </button>
                        <button 
                            onClick={() => {
                                showToast("Setup started! (Demo)");
                                setMobileMenuOpen(false);
                            }}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded shadow-lg"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;