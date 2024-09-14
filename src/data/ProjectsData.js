const projects = [
  {
    id: '1',
    title: 'ArtCult',
    description: 'E Commerce Web Application MERN',
    thumbnail: require('../images/artcult-34.png'),
    date: 'Jul 2023 - Aug 2023',
    videoUrl: '',
    details: `
        ArtCult is an e-commerce web application designed for the sale of art pieces. 
The platform integrates aesthetic design with robust functionality, providing users with an 
intuitive and engaging shopping experience. The application is built using the MERN stack, 
ensuring high performance and scalability.
      `,
    technologies: 'React.js, Node.js, Express.js, MongoDB',
    achievements: [
      'Implemented sorting options that allow users to filter art pieces based on various parameters such as price, artist, and medium.',
      'Developed a seamless cart system that enables users to add, remove, and manage selected artworks with ease.',
      'Created a user account system to facilitate personalized shopping experiences.',
      'Applied best practices in MERN stack development to ensure high performance and user engagement.',
    ],
  },
  {
    id: '2',
    title: 'Ecometric',
    description: 'Track CO2 emission from computing',
    thumbnail: require('../images/ecometric-34.png'),
    date: 'Jul 2024 - Aug 2024',
    videoUrl: 'https://www.youtube.com/embed/wExttCz7dAE',
    details: `
          EcoMetric is a comprehensive application designed to track and analyze system performance metrics and environmental impact. This project involves collecting detailed system metrics, calculating energy consumption, assessing the carbon footprint, and providing historical data for analysis. The backend, developed in Spring Boot, handles data collection, calculations, and endpoint monitoring, while the frontend, built with Angular, provides a user-friendly interface for displaying data and insights.
        `,
    technologies: 'Spring Boot, Angular, MySQL, RESTful APIs, Oshi',
    achievements: [
      'Developed a backend module in Spring Boot to collect CPU, GPU, and RAM metrics, including temperature readings.',
      'Implemented energy consumption calculation based on system metrics using industry-standard formulas.',
      'Created a carbon footprint calculation module using CO2 emissions conversion factors.',
      'Established endpoints for real-time monitoring of specific applications, collecting performance data.',
      'Designed an Angular frontend for visualizing metrics, energy consumption, and carbon footprint with interactive charts and progress bars.',
    ],
  },
  {
    id: '3',
    title: 'Genify',
    description: 'Prompt Generation Tool for customizing LLMs',
    thumbnail: '../images/project-thumbnail.png',
    date: 'Nov 2023 - May 2024',
    videoUrl: 'https://www.youtube.com/embed/ZvcugdrQi7Q',
    details: `
          Genify is a cutting-edge web application developed during a university software development project, designed to automate the creation of well-structured prompts for customizing Large Language Models (LLMs). By leveraging advanced natural language processing techniques, Genify transforms vague user inputs into precise and organized instructions, saving time and effort for LLM developers. This tool enhances task efficiency by ensuring high-quality prompts, leading to more accurate and effective outcomes across various applications. The project involved extensive research on fine-tuning and customizing LLMs, along with rigorous testing of different models to achieve optimal performance. Genify offers a user-friendly interface, empowering users to easily harness the full potential of LLMs for their specific needs. Genify offers a user-friendly interface, empowering users to easily harness the full potential of LLMs for their specific needs. The project highlights the importance of automation in the evolving field of AI, providing a crucial tool for both developers and researchers.
        `,
    technologies: 'Python, React.js, Flask, PEFT, Langchain, Azure, GitHub, CI/CD',
    achievements: [
      'Developed a dynamic and responsive user interface with React.js, providing users with an intuitive platform for generating prompts.',
      'Engineered a robust backend with Flask to handle server-side logic and ensure reliable performance.',
      'Fine-tuned the Llama2-7b-chat-hf AI model using the PEFT technique and a manually curated dataset to improve prompt generation accuracy and efficiency.',
      'Implemented a CI/CD pipeline using GitHub Actions to automate testing and deployment, ensuring continuous integration and delivery.',
      'Deployed the application on Azure, providing a scalable and reliable hosting environment.',
    ],
  },
  {
    id: '4',
    title: 'TFLEX',
    description: 'E Commerce Web Application',
    thumbnail: require('../images/tflex-34.png'),
    date: 'Dec 2023 - Jan 2024',
    videoUrl: 'https://www.youtube.com/embed/vOrKjIN8vCM',
    details: `
          TFLEX is a sophisticated e-commerce web application developed for a fictional t-shirt brand, combining a sleek frontend with a robust backend. The application, built using Angular, TypeScript, Spring Boot, MySQL, and RESTful APIs, delivers a seamless shopping experience. Key achievements include designing a responsive and scalable frontend architecture, implementing a secure backend with Spring Security and Spring Data JPA, and creating an efficient user registration and authentication system. Cart management was optimized to enhance transaction efficiency and user satisfaction, while smooth integration with REST APIs ensured effective communication between frontend and backend systems. TFLEX exemplifies a well-rounded e-commerce solution, balancing usability with powerful backend functionality.
        `,
    technologies: 'Angular, TypeScript, Spring Boot, MySQL, RESTful APIs',
    achievements: [
      'Developed a responsive and scalable frontend architecture using Angular and TypeScript, ensuring optimal user experience across devices.',
      'Implemented a secure and efficient backend with Spring Boot, incorporating Spring Security and Spring Data JPA for robust data management.',
      'Designed a seamless user registration and authentication system to improve accessibility and security.',
      'Optimized cart management functionality to facilitate efficient transactions and improve user satisfaction.',
      'Ensured smooth integration with REST APIs for seamless communication between the frontend and backend systems.',
    ],
  },
  {
    id: '5',
    title: 'ML Coursework',
    description: 'K means Clustering and NN',
    thumbnail: require('../images/ml-34.png'),
    date: 'Jan 2024 - May 2024',
    videoUrl: '',
    details: `
          Implemented K-means clustering for partitioning clustering and Multilayer Perceptron (MLP) neural networks for financial forecasting. Processed data, applied clustering algorithms, and evaluated neural network models.
        `,
    technologies: 'R(base, cluster, factoextra, fpc, neuralnet, dplyr, Metrics, MLmetrics)',
    achievements: [
      'Successfully implemented K-means clustering for partitioning clustering, achieving optimal cluster identification using NbClust, Elbow, Gap Stat, and Silhouette methods.',
      'Conducted Principal Component Analysis (PCA) to reduce dimensionality and improve clustering accuracy on datasets.',
      'Constructed lagged input vectors, normalized data, and implemented various MLP architectures for financial forecasting.',
      'Evaluated model performance metrics including RMSE, MAE, MAPE, and sMAPE.',
    ],
  },
  {
    id: '6',
    title: 'Learning Platform',
    description: 'Educational Web Application',
    thumbnail: '../images/project-thumbnail.png',
    date: 'Sep 2023 - Nov 2023',
    videoUrl: 'https://www.youtube.com/embed/Hz21lqfpze0',
    details: `
          The Learning Platform is an educational web application designed to facilitate seamless interaction between tutors and students. It includes comprehensive functionality for tutor availability management, student tutorial booking, and administrative oversight.
        `,
    technologies: 'Java, Spring Boot, MySQL, React',
    achievements: [
      'Implemented a well-structured backend using layered architecture, including config, controller, DTO, entity, repository, and service layers, ensuring efficient data management and modularity.',
'Developed a responsive and intuitive frontend to enhance user experience.',
'Designed a robust and efficient database schema to ensure data integrity.',
'Enabled tutors to manage their availability and students to book tutorials based on available slots.',
'Created a comprehensive tutorial request system, allowing tutors to respond to requests and administrators to oversee and manage bookings and availabilities.',
    ],
  },
  // Add more projects here as needed
];

export default projects;
