'use client';
import { useRouter } from 'next/navigation';

export default function SalesLeads() {
  const router = useRouter();

  const leads = [
    { id: '1', name: 'Venkat Rao', mobile: '96543 34567', area: 'Rushikonda', budget: '₹1.2Cr', stage: 'Site Visit', note: 'Very interested, wants 4BHK villa', sbg: '#FFF3E0', sfg: '#E65100' },
    { id: '2', name: 'Naresh Reddy', mobile: '94321 56789', area: 'Bheemili', budget: '₹2.1Cr', stage: 'Negotiation', note: 'Discussing price, wants 5% discount', sbg: '#F3E5F5', sfg: '#6A1B9A' },
    { id: '3', name: 'Durga Prasad', mobile: '91098 89012', area: 'Rushikonda', budget: '₹1.8Cr', stage: 'Site Visit', note: 'Second visit scheduled today', sbg: '#FFF3E0', sfg: '#E65100' },
    { id: '4', name: 'Ramesh Babu', mobile: '90987 90123', area: 'MVP Colony', budget: '₹95L', stage: 'Interested', note: 'Needs loan assistance info', sbg: '#E8F5E8', sfg: '#2D8529' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>
      <div style={{background: '#1B2F6E', padding: '16px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px'}}>
          <button onClick={() => router.push('/sales/home')}
            style={{color: 'white', background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer'}}>←</button>
          <h1 style={{fontSize: '20px', fontWeight: '800', color: 'white', margin: 0}}>My Warm Leads</h1>
        </div>
        <p style={{fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 0 34px'}}>
          {leads.length} leads assigned to me
        </p>
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>
        <div style={{background: 'white', borderRadius: '12px', overflow: 'hidden', border: '0.5px solid #DDE2EF'}}>
          {leads.map((lead, i) => (
            <div key={lead.id} style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF',
                                       background: i % 2 === 0 ? '#F7F8FC' : 'white'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
                <div style={{width: '36px', height: '36px', borderRadius: '50%', background: '#1B2F6E',
                             display: 'flex', alignItems: 'center', justifyContent: 'center',
                             fontSize: '11px', fontWeight: '700', color: 'white', flexShrink: 0}}>
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div style={{flex: 1, minWidth: 0}}>
                  <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{lead.name}</div>
                  <div style={{fontSize: '11px', color: '#6B7AB5'}}>{lead.mobile} · {lead.area} · {lead.budget}</div>
                </div>
                <span style={{fontSize: '10px', fontWeight: '600', padding: '3px 8px', borderRadius: '6px',
                              background: lead.sbg, color: lead.sfg, flexShrink: 0}}>
                  {lead.stage}
                </span>
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5', padding: '6px 10px', background: '#F7F8FC',
                           borderRadius: '8px', marginBottom: '8px'}}>
                📝 {lead.note}
              </div>
              <div style={{display: 'flex', gap: '6px'}}>
                <button style={{flex: 1, padding: '8px', borderRadius: '8px', border: 'none',
                                background: '#1B2F6E', color: 'white', fontSize: '11px',
                                fontWeight: '700', cursor: 'pointer'}}>📞 Call</button>
                <button style={{flex: 1, padding: '8px', borderRadius: '8px',
                                border: '1.5px solid #F57C00', background: '#FFF3E0',
                                color: '#F57C00', fontSize: '11px', fontWeight: '700', cursor: 'pointer'}}>
                  📍 Site Visit</button>
                <button style={{flex: 1, padding: '8px', borderRadius: '8px',
                                border: '1.5px solid #3AAA35', background: '#E8F5E8',
                                color: '#2D8529', fontSize: '11px', fontWeight: '700', cursor: 'pointer'}}>
                  ✅ Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/sales/home'},
          {icon: '🔥', label: 'Leads', path: '/sales/leads', active: true},
          {icon: '📍', label: 'Visits', path: '/sales/home'},
          {icon: '📍', label: 'Attendance', path: '/sales/attendance'},
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
