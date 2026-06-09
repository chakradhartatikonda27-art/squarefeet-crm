'use client';
import { useRouter } from 'next/navigation';

export default function TeamLeaderTeam() {
  const router = useRouter();

  const team = [
    { initials: 'AR', name: 'Arjun R.', role: 'Telecaller', calls: 22, score: 90, color: '#3AAA35', bg: '#E8F5E8', status: 'Active', checkin: '9:10 AM', overdue: 0 },
    { initials: 'PS', name: 'Priya S.', role: 'CRM Executive', calls: 19, score: 75, color: '#F57C00', bg: '#FFF3E0', status: 'Active', checkin: '9:24 AM', overdue: 2 },
    { initials: 'KM', name: 'Kiran M.', role: 'Sales Exec', calls: 9, score: 48, color: '#E53935', bg: '#FFEBEE', status: 'Field', checkin: '9:45 AM', overdue: 1 },
    { initials: 'RK', name: 'Rohit K.', role: 'Telecaller', calls: 0, score: 0, color: '#E53935', bg: '#FFEBEE', status: 'Absent', checkin: '—', overdue: 3 },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>
      <div style={{background: '#1B2F6E', padding: '16px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px'}}>
          <button onClick={() => router.push('/teamleader/dashboard')}
            style={{color: 'white', background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer'}}>←</button>
          <h1 style={{fontSize: '20px', fontWeight: '800', color: 'white', margin: 0}}>My Team</h1>
        </div>
        <p style={{fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 0 34px'}}>
          4 members · Tuesday, 9 June 2026
        </p>
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>
        {team.map((member, i) => (
          <div key={i} style={{background: 'white', borderRadius: '14px', padding: '14px',
                               marginBottom: '10px', border: '0.5px solid #DDE2EF'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
              <div style={{width: '42px', height: '42px', borderRadius: '50%', background: '#1B2F6E',
                           display: 'flex', alignItems: 'center', justifyContent: 'center',
                           fontSize: '13px', fontWeight: '700', color: 'white', flexShrink: 0}}>
                {member.initials}
              </div>
              <div style={{flex: 1}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <div style={{fontSize: '15px', fontWeight: '700', color: '#1B2F6E'}}>{member.name}</div>
                  {member.overdue > 0 && (
                    <span style={{fontSize: '10px', fontWeight: '700', padding: '2px 6px',
                                  borderRadius: '8px', background: '#FFEBEE', color: '#E53935'}}>
                      {member.overdue} overdue
                    </span>
                  )}
                </div>
                <div style={{fontSize: '11px', color: '#9AA5CC'}}>{member.role}</div>
              </div>
              <span style={{fontSize: '10px', fontWeight: '600', padding: '4px 10px',
                            borderRadius: '6px', background: member.bg, color: member.color,
                            flexShrink: 0}}>
                {member.status}
              </span>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '12px'}}>
              {[
                {lbl: 'Check In', val: member.checkin, color: member.checkin === '—' ? '#E53935' : '#3AAA35'},
                {lbl: 'Calls Today', val: String(member.calls), color: '#1B2F6E'},
                {lbl: 'Score', val: `${member.score}%`, color: member.color},
              ].map((stat, j) => (
                <div key={j} style={{background: '#F7F8FC', borderRadius: '10px', padding: '10px', textAlign: 'center'}}>
                  <div style={{fontSize: '15px', fontWeight: '800', color: stat.color}}>{stat.val}</div>
                  <div style={{fontSize: '10px', color: '#9AA5CC', marginTop: '2px'}}>{stat.lbl}</div>
                </div>
              ))}
            </div>

            <div style={{height: '6px', background: '#DDE2EF', borderRadius: '3px', marginBottom: '12px'}}>
              <div style={{height: '6px', borderRadius: '3px', width: `${member.score}%`,
                           background: member.color}}/>
            </div>

            <div style={{display: 'flex', gap: '8px'}}>
              <button style={{flex: 1, padding: '8px', borderRadius: '8px', border: 'none',
                              background: '#1B2F6E', color: 'white', fontSize: '12px',
                              fontWeight: '700', cursor: 'pointer'}}>
                📞 Call Agent
              </button>
              <button style={{flex: 1, padding: '8px', borderRadius: '8px',
                              border: '1.5px solid #2E9FD4', background: '#E3F4FB',
                              color: '#1565C0', fontSize: '12px', fontWeight: '700', cursor: 'pointer'}}>
                🔄 Reassign Lead
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/teamleader/dashboard'},
          {icon: '👥', label: 'My Team', path: '/teamleader/team', active: true},
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
