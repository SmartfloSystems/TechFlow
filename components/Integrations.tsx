import React from 'react';
import { useToast } from './Toast';

const items = [
    {
        title: 'Analytics',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        color: 'from-primary/10'
    },
    {
        title: 'Infrastructure',
        img: 'https://images.unsplash.com/photo-1558494949-efc025793ad2?auto=format&fit=crop&w=800&q=80',
        color: 'from-accent-cyan/10'
    },
    {
        title: 'Processing',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        color: 'from-indigo-500/10'
    },
    {
        title: 'Security',
        img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        color: 'from-purple-500/10'
    }
];

const Integrations: React.FC = () => {
    const { showToast } = useToast();

    return (
        <section id="product" className="py-20 bg-slate-900 z-10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Integrates with your stack</h2>
                    <p className="text-slate-400">Seamless connection with the tools you already use.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {items.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => showToast(`Integrating ${item.title}...`)}
                            className="aspect-video rounded-lg bg-surface-dark border border-white/5 flex items-center justify-center group overflow-hidden relative cursor-pointer"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div 
                                className="w-full h-full bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" 
                                style={{ backgroundImage: `url("${item.img}")` }}
                            ></div>
                            <span className="absolute bottom-3 left-3 text-xs font-bold text-white z-10 shadow-black drop-shadow-md">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;