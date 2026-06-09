'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeamLeaderDashboard() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const team = [
    { initials: 'AR', name: 'Arjun R.', role: 'Telecaller', calls: 22, score: 90, color: '#3AAA35', status: 'Active', overdue: 0 },
    { initials: 'PS', name: 'Priya S.', role: 'CRM Exec', calls: 19, score: 75, color: '#F57C00', status: 'Active', overdue: 2 },
    { initials: 'KM', name: 'Kiran M.', role: 'Sales Exec', calls: 9, score: 48, color: '#E53935', status: 'Field', overdue: 1 },
    { initials: 'RK', name: 'Rohit K.', role: 'Telecaller', calls: 0, score: 0, color: '#E53935', status: 'Absent', overdue: 3 },
  ];

  const alerts = [
    { type: 'overdue', text: 'Rohit K. has 3 overdue follow-ups', color: '#E53935', bg: '#FFEBEE' },
    { type: 'overdue', text: 'Priya S. has 2 overdue follow-ups', color: '#E53935', bg: '#FFEBEE' },
    { type: 'absent', text: 'Rohit K. has not checked in today', color: '#F57C00', bg: '#FFF3E0' },
    { type: 'low', text: 'Kiran M. is below 50% productivity', color: '#F57C00', bg: '#FFF3E0' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>

      {/* Header */}
      <div style={{background: '#1B2F6E', padding: '16px', paddingBottom: '20px', position: 'relative'}}>
        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
          <div>
            <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0}}>Good morning</p>
            <h1 style={{fontSize: '22px', fontWeight: '800', color: 'white', margin: '2px 0 6px'}}>
              Suresh Kumar
            </h1>
            <span style={{fontSize: '11px', fontWeight: '700', padding: '4px 12px',
                          borderRadius: '20px', background: '#2E9FD4', color: 'white'}}>
              Team Leader
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
        {[
          {val: '3', lbl: 'Active', color: '#3AAA35'},
          {val: '1', lbl: 'Absent', color: '#E53935'},
          {val: '50', lbl: 'Calls', color: '#1B2F6E'},
          {val: '71%', lbl: 'Avg Score', color: '#2E9FD4'},
        ].map((s, i) => (
          <div key={i} style={{background: 'white', borderRadius: '12px', padding: '10px',
                               textAlign: 'center', border: '0.5px solid #DDE2EF'}}>
            <div style={{fontSize: '20px', fontWeight: '800', color: s.color}}>{s.val}</div>
            <div style={{fontSize: '9px', color: '#9AA5CC', marginTop: '2px'}}>{s.lbl}</div>
          </div>
        ))}
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

        {/* Alerts */}
        <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden',
                     border: '0.5px solid #DDE2EF', marginBottom: '12px'}}>
          <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF', background: '#FFEBEE'}}>
            <div style={{fontSize: '13px', fontWeight: '700', color: '#E53935'}}>
              ⚠️ Team Alerts — {alerts.length} issues
            </div>
          </div>
          {alerts.map((alert, i) => (
            <div key={i} style={{display: 'flex', alignItems: 'center', gap: '10px',
                                 padding: '10px 14px', borderBottom: '1px solid #DDE2EF',
                                 background: alert.bg}}>
              <div style={{width: '8px', height: '8px', borderRadius: '50%',
                           background: alert.color, flexShrink: 0}}/>
              <div style={{flex: 1, fontSize: '12px', color: '#1B2F6E', fontWeight: '600'}}>
                {alert.text}
              </div>
            </div>
          ))}
        </div>

        {/* Team Performance */}
        <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden',
                     border: '0.5px solid #DDE2EF', marginBottom: '12px'}}>
          <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                       display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
              Team Performance Today
            </div>
            <button onClick={() => router.push('/teamleader/team')}
              style={{fontSize: '12px', fontWeight: '600', color: '#2E9FD4',
                      background: 'none', border: 'none', cursor: 'pointer'}}>
              Details →
            </button>
          </div>
          {team.map((member, i) => (
            <div key={i} style={{display: 'flex', alignItems: 'center', gap: '10px',
                                 padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                                 background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
              <div style={{width: '36px', height: '36px', borderRadius: '50%', background: '#1B2F6E',
                           display: 'flex', alignItems: 'center', justifyContent: 'center',
                           fontSize: '11px', fontWeight: '700', color: 'white', flexShrink: 0}}>
                {member.initials}
              </div>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                  <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{member.name}</div>
                  {member.overdue > 0 && (
                    <span style={{fontSize: '9px', fontWeight: '700', padding: '1px 5px',
                                  borderRadius: '8px', background: '#FFEBEE', color: '#E53935'}}>
                      {member.overdue} overdue
                    </span>
                  )}
                </div>
                <div style={{fontSize: '11px', color: '#9AA5CC'}}>{member.calls} calls today</div>
                <div style={{height: '4px', background: '#DDE2EF', borderRadius: '2px', marginTop: '4px'}}>
                  <div style={{height: '4px', borderRadius: '2px',
                               width: `${member.score}%`, background: member.color}}/>
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px'}}>
                <span style={{fontSize: '13px', fontWeight: '800', color: member.color}}>
                  {member.score}%
                </span>
                <span style={{fontSize: '9px', fontWeight: '600', padding: '2px 6px', borderRadius: '5px',
                              background: member.status === 'Active' ? '#E8F5E8' :
                                         member.status === 'Field' ? '#E3F4FB' : '#FFEBEE',
                              color: member.status === 'Active' ? '#2D8529' :
                                    member.status === 'Field' ? '#1565C0' : '#E53935'}}>
                  {member.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden',
                     border: '0.5px solid #DDE2EF'}}>
          <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
            <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>Quick Actions</div>
          </div>
          <div style={{padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <button onClick={() => router.push('/teamleader/leads')}
              style={{width: '100%', padding: '14px', borderRadius: '10px', border: 'none',
                      background: '#E8EBF5', color: '#1B2F6E', fontSize: '13px',
                      fontWeight: '700', cursor: 'pointer', textAlign: 'left'}}>
              🔄 Reassign a Lead
            </button>
            <button onClick={() => router.push('/teamleader/team')}
              style={{width: '100%', padding: '14px', borderRadius: '10px', border: 'none',
                      background: '#E3F4FB', color: '#1565C0', fontSize: '13px',
                      fontWeight: '700', cursor: 'pointer', textAlign: 'left'}}>
              👥 View Team Details
            </button>
            <button onClick={() => router.push('/teamleader/leads')}
              style={{width: '100%', padding: '14px', borderRadius: '10px', border: 'none',
                      background: '#FFEBEE', color: '#E53935', fontSize: '13px',
                      fontWeight: '700', cursor: 'pointer', textAlign: 'left'}}>
              📅 Check Follow-ups
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Nav */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/teamleader/dashboard', active: true},
          {icon: '👥', label: 'My Team', path: '/teamleader/team'},
          {icon: '📋', label: 'Leads', path: '/teamleader/leads'},
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
