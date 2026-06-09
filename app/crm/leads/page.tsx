'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CRMLeads() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [filterStage, setFilterStage] = useState('All');

  const leads = [
    { id: '1', name: 'Ravi Kumar', mobile: '98765 12345', area: 'Maddilapalem', budget: '₹65L', source: 'Facebook', stage: 'Interested', sbg: '#E8F5E8', sfg: '#2D8529' },
    { id: '2', name: 'Sunita Prasad', mobile: '97654 23456', area: 'Gajuwaka', budget: '₹45L', source: 'Referral', stage: 'Follow-up', sbg: '#FFF3E0', sfg: '#E65100' },
    { id: '3', name: 'Venkat Rao', mobile: '96543 34567', area: 'Rushikonda', budget: '₹1.2Cr', source: 'Google', stage: 'Site Visit', sbg: '#FFF3E0', sfg: '#E65100' },
    { id: '4', name: 'Lakshmi Devi', mobile: '95432 45678', area: 'MVP Colony', budget: '₹80L', source: '99acres', stage: 'New', sbg: '#E3F4FB', sfg: '#1565C0' },
    { id: '5', name: 'Naresh Reddy', mobile: '94321 56789', area: 'Bheemili', budget: '₹2.1Cr', source: 'JustDial', stage: 'Negotiation', sbg: '#F3E5F5', sfg: '#6A1B9A' },
    { id: '6', name: 'Anil Kumar', mobile: '93210 67890', area: 'Seethammadhara', budget: '₹55L', source: 'Walk-in', stage: 'Converted', sbg: '#E8F5E8', sfg: '#2D8529' },
  ];

  const stages = ['All', 'New', 'Follow-up', 'Interested', 'Site Visit', 'Negotiation', 'Converted'];

  const filtered = leads.filter(l => {
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase()) ||
                        l.mobile.includes(search);
    const matchStage = filterStage === 'All' || l.stage === filterStage;
    return matchSearch && matchStage;
  });

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>

      {/* Header */}
      <div style={{background: '#1B2F6E', padding: '16px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px'}}>
          <button onClick={() => router.push('/crm/home')}
            style={{color: 'white', background: 'none', border: 'none',
                    fontSize: '22px', cursor: 'pointer', lineHeight: 1}}>←</button>
          <h1 style={{fontSize: '20px', fontWeight: '800', color: 'white', margin: 0}}>
            My Leads
          </h1>
        </div>
        <p style={{fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 0 34px'}}>
          {leads.length} leads assigned to me
        </p>
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

        {/* Filters */}
        <div style={{display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap'}}>
          <input type="text" placeholder="Search by name or number..."
            value={search} onChange={e => setSearch(e.target.value)}
            style={{flex: 1, minWidth: '160px', padding: '9px 12px', borderRadius: '10px',
                    border: '1.5px solid #DDE2EF', fontSize: '13px', color: '#1A1A2E',
                    outline: 'none', background: 'white'}}/>
          <select value={filterStage} onChange={e => setFilterStage(e.target.value)}
            style={{padding: '9px 10px', borderRadius: '10px', border: '1.5px solid #DDE2EF',
                    fontSize: '13px', color: '#1A1A2E', outline: 'none', background: 'white'}}>
            {stages.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Leads List */}
        <div style={{background: 'white', borderRadius: '12px', overflow: 'hidden',
                     border: '0.5px solid #DDE2EF'}}>
          {filtered.map((lead, i) => (
            <div key={lead.id} style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                                       background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
                <div style={{width: '36px', height: '36px', borderRadius: '50%',
                             background: '#1B2F6E', display: 'flex', alignItems: 'center',
                             justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                             color: 'white', flexShrink: 0}}>
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div style={{flex: 1, minWidth: 0}}>
                  <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{lead.name}</div>
                  <div style={{fontSize: '11px', color: '#6B7AB5'}}>{lead.mobile} · {lead.area}</div>
                  <div style={{fontSize: '11px', color: '#6B7AB5'}}>{lead.budget} · {lead.source}</div>
                </div>
                <span style={{fontSize: '10px', fontWeight: '600', padding: '3px 8px',
                              borderRadius: '6px', background: lead.sbg, color: lead.sfg,
                              flexShrink: 0}}>
                  {lead.stage}
                </span>
              </div>
              <div style={{display: 'flex', gap: '6px'}}>
                <button style={{flex: 1, padding: '8px', borderRadius: '8px', border: 'none',
                                background: '#1B2F6E', color: 'white', fontSize: '12px',
                                fontWeight: '700', cursor: 'pointer'}}>
                  📞 Call
                </button>
                <button style={{flex: 1, padding: '8px', borderRadius: '8px',
                                border: '1.5px solid #3AAA35', background: '#E8F5E8',
                                color: '#2D8529', fontSize: '12px', fontWeight: '700',
                                cursor: 'pointer'}}>
                  💬 WhatsApp
                </button>
                <button style={{flex: 1, padding: '8px', borderRadius: '8px',
                                border: '1.5px solid #2E9FD4', background: '#E3F4FB',
                                color: '#1565C0', fontSize: '12px', fontWeight: '700',
                                cursor: 'pointer'}}>
                  📁 Docs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/crm/home'},
          {icon: '👥', label: 'Leads', path: '/crm/leads', active: true},
          {icon: '📅', label: 'Follow-up', path: '/crm/followups'},
          {icon: '📍', label: 'Attendance', path: '/crm/attendance'},
        ].map((item, i) => (
          <button key={i} onClick={() => router.push(item.path)}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '10px 4px', gap: '3px', fontSize: '10px', fontWeight: '600',
                    color: item.active ? '#1B2F6E' : '#9AA5CC',
                    background: 'none', border: 'none', cursor: 'pointer'}}>
            <span style={{fontSize: '20px'}}>{item.icon}</span>{item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
