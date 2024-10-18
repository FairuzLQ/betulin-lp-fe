import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaShareAlt, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaBriefcase, FaCalendarDay, FaEnvelope } from 'react-icons/fa'; // Font Awesome Icons
import '../styles/KarirDetail.css'; // Custom CSS for KarirDetail

const KarirDetail = () => {
  // Dummy Data for a career detail
  const selectedPosition = {
    id: 1,
    position: 'Frontend Developer',
    datePosted: 'Rabu, 12 Oktober 2024',
    division: 'Engineering',
    content: [
      {
        title: 'Who Are We Looking For',
        description: 'We are looking for talented individuals who can work independently and as part of a team. You should have excellent communication skills and a passion for frontend development.',
      },
      {
        title: 'What You Will Be Doing',
        description: 'You will be responsible for building and maintaining the frontend of our web applications, working closely with designers and backend developers to create a seamless user experience.',
      },
      {
        title: 'Skills You Should Have',
        description: 'Experience with React, JavaScript, HTML, CSS, and responsive design. Familiarity with version control systems like Git is also required.',
      },
    ],
  };

  // Dummy Data for job summary
  const jobSummary = {
    location: 'Jakarta Selatan',
    jobType: 'Full time',
    datePosted: '3 hari yang lalu',
    experience: '1 tahun',
    workingHours: '09.00-17.00',
    workingDays: 'Senin-Jumat',
    email: 'jobs@company.com', // Company email for Apply Now button
  };

  return (
    <section className="karir-detail-page">
      <div className="karir-detail-content-wrapper">
        {/* Left Side: Position Detail Section */}
        <div className="karir-detail-left">
          <h1 className="karir-detail-position">{selectedPosition.position}</h1>
          <p className="karir-detail-date-posted">Posted on: {selectedPosition.datePosted}</p>
          <p className="karir-detail-division">Division: {selectedPosition.division}</p>

          <div className="karir-detail-content">
            {selectedPosition.content.map((section, index) => (
              <div key={index} className="karir-detail-section">
                <h2 className="karir-detail-section-title">{section.title}</h2>
                <p className="karir-detail-section-description">{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Job Summary, Apply Button, and Social Media */}
        <div className="karir-detail-right">
          {/* Job Summary Card */}
          <div className="karir-detail-job-summary-card">
            <h3 className="karir-detail-job-summary-title">Job Summary</h3>
            <div className="karir-detail-job-summary-content">
              <p><FaMapMarkerAlt /> Lokasi: {jobSummary.location}</p>
              <p><FaBriefcase /> Job Type: {jobSummary.jobType}</p>
              <p><FaCalendarAlt /> Date Posted: {jobSummary.datePosted}</p>
              <p><FaClock /> Experience: {jobSummary.experience}</p>
              <p><FaClock /> Working Hours: {jobSummary.workingHours}</p>
              <p><FaCalendarDay /> Working Days: {jobSummary.workingDays}</p>
            </div>
            {/* Apply Now Button */}
            <a href={`mailto:${jobSummary.email}`} className="karir-detail-apply-btn">Apply Now</a>
          </div>

          {/* Social Media Section */}
          <div className="karir-detail-social-media-section">
            <h3>Follow Us</h3>
            <ul className="karir-detail-social-media-list">
              <li><FaFacebook /> <a href="https://facebook.com">Facebook</a></li>
              <li><FaTwitter /> <a href="https://twitter.com">Twitter</a></li>
              <li><FaInstagram /> <a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>

          {/* Banners */}
          <div className="karir-detail-banner-section">
            <div className="karir-detail-banner">
              <h4>Special Offers!</h4>
              <a href="/offers" className="karir-detail-banner-btn">Check Offers</a>
            </div>
            <div className="karir-detail-banner">
              <h4>Get a Free Quote!</h4>
              <a href="/quote" className="karir-detail-banner-btn">Request Quote</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KarirDetail;
