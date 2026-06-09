'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeamLeaderLeads() {
  const router = useRouter();
  const [filterAgent, setFilterAgent] = useState('All');

  const leads = [
    { id: '1', name: 'Ravi Kumar', area: 'Maddilapalem', budget: '₹65L', stage: 'New', agent: 'Arjun R.', sbg: '#E3F4FB', sfg: '#1565C0' },
    { id: '2', name: 'Sunita Prasad', area: 'Gajuwaka', budget: '₹45L', stage: 'Follow-up', agent: 'Priya S.', sbg: '#FFF3E0', sfg: '#E65100' },
    { id: '3', name: 'Venkat Rao', area: 'Rushikonda', budget: '₹1.2Cr', stage: 'Site Visit', agent: 'Arjun R.', sbg: '#FFF3E0', sfg: '#E65100' },
    { id: '4', name: 'Lakshmi Devi', area: 'MVP Colony', budget: '₹80L', stage: 'Interested', agent: 'Kiran M.', sbg: '#E8F5E8', sfg: '#2D8529' },
    { id: '5', name: 'Naresh Reddy', area: 'Bheemili', budget: '₹2.1Cr', stage: 'Negotiation', agent: 'Priya S.', sbg: '#F3E5F5', sfg: '#6A1B9A' },
    { id: '6', name: 'Anil Kumar', area: 'Seethammadhara', budget: '₹55L', stage: 'Converted', agent: 'Arjun R.', sbg: '#E8F5E8', sfg: '#2D8529' },
  ];

  const agents = ['All', 'Arjun R.', 'Priya S.', 'Kiran M.', 'Rohit K.'];
  const filtered = leads.filter(l => filterAgent === 'All' || l.agent === filterAgent);

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>
      <div style={{background: '#1B2F6E', padding: '16px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px'}}>
          <button onClick={() => router.push('/teamleader/dashboard')}
            style={{color: 'white', background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer'}}>←</button>
          <h1 style={{fontSize: '20px', fontWeight: '800', color: 'white', margin: 0}}>Team Leads</h1>
        </div>
        <p style={{fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 0 34px'}}>
          {filtered.length} leads
        </p>
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>
        <div style={{marginBottom: '12px'}}>
          <select value={filterAgent} onChange={e => setFilterAgent(e.target.value)}
            style={{width: '100%', padding: '10px 12px', borderRadius: '10px',
                    border: '1.5px solid #DDE2EF', fontSize: '13px', color: '#1A1A2E',
                    outline: 'none', background: 'white', fontWeight: '600'}}>
            {agents.map(a => <option key={a}>{a}</option>)}
          </select>
        </div>

        <div style={{background: 'white', borderRadius: '12px', overflow: 'hidden', border: '0.5px solid #DDE2EF'}}>
          {filtered.map((lead, i) => (
            <div key={lead.id} style={{display: 'flex', alignItems: 'center', gap: '10px',
                                       padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                                       background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
              <div style={{width: '36px', height: '36px', borderRadius: '50%', background: '#1B2F6E',
                           display: 'flex', alignItems: 'center', justifyContent: 'center',
                           fontSize: '11px', fontWeight: '700', color: 'white', flexShrink: 0}}>
                {lead.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{lead.name}</div>
                <div style={{fontSize: '11px', color: '#6B7AB5'}}>{lead.area} · {lead.budget}</div>
                <div style={{fontSize: '11px', color: '#9AA5CC'}}>Agent: {lead.agent}</div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px'}}>
                <span style={{fontSize: '10px', fontWeight: '600', padding: '3px 8px',
                              borderRadius: '6px', background: lead.sbg, color: lead.sfg}}>
                  {lead.stage}
                </span>
                <button style={{padding: '5px 10px', borderRadius: '6px',
                                border: '1.5px solid #2E9FD4', background: '#E3F4FB',
                                color: '#1565C0', fontSize: '11px', fontWeight: '700', cursor: 'pointer'}}>
                  🔄 Reassign
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/teamleader/dashboard'},
          {icon: '👥', label: 'My Team', path: '/teamleader/team'},
          {icon: '📋', label: 'Leads', path: '/teamleader/leads', active: true},
          {icon: '🚪', label: 'Logout', path: '/'},
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
