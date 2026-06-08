'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState('dashboard');

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

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/admin/dashboard' },
    { id: 'leads', label: 'Leads', path: '/admin/leads', badge: '142' },
    { id: 'calls', label: 'Calls', path: '/admin/calls' },
    { id: 'followups', label: 'Follow-ups', path: '/admin/followups', badge: '3', badgeRed: true },
    { id: 'team', label: 'Team & GPS', path: '/admin/team' },
    { id: 'reports', label: 'Reports', path: '/admin/reports' },
    { id: 'targets', label: 'Targets', path: '/admin/targets' },
    { id: 'company', label: 'Company', path: '/admin/company' },
    { id: 'settings', label: 'Settings', path: '/admin/settings' },
  ];

  const bottomNav = [
    { id: 'dashboard', label: 'Home', icon: '🏠', path: '/admin/dashboard' },
    { id: 'leads', label: 'Leads', icon: '👥', path: '/admin/leads' },
    { id: 'calls', label: 'Calls', icon: '📞', path: '/admin/calls' },
    { id: 'reports', label: 'Reports', icon: '📊', path: '/admin/reports' },
    { id: 'team', label: 'Team', icon: '👤', path: '/admin/team' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>

      {/* ── DESKTOP SIDEBAR (hidden on mobile) ── */}
      <div style={{display: 'flex', minHeight: '100dvh'}}>
        <div className="desktop-sidebar" style={{
          width: '210px', background: '#0E1A3D',
          display: 'flex', flexDirection: 'column', flexShrink: 0,
        }}>
          {/* Logo */}
          <div style={{padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.07)',
                       background: '#080F1E'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{width: '36px', height: '36px', borderRadius: '8px',
                           background: 'white', display: 'flex', alignItems: 'center',
                           justifyContent: 'center', flexShrink: 0}}>
                <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                  <rect x="3" y="22" width="9" height="15" rx="1.5" fill="#1B2F6E"/>
                  <rect x="15" y="14" width="9" height="23" rx="1.5" fill="#2E9FD4"/>
                  <rect x="27" y="5" width="10" height="32" rx="1.5" fill="#3AAA35"/>
                  <path d="M1 24L20 9L39 24" stroke="#1B2F6E" strokeWidth="2.5"
                        fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div style={{fontSize: '12px', fontWeight: '800', color: 'white'}}>
                  Square Feet
                </div>
                <div style={{fontSize: '11px', fontWeight: '600', color: '#3AAA35'}}>
                  India CRM
                </div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div style={{flex: 1, paddingTop: '8px', overflowY: 'auto'}}>
            <div style={{padding: '10px 16px 4px', fontSize: '10px', fontWeight: '700',
                         color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em'}}>
              MAIN
            </div>
            {navItems.slice(0, 4).map(item => (
              <button key={item.id}
                onClick={() => { setActiveNav(item.id); router.push(item.path); }}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', padding: '9px 16px',
                  fontSize: '12px', fontWeight: '500', border: 'none',
                  borderLeft: `2px solid ${activeNav === item.id ? '#3AAA35' : 'transparent'}`,
                  background: activeNav === item.id ? 'rgba(58,170,53,0.12)' : 'transparent',
                  color: activeNav === item.id ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer', textAlign: 'left',
                }}>
                <span>{item.label}</span>
                {item.badge && (
                  <span style={{
                    fontSize: '10px', fontWeight: '700', padding: '2px 6px',
                    borderRadius: '10px', color: 'white',
                    background: item.badgeRed ? '#E53935' : '#3AAA35',
                  }}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
            <div style={{padding: '10px 16px 4px', fontSize: '10px', fontWeight: '700',
                         color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em', marginTop: '8px'}}>
              MANAGE
            </div>
            {navItems.slice(4).map(item => (
              <button key={item.id}
                onClick={() => { setActiveNav(item.id); router.push(item.path); }}
                style={{
                  width: '100%', padding: '9px 16px', fontSize: '12px',
                  fontWeight: '500', border: 'none', textAlign: 'left',
                  borderLeft: `2px solid ${activeNav === item.id ? '#3AAA35' : 'transparent'}`,
                  background: activeNav === item.id ? 'rgba(58,170,53,0.12)' : 'transparent',
                  color: activeNav === item.id ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                }}>
                {item.label}
              </button>
            ))}
          </div>

          {/* User */}
          <div style={{padding: '12px', borderTop: '1px solid rgba(255,255,255,0.07)',
                       background: '#080F1E', display: 'flex', alignItems: 'center', gap: '8px'}}>
            <div style={{width: '30px', height: '30px', borderRadius: '50%',
                         background: '#3AAA35', display: 'flex', alignItems: 'center',
                         justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                         color: 'white', flexShrink: 0}}>
              MR
            </div>
            <div style={{flex: 1}}>
              <div style={{fontSize: '12px', fontWeight: '700', color: 'white'}}>Mohan R.</div>
              <div style={{fontSize: '10px', color: '#3AAA35'}}>Super Admin</div>
            </div>
            <button onClick={() => router.push('/')}
              style={{fontSize: '11px', color: 'rgba(255,255,255,0.3)',
                      background: 'none', border: 'none', cursor: 'pointer'}}>
              Exit
            </button>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>

          {/* Top Bar */}
          <div style={{padding: '12px 16px', background: 'white',
                       borderBottom: '1px solid #DDE2EF',
                       display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>
                Good morning, Mohan
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                Tuesday, 9 June 2026 · Visakhapatnam
              </div>
            </div>
            <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
              <button style={{padding: '7px 12px', borderRadius: '8px', fontSize: '12px',
                              fontWeight: '600', border: '1px solid #DDE2EF',
                              background: 'white', color: '#1B2F6E', cursor: 'pointer'}}>
                🔔 3
              </button>
              <button onClick={() => router.push('/admin/leads')}
                style={{padding: '7px 14px', borderRadius: '8px', fontSize: '12px',
                        fontWeight: '700', color: 'white', background: '#1B2F6E',
                        border: 'none', cursor: 'pointer'}}>
                + Add Lead
              </button>
            </div>
          </div>

          {/* Content */}
          <div style={{flex: 1, padding: '14px', overflowY: 'auto'}}>

            {/* Stats Grid */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                         gap: '10px', marginBottom: '14px'}}>
              {stats.map((stat, i) => (
                <div key={i} style={{background: 'white', borderRadius: '12px',
                                     padding: '14px', border: '0.5px solid #DDE2EF',
                                     position: 'relative', overflow: 'hidden'}}>
                  <div style={{position: 'absolute', top: 0, left: 0, right: 0,
                               height: '3px', background: stat.accent}}/>
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
            <div style={{background: 'white', borderRadius: '12px',
                         border: '0.5px solid #DDE2EF', marginBottom: '12px',
                         overflow: 'hidden'}}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                           display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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
            <div style={{background: 'white', borderRadius: '12px',
                         border: '0.5px solid #DDE2EF', marginBottom: '12px',
                         overflow: 'hidden'}}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                           display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                    Last Hourly Report
                  </div>
                  <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                    Auto-generated at 3:00 PM
                  </div>
                </div>
                <div style={{display: 'flex', gap: '6px'}}>
                  <button style={{padding: '5px 10px', borderRadius: '6px', fontSize: '11px',
                                  fontWeight: '600', border: '1px solid #DDE2EF',
                                  background: 'white', color: '#1B2F6E', cursor: 'pointer'}}>
                    Excel
                  </button>
                  <button style={{padding: '5px 10px', borderRadius: '6px', fontSize: '11px',
                                  fontWeight: '700', color: 'white', background: '#1B2F6E',
                                  border: 'none', cursor: 'pointer'}}>
                    PDF
                  </button>
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                           gap: '8px', padding: '12px'}}>
                {[
                  {val:'14',lbl:'Calls',c:'#1B2F6E'},
                  {val:'9',lbl:'Connected',c:'#3AAA35'},
                  {val:'3',lbl:'Follow-ups',c:'#2E9FD4'},
                  {val:'2',lbl:'New Leads',c:'#2E9FD4'},
                  {val:'1',lbl:'Converted',c:'#3AAA35'},
                  {val:'86%',lbl:'Productivity',c:'#3AAA35'},
                ].map((item, i) => (
                  <div key={i} style={{background: '#F7F8FC', borderRadius: '8px',
                                       padding: '10px', textAlign: 'center'}}>
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

            {/* Team Performance */}
            <div style={{background: 'white', borderRadius: '12px',
                         border: '0.5px solid #DDE2EF', marginBottom: '70px',
                         overflow: 'hidden'}}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                           display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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
                      <div style={{height: '4px', borderRadius: '2px',
                                   width: `${member.score}%`, background: member.color}}/>
                    </div>
                  </div>
                  <span style={{fontSize: '13px', fontWeight: '800',
                                color: member.color, minWidth: '36px', textAlign: 'right'}}>
                    {member.score}%
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE BOTTOM NAV ── */}
      <div className="mobile-bottom-nav" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
        background: 'white', borderTop: '1px solid #DDE2EF',
        zIndex: 100,
      }}>
        {bottomNav.map((item) => (
          <button key={item.id}
            onClick={() => { setActiveNav(item.id); router.push(item.path); }}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '10px 4px', gap: '3px', fontSize: '10px', fontWeight: '600',
              color: activeNav === item.id ? '#1B2F6E' : '#9AA5CC',
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
