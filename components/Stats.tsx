import React from 'react';

const stats = [
    {
        value: '300%',
        change: '12%',
        changeType: 'up',
        label: 'Efficiency Boost',
        desc: 'Measured across 500+ active enterprise teams.'
    },
    {
        value: '45%',
        change: '8%',
        changeType: 'up',
        label: 'Cost Reduction',
        desc: 'Lower operational overhead within first quarter.'
    },
    {
        value: '99.9%',
        changeType: 'check',
        label: 'Uptime Guarantee',
        desc: 'Enterprise-grade reliability for mission-critical ops.'
    }
];

const Stats: React.FC = () => {
    return (
        <section className="py-12 border-y border-white/5 bg-slate-900/50 backdrop-blur-sm z-10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start p-6 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors duration-300">
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-bold text-white tracking-tight">{stat.value}</span>
                                {stat.changeType === 'up' && (
                                    <span className="text-sm font-semibold text-emerald-400 flex items-center">
                                        <span className="material-symbols-outlined text-[16px]">arrow_upward</span> {stat.change}
                                    </span>
                                )}
                                {stat.changeType === 'check' && (
                                    <span className="text-sm font-semibold text-emerald-400 flex items-center">
                                        <span className="material-symbols-outlined text-[16px]">check</span>
                                    </span>
                                )}
                            </div>
                            <h3 className="text-slate-400 font-medium">{stat.label}</h3>
                            <p className="text-sm text-slate-500 mt-2 text-center md:text-left">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;