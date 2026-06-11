'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TelecallerHome() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [dismissedAnn, setDismissedAnn] = useState(false);

  const announcement = {
    title: 'New Project Launch — Rushikonda Heights Phase 2',
    message: 'Start calling all interested leads immediately. Target: 10 bookings this month.',
    type: 'Launch',
    typeColor: '#3AAA35',
    typeBg: '#E8F5E8',
    icon: '🚀',
  };

  const hotLeads = [
    { name: 'Venkat Rao', area: 'Rushikonda', budget: '₹1.2Cr', score: 'Hot', calls: 8 },
    { name: 'Naresh Reddy', area: 'Bheemili', budget: '₹2.1Cr', score: 'Hot', calls: 12 },
    { name: 'Ravi Kumar', area: 'Maddilapalem', budget: '₹65L', score: 'Warm', calls: 3 },
  ];

  const scoreConfig = {
    Hot: { bg: '#FFEBEE', fg: '#E53935', icon: '🔴' },
    Warm: { bg: '#FFF3E0', fg: '#F57C00', icon: '🟡' },
    Cold: { bg: '#E3F4FB', fg: '#1565C0', icon: '🔵' },
  };

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>

      {/* Header */}
      <div style={{background: '#1B2F6E', padding: '16px', paddingBottom: '20px', position: 'relative'}}>
        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
          <div>
            <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0}}>Good morning</p>
            <h1 style={{fontSize: '22px', fontWeight: '800', color: 'white', margin: '2px 0 6px'}}>
              Arjun Reddy
            </h1>
            <span style={{fontSize: '11px', fontWeight: '700', padding: '4px 12px',
                          borderRadius: '20px', background: '#3AAA35', color: 'white'}}>
              Telecaller
            </span>
          </div>
          <button onClick={() => setShowMenu(!showMenu)}
            style={{width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)', border: 'none',
                    color: 'white', fontSize: '18px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            ⋮
          </button>
        </div>

        {showMenu && (
          <div style={{position: 'absolute', top: '60px', right: '16px', background: 'white',
                       borderRadius: '12px', padding: '8px', zIndex: 100, minWidth: '160px',
                       boxShadow: '0 4px 20px rgba(0,0,0,0.15)'}}>
            <button onClick={() => { setShowMenu(false); router.push('/'); }}
              style={{width: '100%', padding: '10px 14px', borderRadius: '8px', border: 'none',
                      background: 'none', textAlign: 'left', fontSize: '13px', fontWeight: '600',
                      color: '#E53935', cursor: 'pointer'}}>
              🚪 Logout
            </button>
          </div>
        )}
      </div>

      {/* Stats */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                   gap: '8px', margin: '0 14px', marginTop: '-14px'}}>
        {[
          {val: '18', lbl: 'Calls today', color: '#1B2F6E'},
          {val: '14', lbl: 'Connected', color: '#3AAA35'},
          {val: '3', lbl: 'Follow-ups due', color: '#E53935'},
        ].map((s, i) => (
          <div key={i} style={{background: 'white', borderRadius: '12px', padding: '12px',
                               textAlign: 'center', border: '0.5px solid #DDE2EF'}}>
            <div style={{fontSize: '22px', fontWeight: '800', color: s.color}}>{s.val}</div>
            <div style={{fontSize: '10px', color: '#9AA5CC', marginTop: '2px'}}>{s.lbl}</div>
          </div>
        ))}
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

        {/* Announcement Banner */}
        {!dismissedAnn && (
          <div style={{background: announcement.typeBg, borderRadius: '12px', padding: '12px',
                       marginBottom: '12px', border: `1.5px solid ${announcement.typeColor}`,
                       position: 'relative'}}>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
              <span style={{fontSize: '20px', flexShrink: 0}}>{announcement.icon}</span>
              <div style={{flex: 1}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px'}}>
                  <span style={{fontSize: '10px', fontWeight: '700', padding: '2px 7px',
                                borderRadius: '8px', background: announcement.typeColor,
                                color: 'white'}}>
                    {announcement.type}
                  </span>
                  <span style={{fontSize: '10px', color: '#9AA5CC'}}>From Admin · Just now</span>
                </div>
                <div style={{fontSize: '13px', fontWeight: '700',
                             color: '#1B2F6E', marginBottom: '2px'}}>
                  {announcement.title}
                </div>
                <div style={{fontSize: '12px', color: '#6B7AB5'}}>
                  {announcement.message}
                </div>
              </div>
              <button onClick={() => setDismissedAnn(true)}
                style={{fontSize: '16px', background: 'none', border: 'none',
                        cursor: 'pointer', color: '#9AA5CC', flexShrink: 0, lineHeight: 1}}>
                ×
              </button>
            </div>
          </div>
        )}

        {/* Hot Leads Section */}
        <div style={{background: 'white', borderRadius: '14px', overflow: 'hidden',
                     border: '0.5px solid #DDE2EF', marginBottom: '12px'}}>
          <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                       background: '#FFEBEE', display: 'flex', justifyContent: 'space-between',
                       alignItems: 'center'}}>
            <div style={{fontSize: '13px', fontWeight: '700', color: '#E53935'}}>
              🔴 Hot Leads — Call These First
            </div>
            <button onClick={() => router.push('/telecaller/call')}
              style={{fontSize: '11px', fontWeight: '700', color: '#E53935',
                      background: 'none', border: 'none', cursor: 'pointer'}}>
              Call all →
            </button>
          </div>
          {hotLeads.map((lead, i) => (
            <div key={i} style={{display: 'flex', alignItems: 'center', gap: '10px',
                                 padding: '10px 14px', borderBottom: '1px solid #DDE2EF',
                                 background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
              <div style={{width: '34px', height: '34px', borderRadius: '50%',
                           background: '#1B2F6E', display: 'flex', alignItems: 'center',
                           justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                           color: 'white', flexShrink: 0}}>
                {lead.name.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                  <span style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                    {lead.name}
                  </span>
                  <span style={{fontSize: '10px', fontWeight: '700', padding: '2px 6px',
                                borderRadius: '8px',
                                background: scoreConfig[lead.score as keyof typeof scoreConfig].bg,
                                color: scoreConfig[lead.score as keyof typeof scoreConfig].fg}}>
                    {scoreConfig[lead.score as keyof typeof scoreConfig].icon} {lead.score}
                  </span>
                </div>
                <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                  {lead.area} · {lead.budget} · {lead.calls} calls
                </div>
              </div>
              <button onClick={() => router.push('/telecaller/call')}
                style={{padding: '7px 12px', borderRadius: '8px', border: 'none',
                        background: '#3AAA35', color: 'white', fontSize: '12px',
                        fontWeight: '700', cursor: 'pointer', flexShrink: 0}}>
                📞 Call
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <button onClick={() => router.push('/telecaller/call')}
            style={{width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px', borderRadius: '16px', border: '2px solid #3AAA35',
                    background: '#E8F5E8', cursor: 'pointer'}}>
            <div style={{width: '52px', height: '52px', borderRadius: '14px', background: '#3AAA35',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{fontSize: '24px'}}>📞</span>
            </div>
            <div style={{flex: 1, textAlign: 'left'}}>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#2D8529'}}>Call a Lead</div>
              <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
                12 leads waiting to be called
              </div>
            </div>
            <span style={{fontSize: '20px', color: '#2D8529'}}>→</span>
          </button>

          <button onClick={() => router.push('/telecaller/followups')}
            style={{width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px', borderRadius: '16px', border: '2px solid #E53935',
                    background: '#FFEBEE', cursor: 'pointer'}}>
            <div style={{width: '52px', height: '52px', borderRadius: '14px', background: '#E53935',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{fontSize: '24px'}}>⏰</span>
            </div>
            <div style={{flex: 1, textAlign: 'left'}}>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#E53935'}}>Follow-ups Due</div>
              <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>3 pending — 1 overdue</div>
            </div>
            <span style={{fontSize: '11px', fontWeight: '800', padding: '4px 10px',
                          borderRadius: '20px', background: '#E53935', color: 'white'}}>3</span>
          </button>

          <button style={{width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
                          padding: '16px', borderRadius: '16px', border: '2px solid #1B2F6E',
                          background: '#E8EBF5', cursor: 'pointer'}}>
            <div style={{width: '52px', height: '52px', borderRadius: '14px', background: '#1B2F6E',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{fontSize: '24px'}}>👥</span>
            </div>
            <div style={{flex: 1, textAlign: 'left'}}>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>My Leads</div>
              <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
                28 total · 4 🔴 Hot · 8 🟡 Warm
              </div>
            </div>
            <span style={{fontSize: '20px', color: '#1B2F6E'}}>→</span>
          </button>

          <button onClick={() => router.push('/telecaller/attendance')}
            style={{width: '100%', display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '16px', borderRadius: '16px', border: '2px solid #F57C00',
                    background: '#FFF3E0', cursor: 'pointer'}}>
            <div style={{width: '52px', height: '52px', borderRadius: '14px', background: '#F57C00',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <span style={{fontSize: '24px'}}>📍</span>
            </div>
            <div style={{flex: 1, textAlign: 'left'}}>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#F57C00'}}>Check In / Out</div>
              <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
                Checked in at 9:14 AM today
              </div>
            </div>
            <span style={{fontSize: '11px', fontWeight: '800', padding: '4px 10px',
                          borderRadius: '20px', background: '#3AAA35', color: 'white'}}>In</span>
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/telecaller/home', active: true},
          {icon: '📞', label: 'Call', path: '/telecaller/call'},
          {icon: '📅', label: 'Follow-up', path: '/telecaller/followups'},
          {icon: '📍', label: 'Attendance', path: '/telecaller/attendance'},
        ].map((item, i) => (
          <button key={i} onClick={() => router.push(item.path)}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '10px 4px', gap: '3px', fontSize: '10px', fontWeight: '600',
                    color: item.active ? '#1B2F6E' : '#9AA5CC',
                    background: 'none', border: 'none', cursor: 'pointer'}}>
            <span style={{fontSize: '20px'}}>{item.icon}</span>{item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
