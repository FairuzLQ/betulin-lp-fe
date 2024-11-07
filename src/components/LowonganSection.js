import React, { useState, useEffect } from 'react';
import '../styles/LowonganSection.css';
import { FaBriefcase, FaSadTear } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const LowonganSection = () => {
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });

    const fetchOpenJobs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/lowongan-kerjas`);
        const data = await response.json();

        const openJobs = data.data.filter((job) => job.StatusLowongan === "open");
        setJobs(openJobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchOpenJobs();
  }, []);

  const loadMoreJobs = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 6);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section className="lowongan-section" data-aos="fade-up">
      <h2 id="lowonganAda" className="section-title-lowongan" data-aos="fade-right">Lowongan Tersedia</h2>
      <div className="underline" data-aos="fade-right"></div>

      {jobs.length === 0 ? (
        <div className="no-jobs" data-aos="fade-up">
          <FaSadTear size={100} color='#06479d' />
          <p>Belum ada lowongan yang tersedia saat ini.</p>
        </div>
      ) : (
        <>
          <div className="job-cards-container">
            {jobs.slice(0, visibleJobs).map((job) => (
              <div className="job-card" key={job.documentId} data-aos="fade-up">
                <FaBriefcase className="job-icon" />
                <h3 className="job-title">{job.RoleKerja}</h3>
                <p className="job-details">
                  {job.TipePekerjaan} <span className="divider">|</span> {job.LokasiPekerjaan}
                </p>
                {/* Link to job detail using documentId */}
                <Link to={`/karir-detail/${job.documentId}`} className="apply-btn">Lamar</Link>
              </div>
            ))}
          </div>

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
