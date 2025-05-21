import React from 'react'

import "../assets/styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>تواصل معنا</h2>
      <form>
        <label>الاسم</label>
        <input type="text" placeholder="اكتب اسمك" />
        
        <label>البريد الإلكتروني</label>
        <input type="email" placeholder="example@email.com" />
        
        <label>الرسالة</label>
        <textarea placeholder="اكتب رسالتك هنا..."></textarea>
        
        <button type="submit">إرسال</button>
      </form>
    </section>
  );
}
