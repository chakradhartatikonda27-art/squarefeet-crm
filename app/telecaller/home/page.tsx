'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TelecallerHome() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [dismissedAnn, setDismissedAnn] = useState(false);

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex',
                 flexDirection: 'column'}}>

      {/* Header — compact */}
      <div style={{background: '#1B2F6E', padding: '14px 16px 16px', position: 'relative'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px'}}>
              <h1 style={{fontSize: '18px', fontWeight: '800', color: 'white', margin: 0}}>
                Arjun Reddy
              </h1>
              <span style={{fontSize: '10px', fontWeight: '700', padding: '2px 8px',
                            borderRadius: '20px', background: '#3AAA35', color: 'white'}}>
                Telecaller
              </span>
            </div>
            <div style={{fontSize: '11px', color: 'rgba(255,255,255,0.5)'}}>
              Tuesday, 9 June 2026 · Visakhapatnam
            </div>
          </div>
          <button onClick={() => setShowMenu(!showMenu)}
            style={{width: '34px', height: '34px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)', border: 'none',
                    color: 'white', fontSize: '16px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'}}>⋮</button>
        </div>

        {showMenu && (
          <div style={{position: 'absolute', top: '52px', right: '16px', background: 'white',
                       borderRadius: '12px', padding: '8px', zIndex: 100, minWidth: '160px',
                       boxShadow: '0 4px 20px rgba(0,0,0,0.2)'}}>
            <button onClick={() => { setShowMenu(false); router.push('/telecaller/attendance'); }}
              style={{width: '100%', padding: '10px 14px', borderRadius: '8px', border: 'none',
                      background: 'none', textAlign: 'left', fontSize: '13px', fontWeight: '600',
                      color: '#1B2F6E', cursor: 'pointer'}}>📍 Attendance</button>
            <div style={{height: '1px', background: '#DDE2EF', margin: '4px 0'}}/>
            <button onClick={() => { setShowMenu(false); router.push('/'); }}
              style={{width: '100%', padding: '10px 14px', borderRadius: '8px', border: 'none',
                      background: 'none', textAlign: 'left', fontSize: '13px', fontWeight: '600',
                      color: '#E53935', cursor: 'pointer'}}>🚪 Logout</button>
          </div>
        )}
      </div>

      {/* Stats Row */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   gap: '8px', padding: '12px 14px', background: '#F0F2F8'}}>
        {[
          {val: '18', lbl: 'Calls', color: '#1B2F6E'},
          {val: '14', lbl: 'Connected', color: '#3AAA35'},
          {val: '3', lbl: 'Follow-ups', color: '#E53935'},
          {val: '✓ IN', lbl: '9:14 AM', color: '#3AAA35'},
        ].map((s, i) => (
          <div key={i} style={{background: 'white', borderRadius: '10px', padding: '10px 6px',
                               textAlign: 'center', border: '0.5px solid #DDE2EF'}}>
            <div style={{fontSize: i === 3 ? '13px' : '20px', fontWeight: '800', color: s.color}}>
              {s.val}
            </div>
            <div style={{fontSize: '9px', color: '#9AA5CC', marginTop: '2px'}}>{s.lbl}</div>
          </div>
        ))}
      </div>

      <div style={{flex: 1, padding: '0 14px 14px', overflowY: 'auto', paddingBottom: '80px'}}>

        {/* Announcement */}
        {!dismissedAnn && (
          <div style={{background: '#E8F5E8', borderRadius: '12px', padding: '12px 14px',
                       marginBottom: '10px', border: '1.5px solid #3AAA35',
                       display: 'flex', alignItems: 'center', gap: '10px'}}>
            <span style={{fontSize: '18px', flexShrink: 0}}>🚀</span>
            <div style={{flex: 1, minWidth: 0}}>
              <div style={{fontSize: '12px', fontWeight: '700', color: '#2D8529'}}>
                New Launch — Rushikonda Heights Phase 2
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '1px'}}>
                Start calling interested leads now · Target 10 bookings
              </div>
            </div>
            <button onClick={() => setDismissedAnn(true)}
              style={{fontSize: '18px', background: 'none', border: 'none',
                      cursor: 'pointer', color: '#9AA5CC', flexShrink: 0, lineHeight: 1}}>×</button>
          </div>
        )}

        {/* Action Cards */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>

          {/* Call a Lead */}
          <button onClick={() => router.push('/telecaller/leads')}
            style={{width: '100%', background: 'white', borderRadius: '14px', padding: '16px',
                    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
                    gap: '14px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)'}}>
            <div style={{width: '50px', height: '50px', borderRadius: '14px', background: '#3AAA35',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{fontSize: '24px'}}>📞</span>
            </div>
            <div style={{flex: 1, textAlign: 'left'}}>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>Call a Lead</div>
              <div style={{fontSize: '11px', color: '#9AA5CC', marginTop: '2px'}}>
                12 waiting · 4 🔴 Hot · 8 🟡 Warm
              </div>
            </div>
            <div style={{width: '30px', height: '30px', borderRadius: '50%', background: '#3AAA35',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{color: 'white', fontSize: '14px', fontWeight: '800'}}>›</span>
            </div>
          </button>

          {/* Follow-ups */}
          <button onClick={() => router.push('/telecaller/followups')}
            style={{width: '100%', background: 'white', borderRadius: '14px', padding: '16px',
                    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
                    gap: '14px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)'}}>
            <div style={{width: '50px', height: '50px', borderRadius: '14px', background: '#E53935',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{fontSize: '24px'}}>⏰</span>
            </div>
            <div style={{flex: 1, textAlign: 'left'}}>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>Follow-ups Due</div>
              <div style={{fontSize: '11px', color: '#9AA5CC', marginTop: '2px'}}>
                3 pending · 1 overdue
              </div>
            </div>
            <div style={{width: '30px', height: '30px', borderRadius: '50%', background: '#E53935',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{color: 'white', fontSize: '12px', fontWeight: '800'}}>3</span>
            </div>
          </button>

          {/* My Leads */}
          <button onClick={() => router.push('/telecaller/leads')}
            style={{width: '100%', background: 'white', borderRadius: '14px', padding: '16px',
                    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
                    gap: '14px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)'}}>
            <div style={{width: '50px', height: '50px', borderRadius: '14px', background: '#1B2F6E',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{fontSize: '24px'}}>👥</span>
            </div>
            <div style={{flex: 1, textAlign: 'left'}}>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>My Leads</div>
              <div style={{fontSize: '11px', color: '#9AA5CC', marginTop: '2px'}}>
                28 assigned · 4 🔴 · 8 🟡 · 16 🔵
              </div>
            </div>
            <div style={{width: '30px', height: '30px', borderRadius: '50%', background: '#1B2F6E',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{color: 'white', fontSize: '14px', fontWeight: '800'}}>›</span>
            </div>
          </button>

          {/* Attendance */}
          <button onClick={() => router.push('/telecaller/attendance')}
            style={{width: '100%', background: 'white', borderRadius: '14px', padding: '16px',
                    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
                    gap: '14px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)'}}>
            <div style={{width: '50px', height: '50px', borderRadius: '14px', background: '#F57C00',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{fontSize: '24px'}}>📍</span>
            </div>
            <div style={{flex: 1, textAlign: 'left'}}>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>Attendance</div>
              <div style={{fontSize: '11px', color: '#9AA5CC', marginTop: '2px'}}>
                Checked in · 9:14 AM · Tap to check out
              </div>
            </div>
            <div style={{width: '30px', height: '30px', borderRadius: '50%', background: '#3AAA35',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{color: 'white', fontSize: '9px', fontWeight: '800'}}>IN</span>
            </div>
          </button>

        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/telecaller/home', active: true},
          {icon: '📞', label: 'Call', path: '/telecaller/call'},
          {icon: '📅', label: 'Follow-up', path: '/telecaller/followups'},
          {icon: '📍', label: 'Attendance', path: '/telecaller/attendance'},
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
