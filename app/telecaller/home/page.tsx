'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TelecallerHome() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col" style={{background: '#F0F2F8'}}>

      {/* Top Bar */}
      <div className="p-4 pb-6" style={{background: '#1B2F6E'}}>
        <p className="text-xs" style={{color: 'rgba(255,255,255,0.6)'}}>Good morning</p>
        <h1 className="text-xl font-bold text-white mt-1">Arjun Reddy</h1>
        <span className="text-xs font-bold px-3 py-1 rounded-full mt-2 inline-block"
              style={{background: '#3AAA35', color: 'white'}}>
          Telecaller
        </span>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2 mx-4 -mt-3">
        {[
          {val: '18', lbl: 'Calls today', color: '#1B2F6E'},
          {val: '14', lbl: 'Connected', color: '#3AAA35'},
          {val: '3', lbl: 'Follow-ups due', color: '#E53935'},
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-3 text-center"
               style={{border: '0.5px solid #DDE2EF'}}>
            <div className="text-2xl font-extrabold" style={{color: s.color}}>{s.val}</div>
            <div className="text-xs mt-1" style={{color: '#9AA5CC'}}>{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* Big Action Buttons */}
      <div className="flex-1 p-4 flex flex-col gap-3 mt-3">

        {/* Call a Lead */}
        <button onClick={() => router.push('/telecaller/call')}
          className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all"
          style={{background: '#E8F5E8', borderColor: '#3AAA35'}}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
               style={{background: '#3AAA35'}}>
            <span className="text-2xl">📞</span>
          </div>
          <div className="flex-1 text-left">
            <div className="text-base font-bold" style={{color: '#2D8529'}}>Call a Lead</div>
            <div className="text-xs mt-0.5" style={{color: '#6B7AB5'}}>12 leads waiting to be called</div>
          </div>
          <span className="text-xl" style={{color: '#2D8529'}}>→</span>
        </button>

        {/* Follow-ups Due */}
        <button onClick={() => router.push('/telecaller/followups')}
          className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all"
          style={{background: '#FFEBEE', borderColor: '#E53935'}}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
               style={{background: '#E53935'}}>
            <span className="text-2xl">⏰</span>
          </div>
          <div className="flex-1 text-left">
            <div className="text-base font-bold" style={{color: '#E53935'}}>Follow-ups Due</div>
            <div className="text-xs mt-0.5" style={{color: '#6B7AB5'}}>3 pending — 1 overdue</div>
          </div>
          <span className="text-xs font-bold px-2 py-1 rounded-full text-white"
                style={{background: '#E53935'}}>3</span>
        </button>

        {/* My Leads */}
        <button
          className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all"
          style={{background: '#E8EBF5', borderColor: '#1B2F6E'}}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
               style={{background: '#1B2F6E'}}>
            <span className="text-2xl">👥</span>
          </div>
          <div className="flex-1 text-left">
            <div className="text-base font-bold" style={{color: '#1B2F6E'}}>My Leads</div>
            <div className="text-xs mt-0.5" style={{color: '#6B7AB5'}}>28 total leads assigned to me</div>
          </div>
          <span className="text-xl" style={{color: '#1B2F6E'}}>→</span>
        </button>

        {/* Attendance */}
        <button onClick={() => router.push('/telecaller/attendance')}
          className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all"
          style={{background: '#FFF3E0', borderColor: '#F57C00'}}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
               style={{background: '#F57C00'}}>
            <span className="text-2xl">📍</span>
          </div>
          <div className="flex-1 text-left">
            <div className="text-base font-bold" style={{color: '#F57C00'}}>Check In / Out</div>
            <div className="text-xs mt-0.5" style={{color: '#6B7AB5'}}>Checked in at 9:14 AM today</div>
          </div>
          <span className="text-xs font-bold px-2 py-1 rounded-full text-white"
                style={{background: '#3AAA35'}}>In</span>
        </button>

      </div>

      {/* Bottom Navigation */}
      <div className="grid grid-cols-4 border-t"
           style={{background: 'white', borderColor: '#DDE2EF'}}>
        {[
          {icon: '🏠', label: 'Home', path: '/telecaller/home', active: true},
          {icon: '📞', label: 'Call', path: '/telecaller/call', active: false},
          {icon: '📅', label: 'Follow-up', path: '/telecaller/followups', active: false},
          {icon: '📍', label: 'Attendance', path: '/telecaller/attendance', active: false},
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
