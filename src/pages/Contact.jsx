import React from 'react'

export default function Contact() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm">الاسم</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm">البريد الإلكتروني</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm">الرسالة</label>
          <textarea className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">إرسال</button>
      </form>
    </div>
  );
}
