'use client';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function AdminTeam() {
  const router = useRouter();

  const team = [
    { initials: 'AR', name: 'Arjun R.', role: 'Telecaller', checkin: '9:10 AM', calls: 22, score: 90, color: '#3AAA35', bg: '#E8F5E8', status: 'Active', location: 'Gajuwaka' },
    { initials: 'PS', name: 'Priya S.', role: 'CRM Executive', checkin: '9:24 AM', calls: 19, score: 75, color: '#F57C00', bg: '#FFF3E0', status: 'Active', location: 'MVP Colony' },
    { initials: 'KM', name: 'Kiran M.', role: 'Sales Exec', checkin: '9:45 AM', calls: 9, score: 48, color: '#E53935', bg: '#FFEBEE', status: 'Field', location: 'Rushikonda' },
    { initials: 'RK', name: 'Rohit K.', role: 'Telecaller', checkin: '—', calls: 0, score: 0, color: '#E53935', bg: '#FFEBEE', status: 'Absent', location: '—' },
  ];

  const dots = [
    { initials: 'AR', x: '25%', y: '55%', color: '#3AAA35', location: 'Gajuwaka' },
    { initials: 'PS', x: '55%', y: '35%', color: '#2E9FD4', location: 'MVP Colony' },
    { initials: 'KM', x: '72%', y: '62%', color: '#F57C00', location: 'Rushikonda' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>
      <div style={{display: 'flex', minHeight: '100dvh'}}>

        <div className="desktop-sidebar">
          <AdminSidebar active="team" />
        </div>

        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>

          {/* Top Bar */}
          <div style={{
            padding: '12px 16px', background: 'white',
            borderBottom: '1px solid #DDE2EF',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>
                Team & GPS
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                Tuesday, 9 June 2026
              </div>
            </div>
            <button style={{
              padding: '7px 14px', borderRadius: '8px', fontSize: '12px',
              fontWeight: '700', color: 'white', background: '#1B2F6E',
              border: 'none', cursor: 'pointer',
            }}>
              + Add Member
            </button>
          </div>

          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* Stats Row */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px', marginBottom: '14px',
            }}>
              {[
                { val: '3', lbl: 'Checked In', color: '#3AAA35' },
                { val: '1', lbl: 'Absent', color: '#E53935' },
                { val: '67', lbl: 'Total Calls', color: '#1B2F6E' },
                { val: '71%', lbl: 'Avg Score', color: '#2E9FD4' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'white', borderRadius: '12px', padding: '12px',
                  border: '0.5px solid #DDE2EF', textAlign: 'center',
                }}>
                  <div style={{fontSize: '22px', fontWeight: '800', color: s.color}}>
                    {s.val}
                  </div>
                  <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '2px'}}>
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>

            {/* GPS Map */}
            <div style={{
              background: 'white', borderRadius: '12px',
              border: '0.5px solid #DDE2EF', marginBottom: '12px', overflow: 'hidden',
            }}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                           display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  📍 Live Team Location
                </div>
                <span style={{fontSize: '11px', fontWeight: '600', padding: '3px 8px',
                              borderRadius: '6px', background: '#E8F5E8', color: '#2D8529'}}>
                  Live
                </span>
              </div>

              {/* Map Area */}
              <div style={{
                height: '180px', background: '#E3F4FB',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Grid */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(rgba(46,159,212,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(46,159,212,0.15) 1px, transparent 1px)',
                  backgroundSize: '35px 35px',
                }}/>

                {/* Location Dots */}
                {dots.map((dot, i) => (
                  <div key={i} style={{
                    position: 'absolute', left: dot.x, top: dot.y,
                    transform: 'translate(-50%, -50%)',
                  }}>
                    {/* Pulse ring */}
                    <div style={{
                      position: 'absolute', width: '30px', height: '30px',
                      borderRadius: '50%', border: `2px solid ${dot.color}`,
                      opacity: 0.3, top: '-9px', left: '-9px',
                    }}/>
                    <div style={{
                      width: '12px', height: '12px', borderRadius: '50%',
                      background: dot.color, border: '2px solid white',
                      position: 'relative', zIndex: 1,
                    }}/>
                    <div style={{
                      position: 'absolute', top: '14px', left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'white', borderRadius: '6px',
                      padding: '2px 8px', fontSize: '10px', fontWeight: '700',
                      color: '#1B2F6E', whiteSpace: 'nowrap',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                    }}>
                      {dot.initials} · {dot.location}
                    </div>
                  </div>
                ))}

                {/* Visakhapatnam label */}
                <div style={{
                  position: 'absolute', bottom: '10px', right: '12px',
                  fontSize: '11px', fontWeight: '600', color: '#2E9FD4', opacity: 0.7,
                }}>
                  Visakhapatnam, AP
                </div>
              </div>
            </div>

            {/* Team Table */}
            <div style={{
              background: 'white', borderRadius: '12px',
              border: '0.5px solid #DDE2EF', overflow: 'hidden',
            }}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  Team Attendance Today
                </div>
              </div>

              {/* Table Header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 80px 60px 60px 70px',
                padding: '8px 14px', background: '#F7F8FC',
                borderBottom: '1px solid #DDE2EF',
              }}>
                {['Member', 'Check In', 'Calls', 'Score', 'Status'].map((h, i) => (
                  <div key={i} style={{
                    fontSize: '10px', fontWeight: '700', color: '#9AA5CC',
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                    textAlign: i > 0 ? 'center' : 'left',
                  }}>
                    {h}
                  </div>
                ))}
              </div>

              {team.map((member, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 80px 60px 60px 70px',
                  padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                  background: i % 2 === 0 ? '#F7F8FC' : 'white',
                  alignItems: 'center',
                }}>
                  {/* Member */}
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <div style={{
                      width: '34px', height: '34px', borderRadius: '50%',
                      background: '#1B2F6E', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                      color: 'white', flexShrink: 0,
                    }}>
                      {member.initials}
                    </div>
                    <div>
                      <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                        {member.name}
                      </div>
                      <div style={{fontSize: '11px', color: '#9AA5CC'}}>
                        {member.role}
                      </div>
                    </div>
                  </div>

                  {/* Check In */}
                  <div style={{
                    fontSize: '12px', fontWeight: '600', textAlign: 'center',
                    color: member.checkin === '—' ? '#E53935' : '#3AAA35',
                  }}>
                    {member.checkin}
                  </div>

                  {/* Calls */}
                  <div style={{
                    fontSize: '13px', fontWeight: '700',
                    color: '#1B2F6E', textAlign: 'center',
                  }}>
                    {member.calls}
                  </div>

                  {/* Score */}
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '13px', fontWeight: '800', color: member.color}}>
                      {member.score}%
                    </div>
                    <div style={{
                      height: '4px', background: '#DDE2EF',
                      borderRadius: '2px', marginTop: '3px',
                    }}>
                      <div style={{
                        height: '4px', borderRadius: '2px',
                        width: `${member.score}%`, background: member.color,
                      }}/>
                    </div>
                  </div>

                  {/* Status */}
                  <div style={{textAlign: 'center'}}>
                    <span style={{
                      fontSize: '10px', fontWeight: '600', padding: '3px 8px',
                      borderRadius: '6px', background: member.bg, color: member.color,
                    }}>
                      {member.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="mobile-bottom-nav" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
        background: 'white', borderTop: '1px solid #DDE2EF', zIndex: 100,
      }}>
        {[
          {icon: '🏠', label: 'Home', path: '/admin/dashboard'},
          {icon: '👥', label: 'Leads', path: '/admin/leads'},
          {icon: '📞', label: 'Calls', path: '/admin/calls'},
          {icon: '📊', label: 'Reports', path: '/admin/reports'},
          {icon: '👤', label: 'Team', path: '/admin/team', active: true},
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

      <style>{`
        @media (min-width: 768px) {
          .mobile-bottom-nav { display: none !important; }
          .desktop-sidebar { display: flex !important; }
        }
        @media (max-width: 767px) {
          .desktop-sidebar { display: none !important; }
          .mobile-bottom-nav { display: grid !important; }
        }
      `}</style>
    </div>
  );
}
