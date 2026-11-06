import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const resumeHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Adesh Kadu Resume</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; background: #f3f6fb; color: #101828; font-family: Arial, Helvetica, sans-serif; }
    .page { width: 8.27in; min-height: 11.69in; margin: 0 auto; background: #fff; padding: 0.52in 0.58in; }
    h1 { margin: 0; font-size: 25px; letter-spacing: 0.8px; }
    h2 { margin: 18px 0 8px; border-bottom: 1px solid #c9d3e2; padding-bottom: 4px; font-size: 12px; letter-spacing: 1.4px; color: #1849a9; text-transform: uppercase; }
    h3 { margin: 0; font-size: 13.5px; }
    p, li { font-size: 10.5px; line-height: 1.45; }
    p { margin: 4px 0; }
    ul { margin: 5px 0 0 18px; padding: 0; }
    li { margin: 2px 0; }
    .contact { margin-top: 5px; font-size: 10.5px; color: #344054; }
    .row { display: flex; justify-content: space-between; gap: 16px; align-items: baseline; }
    .date { color: #475467; font-size: 10.5px; white-space: nowrap; }
    .skills { display: grid; grid-template-columns: 132px 1fr; gap: 4px 12px; font-size: 10.5px; line-height: 1.45; }
    .label { font-weight: 700; color: #1d2939; }
    .project { margin-bottom: 8px; }
    @media print {
      body { background: #fff; }
      .page { margin: 0; width: auto; min-height: auto; box-shadow: none; }
    }
  </style>
</head>
<body>
  <main class="page">
    <header>
      <h1>ADESH JAYVANT KADU</h1>
      <div class="contact">Navi Mumbai, Maharashtra | kaduaadesh11@gmail.com | +91 7208541846 | github.com/B1G0wl | linkedin.com/in/adesh-kadu-7b99a6286</div>
    </header>

    <section>
      <h2>Summary</h2>
      <p>Final-year B.E. student in Artificial Intelligence & Data Science at A.C. Patil College of Engineering with internship experience and academic/personal projects in AI, computer vision, backend development, and web interfaces. Comfortable working with Java, Python, MySQL, React, and Tailwind CSS. Interested in cybersecurity, machine learning, and building practical software systems while continuing to learn from real engineering teams.</p>
    </section>

    <section>
      <h2>Experience</h2>
      <div class="row">
        <h3>Student Intern - CrossAsyst Pvt. Ltd.</h3>
        <span class="date">45 Days</span>
      </div>
      <ul>
        <li>Worked with Java for backend development tasks and gained exposure to application-level implementation practices.</li>
        <li>Used MySQL for database queries and learned how Java applications integrate with relational databases.</li>
        <li>Worked with Maven to understand project structure, dependency management, and build workflows.</li>
        <li>Improved debugging, problem-solving, and team collaboration through assigned internship work.</li>
      </ul>
    </section>

    <section>
      <h2>Projects</h2>
      <div class="project">
        <h3>AI-Based Intrusion Detection System</h3>
        <p>Academic cybersecurity project exploring machine learning techniques for identifying suspicious network behavior. Worked on preprocessing, feature analysis, model training, and result interpretation to understand how AI can support threat detection workflows.</p>
      </div>
      <div class="project">
        <h3>Face Recognition Attendance System</h3>
        <p>Computer vision project using face detection and recognition concepts to support automated attendance logging. Practiced image processing, known-face matching, and structured attendance record storage.</p>
      </div>
      <div class="project">
        <h3>Jarvis AI Assistant</h3>
        <p>Python-based personal assistant project focused on command handling, task automation, and modular utility workflows.</p>
      </div>
      <div class="project">
        <h3>CSS Learning Platform</h3>
        <p>Frontend learning interface designed to explain CSS concepts through organized topics, responsive layouts, and visual examples.</p>
      </div>
    </section>

    <section>
      <h2>Skills</h2>
      <div class="skills">
        <span class="label">Programming</span><span>Python, Java, C, C++, JavaScript</span>
        <span class="label">Frontend</span><span>HTML, CSS, Tailwind CSS, React</span>
        <span class="label">Backend</span><span>Node.js, Express.js</span>
        <span class="label">Database</span><span>MySQL</span>
        <span class="label">AI/Data</span><span>Machine Learning, OpenCV, NumPy, Pandas</span>
        <span class="label">Tools</span><span>Git, GitHub, VS Code, Power BI, Postman, Maven</span>
      </div>
    </section>

    <section>
      <h2>Education</h2>
      <div class="row">
        <h3>B.E. in Artificial Intelligence & Data Science</h3>
        <span class="date">2024 - 2027, Pursuing</span>
      </div>
      <p>A.C. Patil College of Engineering, Kharghar, Navi Mumbai</p>
      <div class="row">
        <h3>Diploma in Information Technology</h3>
        <span class="date">2021 - 2024</span>
      </div>
      <p>Vidyalankar Polytechnic, Wadala - 80%</p>
      <div class="row">
        <h3>Secondary School Certificate</h3>
        <span class="date">Passed June 2021</span>
      </div>
      <p>St. Xavier's High School & Jr. College, Nerul - 80.80%</p>
    </section>

    <section>
      <h2>Additional Activities</h2>
      <p>Volunteering, drama/acting, poster making, and logo making.</p>
    </section>
  </main>
</body>
</html>`;

const outDir = join(process.cwd(), "public", "resume");
await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "adesh-kadu-resume.html"), resumeHtml);

console.log("Wrote public/resume/adesh-kadu-resume.html");
