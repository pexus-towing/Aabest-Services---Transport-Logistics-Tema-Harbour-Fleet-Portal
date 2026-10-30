import React from 'react';

export const WhyChooseSection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Multiple Transportation Solutions',
      description: 'From heavy-duty recovery tow trucks and port container haulage to multi-axle lowbeds and bulk aggregate tippers, we provide a unified fleet platform under single-contract accountability.'
    },
    {
      num: '02',
      title: 'Logistics & Fleet Support',
      description: 'Disciplined turnaround oversight, designated corridor coordination, and route planning designed to optimize asset utilization across Ghana’s primary maritime and industrial transit routes.'
    },
    {
      num: '03',
      title: 'Professional Service Approach',
      description: 'Rigorous adherence to valid DVLA roadworthiness certification, active comprehensive insurance cover, verified driver licensing standards, and transparent client communication.'
    },
    {
      num: '04',
      title: 'Diverse Heavy Haulage Capabilities',
      description: 'Engineered to support heavy civil works, maritime container evacuation, emergency roadside breakdown recovery, and bulk aggregate hauling with equal operational competence.'
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-700 font-bold">
            04 · Operational Foundations
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight leading-[1.2]">
            The Standards That Govern Our Transportation &amp; Fleet Logistics Practice
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We focus on dependable execution, asset compliance, and practical support to deliver measurable reliability for our Ghanaian partners and clients.
          </p>
        </div>

        {/* Architectural Principles Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
          {principles.map((item) => (
            <div
              key={item.num}
              className="p-8 sm:p-10 border-r border-b border-slate-200 flex flex-col justify-between space-y-6 hover:bg-slate-50/50 transition-colors"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs text-amber-700 font-bold tracking-widest block">
                  PRINCIPLE // {item.num}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-950">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Sixth Cell: Operational Statement */}
          <div className="p-8 sm:p-10 border-r border-b border-slate-200 bg-slate-900 text-white flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-amber-400 font-bold tracking-widest block">
                COMPLIANCE MANDATE
              </span>
              <h3 className="font-display font-bold text-lg text-white">
                Asset &amp; Personnel Vetting
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                All vehicles in our network operate with verified DVLA certifications, up-to-date roadworthiness, and active insurance coverage to safeguard lives, cargo, and infrastructure.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-400 border-t border-white/10 pt-4">
              TEMA · ACCRA · REGIONAL CORRIDORS
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
