# Square Feet India CRM — Phase 1 Complete

> **Built by SiyanTech Global Innovations Pvt. Ltd.**
> Visakhapatnam, Andhra Pradesh | June 2026

---

## Live URL

https://squarefeet-crm-9oyr.vercel.app

---

## What is Phase 1

Phase 1 is the complete UI — all screens, all navigation, all design.
Data is static demo data. Real database connects in Phase 2.

---

## Screens Built — 14 Total

### Admin Screens
- Dashboard — Stats, leads, hourly report, team performance
- Leads — Search, filter, add lead, pipeline view
- Calls — Recordings list, play button, stats
- Follow-ups — Overdue, due today, completed
- Reports — Source analysis, rankings, hourly archive
- Team and GPS — Live map, attendance table, scores
- Company Profile — Edit modal, projects, contact, team
- Settings — Users, integrations, system info
- Targets — Monthly targets per employee

### Telecaller Screens
- Home — Big buttons, stats, bottom nav
- Call — Lead details, call button, 5 status buttons
- Follow-ups — Overdue, due today, completed
- Attendance — Check-in/out, GPS map, weekly history

### CRM Executive Screens
- Home — Pipeline overview, action buttons, recent leads
- Leads — Search, filter, Call + WhatsApp + Docs buttons
- Follow-ups — Overdue, due today, completed
- Attendance — Check-in/out, GPS

### Sales Executive Screens
- Home — Warm leads, site visits today, action buttons
- Leads — Warm leads with Call, Site Visit, Book buttons
- Attendance — Check-in/out, GPS, weekly history

### Team Leader Screens
- Dashboard — Alerts, team performance, quick actions
- Team — Individual member details, reassign button
- Leads — All team leads, filter by agent, reassign

---

## User Roles — 6 Total

| Role | Routes To | Design |
|---|---|---|
| Super Admin | /admin/dashboard | Navy sidebar |
| Admin | /admin/dashboard | Navy sidebar |
| Team Leader | /teamleader/dashboard | Bottom nav |
| CRM Executive | /crm/home | Bottom nav |
| Telecaller | /telecaller/home | Big buttons |
| Sales Executive | /sales/home | Field focused |

---

## Brand Colors

| Color | HEX | Used For |
|---|---|---|
| Navy Blue | #1B2F6E | Sidebar, headers, primary buttons |
| Fresh Green | #3AAA35 | Call buttons, success, converted |
| Sky Blue | #2E9FD4 | Info, new leads, CRM badge |
| Alert Red | #E53935 | Overdue, urgent, absent |
| Warning Orange | #F57C00 | Busy calls, medium priority |
| Gold | #C9A84C | Rankings, pipeline value |
| Light BG | #F0F2F8 | All page backgrounds |

---

## Login Flow

1. Open URL — squarefeet-crm-9oyr.vercel.app
2. Select Role — Admin / CRM / Telecaller / Sales / Team Leader
3. Enter Mobile — 10 digit number
4. Enter OTP — 4 digits
5. Sign In — routes to correct dashboard

---

## Pipeline Stages — 8 Total

NEW — CONTACTED — FOLLOW-UP — INTERESTED — SITE VISIT — NEGOTIATION — BOOKING — CONVERTED

---

## Call Status Options — 8 Total

| Status | Color | Action |
|---|---|---|
| Connected | Green | Log call |
| Interested | Blue | Open follow-up scheduler |
| Busy / Call Back | Orange | Open follow-up scheduler |
| Not Picked | Red | Log attempt |
| Switched Off | Grey | Try next day |
| Not Interested | Dark Red | Archive lead |
| Converted | Gold | Calculate incentive |

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 + React + TypeScript |
| Styling | Tailwind CSS |
| Database | Prisma PostgreSQL Cloud |
| Hosting | Vercel |
| Version Control | GitHub |
| Branch | dev |

---

## Database Tables — 6 Total

| Table | Purpose |
|---|---|
| User | All 6 roles and login details |
| Lead | All customer leads and stages |
| Call | Call history and recordings |
| FollowUp | Scheduled follow-up calls |
| Attendance | GPS check-in and check-out |
| Document | Uploaded customer documents |

---

## What Phase 1 Does NOT Have

| Feature | Available In |
|---|---|
| Add Lead saves to DB | Phase 2 |
| Real OTP via SMS | Phase 2 |
| Leads load from database | Phase 2 |
| Exotel click-to-call | Phase 3 |
| WhatsApp Business API | Phase 3 |
| Custom domain | Phase 4 |

---

## Phase Roadmap

| Phase | Work | Status |
|---|---|---|
| Phase 1 | All UI screens | Done |
| Phase 2 | Real database | Next |
| Phase 3 | Exotel + WhatsApp | Planned |
| Phase 4 | OTP + custom domain | Planned |
| Phase 5 | Testing + go live | Planned |

---

## Support

SiyanTech Global Innovations Pvt. Ltd.
Email: info@siyantech.com
Website: www.siyantech.com
CIN: U72900AP2021PTC119926
Visakhapatnam, Andhra Pradesh

Last updated: June 2026 — Phase 1 Complete
