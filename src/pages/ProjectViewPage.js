// src/pages/ProjectViewPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import projects from '../data/ProjectsData';
import './projectviewpage.css';

const ProjectViewPage = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className='main-container-2'>
      <Navbar />
      <div className='project-view-main-container'>
        <h1>{project.title} - {project.description}</h1>
        <div className='media-container'>
          {project.videoUrl ? (
            <div className='video-container'>
              <iframe
                width="100%"
                height="400"
                src={project.videoUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className='thumbnail-container'>
              <img
                src={project.thumbnail}
                alt={`${project.title} Thumbnail`}
                className='thumbnail-image'
              />
            </div>
          )}
        </div>
        <div className='description-container'>
          <p className='description-text'><strong>Date:</strong> {project.date}</p>
          <p className='description-text'><strong>Description:</strong> {project.details}</p>
          <p className='description-text'><strong>Technologies Used:</strong> {project.technologies}</p>
          <p className='description-text'><strong>Achievements:</strong><br />
            {project.achievements.map((achievement, index) => (
              <span key={index}>• {achievement}<br /></span>
            ))}
          </p>
          {/* Conditionally render download link for Genify project */}
          {project.id === '3' && (
            <div className='download-section'>
              <a
                href='/documents/SDGP-CW-2-Y3-19-implementation-report.pdf'
                download
                className='download-link'
              >
                Download Genify Project Report (PDF)
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectViewPage;
