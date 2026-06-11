'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TelecallerHome() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [dismissedAnn, setDismissedAnn] = useState(false);
  const [checkedIn, setCheckedIn] = useState(true);

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>

      {/* Header */}
      <div style={{background: '#1B2F6E', padding: '16px', paddingBottom: '20px', position: 'relative'}}>
        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
          <div>
            <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0}}>Good morning</p>
            <h1 style={{fontSize: '22px', fontWeight: '800', color: 'white', margin: '2px 0 6px'}}>
              Arjun Reddy
            </h1>
            <span style={{fontSize: '11px', fontWeight: '700', padding: '4px 12px',
                          borderRadius: '20px', background: '#3AAA35', color: 'white'}}>
              Telecaller
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
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                   gap: '8px', margin: '0 14px', marginTop: '-14px'}}>
        {[
          {val: '18', lbl: 'Calls today', color: '#1B2F6E'},
          {val: '14', lbl: 'Connected', color: '#3AAA35'},
          {val: '3', lbl: 'Follow-ups', color: '#E53935'},
        ].map((s, i) => (
          <div key={i} style={{background: 'white', borderRadius: '12px', padding: '12px',
                               textAlign: 'center', border: '0.5px solid #DDE2EF'}}>
            <div style={{fontSize: '22px', fontWeight: '800', color: s.color}}>{s.val}</div>
            <div style={{fontSize: '10px', color: '#9AA5CC', marginTop: '2px'}}>{s.lbl}</div>
          </div>
        ))}
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

        {/* Check In/Out Status Bar */}
        <div onClick={() => router.push('/telecaller/attendance')}
          style={{background: checkedIn ? '#E8F5E8' : '#FFEBEE', borderRadius: '12px',
                  padding: '12px 16px', marginBottom: '12px', cursor: 'pointer',
                  border: `1.5px solid ${checkedIn ? '#3AAA35' : '#E53935'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <span style={{fontSize: '20px'}}>📍</span>
            <div>
              <div style={{fontSize: '13px', fontWeight: '700',
                           color: checkedIn ? '#2D8529' : '#E53935'}}>
                {checkedIn ? 'Checked In — 9:14 AM' : 'Not Checked In'}
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '1px'}}>
                {checkedIn ? 'Tap to check out' : 'Tap to check in now'}
              </div>
            </div>
          </div>
          <div style={{background: checkedIn ? '#3AAA35' : '#E53935', borderRadius: '8px',
                       padding: '6px 14px'}}>
            <span style={{fontSize: '12px', fontWeight: '800', color: 'white'}}>
              {checkedIn ? 'IN ✓' : 'OUT'}
            </span>
          </div>
        </div>

        {/* Announcement Banner — compact */}
        {!dismissedAnn && (
          <div style={{background: '#E8F5E8', borderRadius: '12px', padding: '10px 14px',
                       marginBottom: '12px', border: '1.5px solid #3AAA35',
                       display: 'flex', alignItems: 'center', gap: '10px'}}>
            <span style={{fontSize: '16px', flexShrink: 0}}>🚀</span>
            <div style={{flex: 1, minWidth: 0}}>
              <div style={{fontSize: '12px', fontWeight: '700', color: '#2D8529',
                           whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                Rushikonda Heights Phase 2 launched
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                Start calling interested leads now
              </div>
            </div>
            <button onClick={() => setDismissedAnn(true)}
              style={{fontSize: '16px', background: 'none', border: 'none',
                      cursor: 'pointer', color: '#9AA5CC', flexShrink: 0}}>×</button>
          </div>
        )}

        {/* Score Pills */}
        <div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
          {[
            {icon: '🔴', label: 'Hot', count: 4, color: '#E53935', bg: '#FFEBEE'},
            {icon: '🟡', label: 'Warm', count: 8, color: '#F57C00', bg: '#FFF3E0'},
            {icon: '🔵', label: 'Cold', count: 16, color: '#1565C0', bg: '#E3F4FB'},
          ].map((s, i) => (
            <div key={i} style={{flex: 1, background: s.bg, borderRadius: '10px',
                                 padding: '8px', textAlign: 'center',
                                 border: `1px solid ${s.color}30`}}>
              <div style={{fontSize: '11px'}}>{s.icon}</div>
              <div style={{fontSize: '16px', fontWeight: '800', color: s.color}}>{s.count}</div>
              <div style={{fontSize: '10px', fontWeight: '600', color: s.color}}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* 3 Main Action Buttons — removed attendance */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>

          <button onClick={() => router.push('/telecaller/call')}
            style={{width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px', borderRadius: '16px', border: '2px solid #3AAA35',
                    background: '#E8F5E8', cursor: 'pointer'}}>
            <div style={{width: '52px', height: '52px', borderRadius: '14px', background: '#3AAA35',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{fontSize: '24px'}}>📞</span>
            </div>
            <div style={{flex: 1, textAlign: 'left'}}>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#2D8529'}}>Call a Lead</div>
              <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
                4 🔴 Hot · 8 🟡 Warm · 12 waiting
              </div>
            </div>
            <span style={{fontSize: '20px', color: '#2D8529'}}>→</span>
          </button>

          <button onClick={() => router.push('/telecaller/followups')}
            style={{width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px', borderRadius: '16px', border: '2px solid #E53935',
                    background: '#FFEBEE', cursor: 'pointer'}}>
            <div style={{width: '52px', height: '52px', borderRadius: '14px', background: '#E53935',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{fontSize: '24px'}}>⏰</span>
            </div>
            <div style={{flex: 1, textAlign: 'left'}}>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#E53935'}}>Follow-ups Due</div>
              <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
                3 pending — 1 overdue
              </div>
            </div>
            <span style={{fontSize: '11px', fontWeight: '800', padding: '4px 10px',
                          borderRadius: '20px', background: '#E53935', color: 'white'}}>3</span>
          </button>

          <button style={{width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
                          padding: '16px', borderRadius: '16px', border: '2px solid #1B2F6E',
                          background: '#E8EBF5', cursor: 'pointer'}}>
            <div style={{width: '52px', height: '52px', borderRadius: '14px', background: '#1B2F6E',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{fontSize: '24px'}}>👥</span>
            </div>
            <div style={{flex: 1, textAlign: 'left'}}>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>My Leads</div>
              <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
                28 total leads assigned to me
              </div>
            </div>
            <span style={{fontSize: '20px', color: '#1B2F6E'}}>→</span>
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
