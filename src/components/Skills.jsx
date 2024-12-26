import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, faNodeJs, faJsSquare, faHtml5, faCss3Alt, 
  faPython, faJava, faGitAlt 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faPalette, faCode } from '@fortawesome/free-solid-svg-icons';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills">
      {/* หัวข้อหลักของส่วนนี้ */}
      <h2>My Skills</h2>
      
      {/* หมวดหมู่ Programming Languages */}
      <div className="skills-category">
        <h3>Programming Languages</h3>
        <div className="skills-container">
          {/* HTML */}
          <div className="skill">
            <FontAwesomeIcon icon={faHtml5} size="3x" />
            <p>HTML</p>
          </div>
          
          {/* CSS */}
          <div className="skill">
            <FontAwesomeIcon icon={faCss3Alt} size="3x" />
            <p>CSS</p>
          </div>
          
          {/* JavaScript */}
          <div className="skill">
            <FontAwesomeIcon icon={faJsSquare} size="3x" />
            <p>JavaScript</p>
          </div>
          
          {/* Python */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <p>Python</p>
          </div>
          
          {/* Java */}
          <div className="skill">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <p>Java</p>
          </div>
        </div>
      </div>
      
      {/* หมวดหมู่ Frameworks & Libraries */}
      <div className="skills-category">
        <h3>Frameworks & Libraries</h3>
        <div className="skills-container">
          {/* React.js */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <p>React.js</p>
          </div>
          
          {/* Node.js */}
          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
            <p>Node.js</p>
          </div>
          
          {/* Vue.js */}
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <p>Vue.js</p>
          </div>
        </div>
      </div>
      
      {/* หมวดหมู่ Database */}
      <div className="skills-category">
        <h3>Database</h3>
        <div className="skills-container">
          {/* MongoDB */}
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
      
      {/* หมวดหมู่ Design Tools */}
      <div className="skills-category">
        <h3>Design Tools</h3>
        <div className="skills-container">
          {/* Figma */}
          <div className="skill">
            <FontAwesomeIcon icon={faPalette} size="3x" />
            <p>Figma</p>
          </div>
        </div>
      </div>
      
      {/* หมวดหมู่ Other Tools & Skills */}
      <div className="skills-category">
        <h3>Other Tools & Skills</h3>
        <div className="skills-container">
          {/* Git */}
          <div className="skill">
            <FontAwesomeIcon icon={faGitAlt} size="3x" />
            <p>Git</p>
          </div>
          
          {/* Vite */}
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <p>Vite</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
