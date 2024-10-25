import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaBriefcase, FaCalendarDay, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/KarirDetail.css';

const KarirDetail = () => {
  const { documentId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/lowongan-kerjas?filters[documentId][$eq]=${documentId}&populate=*`);
        const data = await response.json();
        setJob(data.data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job details:", error);
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [documentId]);

  if (loading) return <p>Loading...</p>;
  if (!job) return <p>Job not found</p>;

  return (
    <section className="karir-detail-page" data-aos="fade-up">
      <div className="karir-detail-content-wrapper">
        <div className="karir-detail-left" data-aos="fade-right">
          <h1 className="karir-detail-position">{job.RoleKerja}</h1>
          <p className="karir-detail-date-posted">Posted on: {new Date(job.TglPosting).toLocaleDateString()}</p>
          <p className="karir-detail-division">Division: {job.DivisiKerja}</p>

          <div className="karir-detail-content">
            {job.DeskripsiPekerjaan.map((section, index) => (
              <React.Fragment key={index}>
                <p className="karir-detail-section-description" data-aos="fade-up" data-aos-delay={`${index * 200}`}>
                  {section.children[0]?.text || ''}
                </p>
                <br /> {/* Additional line break after each paragraph */}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="karir-detail-right" data-aos="fade-left">
          <div className="karir-detail-job-summary-card" data-aos="fade-up" data-aos-delay="200">
            <h3 className="karir-detail-job-summary-title">Job Summary</h3>
            <div className="karir-detail-job-summary-content">
              <p><FaMapMarkerAlt /> Lokasi: {job.LokasiPekerjaan}</p>
              <p><FaBriefcase /> Job Type: {job.TipePekerjaan}</p>
              <p><FaCalendarAlt /> Date Posted: {new Date(job.TglPosting).toLocaleDateString()}</p>
              <p><FaClock /> Experience: {job.MinimalPengalaman}</p>
              <p><FaClock /> Working Hours: {job.JamKerja}</p>
              <p><FaCalendarDay /> Working Days: {job.HariKerja}</p>
            </div>
            <a href={`mailto:jobs@company.com`} className="karir-detail-apply-btn">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KarirDetail;
