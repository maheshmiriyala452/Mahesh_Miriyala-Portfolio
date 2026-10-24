# Miriyala Mahesh — Personal Full Stack Developer Portfolio

> **Production-quality, responsive personal portfolio application for Miriyala Mahesh**, a 2026 B.Tech graduate in Electronics and Communication Engineering from Vignan's Lara Institute of Technology and Science (CGPA: 8.0/10), seeking entry-level Full Stack Developer and Python Developer opportunities.

---

## 1. Project Overview & Architectural Summary

This project is a complete, production-ready web application engineered using **React.js 18+**, **Bootstrap 5**, **React Router DOM**, and **JSON Server** as a mock REST API backend. It features dynamic data binding, interactive CRUD operations, dark/light theme switching with local persistence, responsive layout from 320px to 4K displays, and real PDF resume integration.

```
+--------------------------------------------------------------------------+
|                       REACT 18+ CLIENT APPLICATION                       |
|   (Vite + React Router + Bootstrap 5 + Lucide Icons + Custom CSS Tokens)  |
+------------------------------------+-------------------------------------+
                                     |
                          HTTP REST Requests (Axios)
                          (GET, POST, PATCH, DELETE)
                                     |
                                     v
+--------------------------------------------------------------------------+
|                         MOCK REST API (JSON Server)                       |
|                             PORT: 3001 (db.json)                         |
|  [/profile, /skills, /projects, /experience, /education, /certifications] |
+--------------------------------------------------------------------------+
                                     |
                         Production Migration Path
                                     v
+--------------------------------------------------------------------------+
|                     FUTURE PRODUCTION ENTERPRISE BACKEND                  |
|          Python Flask / Django REST Framework + PostgreSQL / MySQL        |
|             (Server-Side JWT Auth, ORM, Role-Based Access Control)       |
+--------------------------------------------------------------------------+
```

---

## 2. Technology Stack

### Frontend
- **HTML5 & Semantic Structure:** High accessibility markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, ARIA labels).
- **CSS3 & Styling:** Custom CSS variables/tokens (`--bg-primary`, `--accent-blue`, `--gradient-primary`), Flexbox, CSS Grid, glassmorphism, responsive media queries, reduced-motion accessibility.
- **JavaScript (ES6+):** Modern modules, destructuring, promises, async/await, and arrow functions.
- **React.js 18+:** Functional components, hooks (`useState`, `useEffect`, `useMemo`, `useContext`), custom ThemeContext.
- **Bootstrap 5.3:** Fluid grid container system, flex utilities, responsive breakpoints (`sm`, `md`, `lg`, `xl`).
- **React Router DOM v7:** Client-side routing (`/`, `/projects`, `/projects/:id`, `/about`, `/contact`, `/admin`, `*`).
- **Axios:** Standardized HTTP client with unified request/response interceptors, error formatting, and resilient fallback mechanisms.
- **Lucide React & Custom SVG:** Crisp vector iconography.

### Backend (Mock REST API)
- **JSON Server:** Full REST API providing `GET`, `POST`, `PATCH`, `DELETE` operations.
- **Data Source (`db.json`):** Verified resume collections for `profile`, `skills`, `projects`, `experience`, `education`, `certifications`, `achievements`, and `messages`.

### Tooling & Environment
- **Vite 8:** Lightning-fast HMR dev server and optimized production bundler.
- **Python 3.11 & ReportLab:** Generated verified PDF resume located at `public/resume/Mahesh_Miriyala_Resume.pdf`.

---

## 3. Resume Source Data Reference

All information in this portfolio is sourced from Miriyala Mahesh's resume:

| Field | Detail |
|---|---|
| **Full Name** | Miriyala Mahesh |
| **Title** | Aspiring Full Stack Developer \| Python Developer |
| **Degree** | B.Tech, Electronics and Communication Engineering (2022–2026) |
| **College** | Vignan's Lara Institute of Technology and Science |
| **CGPA** | 8.0 / 10 |
| **Location** | Hyderabad, India |
| **Phone** | +91 9391620253 |
| **Email** | [maheshmiriyala452@gmail.com](mailto:maheshmiriyala452@gmail.com) |
| **LinkedIn** | [https://www.linkedin.com/in/maheshmiriyala/](https://www.linkedin.com/in/maheshmiriyala/) |
| **GitHub** | [https://github.com/maheshmiriyala](https://github.com/maheshmiriyala) |
| **Internship** | Web Development Intern @ Purple Technologies - Vijayawada (3 Months) |
| **Internship Metrics** | 35% load time reduction, 20% mobile engagement increase |
| **Leadership** | Coordinated activities for 8,000+ students; Award from Dr. Lavu Rathaiah |

---

## 4. Key Projects Included

### 1. AI Resume Analyzer
- **Stack:** Python, Flask, NLP, Machine Learning, PyPDF2, spaCy, TF-IDF, Cosine Similarity, Pandas.
- **Features:** Automated PDF parsing, TF-IDF vector transformation, cosine similarity match score calculation, keyword gap reporting.
- **Reported Results:** 88% matching accuracy, < 2s processing speed per document, 70% reduction in candidate screening time.

### 2. E-Commerce Sales & Customer Analytics
- **Stack:** MySQL, SQL JOINs, Window Functions (`DENSE_RANK()`, `SUM() OVER`), Aggregations, 3NF Normalization.
- **Features:** Normalized database architecture handling 100,000+ transaction rows, Customer Lifetime Value (CLV) cohorts, time-series revenue analysis.
- **Reported Results:** 40% reduction in manual reporting time, 30% improvement in query execution efficiency.

### 3. Rythumitra-360
- **Stack:** Python, Flask, React.js, MySQL, Machine Learning, OpenCV, REST API, Bootstrap 5.
- **Features:** AI-driven crop leaf disease detection, dynamic regional mandi market price tracking, localized agro-weather intelligence, and personalized fertilizer dosage advisory.
- **Reported Results:** 94.8% classification accuracy, sub-500ms API response latency, multi-crop advisory coverage.

### 4. Responsive Single-Page Application (Achievement Highlight)
- **Stack:** React.js, Python Flask REST API, MySQL, Bootstrap 5.
- **Features:** Single-page application architecture with client-side routing, modular components, asynchronous Axios REST communication, and responsive layouts.

---

## 5. Application Structure

```
d:/frontend/Mahesh_Miriyala_Portofilo/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── mahesh-profile.svg
│   │   ├── project-ai-resume.svg
│   │   ├── project-ecommerce-sql.svg
│   │   ├── project-rythumitra-360.svg
│   │   └── project-spa-react.svg
│   └── resume/
│       └── Mahesh_Miriyala_Resume.pdf       # Verified 1-page PDF Resume
├── scripts/
│   └── generate_resume_pdf.py              # ReportLab resume generator
├── src/
│   ├── components/
│   │   ├── About.jsx                       # Academic & internship summary
│   │   ├── AchievementCard.jsx             # Leadership & honors
│   │   ├── AlertMessage.jsx                # Unified alert component
│   │   ├── AppLayout.jsx                   # Global app layout
│   │   ├── CertificationCard.jsx           # Industry certificates
│   │   ├── ConfirmDialog.jsx               # Action confirmation modal
│   │   ├── ContactForm.jsx                 # Validated contact form (POST /messages)
│   │   ├── EducationCard.jsx               # B.Tech ECE 8.0 CGPA details
│   │   ├── EmptyState.jsx                  # Empty data placeholder
│   │   ├── ExperienceTimeline.jsx          # Purple Technologies timeline
│   │   ├── Footer.jsx                      # Navigation, links, back-to-top
│   │   ├── Hero.jsx                        # Animated typing roles & CTAs
│   │   ├── Icons.jsx                       # Custom SVG brand icons (GitHub, LinkedIn)
│   │   ├── Loader.jsx                      # Reusable loading spinner
│   │   ├── Modal.jsx                       # Accessible modal dialog
│   │   ├── Navbar.jsx                      # Responsive sticky header & drawer
│   │   ├── Pagination.jsx                  # Gallery pagination
│   │   ├── ProjectCard.jsx                 # Project overview card
│   │   ├── ResumeSection.jsx               # Download/view resume component
│   │   ├── Skills.jsx                      # Category-filtered skill badges
│   │   └── ThemeToggle.jsx                 # Dark/light theme switcher
│   ├── context/
│   │   └── ThemeContext.jsx                # Theme provider with localStorage
│   ├── data/
│   │   └── initialData.js                  # Seed dataset for offline resilience
│   ├── pages/
│   │   ├── AboutPage.jsx                   # In-depth about page (/about)
│   │   ├── AdminDashboard.jsx              # CRUD admin dashboard (/admin)
│   │   ├── Contact.jsx                     # Contact page (/contact)
│   │   ├── Home.jsx                        # Portfolio landing (/ )
│   │   ├── NotFound.jsx                    # 404 page (* )
│   │   ├── ProjectDetails.jsx              # Deep dive view (/projects/:id)
│   │   └── Projects.jsx                    # Filterable gallery (/projects)
│   ├── services/
│   │   ├── achievementService.js           # GET /achievements
│   │   ├── api.js                          # Axios client configuration
│   │   ├── certificationService.js         # GET /certifications
│   │   ├── contactService.js               # POST, GET, DELETE /messages
│   │   ├── educationService.js             # GET /education
│   │   ├── experienceService.js            # GET /experience
│   │   ├── profileService.js               # GET, PATCH /profile
│   │   ├── projectService.js               # GET, POST, PATCH, DELETE /projects
│   │   └── skillService.js                 # GET, POST, DELETE /skills
│   ├── styles/
│   │   ├── components.css                  # UI component styles
│   │   ├── global.css                      # Global layout & utility rules
│   │   ├── responsive.css                  # Breakpoint media queries
│   │   └── variables.css                   # Theme tokens and variables
│   ├── App.jsx                             # Application route definitions
│   ├── main.jsx                            # React 18 createRoot entry
│   └── index.css                           # Forwarder
├── .env                                    # Active environment configuration
├── .env.example                            # Template configuration
├── db.json                                 # JSON Server mock database
├── package.json                            # Scripts & dependencies
└── README.md                               # Project documentation
```

---

## 6. Installation & Execution Guide

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended; verified on Node v24.21.0)
- **npm** (v9.0.0 or higher; verified on npm 11.19.0)

### Step 1: Clone or Navigate to Directory
```bash
cd d:/frontend/Mahesh_Miriyala_Portofilo
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Copy `.env.example` to `.env` if not already present:
```bash
cp .env.example .env
```
Default `.env` contents:
```env
VITE_API_URL=http://localhost:3001
VITE_APP_TITLE=Mahesh Miriyala | Full Stack Developer Portfolio
VITE_APP_OWNER=Miriyala Mahesh
VITE_APP_EMAIL=maheshmiriyala452@gmail.com
VITE_APP_PHONE=+919391620253
VITE_APP_LINKEDIN=https://www.linkedin.com/in/maheshmiriyala/
VITE_APP_GITHUB=https://github.com/maheshmiriyala
```

### Step 4: Run the Application Locally

#### Option A: Run Both Servers Simultaneously
```bash
npm start
```
*(Runs JSON Server on port 3001 and Vite React frontend on port 5173 using concurrently)*

#### Option B: Run in Separate Terminals (Recommended for debugging)

**Terminal 1 (Mock REST API):**
```bash
npm run server
```
*API serves at: `http://localhost:3001`*

**Terminal 2 (React Frontend):**
```bash
npm run dev
```
*Web application serves at: `http://localhost:5173`*

### Step 5: Build for Production
To create an optimized production bundle:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 7. REST API Endpoints (JSON Server)

| HTTP Method | Endpoint | Description |
|---|---|---|
| `GET` | `/profile` | Retrieve Mahesh's verified personal profile |
| `PATCH` | `/profile` | Update profile fields (Admin demo) |
| `GET` | `/skills` | Fetch all technical skills by category |
| `POST` | `/skills` | Add a new technical skill record |
| `DELETE` | `/skills/:id` | Remove a skill record |
| `GET` | `/projects` | Retrieve all projects |
| `GET` | `/projects/:id`| Retrieve single project details by ID |
| `POST` | `/projects` | Create a new project (Admin demo) |
| `PATCH` | `/projects/:id`| Update project details (Admin demo) |
| `DELETE` | `/projects/:id`| Delete project from database (Admin demo) |
| `GET` | `/experience` | Retrieve internship experience history |
| `GET` | `/education` | Retrieve academic qualification records |
| `GET` | `/certifications` | Retrieve verified industry certifications |
| `GET` | `/achievements` | Retrieve leadership and recognition records |
| `GET` | `/messages` | View all submitted recruiter messages |
| `POST` | `/messages` | Submit a contact form inquiry |
| `PATCH` | `/messages/:id`| Update message read status |
| `DELETE` | `/messages/:id`| Remove message inquiry |

---

## 8. Postman Testing Guide

You can test the mock REST API directly using Postman or curl:

### Test 1: Fetch Profile
- **Method:** `GET`
- **URL:** `http://localhost:3001/profile`
- **Expected Status:** `200 OK`

### Test 2: Submit Contact Message
- **Method:** `POST`
- **URL:** `http://localhost:3001/messages`
- **Headers:** `Content-Type: application/json`
- **Body (raw JSON):**
```json
{
  "name": "Sarah Jenkins",
  "email": "sarah.jenkins@techrecruiting.com",
  "subject": "Entry-Level Python / Full Stack Role",
  "message": "Hi Mahesh, we reviewed your AI Resume Analyzer and SQL projects. We would like to schedule an introductory technical interview."
}
```
- **Expected Status:** `201 Created`

### Test 3: Create Project (Admin Demo)
- **Method:** `POST`
- **URL:** `http://localhost:3001/projects`
- **Headers:** `Content-Type: application/json`
- **Body (raw JSON):**
```json
{
  "id": "flask-task-api",
  "title": "Task Management REST API",
  "category": "Backend",
  "technologies": ["Python", "Flask", "SQLAlchemy", "MySQL"],
  "summary": "Lightweight task management service with token authentication.",
  "featured": false
}
```
- **Expected Status:** `201 Created`

---

## 9. Deployment Strategy

### Frontend Deployment (Vercel / Netlify / GitHub Pages)
1. Build the production bundle: `npm run build`.
2. Deploy the generated `dist/` directory to **Vercel** or **Netlify**.
3. Set the environment variable `VITE_API_URL` in the deployment settings.

### Mock Backend vs Production Architecture
> **Important Note:** JSON Server is intended for local development and portfolio demonstrations. In an enterprise production setting, a public JSON Server exposes writable endpoints without authentication.

### Migration Roadmap to Enterprise Backend (Flask / Django):
1. **Framework:** Replace JSON Server with a **Python Flask** or **Django REST Framework** microservice.
2. **Database:** Migrate `db.json` collections to **PostgreSQL** or **MySQL** relational tables using SQLAlchemy or Django ORM.
3. **Authentication:** Implement server-side JWT (JSON Web Tokens) or OAuth2 authentication with encrypted bcrypt password hashing for admin operations.
4. **Validation:** Implement server-side Pydantic / Marshmallow schema validation and CSRF protection.

---

## 10. Verification & Quality Checklist

- [x] **Resume Accuracy:** All details match Mahesh Miriyala's authoritative resume (B.Tech ECE 2026, Vignan's LARA, 8.0 CGPA, Purple Technologies intern).
- [x] **No Fabricated Data:** Certified dates, roles, and reported metrics correspond strictly to resume documentation.
- [x] **Dynamic REST API:** Data loaded through modular services (`profileService`, `projectService`, `contactService`).
- [x] **Production Build:** Passes `npm run build` with zero compile errors.
- [x] **Responsive Layout:** Fluid layout across mobile (320px+), tablet (768px), desktop (1024px), and large screens.
- [x] **Dark & Light Mode:** Seamless theme toggle with local storage persistence.
- [x] **Working PDF Resume:** PDF resume generated and accessible via "Download Resume" and "View Resume" buttons.
- [x] **Admin CRUD Demo:** Complete create, update, delete functionality for projects and skills at `/admin`.
- [x] **Contact Form:** Field validation, error feedback, duplicate submission prevention, and `POST /messages` persistence.

---

## 11. Author & Contact Information

**Miriyala Mahesh**  
- **Email:** [maheshmiriyala452@gmail.com](mailto:maheshmiriyala452@gmail.com)  
- **Phone:** +91 9391620253  
- **LinkedIn:** [https://www.linkedin.com/in/maheshmiriyala/](https://www.linkedin.com/in/maheshmiriyala/)  
- **GitHub:** [https://github.com/maheshmiriyala](https://github.com/maheshmiriyala)  
- **Location:** Hyderabad, India  
- **Degree:** B.Tech, Electronics and Communication Engineering (2022–2026)  
- **Institution:** Vignan's Lara Institute of Technology and Science  
