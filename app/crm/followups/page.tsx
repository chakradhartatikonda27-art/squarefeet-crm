'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CRMFollowups() {
  const router = useRouter();
  const [doneItems, setDoneItems] = useState<string[]>([]);

  const overdue = [
    { id: '1', name: 'Ravi Kumar', note: 'Discuss site visit timing', time: 'Yesterday 3 PM' },
    { id: '2', name: 'Naresh Reddy', note: 'Pricing discussion', time: 'Jun 6, 11 AM' },
  ];

  const today = [
    { id: '3', name: 'Sunita Prasad', note: 'Send project brochure on WhatsApp', time: '2:00 PM' },
    { id: '4', name: 'Venkat Rao', note: 'Loan options discussion', time: '4:30 PM' },
    { id: '5', name: 'Lakshmi Devi', note: 'Confirm site visit slot', time: '5:00 PM' },
  ];

  const completed = [
    { id: '6', name: 'Anil Kumar', note: 'Booking confirmation call', time: 'Done 12:30 PM' },
  ];

  const markDone = (id: string) => setDoneItems(prev => [...prev, id]);

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>

      {/* Header */}
      <div style={{background: '#1B2F6E', padding: '16px 16px 0'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
          <button onClick={() => router.push('/crm/home')}
            style={{color: 'white', background: 'none', border: 'none',
                    fontSize: '22px', cursor: 'pointer', lineHeight: 1}}>←</button>
          <h1 style={{fontSize: '20px', fontWeight: '800', color: 'white', margin: 0}}>Follow-ups</h1>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                     gap: '10px', paddingBottom: '16px'}}>
          {[
            {val: overdue.filter(f => !doneItems.includes(f.id)).length, lbl: 'Overdue', color: '#E53935'},
            {val: today.filter(f => !doneItems.includes(f.id)).length, lbl: 'Due Today', color: '#1B2F6E'},
            {val: completed.length + doneItems.length, lbl: 'Completed', color: '#3AAA35'},
          ].map((s, i) => (
            <div key={i} style={{background: 'white', borderRadius: '12px', padding: '12px', textAlign: 'center'}}>
              <div style={{fontSize: '26px', fontWeight: '800', color: s.color}}>{s.val}</div>
              <div style={{fontSize: '11px', fontWeight: '600', color: s.color, marginTop: '2px'}}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

        {/* Overdue */}
        {overdue.filter(f => !doneItems.includes(f.id)).length > 0 && (
          <div style={{marginBottom: '16px'}}>
            <div style={{fontSize: '12px', fontWeight: '700', color: '#E53935', marginBottom: '8px'}}>
              🔴 Overdue — Call Now
            </div>
            {overdue.filter(f => !doneItems.includes(f.id)).map(item => (
              <div key={item.id} style={{background: 'white', borderRadius: '12px', padding: '14px',
                                         marginBottom: '8px', borderLeft: '4px solid #E53935',
                                         display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{flex: 1}}>
                  <div style={{fontSize: '14px', fontWeight: '700', color: '#1B2F6E'}}>{item.name}</div>
                  <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>{item.note}</div>
                  <div style={{fontSize: '11px', fontWeight: '700', color: '#E53935', marginTop: '4px'}}>
                    Was due: {item.time}
                  </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0}}>
                  <button onClick={() => router.push('/crm/leads')}
                    style={{padding: '8px 16px', borderRadius: '8px', border: 'none',
                            background: '#1B2F6E', color: 'white', fontSize: '13px',
                            fontWeight: '700', cursor: 'pointer'}}>📞 Call</button>
                  <button onClick={() => markDone(item.id)}
                    style={{padding: '8px 16px', borderRadius: '8px',
                            border: '1.5px solid #3AAA35', background: '#E8F5E8',
                            color: '#2D8529', fontSize: '13px', fontWeight: '700', cursor: 'pointer'}}>
                    ✓ Done</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Due Today */}
        <div style={{marginBottom: '16px'}}>
          <div style={{fontSize: '12px', fontWeight: '700', color: '#1B2F6E', marginBottom: '8px'}}>
            🔵 Due Today
          </div>
          {today.filter(f => !doneItems.includes(f.id)).length === 0 ? (
            <div style={{background: 'white', borderRadius: '12px', padding: '24px', textAlign: 'center'}}>
              <div style={{fontSize: '28px', marginBottom: '8px'}}>🎉</div>
              <div style={{fontSize: '14px', fontWeight: '700', color: '#3AAA35'}}>All done!</div>
            </div>
          ) : (
            today.filter(f => !doneItems.includes(f.id)).map(item => (
              <div key={item.id} style={{background: 'white', borderRadius: '12px', padding: '14px',
                                         marginBottom: '8px', borderLeft: '4px solid #1B2F6E',
                                         display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{flex: 1}}>
                  <div style={{fontSize: '14px', fontWeight: '700', color: '#1B2F6E'}}>{item.name}</div>
                  <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>{item.note}</div>
                  <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E', marginTop: '4px'}}>
                    {item.time}
                  </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0}}>
                  <button onClick={() => router.push('/crm/leads')}
                    style={{padding: '8px 16px', borderRadius: '8px', border: 'none',
                            background: '#1B2F6E', color: 'white', fontSize: '13px',
                            fontWeight: '700', cursor: 'pointer'}}>📞 Call</button>
                  <button onClick={() => markDone(item.id)}
                    style={{padding: '8px 16px', borderRadius: '8px',
                            border: '1.5px solid #3AAA35', background: '#E8F5E8',
                            color: '#2D8529', fontSize: '13px', fontWeight: '700', cursor: 'pointer'}}>
                    ✓ Done</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Completed */}
        <div>
          <div style={{fontSize: '12px', fontWeight: '700', color: '#3AAA35', marginBottom: '8px'}}>
            ✅ Completed Today
          </div>
          {[...completed, ...today.filter(f => doneItems.includes(f.id)),
             ...overdue.filter(f => doneItems.includes(f.id))].map(item => (
            <div key={item.id} style={{background: 'white', borderRadius: '12px', padding: '14px',
                                       marginBottom: '8px', borderLeft: '4px solid #3AAA35',
                                       display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.85}}>
              <div style={{flex: 1}}>
                <div style={{fontSize: '14px', fontWeight: '700', color: '#1B2F6E'}}>{item.name}</div>
                <div style={{fontSize: '12px', color: '#6B7AB5', marginTop: '2px'}}>{item.note}</div>
              </div>
              <span style={{fontSize: '12px', fontWeight: '700', color: '#3AAA35', flexShrink: 0}}>
                ✓ Done
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/crm/home'},
          {icon: '👥', label: 'Leads', path: '/crm/leads'},
          {icon: '📅', label: 'Follow-up', path: '/crm/followups', active: true},
          {icon: '📍', label: 'Attendance', path: '/crm/attendance'},
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
