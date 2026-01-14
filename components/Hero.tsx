import React from 'react';
import { useToast } from './Toast';

const Hero: React.FC = () => {
    const { showToast } = useToast();

    return (
        <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Hero Content */}
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
                            <span className="text-xs font-medium text-accent-cyan tracking-wide uppercase">v2.0 Now Live</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.1]">
                            Scale Your Ops <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-primary animate-gradient">
                                Intelligently.
                            </span>
                        </h1>
                        
                        <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            TechFlow optimizes your entire workflow stack in real-time. Join high-growth teams scaling faster than ever with our AI-driven engine.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-2">
                            <button 
                                onClick={() => showToast("Onboarding Demo Started")}
                                className="group relative flex items-center justify-center gap-2 h-12 px-8 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-white text-base font-semibold backdrop-blur-sm transition-all overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:border-accent-cyan/50"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                                <span>Get Started</span>
                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            
                            <button 
                                onClick={() => showToast("Loading Live Environment...")}
                                className="flex items-center justify-center gap-2 h-12 px-6 rounded text-slate-300 hover:text-white font-medium transition-colors group"
                            >
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                                </div>
                                Live Demo
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-4">
                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Trusted by market leaders</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="h-6 flex items-center gap-1 text-slate-200 cursor-default hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">diamond</span> <span className="font-bold text-lg">Acme</span>
                                </div>
                                <div className="h-6 flex items-center gap-1 text-slate-200 cursor-default hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">rocket_launch</span> <span className="font-bold text-lg">Launch</span>
                                </div>
                                <div className="h-6 flex items-center gap-1 text-slate-200 cursor-default hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">all_inclusive</span> <span className="font-bold text-lg">Infinite</span>
                                </div>
                                <div className="h-6 flex items-center gap-1 text-slate-200 cursor-default hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">bolt</span> <span className="font-bold text-lg">BoltInc</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero 3D Mockup */}
                    <div className="relative hidden lg:block perspective-1000">
                        <div className="relative w-full aspect-[4/3] rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-2xl shadow-primary/20 rotate-y-minus-5 hover:hover-rotate-0 transition-transform duration-700 ease-out group overflow-hidden">
                            {/* Mockup Header */}
                            <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900 border-b border-white/5 flex items-center px-4 gap-2 z-20">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>

                            {/* Mockup Content */}
                            <div className="p-6 mt-10 grid grid-cols-3 gap-4 h-full">
                                {/* Sidebar */}
                                <div className="col-span-1 flex flex-col gap-3 border-r border-white/5 pr-4">
                                    <div className="h-8 w-3/4 bg-white/5 rounded animate-pulse"></div>
                                    <div className="h-4 w-1/2 bg-white/5 rounded"></div>
                                    <div className="h-4 w-2/3 bg-white/5 rounded"></div>
                                    <div className="h-4 w-1/2 bg-white/5 rounded"></div>
                                    <div className="mt-auto h-20 w-full bg-gradient-to-br from-primary/20 to-transparent rounded border border-white/5"></div>
                                </div>

                                {/* Main Charts */}
                                <div className="col-span-2 flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <div className="flex-1 p-4 rounded bg-white/5 border border-white/5">
                                            <div className="text-xs text-slate-400 mb-1">Efficiency</div>
                                            <div className="text-2xl font-bold text-accent-cyan">+128%</div>
                                            <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
                                                <div className="bg-accent-cyan h-full w-[75%]"></div>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-4 rounded bg-white/5 border border-white/5">
                                            <div className="text-xs text-slate-400 mb-1">Velocity</div>
                                            <div className="text-2xl font-bold text-primary">42.5k</div>
                                            <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
                                                <div className="bg-primary h-full w-[60%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Big Chart Area */}
                                    <div className="flex-1 rounded bg-white/5 border border-white/5 p-4 relative overflow-hidden group-hover:border-primary/20 transition-colors">
                                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/20 to-transparent"></div>
                                        <svg className="w-full h-full absolute bottom-0 left-0 text-primary" preserveAspectRatio="none" viewBox="0 0 100 50">
                                            <path d="M0 50 L10 40 L20 45 L30 30 L40 35 L50 20 L60 25 L70 10 L80 15 L90 5 L100 0 V50 Z" fill="currentColor" fillOpacity="0.2"></path>
                                            <path d="M0 50 L10 40 L20 45 L30 30 L40 35 L50 20 L60 25 L70 10 L80 15 L90 5 L100 0" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Glow */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-cyan/20 rounded-full blur-[80px] pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;