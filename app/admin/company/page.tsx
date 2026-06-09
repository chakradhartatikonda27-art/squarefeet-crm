'use client';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function CompanyProfile() {
  const router = useRouter();

  const projects = [
    { name: 'Rushikonda Heights', type: '4BHK Villas', price: '₹1.2Cr – ₹2.4Cr', status: 'Active', color: '#3AAA35', bg: '#E8F5E8' },
    { name: 'Gajuwaka Greens', type: '2 & 3BHK Apartments', price: '₹38L – ₹72L', status: 'Active', color: '#1B2F6E', bg: '#E8EBF5' },
    { name: 'MVP Meadows', type: 'Plots & Land', price: '₹25L – ₹90L', status: 'Coming Soon', color: '#2E9FD4', bg: '#E3F4FB' },
  ];

  const team = [
    { name: 'Mohan R.', role: 'Managing Director', initials: 'MR' },
    { name: 'Arjun R.', role: 'Senior Telecaller', initials: 'AR' },
    { name: 'Priya S.', role: 'CRM Executive', initials: 'PS' },
    { name: 'Kiran M.', role: 'Sales Executive', initials: 'KM' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>
      <div style={{display: 'flex', minHeight: '100dvh'}}>

        <div className="desktop-sidebar">
          <AdminSidebar active="company" />
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
                Company Profile
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                Visible to all team members
              </div>
            </div>
            <button style={{
              padding: '7px 14px', borderRadius: '8px', fontSize: '12px',
              fontWeight: '700', color: 'white', background: '#1B2F6E',
              border: 'none', cursor: 'pointer',
            }}>
              ✏️ Edit Profile
            </button>
          </div>

          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* Hero Banner */}
            <div style={{
              background: '#0E1A3D', borderRadius: '16px',
              padding: '24px', marginBottom: '12px', overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Background pattern */}
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.03,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}/>

              <div style={{
                display: 'flex', alignItems: 'flex-start',
                gap: '16px', position: 'relative',
              }}>
                {/* Logo */}
                <div style={{
                  width: '64px', height: '64px', borderRadius: '14px',
                  background: 'white', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
                    <rect x="3" y="22" width="9" height="15" rx="1.5" fill="#1B2F6E"/>
                    <rect x="15" y="14" width="9" height="23" rx="1.5" fill="#2E9FD4"/>
                    <rect x="27" y="5" width="10" height="32" rx="1.5" fill="#3AAA35"/>
                    <path d="M1 24L20 9L39 24" stroke="#1B2F6E" strokeWidth="2.5"
                          fill="none" strokeLinecap="round"/>
                  </svg>
                </div>

                <div style={{flex: 1}}>
                  <h1 style={{fontSize: '22px', fontWeight: '800',
                              color: 'white', margin: '0 0 4px'}}>
                    Square Feet India
                  </h1>
                  <p style={{fontSize: '13px', fontWeight: '600',
                             color: '#3AAA35', margin: '0 0 2px'}}>
                    Projects & Developers
                  </p>
                  <p style={{fontSize: '10px', color: 'rgba(255,255,255,0.4)',
                             margin: '0 0 12px', letterSpacing: '0.1em'}}>
                    — DEVELOPING INDIA —
                  </p>

                  {/* Badges */}
                  <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                    {['Residential', 'Commercial', 'Plots'].map((tag, i) => (
                      <span key={i} style={{
                        fontSize: '11px', fontWeight: '600', padding: '3px 10px',
                        borderRadius: '20px',
                        background: i === 0 ? 'rgba(58,170,53,0.2)' : i === 1 ? 'rgba(46,159,212,0.2)' : 'rgba(255,255,255,0.1)',
                        color: i === 0 ? '#3AAA35' : i === 1 ? '#2E9FD4' : 'rgba(255,255,255,0.5)',
                        border: `1px solid ${i === 0 ? '#3AAA35' : i === 1 ? '#2E9FD4' : 'rgba(255,255,255,0.2)'}`,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div style={{
                  display: 'flex', gap: '16px', flexShrink: 0,
                  flexDirection: 'column', alignItems: 'flex-end',
                }}>
                  {[['6+', 'Years'], ['500+', 'Families'], ['3', 'Projects']].map(([val, lbl], i) => (
                    <div key={i} style={{textAlign: 'center'}}>
                      <div style={{fontSize: '20px', fontWeight: '800', color: 'white'}}>
                        {val}
                      </div>
                      <div style={{fontSize: '10px', color: 'rgba(255,255,255,0.4)'}}>
                        {lbl}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '10px', marginBottom: '12px',
            }}>
              {[
                { title: 'Vision', text: 'Making dream homes accessible to every family in Visakhapatnam and Andhra Pradesh.', icon: '🎯' },
                { title: 'Mission', text: 'Transparent, trustworthy real estate guidance with zero compromise on customer trust.', icon: '🏆' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'white', borderRadius: '12px', padding: '14px',
                  border: '0.5px solid #DDE2EF',
                }}>
                  <div style={{
                    fontSize: '12px', fontWeight: '700', color: '#1B2F6E',
                    marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    <span>{item.icon}</span> {item.title}
                  </div>
                  <div style={{fontSize: '12px', color: '#6B7AB5', lineHeight: 1.6}}>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Active Projects */}
            <div style={{
              background: 'white', borderRadius: '12px',
              border: '0.5px solid #DDE2EF', marginBottom: '12px', overflow: 'hidden',
            }}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  🏗️ Active Projects
                </div>
              </div>
              <div style={{padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                {projects.map((p, i) => (
                  <div key={i} style={{
                    background: '#F7F8FC', borderRadius: '10px', padding: '12px',
                    borderLeft: `4px solid ${p.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                    <div>
                      <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                        {p.name}
                      </div>
                      <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '2px'}}>
                        {p.type}
                      </div>
                      <div style={{fontSize: '12px', fontWeight: '600',
                                   color: '#3AAA35', marginTop: '3px'}}>
                        {p.price}
                      </div>
                    </div>
                    <span style={{
                      fontSize: '10px', fontWeight: '600', padding: '4px 10px',
                      borderRadius: '6px', background: p.bg, color: p.color,
                      flexShrink: 0,
                    }}>
                      {p.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Services */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '10px', marginBottom: '12px',
            }}>
              <div style={{
                background: 'white', borderRadius: '12px', padding: '14px',
                border: '0.5px solid #DDE2EF',
              }}>
                <div style={{fontSize: '12px', fontWeight: '700', color: '#1B2F6E',
                             marginBottom: '10px'}}>
                  📞 Contact
                </div>
                {[
                  { icon: '📱', text: '+91 98765 43210' },
                  { icon: '📧', text: 'info@squarefeetindia.com' },
                  { icon: '📍', text: 'Visakhapatnam, AP' },
                  { icon: '🌐', text: 'squarefeetindia.com' },
                ].map((c, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    marginBottom: '6px', fontSize: '12px', color: '#1A1A2E',
                  }}>
                    <span>{c.icon}</span>
                    <span style={{color: '#6B7AB5'}}>{c.text}</span>
                  </div>
                ))}
              </div>

              <div style={{
                background: 'white', borderRadius: '12px', padding: '14px',
                border: '0.5px solid #DDE2EF',
              }}>
                <div style={{fontSize: '12px', fontWeight: '700', color: '#1B2F6E',
                             marginBottom: '10px'}}>
                  🏢 Services
                </div>
                {[
                  'Residential property sales',
                  'Commercial leasing',
                  'Plot sales & land deals',
                  'Home loan assistance',
                  'Property documentation',
                ].map((s, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    marginBottom: '5px', fontSize: '12px', color: '#6B7AB5',
                  }}>
                    <span style={{color: '#3AAA35', fontSize: '10px'}}>✓</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Team Members */}
            <div style={{
              background: 'white', borderRadius: '12px',
              border: '0.5px solid #DDE2EF', overflow: 'hidden',
            }}>
              <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  👥 Our Team
                </div>
              </div>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1px', background: '#DDE2EF',
              }}>
                {team.map((member, i) => (
                  <div key={i} style={{
                    background: 'white', padding: '14px',
                    display: 'flex', alignItems: 'center', gap: '10px',
                  }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '50%',
                      background: '#1B2F6E', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '12px', fontWeight: '700',
                      color: 'white', flexShrink: 0,
                    }}>
                      {member.initials}
                    </div>
                    <div>
                      <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                        {member.name}
                      </div>
                      <div style={{fontSize: '11px', color: '#9AA5CC'}}>
                        {member.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
          {icon: '📊', label: 'Reports', path: '/admin/reports'},
          {icon: '👤', label: 'Team', path: '/admin/team'},
        ].map((item, i) => (
          <button key={i} onClick={() => router.push(item.path)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '10px 4px', gap: '3px', fontSize: '10px', fontWeight: '600',
              color: '#9AA5CC', background: 'none', border: 'none', cursor: 'pointer',
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
