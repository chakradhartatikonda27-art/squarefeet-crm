'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

export default function AdminInventory() {
  const router = useRouter();
  const [activeProject, setActiveProject] = useState('Rushikonda Heights');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUnitModal, setShowUnitModal] = useState<any>(null);

  const projects = [
    { name: 'Rushikonda Heights', type: 'Villa', total: 24, available: 14, reserved: 4, booked: 6 },
    { name: 'Gajuwaka Greens', type: 'Apartment', total: 48, available: 28, reserved: 8, booked: 12 },
    { name: 'MVP Meadows', type: 'Plot', total: 36, available: 30, reserved: 4, booked: 2 },
  ];

  const units = [
    { id: '1', unit: 'A-101', block: 'A', floor: '1', type: '4BHK', size: '2400 sqft', price: '₹1.8Cr', status: 'Available', facing: 'East', amenities: ['Car Park', 'Garden View'] },
    { id: '2', unit: 'A-102', block: 'A', floor: '1', type: '4BHK', size: '2200 sqft', price: '₹1.6Cr', status: 'Booked', facing: 'West', amenities: ['Car Park', 'Pool View'], customer: 'Anil Kumar', bookedOn: 'Jun 5, 2026' },
    { id: '3', unit: 'A-201', block: 'A', floor: '2', type: '4BHK', size: '2400 sqft', price: '₹1.9Cr', status: 'Reserved', facing: 'East', amenities: ['Car Park', 'Garden View'], customer: 'Venkat Rao', reservedOn: 'Jun 7, 2026' },
    { id: '4', unit: 'A-202', block: 'A', floor: '2', type: '4BHK', size: '2200 sqft', price: '₹1.7Cr', status: 'Available', facing: 'North', amenities: ['Car Park'] },
    { id: '5', unit: 'B-101', block: 'B', floor: '1', type: '4BHK', size: '2600 sqft', price: '₹2.1Cr', status: 'Available', facing: 'East', amenities: ['Car Park', 'Pool View', 'Garden View'] },
    { id: '6', unit: 'B-102', block: 'B', floor: '1', type: '4BHK', size: '2400 sqft', price: '₹1.8Cr', status: 'Booked', facing: 'South', amenities: ['Car Park'], customer: 'Naresh Reddy', bookedOn: 'May 28, 2026' },
    { id: '7', unit: 'B-201', block: 'B', floor: '2', type: '4BHK', size: '2600 sqft', price: '₹2.2Cr', status: 'Available', facing: 'East', amenities: ['Car Park', 'Pool View'] },
    { id: '8', unit: 'B-202', block: 'B', floor: '2', type: '4BHK', size: '2400 sqft', price: '₹1.9Cr', status: 'Reserved', facing: 'West', amenities: ['Car Park'], customer: 'Durga Prasad', reservedOn: 'Jun 8, 2026' },
    { id: '9', unit: 'C-101', block: 'C', floor: '1', type: '4BHK', size: '2800 sqft', price: '₹2.4Cr', status: 'Available', facing: 'Sea View', amenities: ['Car Park', 'Sea View', 'Pool View'] },
    { id: '10', unit: 'C-102', block: 'C', floor: '1', type: '4BHK', size: '2600 sqft', price: '₹2.1Cr', status: 'Available', facing: 'East', amenities: ['Car Park', 'Garden View'] },
    { id: '11', unit: 'C-201', block: 'C', floor: '2', type: '4BHK', size: '2800 sqft', price: '₹2.5Cr', status: 'Booked', facing: 'Sea View', amenities: ['Car Park', 'Sea View'], customer: 'Ramesh Babu', bookedOn: 'Jun 1, 2026' },
    { id: '12', unit: 'C-202', block: 'C', floor: '2', type: '4BHK', size: '2600 sqft', price: '₹2.2Cr', status: 'Available', facing: 'North', amenities: ['Car Park', 'Pool View'] },
  ];

  const statusConfig = {
    Available: { bg: '#E8F5E8', fg: '#2D8529', border: '#3AAA35', icon: '✅' },
    Reserved: { bg: '#FFF3E0', fg: '#F57C00', border: '#F57C00', icon: '🟡' },
    Booked: { bg: '#FFEBEE', fg: '#E53935', border: '#E53935', icon: '🔴' },
  };

  const filtered = units.filter(u =>
    filterStatus === 'All' || u.status === filterStatus
  );

  const currentProject = projects.find(p => p.name === activeProject);

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>

      {/* Add Unit Modal */}
      {showAddModal && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                     zIndex: 200, display: 'flex', alignItems: 'center',
                     justifyContent: 'center', padding: '16px'}}>
          <div style={{background: 'white', borderRadius: '20px', padding: '20px',
                       width: '100%', maxWidth: '420px', maxHeight: '90vh', overflowY: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'space-between',
                         alignItems: 'center', marginBottom: '16px'}}>
              <h2 style={{fontSize: '18px', fontWeight: '800', color: '#1B2F6E', margin: 0}}>
                Add New Unit
              </h2>
              <button onClick={() => setShowAddModal(false)}
                style={{fontSize: '24px', background: 'none', border: 'none',
                        cursor: 'pointer', color: '#9AA5CC', lineHeight: 1}}>×</button>
            </div>
            {[
              {label: 'Unit Number', placeholder: 'e.g. A-101'},
              {label: 'Block', placeholder: 'e.g. A, B, C'},
              {label: 'Floor', placeholder: 'e.g. 1, 2, 3'},
              {label: 'Type', placeholder: 'e.g. 2BHK, 3BHK, 4BHK, Villa, Plot'},
              {label: 'Size (sqft)', placeholder: 'e.g. 1200'},
              {label: 'Price', placeholder: 'e.g. ₹65 Lakhs'},
              {label: 'Facing', placeholder: 'e.g. East, West, Sea View'},
            ].map((field, i) => (
              <div key={i} style={{marginBottom: '12px'}}>
                <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                               display: 'block', marginBottom: '5px'}}>{field.label}</label>
                <input placeholder={field.placeholder}
                  style={{width: '100%', padding: '11px 14px', borderRadius: '10px',
                          border: '1.5px solid #DDE2EF', fontSize: '14px',
                          color: '#1A1A2E', outline: 'none', boxSizing: 'border-box'}}/>
              </div>
            ))}
            <div style={{marginBottom: '16px'}}>
              <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                             display: 'block', marginBottom: '5px'}}>Project</label>
              <select style={{width: '100%', padding: '11px 14px', borderRadius: '10px',
                              border: '1.5px solid #DDE2EF', fontSize: '14px',
                              color: '#1A1A2E', outline: 'none', background: 'white'}}>
                {projects.map(p => <option key={p.name}>{p.name}</option>)}
              </select>
            </div>
            <button onClick={() => setShowAddModal(false)}
              style={{width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
                      background: '#3AAA35', color: 'white', fontSize: '15px',
                      fontWeight: '700', cursor: 'pointer'}}>
              Add Unit
            </button>
          </div>
        </div>
      )}

      {/* Unit Detail Modal */}
      {showUnitModal && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                     zIndex: 200, display: 'flex', alignItems: 'center',
                     justifyContent: 'center', padding: '16px'}}>
          <div style={{background: 'white', borderRadius: '20px', padding: '20px',
                       width: '100%', maxWidth: '380px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between',
                         alignItems: 'center', marginBottom: '16px'}}>
              <h2 style={{fontSize: '18px', fontWeight: '800', color: '#1B2F6E', margin: 0}}>
                Unit {showUnitModal.unit}
              </h2>
              <button onClick={() => setShowUnitModal(null)}
                style={{fontSize: '24px', background: 'none', border: 'none',
                        cursor: 'pointer', color: '#9AA5CC', lineHeight: 1}}>×</button>
            </div>

            {/* Status */}
            <div style={{background: statusConfig[showUnitModal.status as keyof typeof statusConfig].bg,
                         borderRadius: '12px', padding: '12px', marginBottom: '16px',
                         textAlign: 'center', border: `1.5px solid ${statusConfig[showUnitModal.status as keyof typeof statusConfig].border}`}}>
              <div style={{fontSize: '20px', marginBottom: '4px'}}>
                {statusConfig[showUnitModal.status as keyof typeof statusConfig].icon}
              </div>
              <div style={{fontSize: '16px', fontWeight: '800',
                           color: statusConfig[showUnitModal.status as keyof typeof statusConfig].fg}}>
                {showUnitModal.status}
              </div>
              {showUnitModal.customer && (
                <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '4px'}}>
                  {showUnitModal.status === 'Booked' ? 'Booked by' : 'Reserved by'}: {showUnitModal.customer}
                </div>
              )}
            </div>

            {/* Details */}
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px'}}>
              {[
                {lbl: 'Block', val: showUnitModal.block},
                {lbl: 'Floor', val: showUnitModal.floor},
                {lbl: 'Type', val: showUnitModal.type},
                {lbl: 'Size', val: showUnitModal.size},
                {lbl: 'Price', val: showUnitModal.price},
                {lbl: 'Facing', val: showUnitModal.facing},
              ].map((d, i) => (
                <div key={i} style={{background: '#F7F8FC', borderRadius: '8px', padding: '10px'}}>
                  <div style={{fontSize: '10px', color: '#9AA5CC', marginBottom: '2px'}}>{d.lbl}</div>
                  <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{d.val}</div>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div style={{marginBottom: '16px'}}>
              <div style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5', marginBottom: '8px'}}>
                Amenities
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
                {showUnitModal.amenities.map((a: string, i: number) => (
                  <span key={i} style={{fontSize: '11px', fontWeight: '600', padding: '4px 10px',
                                        borderRadius: '20px', background: '#E8EBF5', color: '#1B2F6E'}}>
                    ✓ {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            {showUnitModal.status === 'Available' && (
              <div style={{display: 'flex', gap: '8px'}}>
                <button onClick={() => setShowUnitModal(null)}
                  style={{flex: 1, padding: '12px', borderRadius: '10px',
                          border: '1.5px solid #F57C00', background: '#FFF3E0',
                          color: '#F57C00', fontSize: '13px', fontWeight: '700', cursor: 'pointer'}}>
                  🟡 Mark Reserved
                </button>
                <button onClick={() => setShowUnitModal(null)}
                  style={{flex: 1, padding: '12px', borderRadius: '10px', border: 'none',
                          background: '#E53935', color: 'white', fontSize: '13px',
                          fontWeight: '700', cursor: 'pointer'}}>
                  🔴 Mark Booked
                </button>
              </div>
            )}
            {showUnitModal.status === 'Reserved' && (
              <div style={{display: 'flex', gap: '8px'}}>
                <button onClick={() => setShowUnitModal(null)}
                  style={{flex: 1, padding: '12px', borderRadius: '10px',
                          border: '1.5px solid #3AAA35', background: '#E8F5E8',
                          color: '#2D8529', fontSize: '13px', fontWeight: '700', cursor: 'pointer'}}>
                  ✅ Mark Available
                </button>
                <button onClick={() => setShowUnitModal(null)}
                  style={{flex: 1, padding: '12px', borderRadius: '10px', border: 'none',
                          background: '#E53935', color: 'white', fontSize: '13px',
                          fontWeight: '700', cursor: 'pointer'}}>
                  🔴 Confirm Booking
                </button>
              </div>
            )}
            {showUnitModal.status === 'Booked' && (
              <button onClick={() => setShowUnitModal(null)}
                style={{width: '100%', padding: '12px', borderRadius: '10px',
                        border: '1px solid #DDE2EF', background: '#F7F8FC',
                        color: '#6B7AB5', fontSize: '13px', fontWeight: '600', cursor: 'pointer'}}>
                Close
              </button>
            )}
          </div>
        </div>
      )}

      <div style={{display: 'flex', minHeight: '100dvh'}}>
        <div className="desktop-sidebar">
          <AdminSidebar active="inventory" />
        </div>

        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>

          {/* Top Bar */}
          <div style={{padding: '12px 16px', background: 'white',
                       borderBottom: '1px solid #DDE2EF',
                       display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>
                Property Inventory
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                Manage available units across all projects
              </div>
            </div>
            <button onClick={() => setShowAddModal(true)}
              style={{padding: '7px 14px', borderRadius: '8px', fontSize: '12px',
                      fontWeight: '700', color: 'white', background: '#1B2F6E',
                      border: 'none', cursor: 'pointer'}}>
              + Add Unit
            </button>
          </div>

          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* Project Tabs */}
            <div style={{display: 'flex', gap: '8px', marginBottom: '14px', overflowX: 'auto'}}>
              {projects.map(p => (
                <button key={p.name}
                  onClick={() => setActiveProject(p.name)}
                  style={{flexShrink: 0, padding: '8px 16px', borderRadius: '10px',
                          fontSize: '12px', fontWeight: '700', cursor: 'pointer',
                          border: `1.5px solid ${activeProject === p.name ? '#1B2F6E' : '#DDE2EF'}`,
                          background: activeProject === p.name ? '#1B2F6E' : 'white',
                          color: activeProject === p.name ? 'white' : '#6B7AB5'}}>
                  {p.name}
                </button>
              ))}
            </div>

            {/* Project Stats */}
            {currentProject && (
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                           gap: '10px', marginBottom: '14px'}}>
                {[
                  {val: currentProject.total, lbl: 'Total Units', color: '#1B2F6E', bg: '#E8EBF5'},
                  {val: currentProject.available, lbl: 'Available', color: '#2D8529', bg: '#E8F5E8'},
                  {val: currentProject.reserved, lbl: 'Reserved', color: '#F57C00', bg: '#FFF3E0'},
                  {val: currentProject.booked, lbl: 'Booked', color: '#E53935', bg: '#FFEBEE'},
                ].map((s, i) => (
                  <div key={i} style={{background: s.bg, borderRadius: '12px',
                                       padding: '12px', textAlign: 'center',
                                       border: `0.5px solid ${s.color}20`}}>
                    <div style={{fontSize: '22px', fontWeight: '800', color: s.color}}>{s.val}</div>
                    <div style={{fontSize: '11px', color: s.color, fontWeight: '600',
                                 marginTop: '2px'}}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Availability Bar */}
            {currentProject && (
              <div style={{background: 'white', borderRadius: '12px', padding: '14px',
                           marginBottom: '14px', border: '0.5px solid #DDE2EF'}}>
                <div style={{display: 'flex', justifyContent: 'space-between',
                             alignItems: 'center', marginBottom: '8px'}}>
                  <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                    Availability Overview
                  </div>
                  <div style={{fontSize: '12px', fontWeight: '700', color: '#2D8529'}}>
                    {Math.round((currentProject.available/currentProject.total)*100)}% Available
                  </div>
                </div>
                <div style={{height: '12px', background: '#F0F2F8', borderRadius: '6px',
                             overflow: 'hidden', display: 'flex'}}>
                  <div style={{height: '100%', background: '#3AAA35',
                               width: `${(currentProject.available/currentProject.total)*100}%`}}/>
                  <div style={{height: '100%', background: '#F57C00',
                               width: `${(currentProject.reserved/currentProject.total)*100}%`}}/>
                  <div style={{height: '100%', background: '#E53935',
                               width: `${(currentProject.booked/currentProject.total)*100}%`}}/>
                </div>
                <div style={{display: 'flex', gap: '16px', marginTop: '8px'}}>
                  {[
                    {color: '#3AAA35', label: 'Available'},
                    {color: '#F57C00', label: 'Reserved'},
                    {color: '#E53935', label: 'Booked'},
                  ].map((l, i) => (
                    <div key={i} style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                      <div style={{width: '10px', height: '10px', borderRadius: '2px',
                                   background: l.color}}/>
                      <span style={{fontSize: '11px', color: '#6B7AB5'}}>{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Filter */}
            <div style={{display: 'flex', gap: '8px', marginBottom: '12px'}}>
              {['All', 'Available', 'Reserved', 'Booked'].map(s => (
                <button key={s}
                  onClick={() => setFilterStatus(s)}
                  style={{padding: '7px 14px', borderRadius: '8px', fontSize: '12px',
                          fontWeight: '600', cursor: 'pointer',
                          border: `1.5px solid ${filterStatus === s ?
                            (s === 'Available' ? '#3AAA35' : s === 'Reserved' ? '#F57C00' :
                             s === 'Booked' ? '#E53935' : '#1B2F6E') : '#DDE2EF'}`,
                          background: filterStatus === s ?
                            (s === 'Available' ? '#E8F5E8' : s === 'Reserved' ? '#FFF3E0' :
                             s === 'Booked' ? '#FFEBEE' : '#E8EBF5') : 'white',
                          color: filterStatus === s ?
                            (s === 'Available' ? '#2D8529' : s === 'Reserved' ? '#F57C00' :
                             s === 'Booked' ? '#E53935' : '#1B2F6E') : '#6B7AB5'}}>
                  {s === 'Available' ? '✅' : s === 'Reserved' ? '🟡' : s === 'Booked' ? '🔴' : '📋'} {s}
                </button>
              ))}
            </div>

            {/* Units Grid */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                         gap: '10px'}}>
              {filtered.map(unit => (
                <div key={unit.id}
                  onClick={() => setShowUnitModal(unit)}
                  style={{background: 'white', borderRadius: '12px', padding: '14px',
                          border: `1.5px solid ${statusConfig[unit.status as keyof typeof statusConfig].border}`,
                          cursor: 'pointer', position: 'relative', overflow: 'hidden'}}>
                  {/* Status strip */}
                  <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                               background: statusConfig[unit.status as keyof typeof statusConfig].border}}/>

                  <div style={{display: 'flex', justifyContent: 'space-between',
                               alignItems: 'flex-start', marginBottom: '8px'}}>
                    <div style={{fontSize: '16px', fontWeight: '800', color: '#1B2F6E'}}>
                      {unit.unit}
                    </div>
                    <span style={{fontSize: '10px', fontWeight: '700', padding: '3px 8px',
                                  borderRadius: '6px',
                                  background: statusConfig[unit.status as keyof typeof statusConfig].bg,
                                  color: statusConfig[unit.status as keyof typeof statusConfig].fg}}>
                      {statusConfig[unit.status as keyof typeof statusConfig].icon} {unit.status}
                    </span>
                  </div>

                  <div style={{fontSize: '12px', color: '#6B7AB5', marginBottom: '2px'}}>
                    {unit.type} · {unit.size}
                  </div>
                  <div style={{fontSize: '12px', color: '#6B7AB5', marginBottom: '6px'}}>
                    Floor {unit.floor} · {unit.facing}
                  </div>
                  <div style={{fontSize: '15px', fontWeight: '800', color: '#3AAA35'}}>
                    {unit.price}
                  </div>

                  {unit.customer && (
                    <div style={{marginTop: '8px', padding: '6px 8px', background: '#F7F8FC',
                                 borderRadius: '6px', fontSize: '11px', color: '#6B7AB5'}}>
                      👤 {unit.customer}
                    </div>
                  )}
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
        {[
          {icon: '🏠', label: 'Home', path: '/admin/dashboard'},
          {icon: '👥', label: 'Leads', path: '/admin/leads'},
          {icon: '🏗️', label: 'Inventory', path: '/admin/inventory', active: true},
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
