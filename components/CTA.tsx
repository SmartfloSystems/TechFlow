import React from 'react';
import { useToast } from './Toast';

const CTA: React.FC = () => {
    const { showToast } = useToast();

    return (
        <section className="py-24 relative overflow-hidden z-10">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto px-4 relative text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                    Ready to scale your operations?
                </h2>
                <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                    Join thousands of high-growth teams that trust TechFlow to optimize their stack. Start your 14-day free trial today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={() => showToast("Trial activation initiated")}
                        className="flex items-center justify-center h-12 px-8 rounded bg-primary hover:bg-primary/90 text-white text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 w-full sm:w-auto"
                    >
                        Start Free Trial
                    </button>
                    <button 
                        onClick={() => showToast("Sales team notified!")}
                        className="flex items-center justify-center h-12 px-8 rounded bg-surface-dark hover:bg-surface-dark/80 border border-white/10 text-white text-base font-bold transition-all w-full sm:w-auto hover:bg-white/5"
                    >
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;