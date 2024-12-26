// นำเข้าไอคอนจาก react-icons สำหรับโซเชียลมีเดียต่าง ๆ
import { FaFacebook, FaInstagram, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa'; // ไอคอนโซเชียลที่ใช้
import '../styles/Contact.css'; // สไตล์ CSS

function Contact() {
  return (
    <section id="contact">
      {/* หัวข้อหลักของส่วน Contact */}
      <h2>Contact</h2>

      {/* แสดงไอคอนโซเชียลมีเดีย */}
      <div className="social-icons">
        {/* ลิงก์ไปยัง Facebook */}
        <a href="https://www.facebook.com/profile.php?id=100010483279668" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        
        {/* ลิงก์ไปยัง Instagram */}
        <a href="https://www.instagram.com/zz_panjapon/profilecard/?" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        
        {/* ลิงก์ไปยัง GitHub */}
        <a href="https://github.com/PanjaponZeeza" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        
        {/* ลิงก์ไปยัง YouTube */}
        <a href="https://www.youtube.com/channel/UCEJnIygcQoqc4emGwsPEcQA" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        
        {/* ลิงก์ไปยังอีเมล */}
        <a href="mailto:panjaponpuakinsang2004@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Contact;
