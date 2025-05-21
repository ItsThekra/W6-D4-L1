import React from 'react'
import "../assets/styles/Footer.css";


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} أكاديمية طويق. جميع الحقوق محفوظة.</p>
    </footer>
  );
}
