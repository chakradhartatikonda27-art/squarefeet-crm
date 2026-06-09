'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function AdminFollowups() {
  const router = useRouter();

  const overdue = [
    { id: '1', name: 'Ravi Kumar', agent: 'Arjun R.', note: 'Discuss site visit timing', time: 'Yesterday 3 PM' },
    { id: '2', name: 'Naresh Reddy', agent: 'Priya S.', note: 'Pricing discussion', time: 'Jun 6, 11 AM' },
  ];

  const today = [
    { id: '3', name: 'Sunita Prasad', agent: 'Arjun R.', note: 'Send project brochure', time: '2:00 PM' },
    { id: '4', name: 'Venkat Rao', agent: 'Kiran M.', note: 'Loan options discussion', time: '4:30 PM' },
    { id: '5', name: 'Lakshmi Devi', agent: 'Priya S.', note: 'Confirm site visit slot', time: '5:00 PM' },
  ];

  const completed = [
    { id: '6', name: 'Anil Kumar', agent: 'Arjun R.', note: 'Booking confirmation call', time: 'Done 12:30 PM' },
    { id: '7', name: 'Meena Sharma', agent: 'Kiran M.', note: 'Price negotiation', time: 'Done 10:15 AM' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>
      <div style={{display: 'flex', minHeight: '100dvh'}}>
        <div className="desktop-sidebar"><AdminSidebar active="followups" /></div>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>
          <div style={{padding: '12px 16px', background: 'white', borderBottom: '1px solid #DDE2EF',
                       display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>Follow-ups</div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>All team follow-ups</div>
            </div>
          </div>
          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* Stats */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '14px'}}>
              {[
                {val: overdue.length, lbl: 'Overdue', color: '#E53935'},
                {val: today.length, lbl: 'Due Today', color: '#1B2F6E'},
                {val: completed.length, lbl: 'Completed', color: '#3AAA35'},
              ].map((s, i) => (
                <div key={i} style={{background: 'white', borderRadius: '12px', padding: '14px',
                                     border: '0.5px solid #DDE2EF', textAlign: 'center'}}>
                  <div style={{fontSize: '24px', fontWeight: '800', color: s.color}}>{s.val}</div>
                  <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '2px'}}>{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* Overdue */}
            <div style={{marginBottom: '14px'}}>
              <div style={{fontSize: '12px', fontWeight: '700', color: '#E53935', marginBottom: '8px'}}>
                🔴 Overdue — Needs Attention
              </div>
              {overdue.map((item, i) => (
                <div key={i} style={{background: 'white', borderRadius: '12px', padding: '14px',
                                     marginBottom: '8px', borderLeft: '4px solid #E53935',
                                     display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{item.name}</div>
                    <div style={{fontSize: '11px', color: '#6B7AB5'}}>{item.agent} · {item.note}</div>
                    <div style={{fontSize: '11px', fontWeight: '600', color: '#E53935', marginTop: '3px'}}>
                      Was due: {item.time}
                    </div>
                  </div>
                  <button onClick={() => router.push('/admin/calls')}
                    style={{padding: '7px 14px', borderRadius: '8px', border: 'none',
                            background: '#1B2F6E', color: 'white', fontSize: '12px',
                            fontWeight: '700', cursor: 'pointer', flexShrink: 0}}>
                    📞 Call
                  </button>
                </div>
              ))}
            </div>

            {/* Due Today */}
            <div style={{marginBottom: '14px'}}>
              <div style={{fontSize: '12px', fontWeight: '700', color: '#1B2F6E', marginBottom: '8px'}}>
                🔵 Due Today
              </div>
              {today.map((item, i) => (
                <div key={i} style={{background: 'white', borderRadius: '12px', padding: '14px',
                                     marginBottom: '8px', borderLeft: '4px solid #1B2F6E',
                                     display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{item.name}</div>
                    <div style={{fontSize: '11px', color: '#6B7AB5'}}>{item.agent} · {item.note}</div>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E', marginTop: '3px'}}>
                      {item.time}
                    </div>
                  </div>
                  <button onClick={() => router.push('/admin/calls')}
                    style={{padding: '7px 14px', borderRadius: '8px', border: 'none',
                            background: '#1B2F6E', color: 'white', fontSize: '12px',
                            fontWeight: '700', cursor: 'pointer', flexShrink: 0}}>
                    📞 Call
                  </button>
                </div>
              ))}
            </div>

            {/* Completed */}
            <div>
              <div style={{fontSize: '12px', fontWeight: '700', color: '#3AAA35', marginBottom: '8px'}}>
                ✅ Completed Today
              </div>
              {completed.map((item, i) => (
                <div key={i} style={{background: 'white', borderRadius: '12px', padding: '14px',
                                     marginBottom: '8px', borderLeft: '4px solid #3AAA35',
                                     display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.85}}>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{item.name}</div>
                    <div style={{fontSize: '11px', color: '#6B7AB5'}}>{item.agent} · {item.note}</div>
                  </div>
                  <span style={{fontSize: '12px', fontWeight: '700', color: '#3AAA35', flexShrink: 0}}>
                    ✓ Done
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      <div className="mobile-bottom-nav" style={{position: 'fixed', bottom: 0, left: 0, right: 0,
           display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
           background: 'white', borderTop: '1px solid #DDE2EF', zIndex: 100}}>
        {[
          {icon: '🏠', label: 'Home', path: '/admin/dashboard'},
          {icon: '👥', label: 'Leads', path: '/admin/leads'},
          {icon: '📞', label: 'Calls', path: '/admin/calls'},
          {icon: '📊', label: 'Reports', path: '/admin/reports'},
          {icon: '👤', label: 'Team', path: '/admin/team'},
        ].map((item, i) => (
          <button key={i} onClick={() => router.push(item.path)}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '10px 4px', gap: '3px', fontSize: '10px', fontWeight: '600',
                    color: '#9AA5CC', background: 'none', border: 'none', cursor: 'pointer'}}>
            <span style={{fontSize: '20px'}}>{item.icon}</span>{item.label}
          </button>
        ))}
      </div>
      <style>{`
        @media (min-width: 768px) { .mobile-bottom-nav { display: none !important; } .desktop-sidebar { display: flex !important; } }
        @media (max-width: 767px) { .desktop-sidebar { display: none !important; } .mobile-bottom-nav { display: grid !important; } }
      `}</style>
    </div>
  );
}
