'use client';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function AdminDashboard() {
  const router = useRouter();

  const stats = [
    { label: 'Total Leads', value: '142', trend: '+12 this week', color: '#1B2F6E', accent: '#1B2F6E' },
    { label: 'Calls Today', value: '67', trend: '44 connected', color: '#2E9FD4', accent: '#2E9FD4' },
    { label: 'Conversions', value: '7', trend: 'This month', color: '#3AAA35', accent: '#3AAA35' },
    { label: 'Overdue', value: '3', trend: 'Needs attention', color: '#E53935', accent: '#E53935' },
  ];

  const recentLeads = [
    { name: 'Ravi Kumar', area: 'Maddilapalem', budget: '₹65L', status: 'New', sbg: '#E3F4FB', sfg: '#1565C0' },
    { name: 'Sunita Prasad', area: 'Gajuwaka', budget: '₹45L', status: 'Follow-up', sbg: '#FFF3E0', sfg: '#E65100' },
    { name: 'Venkat Rao', area: 'Rushikonda', budget: '₹1.2Cr', status: 'Interested', sbg: '#E8F5E8', sfg: '#2D8529' },
    { name: 'Lakshmi Devi', area: 'MVP Colony', budget: '₹80L', status: 'Contacted', sbg: '#FFF3E0', sfg: '#E65100' },
  ];

  const team = [
    { name: 'Arjun R.', calls: 22, score: 90, color: '#3AAA35' },
    { name: 'Priya S.', calls: 19, score: 75, color: '#F57C00' },
    { name: 'Kiran M.', calls: 9, score: 48, color: '#E53935' },
    { name: 'Rohit K.', calls: 0, score: 0, color: '#E53935' },
  ];

  const bottomNav = [
    { id: 'dashboard', label: 'Home', icon: '🏠', path: '/admin/dashboard', active: true },
    { id: 'leads', label: 'Leads', icon: '👥', path: '/admin/leads' },
    { id: 'calls', label: 'Calls', icon: '📞', path: '/admin/calls' },
    { id: 'reports', label: 'Reports', icon: '📊', path: '/admin/reports' },
    { id: 'team', label: 'Team', icon: '👤', path: '/admin/team' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>
      <div style={{display: 'flex', minHeight: '100dvh'}}>

        {/* Sidebar */}
        <div className="desktop-sidebar">
          <AdminSidebar active="dashboard" />
        </div>

        {/* Main */}
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>

          {/* Top Bar */}
          <div style={{
            padding: '12px 16px', background: 'white',
            borderBottom: '1px solid #DDE2EF',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>
                Good morning, Mohan
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                Tuesday, 9 June 2026 · Visakhapatnam
              </div>
            </div>
            <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
              <button style={{
                padding: '7px 12px', borderRadius: '8px', fontSize: '12px',
                fontWeight: '600', border: '1px solid #DDE2EF',
                background: 'white', color: '#1B2F6E', cursor: 'pointer',
              }}>
                🔔 3
              </button>
              <button onClick={() => router.push('/admin/leads')}
                style={{
                  padding: '7px 14px', borderRadius: '8px', fontSize: '12px',
                  fontWeight: '700', color: 'white', background: '#1B2F6E',
                  border: 'none', cursor: 'pointer',
                }}>
                + Add Lead
              </button>
            </div>
          </div>

          {/* Content */}
          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px', marginBottom: '14px',
            }}>
              {stats.map((stat, i) => (
                <div key={i} style={{
                  background: 'white', borderRadius: '12px', padding: '14px',
                  border: '0.5px solid #DDE2EF', position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: '3px', background: stat.accent,
                  }}/>
                  <div style={{fontSize: '24px', fontWeight: '800',
                               color: stat.color, marginTop: '4px'}}>
                    {stat.value}
                  </div>
                  <div style={{fontSize: '11px', fontWeight: '500',
                               color: '#6B7AB5', marginTop: '2px'}}>
                    {stat.label}
                  </div>
                  <div style={{fontSize: '11px', fontWeight: '600',
                               color: stat.color, marginTop: '2px'}}>
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Leads */}
            <div style={{
              background: 'white', borderRadius: '12px',
              border: '0.5px solid #DDE2EF', marginBottom: '12px', overflow: 'hidden',
            }}>
              <div style={{
                padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  Recent Leads
                </div>
                <button onClick={() => router.push('/admin/leads')}
                  style={{fontSize: '12px', fontWeight: '600', color: '#2E9FD4',
                          background: 'none', border: 'none', cursor: 'pointer'}}>
                  View all →
                </button>
              </div>
              {recentLeads.map((lead, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '10px 14px', borderBottom: '1px solid #DDE2EF',
                  background: i % 2 === 0 ? '#F7F8FC' : 'white',
                }}>
                  <div style={{
                    width: '34px', height: '34px', borderRadius: '50%',
                    background: '#1B2F6E', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                    color: 'white', flexShrink: 0,
                  }}>
                    {lead.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{flex: 1, minWidth: 0}}>
                    <div style={{fontSize: '13px', fontWeight: '600', color: '#1A1A2E'}}>
                      {lead.name}
                    </div>
                    <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                      {lead.area} · {lead.budget}
                    </div>
                  </div>
                  <span style={{
                    fontSize: '10px', fontWeight: '600', padding: '3px 8px',
                    borderRadius: '6px', background: lead.sbg, color: lead.sfg,
                    flexShrink: 0,
                  }}>
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Hourly Report */}
            <div style={{
              background: 'white', borderRadius: '12px',
              border: '0.5px solid #DDE2EF', marginBottom: '12px', overflow: 'hidden',
            }}>
              <div style={{
                padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div>
                  <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                    Last Hourly Report
                  </div>
                  <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                    Auto-generated at 3:00 PM
                  </div>
                </div>
                <div style={{display: 'flex', gap: '6px'}}>
                  <button style={{
                    padding: '5px 10px', borderRadius: '6px', fontSize: '11px',
                    fontWeight: '600', border: '1px solid #DDE2EF',
                    background: 'white', color: '#1B2F6E', cursor: 'pointer',
                  }}>Excel</button>
                  <button style={{
                    padding: '5px 10px', borderRadius: '6px', fontSize: '11px',
                    fontWeight: '700', color: 'white', background: '#1B2F6E',
                    border: 'none', cursor: 'pointer',
                  }}>PDF</button>
                </div>
              </div>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px', padding: '12px',
              }}>
                {[
                  {val:'14',lbl:'Calls',c:'#1B2F6E'},
                  {val:'9',lbl:'Connected',c:'#3AAA35'},
                  {val:'3',lbl:'Follow-ups',c:'#2E9FD4'},
                  {val:'2',lbl:'New Leads',c:'#2E9FD4'},
                  {val:'1',lbl:'Converted',c:'#3AAA35'},
                  {val:'86%',lbl:'Productivity',c:'#3AAA35'},
                ].map((item, i) => (
                  <div key={i} style={{
                    background: '#F7F8FC', borderRadius: '8px',
                    padding: '10px', textAlign: 'center',
                  }}>
                    <div style={{fontSize: '18px', fontWeight: '800', color: item.c}}>
                      {item.val}
                    </div>
                    <div style={{fontSize: '10px', color: '#9AA5CC', marginTop: '2px'}}>
                      {item.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div style={{
              background: 'white', borderRadius: '12px',
              border: '0.5px solid #DDE2EF', overflow: 'hidden',
            }}>
              <div style={{
                padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  Team Performance
                </div>
                <button onClick={() => router.push('/admin/team')}
                  style={{fontSize: '12px', fontWeight: '600', color: '#2E9FD4',
                          background: 'none', border: 'none', cursor: 'pointer'}}>
                  Details →
                </button>
              </div>
              {team.map((member, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '10px 14px', borderBottom: '1px solid #DDE2EF',
                }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: '#1B2F6E', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                    color: 'white', flexShrink: 0,
                  }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{flex: 1, minWidth: 0}}>
                    <div style={{fontSize: '13px', fontWeight: '600', color: '#1A1A2E'}}>
                      {member.name}
                    </div>
                    <div style={{fontSize: '11px', color: '#9AA5CC'}}>
                      {member.calls} calls today
                    </div>
                    <div style={{height: '4px', background: '#DDE2EF',
                                 borderRadius: '2px', marginTop: '4px'}}>
                      <div style={{
                        height: '4px', borderRadius: '2px',
                        width: `${member.score}%`, background: member.color,
                      }}/>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '13px', fontWeight: '800',
                    color: member.color, minWidth: '36px', textAlign: 'right',
                  }}>
                    {member.score}%
                  </span>
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
        {bottomNav.map((item, i) => (
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
