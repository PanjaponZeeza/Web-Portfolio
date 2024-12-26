import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ใช้สำหรับการเปลี่ยนเส้นทางใน React Router
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  // สร้าง instance ของ useNavigate เพื่อเปลี่ยนเส้นทาง
  const navigate = useNavigate();

  // ใช้ useRef เพื่อเก็บการอ้างอิงถึงแต่ละส่วนของหน้า
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // ใช้ useEffect เพื่อเปลี่ยนเส้นทางไปยังหน้า root เมื่อโหลดแอป
  useEffect(() => {
    navigate('/'); // เปลี่ยนเส้นทางไปยัง root (หน้าแรก)
  }, [navigate]);

  return (
    <div>
      {/* ส่วน Header */}
      <Header
        homeRef={homeRef} // ส่งการอ้างอิง homeRef ไปยัง Header
        educationRef={educationRef} // ส่งการอ้างอิง educationRef ไปยัง Header
        skillsRef={skillsRef} // ส่งการอ้างอิง skillsRef ไปยัง Header
        contactRef={contactRef} // ส่งการอ้างอิง contactRef ไปยัง Header
      />

      {/* ส่วน Home */}
      <div ref={homeRef}>
        <Home />
      </div>

      {/* ส่วน Education */}
      <div ref={educationRef}>
        <Education />
      </div>

      {/* ส่วน Skills */}
      <div ref={skillsRef}>
        <Skills />
      </div>

      {/* ส่วน Contact */}
      <div ref={contactRef}>
        <Contact />
      </div>

      {/* ส่วน Footer */}
      <Footer />
    </div>
  );
}

export default App;
