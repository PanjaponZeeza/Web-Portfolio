import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // นำเข้า PropTypes เพื่อกำหนดประเภทของ props
import '../styles/Header.css'; // นำเข้าไฟล์ CSS สำหรับ Header

function Header({ homeRef, educationRef, skillsRef, contactRef }) {
  // สถานะเพื่อบอกว่า header เลื่อน (scrolled) หรือไม่
  const [scrolled, setScrolled] = useState(false);

  // ฟังก์ชันที่ตรวจสอบว่า scroll ตำแหน่งของหน้าต่างอยู่ในตำแหน่งที่เลื่อนลงมาแล้วหรือยัง
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true); // ถ้าเลื่อนลงมา ให้ตั้งค่า scrolled เป็น true
    } else {
      setScrolled(false); // ถ้าอยู่ตำแหน่งบนสุด ให้ตั้งค่า scrolled เป็น false
    }
  };

  // ใช้ useEffect เพื่อเพิ่มและลบ event listener เมื่อ component mount/unmount
  useEffect(() => {
    // เพิ่ม event listener เมื่อ scroll
    window.addEventListener('scroll', handleScroll);

    // ลบ event listener เมื่อ component ถูก unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // [] หมายความว่า effect นี้จะทำงานครั้งเดียวเมื่อ component mount

  // ฟังก์ชันสำหรับเลื่อนหน้าไปยัง section ที่กำหนด
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth', // ทำให้การเลื่อนเป็นแบบนุ่มนวล
      block: 'start',     // ให้ section อยู่ที่ตำแหน่งบนสุดของหน้าจอ
      inline: 'nearest',  // ป้องกันการเลื่อนแนวนอน
    });
  };

  return (
    <header className={`header-container ${scrolled ? 'header-scrolled' : ''}`}>
      {/* ส่วนหัวของเว็บไซต์ */}
      <h1>Welcome to My Portfolio</h1>

      {/* เมนูนำทาง */}
      <nav>
        <a onClick={() => scrollToSection(homeRef)} href="#home">Home</a>
        <a onClick={() => scrollToSection(educationRef)} href="#education">Education</a>
        <a onClick={() => scrollToSection(skillsRef)} href="#skills">Skills</a>
        <a onClick={() => scrollToSection(contactRef)} href="#contact">Contact</a>
      </nav>
    </header>
  );
}

// กำหนดประเภทของ props เพื่อช่วยในการตรวจสอบ
Header.propTypes = {
  homeRef: PropTypes.object.isRequired,
  educationRef: PropTypes.object.isRequired,
  skillsRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
};

export default Header;
