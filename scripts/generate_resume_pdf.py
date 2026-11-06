from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


OUTPUT = Path("public/resume/adesh-kadu-resume.pdf")


def style_sheet():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="Name",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=21,
            leading=24,
            alignment=1,
            spaceAfter=4,
            textColor=colors.HexColor("#101828"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="Contact",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=12,
            alignment=1,
            textColor=colors.HexColor("#344054"),
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Section",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            textColor=colors.HexColor("#1849A9"),
            borderColor=colors.HexColor("#C9D3E2"),
            borderWidth=0,
            borderPadding=0,
            spaceBefore=8,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Body",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.3,
            leading=12.4,
            textColor=colors.HexColor("#101828"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Role",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12.5,
            textColor=colors.HexColor("#101828"),
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeBullet",
            parent=styles["Body"],
            leftIndent=12,
            firstLineIndent=-7,
            spaceAfter=2,
        )
    )
    return styles


def section(story, styles, title):
    story.append(Paragraph(title.upper(), styles["Section"]))


def bullet(story, styles, text):
    story.append(Paragraph(f"- {text}", styles["ResumeBullet"]))


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=0.58 * inch,
        leftMargin=0.58 * inch,
        topMargin=0.48 * inch,
        bottomMargin=0.45 * inch,
        title="Adesh Kadu Resume",
        author="Adesh Kadu",
    )
    styles = style_sheet()
    story = []

    story.append(Paragraph("ADESH JAYVANT KADU", styles["Name"]))
    story.append(
        Paragraph(
            "Navi Mumbai, Maharashtra | kaduaadesh11@gmail.com | +91 7208541846 | github.com/B1G0wl | linkedin.com/in/adesh-kadu-7b99a6286",
            styles["Contact"],
        )
    )

    section(story, styles, "Summary")
    story.append(
        Paragraph(
            "Final-year B.E. student in Artificial Intelligence & Data Science at A.C. Patil College of Engineering with internship experience and academic/personal projects in AI, computer vision, backend development, and web interfaces. Comfortable working with Java, Python, MySQL, React, and Tailwind CSS. Interested in cybersecurity, machine learning, and building practical software systems while continuing to learn from real engineering teams.",
            styles["Body"],
        )
    )

    section(story, styles, "Experience")
    story.append(Paragraph("Student Intern - CrossAsyst Pvt. Ltd. | 45 Days", styles["Role"]))
    bullet(story, styles, "Worked with Java for backend development tasks and gained exposure to application-level implementation practices.")
    bullet(story, styles, "Used MySQL for database queries and learned how Java applications integrate with relational databases.")
    bullet(story, styles, "Worked with Maven to understand project structure, dependency management, and build workflows.")
    bullet(story, styles, "Improved debugging, problem-solving, and team collaboration through assigned internship work.")

    section(story, styles, "Projects")
    story.append(Paragraph("AI-Based Intrusion Detection System", styles["Role"]))
    story.append(
        Paragraph(
            "Academic cybersecurity project exploring machine learning techniques for identifying suspicious network behavior. Worked on preprocessing, feature analysis, model training, and result interpretation to understand how AI can support threat detection workflows.",
            styles["Body"],
        )
    )
    story.append(Paragraph("Face Recognition Attendance System", styles["Role"]))
    story.append(
        Paragraph(
            "Computer vision project using face detection and recognition concepts to support automated attendance logging. Practiced image processing, known-face matching, and structured attendance record storage.",
            styles["Body"],
        )
    )
    story.append(Paragraph("Jarvis AI Assistant", styles["Role"]))
    story.append(Paragraph("Python-based personal assistant project focused on command handling, task automation, and modular utility workflows.", styles["Body"]))
    story.append(Paragraph("CSS Learning Platform", styles["Role"]))
    story.append(
        Paragraph(
            "Frontend learning interface designed to explain CSS concepts through organized topics, responsive layouts, and visual examples.",
            styles["Body"],
        )
    )

    section(story, styles, "Skills")
    skill_rows = [
        ("Programming", "Python, Java, C, C++, JavaScript"),
        ("Frontend", "HTML, CSS, Tailwind CSS, React"),
        ("Backend", "Node.js, Express.js"),
        ("Database", "MySQL"),
        ("AI/Data", "Machine Learning, OpenCV, NumPy, Pandas"),
        ("Tools", "Git, GitHub, VS Code, Power BI, Postman, Maven"),
    ]
    for label, value in skill_rows:
        story.append(Paragraph(f"<b>{label}:</b> {value}", styles["Body"]))

    section(story, styles, "Education")
    story.append(Paragraph("B.E. in Artificial Intelligence & Data Science | 2024 - 2027, Pursuing", styles["Role"]))
    story.append(Paragraph("A.C. Patil College of Engineering, Kharghar, Navi Mumbai", styles["Body"]))
    story.append(Paragraph("Diploma in Information Technology | 2021 - 2024", styles["Role"]))
    story.append(Paragraph("Vidyalankar Polytechnic, Wadala - 80%", styles["Body"]))
    story.append(Paragraph("Secondary School Certificate | Passed June 2021", styles["Role"]))
    story.append(Paragraph("St. Xavier's High School & Jr. College, Nerul - 80.80%", styles["Body"]))

    section(story, styles, "Additional Activities")
    story.append(Paragraph("Volunteering, drama/acting, poster making, and logo making.", styles["Body"]))
    story.append(Spacer(1, 4))

    doc.build(story)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    build()
