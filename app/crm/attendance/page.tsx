'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CRMAttendance() {
  const router = useRouter();
  const [checkedIn, setCheckedIn] = useState(true);
  const [checkOutTime, setCheckOutTime] = useState('');

  const handleToggle = () => {
    if (checkedIn) {
      const now = new Date();
      setCheckOutTime(now.toLocaleTimeString('en-IN', {hour: '2-digit', minute: '2-digit', hour12: true}));
    }
    setCheckedIn(!checkedIn);
  };

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>
      <div style={{background: '#1B2F6E', padding: '16px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px'}}>
          <button onClick={() => router.push('/crm/home')}
            style={{color: 'white', background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer'}}>←</button>
          <h1 style={{fontSize: '20px', fontWeight: '800', color: 'white', margin: 0}}>Attendance & GPS</h1>
        </div>
        <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: '0 0 0 34px'}}>Tuesday, 9 June 2026</p>
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>
        <div style={{background: 'white', borderRadius: '16px', padding: '20px',
                     marginBottom: '12px', textAlign: 'center', border: '0.5px solid #DDE2EF'}}>
          <div style={{fontSize: '28px', fontWeight: '800', color: checkedIn ? '#3AAA35' : '#E53935', marginBottom: '6px'}}>
            {checkedIn ? 'Checked In' : 'Checked Out'}
          </div>
          <div style={{fontSize: '13px', color: '#6B7AB5', marginBottom: '16px'}}>
            {checkedIn ? 'Checked in at 9:24 AM · Working now' : `Checked out at ${checkOutTime}`}
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px'}}>
            <div style={{background: '#E8F5E8', borderRadius: '12px', padding: '12px'}}>
              <div style={{fontSize: '11px', fontWeight: '600', color: '#2D8529', marginBottom: '4px'}}>Check In</div>
              <div style={{fontSize: '18px', fontWeight: '800', color: '#3AAA35'}}>9:24 AM</div>
            </div>
            <div style={{background: checkedIn ? '#F7F8FC' : '#FFEBEE', borderRadius: '12px', padding: '12px'}}>
              <div style={{fontSize: '11px', fontWeight: '600', color: checkedIn ? '#9AA5CC' : '#E53935', marginBottom: '4px'}}>Check Out</div>
              <div style={{fontSize: '18px', fontWeight: '800', color: checkedIn ? '#9AA5CC' : '#E53935'}}>
                {checkedIn ? '—' : checkOutTime}
              </div>
            </div>
          </div>
          <button onClick={handleToggle}
            style={{width: '100%', padding: '16px', borderRadius: '14px', border: 'none',
                    fontSize: '16px', fontWeight: '700', color: 'white', cursor: 'pointer',
                    background: checkedIn ? '#E53935' : '#3AAA35'}}>
            {checkedIn ? '📍 Check Out Now' : '📍 Check In Now'}
          </button>
          <p style={{fontSize: '11px', color: '#9AA5CC', marginTop: '10px'}}>GPS location captured automatically</p>
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/crm/home'},
          {icon: '👥', label: 'Leads', path: '/crm/leads'},
          {icon: '📅', label: 'Follow-up', path: '/crm/followups'},
          {icon: '📍', label: 'Attendance', path: '/crm/attendance', active: true},
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
