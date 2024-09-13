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
        videoUrl: '',
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
        title: 'ArtCult',
        description: 'E Commerce Web Application MERN',
        thumbnail: '../images/project-thumbnail.png',
        date: 'Nov 2023 - May 2024',
        videoUrl: 'https://www.youtube.com/embed/Rvt2xmDfLCE',
        details: `
          Genify is an innovative web application developed as part of a university software development group project. The tool is dedicated to generating well-structured system prompts for customizing large language models. The project involved extensive research on fine-tuning and customizing LLMs, as well as testing various models to achieve optimal performance.
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
        id: '5',
        title: 'ArtCult',
        description: 'E Commerce Web Application MERN',
        thumbnail: '../images/project-thumbnail.png',
        date: 'Nov 2023 - May 2024',
        videoUrl: 'https://www.youtube.com/embed/6a2oHdxxJ-I',
        details: `
          Genify is an innovative web application developed as part of a university software development group project. The tool is dedicated to generating well-structured system prompts for customizing large language models. The project involved extensive research on fine-tuning and customizing LLMs, as well as testing various models to achieve optimal performance.
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
        id: '6',
        title: 'ArtCult',
        description: 'E Commerce Web Application MERN',
        thumbnail: '../images/project-thumbnail.png',
        date: 'Nov 2023 - May 2024',
        videoUrl: 'https://www.youtube.com/embed/mGjANZAx45k',
        details: `
          Genify is an innovative web application developed as part of a university software development group project. The tool is dedicated to generating well-structured system prompts for customizing large language models. The project involved extensive research on fine-tuning and customizing LLMs, as well as testing various models to achieve optimal performance.
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
    // Add more projects here as needed
  ];
  
  export default projects;
  