import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

os.makedirs("public/resume", exist_ok=True)
pdf_path = "public/resume/Mahesh_Miriyala_Resume.pdf"

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=36,
    rightMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

# Custom styles
name_style = ParagraphStyle(
    'NameStyle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    textColor=colors.HexColor('#0f172a'),
    alignment=1
)

title_style = ParagraphStyle(
    'TitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=colors.HexColor('#2563eb'),
    alignment=1
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=12,
    textColor=colors.HexColor('#475569'),
    alignment=1
)

section_heading = ParagraphStyle(
    'SectionHeading',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=12,
    leading=15,
    textColor=colors.HexColor('#1e3a8a'),
    spaceAfter=4,
    spaceBefore=8
)

body_style = ParagraphStyle(
    'BodyStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=12,
    textColor=colors.HexColor('#334155')
)

bold_style = ParagraphStyle(
    'BoldStyle',
    parent=body_style,
    fontName='Helvetica-Bold',
    textColor=colors.HexColor('#0f172a')
)

bullet_style = ParagraphStyle(
    'BulletStyle',
    parent=body_style,
    leftIndent=12,
    bulletIndent=4,
    spaceAfter=2
)

story = []

# Header
story.append(Paragraph("MIRIYALA MAHESH", name_style))
story.append(Paragraph("Aspiring Full Stack Developer | Python Developer", title_style))
story.append(Spacer(1, 4))
contact_text = "Hyderabad, India | +91 9391620253 | maheshmiriyala452@gmail.com | linkedin.com/in/maheshmiriyala"
story.append(Paragraph(contact_text, contact_style))
story.append(Spacer(1, 8))
story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#2563eb'), spaceAfter=8))

# Professional Summary
story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
story.append(Paragraph(
    "Resourceful B.Tech graduate seeking an entry-level Full Stack Developer role. "
    "Combines a strong technical foundation in Python, Flask, SQL, JavaScript, and React.js with problem-solving skills. "
    "Interested in building responsive applications, REST APIs, and reliable software solutions.",
    body_style
))
story.append(Spacer(1, 6))

# Education
story.append(Paragraph("EDUCATION", section_heading))
edu_data = [
    [
        Paragraph("<b>Vignan's Lara Institute of Technology and Science</b>", body_style),
        Paragraph("<para align=right><b>2022 – 2026</b></para>", body_style)
    ],
    [
        Paragraph("Bachelor of Technology (B.Tech) — Electronics and Communication Engineering", body_style),
        Paragraph("<para align=right><b>CGPA: 8.0 / 10</b></para>", body_style)
    ]
]
edu_table = Table(edu_data, colWidths=[400, 140])
edu_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
story.append(edu_table)
story.append(Spacer(1, 6))

# Technical Skills
story.append(Paragraph("TECHNICAL SKILLS", section_heading))
skills_data = [
    [Paragraph("<b>Programming Languages:</b>", bold_style), Paragraph("Python, JavaScript, MySQL", body_style)],
    [Paragraph("<b>Frontend Technologies:</b>", bold_style), Paragraph("HTML5, CSS3, Bootstrap 5, React.js", body_style)],
    [Paragraph("<b>Backend & Databases:</b>", bold_style), Paragraph("Flask, Django, MySQL", body_style)],
    [Paragraph("<b>Tools & Platforms:</b>", bold_style), Paragraph("Git, GitHub, VS Code, Postman, OpenAI, Hugging Face, GitHub Copilot", body_style)],
    [Paragraph("<b>Core Competencies:</b>", bold_style), Paragraph("OOP, Data Structures, SDLC, Debugging, API Integration, CRUD Operations, Responsive Design, Problem Solving, Communication, Teamwork", body_style)]
]
skills_table = Table(skills_data, colWidths=[140, 400])
skills_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
story.append(skills_table)
story.append(Spacer(1, 6))

# Experience
story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))
exp_data = [
    [
        Paragraph("<b>Web Development Intern</b> | Purple Technologies", bold_style),
        Paragraph("<para align=right><b>Vijayawada | 3 Months</b></para>", body_style)
    ]
]
exp_table = Table(exp_data, colWidths=[380, 160])
exp_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ('TOPPADDING', (0,0), (-1,-1), 0),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
story.append(exp_table)
story.append(Paragraph("&bull; Developed optimized, responsive interfaces using HTML5, CSS3, and JavaScript.", bullet_style))
story.append(Paragraph("&bull; Improved cross-device user experience and addressed rendering issues across diverse mobile viewports.", bullet_style))
story.append(Paragraph("&bull; Applied AI-assisted debugging and code refactoring to accelerate frontend turnaround.", bullet_style))
story.append(Paragraph("&bull; Resume reports a 35% reduction in page load times and a 20% increase in mobile engagement.", bullet_style))
story.append(Paragraph("&bull; Utilized Git version control for collaborative code integration and supported on-time deployment.", bullet_style))
story.append(Spacer(1, 6))

# Key Projects
story.append(Paragraph("KEY PROJECTS", section_heading))

# Project 1
story.append(Paragraph("<b>AI Resume Analyzer</b> | <i>Python, Flask, NLP, Machine Learning, PyPDF2, spaCy, TF-IDF, Pandas</i>", bold_style))
story.append(Paragraph("&bull; Developed an AI-powered automated resume evaluation engine to extract and compare resumes against job descriptions.", bullet_style))
story.append(Paragraph("&bull; Built an NLP & ML pipeline to extract keywords, compute ATS compatibility scores via TF-IDF and cosine similarity.", bullet_style))
story.append(Paragraph("&bull; Resume reports 88% matching accuracy and processing under two seconds per document; achieved 70% reduction in manual screening time.", bullet_style))
story.append(Spacer(1, 4))

# Project 2
story.append(Paragraph("<b>E-Commerce Sales & Customer Analytics</b> | <i>MySQL, SQL JOINs, Window Functions, Database Normalization</i>", bold_style))
story.append(Paragraph("&bull; Designed a 3NF normalized MySQL database for e-commerce sales and customer analytics handling 100,000+ transaction records.", bullet_style))
story.append(Paragraph("&bull; Formulated advanced SQL queries with window functions (RANK, LEAD/LAG) and aggregations to analyze revenue trends and CLV.", bullet_style))
story.append(Paragraph("&bull; Resume reports a 40% reduction in manual reporting time and a 30% improvement in query execution efficiency.", bullet_style))
story.append(Spacer(1, 4))

# Project 3 Highlight
story.append(Paragraph("<b>Responsive Single-Page Application</b> | <i>React.js, Flask, REST API, MySQL</i>", bold_style))
story.append(Paragraph("&bull; Highlighted application development achievement featuring component-driven React architecture, RESTful Flask endpoints, and MySQL persistence.", bullet_style))
story.append(Spacer(1, 6))

# Certifications
story.append(Paragraph("CERTIFICATIONS", section_heading))
story.append(Paragraph("&bull; <b>Data Analytics Simulation</b> — Deloitte (March 2026)", bullet_style))
story.append(Paragraph("&bull; <b>Programming Essentials in Python (PCAP)</b> — Cisco (July 2025)", bullet_style))
story.append(Paragraph("&bull; <b>Introduction to Computer Science (CS50x)</b> — Harvard University (September 2024)", bullet_style))
story.append(Paragraph("&bull; <b>Network Essentials</b> — Cisco (December 2023)", bullet_style))
story.append(Spacer(1, 6))

# Leadership & Achievements
story.append(Paragraph("ACHIEVEMENTS & LEADERSHIP", section_heading))
story.append(Paragraph("&bull; Coordinated student activities involving more than 8,000 students at Vignan's LARA.", bullet_style))
story.append(Paragraph("&bull; Received an Honorable Award from Dr. Lavu Rathaiah for outstanding leadership contributions.", bullet_style))
story.append(Paragraph("&bull; Served as official liaison between faculty leadership and student cohorts; resume reports 20% improvement in organizational efficiency.", bullet_style))

doc.build(story)
print("Resume PDF successfully generated at:", pdf_path)
