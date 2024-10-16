import React, { useState, useEffect } from 'react';
import '../styles/LowonganSection.css'; // Custom CSS for the section
import { FaBriefcase, FaSadTear } from 'react-icons/fa'; // Icons for job and no jobs
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const jobs = [
  { id: 1, title: 'Frontend Developer', type: 'Kontrak', location: 'WFO' },
  { id: 2, title: 'Backend Developer', type: 'Kontrak', location: 'WFO' },
  { id: 3, title: 'UX Designer', type: 'Kontrak', location: 'Remote' },
  { id: 4, title: 'Project Manager', type: 'Full-time', location: 'WFO' },
  { id: 5, title: 'DevOps Engineer', type: 'Full-time', location: 'WFO' },
  { id: 6, title: 'QA Engineer', type: 'Full-time', location: 'WFO' },
  { id: 3, title: 'UX Designer', type: 'Kontrak', location: 'Remote' },
  { id: 4, title: 'Project Manager', type: 'Full-time', location: 'WFO' },
  { id: 5, title: 'DevOps Engineer', type: 'Full-time', location: 'WFO' },
  { id: 6, title: 'QA Engineer', type: 'Full-time', location: 'WFO' },
  // Add more jobs as needed
];

const LowonganSection = () => {
  const [visibleJobs, setVisibleJobs] = useState(6); // Show 6 jobs by default

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      once: true, // Animate only once
      duration: 800, // Duration of animation
    });
  }, []);

  const loadMoreJobs = () => {
    setVisibleJobs(prevVisibleJobs => prevVisibleJobs + 6); // Load 6 more jobs
  };

  return (
    <section className="lowongan-section" data-aos="fade-up"> {/* Apply AOS animation */}
      <h2 className="section-title" data-aos="fade-right">Lowongan Tersedia</h2>
      <div className="underline" data-aos="fade-right"></div>

      {/* Show this message if no jobs are available */}
      {jobs.length === 0 ? (
        <div className="no-jobs" data-aos="fade-up">
          <FaSadTear size={100} />
          <p>Belum ada lowongan yang tersedia saat ini.</p>
        </div>
      ) : (
        <>
          <div className="job-cards-container">
            {jobs.slice(0, visibleJobs).map(job => (
              <div className="job-card" key={job.id} data-aos="fade-up">
                <FaBriefcase className="job-icon" />
                <h3 className="job-title">{job.title}</h3>
                <p className="job-details">
                  {job.type} <span className="divider">|</span> {job.location}
                </p>
                <button className="apply-btn">Lamar</button>
              </div>
            ))}
          </div>

          {/* Show the Load More button if there are more jobs to load */}
          {visibleJobs < jobs.length && (
            <button className="load-more-btn" onClick={loadMoreJobs} data-aos="fade-up">
              Load More...
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default LowonganSection;
