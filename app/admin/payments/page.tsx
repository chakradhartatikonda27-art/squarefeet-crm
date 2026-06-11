'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

type Milestone = {
  id: string;
  name: string;
  amount: string;
  dueDate: string;
  status: 'Paid' | 'Due' | 'Overdue' | 'Pending';
  paidOn?: string;
};

type Payment = {
  id: string;
  customer: string;
  project: string;
  unit: string;
  totalAmount: string;
  agent: string;
  bookedOn: string;
  milestones: Milestone[];
};

export default function AdminPayments() {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const statusConfig = {
    Paid: { color: '#2D8529', bg: '#E8F5E8', icon: '✅' },
    Due: { color: '#1B2F6E', bg: '#E8EBF5', icon: '⏰' },
    Overdue: { color: '#E53935', bg: '#FFEBEE', icon: '🔴' },
    Pending: { color: '#9AA5CC', bg: '#F0F2F8', icon: '⬜' },
  };

  const payments: Payment[] = [
    {
      id: '1', customer: 'Anil Kumar', project: 'Gajuwaka Greens',
      unit: 'B-204 · 2BHK', totalAmount: '₹55,00,000',
      agent: 'Arjun R.', bookedOn: 'Jun 2, 2026',
      milestones: [
        { id: 'm1', name: 'Booking Amount (10%)', amount: '₹5,50,000', dueDate: 'Jun 2, 2026', status: 'Paid', paidOn: 'Jun 2, 2026' },
        { id: 'm2', name: 'Agreement Amount (20%)', amount: '₹11,00,000', dueDate: 'Jun 15, 2026', status: 'Paid', paidOn: 'Jun 14, 2026' },
        { id: 'm3', name: 'Construction Linked (50%)', amount: '₹27,50,000', dueDate: 'Aug 1, 2026', status: 'Due' },
        { id: 'm4', name: 'Registration Amount (20%)', amount: '₹11,00,000', dueDate: 'Oct 15, 2026', status: 'Pending' },
      ],
    },
    {
      id: '2', customer: 'Naresh Reddy', project: 'Rushikonda Heights',
      unit: 'B-102 · 4BHK Villa', totalAmount: '₹1,80,00,000',
      agent: 'Priya S.', bookedOn: 'May 28, 2026',
      milestones: [
        { id: 'm1', name: 'Booking Amount (5%)', amount: '₹9,00,000', dueDate: 'May 28, 2026', status: 'Paid', paidOn: 'May 28, 2026' },
        { id: 'm2', name: 'Agreement Amount (15%)', amount: '₹27,00,000', dueDate: 'Jun 10, 2026', status: 'Overdue' },
        { id: 'm3', name: 'Slab 1 (20%)', amount: '₹36,00,000', dueDate: 'Sep 1, 2026', status: 'Pending' },
        { id: 'm4', name: 'Slab 2 (20%)', amount: '₹36,00,000', dueDate: 'Dec 1, 2026', status: 'Pending' },
        { id: 'm5', name: 'Slab 3 (20%)', amount: '₹36,00,000', dueDate: 'Mar 1, 2027', status: 'Pending' },
        { id: 'm6', name: 'Registration (20%)', amount: '₹36,00,000', dueDate: 'Jun 1, 2027', status: 'Pending' },
      ],
    },
    {
      id: '3', customer: 'Ramesh Babu', project: 'Rushikonda Heights',
      unit: 'C-201 · 4BHK Villa', totalAmount: '₹2,10,00,000',
      agent: 'Arjun R.', bookedOn: 'Jun 1, 2026',
      milestones: [
        { id: 'm1', name: 'Booking Amount (5%)', amount: '₹10,50,000', dueDate: 'Jun 1, 2026', status: 'Paid', paidOn: 'Jun 1, 2026' },
        { id: 'm2', name: 'Agreement Amount (15%)', amount: '₹31,50,000', dueDate: 'Jun 20, 2026', status: 'Due' },
        { id: 'm3', name: 'Slab 1 (20%)', amount: '₹42,00,000', dueDate: 'Oct 1, 2026', status: 'Pending' },
        { id: 'm4', name: 'Registration (60%)', amount: '₹1,26,00,000', dueDate: 'Mar 1, 2027', status: 'Pending' },
      ],
    },
  ];

  const totalCollected = payments.reduce((sum, p) =>
    sum + p.milestones.filter(m => m.status === 'Paid').length, 0
  );
  const totalOverdue = payments.reduce((sum, p) =>
    sum + p.milestones.filter(m => m.status === 'Overdue').length, 0
  );
  const totalDue = payments.reduce((sum, p) =>
    sum + p.milestones.filter(m => m.status === 'Due').length, 0
  );

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>

      {/* Milestone Detail Modal */}
      {selectedPayment && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                     zIndex: 200, display: 'flex', alignItems: 'center',
                     justifyContent: 'center', padding: '16px'}}>
          <div style={{background: 'white', borderRadius: '20px', padding: '20px',
                       width: '100%', maxWidth: '480px', maxHeight: '90vh', overflowY: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'space-between',
                         alignItems: 'center', marginBottom: '16px'}}>
              <h2 style={{fontSize: '18px', fontWeight: '800', color: '#1B2F6E', margin: 0}}>
                Payment Schedule
              </h2>
              <button onClick={() => setSelectedPayment(null)}
                style={{fontSize: '24px', background: 'none', border: 'none',
                        cursor: 'pointer', color: '#9AA5CC', lineHeight: 1}}>×</button>
            </div>

            {/* Customer Info */}
            <div style={{background: '#0E1A3D', borderRadius: '12px', padding: '14px',
                         marginBottom: '16px'}}>
              <div style={{fontSize: '16px', fontWeight: '800', color: 'white', marginBottom: '4px'}}>
                {selectedPayment.customer}
              </div>
              <div style={{fontSize: '12px', color: '#3AAA35', marginBottom: '2px'}}>
                {selectedPayment.project} · {selectedPayment.unit}
              </div>
              <div style={{fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px'}}>
                Agent: {selectedPayment.agent} · Booked: {selectedPayment.bookedOn}
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span style={{fontSize: '11px', color: 'rgba(255,255,255,0.5)'}}>Total Amount</span>
                <span style={{fontSize: '18px', fontWeight: '800', color: '#C9A84C'}}>
                  {selectedPayment.totalAmount}
                </span>
              </div>
            </div>

            {/* Progress */}
            <div style={{marginBottom: '16px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between',
                           marginBottom: '6px', alignItems: 'center'}}>
                <span style={{fontSize: '12px', fontWeight: '600', color: '#1B2F6E'}}>
                  Payment Progress
                </span>
                <span style={{fontSize: '12px', fontWeight: '700', color: '#3AAA35'}}>
                  {selectedPayment.milestones.filter(m => m.status === 'Paid').length}/
                  {selectedPayment.milestones.length} milestones paid
                </span>
              </div>
              <div style={{height: '8px', background: '#F0F2F8', borderRadius: '4px', overflow: 'hidden'}}>
                <div style={{height: '100%', background: '#3AAA35', borderRadius: '4px',
                             width: `${(selectedPayment.milestones.filter(m => m.status === 'Paid').length /
                               selectedPayment.milestones.length) * 100}%`}}/>
              </div>
            </div>

            {/* Milestones */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px'}}>
              {selectedPayment.milestones.map((m, i) => (
                <div key={m.id} style={{background: statusConfig[m.status].bg,
                                         borderRadius: '12px', padding: '12px',
                                         border: `1px solid ${statusConfig[m.status].color}30`,
                                         display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <span style={{fontSize: '18px', flexShrink: 0}}>{statusConfig[m.status].icon}</span>
                  <div style={{flex: 1, minWidth: 0}}>
                    <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                      {m.name}
                    </div>
                    <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
                      Due: {m.dueDate}
                      {m.paidOn && ` · Paid: ${m.paidOn}`}
                    </div>
                  </div>
                  <div style={{textAlign: 'right', flexShrink: 0}}>
                    <div style={{fontSize: '14px', fontWeight: '800',
                                 color: statusConfig[m.status].color}}>
                      {m.amount}
                    </div>
                    <div style={{fontSize: '10px', fontWeight: '700',
                                 color: statusConfig[m.status].color, marginTop: '2px'}}>
                      {m.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={{display: 'flex', gap: '8px'}}>
              <button style={{flex: 1, padding: '12px', borderRadius: '10px',
                              border: '1.5px solid #3AAA35', background: '#E8F5E8',
                              color: '#2D8529', fontSize: '13px', fontWeight: '700', cursor: 'pointer'}}>
                ✅ Mark Next Paid
              </button>
              <button style={{flex: 1, padding: '12px', borderRadius: '10px', border: 'none',
                              background: '#1B2F6E', color: 'white', fontSize: '13px',
                              fontWeight: '700', cursor: 'pointer'}}>
                📥 Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{display: 'flex', minHeight: '100dvh'}}>
        <div className="desktop-sidebar">
          <AdminSidebar active="payments" />
        </div>

        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>

          {/* Top Bar */}
          <div style={{padding: '12px 16px', background: 'white',
                       borderBottom: '1px solid #DDE2EF',
                       display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>
                Payment Milestones
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>
                Track payments for all converted leads
              </div>
            </div>
            <button onClick={() => setShowAddModal(true)}
              style={{padding: '7px 14px', borderRadius: '8px', fontSize: '12px',
                      fontWeight: '700', color: 'white', background: '#1B2F6E',
                      border: 'none', cursor: 'pointer'}}>
              + Add Schedule
            </button>
          </div>

          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* Stats */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                         gap: '10px', marginBottom: '14px'}}>
              {[
                {val: payments.length, lbl: 'Active Bookings', color: '#1B2F6E', bg: '#E8EBF5'},
                {val: totalCollected, lbl: 'Milestones Paid', color: '#3AAA35', bg: '#E8F5E8'},
                {val: totalDue, lbl: 'Due This Month', color: '#2E9FD4', bg: '#E3F4FB'},
                {val: totalOverdue, lbl: 'Overdue', color: '#E53935', bg: '#FFEBEE'},
              ].map((s, i) => (
                <div key={i} style={{background: s.bg, borderRadius: '12px', padding: '14px',
                                     border: `0.5px solid ${s.color}20`}}>
                  <div style={{fontSize: '24px', fontWeight: '800', color: s.color}}>{s.val}</div>
                  <div style={{fontSize: '11px', color: s.color, fontWeight: '600',
                               marginTop: '2px'}}>{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* Overdue Alert */}
            {totalOverdue > 0 && (
              <div style={{background: '#FFEBEE', borderRadius: '12px', padding: '14px',
                           marginBottom: '14px', border: '1px solid #E53935',
                           display: 'flex', alignItems: 'center', gap: '12px'}}>
                <span style={{fontSize: '24px'}}>🚨</span>
                <div>
                  <div style={{fontSize: '13px', fontWeight: '700', color: '#E53935'}}>
                    {totalOverdue} Payment{totalOverdue > 1 ? 's' : ''} Overdue
                  </div>
                  <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
                    Contact customers immediately to collect pending payments
                  </div>
                </div>
              </div>
            )}

            {/* Payment Cards */}
            {payments.map(payment => {
              const paidCount = payment.milestones.filter(m => m.status === 'Paid').length;
              const overdueCount = payment.milestones.filter(m => m.status === 'Overdue').length;
              const dueCount = payment.milestones.filter(m => m.status === 'Due').length;
              const progress = (paidCount / payment.milestones.length) * 100;

              return (
                <div key={payment.id}
                  style={{background: 'white', borderRadius: '14px', padding: '16px',
                           marginBottom: '10px', border: '0.5px solid #DDE2EF',
                           borderLeft: `4px solid ${overdueCount > 0 ? '#E53935' : dueCount > 0 ? '#1B2F6E' : '#3AAA35'}`}}>

                  {/* Header */}
                  <div style={{display: 'flex', alignItems: 'flex-start',
                               justifyContent: 'space-between', marginBottom: '10px'}}>
                    <div>
                      <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>
                        {payment.customer}
                      </div>
                      <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>
                        {payment.project} · {payment.unit}
                      </div>
                      <div style={{fontSize: '11px', color: '#9AA5CC', marginTop: '1px'}}>
                        Agent: {payment.agent} · Booked: {payment.bookedOn}
                      </div>
                    </div>
                    <div style={{textAlign: 'right'}}>
                      <div style={{fontSize: '16px', fontWeight: '800', color: '#C9A84C'}}>
                        {payment.totalAmount}
                      </div>
                      <div style={{fontSize: '11px', color: '#9AA5CC', marginTop: '2px'}}>
                        Total value
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div style={{marginBottom: '10px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between',
                                 marginBottom: '4px'}}>
                      <span style={{fontSize: '11px', color: '#6B7AB5'}}>
                        {paidCount}/{payment.milestones.length} milestones paid
                      </span>
                      <span style={{fontSize: '11px', fontWeight: '700', color: '#3AAA35'}}>
                        {Math.round(progress)}%
                      </span>
                    </div>
                    <div style={{height: '6px', background: '#F0F2F8',
                                 borderRadius: '3px', overflow: 'hidden'}}>
                      <div style={{height: '100%', background: '#3AAA35',
                                   borderRadius: '3px', width: `${progress}%`}}/>
                    </div>
                  </div>

                  {/* Milestone Pills */}
                  <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px'}}>
                    {payment.milestones.map(m => (
                      <span key={m.id} style={{fontSize: '10px', fontWeight: '700',
                                               padding: '3px 8px', borderRadius: '8px',
                                               background: statusConfig[m.status].bg,
                                               color: statusConfig[m.status].color}}>
                        {statusConfig[m.status].icon} {m.name.split('(')[0].trim()}
                      </span>
                    ))}
                  </div>

                  {/* Alerts */}
                  {overdueCount > 0 && (
                    <div style={{background: '#FFEBEE', borderRadius: '8px', padding: '8px 12px',
                                 marginBottom: '10px', fontSize: '12px', fontWeight: '600',
                                 color: '#E53935'}}>
                      🔴 {overdueCount} payment{overdueCount > 1 ? 's' : ''} overdue — Contact customer
                    </div>
                  )}
                  {dueCount > 0 && overdueCount === 0 && (
                    <div style={{background: '#E8EBF5', borderRadius: '8px', padding: '8px 12px',
                                 marginBottom: '10px', fontSize: '12px', fontWeight: '600',
                                 color: '#1B2F6E'}}>
                      ⏰ {dueCount} payment{dueCount > 1 ? 's' : ''} due this month
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{display: 'flex', gap: '8px'}}>
                    <button onClick={() => setSelectedPayment(payment)}
                      style={{flex: 1, padding: '9px', borderRadius: '8px', border: 'none',
                              background: '#1B2F6E', color: 'white', fontSize: '12px',
                              fontWeight: '700', cursor: 'pointer'}}>
                      📋 View Details
                    </button>
                    <button style={{flex: 1, padding: '9px', borderRadius: '8px',
                                    border: '1.5px solid #3AAA35', background: '#E8F5E8',
                                    color: '#2D8529', fontSize: '12px',
                                    fontWeight: '700', cursor: 'pointer'}}>
                      📞 Call Customer
                    </button>
                  </div>
                </div>
              );
            })}
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
          {icon: '💰', label: 'Payments', path: '/admin/payments', active: true},
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
