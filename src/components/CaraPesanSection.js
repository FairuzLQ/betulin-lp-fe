import React from 'react';
import '../styles/CaraPesanSection.css'; // CSS file for styling

const CaraPesanSection = () => {
    const steps = [
        { step: 1, description: 'Pilih layanan yang diinginkan' },
        { step: 2, description: 'Masukkan detail alamat dan waktu' },
        { step: 3, description: 'Konfirmasi pesanan' },
        { step: 4, description: 'Teknisi akan datang sesuai jadwal' },
        { step: 5, description: 'Selesaikan pembayaran' },
        { step: 6, description: 'Kunjungan dan pengerjaan' },
    ];

    return (
        <section className="cara-pesan-section">
            <h2 className="cara-pesan-title">Cara Pesan</h2>
            <div className="timeline-container">
                <div className="timeline-line"></div>
                <div className="timeline-steps">
                    {steps.map((step, index) => (
                        <div className="timeline-step" key={index}>
                            <div className="timeline-step-point">
                                <span className="step-number">{step.step}</span>
                            </div>
                            <div className="step-description">
                                <h3 className="step-title">Step {step.step}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaraPesanSection;
