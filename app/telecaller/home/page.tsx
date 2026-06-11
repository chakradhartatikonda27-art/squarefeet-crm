'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TelecallerHome() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>

      {/* Header */}
      <div style={{background: '#1B2F6E', padding: '20px 16px 32px'}}>
        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                     marginBottom: '16px'}}>
          <div>
            <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: '0 0 4px'}}>
              Tuesday, 9 June 2026
            </p>
            <h1 style={{fontSize: '24px', fontWeight: '800', color: 'white', margin: '0 0 8px'}}>
              Arjun Reddy
            </h1>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{fontSize: '11px', fontWeight: '700', padding: '3px 10px',
                            borderRadius: '20px', background: '#3AAA35', color: 'white'}}>
                Telecaller
              </span>
              <span style={{fontSize: '11px', fontWeight: '600', padding: '3px 10px',
                            borderRadius: '20px', background: 'rgba(255,255,255,0.12)',
                            color: '#3AAA35'}}>
                📍 Checked In 9:14 AM
              </span>
            </div>
          </div>
          <button onClick={() => setShowMenu(!showMenu)}
            style={{width: '38px', height: '38px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                    color: 'white', fontSize: '18px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'}}>⋮</button>
        </div>

        {/* Stats inside header */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
          {[
            {val: '18', lbl: 'Calls Today', color: 'white'},
            {val: '14', lbl: 'Connected', color: '#3AAA35'},
            {val: '3', lbl: 'Follow-ups', color: '#FF6B6B'},
          ].map((s, i) => (
            <div key={i} style={{background: 'rgba(255,255,255,0.08)', borderRadius: '12px',
                                 padding: '12px', textAlign: 'center'}}>
              <div style={{fontSize: '24px', fontWeight: '800', color: s.color}}>{s.val}</div>
              <div style={{fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginTop: '3px'}}>
                {s.lbl}
              </div>
            </div>
          ))}
        </div>

        {showMenu && (
          <div style={{position: 'absolute', top: '60px', right: '16px', background: 'white',
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

      {/* Main Actions */}
      <div style={{flex: 1, padding: '16px', marginTop: '-16px', overflowY: 'auto', paddingBottom: '80px'}}>

        {/* Primary Action — Call */}
        <button onClick={() => router.push('/telecaller/call')}
          style={{width: '100%', background: 'white', borderRadius: '16px', padding: '20px',
                  border: 'none', cursor: 'pointer', marginBottom: '10px',
                  display: 'flex', alignItems: 'center', gap: '16px',
                  boxShadow: '0 2px 12px rgba(27,47,110,0.08)'}}>
          <div style={{width: '56px', height: '56px', borderRadius: '16px', background: '#3AAA35',
                       display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '26px'}}>📞</span>
          </div>
          <div style={{flex: 1, textAlign: 'left'}}>
            <div style={{fontSize: '16px', fontWeight: '800', color: '#1B2F6E'}}>Call a Lead</div>
            <div style={{fontSize: '12px', color: '#9AA5CC', marginTop: '3px'}}>
              12 leads waiting · 4 🔴 Hot · 8 🟡 Warm
            </div>
          </div>
          <div style={{width: '32px', height: '32px', borderRadius: '50%',
                       background: '#3AAA35', display: 'flex', alignItems: 'center',
                       justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '14px', color: 'white', fontWeight: '800'}}>→</span>
          </div>
        </button>

        {/* Follow-ups */}
        <button onClick={() => router.push('/telecaller/followups')}
          style={{width: '100%', background: 'white', borderRadius: '16px', padding: '20px',
                  border: 'none', cursor: 'pointer', marginBottom: '10px',
                  display: 'flex', alignItems: 'center', gap: '16px',
                  boxShadow: '0 2px 12px rgba(27,47,110,0.08)'}}>
          <div style={{width: '56px', height: '56px', borderRadius: '16px', background: '#E53935',
                       display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '26px'}}>⏰</span>
          </div>
          <div style={{flex: 1, textAlign: 'left'}}>
            <div style={{fontSize: '16px', fontWeight: '800', color: '#1B2F6E'}}>Follow-ups Due</div>
            <div style={{fontSize: '12px', color: '#9AA5CC', marginTop: '3px'}}>
              3 pending · 1 overdue
            </div>
          </div>
          <div style={{width: '32px', height: '32px', borderRadius: '50%',
                       background: '#E53935', display: 'flex', alignItems: 'center',
                       justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '12px', color: 'white', fontWeight: '800'}}>3</span>
          </div>
        </button>

        {/* My Leads */}
        <button style={{width: '100%', background: 'white', borderRadius: '16px', padding: '20px',
                        border: 'none', cursor: 'pointer', marginBottom: '10px',
                        display: 'flex', alignItems: 'center', gap: '16px',
                        boxShadow: '0 2px 12px rgba(27,47,110,0.08)'}}>
          <div style={{width: '56px', height: '56px', borderRadius: '16px', background: '#2E9FD4',
                       display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '26px'}}>👥</span>
          </div>
          <div style={{flex: 1, textAlign: 'left'}}>
            <div style={{fontSize: '16px', fontWeight: '800', color: '#1B2F6E'}}>My Leads</div>
            <div style={{fontSize: '12px', color: '#9AA5CC', marginTop: '3px'}}>
              28 total assigned to me
            </div>
          </div>
          <div style={{width: '32px', height: '32px', borderRadius: '50%',
                       background: '#2E9FD4', display: 'flex', alignItems: 'center',
                       justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '14px', color: 'white', fontWeight: '800'}}>→</span>
          </div>
        </button>

        {/* Attendance */}
        <button onClick={() => router.push('/telecaller/attendance')}
          style={{width: '100%', background: 'white', borderRadius: '16px', padding: '20px',
                  border: 'none', cursor: 'pointer', marginBottom: '10px',
                  display: 'flex', alignItems: 'center', gap: '16px',
                  boxShadow: '0 2px 12px rgba(27,47,110,0.08)'}}>
          <div style={{width: '56px', height: '56px', borderRadius: '16px', background: '#F57C00',
                       display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '26px'}}>📍</span>
          </div>
          <div style={{flex: 1, textAlign: 'left'}}>
            <div style={{fontSize: '16px', fontWeight: '800', color: '#1B2F6E'}}>Attendance</div>
            <div style={{fontSize: '12px', color: '#9AA5CC', marginTop: '3px'}}>
              Checked in · 9:14 AM · Tap to check out
            </div>
          </div>
          <div style={{width: '32px', height: '32px', borderRadius: '50%',
                       background: '#3AAA35', display: 'flex', alignItems: 'center',
                       justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '10px', color: 'white', fontWeight: '800'}}>IN</span>
          </div>
        </button>

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
