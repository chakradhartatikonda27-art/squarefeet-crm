'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Attendance() {
  const router = useRouter();
  const [checkedIn, setCheckedIn] = useState(true);
  const [checkInTime] = useState('9:14 AM');
  const [checkOutTime, setCheckOutTime] = useState('');

  const handleToggle = () => {
    if (checkedIn) {
      const now = new Date();
      const time = now.toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit', hour12: true
      });
      setCheckOutTime(time);
    }
    setCheckedIn(!checkedIn);
  };

  const weekData = [
    { day: 'Monday', date: 'Jun 2', in: '9:10 AM', out: '6:05 PM', hours: '8h 55m', status: 'done' },
    { day: 'Tuesday', date: 'Jun 3', in: '9:24 AM', out: '6:14 PM', hours: '8h 50m', status: 'done' },
    { day: 'Wednesday', date: 'Jun 4', in: '9:05 AM', out: '6:20 PM', hours: '9h 15m', status: 'done' },
    { day: 'Thursday', date: 'Jun 5', in: '9:30 AM', out: '6:00 PM', hours: '8h 30m', status: 'done' },
    { day: 'Friday', date: 'Jun 6', in: '9:14 AM', out: checkedIn ? 'Ongoing' : checkOutTime, hours: checkedIn ? 'Active' : '5h 32m', status: checkedIn ? 'active' : 'done' },
  ];

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8',
                 display: 'flex', flexDirection: 'column'}}>

      {/* Header */}
      <div style={{background: '#1B2F6E', padding: '16px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px'}}>
          <button onClick={() => router.push('/telecaller/home')}
            style={{color: 'white', background: 'none', border: 'none',
                    fontSize: '22px', cursor: 'pointer', lineHeight: 1}}>
            ←
          </button>
          <h1 style={{fontSize: '20px', fontWeight: '800', color: 'white', margin: 0}}>
            Attendance & GPS
          </h1>
        </div>
        <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.6)',
                   margin: '0 0 0 34px'}}>
          Tuesday, 9 June 2026
        </p>
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

        {/* Check In/Out Card */}
        <div style={{
          background: 'white', borderRadius: '16px', padding: '20px',
          marginBottom: '12px', textAlign: 'center',
          border: '0.5px solid #DDE2EF',
        }}>
          {/* Status */}
          <div style={{
            fontSize: '28px', fontWeight: '800',
            color: checkedIn ? '#3AAA35' : '#E53935',
            marginBottom: '6px',
          }}>
            {checkedIn ? 'Checked In' : 'Checked Out'}
          </div>

          <div style={{fontSize: '13px', color: '#6B7AB5', marginBottom: '16px'}}>
            {checkedIn
              ? `Checked in at ${checkInTime} · Working now`
              : `Checked out at ${checkOutTime}`}
          </div>

          {/* Time Display */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '10px', marginBottom: '16px',
          }}>
            <div style={{background: '#E8F5E8', borderRadius: '12px', padding: '12px'}}>
              <div style={{fontSize: '11px', fontWeight: '600',
                           color: '#2D8529', marginBottom: '4px'}}>
                Check In
              </div>
              <div style={{fontSize: '18px', fontWeight: '800', color: '#3AAA35'}}>
                {checkInTime}
              </div>
            </div>
            <div style={{
              background: checkedIn ? '#F7F8FC' : '#FFEBEE',
              borderRadius: '12px', padding: '12px',
            }}>
              <div style={{fontSize: '11px', fontWeight: '600',
                           color: checkedIn ? '#9AA5CC' : '#E53935',
                           marginBottom: '4px'}}>
                Check Out
              </div>
              <div style={{fontSize: '18px', fontWeight: '800',
                           color: checkedIn ? '#9AA5CC' : '#E53935'}}>
                {checkedIn ? '—' : checkOutTime}
              </div>
            </div>
          </div>

          {/* Toggle Button */}
          <button onClick={handleToggle}
            style={{
              width: '100%', padding: '16px', borderRadius: '14px',
              border: 'none', fontSize: '16px', fontWeight: '700',
              color: 'white', cursor: 'pointer',
              background: checkedIn ? '#E53935' : '#3AAA35',
            }}>
            {checkedIn ? '📍 Check Out Now' : '📍 Check In Now'}
          </button>

          <p style={{fontSize: '11px', color: '#9AA5CC', marginTop: '10px'}}>
            GPS location captured automatically
          </p>
        </div>

        {/* GPS Location Card */}
        <div style={{
          background: 'white', borderRadius: '16px',
          marginBottom: '12px', overflow: 'hidden',
          border: '0.5px solid #DDE2EF',
        }}>
          <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
            <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
              📍 Current Location
            </div>
          </div>
          {/* Map Placeholder */}
          <div style={{
            height: '140px', background: '#E3F4FB',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Grid lines */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(46,159,212,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(46,159,212,0.15) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}/>
            {/* Location dot */}
            <div style={{position: 'relative', zIndex: 1, textAlign: 'center'}}>
              <div style={{
                width: '20px', height: '20px', borderRadius: '50%',
                background: '#1B2F6E', border: '3px solid white',
                margin: '0 auto 8px',
                boxShadow: '0 0 0 6px rgba(27,47,110,0.2)',
              }}/>
              <div style={{
                background: 'white', borderRadius: '8px',
                padding: '6px 12px', fontSize: '12px',
                fontWeight: '600', color: '#1B2F6E',
              }}>
                Maddilapalem, Vizag
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '4px'}}>
                17.7231° N, 83.3012° E
              </div>
            </div>
          </div>
        </div>

        {/* This Week */}
        <div style={{
          background: 'white', borderRadius: '16px',
          overflow: 'hidden', border: '0.5px solid #DDE2EF',
        }}>
          <div style={{padding: '12px 14px', borderBottom: '1px solid #DDE2EF'}}>
            <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
              This Week
            </div>
          </div>
          {weekData.map((day, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', padding: '12px 14px',
              borderBottom: i < weekData.length - 1 ? '1px solid #DDE2EF' : 'none',
              background: day.status === 'active' ? '#E8F5E8' : 'white',
            }}>
              <div style={{width: '80px', flexShrink: 0}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                  {day.day}
                </div>
                <div style={{fontSize: '11px', color: '#9AA5CC'}}>
                  {day.date}
                </div>
              </div>
              <div style={{flex: 1}}>
                <div style={{fontSize: '12px', color: '#6B7AB5'}}>
                  {day.in} — {day.out}
                </div>
              </div>
              <div style={{
                fontSize: '12px', fontWeight: '700', flexShrink: 0,
                color: day.status === 'active' ? '#3AAA35' : '#1B2F6E',
              }}>
                {day.hours}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Nav */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        background: 'white', borderTop: '1px solid #DDE2EF', zIndex: 100,
      }}>
        {[
          {icon: '🏠', label: 'Home', path: '/telecaller/home'},
          {icon: '📞', label: 'Call', path: '/telecaller/call'},
          {icon: '📅', label: 'Follow-up', path: '/telecaller/followups'},
          {icon: '📍', label: 'Attendance', path: '/telecaller/attendance', active: true},
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

    </div>
  );
}
