'use client';
import { useRouter } from 'next/navigation';

export default function AdminSidebar({ active }: { active: string }) {
  const router = useRouter();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠', path: '/admin/dashboard' },
    { id: 'leads', label: 'Leads', icon: '👥', path: '/admin/leads', badge: '142' },
    { id: 'calls', label: 'Calls', icon: '📞', path: '/admin/calls' },
    { id: 'followups', label: 'Follow-ups', icon: '📅', path: '/admin/followups', badge: '3', badgeRed: true },
    { id: 'inventory', label: 'Inventory', icon: '🏗️', path: '/admin/inventory' },
    { id: 'team', label: 'Team & GPS', icon: '📍', path: '/admin/team' },
    { id: 'reports', label: 'Reports', icon: '📊', path: '/admin/reports' },
    { id: 'targets', label: 'Targets', icon: '🎯', path: '/admin/targets' },
    { id: 'company', label: 'Company', icon: '🏢', path: '/admin/company' },
    { id: 'settings', label: 'Settings', icon: '⚙️', path: '/admin/settings' },
  ];

  return (
    <div style={{width: '210px', background: '#0E1A3D', display: 'flex',
                 flexDirection: 'column', flexShrink: 0, minHeight: '100dvh'}}>
      {/* Logo */}
      <div style={{padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.07)',
                   background: '#080F1E'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <div style={{width: '38px', height: '38px', borderRadius: '10px', background: 'white',
                       display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
              <rect x="3" y="22" width="9" height="15" rx="1.5" fill="#1B2F6E"/>
              <rect x="15" y="14" width="9" height="23" rx="1.5" fill="#2E9FD4"/>
              <rect x="27" y="5" width="10" height="32" rx="1.5" fill="#3AAA35"/>
              <path d="M1 24L20 9L39 24" stroke="#1B2F6E" strokeWidth="2.5"
                    fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div style={{fontSize: '13px', fontWeight: '800', color: 'white', lineHeight: 1.2}}>
              Square Feet
            </div>
            <div style={{fontSize: '11px', fontWeight: '600', color: '#3AAA35', marginTop: '2px'}}>
              India CRM
            </div>
            <div style={{fontSize: '9px', color: 'rgba(255,255,255,0.3)', marginTop: '1px'}}>
              Developing India
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{flex: 1, overflowY: 'auto', padding: '8px 0'}}>
        <div style={{padding: '10px 16px 4px', fontSize: '9px', fontWeight: '700',
                     color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em'}}>MAIN</div>
        {navItems.slice(0, 4).map(item => (
          <button key={item.id} onClick={() => router.push(item.path)}
            style={{width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', padding: '10px 16px',
                    fontSize: '13px', fontWeight: active === item.id ? '700' : '500',
                    border: 'none', cursor: 'pointer', textAlign: 'left',
                    borderLeft: `3px solid ${active === item.id ? '#3AAA35' : 'transparent'}`,
                    background: active === item.id ? 'rgba(58,170,53,0.12)' : 'transparent',
                    color: active === item.id ? 'white' : 'rgba(255,255,255,0.55)'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <span style={{fontSize: '16px'}}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
            {item.badge && (
              <span style={{fontSize: '10px', fontWeight: '700', padding: '2px 7px',
                            borderRadius: '10px', color: 'white',
                            background: item.badgeRed ? '#E53935' : '#3AAA35'}}>
                {item.badge}
              </span>
            )}
          </button>
        ))}

        <div style={{padding: '10px 16px 4px', marginTop: '8px', fontSize: '9px', fontWeight: '700',
                     color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em'}}>MANAGE</div>
        {navItems.slice(4).map(item => (
          <button key={item.id} onClick={() => router.push(item.path)}
            style={{width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 16px', fontSize: '13px',
                    fontWeight: active === item.id ? '700' : '500',
                    border: 'none', cursor: 'pointer', textAlign: 'left',
                    borderLeft: `3px solid ${active === item.id ? '#3AAA35' : 'transparent'}`,
                    background: active === item.id ? 'rgba(58,170,53,0.12)' : 'transparent',
                    color: active === item.id ? 'white' : 'rgba(255,255,255,0.55)'}}>
            <span style={{fontSize: '16px'}}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* User */}
      <div style={{padding: '12px 14px', borderTop: '1px solid rgba(255,255,255,0.07)',
                   background: '#080F1E', display: 'flex', alignItems: 'center', gap: '10px'}}>
        <div style={{width: '32px', height: '32px', borderRadius: '50%', background: '#3AAA35',
                     display: 'flex', alignItems: 'center', justifyContent: 'center',
                     fontSize: '12px', fontWeight: '700', color: 'white', flexShrink: 0}}>MR</div>
        <div style={{flex: 1, minWidth: 0}}>
          <div style={{fontSize: '12px', fontWeight: '700', color: 'white'}}>Mohan R.</div>
          <div style={{fontSize: '10px', color: '#3AAA35'}}>Super Admin</div>
        </div>
        <button onClick={() => router.push('/')}
          style={{fontSize: '11px', color: 'rgba(255,255,255,0.3)',
                  background: 'none', border: 'none', cursor: 'pointer'}}>Exit</button>
      </div>
    </div>
  );
}
