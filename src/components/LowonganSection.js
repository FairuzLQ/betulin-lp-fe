import React, { useState } from 'react';
import '../styles/LowonganSection.css'; // Custom CSS for the section
import { FaBriefcase, FaSadTear } from 'react-icons/fa'; // Icons for job and no jobs

const jobs = [
  { id: 1, title: 'Frontend Developer', type: 'Kontrak', location: 'WFO' },
  { id: 2, title: 'Backend Developer', type: 'Kontrak', location: 'WFO' },
  { id: 3, title: 'UX Designer', type: 'Kontrak', location: 'Remote' },
  { id: 4, title: 'Project Manager', type: 'Full-time', location: 'WFO' },
  { id: 5, title: 'DevOps Engineer', type: 'Full-time', location: 'WFO' },
  { id: 6, title: 'QA Engineer', type: 'Full-time', location: 'WFO' },
  { id: 5, title: 'DevOps Engineer', type: 'Full-time', location: 'WFO' },
  { id: 6, title: 'QA Engineer', type: 'Full-time', location: 'WFO' },
  { id: 1, title: 'Frontend Developer', type: 'Kontrak', location: 'WFO' },
  { id: 2, title: 'Backend Developer', type: 'Kontrak', location: 'WFO' },
  { id: 3, title: 'UX Designer', type: 'Kontrak', location: 'Remote' },
  { id: 4, title: 'Project Manager', type: 'Full-time', location: 'WFO' },
  { id: 5, title: 'DevOps Engineer', type: 'Full-time', location: 'WFO' },
  { id: 6, title: 'QA Engineer', type: 'Full-time', location: 'WFO' },
  { id: 5, title: 'DevOps Engineer', type: 'Full-time', location: 'WFO' },
  { id: 6, title: 'QA Engineer', type: 'Full-time', location: 'WFO' },
  // Add more jobs as needed
];

const LowonganSection = () => {
  const [visibleJobs, setVisibleJobs] = useState(6); // Show 6 jobs by default

  const loadMoreJobs = () => {
    setVisibleJobs(prevVisibleJobs => prevVisibleJobs + 6); // Load 6 more jobs
  };

  return (
    <section className="lowongan-section">
      <h2 className="section-title">Lowongan Tersedia</h2>
      <div className="underline"></div>

      {/* Show this message if no jobs are available */}
      {jobs.length === 0 ? (
        <div className="no-jobs">
          <FaSadTear size={50} />
          <p>Belum ada lowongan yang tersedia saat ini.</p>
        </div>
      ) : (
        <>
          <div className="job-cards-container">
            {jobs.slice(0, visibleJobs).map(job => (
              <div className="job-card" key={job.id}>
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
            <button className="load-more-btn" onClick={loadMoreJobs}>
              Load More...
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default LowonganSection;
    