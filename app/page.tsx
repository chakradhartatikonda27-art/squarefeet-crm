'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('mobile');
  const [role, setRole] = useState('Admin');
  const [loading, setLoading] = useState(false);

  const roles = ['Admin', 'Team Leader', 'CRM', 'Telecaller', 'Sales Exec'];

  const handleSendOtp = () => {
    if (mobile.length < 10) return;
    setLoading(true);
    setTimeout(() => { setStep('otp'); setLoading(false); }, 1000);
  };

  const handleLogin = () => {
    if (otp.length < 4) return;
    setLoading(true);
    setTimeout(() => {
      if (role === 'Telecaller' || role === 'Sales Exec' || role === 'CRM') {
        router.push('/telecaller/home');
      } else {
        router.push('/admin/dashboard');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center"
         style={{background: '#F0F2F8'}}>
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm"
           style={{boxShadow: '0 4px 24px rgba(27,47,110,0.10)'}}>

        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-xl mx-auto mb-3 flex items-center justify-center"
               style={{background: '#E8EBF5'}}>
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <rect x="3" y="22" width="9" height="15" rx="1.5" fill="#1B2F6E"/>
              <rect x="15" y="14" width="9" height="23" rx="1.5" fill="#2E9FD4"/>
              <rect x="27" y="5" width="10" height="32" rx="1.5" fill="#3AAA35"/>
              <path d="M1 24L20 9L39 24" stroke="#1B2F6E" strokeWidth="2.5"
                    fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold" style={{color: '#1B2F6E'}}>
            Square Feet India
          </h1>
          <p className="text-sm font-semibold" style={{color: '#3AAA35'}}>
            Projects & Developers
          </p>
          <p className="text-xs mt-1" style={{color: '#9AA5CC'}}>
            — CRM Platform —
          </p>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold mb-2" style={{color: '#6B7AB5'}}>
            Sign in as
          </p>
          <div className="flex flex-wrap gap-2">
            {roles.map(r => (
              <button key={r} onClick={() => setRole(r)}
                className="px-3 py-1 rounded-full text-xs font-semibold border transition-all"
                style={{
                  background: role === r ? '#E8EBF5' : 'white',
                  color: role === r ? '#1B2F6E' : '#9AA5CC',
                  borderColor: role === r ? '#1B2F6E' : '#DDE2EF',
                }}>
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="text-xs font-semibold block mb-1"
                 style={{color: '#6B7AB5'}}>
            Mobile number
          </label>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            disabled={step === 'otp'}
            className="w-full px-3 py-2 rounded-lg text-sm border outline-none"
            style={{borderColor: '#DDE2EF', color: '#1A1A2E'}}
          />
        </div>

        {step === 'otp' && (
          <div className="mb-3">
            <label className="text-xs font-semibold block mb-1"
                   style={{color: '#6B7AB5'}}>
              Enter OTP
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg text-sm border outline-none"
                style={{borderColor: '#DDE2EF', color: '#1A1A2E'}}
              />
              <button
                onClick={() => setStep('mobile')}
                className="px-3 py-2 rounded-lg text-xs font-semibold border"
                style={{borderColor: '#DDE2EF', color: '#6B7AB5'}}>
                Resend
              </button>
            </div>
          </div>
        )}

        {step === 'mobile' ? (
          <button
            onClick={handleSendOtp}
            disabled={loading || mobile.length < 10}
            className="w-full py-3 rounded-xl text-sm font-bold text-white mt-2"
            style={{background: loading ? '#9AA5CC' : '#1B2F6E'}}>
            {loading ? 'Sending OTP...' : 'Send OTP →'}
          </button>
        ) : (
          <button
            onClick={handleLogin}
            disabled={loading || otp.length < 4}
            className="w-full py-3 rounded-xl text-sm font-bold text-white mt-2"
            style={{background: loading ? '#9AA5CC' : '#3AAA35'}}>
            {loading ? 'Signing in...' : 'Sign in →'}
          </button>
        )}

        <p className="text-center text-xs mt-4" style={{color: '#9AA5CC'}}>
          Square Feet India CRM · Visakhapatnam
        </p>
      </div>
    </div>
  );
}
