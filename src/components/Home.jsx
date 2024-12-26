// นำเข้าไฟล์ CSS และไอคอนที่ใช้ในส่วน Home
import '../styles/Home.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Home() {
  return (
    <section id="home" className="home-container">
      {/* ส่วนเนื้อหาหลักของหน้า Home */}
      <div className="home-content">
        <h1>
          Hello, world! <br />
          I&apos;m <span className="highlight">Panjapon Puakinsang</span>
        </h1>
        <p>
          I am currently a third-year Computer Science student at the Faculty of Science, Maejo University. 
          I have a keen interest in web development, especially in Frontend development with React and creating 
          user-centered UI/UX designs.
          <br />
          My goal is to become a professional software developer who can build effective solutions to solve 
          real-world problems and enhance user experiences. I am always eager to learn new things and constantly 
          strive to improve myself.
        </p>

        {/* แสดงข้อมูลการติดต่อ */}
        <div className="contact-info">
          <p>
            <FaMapMarkerAlt /> Location: Chiang Mai, Thailand
          </p>
          <p>
            <FaPhone /> Phone: 065-497-2783
          </p>
          <p>
            <FaEnvelope /> Email: panjaponpuakinsang2004@gmail.com
          </p>
        </div>

        {/* ปุ่มดาวน์โหลด Resume */}
        <br />
        <a href="/public/docs/CV Resume.pdf" download className="resume-btn">
          Download Resume
        </a>
      </div>

      {/* ส่วนแสดงรูปภาพโปรไฟล์ */}
      <div className="home-image">
        <img src="/imgs/Zeeza.jpg" alt="Profile" />
      </div>
    </section>
  );
}

export default Home;
