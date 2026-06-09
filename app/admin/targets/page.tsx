'use client';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function AdminTargets() {
  const router = useRouter();

  const targets = [
    { name: 'Arjun R.', role: 'Telecaller', callsTarget: 300, callsDone: 290, convertTarget: 3, convertDone: 2, color: '#F57C00' },
    { name: 'Priya S.', role: 'CRM Executive', callsTarget: 300, callsDone: 310, convertTarget: 3, convertDone: 3, color: '#3AAA35' },
    { name: 'Kiran M.', role: 'Sales Exec', callsTarget: 250, callsDone: 190, convertTarget: 2, convertDone: 1, color: '#E53935' },
    { name: 'Rohit K.', role: 'Telecaller', callsTarget: 300, callsDone: 140, convertTarget: 3, convertDone: 0, color: '#E53935' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>
      <div style={{display: 'flex', minHeight: '100dvh'}}>
        <div className="desktop-sidebar"><AdminSidebar active="targets" /></div>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>
          <div style={{padding: '12px 16px', background: 'white', borderBottom: '1px solid #DDE2EF',
                       display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>Targets</div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>June 2026 — Monthly targets</div>
            </div>
            <button style={{padding: '7px 14px', borderRadius: '8px', fontSize: '12px',
                            fontWeight: '700', color: 'white', background: '#1B2F6E',
                            border: 'none', cursor: 'pointer'}}>
              Set Targets
            </button>
          </div>
          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* Monthly Overview */}
            <div style={{background: '#0E1A3D', borderRadius: '14px', padding: '16px',
                         marginBottom: '14px'}}>
              <div style={{fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.6)',
                           marginBottom: '12px'}}>
                June 2026 — Team Overview
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
                {[
                  {val: '930', lbl: 'Total Calls', sub: 'Target: 1150', color: '#2E9FD4'},
                  {val: '6', lbl: 'Conversions', sub: 'Target: 11', color: '#3AAA35'},
                  {val: '₹3.8Cr', lbl: 'Pipeline', sub: 'Target: ₹5Cr', color: '#C9A84C'},
                ].map((s, i) => (
                  <div key={i} style={{background: 'rgba(255,255,255,0.07)', borderRadius: '10px',
                                       padding: '12px', textAlign: 'center'}}>
                    <div style={{fontSize: '20px', fontWeight: '800', color: s.color}}>{s.val}</div>
                    <div style={{fontSize: '10px', color: 'rgba(255,255,255,0.6)', marginTop: '2px'}}>{s.lbl}</div>
                    <div style={{fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginTop: '2px'}}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Targets */}
            {targets.map((emp, i) => (
              <div key={i} style={{background: 'white', borderRadius: '12px', padding: '14px',
                                   marginBottom: '10px', border: '0.5px solid #DDE2EF'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
                  <div style={{width: '38px', height: '38px', borderRadius: '50%',
                               background: '#1B2F6E', display: 'flex', alignItems: 'center',
                               justifyContent: 'center', fontSize: '12px', fontWeight: '700',
                               color: 'white', flexShrink: 0}}>
                    {emp.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: '14px', fontWeight: '700', color: '#1B2F6E'}}>{emp.name}</div>
                    <div style={{fontSize: '11px', color: '#9AA5CC'}}>{emp.role}</div>
                  </div>
                  <span style={{fontSize: '12px', fontWeight: '800', color: emp.color}}>
                    {Math.round((emp.callsDone/emp.callsTarget)*100)}%
                  </span>
                </div>

                {/* Calls Progress */}
                <div style={{marginBottom: '10px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '4px'}}>
                    <span style={{fontSize: '11px', fontWeight: '600', color: '#6B7AB5'}}>Calls</span>
                    <span style={{fontSize: '11px', fontWeight: '700', color: '#1B2F6E'}}>
                      {emp.callsDone} / {emp.callsTarget}
                    </span>
                  </div>
                  <div style={{height: '8px', background: '#F0F2F8', borderRadius: '4px', overflow: 'hidden'}}>
                    <div style={{height: '100%', borderRadius: '4px', background: emp.color,
                                 width: `${Math.min((emp.callsDone/emp.callsTarget)*100, 100)}%`}}/>
                  </div>
                </div>

                {/* Conversions Progress */}
                <div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '4px'}}>
                    <span style={{fontSize: '11px', fontWeight: '600', color: '#6B7AB5'}}>Conversions</span>
                    <span style={{fontSize: '11px', fontWeight: '700', color: '#1B2F6E'}}>
                      {emp.convertDone} / {emp.convertTarget}
                    </span>
                  </div>
                  <div style={{height: '8px', background: '#F0F2F8', borderRadius: '4px', overflow: 'hidden'}}>
                    <div style={{height: '100%', borderRadius: '4px',
                                 background: emp.convertDone >= emp.convertTarget ? '#3AAA35' : emp.color,
                                 width: `${Math.min((emp.convertDone/emp.convertTarget)*100, 100)}%`}}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mobile-bottom-nav" style={{position: 'fixed', bottom: 0, left: 0, right: 0,
           display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
           background: 'white', borderTop: '1px solid #DDE2EF', zIndex: 100}}>
        {[
          {icon: '🏠', label: 'Home', path: '/admin/dashboard'},
          {icon: '👥', label: 'Leads', path: '/admin/leads'},
          {icon: '📞', label: 'Calls', path: '/admin/calls'},
          {icon: '📊', label: 'Reports', path: '/admin/reports'},
          {icon: '👤', label: 'Team', path: '/admin/team'},
        ].map((item, i) => (
          <button key={i} onClick={() => router.push(item.path)}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '10px 4px', gap: '3px', fontSize: '10px', fontWeight: '600',
                    color: '#9AA5CC', background: 'none', border: 'none', cursor: 'pointer'}}>
            <span style={{fontSize: '20px'}}>{item.icon}</span>{item.label}
          </button>
        ))}
      </div>
      <style>{`
        @media (min-width: 768px) { .mobile-bottom-nav { display: none !important; } .desktop-sidebar { display: flex !important; } }
        @media (max-width: 767px) { .desktop-sidebar { display: none !important; } .mobile-bottom-nav { display: grid !important; } }
      `}</style>
    </div>
  );
}
