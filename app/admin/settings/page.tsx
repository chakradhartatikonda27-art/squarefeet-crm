'use client';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function AdminSettings() {
  const router = useRouter();

  const users = [
    { name: 'Mohan R.', role: 'Super Admin', mobile: '98765 43210', status: 'Active', color: '#3AAA35' },
    { name: 'Arjun R.', role: 'Telecaller', mobile: '98765 12345', status: 'Active', color: '#3AAA35' },
    { name: 'Priya S.', role: 'CRM Executive', mobile: '97654 23456', status: 'Active', color: '#3AAA35' },
    { name: 'Kiran M.', role: 'Sales Exec', mobile: '96543 34567', status: 'Active', color: '#3AAA35' },
    { name: 'Rohit K.', role: 'Telecaller', mobile: '95432 45678', status: 'Inactive', color: '#E53935' },
  ];

  const integrations = [
    { name: 'Exotel', desc: 'Click-to-call & recordings', status: 'Not connected', color: '#E53935', icon: '📞' },
    { name: 'WhatsApp Business', desc: 'Message & brochure sending', status: 'Not connected', color: '#E53935', icon: '💬' },
    { name: 'Msg91 SMS', desc: 'OTP and notifications', status: 'Not connected', color: '#E53935', icon: '📱' },
    { name: 'Prisma Database', desc: 'Cloud PostgreSQL', status: 'Connected', color: '#3AAA35', icon: '🗄️' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>
      <div style={{display: 'flex', minHeight: '100dvh'}}>
        <div className="desktop-sidebar"><AdminSidebar active="settings" /></div>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>
          <div style={{padding: '12px 16px', background: 'white', borderBottom: '1px solid #DDE2EF'}}>
            <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>Settings</div>
            <div style={{fontSize: '11px', color: '#6B7AB5'}}>System configuration</div>
          </div>
          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* User Management */}
            <div style={{background: 'white', borderRadius: '12px', border: '0.5px solid #DDE2EF',
                         marginBottom: '12px', overflow: 'hidden'}}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                           display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  👥 User Management
                </div>
                <button style={{padding: '6px 12px', borderRadius: '8px', fontSize: '12px',
                                fontWeight: '700', color: 'white', background: '#1B2F6E',
                                border: 'none', cursor: 'pointer'}}>
                  + Add User
                </button>
              </div>
              {users.map((user, i) => (
                <div key={i} style={{display: 'flex', alignItems: 'center', gap: '12px',
                                     padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                                     background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
                  <div style={{width: '34px', height: '34px', borderRadius: '50%',
                               background: '#1B2F6E', display: 'flex', alignItems: 'center',
                               justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                               color: 'white', flexShrink: 0}}>
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{user.name}</div>
                    <div style={{fontSize: '11px', color: '#6B7AB5'}}>{user.role} · {user.mobile}</div>
                  </div>
                  <span style={{fontSize: '10px', fontWeight: '600', padding: '3px 8px',
                                borderRadius: '6px', flexShrink: 0,
                                background: user.status === 'Active' ? '#E8F5E8' : '#FFEBEE',
                                color: user.color}}>
                    {user.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Integrations */}
            <div style={{background: 'white', borderRadius: '12px', border: '0.5px solid #DDE2EF',
                         marginBottom: '12px', overflow: 'hidden'}}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  🔗 Integrations
                </div>
              </div>
              {integrations.map((item, i) => (
                <div key={i} style={{display: 'flex', alignItems: 'center', gap: '12px',
                                     padding: '14px', borderBottom: '1px solid #DDE2EF',
                                     background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
                  <span style={{fontSize: '24px', flexShrink: 0}}>{item.icon}</span>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{item.name}</div>
                    <div style={{fontSize: '11px', color: '#6B7AB5'}}>{item.desc}</div>
                  </div>
                  <span style={{fontSize: '10px', fontWeight: '600', padding: '3px 8px',
                                borderRadius: '6px', flexShrink: 0,
                                background: item.status === 'Connected' ? '#E8F5E8' : '#FFEBEE',
                                color: item.color}}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            {/* System Info */}
            <div style={{background: 'white', borderRadius: '12px', border: '0.5px solid #DDE2EF',
                         overflow: 'hidden'}}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  ⚙️ System Info
                </div>
              </div>
              {[
                {lbl: 'App version', val: 'v1.0.0'},
                {lbl: 'Framework', val: 'Next.js 16'},
                {lbl: 'Database', val: 'Prisma Postgres'},
                {lbl: 'Hosting', val: 'Vercel'},
                {lbl: 'Built by', val: 'SiyanTech Global'},
              ].map((item, i) => (
                <div key={i} style={{display: 'flex', justifyContent: 'space-between',
                                     padding: '10px 14px', borderBottom: '1px solid #DDE2EF',
                                     background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
                  <span style={{fontSize: '12px', color: '#6B7AB5'}}>{item.lbl}</span>
                  <span style={{fontSize: '12px', fontWeight: '700', color: '#1B2F6E'}}>{item.val}</span>
                </div>
              ))}
            </div>

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
