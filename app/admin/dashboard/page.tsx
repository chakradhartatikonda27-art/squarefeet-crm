'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeChart, setActiveChart] = useState('funnel');

  const stats = [
    { label: 'Total Leads', value: '142', trend: '+12 this week', color: '#1B2F6E', accent: '#1B2F6E' },
    { label: 'Calls Today', value: '67', trend: '44 connected', color: '#2E9FD4', accent: '#2E9FD4' },
    { label: 'Conversions', value: '7', trend: 'This month', color: '#3AAA35', accent: '#3AAA35' },
    { label: 'Overdue', value: '3', trend: 'Needs attention', color: '#E53935', accent: '#E53935' },
  ];

  const recentLeads = [
    { name: 'Ravi Kumar', area: 'Maddilapalem', budget: '₹65L', status: 'New', sbg: '#E3F4FB', sfg: '#1565C0', score: '🔴' },
    { name: 'Sunita Prasad', area: 'Gajuwaka', budget: '₹45L', status: 'Follow-up', sbg: '#FFF3E0', sfg: '#E65100', score: '🟡' },
    { name: 'Venkat Rao', area: 'Rushikonda', budget: '₹1.2Cr', status: 'Interested', sbg: '#E8F5E8', sfg: '#2D8529', score: '🔴' },
    { name: 'Lakshmi Devi', area: 'MVP Colony', budget: '₹80L', status: 'Contacted', sbg: '#FFF3E0', sfg: '#E65100', score: '🟡' },
  ];

  const team = [
    { name: 'Arjun R.', calls: 22, score: 90, color: '#3AAA35' },
    { name: 'Priya S.', calls: 19, score: 75, color: '#F57C00' },
    { name: 'Kiran M.', calls: 9, score: 48, color: '#E53935' },
    { name: 'Rohit K.', calls: 0, score: 0, color: '#E53935' },
  ];

  // Chart data
  const weeklyCallsData = [
    { day: 'Mon', calls: 42, connected: 28 },
    { day: 'Tue', calls: 58, connected: 38 },
    { day: 'Wed', calls: 35, connected: 22 },
    { day: 'Thu', calls: 67, connected: 44 },
    { day: 'Fri', calls: 51, connected: 33 },
    { day: 'Sat', calls: 29, connected: 18 },
  ];

  const sourceData = [
    { source: 'Facebook', pct: 34, count: 48, color: '#1B2F6E' },
    { source: 'Google', pct: 25, count: 35, color: '#2E9FD4' },
    { source: 'Referral', pct: 20, count: 28, color: '#3AAA35' },
    { source: '99acres', pct: 13, count: 18, color: '#C9A84C' },
    { source: 'Walk-in', pct: 8, count: 11, color: '#9AA5CC' },
  ];

  const funnelData = [
    { stage: 'New Leads', count: 142, color: '#1B2F6E', pct: 100 },
    { stage: 'Contacted', count: 98, color: '#2E9FD4', pct: 69 },
    { stage: 'Interested', count: 54, color: '#F57C00', pct: 38 },
    { stage: 'Site Visit', count: 28, color: '#C9A84C', pct: 20 },
    { stage: 'Negotiation', count: 14, color: '#9AA5CC', pct: 10 },
    { stage: 'Converted', count: 7, color: '#3AAA35', pct: 5 },
  ];

  const monthlyData = [
    { month: 'Jan', conversions: 3 },
    { month: 'Feb', conversions: 5 },
    { month: 'Mar', conversions: 4 },
    { month: 'Apr', conversions: 8 },
    { month: 'May', conversions: 6 },
    { month: 'Jun', conversions: 7 },
  ];

  const maxCalls = Math.max(...weeklyCallsData.map(d => d.calls));
  const maxConversions = Math.max(...monthlyData.map(d => d.conversions));

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
        <div className="desktop-sidebar">
          <AdminSidebar active="dashboard" />
        </div>

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

          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* Stats */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                         gap: '10px', marginBottom: '14px'}}>
              {stats.map((stat, i) => (
                <div key={i} style={{background: 'white', borderRadius: '12px', padding: '14px',
                                     border: '0.5px solid #DDE2EF', position: 'relative', overflow: 'hidden'}}>
                  <div style={{position: 'absolute', top: 0, left: 0, right: 0,
                               height: '3px', background: stat.accent}}/>
                  <div style={{fontSize: '24px', fontWeight: '800', color: stat.color, marginTop: '4px'}}>
                    {stat.value}
                  </div>
                  <div style={{fontSize: '11px', fontWeight: '500', color: '#6B7AB5', marginTop: '2px'}}>
                    {stat.label}
                  </div>
                  <div style={{fontSize: '11px', fontWeight: '600', color: stat.color, marginTop: '2px'}}>
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden',
                         border: '0.5px solid #DDE2EF', marginBottom: '14px'}}>

              {/* Chart Tabs */}
              <div style={{display: 'flex', borderBottom: '1px solid #DDE2EF', overflowX: 'auto'}}>
                {[
                  {key: 'funnel', label: '📊 Pipeline Funnel'},
                  {key: 'calls', label: '📞 Calls This Week'},
                  {key: 'sources', label: '🎯 Lead Sources'},
                  {key: 'conversions', label: '📈 Monthly Trend'},
                ].map(tab => (
                  <button key={tab.key}
                    onClick={() => setActiveChart(tab.key)}
                    style={{padding: '10px 14px', fontSize: '11px', fontWeight: '600',
                            border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
                            background: 'none', flexShrink: 0,
                            color: activeChart === tab.key ? '#1B2F6E' : '#9AA5CC',
                            borderBottom: `2px solid ${activeChart === tab.key ? '#1B2F6E' : 'transparent'}`,
                            marginBottom: '-1px'}}>
                    {tab.label}
                  </button>
                ))}
              </div>

              <div style={{padding: '16px'}}>

                {/* Funnel Chart */}
                {activeChart === 'funnel' && (
                  <div>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E', marginBottom: '14px'}}>
                      Lead Pipeline Funnel
                    </div>
                    {funnelData.map((item, i) => (
                      <div key={i} style={{marginBottom: '8px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between',
                                     marginBottom: '4px', alignItems: 'center'}}>
                          <span style={{fontSize: '12px', fontWeight: '600', color: '#1B2F6E'}}>
                            {item.stage}
                          </span>
                          <span style={{fontSize: '12px', fontWeight: '800', color: item.color}}>
                            {item.count}
                          </span>
                        </div>
                        <div style={{height: '24px', background: '#F0F2F8', borderRadius: '6px',
                                     overflow: 'hidden'}}>
                          <div style={{height: '100%', background: item.color, borderRadius: '6px',
                                       width: `${item.pct}%`, display: 'flex', alignItems: 'center',
                                       paddingLeft: '8px', transition: 'width 0.3s'}}>
                            {item.pct > 15 && (
                              <span style={{fontSize: '10px', fontWeight: '700', color: 'white'}}>
                                {item.pct}%
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div style={{marginTop: '12px', padding: '10px', background: '#E8F5E8',
                                 borderRadius: '8px', display: 'flex', justifyContent: 'space-between',
                                 alignItems: 'center'}}>
                      <span style={{fontSize: '12px', fontWeight: '600', color: '#2D8529'}}>
                        Overall Conversion Rate
                      </span>
                      <span style={{fontSize: '16px', fontWeight: '800', color: '#2D8529'}}>
                        4.9%
                      </span>
                    </div>
                  </div>
                )}

                {/* Weekly Calls Bar Chart */}
                {activeChart === 'calls' && (
                  <div>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E', marginBottom: '14px'}}>
                      Calls This Week
                    </div>
                    <div style={{display: 'flex', gap: '8px', alignItems: 'flex-end', height: '160px',
                                 padding: '0 4px'}}>
                      {weeklyCallsData.map((d, i) => (
                        <div key={i} style={{flex: 1, display: 'flex', flexDirection: 'column',
                                             alignItems: 'center', gap: '4px', height: '100%',
                                             justifyContent: 'flex-end'}}>
                          <div style={{fontSize: '10px', fontWeight: '700', color: '#1B2F6E'}}>
                            {d.calls}
                          </div>
                          <div style={{width: '100%', position: 'relative', display: 'flex',
                                       flexDirection: 'column', gap: '2px', alignItems: 'center'}}>
                            {/* Total calls bar */}
                            <div style={{width: '60%', background: '#E8EBF5', borderRadius: '4px 4px 0 0',
                                         height: `${(d.calls/maxCalls)*120}px`, position: 'relative'}}>
                              {/* Connected overlay */}
                              <div style={{position: 'absolute', bottom: 0, left: 0, right: 0,
                                           background: '#1B2F6E', borderRadius: '4px 4px 0 0',
                                           height: `${(d.connected/d.calls)*100}%`}}/>
                            </div>
                          </div>
                          <div style={{fontSize: '10px', fontWeight: '600', color: '#9AA5CC'}}>
                            {d.day}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{display: 'flex', gap: '16px', marginTop: '12px', justifyContent: 'center'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <div style={{width: '12px', height: '12px', borderRadius: '2px', background: '#1B2F6E'}}/>
                        <span style={{fontSize: '11px', color: '#6B7AB5'}}>Connected</span>
                      </div>
                      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <div style={{width: '12px', height: '12px', borderRadius: '2px', background: '#E8EBF5'}}/>
                        <span style={{fontSize: '11px', color: '#6B7AB5'}}>Total Calls</span>
                      </div>
                    </div>
                    <div style={{marginTop: '12px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
                                 gap: '8px'}}>
                      {[
                        {val: weeklyCallsData.reduce((a,b)=>a+b.calls,0), lbl: 'Total Calls', color: '#1B2F6E'},
                        {val: weeklyCallsData.reduce((a,b)=>a+b.connected,0), lbl: 'Connected', color: '#3AAA35'},
                        {val: Math.round(weeklyCallsData.reduce((a,b)=>a+b.connected,0)/weeklyCallsData.reduce((a,b)=>a+b.calls,0)*100)+'%', lbl: 'Connect Rate', color: '#2E9FD4'},
                      ].map((s,i) => (
                        <div key={i} style={{background: '#F7F8FC', borderRadius: '8px', padding: '10px', textAlign: 'center'}}>
                          <div style={{fontSize: '16px', fontWeight: '800', color: s.color}}>{s.val}</div>
                          <div style={{fontSize: '10px', color: '#9AA5CC', marginTop: '2px'}}>{s.lbl}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sources Pie/Bar Chart */}
                {activeChart === 'sources' && (
                  <div>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E', marginBottom: '14px'}}>
                      Lead Source Analysis
                    </div>
                    {sourceData.map((s, i) => (
                      <div key={i} style={{marginBottom: '10px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between',
                                     marginBottom: '4px'}}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                            <div style={{width: '10px', height: '10px', borderRadius: '50%',
                                         background: s.color}}/>
                            <span style={{fontSize: '12px', fontWeight: '600', color: '#1B2F6E'}}>
                              {s.source}
                            </span>
                          </div>
                          <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                            <span style={{fontSize: '11px', color: '#9AA5CC'}}>{s.count} leads</span>
                            <span style={{fontSize: '12px', fontWeight: '800', color: s.color}}>
                              {s.pct}%
                            </span>
                          </div>
                        </div>
                        <div style={{height: '10px', background: '#F0F2F8', borderRadius: '5px',
                                     overflow: 'hidden'}}>
                          <div style={{height: '100%', background: s.color, borderRadius: '5px',
                                       width: `${s.pct}%`}}/>
                        </div>
                      </div>
                    ))}
                    <div style={{marginTop: '12px', background: '#E8EBF5', borderRadius: '10px',
                                 padding: '12px'}}>
                      <div style={{fontSize: '12px', fontWeight: '700', color: '#1B2F6E',
                                   marginBottom: '6px'}}>Best Performing Source</div>
                      <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <div style={{width: '32px', height: '32px', borderRadius: '50%',
                                     background: '#1B2F6E', display: 'flex', alignItems: 'center',
                                     justifyContent: 'center'}}>
                          <span style={{fontSize: '14px'}}>📘</span>
                        </div>
                        <div>
                          <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                            Facebook Ads
                          </div>
                          <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                            48 leads · 34% of total
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Monthly Conversions Line Chart */}
                {activeChart === 'conversions' && (
                  <div>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E', marginBottom: '14px'}}>
                      Monthly Conversions — 2026
                    </div>
                    <div style={{display: 'flex', gap: '8px', alignItems: 'flex-end', height: '140px',
                                 padding: '0 4px', marginBottom: '8px'}}>
                      {monthlyData.map((d, i) => (
                        <div key={i} style={{flex: 1, display: 'flex', flexDirection: 'column',
                                             alignItems: 'center', gap: '4px', height: '100%',
                                             justifyContent: 'flex-end'}}>
                          <div style={{fontSize: '11px', fontWeight: '800', color: '#3AAA35'}}>
                            {d.conversions}
                          </div>
                          <div style={{width: '70%', background: `linear-gradient(to top, #3AAA35, #2D8529)`,
                                       borderRadius: '6px 6px 0 0',
                                       height: `${(d.conversions/maxConversions)*110}px`}}/>
                          <div style={{fontSize: '10px', fontWeight: '600', color: '#9AA5CC'}}>
                            {d.month}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px',
                                 marginTop: '8px'}}>
                      {[
                        {val: monthlyData.reduce((a,b)=>a+b.conversions,0), lbl: 'Total This Year', color: '#3AAA35'},
                        {val: Math.max(...monthlyData.map(d=>d.conversions)), lbl: 'Best Month', color: '#1B2F6E'},
                        {val: (monthlyData.reduce((a,b)=>a+b.conversions,0)/6).toFixed(1), lbl: 'Monthly Avg', color: '#2E9FD4'},
                      ].map((s,i) => (
                        <div key={i} style={{background: '#F7F8FC', borderRadius: '8px', padding: '10px', textAlign: 'center'}}>
                          <div style={{fontSize: '16px', fontWeight: '800', color: s.color}}>{s.val}</div>
                          <div style={{fontSize: '10px', color: '#9AA5CC', marginTop: '2px'}}>{s.lbl}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Leads */}
            <div style={{background: 'white', borderRadius: '12px', border: '0.5px solid #DDE2EF',
                         marginBottom: '12px', overflow: 'hidden'}}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                           display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>Recent Leads</div>
                <button onClick={() => router.push('/admin/leads')}
                  style={{fontSize: '12px', fontWeight: '600', color: '#2E9FD4',
                          background: 'none', border: 'none', cursor: 'pointer'}}>
                  View all →
                </button>
              </div>
              {recentLeads.map((lead, i) => (
                <div key={i} style={{display: 'flex', alignItems: 'center', gap: '10px',
                                     padding: '10px 14px', borderBottom: '1px solid #DDE2EF',
                                     background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
                  <div style={{width: '34px', height: '34px', borderRadius: '50%', background: '#1B2F6E',
                               display: 'flex', alignItems: 'center', justifyContent: 'center',
                               fontSize: '11px', fontWeight: '700', color: 'white', flexShrink: 0}}>
                    {lead.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{flex: 1, minWidth: 0}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                      <div style={{fontSize: '13px', fontWeight: '600', color: '#1A1A2E'}}>
                        {lead.name}
                      </div>
                      <span style={{fontSize: '11px'}}>{lead.score}</span>
                    </div>
                    <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                      {lead.area} · {lead.budget}
                    </div>
                  </div>
                  <span style={{fontSize: '10px', fontWeight: '600', padding: '3px 8px',
                                borderRadius: '6px', background: lead.sbg, color: lead.sfg,
                                flexShrink: 0}}>
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Hourly Report */}
            <div style={{background: 'white', borderRadius: '12px', border: '0.5px solid #DDE2EF',
                         marginBottom: '12px', overflow: 'hidden'}}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                           display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                    Last Hourly Report
                  </div>
                  <div style={{fontSize: '11px', color: '#6B7AB5'}}>Auto-generated at 3:00 PM</div>
                </div>
                <div style={{display: 'flex', gap: '6px'}}>
                  <button style={{padding: '5px 10px', borderRadius: '6px', fontSize: '11px',
                                  fontWeight: '600', border: '1px solid #DDE2EF',
                                  background: 'white', color: '#1B2F6E', cursor: 'pointer'}}>Excel</button>
                  <button style={{padding: '5px 10px', borderRadius: '6px', fontSize: '11px',
                                  fontWeight: '700', color: 'white', background: '#1B2F6E',
                                  border: 'none', cursor: 'pointer'}}>PDF</button>
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', padding: '12px'}}>
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
                    <div style={{fontSize: '18px', fontWeight: '800', color: item.c}}>{item.val}</div>
                    <div style={{fontSize: '10px', color: '#9AA5CC', marginTop: '2px'}}>{item.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div style={{background: 'white', borderRadius: '12px', border: '0.5px solid #DDE2EF',
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
                <div key={i} style={{display: 'flex', alignItems: 'center', gap: '10px',
                                     padding: '10px 14px', borderBottom: '1px solid #DDE2EF'}}>
                  <div style={{width: '32px', height: '32px', borderRadius: '50%', background: '#1B2F6E',
                               display: 'flex', alignItems: 'center', justifyContent: 'center',
                               fontSize: '11px', fontWeight: '700', color: 'white', flexShrink: 0}}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{flex: 1, minWidth: 0}}>
                    <div style={{fontSize: '13px', fontWeight: '600', color: '#1A1A2E'}}>{member.name}</div>
                    <div style={{fontSize: '11px', color: '#9AA5CC'}}>{member.calls} calls today</div>
                    <div style={{height: '4px', background: '#DDE2EF', borderRadius: '2px', marginTop: '4px'}}>
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

      {/* Mobile Bottom Nav */}
      <div className="mobile-bottom-nav" style={{position: 'fixed', bottom: 0, left: 0, right: 0,
           display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
           background: 'white', borderTop: '1px solid #DDE2EF', zIndex: 100}}>
        {bottomNav.map((item, i) => (
          <button key={i} onClick={() => router.push(item.path)}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '10px 4px', gap: '3px', fontSize: '10px', fontWeight: '600',
                    color: item.active ? '#1B2F6E' : '#9AA5CC',
                    background: 'none', border: 'none', cursor: 'pointer'}}>
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
