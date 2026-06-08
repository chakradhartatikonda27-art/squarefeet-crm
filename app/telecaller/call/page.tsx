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
    lastCall: 'First contact',
  };

  const statuses = [
    { key: 'CONNECTED', label: 'Connected', bg: '#E8F5E8', fg: '#2D8529', border: '#3AAA35' },
    { key: 'INTERESTED', label: 'Interested', bg: '#E3F4FB', fg: '#1565C0', border: '#2E9FD4' },
    { key: 'BUSY', label: 'Busy / Call Back', bg: '#FFF3E0', fg: '#E65100', border: '#F57C00' },
    { key: 'NOT_CONNECTED', label: 'Not Picked Up', bg: '#FFEBEE', fg: '#B71C1C', border: '#E53935' },
    { key: 'NOT_INTERESTED', label: 'Not Interested', bg: '#F5F5F5', fg: '#616161', border: '#BDBDBD' },
  ];

  const followupTimes = [
    'Tomorrow 10 AM',
    'Tomorrow 3 PM',
    'Day after 11 AM',
    'Pick a time',
  ];

  const handleStatusSelect = (key) => {
    setSelectedStatus(key);
    if (key === 'INTERESTED' || key === 'BUSY' || key === 'CONNECTED') {
      setShowFollowup(true);
    } else {
      setShowFollowup(false);
    }
  };

  const handleSave = () => {
    router.push('/telecaller/home');
  };

  return (
    <div className="min-h-screen flex flex-col" style={{background: '#F0F2F8'}}>

      {/* Header */}
      <div className="p-4 pb-5" style={{background: '#2D8529'}}>
        <div className="flex items-center gap-3 mb-3">
          <button onClick={() => router.push('/telecaller/home')}
            className="text-white text-xl">←</button>
          <p className="text-xs font-semibold" style={{color: 'rgba(255,255,255,0.7)'}}>
            Next lead to call
          </p>
        </div>
        <h1 className="text-2xl font-bold text-white">{lead.name}</h1>
        <span className="text-xs font-bold px-3 py-1 rounded-full mt-2 inline-block"
              style={{background: '#2E9FD4', color: 'white'}}>
          New Lead
        </span>
      </div>

      <div className="flex-1 p-4 flex flex-col gap-3">

        {/* Lead Info Card */}
        <div className="bg-white rounded-2xl p-4"
             style={{border: '0.5px solid #DDE2EF'}}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold text-white flex-shrink-0"
                 style={{background: '#1B2F6E'}}>
              RK
            </div>
            <div>
              <div className="text-base font-bold" style={{color: '#1B2F6E'}}>{lead.name}</div>
              <div className="text-xs" style={{color: '#6B7AB5'}}>{lead.area}</div>
              <div className="text-sm font-bold mt-0.5" style={{color: '#3AAA35'}}>
                Budget: {lead.budget}
              </div>
            </div>
          </div>

          <div className="rounded-xl p-3 mb-3" style={{background: '#F7F8FC'}}>
            <div className="text-xs font-semibold mb-1" style={{color: '#9AA5CC'}}>
              Interested in
            </div>
            <div className="text-sm font-bold" style={{color: '#1B2F6E'}}>
              {lead.project}
            </div>
            <div className="text-xs mt-1" style={{color: '#9AA5CC'}}>
              Source: {lead.source}
            </div>
          </div>

          <div className="text-xs font-semibold mb-3" style={{color: '#6B7AB5'}}>
            Previous calls: {lead.lastCall}
          </div>

          {/* Call Button */}
          {!callStarted ? (
            <button
              onClick={() => setCallStarted(true)}
              className="w-full py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center gap-3"
              style={{background: '#3AAA35'}}>
              <span className="text-xl">📞</span>
              Call {lead.mobile}
            </button>
          ) : (
            <div className="w-full py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center gap-3"
                 style={{background: '#1B2F6E'}}>
              <span className="text-xl">📞</span>
              Calling... {lead.mobile}
            </div>
          )}

          {/* WhatsApp Button */}
          <button className="w-full py-3 rounded-2xl text-sm font-bold mt-2 flex items-center justify-center gap-2"
            style={{background: '#E8F5E8', color: '#2D8529', border: '1.5px solid #3AAA35'}}>
            <span>💬</span>
            Send WhatsApp Message
          </button>
        </div>

        {/* Status Buttons — appear after call started */}
        {callStarted && (
          <div className="bg-white rounded-2xl p-4"
               style={{border: '0.5px solid #DDE2EF'}}>
            <div className="text-sm font-bold text-center mb-3" style={{color: '#1B2F6E'}}>
              What happened on the call?
            </div>
            <div className="grid grid-cols-2 gap-2">
              {statuses.map(s => (
                <button key={s.key}
                  onClick={() => handleStatusSelect(s.key)}
                  className="py-3 px-2 rounded-xl text-sm font-bold border-2 transition-all"
                  style={{
                    background: selectedStatus === s.key ? s.fg : s.bg,
                    color: selectedStatus === s.key ? 'white' : s.fg,
                    borderColor: s.border,
                  }}>
                  {s.label}
                </button>
              ))}
            </div>

            {/* Notes */}
            {selectedStatus && (
              <div className="mt-3">
                <label className="text-xs font-semibold block mb-1"
                       style={{color: '#6B7AB5'}}>
                  Call notes (optional)
                </label>
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="What was discussed..."
                  rows={2}
                  className="w-full px-3 py-2 rounded-xl text-sm border outline-none resize-none"
                  style={{borderColor: '#DDE2EF', color: '#1A1A2E'}}
                />
              </div>
            )}
          </div>
        )}

        {/* Follow-up Scheduler */}
        {showFollowup && (
          <div className="bg-white rounded-2xl p-4"
               style={{border: '0.5px solid #DDE2EF', borderLeftWidth: 4, borderLeftColor: '#1B2F6E'}}>
            <div className="text-sm font-bold mb-3" style={{color: '#1B2F6E'}}>
              Schedule follow-up call
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {followupTimes.map(time => (
                <button key={time}
                  onClick={() => setSelectedTime(time)}
                  className="py-3 px-2 rounded-xl text-sm font-semibold border-2 transition-all"
                  style={{
                    background: selectedTime === time ? '#E8EBF5' : 'white',
                    color: selectedTime === time ? '#1B2F6E' : '#6B7AB5',
                    borderColor: selectedTime === time ? '#1B2F6E' : '#DDE2EF',
                  }}>
                  {time}
                </button>
              ))}
            </div>

            <button
              onClick={handleSave}
              disabled={!selectedStatus}
              className="w-full py-4 rounded-2xl text-base font-bold text-white"
              style={{background: selectedStatus ? '#1B2F6E' : '#9AA5CC'}}>
              Save & Next Lead →
            </button>
          </div>
        )}

        {/* Save without followup */}
        {callStarted && selectedStatus && !showFollowup && (
          <button
            onClick={handleSave}
            className="w-full py-4 rounded-2xl text-base font-bold text-white"
            style={{background: '#1B2F6E'}}>
            Save & Next Lead →
          </button>
        )}

      </div>

      {/* Bottom Nav */}
      <div className="grid grid-cols-4 border-t"
           style={{background: 'white', borderColor: '#DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/telecaller/home'},
          {icon: '📞', label: 'Call', path: '/telecaller/call', active: true},
          {icon: '📅', label: 'Follow-up', path: '/telecaller/followups'},
          {icon: '📍', label: 'Attendance', path: '/telecaller/attendance'},
        ].map((item, i) => (
          <button key={i} onClick={() => router.push(item.path)}
            className="flex flex-col items-center py-3 gap-1 text-xs font-semibold"
            style={{color: item.active ? '#1B2F6E' : '#9AA5CC'}}>
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

    </div>
  );
}
