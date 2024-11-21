import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaBriefcase, FaCalendarDay } from 'react-icons/fa';
import AOS from 'aos';
import DOMPurify from 'dompurify'; // Sanitize text before rendering
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
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/lowongan-kerjas?filters[documentId][$eq]=${documentId}&populate=*`
        );
        const data = await response.json();
        setJob(data.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [documentId]);

  const renderDetailPekerjaan = (detail) => {
    switch (detail.type) {
      case 'paragraph':
        return (
          <p key={detail.children[0]?.text}>
            {detail.children.map((child, index) => (
              <span
                key={index}
                style={{
                  fontWeight: child.bold ? 'bold' : 'normal',
                  fontStyle: child.italic ? 'italic' : 'normal',
                  textDecoration: child.underline
                    ? 'underline'
                    : child.strikethrough
                    ? 'line-through'
                    : 'none',
                }}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(child.text) }}
              />
            ))}
          </p>
        );
      case 'heading':
        const HeadingTag = `h${detail.level}`;
        return (
          <HeadingTag key={detail.children[0]?.text}>
            {detail.children.map((child, index) => (
              <span
                key={index}
                style={{
                  fontWeight: child.bold ? 'bold' : 'normal',
                  fontStyle: child.italic ? 'italic' : 'normal',
                }}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(child.text) }}
              />
            ))}
          </HeadingTag>
        );
      case 'list':
        const ListTag = detail.format === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag key={detail.format}>
            {detail.children.map((item, index) => (
              <li key={index}>
                {item.children.map((child, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontWeight: child.bold ? 'bold' : 'normal',
                      fontStyle: child.italic ? 'italic' : 'normal',
                    }}
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(child.text) }}
                  />
                ))}
              </li>
            ))}
          </ListTag>
        );
      default:
        return null;
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!job) return <p>Job not found</p>;

  return (
    <section className="karir-detail-page" data-aos="fade-up">
      <div className="karir-detail-content-wrapper">
        <div className="karir-detail-left" data-aos="fade-right">
          <h1 className="karir-detail-position">{job.RoleKerja}</h1>
          <p className="karir-detail-date-posted">
            Posted on: {new Date(job.TglPosting).toLocaleDateString()}
          </p>
          <p className="karir-detail-division">Division: {job.DivisiKerja}</p>

          <div className="karir-detail-content">
            {job.DeskripsiPekerjaan.map((section, index) => (
              <div key={index} className="karir-detail-section" data-aos="fade-up" data-aos-delay={`${index * 200}`}>
                {renderDetailPekerjaan(section)}
              </div>
            ))}
          </div>
        </div>

        <div className="karir-detail-right" data-aos="fade-left">
          <div className="karir-detail-job-summary-card" data-aos="fade-up" data-aos-delay="200">
            <h3 className="karir-detail-job-summary-title">Job Summary</h3>
            <div className="karir-detail-job-summary-content">
              <p>
                <FaMapMarkerAlt /> Lokasi: {job.LokasiPekerjaan}
              </p>
              <p>
                <FaBriefcase /> Job Type: {job.TipePekerjaan}
              </p>
              <p>
                <FaCalendarAlt /> Date Posted: {new Date(job.TglPosting).toLocaleDateString()}
              </p>
              <p>
                <FaClock /> Experience: {job.MinimalPengalaman}
              </p>
              <p>
                <FaClock /> Working Hours: {job.JamKerja}
              </p>
              <p>
                <FaCalendarDay /> Working Days: {job.HariKerja}
              </p>
            </div>
            <a
              href={`mailto:${job.LinkEmailPerusahaan}`}
              className="karir-detail-apply-btn"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KarirDetail;
