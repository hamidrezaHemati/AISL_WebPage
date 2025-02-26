import React from "react";
import Layout from "@theme/Layout";
import "../css/people.css"; // Import the new CSS file

export default function PeoplePage() {
  return (
    <Layout>
      <div className="people-container">
        {/* Lab Members Grid */}
        <div className="prof-grid" id="professors">
          {Prof.map((item, index) => (
            <div key={index} className="prof-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
          </div>
          ))}
        </div>

        <h1 className="styled-heading">Research Assistants</h1>
        <div className="people-grid" id="Research-members">
          {Researchers.map((item, index) => (
            <div key={index} className="people-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
          </div>
          ))}
        </div>

        <h1 className="styled-heading">Masters' Students</h1>
        <div className="people-grid" id="master-members">
          {MasterStudents.map((item, index) => (
            <div key={index} className="people-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
          </div>
          ))}
        </div>

        <h1 className="styled-heading">Bachelors' Students</h1>
        <div className="people-grid" id="bachelor-members">
          {BachelorStudents.map((item, index) => (
            <div key={index} className="people-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
          </div>
          ))}
        </div>

        <h1 className="styled-heading">Alumni</h1>
        <div className="people-grid" id="alumni-members">
          {Alumni.map((item, index) => (
            <div key={index} className="people-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
          </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

const Prof = [
  { image: "/People/Dr_Javanmardi.jpg", title: "Dr. Mahdi Javanmardi", description: "Assistant Proffesor. AISL director", position: "Professor" }
];

const Researchers = [
  { image: "/People/Hamidreza Hemati.jpg", title: "Hamidreza Hemati", description: "Researcher in AI and robotics.", position: "Researcher" },
  { image: "/People/Ayar.jpg", title: "Fardin Ayar", description: "Researcher in AI and robotics.", position: "Researcher" },
  { image: "/People/Amir Kashi.jpg", title: "Amirhosein Kashani", description: "Researcher in AI and robotics.", position: "Researcher" },
  { image: "/People/Talebi.jpg", title: "Mitra Talebi", description: "Develops real-time control systems.", position: "Master's Student" }
];

const MasterStudents = [
  { image: "/People/Dolatabadi.jpg", title: "Minoo Dolatabadi", description: "Expert in sensor fusion.", position: "Researcher" },
  { image: "/People/Gholinejhad.jpg", title: "Ghazaleh Gholinejhad", description: "Works on deep learning applications.", position: "Researcher" },
  { image: "/People/Eftekhar.jpg", title: "Mohamad Sadegh Eftekhar", description: "VLM-based control of Autonomous vehicles", position: "Researcher" },
  ];

const BachelorStudents = [
  { image: "/People/Hamdi.jpg", title: "Daniyal Hamdi", description: "Developer of autonomous vehicle simulations.", position: "Researcher" },
  { image: "/People/hemmasian.jpg", title: "AmirParsa Hemmasian", description: "Specializes in wireless communications.", position: "Researcher" },
  { image: "/People/kabiri.jpg", title: "Abolfazl Kabiri", description: "Researcher in IoT security.", position: "Researcher" },
  { image: "/People/Mobli2.jpg", title: "Aida Mobli", description: "Visual SLAM", position: "Researcher" },
  ];

const Alumni = [
  { image: "/People/mohammad bagheri.jpg", title: "Mohammad Bagheri", description: "Works on reinforcement learning.", position: "Researcher" },
  { image: "/People/Rezaee.jpg", title: " Mohamad Ali Rezaee", description: "Expert in cloud computing.", position: "Researcher" },
  { image: "/People/ardakanian.jpg", title: "Bardia Ardakanian", description: "PhD student in embedded systems.", position: "PhD Student" },
];
