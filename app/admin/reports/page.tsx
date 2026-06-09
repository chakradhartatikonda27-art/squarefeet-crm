'use client';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function AdminReports() {
  const router = useRouter();

  const hourlyReports = [
    { time: '3:00 PM', calls: 14, connected: 9, followups: 3, newLeads: 2, converted: 1, productivity: 86 },
    { time: '2:00 PM', calls: 11, connected: 7, followups: 2, newLeads: 1, converted: 0, productivity: 72 },
    { time: '1:00 PM', calls: 13, connected: 10, followups: 4, newLeads: 3, converted: 1, productivity: 91 },
    { time: '12:00 PM', calls: 9, connected: 6, followups: 2, newLeads: 1, converted: 0, productivity: 68 },
    { time: '11:00 AM', calls: 12, connected: 8, followups: 3, newLeads: 2, converted: 0, productivity: 78 },
    { time: '10:00 AM', calls: 8, connected: 5, followups: 1, newLeads: 2, converted: 0, productivity: 65 },
  ];

  const sources = [
    { name: 'Facebook Ads', count: 48, pct: 34, color: '#1B2F6E' },
    { name: 'Google Ads', count: 35, pct: 25, color: '#2E9FD4' },
    { name: 'Referral', count: 28, pct: 20, color: '#3AAA35' },
    { name: '99acres', count: 18, pct: 13, color: '#C9A84C' },
    { name: 'Walk-in', count: 13, pct: 8, color: '#9AA5CC' },
  ];

  const employees = [
    { name: 'Priya S.', calls: 310, converted: 3, score: 94, rank: 1 },
    { name: 'Arjun R.', calls: 290, converted: 2, score: 88, rank: 2 },
    { name: 'Kiran M.', calls: 190, converted: 1, score: 61, rank: 3 },
    { name: 'Rohit K.', calls: 140, converted: 0, score: 42, rank: 4 },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>
      <div style={{display: 'flex', minHeight: '100dvh'}}>

        <div className="desktop-sidebar">
          <AdminSidebar active="reports" />
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
                Reports & Analytics
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                Auto-generated every hour
              </div>
            </div>
            <div style={{display: 'flex', gap: '8px'}}>
              <select style={{
                padding: '7px 10px', borderRadius: '8px', fontSize: '12px',
                border: '1px solid #DDE2EF', color: '#1B2F6E',
                background: 'white', fontWeight: '600', outline: 'none',
              }}>
                <option>This month</option>
                <option>This week</option>
                <option>Today</option>
              </select>
              <button style={{
                padding: '7px 12px', borderRadius: '8px', fontSize: '12px',
                fontWeight: '600', border: '1px solid #DDE2EF',
                background: 'white', color: '#1B2F6E', cursor: 'pointer',
              }}>
                📥 Excel
              </button>
              <button style={{
                padding: '7px 12px', borderRadius: '8px', fontSize: '12px',
                fontWeight: '700', color: 'white', background: '#1B2F6E',
                border: 'none', cursor: 'pointer',
              }}>
                📄 PDF
              </button>
            </div>
          </div>

          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* KPI Cards */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px', marginBottom: '14px',
            }}>
              {[
                { val: '142', lbl: 'Total Leads', trend: '+18 vs last month', color: '#1B2F6E' },
                { val: '4.9%', lbl: 'Conversion Rate', trend: '+1.2% improved', color: '#3AAA35' },
                { val: '38', lbl: 'Avg Calls / Day', trend: 'Per team member', color: '#2E9FD4' },
                { val: '₹3.8Cr', lbl: 'Pipeline Value', trend: 'This month', color: '#C9A84C' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'white', borderRadius: '12px', padding: '14px',
                  border: '0.5px solid #DDE2EF', position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: '3px', background: item.color,
                  }}/>
                  <div style={{fontSize: '22px', fontWeight: '800',
                               color: item.color, marginTop: '4px'}}>
                    {item.val}
                  </div>
                  <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '2px'}}>
                    {item.lbl}
                  </div>
                  <div style={{fontSize: '11px', fontWeight: '600',
                               color: '#3AAA35', marginTop: '2px'}}>
                    {item.trend}
                  </div>
                </div>
              ))}
            </div>

            {/* Lead Source Analysis */}
            <div style={{
              background: 'white', borderRadius: '12px',
              border: '0.5px solid #DDE2EF', marginBottom: '12px', overflow: 'hidden',
            }}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  Lead Source Analysis
                </div>
                <div style={{fontSize: '11px', color: '#6B7AB5'}}>Where leads come from</div>
              </div>
              <div style={{padding: '12px 14px'}}>
                {sources.map((s, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    marginBottom: i < sources.length - 1 ? '10px' : 0,
                  }}>
                    <div style={{width: '80px', fontSize: '12px',
                                 fontWeight: '600', color: '#1B2F6E', flexShrink: 0}}>
                      {s.name}
                    </div>
                    <div style={{
                      flex: 1, height: '8px', background: '#F0F2F8',
                      borderRadius: '4px', overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%', borderRadius: '4px',
                        width: `${s.pct}%`, background: s.color,
                      }}/>
                    </div>
                    <div style={{fontSize: '12px', fontWeight: '700',
                                 color: s.color, minWidth: '36px', textAlign: 'right'}}>
                      {s.pct}%
                    </div>
                    <div style={{fontSize: '11px', color: '#9AA5CC',
                                 minWidth: '30px', textAlign: 'right'}}>
                      {s.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Employee Ranking */}
            <div style={{
              background: 'white', borderRadius: '12px',
              border: '0.5px solid #DDE2EF', marginBottom: '12px', overflow: 'hidden',
            }}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  Employee Ranking
                </div>
                <div style={{fontSize: '11px', color: '#6B7AB5'}}>This month</div>
              </div>
              {employees.map((emp, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                  background: i % 2 === 0 ? '#F7F8FC' : 'white',
                }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: '800', flexShrink: 0,
                    background: emp.rank === 1 ? '#FDF6E3' : emp.rank === 2 ? '#F5F5F5' : '#FFF3E0',
                    color: emp.rank === 1 ? '#C9A84C' : emp.rank === 2 ? '#9AA5CC' : '#F57C00',
                  }}>
                    {emp.rank}
                  </div>
                  <div style={{
                    width: '34px', height: '34px', borderRadius: '50%',
                    background: '#1B2F6E', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                    color: 'white', flexShrink: 0,
                  }}>
                    {emp.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{flex: 1, minWidth: 0}}>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                      {emp.name}
                    </div>
                    <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                      {emp.calls} calls · {emp.converted} conversions
                    </div>
                  </div>
                  <div style={{
                    fontSize: '16px', fontWeight: '800', flexShrink: 0,
                    color: emp.rank === 1 ? '#C9A84C' : emp.rank === 2 ? '#1B2F6E' : '#6B7AB5',
                  }}>
                    {emp.score}pts
                  </div>
                </div>
              ))}
            </div>

            {/* Hourly Reports Archive */}
            <div style={{
              background: 'white', borderRadius: '12px',
              border: '0.5px solid #DDE2EF', overflow: 'hidden',
            }}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  Hourly Reports — Today
                </div>
                <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                  Auto-generated every hour
                </div>
              </div>
              {hourlyReports.map((r, i) => (
                <div key={i} style={{
                  padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                  background: i % 2 === 0 ? '#F7F8FC' : 'white',
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', marginBottom: '8px',
                  }}>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                      {r.time} {i === 0 && (
                        <span style={{
                          fontSize: '10px', fontWeight: '600', padding: '2px 7px',
                          borderRadius: '6px', background: '#E8F5E8', color: '#2D8529',
                          marginLeft: '6px',
                        }}>
                          Latest
                        </span>
                      )}
                    </div>
                    <div style={{display: 'flex', gap: '6px'}}>
                      <button style={{
                        padding: '4px 10px', borderRadius: '6px', fontSize: '11px',
                        fontWeight: '600', border: '1px solid #DDE2EF',
                        background: 'white', color: '#1B2F6E', cursor: 'pointer',
                      }}>Excel</button>
                      <button style={{
                        padding: '4px 10px', borderRadius: '6px', fontSize: '11px',
                        fontWeight: '600', color: 'white', background: '#1B2F6E',
                        border: 'none', cursor: 'pointer',
                      }}>PDF</button>
                    </div>
                  </div>
                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px',
                  }}>
                    {[
                      {val: r.calls, lbl: 'Calls', c: '#1B2F6E'},
                      {val: r.connected, lbl: 'Connected', c: '#3AAA35'},
                      {val: `${r.productivity}%`, lbl: 'Productivity',
                       c: r.productivity >= 80 ? '#3AAA35' : r.productivity >= 60 ? '#F57C00' : '#E53935'},
                    ].map((item, j) => (
                      <div key={j} style={{
                        background: 'white', borderRadius: '8px',
                        padding: '8px', textAlign: 'center',
                        border: '0.5px solid #DDE2EF',
                      }}>
                        <div style={{fontSize: '16px', fontWeight: '800', color: item.c}}>
                          {item.val}
                        </div>
                        <div style={{fontSize: '10px', color: '#9AA5CC', marginTop: '2px'}}>
                          {item.lbl}
                        </div>
                      </div>
                    ))}
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
          {icon: '📊', label: 'Reports', path: '/admin/reports', active: true},
          {icon: '👤', label: 'Team', path: '/admin/team'},
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
