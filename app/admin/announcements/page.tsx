'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '../../../components/AdminSidebar';

type Announcement = {
  id: string;
  title: string;
  message: string;
  type: string;
  target: string;
  time: string;
  author: string;
  typeColor: string;
  typeBg: string;
};

export default function AdminAnnouncements() {
  const router = useRouter();
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingAnn, setEditingAnn] = useState<Announcement | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('General');
  const [target, setTarget] = useState('All');

  const typeConfig = {
    General: { color: '#2E9FD4', bg: '#E3F4FB', icon: '📢' },
    Urgent: { color: '#E53935', bg: '#FFEBEE', icon: '🚨' },
    Target: { color: '#1B2F6E', bg: '#E8EBF5', icon: '🎯' },
    Launch: { color: '#3AAA35', bg: '#E8F5E8', icon: '🚀' },
    Holiday: { color: '#F57C00', bg: '#FFF3E0', icon: '🎉' },
  };

  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: '1', title: 'New Project Launch — Rushikonda Heights Phase 2',
      message: 'Rushikonda Heights Phase 2 is now open for bookings. Start calling all interested leads immediately. New price list has been updated in inventory. Target: 10 bookings this month.',
      type: 'Launch', target: 'All', time: '10:30 AM Today', author: 'Mohan R.',
      typeColor: '#3AAA35', typeBg: '#E8F5E8',
    },
    {
      id: '2', title: 'Monthly Target Update — June 2026',
      message: 'June monthly targets have been updated. Each telecaller must complete minimum 300 calls and 3 conversions. Team leaders please ensure your team is on track.',
      type: 'Target', target: 'All', time: 'Yesterday 9:00 AM', author: 'Mohan R.',
      typeColor: '#1B2F6E', typeBg: '#E8EBF5',
    },
    {
      id: '3', title: 'URGENT — Follow-up Overdue Alert',
      message: '12 follow-ups are overdue across the team. Please ensure all overdue follow-ups are completed by end of day today.',
      type: 'Urgent', target: 'Telecallers', time: 'Jun 7, 2:00 PM', author: 'Mohan R.',
      typeColor: '#E53935', typeBg: '#FFEBEE',
    },
    {
      id: '4', title: 'Office Holiday — June 15',
      message: 'The office will be closed on June 15 for a public holiday. Please ensure all urgent follow-ups are completed before June 14.',
      type: 'General', target: 'All', time: 'Jun 5, 11:00 AM', author: 'Mohan R.',
      typeColor: '#2E9FD4', typeBg: '#E3F4FB',
    },
  ]);

  const openAdd = () => {
    setEditingAnn(null);
    setTitle('');
    setMessage('');
    setType('General');
    setTarget('All');
    setShowAddModal(true);
  };

  const openEdit = (ann: Announcement) => {
    setEditingAnn(ann);
    setTitle(ann.title);
    setMessage(ann.message);
    setType(ann.type);
    setTarget(ann.target);
    setShowAddModal(true);
  };

  const handleSave = () => {
    if (!title || !message) return;
    const cfg = typeConfig[type as keyof typeof typeConfig];
    if (editingAnn) {
      setAnnouncements(prev => prev.map(a =>
        a.id === editingAnn.id
          ? { ...a, title, message, type, target, typeColor: cfg.color, typeBg: cfg.bg }
          : a
      ));
    } else {
      setAnnouncements(prev => [{
        id: String(Date.now()),
        title, message, type, target,
        time: 'Just now', author: 'Mohan R.',
        typeColor: cfg.color, typeBg: cfg.bg,
      }, ...prev]);
    }
    setShowAddModal(false);
  };

  const handleDelete = (id: string) => {
    setAnnouncements(prev => prev.filter(a => a.id !== id));
    setDeleteConfirm(null);
  };

  return (
    <div style={{minHeight: '100dvh', background: '#F0F2F8'}}>

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                     zIndex: 300, display: 'flex', alignItems: 'center',
                     justifyContent: 'center', padding: '16px'}}>
          <div style={{background: 'white', borderRadius: '16px', padding: '24px',
                       width: '100%', maxWidth: '340px', textAlign: 'center'}}>
            <div style={{fontSize: '32px', marginBottom: '12px'}}>🗑️</div>
            <div style={{fontSize: '16px', fontWeight: '800', color: '#1B2F6E', marginBottom: '8px'}}>
              Delete Announcement?
            </div>
            <div style={{fontSize: '13px', color: '#6B7AB5', marginBottom: '20px'}}>
              This cannot be undone. The announcement will be removed for all team members.
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
              <button onClick={() => setDeleteConfirm(null)}
                style={{flex: 1, padding: '12px', borderRadius: '10px',
                        border: '1.5px solid #DDE2EF', background: 'white',
                        color: '#6B7AB5', fontSize: '14px', fontWeight: '600', cursor: 'pointer'}}>
                Cancel
              </button>
              <button onClick={() => handleDelete(deleteConfirm)}
                style={{flex: 1, padding: '12px', borderRadius: '10px', border: 'none',
                        background: '#E53935', color: 'white', fontSize: '14px',
                        fontWeight: '700', cursor: 'pointer'}}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                     zIndex: 200, display: 'flex', alignItems: 'center',
                     justifyContent: 'center', padding: '16px'}}>
          <div style={{background: 'white', borderRadius: '20px', padding: '20px',
                       width: '100%', maxWidth: '480px', maxHeight: '90vh', overflowY: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'space-between',
                         alignItems: 'center', marginBottom: '16px'}}>
              <h2 style={{fontSize: '18px', fontWeight: '800', color: '#1B2F6E', margin: 0}}>
                {editingAnn ? 'Edit Announcement' : 'New Announcement'}
              </h2>
              <button onClick={() => setShowAddModal(false)}
                style={{fontSize: '24px', background: 'none', border: 'none',
                        cursor: 'pointer', color: '#9AA5CC', lineHeight: 1}}>×</button>
            </div>

            {/* Type */}
            <div style={{marginBottom: '14px'}}>
              <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                             display: 'block', marginBottom: '8px'}}>Type</label>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                {Object.entries(typeConfig).map(([key, val]) => (
                  <button key={key} onClick={() => setType(key)}
                    style={{padding: '7px 12px', borderRadius: '8px', fontSize: '12px',
                            fontWeight: '700', cursor: 'pointer',
                            border: `1.5px solid ${type === key ? val.color : '#DDE2EF'}`,
                            background: type === key ? val.bg : 'white',
                            color: type === key ? val.color : '#9AA5CC'}}>
                    {val.icon} {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Target */}
            <div style={{marginBottom: '14px'}}>
              <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                             display: 'block', marginBottom: '8px'}}>Send To</label>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                {['All', 'Telecallers', 'CRM Executives', 'Sales Executives', 'Team Leaders'].map(t => (
                  <button key={t} onClick={() => setTarget(t)}
                    style={{padding: '7px 12px', borderRadius: '8px', fontSize: '12px',
                            fontWeight: '600', cursor: 'pointer',
                            border: `1.5px solid ${target === t ? '#1B2F6E' : '#DDE2EF'}`,
                            background: target === t ? '#E8EBF5' : 'white',
                            color: target === t ? '#1B2F6E' : '#9AA5CC'}}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div style={{marginBottom: '12px'}}>
              <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                             display: 'block', marginBottom: '5px'}}>Title</label>
              <input value={title} onChange={e => setTitle(e.target.value)}
                placeholder="Announcement title..."
                style={{width: '100%', padding: '11px 14px', borderRadius: '10px',
                        border: '1.5px solid #DDE2EF', fontSize: '14px',
                        color: '#1A1A2E', outline: 'none', boxSizing: 'border-box'}}/>
            </div>

            {/* Message */}
            <div style={{marginBottom: '16px'}}>
              <label style={{fontSize: '12px', fontWeight: '600', color: '#6B7AB5',
                             display: 'block', marginBottom: '5px'}}>Message</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)}
                placeholder="Type your message here..."
                rows={5}
                style={{width: '100%', padding: '11px 14px', borderRadius: '10px',
                        border: '1.5px solid #DDE2EF', fontSize: '14px', color: '#1A1A2E',
                        outline: 'none', resize: 'none', boxSizing: 'border-box'}}/>
            </div>

            {/* Preview */}
            {title && message && (
              <div style={{background: typeConfig[type as keyof typeof typeConfig].bg,
                           borderRadius: '12px', padding: '14px', marginBottom: '16px',
                           border: `1px solid ${typeConfig[type as keyof typeof typeConfig].color}40`}}>
                <div style={{fontSize: '11px', fontWeight: '700', marginBottom: '6px',
                             color: typeConfig[type as keyof typeof typeConfig].color}}>
                  Preview
                </div>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1B2F6E',
                             marginBottom: '4px'}}>{title}</div>
                <div style={{fontSize: '12px', color: '#6B7AB5', lineHeight: 1.5}}>{message}</div>
                <div style={{fontSize: '11px', color: '#9AA5CC', marginTop: '6px'}}>
                  → To: {target} · Type: {type}
                </div>
              </div>
            )}

            <div style={{display: 'flex', gap: '10px'}}>
              <button onClick={() => setShowAddModal(false)}
                style={{flex: 1, padding: '12px', borderRadius: '12px',
                        border: '1.5px solid #DDE2EF', background: 'white',
                        color: '#6B7AB5', fontSize: '14px', fontWeight: '600', cursor: 'pointer'}}>
                Cancel
              </button>
              <button onClick={handleSave} disabled={!title || !message}
                style={{flex: 1, padding: '12px', borderRadius: '12px', border: 'none',
                        background: !title || !message ? '#9AA5CC' : '#1B2F6E',
                        color: 'white', fontSize: '14px', fontWeight: '700', cursor: 'pointer'}}>
                {editingAnn ? '✏️ Save Changes' : '📢 Send Now'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{display: 'flex', minHeight: '100dvh'}}>
        <div className="desktop-sidebar">
          <AdminSidebar active="announcements" />
        </div>

        <div style={{flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0}}>
          <div style={{padding: '12px 16px', background: 'white',
                       borderBottom: '1px solid #DDE2EF',
                       display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <div style={{fontSize: '15px', fontWeight: '800', color: '#1B2F6E'}}>Announcements</div>
              <div style={{fontSize: '11px', color: '#6B7AB5'}}>Send messages to your entire team</div>
            </div>
            <button onClick={openAdd}
              style={{padding: '7px 14px', borderRadius: '8px', fontSize: '12px',
                      fontWeight: '700', color: 'white', background: '#1B2F6E',
                      border: 'none', cursor: 'pointer'}}>
              📢 New Announcement
            </button>
          </div>

          <div style={{flex: 1, padding: '14px', overflowY: 'auto', paddingBottom: '80px'}}>

            {/* Stats */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                         gap: '10px', marginBottom: '14px'}}>
              {[
                {val: announcements.length, lbl: 'Total Sent', color: '#1B2F6E', bg: '#E8EBF5'},
                {val: announcements.filter(a => a.type === 'Urgent').length, lbl: 'Urgent', color: '#E53935', bg: '#FFEBEE'},
                {val: announcements.filter(a => a.type === 'Launch').length, lbl: 'Launches', color: '#3AAA35', bg: '#E8F5E8'},
                {val: announcements.filter(a => a.target === 'All').length, lbl: 'Team-wide', color: '#2E9FD4', bg: '#E3F4FB'},
              ].map((s, i) => (
                <div key={i} style={{background: s.bg, borderRadius: '12px', padding: '12px', textAlign: 'center'}}>
                  <div style={{fontSize: '22px', fontWeight: '800', color: s.color}}>{s.val}</div>
                  <div style={{fontSize: '11px', color: s.color, fontWeight: '600', marginTop: '2px'}}>{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* List */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {announcements.map(ann => (
                <div key={ann.id} style={{background: 'white', borderRadius: '14px',
                                          padding: '16px', border: '0.5px solid #DDE2EF',
                                          borderLeft: `4px solid ${ann.typeColor}`}}>
                  <div style={{display: 'flex', alignItems: 'flex-start',
                               justifyContent: 'space-between', marginBottom: '8px'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '8px', flex: 1}}>
                      <span style={{fontSize: '18px'}}>
                        {typeConfig[ann.type as keyof typeof typeConfig]?.icon || '📢'}
                      </span>
                      <div style={{flex: 1}}>
                        <div style={{fontSize: '14px', fontWeight: '800', color: '#1B2F6E'}}>
                          {ann.title}
                        </div>
                        <div style={{display: 'flex', gap: '6px', marginTop: '4px',
                                     flexWrap: 'wrap', alignItems: 'center'}}>
                          <span style={{fontSize: '10px', fontWeight: '700', padding: '2px 8px',
                                        borderRadius: '8px', background: ann.typeBg, color: ann.typeColor}}>
                            {ann.type}
                          </span>
                          <span style={{fontSize: '10px', fontWeight: '600', padding: '2px 8px',
                                        borderRadius: '8px', background: '#F0F2F8', color: '#6B7AB5'}}>
                            → {ann.target}
                          </span>
                          <span style={{fontSize: '10px', color: '#9AA5CC'}}>{ann.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{fontSize: '13px', color: '#6B7AB5', lineHeight: 1.6,
                               padding: '10px 12px', background: '#F7F8FC',
                               borderRadius: '8px', marginBottom: '10px'}}>
                    {ann.message}
                  </div>

                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: '11px', color: '#9AA5CC'}}>
                      Posted by {ann.author}
                    </span>
                    <div style={{display: 'flex', gap: '6px'}}>
                      <button onClick={() => openEdit(ann)}
                        style={{padding: '6px 14px', borderRadius: '8px',
                                border: '1.5px solid #1B2F6E', background: '#E8EBF5',
                                color: '#1B2F6E', fontSize: '12px',
                                fontWeight: '700', cursor: 'pointer'}}>
                        ✏️ Edit
                      </button>
                      <button onClick={() => setDeleteConfirm(ann.id)}
                        style={{padding: '6px 14px', borderRadius: '8px', border: 'none',
                                background: '#FFEBEE', color: '#E53935', fontSize: '12px',
                                fontWeight: '700', cursor: 'pointer'}}>
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {announcements.length === 0 && (
                <div style={{background: 'white', borderRadius: '14px', padding: '40px',
                             textAlign: 'center', border: '0.5px solid #DDE2EF'}}>
                  <div style={{fontSize: '32px', marginBottom: '10px'}}>📢</div>
                  <div style={{fontSize: '14px', fontWeight: '700', color: '#1B2F6E',
                               marginBottom: '6px'}}>No announcements yet</div>
                  <div style={{fontSize: '12px', color: '#9AA5CC'}}>
                    Click New Announcement to send a message to your team
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="mobile-bottom-nav" style={{position: 'fixed', bottom: 0, left: 0, right: 0,
           display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
           background: 'white', borderTop: '1px solid #DDE2EF', zIndex: 100}}>
        {[
          {icon: '🏠', label: 'Home', path: '/admin/dashboard'},
          {icon: '👥', label: 'Leads', path: '/admin/leads'},
          {icon: '📢', label: 'Announce', path: '/admin/announcements', active: true},
          {icon: '📊', label: 'Reports', path: '/admin/reports'},
          {icon: '👤', label: 'Team', path: '/admin/team'},
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

      <style>{`
        @media (min-width: 768px) { .mobile-bottom-nav { display: none !important; } .desktop-sidebar { display: flex !important; } }
        @media (max-width: 767px) { .desktop-sidebar { display: none !important; } .mobile-bottom-nav { display: grid !important; } }
      `}</style>
    </div>
  );
}
