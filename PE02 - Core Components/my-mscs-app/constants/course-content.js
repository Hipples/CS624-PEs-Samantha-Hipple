const mscsCourseInfo = [{
    key: 504,
    type: "Core Curriculum",
    subject: "CS",
    name: "Software Engineering",
    description: "The Software Engineering discipline covers those activities used to produce and deliver quality code in a consistent manner. This course covers process models, methodologies, and architectures for producing code, as well as the project and configuration management processes to guide the software lifecycle. The course also looks at the critical areas of requirements engineering, documentation, and metrics. Students mastering this course will be prepared to participate in professional software engineering teams." 
}, {
    key: 506,
    type: "core",
    subject: "CS",
    name: "Programming for Computing",
    description: "This course introduces different programming paradigms. Students learn the fundamental programming concepts of process, iteration, and decision-making as well as using functions, classes, and modules to structure programs. Students learn to apply critical data structures and algorithms in their programs. Throughout the course, students work in an immersive environment creating numerous programs to exercise their knowledge. At the end of the course, students can apply programming to many common problems and a solid foundation for more advanced programming concepts and challenges."
}, {
    key: 519,
    type: "core",
    subject: "CS",
    name: "Cloud Computing Overview",
    description: "This course introduces students to developing applications in a cloud environment. Students will explore the potential benefits of cloud computing, the paradigms, tools, and techniques used to create cloud applications, and how cloud services are managed. Students will develop their cloud applications. After taking this course, students will be prepared to create cloud applications, to evaluate the performance of cloud applications, and to explore emerging and advanced cloud computing techniques."
}, {
    key: 533,
    type: "core",
    subject: "CS",
    name: "Computer Architecture",
    description: "This course provides students with a fundamental understanding of computer architecture and components including the ALU, registers, busses, i/o, memory and caches. Students gain an appreciation for machine and assembly languages and how different architectures are used to address challenges in computing. Students who have completed this course will understand how to use the hardware of a computer effectively."
}, {
    key: 547,
    type: "core",
    subject: "CS",
    name: "Secure Systems and Programs",
    description: "This course covers the principles and practices of secure programming. The course covers coding practices which avoid introducing vulnerabilities which could be exploited. The course also covers the incorporation of security features and services such as encryption, authentication, and access control which allow the creation of a secure system. Virtual labs are included to provide students with “hands-on” experience in configuring, hardening and deploying virtual devices, such as web servers, to understand and combat common exploits. Students must be familiar with basic programming concepts such as syntax, structure, control-of-flow, program problem solving, as well as computing resources."
}, {
    key: 622,
    type: "core",
    subject: "CS",
    name: "Discrete Math and Algorithms for Computing",
    description: "This course introduces a comprehensive study of discrete mathematics, data structures, and algorithms. Students study how algorithm design, selection, and implementation have on the efficiency and effectiveness of programs.  Students learn the efficiency of algorithms focusing primarily on searches and sorts. Students study data structures such as lists, stacks, queues, and trees. Students also study the mathematical bases of the data structures and algorithms. As a result of this course, students will be able to select and implement effective data structures and algorithms in their programs."
}, {
    key: 510,
    type: "core",
    subject: "DS",
    name: "Artificial Intelligence for Data Science",
    description: "Artificial Intelligence (AI) includes the methodologies for modeling and simulating several human abilities that are widely accepted as representing intelligence. Perceiving, representing, learning, planning, and reasoning with knowledge and evidence are key themes. Concepts and methods developed for building AI systems are useful in Data Science and Data Science methods are applied extensively in AI systems. This course provides a broad overview of general AI concepts, logic- and probability-based knowledge representation and reasoning, and planning and search strategies in a Data Science context. Students will develop a foundational understanding of AI systems to apply their work to AI."
}, {
    key: 620,
    type: "core",
    subject: "DS",
    name: "Machine Learning and Deep Learning",
    description: "Machine Learning (ML), sometimes known as Statistical Learning, refers to a broad set of algorithms for identifying patterns in data to build models that might then be developed into a product. The availability of data, as well as the availability of computational processing power, have led to new and powerful techniques for large-scale learning called Deep Learning (DL). A data scientist should be aware of these types of algorithms, including challenges and methodologies that are unique to this type of learning. These methods are critical for data science. Data scientists should understand the algorithms they apply and make principled decisions about their use. This course will be focused heavily on projects and coding using ML and DL algorithms, with an in-depth description of the theory. Topics include general concepts of ML, supervised learning, unsupervised learning, mixed methods, and deep learning."
}, {
    key: 624,
    type: "advanced",
    subject: "CS",
    name: "Full Stack Development - Mobile App",
    description: "Full-stack consists of a layer of software or web development consisting of the front-end and the back-end portions of an application. Full-stack development is the practice of working on both the front end and back end of a program. The developers are required to understand the concepts and earn stackable skills to design and develop not only what the users will see or interact with on a front-end application but also the logic of the back-end application that the users do not see. In this course, students will focus on the concepts and skills of the front-end stack."
}, {
    key: 628,
    type: "advanced",
    subject: "CS",
    name: "Full Stack Development - Web App",
    description: "This course introduces students to developing the backend portions of full-stack applications. The students understand the concepts and earn stackable skills to design and develop not only what the users will see or interact with on a frontend application but also the logic of the backend application that the users do not see. After taking this course, students will be prepared to create backend applications, to evaluate who a backend application works, and to explore emerging and advanced full-stack technologies."
},{
    key: 687,
    type: "capstone",
    subject: "CS",
    name: "Computer Science Capstone",
    description: "The Computer Science Capstone is the capstone course for the Master of Science in Computer Science (MSCS) program. Students will demonstrate their ability to apply computer systems principles, tools, and techniques to a specific problem or research study, and to acquire and/or apply additional knowledge in a unique domain. This course integrates knowledge gained from previous coursework in the MSCS program."
}]

export const coreCourses = mscsCourseInfo.filter((course) => course.type == 'core');

export const depthOfStudyCourses = mscsCourseInfo.filter((course) => course.type == 'advanced');

export const capstoneCourse = mscsCourseInfo.filter((course) => course.type == 'capstone');