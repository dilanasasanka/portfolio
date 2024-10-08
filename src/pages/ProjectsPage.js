import React from 'react'
import './projectspage.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import thumbnail from '../images/project-thumbnail.png'
import genify from '../images/genify-34.png'
import artcult from '../images/artcult-34.png'
import ecometric from '../images/ecometric-34.png'
import tflex from '../images/tflex-34.png'
import ml from '../images/ml-34.png'
import learning from '../images/learning-34.png'
import projects from '../data/ProjectsData';
import { useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
    const navigate = useNavigate();

    const handleProjectClick = (id) => {
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth'
        // });

        navigate(`/projects/${id}`);
    };

    return (
        <div className='main-container-1'>
            <Navbar />

            <div className='projects-main-container'>

                <div className='projects-container-1'>

                    <div className='projects-container-1-1'>

                        <div
                            key={'1'}
                            className='projects-container-1-1-1'
                            onClick={() => handleProjectClick('1')}
                        >
                            <div className='projects-main-container-image'>
                                <img src={artcult} alt='profile-pic' />
                            </div>
                            <div className='projects-main-container-content'>
                                <h2>ArtCult</h2>
                                <h4>E Commerce Web Application MERN</h4>
                                <p>ArtCult is an e-commerce web app designed for the sale of art . . .</p>
                            </div>
                        </div>
                        <div
                            key={'2'}
                            className='projects-container-1-1-2'
                            onClick={() => handleProjectClick('2')}
                        >
                            <div className='projects-main-container-image'>
                                <img src={ecometric} alt='thumbnail' />
                            </div>
                            <div className='projects-main-container-content'>
                                <h2>EcoMetric</h2>
                                <h4>Track CO2 emission from computing</h4>
                                <p>EcoMetric is a comprehensive application designed to track and analyze . . .</p>
                            </div>
                        </div>

                    </div>

                    <div
                        key={'3'}
                        className='projects-container-1-2'
                        onClick={() => handleProjectClick('3')}
                    >
                        <div className='projects-main-container-image'>
                            <img src={genify} alt='profile-pic' />
                        </div>
                        <div className='projects-main-container-content'>
                            <h2>Genify</h2>
                            <h4>Prompt Generation Tool for customizing LLMs</h4>
                            <p>Genify is a cutting-edge web application developed during a university software development project, designed to automate the creation of well-structured prompts for customizing Large Language Models (LLMs). By leveraging advanced natural language processing techniques, Genify transforms vague user inputs into precise and organized instructions, saving time and effort for LLM developers. This tool enhances task efficiency by ensuring high-quality prompts, leading to more accurate and effective outcomes across various applications. The project involved extensive research on fine-tuning and customizing LLMs, along with rigorous testing of different models to achieve optimal performance. Genify offers a user-friendly interface, empowering users to easily harness the full potential of LLMs for their . . .</p>
                        </div>
                    </div>

                </div>

                <div
                    key={'4'}
                    className='projects-container-2'
                    onClick={() => handleProjectClick('4')}
                >
                    <div className='projects-container-2-image'>
                        <img src={tflex} alt='profile-pic' />
                    </div>
                    <div className='projects-container-2-content'>
                        <h2>TFLEX</h2>
                        <h4>E Commerce Web Application</h4>
                        <p>TFLEX is a sophisticated e-commerce web application developed for a fictional t-shirt brand, combining a sleek frontend with a robust backend. The application, built using Angular, TypeScript, Spring Boot, MySQL, and RESTful APIs, delivers a seamless shopping experience. Key achievements include designing a responsive and scalable frontend architecture . . .</p>
                    </div>
                </div>

                <div className='projects-container-3'>

                    <div
                        key={'5'}
                        className='projects-container-3-1'
                        onClick={() => handleProjectClick('5')}
                    >
                        <div className='projects-main-container-image'>
                            <img src={ml} alt='profile-pic' />
                        </div>
                        <div className='projects-main-container-content'>
                            <h2>Machine Learning Coursework</h2>
                            <h4>K means Clustering and Neural Network</h4>
                            <p>Implemented K-means clustering for partitioning clustering and Multilayer . . .</p>
                        </div>
                    </div>
                    <div
                        key={'6'}
                        className='projects-container-3-2'
                        onClick={() => handleProjectClick('6')}
                    >
                        <div className='projects-main-container-image'>
                            <img src={learning} alt='profile-pic' />
                        </div>
                        <div className='projects-main-container-content'>
                            <h2>Learning Platform</h2>
                            <h4>Educational full-stack application</h4>
                            <p>The Learning Platform is an educational web application designed to facilitate . . .</p>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default ProjectsPage