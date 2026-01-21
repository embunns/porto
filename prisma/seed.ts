import { PrismaClient } from '@prisma/client'
import { url } from 'node:inspector'

const prisma = new PrismaClient()

const skillLogos: Record<string, string> = {
  'HTML': '/logos/html.png',
  'CSS': '/logos/css.png',
  'JavaScript': '/logos/javascript.png',
  'Python': '/logos/python.png',
  'Golang': '/logos/golang.png',
  'Flask': '/logos/flask.png',
  'Laravel': '/logos/laravel.png',
  'My SQL': '/logos/mysql.png',
  'Power BI': '/logos/powerbi.png',
  'Tableau': '/logos/tableau.png',
  'C++': '/logos/cpp.png',
  'Flutter': '/logos/flutter.png',
}

async function main() {
  // Clear existing data
  await prisma.skill.deleteMany()
  await prisma.project.deleteMany()
  await prisma.certificate.deleteMany()

  // Seed Skills
  const skills = [
    { 
      name: 'HTML', 
      description: 'Master HTML fundamentals, semantic tags, and modern HTML5 features', 
      icon: skillLogos['HTML'], 
      category: 'Front-End' 
    }, 
    { 
      name: 'CSS', 
      description: 'Expert in CSS styling, animations, transforms, and visual effects', 
      icon: skillLogos['CSS'], 
      category: 'Front-End' 
    }, 
    { 
      name: 'JavaScript', 
      description: 'Proficient in vanilla JavaScript, DOM manipulation, and jQuery library', 
      icon: skillLogos['JavaScript'], 
      category: 'Front-End' 
    }, 
    { 
      name: 'Python', 
      description: 'Versatile programming for data analysis, automation, and web development', 
      icon: skillLogos['Python'], 
      category: 'Programming' 
    },
    { 
      name: 'Golang', 
      description: 'Experienced in building robust backend systems from the ground up', 
      icon: skillLogos['Golang'], 
      category: 'Back-End' 
    }, 
    { 
      name: 'Flask', 
      description: 'Building lightweight web applications and RESTful APIs with Python', 
      icon: skillLogos['Flask'], 
      category: 'Back-End' 
    },
    { 
      name: 'Laravel', 
      description: 'Building elegant web applications with PHP framework and MVC architecture', 
      icon: skillLogos['Laravel'], 
      category: 'Back-End' 
    },
    { 
      name: 'My SQL', 
      description: 'Skilled in database design, query optimization, and data management', 
      icon: skillLogos['My SQL'], 
      category: 'Database' 
    }, 
    { 
      name: 'Power BI', 
      description: 'Transforming raw data into interactive dashboards and business insights', 
      icon: skillLogos['Power BI'], 
      category: 'Data Visualization' 
    }, 
    { 
      name: 'Tableau', 
      description: 'Creating compelling data stories through advanced visual analytics', 
      icon: skillLogos['Tableau'], 
      category: 'Data Visualization' 
    },
    { 
      name: 'C++', 
      description: 'Learning C++ programming with solid foundation in C language', 
      icon: skillLogos['C++'], 
      category: 'Programming' 
    }, 
    { 
      name: 'Flutter', 
      description: 'Building cross-platform mobile apps with impressive Flutter framework', 
      icon: skillLogos['Flutter'], 
      category: 'Mobile' 
    }
  ]

  for (const skill of skills) {
    await prisma.skill.create({ data: skill })
  }

  // Seed Projects
  const projects = [
    // Data Analysis Projects
        {
      title: 'Sales Analytics Dashboard - Jakarta Barat',
      description: 'Dashboard Power BI untuk analisis penjualan Rp377.3bn dengan segmentasi pelanggan, mapping geografis, dan insights strategis berbasis 15K transaksi periode 2023-2025',
      image: '/images/projects/salesanalytics.png',
      technologies: 'Power BI, Excel, DAX',
      category: 'Data Analytics',
      url: 'https://github.com/embunns/DataAnalysis-AnalisisSegmentasiPenjualan'
    },
    
    // Data Visualization
    {
      title: 'Sales Dashboard',
      description: 'Dashboard interaktif Power BI untuk analisis performa penjualan, tren revenue, dan analytics regional',
      image: '/images/projects/sales.png',
      technologies: 'Power BI, Excel',
      category: 'Data Analytics',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiOGJkOWVjNmItYmQ3Yy00ZTczLTg2ZjUtZDBhNTdkYWU4NzI5IiwidCI6IjkwYWZmZTBmLWMyYTMtNDEwOC1iYjk4LTZjZWI0ZTk0ZWYxNSIsImMiOjEwfQ%3D%3D'
    },
    
    // Mobile Apps
    {
      title: 'EatWise (Multi-platform)',
      description: 'Aplikasi perencanaan makan sesuai budget dengan pencarian resep, chatbot, dan rekomendasi personal',
      image: '/images/projects/eatwise.png',
      technologies: 'Flutter, Laravel',
      category: 'Software Engineering',
      url: 'https://github.com/embunns/eatwise'
    },
    {
      title: 'Foodie App',
      description: 'Aplikasi perencanaan makan sesuai budget dengan pencarian resep, chatbot, dan rekomendasi personal',
      image: '/images/projects/foodie.png',
      technologies: 'Flutter, Firebase',
      category: 'Software Engineering',
      url: 'https://github.com/embunns/eatwise'
    },
    {
      title: 'Agrivest App',
      description: 'Platform investasi pertanian dengan dashboard tracking funding, harvest report, dan smart advisor bot',
      image: '/images/projects/agrivest.png',
      technologies: 'Flutter, Firebase',
      category: 'Software Engineering',
      url: 'https://github.com/embunns/agrivest'
    },
    
    // Websites
    {
      title: 'Femminder Website',
      description: 'Platform prediksi siklus menstruasi dengan rekomendasi artikel kesehatan reproduksi dan smart prediction',
      image: '/images/projects/femminder.png',
      technologies: 'HTML, CSS, Python, Flask',
      category: 'Software Engineering',
      url: '#'
    },
    {
      title: 'Omnimap Website',
      description: 'OmniMap is a web-based system that analyzes students’ personalities using the OMNI (Big Five) model to recommend suitable campus activities, organizations, and events.',
      image: '/images/projects/omnimap.png',
      technologies: 'HTML, CSS, Python, Machine Learning, Flask',
      category: 'Software Engineering',
      url: 'https://github.com/Yasminahanjani/Omnimap'
    },
    {
      title: 'Portfolio Website',
      description: 'A website to show my interests, skills, and projects that I created before',
      image: '/images/projects/portfolio.jpg',
      technologies: 'HTML, CSS, JS, Tailwind',
      category: 'Software Engineering',
      url: '#'
    }
  ]

  for (const project of projects) {
    await prisma.project.create({ data: project })
  }

  // Seed Certificates
  // Seed Certificates
const certificates = [
  {
    title: 'Azure AI Fundamentals',
    organization: 'Microsoft',
    year: '2025',
    description: 'Success being a health mentor and achieve the favorit team in SYILC 2021',
    image: '/images/certificates/microsoftazureai.png', // Pastikan konsisten
    url: 'https://www.credly.com/badges/69dac0b9-67d0-4b40-9545-ec33e5603c9c'
  },
  {
    title: 'Data Analyst',
    organization: 'BNSP',
    year: '2025',
    description: 'Documented all moments on Event and provide the result to all students',
    image: '/images/certificates/bnspda.png', // Fixed path
    url: 'https://drive.google.com/file/d/1V-6GoOMuC5q1BWN2sr137UHL1TsUnkLf/view?usp=drive_link'
  },
  {
    title: 'Application of Artificial Intelligence (AI) for Data Processing',
    organization: 'BNSP',
    year: '2025',
    description: 'Succeeded in creating magazines and creating school content in digital and physical form',
    image: '/images/certificates/bnspda.png', // Fixed path (atau sesuaikan dengan nama file)
    url: 'https://drive.google.com/file/d/12STukRHmrUiGnSOHAdVQ6Kt9c4R19rcj/view?usp=drive_link'
  },
  {
    title: 'Web Development Fundamentals',
    organization: 'IBM',
    year: '2024',
    description: 'carrying out work programs for innovative achievements',
    image: '/images/certificates/ibmwebdev.png', // Fixed path
    url: 'https://www.credly.com/badges/6be59d76-6cf8-4b8a-b00d-26e7eafb65b3/linked_in_profile'
  },
  {
    title: 'Bootcamp Data Analyst',
    organization: 'DQLab',
    year: '2024',
    description: 'carrying out work programs for innovative achievements',
    image: '/images/certificates/dqlabda.png', // Fixed path
    url: 'https://academy.dqlab.id/Certificate_check/result/DQLABDVIZ2JWGRQT#mycertificate'
  },
  {
    title: 'Bootcamp Machine Learning',
    organization: 'DQLab',
    year: '2024',
    description: 'carrying out work programs for innovative achievements',
    image: '/images/certificates/dqlabml.png', // Fixed path
    url: 'https://academy.dqlab.id/Certificate_check/result/DQLABINTP1ICURWT#mycertificate'
  }
]

  for (const cert of certificates) {
    await prisma.certificate.create({ data: cert })
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })