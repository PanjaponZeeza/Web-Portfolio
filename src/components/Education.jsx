import { useEffect } from 'react';
import '../styles/Education.css';

// ข้อมูลการศึกษา
const educationData = [
  {
    id: 1,
    institution: "Muang Pan Patthanawit School",
    degree: "Science-Mathematics Program",
    year: "2019 - 2021",
    location: "163 Village No. 2, Ban Kluai, Hua Mueang Subdistrict, Mueang Pan District, Lampang Province 52240",
    logo: "/public/imgs/MPP.jpg", // โลโก้โรงเรียน
  },
  {
    id: 2,
    institution: "Maejo University",
    degree: "Bachelor of Computer Science, Faculty of Science",
    year: "2022-present",
    location: "63, Tambon Nong Han, Amphoe San Sai, Chang Wat Chiang Mai 50290",
    logo: "/public/imgs/MJU_LOGO.svg.png", // โลโก้มหาวิทยาลัย
  },
];

const Education = () => {
  useEffect(() => {
    // สร้าง IntersectionObserver เพื่อตรวจสอบว่า timeline-item เข้ามาในมุมมองหรือไม่
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // เพิ่ม class 'show' เมื่อ element เข้าสู่มุมมอง
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // หยุดสังเกต element เมื่อแสดงแล้ว
          }
        });
      },
      { threshold: 0.5 } // กำหนด threshold เป็น 50%
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item)); // เริ่มสังเกตทุก timeline-item

    return () => {
      // ลบ observer เมื่อ component ถูก unmount
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="education-section" id="education">
      {/* ส่วนหัวเรื่องการศึกษา */}
      <h2 className="education-title">Educational Background</h2>
      <p className="education-description">
        My educational background highlights my dedication to continuous learning and personal growth.
      </p>

      {/* Timeline แสดงข้อมูลการศึกษา */}
      <div className="timeline">
        {educationData.map((item) => (
          <div className="timeline-item" key={item.id}>
            {/* ส่วนแสดงโลโก้ */}
            <div className="timeline-icon">
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
                className="institution-logo"
              />
            </div>

            {/* เนื้อหาข้อมูลการศึกษา */}
            <div className="timeline-content">
              <h3 className="institution">{item.institution}</h3>
              <p className="degree">{item.degree}</p>
              <p className="year">{item.year}</p>
              <p className="location">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
