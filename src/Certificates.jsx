import React from 'react';
import { Award, ArrowUpRight, FileText, Linkedin } from 'lucide-react';
import './certificates.css';

const linkedinCertificates = [
  {
    name: 'Decode DSA with C++',
    issuer: 'PW Skills',
    issued: 'Issued December 2023',
    category: 'Data structures & algorithms',
  },
  {
    name: 'Decode Full Stack Web Dev 1.0',
    issuer: 'PW Skills',
    issued: 'Issued May 2024',
    expiry: 'Expiry listed: July 2024',
    category: 'Full-stack development',
  },
  {
    name: 'IEEE Student Branch NIT DGP',
    issuer: 'IEEE Student Branch NIT Durgapur',
    category: 'IEEE student community',
  },
];

function CertificateLink({ href, children }) {
  return <a className="certificate-link" href={href} target="_blank" rel="noopener noreferrer">
    {children}<ArrowUpRight size={17} aria-hidden="true" />
  </a>;
}

export default function Certificates({ linkedinUrl, researchCertificates }) {
  return <section id="certificates" className="section container certificates-section" aria-labelledby="certificates-heading">
    <div className="section-label"><span>05 / CERTIFICATES</span><span className="label-line" /></div>
    <div className="section-heading">
      <div><h2 id="certificates-heading">Learning, with a record<span className="orange-dot">.</span></h2>
        <p>Course certificates, community involvement, and research milestones.</p>
      </div>
      <a className="text-link" href={linkedinUrl} target="_blank" rel="noopener noreferrer">My LinkedIn profile <ArrowUpRight size={17} /></a>
    </div>
    <div className="certificate-grid">
      {linkedinCertificates.map(certificate => <article className="certificate-card" key={certificate.name}>
        <div className="certificate-card-top"><span className="certificate-icon"><Award size={25} aria-hidden="true" /></span><span className="certificate-source"><Linkedin size={13} aria-hidden="true" /> Listed on LinkedIn</span></div>
        <p className="certificate-category">{certificate.category}</p>
        <h3>{certificate.name}</h3>
        <p className="certificate-issuer">{certificate.issuer}</p>
        {(certificate.issued || certificate.expiry) && <div className="certificate-dates">
          {certificate.issued && <p>{certificate.issued}</p>}
          {certificate.expiry && <p>{certificate.expiry}</p>}
        </div>}
        <CertificateLink href={linkedinUrl}>View on LinkedIn</CertificateLink>
      </article>)}
    </div>
    <h3 className="research-certificates-heading">Research completion certificates</h3>
    <div className="certificate-grid research-certificate-grid">
      {researchCertificates.map(research => <article className="certificate-card research-certificate-card" key={research.name}>
        <div className="certificate-card-top"><span className="certificate-icon"><FileText size={25} aria-hidden="true" /></span><span className="certificate-source">Research internship</span></div>
        <h3>{research.name}</h3>
        <p className="certificate-issuer">{research.role}</p>
        <p className="certificate-research-field">{research.field}</p>
        <div className="certificate-dates"><p>{research.date}</p></div>
        <CertificateLink href={research.certificate}>View certificate</CertificateLink>
      </article>)}
    </div>
  </section>;
}
