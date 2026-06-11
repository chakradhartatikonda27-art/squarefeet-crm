'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CallScreen() {
  const router = useRouter();
  const [callStarted, setCallStarted] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showFollowup, setShowFollowup] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');

  const lead = {
    name: 'Ravi Kumar',
    mobile: '+91 98765 12345',
    area: 'Maddilapalem, Vizag',
    budget: '₹65 Lakhs',
    project: '3BHK Apartment · Gajuwaka Greens',
    source: 'Facebook Ad',
    score: 'Hot',
    calls: 0,
  };

  const statuses = [
    { key: 'CONNECTED', label: 'Connected', bg: '#E8F5E8', fg: '#2D8529', border: '#3AAA35', icon: '✅' },
    { key: 'INTERESTED', label: 'Interested', bg: '#E3F4FB', fg: '#1565C0', border: '#2E9FD4', icon: '🔥' },
    { key: 'BUSY', label: 'Busy / Call Back', bg: '#FFF3E0', fg: '#E65100', border: '#F57C00', icon: '⏰' },
    { key: 'NOT_PICKED', label: 'Not Picked Up', bg: '#FFEBEE', fg: '#B71C1C', border: '#E53935', icon: '📵' },
    { key: 'NOT_INTERESTED', label: 'Not Interested', bg: '#F5F5F5', fg: '#616161', border: '#BDBDBD', icon: '🚫' },
  ];

  const followupTimes = [
    'Tomorrow 10 AM',
    'Tomorrow 3 PM',
    'Day after 11 AM',
    'Pick a time',
  ];

  const handleStatusSelect = (key: string) => {
    setSelectedStatus(key);
    setShowFollowup(['INTERESTED', 'BUSY', 'CONNECTED'].includes(key));
  };

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8', display: 'flex', flexDirection: 'column'}}>

      {/* Header */}
      <div style={{background: '#1B2F6E', padding: '14px 16px 20px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px'}}>
          <button onClick={() => router.push('/telecaller/home')}
            style={{color: 'white', background: 'none', border: 'none',
                    fontSize: '22px', cursor: 'pointer', lineHeight: 1}}>←</button>
          <span style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)'}}>Next lead to call</span>
        </div>

        {/* Lead Info */}
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <div style={{width: '52px', height: '52px', borderRadius: '50%', background: '#2E9FD4',
                       display: 'flex', alignItems: 'center', justifyContent: 'center',
                       fontSize: '18px', fontWeight: '800', color: 'white', flexShrink: 0}}>
            {lead.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div style={{flex: 1}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px'}}>
              <h1 style={{fontSize: '20px', fontWeight: '800', color: 'white', margin: 0}}>
                {lead.name}
              </h1>
              <span style={{fontSize: '10px', fontWeight: '700', padding: '2px 7px',
                            borderRadius: '8px', background: '#FFEBEE', color: '#E53935'}}>
                🔴 Hot
              </span>
            </div>
            <div style={{fontSize: '12px', color: 'rgba(255,255,255,0.6)'}}>
              {lead.area} · {lead.budget}
            </div>
          </div>
        </div>
      </div>

      <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

        {/* Lead Details Card */}
        <div style={{background: 'white', borderRadius: '14px', padding: '14px',
                     marginBottom: '12px', border: '0.5px solid #DDE2EF'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
            {[
              {lbl: 'Mobile', val: lead.mobile},
              {lbl: 'Budget', val: lead.budget},
              {lbl: 'Project', val: lead.project},
              {lbl: 'Source', val: lead.source},
              {lbl: 'Previous calls', val: 'First contact'},
              {lbl: 'Area', val: lead.area},
            ].map((item, i) => (
              <div key={i}>
                <div style={{fontSize: '10px', color: '#9AA5CC', marginBottom: '2px'}}>{item.lbl}</div>
                <div style={{fontSize: '12px', fontWeight: '600', color: '#1B2F6E'}}>{item.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call Button */}
        {!callStarted && (
          <button onClick={() => setCallStarted(true)}
            style={{width: '100%', padding: '18px', borderRadius: '16px', border: 'none',
                    background: '#3AAA35', color: 'white', fontSize: '18px', fontWeight: '800',
                    cursor: 'pointer', marginBottom: '10px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            <span style={{fontSize: '24px'}}>📞</span>
            Call {lead.mobile}
          </button>
        )}

        {/* WhatsApp Button */}
        {!callStarted && (
          <button style={{width: '100%', padding: '14px', borderRadius: '14px',
                          border: '2px solid #3AAA35', background: '#E8F5E8',
                          color: '#2D8529', fontSize: '15px', fontWeight: '700',
                          cursor: 'pointer', display: 'flex',
                          alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            <span style={{fontSize: '20px'}}>💬</span>
            Send WhatsApp Message
          </button>
        )}

        {/* After Call — Status Selection */}
        {callStarted && (
          <div>
            <div style={{background: '#E8EBF5', borderRadius: '12px', padding: '12px 14px',
                         marginBottom: '12px', textAlign: 'center'}}>
              <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E'}}>
                📞 Call in progress with {lead.name}
              </div>
              <div style={{fontSize: '11px', color: '#6B7AB5', marginTop: '3px'}}>
                Select outcome after the call ends
              </div>
            </div>

            {/* Status Buttons */}
            <div style={{fontSize: '12px', fontWeight: '700', color: '#6B7AB5',
                         marginBottom: '8px'}}>What happened on this call?</div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px',
                         marginBottom: '12px'}}>
              {statuses.map(status => (
                <button key={status.key}
                  onClick={() => handleStatusSelect(status.key)}
                  style={{padding: '14px 10px', borderRadius: '12px',
                          border: `2px solid ${selectedStatus === status.key ? status.border : '#DDE2EF'}`,
                          background: selectedStatus === status.key ? status.bg : 'white',
                          cursor: 'pointer', textAlign: 'center',
                          transform: selectedStatus === status.key ? 'scale(1.02)' : 'scale(1)'}}>
                  <div style={{fontSize: '20px', marginBottom: '4px'}}>{status.icon}</div>
                  <div style={{fontSize: '12px', fontWeight: '700',
                               color: selectedStatus === status.key ? status.fg : '#1B2F6E'}}>
                    {status.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Notes */}
            {selectedStatus && (
              <div style={{marginBottom: '12px'}}>
                <div style={{fontSize: '12px', fontWeight: '700', color: '#6B7AB5', marginBottom: '6px'}}>
                  Add notes (optional)
                </div>
                <textarea value={notes} onChange={e => setNotes(e.target.value)}
                  placeholder="What did the customer say? Any special requirements?"
                  rows={3}
                  style={{width: '100%', padding: '12px', borderRadius: '10px',
                          border: '1.5px solid #DDE2EF', fontSize: '13px',
                          color: '#1A1A2E', outline: 'none', resize: 'none',
                          boxSizing: 'border-box', background: 'white'}}/>
              </div>
            )}

            {/* Follow-up Scheduler */}
            {showFollowup && (
              <div style={{background: '#E8EBF5', borderRadius: '12px', padding: '14px',
                           marginBottom: '12px'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E', marginBottom: '10px'}}>
                  📅 Schedule Follow-up
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
                  {followupTimes.map(time => (
                    <button key={time} onClick={() => setSelectedTime(time)}
                      style={{padding: '10px', borderRadius: '10px', fontSize: '12px',
                              fontWeight: '600', cursor: 'pointer',
                              border: `1.5px solid ${selectedTime === time ? '#1B2F6E' : '#DDE2EF'}`,
                              background: selectedTime === time ? '#1B2F6E' : 'white',
                              color: selectedTime === time ? 'white' : '#6B7AB5'}}>
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Save Button */}
            {selectedStatus && (
              <button onClick={() => router.push('/telecaller/home')}
                style={{width: '100%', padding: '16px', borderRadius: '14px', border: 'none',
                        background: '#1B2F6E', color: 'white', fontSize: '16px',
                        fontWeight: '700', cursor: 'pointer'}}>
                ✅ Save & Next Lead →
              </button>
            )}
          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                   background: 'white', borderTop: '1px solid #DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/telecaller/home'},
          {icon: '📞', label: 'Call', path: '/telecaller/call', active: true},
          {icon: '📅', label: 'Follow-up', path: '/telecaller/followups'},
          {icon: '📍', label: 'Attendance', path: '/telecaller/attendance'},
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
