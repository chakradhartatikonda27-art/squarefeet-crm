'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TelecallerHome() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{minHeight: '100dvh', display: 'flex', flexDirection: 'column',
                 background: '#F0F2F8'}}>

      {/* Top Bar */}
      <div style={{padding: '16px', paddingBottom: '20px', background: '#1B2F6E',
                   position: 'relative'}}>
        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
          <div>
            <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0}}>
              Good morning
            </p>
            <h1 style={{fontSize: '22px', fontWeight: '800', color: 'white',
                        margin: '2px 0 6px'}}>
              Arjun Reddy
            </h1>
            <span style={{fontSize: '11px', fontWeight: '700', padding: '4px 12px',
                          borderRadius: '20px', background: '#3AAA35', color: 'white'}}>
              Telecaller
            </span>
          </div>

          {/* Menu Button */}
          <button onClick={() => setShowMenu(!showMenu)}
            style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)', border: 'none',
              color: 'white', fontSize: '18px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            ⋮
          </button>
        </div>

        {/* Dropdown Menu */}
        {showMenu && (
          <div style={{
            position: 'absolute', top: '60px', right: '16px',
            background: 'white', borderRadius: '12px', padding: '8px',
            zIndex: 100, minWidth: '160px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}>
            <button
              onClick={() => { setShowMenu(false); router.push('/admin/dashboard'); }}
              style={{
                width: '100%', padding: '10px 14px', borderRadius: '8px',
                border: 'none', background: 'none', textAlign: 'left',
                fontSize: '13px', fontWeight: '600', color: '#1B2F6E',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
              }}>
              🏠 Switch to Admin
            </button>
            <div style={{height: '1px', background: '#DDE2EF', margin: '4px 0'}}/>
            <button
              onClick={() => { setShowMenu(false); router.push('/'); }}
              style={{
                width: '100%', padding: '10px 14px', borderRadius: '8px',
                border: 'none', background: 'none', textAlign: 'left',
                fontSize: '13px', fontWeight: '600', color: '#E53935',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
              }}>
              🚪 Logout
            </button>
          </div>
        )}
      </div>

      {/* Stats Row */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                   gap: '8px', margin: '0 14px', marginTop: '-14px'}}>
        {[
          {val: '18', lbl: 'Calls today', color: '#1B2F6E'},
          {val: '14', lbl: 'Connected', color: '#3AAA35'},
          {val: '3', lbl: 'Follow-ups due', color: '#E53935'},
        ].map((s, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: '12px', padding: '12px',
            textAlign: 'center', border: '0.5px solid #DDE2EF',
          }}>
            <div style={{fontSize: '22px', fontWeight: '800', color: s.color}}>
              {s.val}
            </div>
            <div style={{fontSize: '10px', color: '#9AA5CC', marginTop: '2px'}}>
              {s.lbl}
            </div>
          </div>
        ))}
      </div>

      {/* Big Action Buttons */}
      <div style={{flex: 1, padding: '14px', display: 'flex',
                   flexDirection: 'column', gap: '10px'}}>

        <button onClick={() => router.push('/telecaller/call')}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
            padding: '16px', borderRadius: '16px', border: '2px solid #3AAA35',
            background: '#E8F5E8', cursor: 'pointer',
          }}>
          <div style={{width: '52px', height: '52px', borderRadius: '14px',
                       background: '#3AAA35', display: 'flex', alignItems: 'center',
                       justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '24px'}}>📞</span>
          </div>
          <div style={{flex: 1, textAlign: 'left'}}>
            <div style={{fontSize: '15px', fontWeight: '800', color: '#2D8529'}}>
              Call a Lead
            </div>
            <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
              12 leads waiting to be called
            </div>
          </div>
          <span style={{fontSize: '20px', color: '#2D8529'}}>→</span>
        </button>

        <button onClick={() => router.push('/telecaller/followups')}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
            padding: '16px', borderRadius: '16px', border: '2px solid #E53935',
            background: '#FFEBEE', cursor: 'pointer',
          }}>
          <div style={{width: '52px', height: '52px', borderRadius: '14px',
                       background: '#E53935', display: 'flex', alignItems: 'center',
                       justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '24px'}}>⏰</span>
          </div>
          <div style={{flex: 1, textAlign: 'left'}}>
            <div style={{fontSize: '15px', fontWeight: '800', color: '#E53935'}}>
              Follow-ups Due
            </div>
            <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
              3 pending — 1 overdue
            </div>
          </div>
          <span style={{fontSize: '11px', fontWeight: '800', padding: '4px 10px',
                        borderRadius: '20px', background: '#E53935', color: 'white'}}>
            3
          </span>
        </button>

        <button style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
          padding: '16px', borderRadius: '16px', border: '2px solid #1B2F6E',
          background: '#E8EBF5', cursor: 'pointer',
        }}>
          <div style={{width: '52px', height: '52px', borderRadius: '14px',
                       background: '#1B2F6E', display: 'flex', alignItems: 'center',
                       justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '24px'}}>👥</span>
          </div>
          <div style={{flex: 1, textAlign: 'left'}}>
            <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>
              My Leads
            </div>
            <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
              28 total leads assigned to me
            </div>
          </div>
          <span style={{fontSize: '20px', color: '#1B2F6E'}}>→</span>
        </button>

        <button onClick={() => router.push('/telecaller/attendance')}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
            padding: '16px', borderRadius: '16px', border: '2px solid #F57C00',
            background: '#FFF3E0', cursor: 'pointer',
          }}>
          <div style={{width: '52px', height: '52px', borderRadius: '14px',
                       background: '#F57C00', display: 'flex', alignItems: 'center',
                       justifyContent: 'center', flexShrink: 0}}>
            <span style={{fontSize: '24px'}}>📍</span>
          </div>
          <div style={{flex: 1, textAlign: 'left'}}>
            <div style={{fontSize: '15px', fontWeight: '800', color: '#F57C00'}}>
              Check In / Out
            </div>
            <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
              Checked in at 9:14 AM today
            </div>
          </div>
          <span style={{fontSize: '11px', fontWeight: '800', padding: '4px 10px',
                        borderRadius: '20px', background: '#3AAA35', color: 'white'}}>
            In
          </span>
        </button>
      </div>

      {/* Bottom Nav */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        background: 'white', borderTop: '1px solid #DDE2EF',
      }}>
        {[
          {icon: '🏠', label: 'Home', path: '/telecaller/home', active: true},
          {icon: '📞', label: 'Call', path: '/telecaller/call'},
          {icon: '📅', label: 'Follow-up', path: '/telecaller/followups'},
          {icon: '📍', label: 'Attendance', path: '/telecaller/attendance'},
        ].map((item, i) => (
          <button key={i} onClick={() => router.push(item.path)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '10px 4px', gap: '3px', fontSize: '10px', fontWeight: '600',
              color: item.active ? '#1B2F6E' : '#9AA5CC',
              background: 'none', border: 'none', cursor: 'pointer',
            }}>
            <span style={{fontSize: '20px'}}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

    </div>
  );
}
