'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CRMHome() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const stats = [
    { val: '28', lbl: 'My Leads', color: '#1B2F6E' },
    { val: '6', lbl: 'Follow-ups', color: '#E53935' },
    { val: '3', lbl: 'Site Visits', color: '#F57C00' },
    { val: '2', lbl: 'Converted', color: '#3AAA35' },
  ];

  const recentLeads = [
    { name: 'Ravi Kumar', area: 'Maddilapalem', budget: '₹65L', stage: 'Interested', sbg: '#E8F5E8', sfg: '#2D8529' },
    { name: 'Sunita Prasad', area: 'Gajuwaka', budget: '₹45L', stage: 'Follow-up', sbg: '#FFF3E0', sfg: '#E65100' },
    { name: 'Venkat Rao', area: 'Rushikonda', budget: '₹1.2Cr', stage: 'Site Visit', sbg: '#FFF3E0', sfg: '#E65100' },
    { name: 'Lakshmi Devi', area: 'MVP Colony', budget: '₹80L', stage: 'New', sbg: '#E3F4FB', sfg: '#1565C0' },
  ];

  const pipeline = [
    { stage: 'New', count: 8, color: '#1B2F6E', bg: '#E8EBF5' },
    { stage: 'Contacted', count: 6, color: '#F57C00', bg: '#FFF3E0' },
    { stage: 'Interested', count: 5, color: '#2D8529', bg: '#E8F5E8' },
    { stage: 'Site Visit', count: 4, color: '#E65100', bg: '#FFF3E0' },
    { stage: 'Negotiation', count: 3, color: '#6A1B9A', bg: '#F3E5F5' },
    { stage: 'Converted', count: 2, color: '#2D8529', bg: '#E8F5E8' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>

      {/* Header */}
      <div style={{background: '#1B2F6E', padding: '16px', paddingBottom: '20px', position: 'relative'}}>
        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
          <div>
            <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0}}>Good morning</p>
            <h1 style={{fontSize: '22px', fontWeight: '800', color: 'white', margin: '2px 0 6px'}}>
              Priya Sharma
            </h1>
            <span style={{fontSize: '11px', fontWeight: '700', padding: '4px 12px',
                          borderRadius: '20px', background: '#2E9FD4', color: 'white'}}>
              CRM Executive
            </span>
          </div>
          <button onClick={() => setShowMenu(!showMenu)}
            style={{width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)', border: 'none',
                    color: 'white', fontSize: '18px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            ⋮
          </button>
        </div>

        {showMenu && (
          <div style={{position: 'absolute', top: '60px', right: '16px', background: 'white',
                       borderRadius: '12px', padding: '8px', zIndex: 100, minWidth: '160px',
                       boxShadow: '0 4px 20px rgba(0,0,0,0.15)'}}>
            <button onClick={() => { setShowMenu(false); router.push('/'); }}
              style={{width: '100%', padding: '10px 14px', borderRadius: '8px', border: 'none',
                      background: 'none', textAlign: 'left', fontSize: '13px', fontWeight: '600',
                      color: '#E53935', cursor: 'pointer'}}>
              🚪 Logout
            </button>
          </div>
        )}
      </div>

      {/* Stats */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   gap: '8px', margin: '0 14px', marginTop: '-14px'}}>
        {stats.map((s, i) => (
          <div key={i} style={{background: 'white', borderRadius: '12px', padding: '10px',
                               textAlign: 'center', border: '0.5px solid #DDE2EF'}}>
            <div style={{fontSize: '20px', fontWeight: '800', color: s.color}}>{s.val}</div>
            <div style={{fontSize: '9px', color: '#9AA5CC', marginTop: '2px'}}>{s.lbl}</div>
          </div>
        ))}
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

        {/* Pipeline Overview */}
        <div style={{background: 'white', borderRadius: '14px', padding: '14px',
                     marginBottom: '12px', border: '0.5px solid #DDE2EF'}}>
          <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E', marginBottom: '10px'}}>
            My Pipeline
          </div>
          <div style={{display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px'}}>
            {pipeline.map((p, i) => (
              <div key={i} style={{flexShrink: 0, background: p.bg, borderRadius: '10px',
                                   padding: '8px 12px', textAlign: 'center',
                                   borderTop: `3px solid ${p.color}`}}>
                <div style={{fontSize: '16px', fontWeight: '800', color: p.color}}>{p.count}</div>
                <div style={{fontSize: '9px', fontWeight: '600', color: p.color,
                             marginTop: '2px', whiteSpace: 'nowrap'}}>{p.stage}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px'}}>
          {[
            { icon: '👥', label: 'My Leads', sub: '28 total leads', color: '#1B2F6E', bg: '#E8EBF5', border: '#1B2F6E', path: '/crm/leads' },
            { icon: '📅', label: 'Follow-ups', sub: '6 due today', color: '#E53935', bg: '#FFEBEE', border: '#E53935', path: '/crm/followups' },
            { icon: '💬', label: 'WhatsApp', sub: 'Send messages', color: '#2D8529', bg: '#E8F5E8', border: '#3AAA35', path: '/crm/leads' },
            { icon: '📁', label: 'Documents', sub: 'Upload files', color: '#F57C00', bg: '#FFF3E0', border: '#F57C00', path: '/crm/leads' },
          ].map((btn, i) => (
            <button key={i} onClick={() => router.push(btn.path)}
              style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '14px',
                      borderRadius: '14px', border: `2px solid ${btn.border}`,
                      background: btn.bg, cursor: 'pointer'}}>
              <div style={{width: '40px', height: '40px', borderRadius: '10px',
                           background: btn.color, display: 'flex', alignItems: 'center',
                           justifyContent: 'center', flexShrink: 0}}>
                <span style={{fontSize: '20px'}}>{btn.icon}</span>
              </div>
              <div style={{textAlign: 'left'}}>
                <div style={{fontSize: '13px', fontWeight: '800', color: btn.color}}>{btn.label}</div>
                <div style={{fontSize: '10px', color: '#6B7AB5', marginTop: '1px'}}>{btn.sub}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Recent Leads */}
        <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden',
                     border: '0.5px solid #DDE2EF'}}>
          <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                       display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>Recent Leads</div>
            <button onClick={() => router.push('/crm/leads')}
              style={{fontSize: '12px', fontWeight: '600', color: '#2E9FD4',
                      background: 'none', border: 'none', cursor: 'pointer'}}>
              View all →
            </button>
          </div>
          {recentLeads.map((lead, i) => (
            <div key={i} style={{display: 'flex', alignItems: 'center', gap: '10px',
                                 padding: '10px 14px', borderBottom: '1px solid #DDE2EF',
                                 background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
              <div style={{width: '34px', height: '34px', borderRadius: '50%',
                           background: '#1B2F6E', display: 'flex', alignItems: 'center',
                           justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                           color: 'white', flexShrink: 0}}>
                {lead.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{fontSize: '13px', fontWeight: '600', color: '#1B2F6E'}}>{lead.name}</div>
                <div style={{fontSize: '11px', color: '#6B7AB5'}}>{lead.area} · {lead.budget}</div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px'}}>
                <span style={{fontSize: '10px', fontWeight: '600', padding: '2px 7px',
                              borderRadius: '5px', background: lead.sbg, color: lead.sfg}}>
                  {lead.stage}
                </span>
                <div style={{display: 'flex', gap: '4px'}}>
                  <button style={{padding: '4px 8px', borderRadius: '6px', border: 'none',
                                  background: '#1B2F6E', color: 'white', fontSize: '10px',
                                  fontWeight: '700', cursor: 'pointer'}}>
                    📞
                  </button>
                  <button style={{padding: '4px 8px', borderRadius: '6px', border: 'none',
                                  background: '#E8F5E8', color: '#2D8529', fontSize: '10px',
                                  fontWeight: '700', cursor: 'pointer'}}>
                    💬
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Nav */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/crm/home', active: true},
          {icon: '👥', label: 'Leads', path: '/crm/leads'},
          {icon: '📅', label: 'Follow-up', path: '/crm/followups'},
          {icon: '📍', label: 'Attendance', path: '/crm/attendance'},
        ].map((item, i) => (
          <button key={i} onClick={() => router.push(item.path)}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '10px 4px', gap: '3px', fontSize: '10px', fontWeight: '600',
                    color: item.active ? '#1B2F6E' : '#9AA5CC',
                    background: 'none', border: 'none', cursor: 'pointer'}}>
            <span style={{fontSize: '20px'}}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

    </div>
  );
}
