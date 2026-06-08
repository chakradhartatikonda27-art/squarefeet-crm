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
    <div style={{
      minHeight: '100dvh',
      width: '100%',
      background: '#1B2F6E',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '32px 24px',
        width: '100%',
        maxWidth: '400px',
      }}>

        {/* Logo */}
        <div style={{textAlign: 'center', marginBottom: '24px'}}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '16px',
            background: '#E8EBF5', display: 'flex', alignItems: 'center',
            justifyContent: 'center', margin: '0 auto 12px',
          }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="3" y="22" width="9" height="15" rx="1.5" fill="#1B2F6E"/>
              <rect x="15" y="14" width="9" height="23" rx="1.5" fill="#2E9FD4"/>
              <rect x="27" y="5" width="10" height="32" rx="1.5" fill="#3AAA35"/>
              <path d="M1 24L20 9L39 24" stroke="#1B2F6E" strokeWidth="2.5"
                    fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 style={{fontSize: '22px', fontWeight: '800', color: '#1B2F6E', margin: 0}}>
            Square Feet India
          </h1>
          <p style={{fontSize: '14px', fontWeight: '600', color: '#3AAA35', margin: '4px 0 0'}}>
            Projects & Developers
          </p>
          <p style={{fontSize: '12px', color: '#9AA5CC', margin: '2px 0 0'}}>
            — CRM Platform —
          </p>
        </div>

        {/* Role Selector */}
        <div style={{marginBottom: '16px'}}>
          <p style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5', marginBottom: '8px'}}>
            Sign in as
          </p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
            {roles.map(r => (
              <button key={r} onClick={() => setRole(r)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: `1.5px solid ${role === r ? '#1B2F6E' : '#DDE2EF'}`,
                  background: role === r ? '#E8EBF5' : 'white',
                  color: role === r ? '#1B2F6E' : '#9AA5CC',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}>
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Input */}
        <div style={{marginBottom: '12px'}}>
          <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                         display: 'block', marginBottom: '6px'}}>
            Mobile number
          </label>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            disabled={step === 'otp'}
            style={{
              width: '100%', padding: '12px 14px',
              borderRadius: '12px', fontSize: '15px',
              border: '1.5px solid #DDE2EF', color: '#1A1A2E',
              outline: 'none', background: 'white',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* OTP Input */}
        {step === 'otp' && (
          <div style={{marginBottom: '12px'}}>
            <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                           display: 'block', marginBottom: '6px'}}>
              Enter OTP
            </label>
            <div style={{display: 'flex', gap: '8px'}}>
              <input
                type="number"
                placeholder="Enter OTP"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                style={{
                  flex: 1, padding: '12px 14px',
                  borderRadius: '12px', fontSize: '15px',
                  border: '1.5px solid #DDE2EF', color: '#1A1A2E',
                  outline: 'none', background: 'white',
                }}
              />
              <button onClick={() => setStep('mobile')}
                style={{
                  padding: '12px 16px', borderRadius: '12px',
                  border: '1.5px solid #DDE2EF', background: 'white',
                  color: '#6B7AB5', fontSize: '13px', fontWeight: '600',
                  cursor: 'pointer',
                }}>
                Resend
              </button>
            </div>
          </div>
        )}

        {/* Button */}
        {step === 'mobile' ? (
          <button onClick={handleSendOtp}
            disabled={loading || mobile.length < 10}
            style={{
              width: '100%', padding: '14px',
              borderRadius: '14px', fontSize: '16px',
              fontWeight: '700', color: 'white',
              background: loading || mobile.length < 10 ? '#9AA5CC' : '#1B2F6E',
              border: 'none', cursor: 'pointer', marginTop: '8px',
            }}>
            {loading ? 'Sending OTP...' : 'Send OTP →'}
          </button>
        ) : (
          <button onClick={handleLogin}
            disabled={loading || otp.length < 4}
            style={{
              width: '100%', padding: '14px',
              borderRadius: '14px', fontSize: '16px',
              fontWeight: '700', color: 'white',
              background: loading || otp.length < 4 ? '#9AA5CC' : '#3AAA35',
              border: 'none', cursor: 'pointer', marginTop: '8px',
            }}>
            {loading ? 'Signing in...' : 'Sign in →'}
          </button>
        )}

        <p style={{textAlign: 'center', fontSize: '12px',
                   color: '#9AA5CC', marginTop: '16px'}}>
          Square Feet India CRM · Visakhapatnam
        </p>
      </div>
    </div>
  );
}
