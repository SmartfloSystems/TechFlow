import React from 'react';
import { useToast } from './Toast';

const Features: React.FC = () => {
    const { showToast } = useToast();

    return (
        <section id="solutions" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16">
                    
                    {/* Text Content */}
                    <div className="md:w-1/3 flex flex-col gap-6 sticky top-24 h-fit">
                        <div className="inline-flex items-center gap-2 text-primary font-semibold tracking-wide uppercase text-sm">
                            <span className="w-6 h-[1px] bg-primary"></span>
                            Features
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Intelligent Automation <br /> for Modern Teams
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Unlock the full potential of your operations with our futuristic toolset designed for efficiency. We replace manual bottlenecks with smart triggers.
                        </p>
                        <button 
                            onClick={() => showToast("Feature explorer opening...")}
                            className="w-fit text-white font-medium flex items-center gap-2 group hover:text-primary transition-colors"
                        >
                            Explore all features
                            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>

                    {/* Grid */}
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-slate-800/40 backdrop-blur-md p-8 rounded-xl flex flex-col gap-4 group hover:bg-white/10 transition-colors border border-white/5 hover:border-primary/50">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-[28px]">monitoring</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Real-time Analytics</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Monitor your ops with electric blue precision charts that update every millisecond.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-slate-800/40 backdrop-blur-md p-8 rounded-xl flex flex-col gap-4 group hover:bg-white/10 transition-colors border border-white/5 hover:border-primary/50">
                            <div className="w-12 h-12 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-[28px]">memory</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Workflow Optimization</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Automate repetitive tasks with our AI-driven engine. Free up your team for creative work.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-slate-800/40 backdrop-blur-md p-8 rounded-xl flex flex-col gap-4 group hover:bg-white/10 transition-colors border border-white/5 hover:border-primary/50">
                            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-[28px]">admin_panel_settings</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Secure Integration</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Enterprise-grade security for your data stack. SOC2 Compliant and encrypted by default.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-slate-800/40 backdrop-blur-md p-8 rounded-xl flex flex-col gap-4 group hover:bg-white/10 transition-colors border border-white/5 hover:border-primary/50">
                            <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-[28px]">hub</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Mesh Connectivity</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Connect disparate tools into a single, cohesive ecosystem without writing a single line of code.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;