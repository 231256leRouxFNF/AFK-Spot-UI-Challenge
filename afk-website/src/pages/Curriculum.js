import React from 'react';
import './Curriculum.css';
import { FaLaptopCode, FaGamepad, FaGraduationCap, FaGlobe, FaPaintBrush, FaRobot, FaCodeBranch, FaRocket, FaProjectDiagram, FaBug } from 'react-icons/fa';

const curriculumData = [
  {
    month: 'February',
    title: 'Introduction to Coding Concepts',
    icon: <FaRobot />,
    points: [
      'Introduction to block-based coding using Scratch.',
      'Understanding coding logic: loops, conditionals, and variables.',
    ],
  },
  {
    month: 'March',
    title: 'Storytelling Through Coding',
    icon: <FaPaintBrush />,
    points: [
      'Create interactive stories using Scratch.',
      'Learn about sequencing and debugging.',
    ],
  },
  {
    month: 'April',
    title: 'Building Simple Games',
    icon: <FaGamepad />,
    points: [
      'Develop basic games like Pong using Scratch.',
      'Introduction to sprite movement and event-based programming.',
    ],
  },
  {
    month: 'May',
    title: 'Introduction to Web Development',
    icon: <FaGlobe />,
    points: [
      'Learn the basics of HTML.',
      'Build a simple webpage: formatting text, images, and links.',
    ],
  },
  {
    month: 'June',
    title: 'Styling Web Pages',
    icon: <FaPaintBrush />,
    points: [
      'Introduction to CSS.',
      'Style webpages with fonts, colors, and layouts.',
    ],
  },
  {
    month: 'July',
    title: 'Animating Web Pages',
    icon: <FaRocket />,
    points: [
      'Adding animations and transitions with CSS.',
      'Introduction to simple animations using JavaScript.',
    ],
  },
  {
    month: 'August',
    title: 'Game Development with JavaScript',
    icon: <FaLaptopCode />,
    points: [
      'Build basic interactive games using JavaScript.',
      'Explore variables, functions, and event listeners in game creation.',
    ],
  },
  {
    month: 'September',
    title: 'Advanced Game Logic',
    icon: <FaCodeBranch />,
    points: [
      'Develop more complex games.',
      'Use multiple levels and advanced functions in JavaScript.',
    ],
  },
  {
    month: 'October',
    title: 'Final Project – Web Design',
    icon: <FaProjectDiagram />,
    points: [
      'Students design and create their own webpage or game.',
      'Incorporate everything learned (HTML, CSS, JavaScript).',
    ],
  },
  {
    month: 'November',
    title: 'Project Showcase & Graduation',
    icon: <FaGraduationCap />,
    points: [
      'Students present their final projects.',
      'Graduation ceremony and certificates.',
    ],
  },
];

const CurriculumPage = () => {
  return (
    <div className="curriculum-page">

      {/* Overview */}
      <section className="curriculum-section overview">
        <h2>Program Overview</h2>
        <p>
          Our 10-month curriculum is designed to take students from beginner to intermediate level in coding, ensuring they have a solid foundation in programming by the end of the course.
        </p>
      </section>

      {/* Timeline */}
      <section className="curriculum-section timeline">
        <h2>Month-by-Month Breakdown</h2>
        <div className="timeline-container">
          {curriculumData.map((item, index) => (
            <div className="timeline-card" key={index}>
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <h3>{item.month}: {item.title}</h3>
                <ul>
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Used */}
      <section className="curriculum-section tools-used">
        <h2>Tools Used</h2>
        <ul>
          <li><strong>Scratch:</strong> February – April</li>
          <li><strong>HTML, CSS, JavaScript:</strong> May – November</li>
        </ul>
      </section>

    </div>
  );
};

export default CurriculumPage;