'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TelecallerLeads() {
  const router = useRouter();
  const [filterScore, setFilterScore] = useState('All');

  const leads = [
    { id: '1', name: 'Venkat Rao', mobile: '96543 34567', area: 'Rushikonda', budget: '₹1.2Cr', stage: 'Site Visit', score: 'Hot', calls: 8, sbg: '#FFF3E0', sfg: '#E65100' },
    { id: '2', name: 'Naresh Reddy', mobile: '94321 56789', area: 'Bheemili', budget: '₹2.1Cr', stage: 'Negotiation', score: 'Hot', calls: 12, sbg: '#F3E5F5', sfg: '#6A1B9A' },
    { id: '3', name: 'Ravi Kumar', mobile: '98765 12345', area: 'Maddilapalem', budget: '₹65L', stage: 'Interested', score: 'Hot', calls: 5, sbg: '#E8F5E8', sfg: '#2D8529' },
    { id: '4', name: 'Sunita Prasad', mobile: '97654 23456', area: 'Gajuwaka', budget: '₹45L', stage: 'Follow-up', score: 'Warm', calls: 3, sbg: '#FFF3E0', sfg: '#E65100' },
    { id: '5', name: 'Lakshmi Devi', mobile: '95432 45678', area: 'MVP Colony', budget: '₹80L', stage: 'Contacted', score: 'Warm', calls: 2, sbg: '#FFF3E0', sfg: '#E65100' },
    { id: '6', name: 'Durga Prasad', mobile: '91098 89012', area: 'Rushikonda', budget: '₹1.8Cr', stage: 'Interested', score: 'Warm', calls: 4, sbg: '#E8F5E8', sfg: '#2D8529' },
    { id: '7', name: 'Ramesh Babu', mobile: '90987 90123', area: 'MVP Colony', budget: '₹95L', stage: 'New', score: 'Cold', calls: 0, sbg: '#E3F4FB', sfg: '#1565C0' },
    { id: '8', name: 'Meena Sharma', mobile: '92109 78901', area: 'Dwaraka Nagar', budget: '₹42L', stage: 'New', score: 'Cold', calls: 0, sbg: '#E3F4FB', sfg: '#1565C0' },
  ];

  const scoreConfig = {
    Hot: { bg: '#FFEBEE', fg: '#E53935', icon: '🔴' },
    Warm: { bg: '#FFF3E0', fg: '#F57C00', icon: '🟡' },
    Cold: { bg: '#E3F4FB', fg: '#1565C0', icon: '🔵' },
  };

  const filtered = filterScore === 'All' ? leads : leads.filter(l => l.score === filterScore);

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>

      {/* Header */}
      <div style={{background: '#1B2F6E', padding: '14px 16px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px'}}>
          <button onClick={() => router.push('/telecaller/home')}
            style={{color: 'white', background: 'none', border: 'none',
                    fontSize: '22px', cursor: 'pointer', lineHeight: 1}}>←</button>
          <h1 style={{fontSize: '18px', fontWeight: '800', color: 'white', margin: 0}}>My Leads</h1>
        </div>
        <p style={{fontSize: '11px', color: 'rgba(255,255,255,0.5)', margin: '0 0 0 34px'}}>
          {leads.length} total · 3 🔴 Hot · 3 🟡 Warm · 2 🔵 Cold
        </p>
      </div>

      {/* Score Filter */}
      <div style={{display: 'flex', gap: '8px', padding: '12px 14px'}}>
        {['All', 'Hot', 'Warm', 'Cold'].map(s => (
          <button key={s} onClick={() => setFilterScore(s)}
            style={{flex: 1, padding: '8px 4px', borderRadius: '10px', fontSize: '12px',
                    fontWeight: '700', cursor: 'pointer',
                    border: `1.5px solid ${filterScore === s ?
                      (s === 'Hot' ? '#E53935' : s === 'Warm' ? '#F57C00' :
                       s === 'Cold' ? '#1565C0' : '#1B2F6E') : '#DDE2EF'}`,
                    background: filterScore === s ?
                      (s === 'Hot' ? '#FFEBEE' : s === 'Warm' ? '#FFF3E0' :
                       s === 'Cold' ? '#E3F4FB' : '#E8EBF5') : 'white',
                    color: filterScore === s ?
                      (s === 'Hot' ? '#E53935' : s === 'Warm' ? '#F57C00' :
                       s === 'Cold' ? '#1565C0' : '#1B2F6E') : '#9AA5CC'}}>
            {s === 'Hot' ? '🔴' : s === 'Warm' ? '🟡' : s === 'Cold' ? '🔵' : '📋'} {s}
          </button>
        ))}
      </div>

      <div style={{flex: 1, padding: '0 14px', overflowY: 'auto', paddingBottom: '80px'}}>
        <div style={{background: 'white', borderRadius: '12px', overflow: 'hidden',
                     border: '0.5px solid #DDE2EF'}}>
          {filtered.map((lead, i) => (
            <div key={lead.id} style={{display: 'flex', alignItems: 'center', gap: '10px',
                                       padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                                       background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
              <div style={{width: '38px', height: '38px', borderRadius: '50%', background: '#1B2F6E',
                           display: 'flex', alignItems: 'center', justifyContent: 'center',
                           fontSize: '12px', fontWeight: '700', color: 'white', flexShrink: 0}}>
                {lead.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px'}}>
                  <span style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                    {lead.name}
                  </span>
                  <span style={{fontSize: '9px', fontWeight: '700', padding: '1px 6px',
                                borderRadius: '8px',
                                background: scoreConfig[lead.score as keyof typeof scoreConfig].bg,
                                color: scoreConfig[lead.score as keyof typeof scoreConfig].fg}}>
                    {scoreConfig[lead.score as keyof typeof scoreConfig].icon} {lead.score}
                  </span>
                </div>
                <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                  {lead.area} · {lead.budget} · {lead.calls} calls
                </div>
                <div style={{fontSize: '10px', color: '#9AA5CC', marginTop: '1px'}}>
                  {lead.mobile}
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px'}}>
                <span style={{fontSize: '10px', fontWeight: '600', padding: '2px 7px',
                              borderRadius: '6px', background: lead.sbg, color: lead.sfg}}>
                  {lead.stage}
                </span>
                <button onClick={() => router.push('/telecaller/call')}
                  style={{padding: '5px 12px', borderRadius: '7px', border: 'none',
                          background: '#3AAA35', color: 'white', fontSize: '11px',
                          fontWeight: '700', cursor: 'pointer'}}>📞 Call</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/telecaller/home'},
          {icon: '📞', label: 'Call', path: '/telecaller/call'},
          {icon: '📅', label: 'Follow-up', path: '/telecaller/followups'},
          {icon: '📍', label: 'Attendance', path: '/telecaller/attendance'},
        ].map((item, i) => (
          <button key={i} onClick={() => router.push(item.path)}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '10px 4px', gap: '3px', fontSize: '10px', fontWeight: '600',
                    color: '#9AA5CC', background: 'none', border: 'none', cursor: 'pointer'}}>
            <span style={{fontSize: '20px'}}>{item.icon}</span>{item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
