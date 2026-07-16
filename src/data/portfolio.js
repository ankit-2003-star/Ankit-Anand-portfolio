export const profile = {
  name: "Ankit Anand",
  handle: "ankit-2003-star",
  role: "Full-Stack Developer",
  subrole: "CS Student · AI/ML Explorer",
  location: "India",
  tagline:
    "I build full-stack products end to end, then teach myself machine learning on the weekends.",
  bio: "Computer science student and full-stack developer who likes shipping things that work: e-commerce platforms, real-time apps, and small desktop utilities. Lately I've been going deep on data structures & algorithms and building ML systems from scratch — recommendation engines, CNNs, the kind of stuff that makes you actually understand the math instead of just importing it.",
  email: "ankitanand160304@gmail.com",
  github: "https://github.com/ankit-2003-star",
  linkedin: "https://www.linkedin.com/in/ankitanand16/",
  resumeNote: "Open to internships & full-time full-stack / ML roles",
};

export const skillGroups = [
  {
    label: "LANGUAGES",
    items: ["JavaScript", "Python", "Java"],
  },
  {
    label: "FRONTEND",
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap", "HTML5 / CSS3"],
  },
  {
    label: "BACKEND",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "DATA",
    items: ["MongoDB", "MySQL", "Vector Search"],
  },
  {
    label: "CLOUD & DEVOPS",
    items: ["AWS", "Google Cloud", "Azure", "Git"],
  },
  {
    label: "TOOLING",
    items: ["Vite", "VS Code", "Postman"],
  },
];

export const focusAreas = [
  {
    tag: "01",
    title: "Full-Stack Web Development",
    desc: "Shipping complete products — from schema design to the last pixel of the UI.",
  },
  {
    tag: "02",
    title: "Backend with Node.js & Express",
    desc: "APIs, auth, and data pipelines built to actually hold up under real traffic.",
  },
  {
    tag: "03",
    title: "Data Structures & Algorithms",
    desc: "Daily reps on problem solving — the muscle behind clean, efficient code.",
  },
  {
    tag: "04",
    title: "AI / Machine Learning",
    desc: "Recommendation systems, computer vision, and everything in between.",
  },
];

export const projects = [
  {
    name: "NovaCart",
    fullName: "AI E-Commerce Platform",
    description:
      "A full-stack e-commerce app with AI-powered product embeddings and vector search, built on Next.js and MongoDB. Includes batched embedding pipelines with rate-limit handling and retry logic.",
    stack: ["Next.js", "MongoDB", "Vector Search", "Gemini API"],
    status: "Deployed",
    repo: "https://github.com/ankit-2003-star/NovaCart-Ai-Ecommerce-Website",
    kind: "web",
  },
  {
    name: "NovaMeet",
    fullName: "Real-Time Video Conferencing Platform",
    description:
      "A real-time video conferencing app built for low-latency multi-user calls, covering signaling, media streams, and room management.",
    stack: ["JavaScript", "WebRTC", "Node.js"],
    status: "Deployed",
    repo: "https://github.com/ankit-2003-star/NovaMeet-Real-Time-Video-Conferencing-Platform",
    kind: "web",
  },
  {
    name: "AirBnB Clone",
    fullName: "Full-Stack Booking Platform",
    description:
      "An end-to-end clone of Airbnb's core booking flow — listings, search, and reservations — built to master full-stack architecture patterns.",
    stack: ["JavaScript", "React", "Node.js"],
    status: "Deployed",
    repo: "https://github.com/ankit-2003-star/AirBnB-Clone",
    kind: "web",
  },
  {
    name: "Hybrid Movie Recommender",
    fullName: "Collaborative + Content-Based Filtering",
    description:
      "A recommendation engine that blends SVD-based matrix factorization with TF-IDF + cosine similarity, structured as a clean multi-module ML project with persisted model artifacts.",
    stack: ["Python", "scikit-learn", "SVD", "TF-IDF"],
    status: "ML Project",
    repo: "https://github.com/ankit-2003-star",
    kind: "ml",
  },
  {
    name: "Digit Recognizer",
    fullName: "CNN Handwritten Digit Classifier",
    description:
      "A convolutional neural network trained on handwritten digits, built in PyTorch with a full project structure and a from-scratch training notebook.",
    stack: ["Python", "PyTorch", "CNN"],
    status: "ML Project",
    repo: "https://github.com/ankit-2003-star",
    kind: "ml",
  },
  {
    name: "Mac Island for Windows",
    fullName: "Dynamic Island, Windows Port",
    description:
      "A lightweight desktop utility that brings macOS-style Dynamic Island notifications and widgets to Windows.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Utility",
    repo: "https://github.com/ankit-2003-star/Mac-Island-for-Windows",
    kind: "tool",
  },
  {
    name: "Right Dock for Windows",
    fullName: "Edge-Docked App Launcher",
    description: "A minimal right-side dock for Windows, for quick access to pinned apps.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Utility",
    repo: "https://github.com/ankit-2003-star/Right-Dock-for-Windows",
    kind: "tool",
  },
  {
    name: "LeetCode Sync",
    fullName: "LeetCode → GitHub Auto-Sync",
    description:
      "A Firefox extension that automatically syncs your accepted LeetCode submissions to a GitHub repo — available on the Firefox Add-on store.",
    stack: ["JavaScript", "Browser Extension API"],
    status: "Firefox Add-on",
    repo: "https://github.com/ankit-2003-star/Leetcode-sync-to-GitHub",
    kind: "tool",
  },
];

export const orbitNodes = ["JS", "React", "Node", "Py", "ML", "SQL"];


export const timeline = [
  {
    period: "2023 — Present",
    role: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
    org: "Birla Institute Of Technology, Mesra",
    desc: "CGPA: 9.35/10. Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Compiler Design, Cryptography & Network Security, and Artificial Intelligence & Machine Learning.",
    type: "education",
  },
  {
    period: "June 2026 - July 2026",
    role: "GovTech Intern",
    org: "KPMG India",
    desc: "Developed a full-stack Attendance Management System for Government schools with role-based authentication, student attendance tracking, leave management, and analytics using React, FastAPI, MongoDB, and JWT.",
    type: "work",
  },
  {
    period: "May 2026 - July 2026",
    role: "Artificial Intelligence Intern",
    org: "Codec Technologies",
    desc: "Completed a hands-on Artificial Intelligence internship where I developed machine learning projects, explored data-driven solutions, and strengthened my Python and AI development skills.",
    type: "work",
  },
  {
    period: "2025",
    role: "Certification",
    org: "IIT Kharagpur",
    desc: "Awarded Gold Medal in Internet of Things (IoT) course.",
    type: "milestone",
  },
  {
    period: "May 2020 – Mar 2022",
    role: "Intermediate (Science, Computer Science)",
    org: "Delhi Public School, Ranchi",
    desc: "Scored 91% in CBSE Class XII with Physics, Chemistry, Mathematics, and Computer Science, building a strong foundation in analytical thinking and programming.",
    type: "education",
  },
  {
    period: "2009 – 2020",
    role: "Secondary Education",
    org: "Tender Heart Senior Secondary School",
    desc: "Achieved 96.4% in CBSE Class X, securing a place among the top three students in the school out of 500+ students, demonstrating consistent academic excellence.",
    type: "education",
  }
];
