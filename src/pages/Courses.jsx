import React from 'react'

const courses = [
  { title: 'الأمن السيبراني', description: 'تعلم أساسيات الأمن السيبراني.', duration: '4 أسابيع' },
  { title: 'برمجة الويب', description: 'تعلم HTML و CSS و JavaScript.', duration: '6 أسابيع' },
  { title: 'الذكاء الاصطناعي', description: 'مقدمة في الذكاء الاصطناعي.', duration: '5 أسابيع' }
];

export default function Courses() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">الدورات</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course, i) => (
          <div key={i} className="border rounded p-4 shadow bg-white">
            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-1">{course.description}</p>
            <p className="text-sm text-gray-500">المدة: {course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

