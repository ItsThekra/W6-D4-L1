import React from 'react'

import "../assets/styles/Courses.css";

const courses = [
  {
    title: "الأمن السيبراني",
    description: "تعلم الحماية الرقمية",
    duration: "4 أسابيع",
    image: "https://cdn.tuwaiq.edu.sa/initiatives_admin/images/5zfvtxnl.uqu.webp",
  },
  {
    title: "برمجة الويب",
    description: "HTML, CSS, JavaScript",
    duration: "6 أسابيع",
    image: "https://cdn.tuwaiq.edu.sa/initiatives_admin/images/bdp2dbpf.alb.webp",
  },
  {
    title: "الذكاء الاصطناعي",
    description: "مقدمة في AI",
    duration: "5 أسابيع",
    image: "https://cdn.tuwaiq.edu.sa/initiatives_admin/images/vqo0wdmq.ajk.webp",
  },
];

export default function Courses() {
  return (
    <section className="courses">
      <h2>الدورات التدريبية</h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <span>{course.duration}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
