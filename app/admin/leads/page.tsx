'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function AdminLeads() {
  const router = useRouter();
  const [view, setView] = useState('list');
  const [search, setSearch] = useState('');
  const [filterStage, setFilterStage] = useState('All');
  const [filterScore, setFilterScore] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDistributeModal, setShowDistributeModal] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [distributeMethod, setDistributeMethod] = useState('equal');

  const leads = [
    { id: '1', name: 'Ravi Kumar', mobile: '98765 12345', area: 'Maddilapalem', budget: '₹65L', source: 'Facebook', status: 'New', sbg: '#E3F4FB', sfg: '#1565C0', agent: 'Arjun R.', score: 'Hot', calls: 5, lastContact: '2h ago' },
    { id: '2', name: 'Sunita Prasad', mobile: '97654 23456', area: 'Gajuwaka', budget: '₹45L', source: 'Referral', status: 'Follow-up', sbg: '#FFF3E0', sfg: '#E65100', agent: 'Priya S.', score: 'Warm', calls: 3, lastContact: '1d ago' },
    { id: '3', name: 'Venkat Rao', mobile: '96543 34567', area: 'Rushikonda', budget: '₹1.2Cr', source: 'Google', status: 'Interested', sbg: '#E8F5E8', sfg: '#2D8529', agent: 'Arjun R.', score: 'Hot', calls: 8, lastContact: '30m ago' },
    { id: '4', name: 'Lakshmi Devi', mobile: '95432 45678', area: 'MVP Colony', budget: '₹80L', source: '99acres', status: 'Contacted', sbg: '#FFF3E0', sfg: '#E65100', agent: 'Kiran M.', score: 'Warm', calls: 2, lastContact: '3d ago' },
    { id: '5', name: 'Naresh Reddy', mobile: '94321 56789', area: 'Bheemili', budget: '₹2.1Cr', source: 'JustDial', status: 'Site Visit', sbg: '#FFF3E0', sfg: '#E65100', agent: 'Priya S.', score: 'Hot', calls: 12, lastContact: '1h ago' },
    { id: '6', name: 'Anil Kumar', mobile: '93210 67890', area: 'Seethammadhara', budget: '₹55L', source: 'Walk-in', status: 'Converted', sbg: '#E8F5E8', sfg: '#2D8529', agent: 'Arjun R.', score: 'Hot', calls: 15, lastContact: 'Today' },
    { id: '7', name: 'Meena Sharma', mobile: '92109 78901', area: 'Dwaraka Nagar', budget: '₹42L', source: 'Facebook', status: 'New', sbg: '#E3F4FB', sfg: '#1565C0', agent: 'Kiran M.', score: 'Cold', calls: 0, lastContact: '7d ago' },
    { id: '8', name: 'Durga Prasad', mobile: '91098 89012', area: 'Rushikonda', budget: '₹1.8Cr', source: 'Google', status: 'Negotiation', sbg: '#F3E5F5', sfg: '#6A1B9A', agent: 'Priya S.', score: 'Warm', calls: 6, lastContact: '5h ago' },
    { id: '9', name: 'Ramesh Babu', mobile: '90987 90123', area: 'MVP Colony', budget: '₹95L', source: 'Referral', status: 'New', sbg: '#E3F4FB', sfg: '#1565C0', agent: 'Unassigned', score: 'Cold', calls: 0, lastContact: 'Never' },
    { id: '10', name: 'Sita Rani', mobile: '89876 01234', area: 'Gajuwaka', budget: '₹38L', source: 'Facebook', status: 'New', sbg: '#E3F4FB', sfg: '#1565C0', agent: 'Unassigned', score: 'Cold', calls: 0, lastContact: 'Never' },
  ];

  const stages = ['All', 'New', 'Contacted', 'Follow-up', 'Interested', 'Site Visit', 'Negotiation', 'Converted'];
  const scores = ['All', 'Hot', 'Warm', 'Cold'];
  const agents = ['Arjun R.', 'Priya S.', 'Kiran M.', 'Rohit K.'];

  const scoreConfig = {
    Hot: { bg: '#FFEBEE', fg: '#E53935', icon: '🔴' },
    Warm: { bg: '#FFF3E0', fg: '#F57C00', icon: '🟡' },
    Cold: { bg: '#E3F4FB', fg: '#1565C0', icon: '🔵' },
  };

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
    const matchScore = filterScore === 'All' || l.score === filterScore;
    return matchSearch && matchStage && matchScore;
  });

  const hotCount = leads.filter(l => l.score === 'Hot').length;
  const warmCount = leads.filter(l => l.score === 'Warm').length;
  const coldCount = leads.filter(l => l.score === 'Cold').length;

  const handleExport = (format: string) => {
    alert(`Exporting leads as ${format}... (connects to real export in Phase 2)`);
  };

  const toggleSelectLead = (id: string) => {
    setSelectedLeads(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>

      {/* Add Lead Modal */}
      {showAddModal && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                     zIndex: 200, display: 'flex', alignItems: 'center',
                     justifyContent: 'center', padding: '16px'}}>
          <div style={{background: 'white', borderRadius: '20px', padding: '20px',
                       width: '100%', maxWidth: '420px', maxHeight: '90vh', overflowY: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'space-between',
                         alignItems: 'center', marginBottom: '16px'}}>
              <h2 style={{fontSize: '18px', fontWeight: '800', color: '#1B2F6E', margin: 0}}>
                Add New Lead
              </h2>
              <button onClick={() => setShowAddModal(false)}
                style={{fontSize: '24px', background: 'none', border: 'none',
                        cursor: 'pointer', color: '#9AA5CC', lineHeight: 1}}>×</button>
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
                               display: 'block', marginBottom: '5px'}}>{field.label}</label>
                <input type={field.type} placeholder={field.placeholder}
                  style={{width: '100%', padding: '11px 14px', borderRadius: '10px',
                          border: '1.5px solid #DDE2EF', fontSize: '14px',
                          color: '#1A1A2E', outline: 'none', boxSizing: 'border-box'}}/>
              </div>
            ))}
            <div style={{marginBottom: '12px'}}>
              <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                             display: 'block', marginBottom: '5px'}}>Lead Score</label>
              <div style={{display: 'flex', gap: '8px'}}>
                {['Hot', 'Warm', 'Cold'].map(s => (
                  <button key={s} style={{flex: 1, padding: '10px',
                    borderRadius: '8px', border: `1.5px solid ${scoreConfig[s as keyof typeof scoreConfig].fg}`,
                    background: scoreConfig[s as keyof typeof scoreConfig].bg,
                    color: scoreConfig[s as keyof typeof scoreConfig].fg,
                    fontSize: '13px', fontWeight: '700', cursor: 'pointer'}}>
                    {scoreConfig[s as keyof typeof scoreConfig].icon} {s}
                  </button>
                ))}
              </div>
            </div>
            <div style={{marginBottom: '12px'}}>
              <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                             display: 'block', marginBottom: '5px'}}>Lead source</label>
              <select style={{width: '100%', padding: '11px 14px', borderRadius: '10px',
                              border: '1.5px solid #DDE2EF', fontSize: '14px',
                              color: '#1A1A2E', outline: 'none', background: 'white'}}>
                {['Facebook Ad','Google Ad','Walk-in','Referral','JustDial','99acres','MagicBricks','Housing.com','WhatsApp'].map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div style={{marginBottom: '16px'}}>
              <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                             display: 'block', marginBottom: '5px'}}>Assign to</label>
              <select style={{width: '100%', padding: '11px 14px', borderRadius: '10px',
                              border: '1.5px solid #DDE2EF', fontSize: '14px',
                              color: '#1A1A2E', outline: 'none', background: 'white'}}>
                <option>Auto assign</option>
                {agents.map(a => <option key={a}>{a}</option>)}
              </select>
            </div>
            <button onClick={() => setShowAddModal(false)}
              style={{width: '100%', padding: '14px', borderRadius: '12px',
                      border: 'none', background: '#3AAA35', color: 'white',
                      fontSize: '15px', fontWeight: '700', cursor: 'pointer'}}>
              Save Lead
            </button>
          </div>
        </div>
      )}

      {/* Distribute Modal */}
      {showDistributeModal && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                     zIndex: 200, display: 'flex', alignItems: 'center',
                     justifyContent: 'center', padding: '16px'}}>
          <div style={{background: 'white', borderRadius: '20px', padding: '20px',
                       width: '100%', maxWidth: '420px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between',
                         alignItems: 'center', marginBottom: '16px'}}>
              <h2 style={{fontSize: '18px', fontWeight: '800', color: '#1B2F6E', margin: 0}}>
                Distribute Leads
              </h2>
              <button onClick={() => setShowDistributeModal(false)}
                style={{fontSize: '24px', background: 'none', border: 'none',
                        cursor: 'pointer', color: '#9AA5CC', lineHeight: 1}}>×</button>
            </div>

            <div style={{background: '#F7F8FC', borderRadius: '10px', padding: '12px',
                         marginBottom: '16px', textAlign: 'center'}}>
              <div style={{fontSize: '24px', fontWeight: '800', color: '#1B2F6E'}}>
                {selectedLeads.length > 0 ? selectedLeads.length : leads.length}
              </div>
              <div style={{fontSize: '12px', color: '#6B7AB5'}}>
                {selectedLeads.length > 0 ? 'Selected leads to distribute' : 'Total leads to distribute'}
              </div>
            </div>

            <div style={{marginBottom: '14px'}}>
              <div style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5', marginBottom: '8px'}}>
                Select Agents
              </div>
              {[
                {name: 'Arjun R.', role: 'Telecaller', current: 28, active: true},
                {name: 'Priya S.', role: 'CRM Executive', current: 31, active: true},
                {name: 'Kiran M.', role: 'Sales Exec', current: 22, active: true},
                {name: 'Rohit K.', role: 'Telecaller', current: 0, active: false},
              ].map((agent, i) => (
                <div key={i} style={{display: 'flex', alignItems: 'center', gap: '10px',
                                     padding: '10px 12px', borderRadius: '10px', marginBottom: '6px',
                                     background: agent.active ? '#E8F5E8' : '#F5F5F5',
                                     border: `1px solid ${agent.active ? '#3AAA35' : '#DDE2EF'}`}}>
                  <div style={{width: '32px', height: '32px', borderRadius: '50%',
                               background: '#1B2F6E', display: 'flex', alignItems: 'center',
                               justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                               color: 'white', flexShrink: 0}}>
                    {agent.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                      {agent.name}
                    </div>
                    <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                      {agent.role} · Currently {agent.current} leads
                    </div>
                  </div>
                  {!agent.active && (
                    <span style={{fontSize: '10px', fontWeight: '700', padding: '3px 8px',
                                  borderRadius: '6px', background: '#FFEBEE', color: '#E53935'}}>
                      Absent
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div style={{marginBottom: '16px'}}>
              <div style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5', marginBottom: '8px'}}>
                Distribution Method
              </div>
              {[
                {key: 'equal', label: 'Equal Split', desc: 'Divide equally among selected agents'},
                {key: 'area', label: 'By Area', desc: 'Assign based on customer location'},
                {key: 'manual', label: 'Manual', desc: 'I will assign each lead myself'},
              ].map(method => (
                <button key={method.key}
                  onClick={() => setDistributeMethod(method.key)}
                  style={{width: '100%', padding: '10px 14px', borderRadius: '10px',
                          marginBottom: '6px', border: `1.5px solid ${distributeMethod === method.key ? '#1B2F6E' : '#DDE2EF'}`,
                          background: distributeMethod === method.key ? '#E8EBF5' : 'white',
                          textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div style={{width: '16px', height: '16px', borderRadius: '50%',
                               border: `2px solid ${distributeMethod === method.key ? '#1B2F6E' : '#DDE2EF'}`,
                               background: distributeMethod === method.key ? '#1B2F6E' : 'white',
                               flexShrink: 0}}/>
                  <div>
                    <div style={{fontSize: '13px', fontWeight: '700',
                                 color: distributeMethod === method.key ? '#1B2F6E' : '#1A1A2E'}}>
                      {method.label}
                    </div>
                    <div style={{fontSize: '11px', color: '#6B7AB5'}}>{method.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            {distributeMethod === 'equal' && (
              <div style={{background: '#E8F5E8', borderRadius: '10px', padding: '12px',
                           marginBottom: '16px'}}>
                <div style={{fontSize: '12px', fontWeight: '700', color: '#2D8529', marginBottom: '6px'}}>
                  Preview — Equal Split
                </div>
                {['Arjun R.', 'Priya S.', 'Kiran M.'].map((agent, i) => (
                  <div key={i} style={{display: 'flex', justifyContent: 'space-between',
                                       fontSize: '12px', color: '#1B2F6E', marginBottom: '3px'}}>
                    <span>{agent}</span>
                    <span style={{fontWeight: '700'}}>
                      +{Math.floor((selectedLeads.length > 0 ? selectedLeads.length : leads.length) / 3)} leads
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div style={{display: 'flex', gap: '10px'}}>
              <button onClick={() => setShowDistributeModal(false)}
                style={{flex: 1, padding: '12px', borderRadius: '12px',
                        border: '1.5px solid #DDE2EF', background: 'white',
                        color: '#6B7AB5', fontSize: '14px', fontWeight: '600', cursor: 'pointer'}}>
                Cancel
              </button>
              <button onClick={() => { setShowDistributeModal(false); setSelectedLeads([]); }}
                style={{flex: 1, padding: '12px', borderRadius: '12px', border: 'none',
                        background: '#1B2F6E', color: 'white', fontSize: '14px',
                        fontWeight: '700', cursor: 'pointer'}}>
                Distribute Now
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{display: 'flex', minHeight: '100dvh'}}>
        <div className="desktop-sidebar">
          <AdminSidebar active="leads" />
        </div>

        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>

          {/* Top Bar */}
          <div style={{padding: '12px 16px', background: 'white',
                       borderBottom: '1px solid #DDE2EF',
                       display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                       flexWrap: 'wrap', gap: '8px'}}>
            <div>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>Leads</div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>{leads.length} total leads</div>
            </div>
            <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
              {/* Export buttons */}
              <div style={{display: 'flex', gap: '4px'}}>
                {['Excel', 'PDF', 'Word'].map(fmt => (
                  <button key={fmt} onClick={() => handleExport(fmt)}
                    style={{padding: '6px 10px', borderRadius: '7px', fontSize: '11px',
                            fontWeight: '600', border: '1px solid #DDE2EF',
                            background: 'white', color: '#1B2F6E', cursor: 'pointer'}}>
                    📥 {fmt}
                  </button>
                ))}
              </div>
              <button onClick={() => setShowDistributeModal(true)}
                style={{padding: '7px 12px', borderRadius: '8px', fontSize: '12px',
                        fontWeight: '600', border: '1px solid #2E9FD4',
                        background: '#E3F4FB', color: '#1565C0', cursor: 'pointer'}}>
                👥 Distribute
              </button>
              <button onClick={() => setView(view === 'list' ? 'pipeline' : 'list')}
                style={{padding: '7px 12px', borderRadius: '8px', fontSize: '12px',
                        fontWeight: '600', border: '1px solid #DDE2EF',
                        background: 'white', color: '#1B2F6E', cursor: 'pointer'}}>
                {view === 'list' ? '📋 Pipeline' : '📃 List'}
              </button>
              <button onClick={() => setShowAddModal(true)}
                style={{padding: '7px 14px', borderRadius: '8px', fontSize: '12px',
                        fontWeight: '700', color: 'white', background: '#1B2F6E',
                        border: 'none', cursor: 'pointer'}}>
                + Add Lead
              </button>
            </div>
          </div>

          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* Lead Score Summary */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                         gap: '10px', marginBottom: '12px'}}>
              {[
                {score: 'Hot', count: hotCount, bg: '#FFEBEE', fg: '#E53935', icon: '🔴', desc: 'Call these first'},
                {score: 'Warm', count: warmCount, bg: '#FFF3E0', fg: '#F57C00', icon: '🟡', desc: 'Follow up today'},
                {score: 'Cold', count: coldCount, bg: '#E3F4FB', fg: '#1565C0', icon: '🔵', desc: 'Needs nurturing'},
              ].map((s, i) => (
                <div key={i}
                  onClick={() => setFilterScore(filterScore === s.score ? 'All' : s.score)}
                  style={{background: filterScore === s.score ? s.bg : 'white',
                          borderRadius: '12px', padding: '12px', textAlign: 'center',
                          border: `1.5px solid ${filterScore === s.score ? s.fg : '#DDE2EF'}`,
                          cursor: 'pointer'}}>
                  <div style={{fontSize: '20px', marginBottom: '2px'}}>{s.icon}</div>
                  <div style={{fontSize: '20px', fontWeight: '800', color: s.fg}}>{s.count}</div>
                  <div style={{fontSize: '11px', fontWeight: '700', color: s.fg}}>{s.score} Leads</div>
                  <div style={{fontSize: '10px', color: '#9AA5CC', marginTop: '2px'}}>{s.desc}</div>
                </div>
              ))}
            </div>

            {view === 'list' ? (
              <>
                {/* Filters */}
                <div style={{display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap'}}>
                  <input type="text" placeholder="Search by name, number, area..."
                    value={search} onChange={e => setSearch(e.target.value)}
                    style={{flex: 1, minWidth: '160px', padding: '9px 12px', borderRadius: '10px',
                            border: '1.5px solid #DDE2EF', fontSize: '13px',
                            color: '#1A1A2E', outline: 'none', background: 'white'}}/>
                  <select value={filterStage} onChange={e => setFilterStage(e.target.value)}
                    style={{padding: '9px 10px', borderRadius: '10px', border: '1.5px solid #DDE2EF',
                            fontSize: '13px', color: '#1A1A2E', outline: 'none', background: 'white'}}>
                    {stages.map(s => <option key={s}>{s}</option>)}
                  </select>
                  <select value={filterScore} onChange={e => setFilterScore(e.target.value)}
                    style={{padding: '9px 10px', borderRadius: '10px', border: '1.5px solid #DDE2EF',
                            fontSize: '13px', color: '#1A1A2E', outline: 'none', background: 'white'}}>
                    {scores.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                {/* Selected leads bar */}
                {selectedLeads.length > 0 && (
                  <div style={{background: '#E8EBF5', borderRadius: '10px', padding: '10px 14px',
                               marginBottom: '10px', display: 'flex', alignItems: 'center',
                               justifyContent: 'space-between'}}>
                    <span style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                      {selectedLeads.length} leads selected
                    </span>
                    <div style={{display: 'flex', gap: '8px'}}>
                      <button onClick={() => setShowDistributeModal(true)}
                        style={{padding: '6px 12px', borderRadius: '8px', border: 'none',
                                background: '#1B2F6E', color: 'white', fontSize: '12px',
                                fontWeight: '700', cursor: 'pointer'}}>
                        👥 Distribute Selected
                      </button>
                      <button onClick={() => setSelectedLeads([])}
                        style={{padding: '6px 12px', borderRadius: '8px',
                                border: '1px solid #DDE2EF', background: 'white',
                                color: '#6B7AB5', fontSize: '12px', cursor: 'pointer'}}>
                        Clear
                      </button>
                    </div>
                  </div>
                )}

                {/* Leads List */}
                <div style={{background: 'white', borderRadius: '12px', overflow: 'hidden',
                             border: '0.5px solid #DDE2EF'}}>
                  {filtered.map((lead, i) => (
                    <div key={lead.id} style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                      background: selectedLeads.includes(lead.id) ? '#E8EBF5' :
                                  i % 2 === 0 ? '#F7F8FC' : 'white',
                    }}>
                      {/* Checkbox */}
                      <input type="checkbox"
                        checked={selectedLeads.includes(lead.id)}
                        onChange={() => toggleSelectLead(lead.id)}
                        style={{flexShrink: 0, width: '16px', height: '16px', cursor: 'pointer'}}/>

                      <div style={{width: '36px', height: '36px', borderRadius: '50%',
                                   background: '#1B2F6E', display: 'flex', alignItems: 'center',
                                   justifyContent: 'center', fontSize: '11px', fontWeight: '700',
                                   color: 'white', flexShrink: 0}}>
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>

                      <div style={{flex: 1, minWidth: 0}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                          <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                            {lead.name}
                          </div>
                          {/* Score Badge */}
                          <span style={{fontSize: '9px', fontWeight: '700', padding: '2px 6px',
                                        borderRadius: '8px',
                                        background: scoreConfig[lead.score as keyof typeof scoreConfig].bg,
                                        color: scoreConfig[lead.score as keyof typeof scoreConfig].fg}}>
                            {scoreConfig[lead.score as keyof typeof scoreConfig].icon} {lead.score}
                          </span>
                        </div>
                        <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '1px'}}>
                          {lead.mobile} · {lead.area} · {lead.budget}
                        </div>
                        <div style={{fontSize: '11px', color: '#9AA5CC', marginTop: '1px'}}>
                          {lead.source} · {lead.agent} · {lead.calls} calls · {lead.lastContact}
                        </div>
                      </div>

                      <div style={{display: 'flex', flexDirection: 'column',
                                   alignItems: 'flex-end', gap: '5px', flexShrink: 0}}>
                        <span style={{fontSize: '10px', fontWeight: '600', padding: '3px 8px',
                                      borderRadius: '6px', background: lead.sbg, color: lead.sfg}}>
                          {lead.status}
                        </span>
                        <button style={{padding: '5px 12px', borderRadius: '6px', border: 'none',
                                        background: '#3AAA35', color: 'white', fontSize: '11px',
                                        fontWeight: '700', cursor: 'pointer'}}>
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
              <div style={{overflowX: 'auto', paddingBottom: '8px'}}>
                <div style={{display: 'flex', gap: '10px', minWidth: 'max-content'}}>
                  {pipelineStages.map(stage => (
                    <div key={stage.name} style={{width: '150px', flexShrink: 0}}>
                      <div style={{display: 'flex', alignItems: 'center',
                                   justifyContent: 'space-between', marginBottom: '8px'}}>
                        <span style={{fontSize: '11px', fontWeight: '700', color: '#6B7AB5',
                                      textTransform: 'uppercase', letterSpacing: '0.05em'}}>
                          {stage.name}
                        </span>
                        <span style={{fontSize: '10px', fontWeight: '700', padding: '2px 7px',
                                      borderRadius: '8px', background: stage.bg, color: stage.color}}>
                          {stage.count}
                        </span>
                      </div>
                      {leads.filter(l => l.status === stage.name).map(lead => (
                        <div key={lead.id} style={{background: 'white', borderRadius: '10px',
                                                   padding: '10px', marginBottom: '8px',
                                                   border: '0.5px solid #DDE2EF',
                                                   borderTopWidth: '3px', borderTopColor: stage.color}}>
                          <div style={{display: 'flex', justifyContent: 'space-between',
                                       alignItems: 'flex-start', marginBottom: '4px'}}>
                            <div style={{fontSize: '12px', fontWeight: '700', color: '#1B2F6E'}}>
                              {lead.name}
                            </div>
                            <span style={{fontSize: '8px', fontWeight: '700', padding: '2px 5px',
                                          borderRadius: '6px',
                                          background: scoreConfig[lead.score as keyof typeof scoreConfig].bg,
                                          color: scoreConfig[lead.score as keyof typeof scoreConfig].fg}}>
                              {scoreConfig[lead.score as keyof typeof scoreConfig].icon}
                            </span>
                          </div>
                          <div style={{fontSize: '11px', color: '#6B7AB5'}}>{lead.area}</div>
                          <div style={{fontSize: '11px', fontWeight: '600',
                                       color: '#3AAA35', marginTop: '4px'}}>{lead.budget}</div>
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
      <div className="mobile-bottom-nav" style={{position: 'fixed', bottom: 0, left: 0, right: 0,
           display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
           background: 'white', borderTop: '1px solid #DDE2EF', zIndex: 100}}>
        {[
          {icon: '🏠', label: 'Home', path: '/admin/dashboard'},
          {icon: '👥', label: 'Leads', path: '/admin/leads', active: true},
          {icon: '📞', label: 'Calls', path: '/admin/calls'},
          {icon: '📊', label: 'Reports', path: '/admin/reports'},
          {icon: '👤', label: 'Team', path: '/admin/team'},
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

      <style>{`
        @media (min-width: 768px) { .mobile-bottom-nav { display: none !important; } .desktop-sidebar { display: flex !important; } }
        @media (max-width: 767px) { .desktop-sidebar { display: none !important; } .mobile-bottom-nav { display: grid !important; } }
      `}</style>
    </div>
  );
}
