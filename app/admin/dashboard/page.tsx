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
    { label: 'Overdue Alerts', value: '3', trend: 'Needs attention', color: '#E53935', accent: '#E53935' },
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

  return (
    <div className="flex min-h-screen" style={{background: '#F0F2F8'}}>

      {/* Sidebar */}
      <div className="w-52 flex flex-col flex-shrink-0" style={{background: '#0E1A3D'}}>

        {/* Logo */}
        <div className="p-4 border-b" style={{borderColor: 'rgba(255,255,255,0.07)', background: '#080F1E'}}>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{background: 'white'}}>
              <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                <rect x="3" y="22" width="9" height="15" rx="1.5" fill="#1B2F6E"/>
                <rect x="15" y="14" width="9" height="23" rx="1.5" fill="#2E9FD4"/>
                <rect x="27" y="5" width="10" height="32" rx="1.5" fill="#3AAA35"/>
                <path d="M1 24L20 9L39 24" stroke="#1B2F6E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-white">Square Feet</div>
              <div className="text-xs font-semibold" style={{color: '#3AAA35'}}>India CRM</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex-1 py-2 overflow-y-auto">
          <div className="px-4 py-2 text-xs font-bold" style={{color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em'}}>
            MAIN
          </div>
          {navItems.slice(0, 4).map(item => (
            <button key={item.id}
              onClick={() => { setActiveNav(item.id); router.push(item.path); }}
              className="w-full flex items-center justify-between px-4 py-2 text-xs font-medium border-l-2 transition-all"
              style={{
                background: activeNav === item.id ? 'rgba(58,170,53,0.12)' : 'transparent',
                color: activeNav === item.id ? 'white' : 'rgba(255,255,255,0.5)',
                borderLeftColor: activeNav === item.id ? '#3AAA35' : 'transparent',
              }}>
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{background: item.badgeRed ? '#E53935' : '#3AAA35', color: 'white'}}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}

          <div className="px-4 py-2 mt-2 text-xs font-bold" style={{color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em'}}>
            MANAGE
          </div>
          {navItems.slice(4).map(item => (
            <button key={item.id}
              onClick={() => { setActiveNav(item.id); router.push(item.path); }}
              className="w-full flex items-center px-4 py-2 text-xs font-medium border-l-2 transition-all"
              style={{
                background: activeNav === item.id ? 'rgba(58,170,53,0.12)' : 'transparent',
                color: activeNav === item.id ? 'white' : 'rgba(255,255,255,0.5)',
                borderLeftColor: activeNav === item.id ? '#3AAA35' : 'transparent',
              }}>
              {item.label}
            </button>
          ))}
        </div>

        {/* User */}
        <div className="p-3 border-t flex items-center gap-2"
             style={{borderColor: 'rgba(255,255,255,0.07)', background: '#080F1E'}}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
               style={{background: '#3AAA35'}}>
            MR
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white">Mohan R.</div>
            <div className="text-xs" style={{color: '#3AAA35'}}>Super Admin</div>
          </div>
          <button onClick={() => router.push('/')}
            className="text-xs" style={{color: 'rgba(255,255,255,0.3)'}}>
            Exit
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top Bar */}
        <div className="px-6 py-3 flex items-center justify-between border-b"
             style={{background: 'white', borderColor: '#DDE2EF'}}>
          <div>
            <h1 className="text-base font-bold" style={{color: '#1B2F6E'}}>
              Good morning, Mohan
            </h1>
            <p className="text-xs" style={{color: '#6B7AB5'}}>
              Tuesday, 9 June 2026 · Visakhapatnam
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg text-xs font-semibold border"
              style={{borderColor: '#DDE2EF', color: '#1B2F6E'}}>
              🔔 3
            </button>
            <button onClick={() => router.push('/admin/leads')}
              className="px-4 py-1.5 rounded-lg text-xs font-bold text-white"
              style={{background: '#1B2F6E'}}>
              + Add Lead
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-4 relative overflow-hidden"
                   style={{border: '0.5px solid #DDE2EF'}}>
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                     style={{background: stat.accent}}/>
                <div className="text-2xl font-extrabold mt-1" style={{color: stat.color}}>
                  {stat.value}
                </div>
                <div className="text-xs font-medium mt-1" style={{color: '#6B7AB5'}}>
                  {stat.label}
                </div>
                <div className="text-xs font-semibold mt-1" style={{color: stat.color}}>
                  {stat.trend}
                </div>
              </div>
            ))}
          </div>

          {/* Two Column */}
          <div className="grid grid-cols-5 gap-4">

            {/* Left — Recent Leads + Hourly Report */}
            <div className="col-span-3 flex flex-col gap-4">
              <div className="bg-white rounded-xl overflow-hidden"
                   style={{border: '0.5px solid #DDE2EF'}}>
                <div className="px-4 py-3 flex items-center justify-between border-b"
                     style={{borderColor: '#DDE2EF'}}>
                  <div>
                    <div className="text-sm font-bold" style={{color: '#1B2F6E'}}>Recent Leads</div>
                    <div className="text-xs" style={{color: '#6B7AB5'}}>Last 24 hours</div>
                  </div>
                  <button onClick={() => router.push('/admin/leads')}
                    className="text-xs font-semibold" style={{color: '#2E9FD4'}}>
                    View all →
                  </button>
                </div>
                {recentLeads.map((lead, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b last:border-0"
                       style={{borderColor: '#DDE2EF', background: i%2===0 ? '#F7F8FC' : 'white'}}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                         style={{background: '#1B2F6E'}}>
                      {lead.name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold" style={{color: '#1A1A2E'}}>
                        {lead.name}
                      </div>
                      <div className="text-xs" style={{color: '#6B7AB5'}}>
                        {lead.area} · {lead.budget}
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-md"
                      style={{background: lead.sbg, color: lead.sfg}}>
                      {lead.status}
                    </span>
                    <button onClick={() => router.push('/admin/calls')}
                      className="text-xs font-semibold px-3 py-1 rounded-lg"
                      style={{background: '#E8F5E8', color: '#2D8529', border: '1px solid #3AAA35'}}>
                      Call
                    </button>
                  </div>
                ))}
              </div>

              {/* Hourly Report */}
              <div className="bg-white rounded-xl overflow-hidden"
                   style={{border: '0.5px solid #DDE2EF'}}>
                <div className="px-4 py-3 flex items-center justify-between border-b"
                     style={{borderColor: '#DDE2EF'}}>
                  <div>
                    <div className="text-sm font-bold" style={{color: '#1B2F6E'}}>
                      Last Hourly Report
                    </div>
                    <div className="text-xs" style={{color: '#6B7AB5'}}>
                      Auto-generated at 3:00 PM
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-xs font-semibold px-3 py-1 rounded-lg border"
                      style={{borderColor: '#DDE2EF', color: '#1B2F6E'}}>
                      Excel
                    </button>
                    <button className="text-xs font-semibold px-3 py-1 rounded-lg text-white"
                      style={{background: '#1B2F6E'}}>
                      PDF
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-2 p-4">
                  {[
                    {val:'14',lbl:'Calls',c:'#1B2F6E'},
                    {val:'9',lbl:'Connected',c:'#3AAA35'},
                    {val:'3',lbl:'Follow-ups',c:'#2E9FD4'},
                    {val:'2',lbl:'New Leads',c:'#2E9FD4'},
                    {val:'1',lbl:'Converted',c:'#3AAA35'},
                    {val:'86%',lbl:'Productivity',c:'#3AAA35'},
                  ].map((item,i) => (
                    <div key={i} className="rounded-lg p-2 text-center"
                         style={{background: '#F7F8FC'}}>
                      <div className="text-base font-extrabold" style={{color: item.c}}>
                        {item.val}
                      </div>
                      <div className="text-xs mt-0.5" style={{color: '#9AA5CC'}}>
                        {item.lbl}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Team + Quick Actions */}
            <div className="col-span-2 flex flex-col gap-4">
              <div className="bg-white rounded-xl overflow-hidden"
                   style={{border: '0.5px solid #DDE2EF'}}>
                <div className="px-4 py-3 flex items-center justify-between border-b"
                     style={{borderColor: '#DDE2EF'}}>
                  <div className="text-sm font-bold" style={{color: '#1B2F6E'}}>
                    Team Performance
                  </div>
                  <button onClick={() => router.push('/admin/team')}
                    className="text-xs font-semibold" style={{color: '#2E9FD4'}}>
                    Details →
                  </button>
                </div>
                {team.map((member, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2.5 border-b last:border-0"
                       style={{borderColor: '#DDE2EF'}}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                         style={{background: '#1B2F6E'}}>
                      {member.name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold" style={{color: '#1A1A2E'}}>
                        {member.name}
                      </div>
                      <div className="text-xs" style={{color: '#9AA5CC'}}>
                        {member.calls} calls today
                      </div>
                      <div className="h-1 rounded-full mt-1" style={{background: '#DDE2EF'}}>
                        <div className="h-1 rounded-full"
                          style={{width: `${member.score}%`, background: member.color}}/>
                      </div>
                    </div>
                    <span className="text-xs font-bold" style={{color: member.color}}>
                      {member.score}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl overflow-hidden"
                   style={{border: '0.5px solid #DDE2EF'}}>
                <div className="px-4 py-3 border-b" style={{borderColor: '#DDE2EF'}}>
                  <div className="text-sm font-bold" style={{color: '#1B2F6E'}}>
                    Quick Actions
                  </div>
                </div>
                <div className="p-3 flex flex-col gap-2">
                  {[
                    {label: '+ Add Team Member', path: '/admin/settings', bg: '#1B2F6E', fg: 'white'},
                    {label: '▶ Play Call Recordings', path: '/admin/calls', bg: '#3AAA35', fg: 'white'},
                    {label: '📍 View Team on GPS', path: '/admin/team', bg: '#F7F8FC', fg: '#1B2F6E'},
                    {label: '📥 Download Report', path: '/admin/reports', bg: '#F7F8FC', fg: '#1B2F6E'},
                  ].map((action, i) => (
                    <button key={i}
                      onClick={() => router.push(action.path)}
                      className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all"
                      style={{background: action.bg, color: action.fg, borderColor: '#DDE2EF'}}>
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
