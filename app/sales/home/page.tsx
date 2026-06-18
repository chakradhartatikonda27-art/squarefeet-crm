'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SalesHome() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [dismissedAnn, setDismissedAnn] = useState(false);

  const announcement = {
    title: 'Rushikonda Heights Phase 2 — New Units Available',
    message: 'Check inventory for new units. Push for site visits with all warm leads.',
    type: 'Launch', typeColor: '#3AAA35', typeBg: '#E8F5E8', icon: '🚀',
  };

  const warmLeads = [
    { name: 'Venkat Rao', area: 'Rushikonda', budget: '₹1.2Cr', stage: 'Site Visit', note: 'Very interested, wants 4BHK villa', sbg: '#FFF3E0', sfg: '#E65100', score: 'Hot' },
    { name: 'Naresh Reddy', area: 'Bheemili', budget: '₹2.1Cr', stage: 'Negotiation', note: 'Discussing price, wants 5% discount', sbg: '#F3E5F5', sfg: '#6A1B9A', score: 'Hot' },
    { name: 'Durga Prasad', area: 'Rushikonda', budget: '₹1.8Cr', stage: 'Site Visit', note: 'Second visit scheduled today', sbg: '#FFF3E0', sfg: '#E65100', score: 'Warm' },
    { name: 'Ramesh Babu', area: 'MVP Colony', budget: '₹95L', stage: 'Interested', note: 'Needs loan assistance info', sbg: '#E8F5E8', sfg: '#2D8529', score: 'Warm' },
  ];

  const todayVisits = [
    { name: 'Durga Prasad', time: '11:00 AM', property: 'Rushikonda Heights — Villa B4' },
    { name: 'Venkat Rao', time: '3:00 PM', property: 'Rushikonda Heights — Villa C2' },
  ];

  const scoreConfig = {
    Hot: { bg: '#FFEBEE', fg: '#E53935', icon: '🔴' },
    Warm: { bg: '#FFF3E0', fg: '#F57C00', icon: '🟡' },
    Cold: { bg: '#E3F4FB', fg: '#1565C0', icon: '🔵' },
  };

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>

      {/* Header */}
      <div style={{background: '#1B2F6E', padding: '16px', paddingBottom: '20px', position: 'relative'}}>
        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
          <div>
            <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0}}>Good morning</p>
            <h1 style={{fontSize: '22px', fontWeight: '800', color: 'white', margin: '2px 0 6px'}}>
              Kiran Mehta
            </h1>
            <span style={{fontSize: '11px', fontWeight: '700', padding: '4px 12px',
                          borderRadius: '20px', background: '#F57C00', color: 'white'}}>
              Sales Executive
            </span>
          </div>
          <button onClick={() => setShowMenu(!showMenu)}
            style={{width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)', border: 'none',
                    color: 'white', fontSize: '18px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'}}>⋮</button>
        </div>
        {showMenu && (
          <div style={{position: 'absolute', top: '60px', right: '16px', background: 'white',
                       borderRadius: '12px', padding: '8px', zIndex: 100, minWidth: '160px',
                       boxShadow: '0 4px 20px rgba(0,0,0,0.15)'}}>
            <button onClick={() => { setShowMenu(false); router.push('/'); }}
              style={{width: '100%', padding: '10px 14px', borderRadius: '8px', border: 'none',
                      background: 'none', textAlign: 'left', fontSize: '13px', fontWeight: '600',
                      color: '#E53935', cursor: 'pointer'}}>🚪 Logout</button>
          </div>
        )}
      </div>

      {/* Stats */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   gap: '8px', margin: '0 14px', marginTop: '-14px'}}>
        {[
          {val: '8', lbl: 'Warm Leads', color: '#1B2F6E'},
          {val: '2', lbl: 'Site Visits', color: '#F57C00'},
          {val: '1', lbl: 'Negotiation', color: '#6A1B9A'},
          {val: '3', lbl: 'Converted', color: '#3AAA35'},
        ].map((s, i) => (
          <div key={i} style={{background: 'white', borderRadius: '12px', padding: '10px',
                               textAlign: 'center', border: '0.5px solid #DDE2EF'}}>
            <div style={{fontSize: '20px', fontWeight: '800', color: s.color}}>{s.val}</div>
            <div style={{fontSize: '9px', color: '#9AA5CC', marginTop: '2px'}}>{s.lbl}</div>
          </div>
        ))}
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

        {/* Announcement */}
        {!dismissedAnn && (
          <div style={{background: announcement.typeBg, borderRadius: '12px', padding: '12px',
                       marginBottom: '12px', border: `1.5px solid ${announcement.typeColor}`,
                       display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
            <span style={{fontSize: '20px', flexShrink: 0}}>{announcement.icon}</span>
            <div style={{flex: 1}}>
              <div style={{display: 'flex', gap: '6px', marginBottom: '3px', alignItems: 'center'}}>
                <span style={{fontSize: '10px', fontWeight: '700', padding: '2px 7px',
                              borderRadius: '8px', background: announcement.typeColor, color: 'white'}}>
                  {announcement.type}
                </span>
                <span style={{fontSize: '10px', color: '#9AA5CC'}}>From Admin</span>
              </div>
              <div style={{fontSize: '12px', fontWeight: '700', color: '#1B2F6E'}}>{announcement.title}</div>
              <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '2px'}}>{announcement.message}</div>
            </div>
            <button onClick={() => setDismissedAnn(true)}
              style={{fontSize: '16px', background: 'none', border: 'none',
                      cursor: 'pointer', color: '#9AA5CC', flexShrink: 0}}>×</button>
          </div>
        )}

        {/* Today's Site Visits */}
        <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden',
                     border: '0.5px solid #DDE2EF', marginBottom: '12px'}}>
          <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF', background: '#F57C00'}}>
            <div style={{fontSize: '13px', fontWeight: '700', color: 'white'}}>
              📍 Today's Site Visits
            </div>
          </div>
          {todayVisits.map((visit, i) => (
            <div key={i} style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                                 background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                           marginBottom: '4px'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{visit.name}</div>
                <span style={{fontSize: '12px', fontWeight: '700', color: '#F57C00'}}>{visit.time}</span>
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5', marginBottom: '8px'}}>
                {visit.property}
              </div>
              <div style={{display: 'flex', gap: '6px'}}>
                <button style={{flex: 1, padding: '7px', borderRadius: '8px', border: 'none',
                                background: '#1B2F6E', color: 'white', fontSize: '12px',
                                fontWeight: '700', cursor: 'pointer'}}>📞 Call</button>
                <button style={{flex: 1, padding: '7px', borderRadius: '8px',
                                border: '1.5px solid #3AAA35', background: '#E8F5E8',
                                color: '#2D8529', fontSize: '12px', fontWeight: '700', cursor: 'pointer'}}>
                  📍 Navigate</button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px'}}>
          {[
            { icon: '🔥', label: 'Warm Leads', sub: '8 assigned · 2 🔴 Hot', color: '#1B2F6E', bg: '#E8EBF5', border: '#1B2F6E', path: '/sales/leads' },
            { icon: '✅', label: 'Booking', sub: 'Confirm a booking', color: '#3AAA35', bg: '#E8F5E8', border: '#3AAA35', path: '/sales/leads' },
            { icon: '🏗️', label: 'Inventory', sub: 'Check availability', color: '#2D8529', bg: '#E8F5E8', border: '#3AAA35', path: '/admin/inventory' },
            { icon: '💰', label: 'Payments', sub: 'Track milestones', color: '#C9A84C', bg: '#FDF6E3', border: '#C9A84C', path: '/admin/payments' },
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

        {/* Warm Leads with Score */}
        <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden',
                     border: '0.5px solid #DDE2EF'}}>
          <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                       display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>🔥 My Warm Leads</div>
            <span style={{fontSize: '11px', color: '#6B7AB5'}}>Passed from telecaller</span>
          </div>
          {warmLeads.map((lead, i) => (
            <div key={i} style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                                 background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px'}}>
                <div style={{width: '34px', height: '34px', borderRadius: '50%', background: '#1B2F6E',
                             display: 'flex', alignItems: 'center', justifyContent: 'center',
                             fontSize: '11px', fontWeight: '700', color: 'white', flexShrink: 0}}>
                  {lead.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div style={{flex: 1, minWidth: 0}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <span style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                      {lead.name}
                    </span>
                    <span style={{fontSize: '9px', fontWeight: '700', padding: '1px 5px',
                                  borderRadius: '6px',
                                  background: scoreConfig[lead.score as keyof typeof scoreConfig].bg,
                                  color: scoreConfig[lead.score as keyof typeof scoreConfig].fg}}>
                      {scoreConfig[lead.score as keyof typeof scoreConfig].icon}
                    </span>
                  </div>
                  <div style={{fontSize: '11px', color: '#6B7AB5'}}>{lead.area} · {lead.budget}</div>
                </div>
                <span style={{fontSize: '10px', fontWeight: '600', padding: '3px 8px',
                              borderRadius: '6px', background: lead.sbg, color: lead.sfg,
                              flexShrink: 0}}>{lead.stage}</span>
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5', padding: '6px 10px',
                           background: '#F7F8FC', borderRadius: '8px', marginBottom: '8px'}}>
                📝 {lead.note}
              </div>
              <div style={{display: 'flex', gap: '6px'}}>
                <button style={{flex: 1, padding: '7px', borderRadius: '8px', border: 'none',
                                background: '#1B2F6E', color: 'white', fontSize: '11px',
                                fontWeight: '700', cursor: 'pointer'}}>📞 Call</button>
                <button style={{flex: 1, padding: '7px', borderRadius: '8px',
                                border: '1.5px solid #F57C00', background: '#FFF3E0',
                                color: '#F57C00', fontSize: '11px', fontWeight: '700', cursor: 'pointer'}}>
                  📍 Site Visit</button>
                <button style={{flex: 1, padding: '7px', borderRadius: '8px',
                                border: '1.5px solid #3AAA35', background: '#E8F5E8',
                                color: '#2D8529', fontSize: '11px', fontWeight: '700', cursor: 'pointer'}}>
                  ✅ Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/sales/home', active: true},
          {icon: '🔥', label: 'Leads', path: '/sales/leads'},
          {icon: '📍', label: 'Visits', path: '/sales/home'},
          {icon: '📍', label: 'Attendance', path: '/sales/attendance'},
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
