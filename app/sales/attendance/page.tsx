'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SalesAttendance() {
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

  const weekData = [
    { day: 'Monday', date: 'Jun 2', in: '9:05 AM', out: '6:30 PM', hours: '9h 25m' },
    { day: 'Tuesday', date: 'Jun 3', in: '9:15 AM', out: '6:45 PM', hours: '9h 30m' },
    { day: 'Wednesday', date: 'Jun 4', in: '9:00 AM', out: '7:00 PM', hours: '10h 00m' },
    { day: 'Thursday', date: 'Jun 5', in: '9:20 AM', out: '6:15 PM', hours: '8h 55m' },
    { day: 'Friday', date: 'Jun 6', in: '9:45 AM', out: checkedIn ? 'Ongoing' : checkOutTime, hours: checkedIn ? 'Active' : '5h 12m' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>
      <div style={{background: '#1B2F6E', padding: '16px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px'}}>
          <button onClick={() => router.push('/sales/home')}
            style={{color: 'white', background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer'}}>←</button>
          <h1 style={{fontSize: '20px', fontWeight: '800', color: 'white', margin: 0}}>Attendance & GPS</h1>
        </div>
        <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: '0 0 0 34px'}}>Tuesday, 9 June 2026</p>
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>
        <div style={{background: 'white', borderRadius: '16px', padding: '20px',
                     marginBottom: '12px', textAlign: 'center', border: '0.5px solid #DDE2EF'}}>
          <div style={{fontSize: '28px', fontWeight: '800',
                       color: checkedIn ? '#3AAA35' : '#E53935', marginBottom: '6px'}}>
            {checkedIn ? 'Checked In' : 'Checked Out'}
          </div>
          <div style={{fontSize: '13px', color: '#6B7AB5', marginBottom: '16px'}}>
            {checkedIn ? 'Checked in at 9:45 AM · Working now' : `Checked out at ${checkOutTime}`}
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px'}}>
            <div style={{background: '#E8F5E8', borderRadius: '12px', padding: '12px'}}>
              <div style={{fontSize: '11px', fontWeight: '600', color: '#2D8529', marginBottom: '4px'}}>Check In</div>
              <div style={{fontSize: '18px', fontWeight: '800', color: '#3AAA35'}}>9:45 AM</div>
            </div>
            <div style={{background: checkedIn ? '#F7F8FC' : '#FFEBEE', borderRadius: '12px', padding: '12px'}}>
              <div style={{fontSize: '11px', fontWeight: '600',
                           color: checkedIn ? '#9AA5CC' : '#E53935', marginBottom: '4px'}}>Check Out</div>
              <div style={{fontSize: '18px', fontWeight: '800',
                           color: checkedIn ? '#9AA5CC' : '#E53935'}}>
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

        {/* This Week */}
        <div style={{background: 'white', borderRadius: '16px', overflow: 'hidden', border: '0.5px solid #DDE2EF'}}>
          <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
            <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>This Week</div>
          </div>
          {weekData.map((day, i) => (
            <div key={i} style={{display: 'flex', alignItems: 'center', padding: '12px 14px',
                                 borderBottom: i < weekData.length - 1 ? '1px solid #DDE2EF' : 'none',
                                 background: day.hours === 'Active' ? '#E8F5E8' : 'white'}}>
              <div style={{width: '90px', flexShrink: 0}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>{day.day}</div>
                <div style={{fontSize: '11px', color: '#9AA5CC'}}>{day.date}</div>
              </div>
              <div style={{flex: 1, fontSize: '12px', color: '#6B7AB5'}}>{day.in} — {day.out}</div>
              <div style={{fontSize: '12px', fontWeight: '700', flexShrink: 0,
                           color: day.hours === 'Active' ? '#3AAA35' : '#1B2F6E'}}>
                {day.hours}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/sales/home'},
          {icon: '🔥', label: 'Leads', path: '/sales/leads'},
          {icon: '📍', label: 'Visits', path: '/sales/home'},
          {icon: '📍', label: 'Attendance', path: '/sales/attendance', active: true},
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
