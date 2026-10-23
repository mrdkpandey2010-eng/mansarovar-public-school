const academicsData = {
  header: {
    title: "Academics",
    description: "Discover our comprehensive academic programs designed to nurture intellectual growth and prepare students for future success."
  },
  curriculum: {
    title: "Our Curriculum",
    description: [
      "At K.D. Public School (Ramlakshan, Deoria, U.P. – U-DISE: 09604113374), our curriculum is designed to provide balanced education focusing on academic excellence, physical fitness, moral values, and personality development.",
      "Our curriculum emphasizes strong foundational literacy, scientific inquiry, practical mathematics, and cultural awareness. We ensure that students not only gain knowledge but also develop discipline and confidence.",
      "Regular Half-Yearly and Annual examinations along with comprehensive Personality Evaluation (Regularity, Discipline, Conduct, Extra-Curriculars) help us monitor student progress effectively."
    ],
    image: "/src/assets/images/academics/curriculum.jpg",
    imageAlt: "Students in classroom"
  },
  academicLevels: {
    title: "Academic Levels",
    description: "Our comprehensive academic structure is designed to meet the learning needs of students at different stages of development.",
    levels: [
      {
        title: "Pre-Primary (Nursery to KG)",
        icon: "home",
        description: "Our pre-primary program focuses on developing foundational skills through play-based learning. Children are introduced to basic concepts in language, mathematics, and environmental awareness.",
        features: [
          "Play-based learning approach",
          "Development of motor skills",
          "Introduction to letters and numbers",
          "Social skills and emotional development",
          "Creative expression through art and music"
        ]
      },
      {
        title: "Primary (Classes 1-5)",
        icon: "book",
        description: "The primary section builds upon the foundation with a structured curriculum in language, mathematics, science, social studies, computers, art, and physical education.",
        features: [
          "Focus on reading and writing skills",
          "Introduction to scientific concepts",
          "Basic mathematics and problem-solving",
          "Environmental and social awareness",
          "Computer literacy fundamentals",
          "Co-curricular activities for holistic development"
        ]
      },
      {
        title: "Middle & Secondary (Classes 6-10)",
        icon: "flask",
        description: "Our middle and secondary sections offer a comprehensive curriculum following CBSE guidelines, preparing students for board examinations and future academic pursuits.",
        features: [
          "Specialized subject teachers",
          "Advanced concepts in science and mathematics",
          "Language proficiency development",
          "Social sciences and humanities",
          "Information technology education",
          "Career guidance and counseling",
          "Preparation for CBSE board examinations"
        ]
      }
    ]
  },
  subjects: {
    title: "Subjects Offered",
    description: "Our comprehensive curriculum includes a wide range of subjects to provide students with a well-rounded education and prepare them for future academic and professional pursuits.",
    subjectCategories: [
      {
        name: "Languages",
        borderColor: "blue",
        subjects: ["English", "Hindi", "Sanskrit (Optional)"]
      },
      {
        name: "Mathematics",
        borderColor: "green",
        subjects: ["General Mathematics", "Advanced Mathematics (Classes 9-10)"]
      },
      {
        name: "Sciences",
        borderColor: "purple",
        subjects: [
          "General Science (Classes 1-8)", 
          "Physics (Classes 9-10)", 
          "Chemistry (Classes 9-10)", 
          "Biology (Classes 9-10)"
        ]
      },
      {
        name: "Social Sciences",
        borderColor: "yellow",
        subjects: [
          "Environmental Studies (Classes 1-5)", 
          "History", 
          "Geography", 
          "Civics", 
          "Economics (Classes 9-10)"
        ]
      },
      {
        name: "Computer Education",
        borderColor: "red",
        subjects: [
          "Computer Basics",
          "Programming Fundamentals",
          "Information Technology (Classes 9-10)"
        ]
      },
      {
        name: "Co-Curricular",
        borderColor: "indigo",
        subjects: [
          "Art Education", 
          "Physical Education", 
          "Music", 
          "Dance", 
          "Yoga"
        ]
      }
    ]
  },
  teachingMethodology: {
    title: "Our Teaching Methodology",
    description: "At K.D. Public School, we believe in a student-centered approach to education. Guided by 'प्रयास • परिश्रम • परिणाम', our teaching methodologies combine structured classroom learning with activity-based understanding.",
    methods: [
      {
        title: "Interactive Learning",
        description: "Group discussions, question-answer sessions, and peer learning to encourage active participation."
      },
      {
        title: "Activity-Based Learning",
        description: "Hands-on drawing, experiments, and exercises that connect book knowledge with practical understanding."
      },
      {
        title: "Discipline & Moral Ethics",
        description: "Inculcating cleanliness, respect, responsibility, and cheerfulness in daily routines."
      },
      {
        title: "Personalized Attention",
        description: "Maintaining an optimal teacher-student ratio to ensure individual attention for every child."
      }
    ],
    image: "/src/assets/images/academics/teaching.jpg",
    imageAlt: "Teacher with students"
  },
  assessment: {
    title: "Assessment & Progress Report System",
    description: "Our comprehensive examination and evaluation system is designed to measure academic excellence and holistic personality growth through our official Progress Report system.",
    types: [
      {
        title: "Half-Yearly Examination",
        description: "Mid-term evaluation covering oral and written assessments across all key subjects.",
        methods: [
          "Max. Marks: 100 per subject",
          "Written and Oral Examinations",
          "Continuous class tests and quizzes",
          "Homework and notebook cleanliness"
        ]
      },
      {
        title: "Annual Examination & Yearly Achievement",
        description: "Year-end comprehensive assessment combining Half-Yearly (100) + Annual (100) = Yearly Achievement (200 Marks per subject).",
        methods: [
          "Grand Total: 1600 Marks (across 8 major subjects)",
          "Final Annual percentage and merit ranking",
          "Promotion evaluation (Pass / Promoted / Detained)"
        ]
      }
    ],
    reportCards: {
      title: "Official Progress Report & Personality Evaluation",
      description: [
        "Our official K.D. Public School Progress Report Card evaluates both scholastic subjects (Hindi, English, Maths, Science/E.V.S., Social Study, G.K., Drawing, Physical) and co-scholastic character building.",
        "Grading Scale: A+ (Excellent) | A (Very Good) | B+ (Good) | B (Nice) | C+ (Needs Improvement) | D (Poor)",
        "Personality Evaluation parameters: Regularity & Punctuality, Discipline, Conduct, Responsibility, Cheerfulness, Cleanliness, and Participation in Extra Curricular Activities."
      ]
    }
  },
  calendar: {
    title: "Academic Calendar",
    description: "Our academic year is divided into two terms, with a comprehensive schedule of academic and co-curricular activities.",
    months: [
      {
        month: "April",
        academic: "New academic session begins, Books distribution",
        events: "Orientation for new students, World Earth Day"
      },
      {
        month: "May",
        academic: "First unit test, Summer assignments",
        events: "Mother's Day celebration"
      },
      {
        month: "June",
        academic: "Summer vacation",
        events: "World Environment Day (online activities)"
      },
      {
        month: "July",
        academic: "School reopens, Submission of summer assignments",
        events: "Inter-house competitions"
      },
      {
        month: "August",
        academic: "Periodic Test-1, Parent-Teacher Meeting",
        events: "Independence Day celebration"
      },
      {
        month: "September",
        academic: "Half-yearly examinations",
        events: "Teacher's Day celebration"
      },
      {
        month: "October",
        academic: "Result declaration, Autumn break",
        events: "Gandhi Jayanti celebration"
      }
    ],
    calendarDownloadUrl: "/downloads/academic-calendar.pdf"
  },
  achievements: {
    title: "Academic Achievements",
    description: "We take pride in the outstanding academic accomplishments of our students, which reflect our commitment to excellence in education.",
    categories: [
      {
        title: "Board Examination Results",
        description: "Our students consistently achieve excellent results in CBSE Board Examinations, with many securing top ranks.",
        highlights: [
          { year: "2024", achievement: "98% students scored above 75%" },
          { year: "2023", achievement: "95% students scored above 75%" },
          { year: "2022", achievement: "94% students scored above 75%" }
        ]
      },
      {
        title: "Olympiads & Competitions",
        description: "Our students regularly participate and excel in various national and international academic competitions.",
        items: [
          "National Science Olympiad",
          "International Mathematics Olympiad",
          "English Language & Literature Competitions",
          "Spelling Bee Championships",
          "NTSE Scholars"
        ]
      },
      {
        title: "Special Recognitions",
        description: "Our school has received numerous accolades for academic excellence and innovative teaching practices.",
        items: [
          "Best CBSE School Award (Regional Level)",
          "Excellence in Science Education Award",
          "Innovation in Teaching Methodology Recognition",
          "Outstanding Academic Performance Award"
        ]
      }
    ]
  },
  faqs: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "What is the student-teacher ratio in classrooms?",
        answer: "We maintain a student-teacher ratio of approximately 25:1 to ensure personalized attention and effective classroom management."
      },
      {
        question: "How does the school support students who need extra help?",
        answer: "We provide remedial classes, one-on-one tutoring sessions, and personalized learning plans for students who need additional academic support. Our teachers are available for consultations after school hours."
      },
      {
        question: "What languages are taught in the school?",
        answer: "English is our primary medium of instruction. Hindi is taught as a second language, and Sanskrit is offered as an optional third language from Class 6 onwards."
      },
      {
        question: "How does the school prepare students for competitive examinations?",
        answer: "We offer special coaching and preparation classes for various competitive examinations. Our curriculum is designed to build a strong foundation in core subjects, which helps students excel in competitive exams."
      },
      {
        question: "Does the school offer any scholarship programs?",
        answer: "Yes, we offer merit-based scholarships to academically outstanding students and need-based financial aid to deserving students from economically disadvantaged backgrounds."
      }
    ]
  },
  cta: {
    title: "Ready to Join Mansarovar Public School?",
    description: "Experience excellence in education with our comprehensive academic programs. Apply today and give your child the foundation for a successful future.",
    buttons: [
      {
        text: "Apply for Admission",
        link: "/admissions",
        primary: true
      },
      {
        text: "Contact Us",
        link: "/contact",
        primary: false
      }
    ]
  }
};

export default academicsData;