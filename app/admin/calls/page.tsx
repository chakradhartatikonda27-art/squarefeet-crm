'use client';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function AdminCalls() {
  const router = useRouter();

  const calls = [
    { name: 'Ravi Kumar', agent: 'Arjun R.', duration: '6m 14s', status: 'Interested', time: '10:24 AM', sbg: '#E8F5E8', sfg: '#2D8529' },
    { name: 'Venkat Rao', agent: 'Arjun R.', duration: '12m 05s', status: 'Site Visit', time: '11:15 AM', sbg: '#FFF3E0', sfg: '#E65100' },
    { name: 'Sunita Prasad', agent: 'Priya S.', duration: '0m 32s', status: 'Call Back', time: '10:41 AM', sbg: '#E3F4FB', sfg: '#1565C0' },
    { name: 'Anil Kumar', agent: 'Arjun R.', duration: '3m 44s', status: 'Converted', time: '12:10 PM', sbg: '#E8F5E8', sfg: '#2D8529' },
    { name: 'Lakshmi Devi', agent: 'Kiran M.', duration: '0m 10s', status: 'Busy', time: '11:52 AM', sbg: '#FFF3E0', sfg: '#E65100' },
    { name: 'Naresh Reddy', agent: 'Priya S.', duration: '4m 22s', status: 'Interested', time: '1:05 PM', sbg: '#E8F5E8', sfg: '#2D8529' },
    { name: 'Meena Sharma', agent: 'Kiran M.', duration: '1m 18s', status: 'Not Picked', time: '2:30 PM', sbg: '#FFEBEE', sfg: '#B71C1C' },
    { name: 'Durga Prasad', agent: 'Arjun R.', duration: '8m 45s', status: 'Negotiation', time: '3:15 PM', sbg: '#F3E5F5', sfg: '#6A1B9A' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>
      <div style={{display: 'flex', minHeight: '100dvh'}}>

        <div className="desktop-sidebar">
          <AdminSidebar active="calls" />
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
                Call Recordings
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                67 calls today · All recorded
              </div>
            </div>
            <select style={{
              padding: '7px 10px', borderRadius: '8px', fontSize: '12px',
              border: '1px solid #DDE2EF', color: '#1B2F6E',
              background: 'white', fontWeight: '600', outline: 'none',
            }}>
              <option>All agents</option>
              <option>Arjun R.</option>
              <option>Priya S.</option>
              <option>Kiran M.</option>
            </select>
          </div>

          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px', marginBottom: '14px',
            }}>
              {[
                { val: '67', lbl: 'Total Calls', color: '#1B2F6E' },
                { val: '44', lbl: 'Connected', color: '#3AAA35' },
                { val: '4m 32s', lbl: 'Avg Duration', color: '#2E9FD4' },
                { val: '100%', lbl: 'Recorded', color: '#C9A84C' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'white', borderRadius: '12px', padding: '14px',
                  border: '0.5px solid #DDE2EF', position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: '3px', background: s.color,
                  }}/>
                  <div style={{fontSize: '22px', fontWeight: '800',
                               color: s.color, marginTop: '4px'}}>
                    {s.val}
                  </div>
                  <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '2px'}}>
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>

            {/* Recordings List */}
            <div style={{
              background: 'white', borderRadius: '12px',
              border: '0.5px solid #DDE2EF', overflow: 'hidden',
            }}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  Today's Recordings
                </div>
                <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                  Tap play to listen
                </div>
              </div>

              {calls.map((call, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                  background: i % 2 === 0 ? '#F7F8FC' : 'white',
                }}>
                  {/* Play Button */}
                  <button style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: '#1B2F6E', border: 'none', color: 'white',
                    fontSize: '14px', cursor: 'pointer', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    ▶
                  </button>

                  <div style={{flex: 1, minWidth: 0}}>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                      {call.name}
                    </div>
                    <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '1px'}}>
                      {call.agent} · {call.duration} · {call.time}
                    </div>
                  </div>

                  <span style={{
                    fontSize: '10px', fontWeight: '600', padding: '3px 8px',
                    borderRadius: '6px', background: call.sbg, color: call.sfg,
                    flexShrink: 0,
                  }}>
                    {call.status}
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
        {[
          {icon: '🏠', label: 'Home', path: '/admin/dashboard'},
          {icon: '👥', label: 'Leads', path: '/admin/leads'},
          {icon: '📞', label: 'Calls', path: '/admin/calls', active: true},
          {icon: '📊', label: 'Reports', path: '/admin/reports'},
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
