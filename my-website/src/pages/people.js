import React from "react";
import Layout from "@theme/Layout";
import "../css/people.css"; // Import the new CSS file

export default function PeoplePage() {
  return (
    <Layout>
      <div className="people-container">
        {/* Lab Members Grid */}

        <div className="prof-card" id="prof">
          <div className="prof-img-div">
            <img src="/People/Dr_Javanmardi.jpg" alt="professor img" className="prof-img"/>
          </div>
          <div className="prof-content">
            <div className="prof-content-div">
              <h2 className="prof-title">Dr. Mahdi Javanmardi</h2>
            </div>
            <div className="prof-content-div">
              <p className="prof-position">Assistant Professor, Amirkabir University of Technology</p>
            </div>
            <div className="prof-content-div">
              <p className="prof-lab-state">AISL director</p>
            </div>
            <div className="prof-content-div">
              <p className="prof-descripton">Mahdi Javanmardi (Member, IEEE) received the M.Sc. degree from the <b>Sharif University of Technology</b>, Iran, in 2013, and the Ph.D. degree in information and communication engineering from The <b>University of Tokyo</b>, Japan, in 2017.,He was a Visiting Student Researcher with the <b>University of California, Berkeley</b>, from 2016 to 2017. He has also completed the Graduate Program for Social ICT Global Creative Leaders with The University of Tokyo, in 2017. He has been a Post-Doctoral Researcher with the Institute of Industrial Science, The University of Tokyo, since 2017. His research interests include localization and mapping for an autonomous vehicle, autonomous vehicle’s perception, and computer vision. He is a member of the IEEE ITS Society..</p>
            </div>
            <div className="prof-content-div">
              <p className="prof-contact">Email: <a>mjavan@aut.ac.ir</a></p>
            </div>
          </div>
        </div>

        <h1 className="styled-heading">Research Assistants</h1>
        <div className="people-grid" id="Research-members">
          {Researchers.map((item, index) => (
            <div key={index} className="people-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Email: <a>{item.email}</a></p>
          </div>
          ))}
        </div>

        <h1 className="styled-heading">Master Students</h1>
        <div className="people-grid" id="master-members">
          {MasterStudents.map((item, index) => (
            <div key={index} className="people-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Email: <a>{item.email}</a></p>
          </div>
          ))}
        </div>

        <h1 className="styled-heading">Bachelor Students</h1>
        <div className="people-grid" id="bachelor-members">
          {BachelorStudents.map((item, index) => (
            <div key={index} className="people-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Email: <a>{item.email}</a></p>
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
              <p>Email: <a>{item.email}</a></p>
          </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

const Researchers = [
  { image: "/People/Hamidreza Hemati.jpg", title: "Hamidreza Hemati", description: "Researcher in AI and robotics.", position: "Researcher", email: "hrh.hemati@gmail.com" },
  { image: "/People/Ayar.jpg", title: "Fardin Ayar", description: "Researcher in AI and robotics.", position: "Researcher", email: "-"  },
  { image: "/People/Amir Kashi.jpg", title: "Amirhosein Kashani", description: "Researcher in AI and robotics.", position: "Researcher", email: "-"  },
  { image: "/People/Talebi.jpg", title: "Mitra Talebi", description: "Develops real-time control systems.", position: "Master's Student", email: "-"  }
];

const MasterStudents = [
  { image: "/People/Dolatabadi.jpg", title: "Minoo Dolatabadi", description: "Expert in sensor fusion.", position: "Researcher", email: "-"  },
  { image: "/People/Gholinejhad.jpg", title: "Ghazaleh Gholinejhad", description: "Works on deep learning applications.", position: "Researcher", email: "-"  },
  { image: "/People/Eftekhar.jpg", title: "Mohamad Sadegh Eftekhar", description: "VLM-based control of Autonomous vehicles", position: "Researcher", email: "-"  },
  ];

const BachelorStudents = [
  { image: "/People/Hamdi.jpg", title: "Daniyal Hamdi", description: "Developer of autonomous vehicle simulations.", position: "Researcher", email: "-"  },
  { image: "/People/hemmasian.jpg", title: "AmirParsa Hemmasian", description: "Specializes in wireless communications.", position: "Researcher", email: "-"  },
  { image: "/People/kabiri.jpg", title: "Abolfazl Kabiri", description: "Researcher in IoT security.", position: "Researcher", email: "-"  },
  { image: "/People/Mobli2.jpg", title: "Aida Mobli", description: "Visual SLAM", position: "Researcher", email: "-"  },
  ];

const Alumni = [
  { image: "/People/mohammad bagheri.jpg", title: "Mohammad Bagheri", description: "Works on reinforcement learning.", position: "Researcher", email: "-"  },
  { image: "/People/Rezaee.jpg", title: " Mohamad Ali Rezaee", description: "Expert in cloud computing.", position: "Researcher", email: "-"  },
  { image: "/People/ardakanian.jpg", title: "Bardia Ardakanian", description: "PhD student in embedded systems.", position: "PhD Student", email: "-"  },
];
