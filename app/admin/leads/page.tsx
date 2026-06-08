'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function AdminLeads() {
  const router = useRouter();
  const [view, setView] = useState('list');
  const [search, setSearch] = useState('');
  const [filterStage, setFilterStage] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);

  const leads = [
    { id: '1', name: 'Ravi Kumar', mobile: '98765 12345', area: 'Maddilapalem', budget: '₹65L', source: 'Facebook', status: 'New', sbg: '#E3F4FB', sfg: '#1565C0', agent: 'Arjun R.' },
    { id: '2', name: 'Sunita Prasad', mobile: '97654 23456', area: 'Gajuwaka', budget: '₹45L', source: 'Referral', status: 'Follow-up', sbg: '#FFF3E0', sfg: '#E65100', agent: 'Priya S.' },
    { id: '3', name: 'Venkat Rao', mobile: '96543 34567', area: 'Rushikonda', budget: '₹1.2Cr', source: 'Google', status: 'Interested', sbg: '#E8F5E8', sfg: '#2D8529', agent: 'Arjun R.' },
    { id: '4', name: 'Lakshmi Devi', mobile: '95432 45678', area: 'MVP Colony', budget: '₹80L', source: '99acres', status: 'Contacted', sbg: '#FFF3E0', sfg: '#E65100', agent: 'Kiran M.' },
    { id: '5', name: 'Naresh Reddy', mobile: '94321 56789', area: 'Bheemili', budget: '₹2.1Cr', source: 'JustDial', status: 'Site Visit', sbg: '#FFF3E0', sfg: '#E65100', agent: 'Priya S.' },
    { id: '6', name: 'Anil Kumar', mobile: '93210 67890', area: 'Seethammadhara', budget: '₹55L', source: 'Walk-in', status: 'Converted', sbg: '#E8F5E8', sfg: '#2D8529', agent: 'Arjun R.' },
    { id: '7', name: 'Meena Sharma', mobile: '92109 78901', area: 'Dwaraka Nagar', budget: '₹42L', source: 'Facebook', status: 'New', sbg: '#E3F4FB', sfg: '#1565C0', agent: 'Kiran M.' },
    { id: '8', name: 'Durga Prasad', mobile: '91098 89012', area: 'Rushikonda', budget: '₹1.8Cr', source: 'Google', status: 'Negotiation', sbg: '#F3E5F5', sfg: '#6A1B9A', agent: 'Priya S.' },
  ];

  const stages = ['All','New','Contacted','Follow-up','Interested','Site Visit','Negotiation','Converted'];

  const pipelineStages = [
    { name: 'New', color: '#1B2F6E', bg: '#E8EBF5', count: 28 },
    { name: 'Contacted', color: '#F57C00', bg: '#FFF3E0', count: 34 },
    { name: 'Follow-up', color: '#534AB7', bg: '#EEEDFE', count: 31 },
    { name: 'Interested', color: '#2D8529', bg: '#E8F5E8', count: 22 },
    { name: 'Site Visit', color: '#E65100', bg: '#FFF3E0', count: 14 },
    { name: 'Negotiation', color: '#6A1B9A', bg: '#F3E5F5', count: 6 },
    { name: 'Booking', color: '#1565C0', bg: '#E3F4FB', count: 4 },
    { name: 'Converted', color: '#2D8529', bg: '#E8F5E8', count: 7 },
  ];

  const filtered = leads.filter(l => {
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase()) ||
                        l.mobile.includes(search) ||
                        l.area.toLowerCase().includes(search.toLowerCase());
    const matchStage = filterStage === 'All' || l.status === filterStage;
    return matchSearch && matchStage;
  });

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>

      {/* Add Lead Modal */}
      {showAddModal && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
          zIndex: 200, display: 'flex', alignItems: 'center',
          justifyContent: 'center', padding: '16px',
        }}>
          <div style={{
            background: 'white', borderRadius: '20px', padding: '20px',
            width: '100%', maxWidth: '420px', maxHeight: '90vh', overflowY: 'auto',
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between',
                         alignItems: 'center', marginBottom: '16px'}}>
              <h2 style={{fontSize: '18px', fontWeight: '800', color: '#1B2F6E', margin: 0}}>
                Add New Lead
              </h2>
              <button onClick={() => setShowAddModal(false)}
                style={{fontSize: '24px', background: 'none', border: 'none',
                        cursor: 'pointer', color: '#9AA5CC', lineHeight: 1}}>
                ×
              </button>
            </div>
            {[
              {label: 'Customer name', placeholder: 'Full name', type: 'text'},
              {label: 'Mobile number', placeholder: '+91 XXXXX XXXXX', type: 'tel'},
              {label: 'Email ID', placeholder: 'email@example.com', type: 'email'},
              {label: 'City / Area', placeholder: 'e.g. Gajuwaka, Vizag', type: 'text'},
              {label: 'Project interested in', placeholder: 'Project name', type: 'text'},
              {label: 'Budget', placeholder: 'e.g. ₹50 Lakhs', type: 'text'},
            ].map((field, i) => (
              <div key={i} style={{marginBottom: '12px'}}>
                <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                               display: 'block', marginBottom: '5px'}}>
                  {field.label}
                </label>
                <input type={field.type} placeholder={field.placeholder}
                  style={{
                    width: '100%', padding: '11px 14px', borderRadius: '10px',
                    border: '1.5px solid #DDE2EF', fontSize: '14px',
                    color: '#1A1A2E', outline: 'none', boxSizing: 'border-box',
                  }}/>
              </div>
            ))}
            <div style={{marginBottom: '12px'}}>
              <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                             display: 'block', marginBottom: '5px'}}>
                Lead source
              </label>
              <select style={{
                width: '100%', padding: '11px 14px', borderRadius: '10px',
                border: '1.5px solid #DDE2EF', fontSize: '14px',
                color: '#1A1A2E', outline: 'none', background: 'white',
              }}>
                {['Facebook Ad','Google Ad','Walk-in','Referral','JustDial','99acres','WhatsApp'].map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div style={{marginBottom: '16px'}}>
              <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                             display: 'block', marginBottom: '5px'}}>
                Assign to
              </label>
              <select style={{
                width: '100%', padding: '11px 14px', borderRadius: '10px',
                border: '1.5px solid #DDE2EF', fontSize: '14px',
                color: '#1A1A2E', outline: 'none', background: 'white',
              }}>
                {['Arjun R.','Priya S.','Kiran M.','Rohit K.'].map(a => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
            <button onClick={() => setShowAddModal(false)}
              style={{
                width: '100%', padding: '14px', borderRadius: '12px',
                border: 'none', background: '#3AAA35', color: 'white',
                fontSize: '15px', fontWeight: '700', cursor: 'pointer',
              }}>
              Save Lead
            </button>
          </div>
        </div>
      )}

      <div style={{display: 'flex', minHeight: '100dvh'}}>

        {/* Sidebar */}
        <div className="desktop-sidebar">
          <AdminSidebar active="leads" />
        </div>

        {/* Main */}
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>

          {/* Top Bar */}
          <div style={{
            padding: '12px 16px', background: 'white',
            borderBottom: '1px solid #DDE2EF',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>Leads</div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>142 total leads</div>
            </div>
            <div style={{display: 'flex', gap: '8px'}}>
              <button onClick={() => setView(view === 'list' ? 'pipeline' : 'list')}
                style={{
                  padding: '7px 12px', borderRadius: '8px', fontSize: '12px',
                  fontWeight: '600', border: '1px solid #DDE2EF',
                  background: 'white', color: '#1B2F6E', cursor: 'pointer',
                }}>
                {view === 'list' ? '📋 Pipeline' : '📃 List'}
              </button>
              <button onClick={() => setShowAddModal(true)}
                style={{
                  padding: '7px 14px', borderRadius: '8px', fontSize: '12px',
                  fontWeight: '700', color: 'white', background: '#1B2F6E',
                  border: 'none', cursor: 'pointer',
                }}>
                + Add Lead
              </button>
            </div>
          </div>

          {/* Content */}
          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {view === 'list' ? (
              <>
                {/* Filters */}
                <div style={{display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap'}}>
                  <input type="text"
                    placeholder="Search by name, number, area..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{
                      flex: 1, minWidth: '160px', padding: '9px 12px',
                      borderRadius: '10px', border: '1.5px solid #DDE2EF',
                      fontSize: '13px', color: '#1A1A2E', outline: 'none', background: 'white',
                    }}
                  />
                  <select value={filterStage} onChange={e => setFilterStage(e.target.value)}
                    style={{
                      padding: '9px 10px', borderRadius: '10px',
                      border: '1.5px solid #DDE2EF', fontSize: '13px',
                      color: '#1A1A2E', outline: 'none', background: 'white',
                    }}>
                    {stages.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                {/* Leads List */}
                <div style={{
                  background: 'white', borderRadius: '12px',
                  overflow: 'hidden', border: '0.5px solid #DDE2EF',
                }}>
                  {filtered.map((lead, i) => (
                    <div key={lead.id} style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                      background: i % 2 === 0 ? '#F7F8FC' : 'white',
                    }}>
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '50%',
                        background: '#1B2F6E', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                        color: 'white', flexShrink: 0,
                      }}>
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div style={{flex: 1, minWidth: 0}}>
                        <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                          {lead.name}
                        </div>
                        <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '1px'}}>
                          {lead.mobile} · {lead.area} · {lead.budget}
                        </div>
                        <div style={{fontSize: '11px', color: '#9AA5CC', marginTop: '1px'}}>
                          {lead.source} · {lead.agent}
                        </div>
                      </div>
                      <div style={{
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'flex-end', gap: '5px', flexShrink: 0,
                      }}>
                        <span style={{
                          fontSize: '10px', fontWeight: '600', padding: '3px 8px',
                          borderRadius: '6px', background: lead.sbg, color: lead.sfg,
                        }}>
                          {lead.status}
                        </span>
                        <button style={{
                          padding: '5px 12px', borderRadius: '6px', border: 'none',
                          background: '#3AAA35', color: 'white', fontSize: '11px',
                          fontWeight: '700', cursor: 'pointer',
                        }}>
                          📞 Call
                        </button>
                      </div>
                    </div>
                  ))}
                  {filtered.length === 0 && (
                    <div style={{padding: '32px', textAlign: 'center', color: '#9AA5CC'}}>
                      No leads found
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* Pipeline View */
              <div style={{overflowX: 'auto', paddingBottom: '8px'}}>
                <div style={{display: 'flex', gap: '10px', minWidth: 'max-content'}}>
                  {pipelineStages.map(stage => (
                    <div key={stage.name} style={{width: '150px', flexShrink: 0}}>
                      <div style={{
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'space-between', marginBottom: '8px',
                      }}>
                        <span style={{
                          fontSize: '11px', fontWeight: '700', color: '#6B7AB5',
                          textTransform: 'uppercase', letterSpacing: '0.05em',
                        }}>
                          {stage.name}
                        </span>
                        <span style={{
                          fontSize: '10px', fontWeight: '700', padding: '2px 7px',
                          borderRadius: '8px', background: stage.bg, color: stage.color,
                        }}>
                          {stage.count}
                        </span>
                      </div>
                      {leads.filter(l => l.status === stage.name).map(lead => (
                        <div key={lead.id} style={{
                          background: 'white', borderRadius: '10px', padding: '10px',
                          marginBottom: '8px', border: '0.5px solid #DDE2EF',
                          borderTopWidth: '3px', borderTopColor: stage.color,
                        }}>
                          <div style={{fontSize: '12px', fontWeight: '700', color: '#1B2F6E'}}>
                            {lead.name}
                          </div>
                          <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '2px'}}>
                            {lead.area}
                          </div>
                          <div style={{fontSize: '11px', fontWeight: '600',
                                       color: '#3AAA35', marginTop: '4px'}}>
                            {lead.budget}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
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
          {icon: '👥', label: 'Leads', path: '/admin/leads', active: true},
          {icon: '📞', label: 'Calls', path: '/admin/calls'},
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
