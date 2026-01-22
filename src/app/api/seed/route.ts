import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const skillLogos: Record<string, string> = {
  'HTML': '/logos/html.png',
  'CSS': '/logos/css.png',
  'JavaScript': '/logos/javascript.png',
  'React': '/logos/react.png',      
  'Next.js': '/logos/nextjs.png',
  'Python': '/logos/python.png',
  'Flask': '/logos/flask.png',
  'Laravel': '/logos/laravel.png',
  'MySQL': '/logos/mysql.png',
  'PostgreSQL': '/logos/postgresql.png',
  'Power BI': '/logos/powerbi.png',
  'Tableau': '/logos/tableau.png',
  'Flutter': '/logos/flutter.png',
  'Git': '/logos/git.png',          
}

export async function GET() {
  try {
    // Delete existing data
    await prisma.skill.deleteMany()
    await prisma.project.deleteMany()
    await prisma.certificate.deleteMany()

    // Seed Skills
    const skills = [
      { name: 'HTML', description: 'Proficient in HTML fundamentals, semantic markup, and modern HTML5 features for web structure', icon: skillLogos['HTML'], category: 'Front-End' },
      { name: 'CSS', description: 'Skilled in CSS styling, responsive design, animations, and modern layout techniques', icon: skillLogos['CSS'], category: 'Front-End' },
      { name: 'JavaScript', description: 'Proficient in JavaScript fundamentals, DOM manipulation, and interactive web development', icon: skillLogos['JavaScript'], category: 'Front-End' },
      { name: 'React', description: 'Building dynamic user interfaces with React components, hooks, and modern state management', icon: skillLogos['React'], category: 'Front-End' },
      { name: 'Next.js', description: 'Developing modern web applications with Next.js, React, and server-side rendering', icon: skillLogos['Next.js'], category: 'Front-End' },
      { name: 'Python', description: 'Experienced in Python for data analysis, machine learning, automation, and web development', icon: skillLogos['Python'], category: 'Programming' },
      { name: 'Flask', description: 'Developing lightweight web applications and RESTful APIs using Python Flask framework', icon: skillLogos['Flask'], category: 'Back-End' },
      { name: 'Laravel', description: 'Creating robust web applications using Laravel PHP framework with MVC architecture', icon: skillLogos['Laravel'], category: 'Back-End' },
      { name: 'MySQL', description: 'Proficient in relational database design, complex queries, and data management optimization', icon: skillLogos['MySQL'], category: 'Database' },
      { name: 'PostgreSQL', description: 'Working with advanced relational database features, indexing, and complex query optimization', icon: skillLogos['PostgreSQL'], category: 'Database' },
      { name: 'Power BI', description: 'Creating interactive dashboards and data visualizations for business intelligence and insights', icon: skillLogos['Power BI'], category: 'Data Visualization' },
      { name: 'Tableau', description: 'Designing compelling data visualizations and analytical dashboards for data-driven storytelling', icon: skillLogos['Tableau'], category: 'Data Visualization' },
      { name: 'Flutter', description: 'Building cross-platform mobile applications with Flutter framework and Dart language', icon: skillLogos['Flutter'], category: 'Mobile' },
      { name: 'Git', description: 'Version control management, collaborative development workflows, and repository maintenance', icon: skillLogos['Git'], category: 'Tools' }
    ]

    for (const skill of skills) {
      await prisma.skill.create({ data: skill })
    }

    // Seed Projects
    const projects = [
      {
        title: 'Sales Analytics Dashboard - Jakarta Barat',
        description: 'Power BI dashboard analyzing IDR 377.3bn in sales with customer segmentation, geographic mapping, and strategic insights from 15K transactions (2023-2025)',
        image: '/images/projects/salesanalytics.png',
        technologies: 'Power BI, Excel, DAX',
        category: 'Data Analytics',
        url: 'https://github.com/embunns/DataAnalysis-AnalisisSegmentasiPenjualan'
      },
      {
        title: 'Sales Dashboard',
        description: 'Interactive Power BI dashboard for sales performance analysis, revenue trends, and regional analytics',
        image: '/images/projects/sales.png',
        technologies: 'Power BI, Excel',
        category: 'Data Analytics',
        url: 'https://app.powerbi.com/view?r=eyJrIjoiOGJkOWVjNmItYmQ3Yy00ZTczLTg2ZjUtZDBhNTdkYWU4NzI5IiwidCI6IjkwYWZmZTBmLWMyYTMtNDEwOC1iYjk4LTZjZWI0ZTk0ZWYxNSIsImMiOjEwfQ%3D%3D'
      },
      {
        title: 'EatWise (Multi-platform)',
        description: 'Budget-friendly meal planning app with recipe search, AI chatbot assistant, and personalized recommendations',
        image: '/images/projects/eatwise.png',
        technologies: 'Flutter, Laravel',
        category: 'Software Engineering',
        url: 'https://github.com/embunns/eatwise'
      },
      {
        title: 'Foodie App',
        description: 'Budget-conscious meal planning application featuring recipe discovery, chatbot support, and tailored meal suggestions',
        image: '/images/projects/foodie.png',
        technologies: 'Flutter, Firebase',
        category: 'Software Engineering',
        url: 'https://github.com/embunns/eatwise'
      },
      {
        title: 'Agrivest App',
        description: 'Agricultural investment platform with funding tracker dashboard, harvest reports, and intelligent advisor chatbot',
        image: '/images/projects/agrivest.png',
        technologies: 'Flutter, Firebase',
        category: 'Software Engineering',
        url: 'https://github.com/embunns/agrivest'
      },
      {
        title: 'Femminder Website',
        description: 'Menstrual cycle prediction platform with reproductive health article recommendations and smart prediction algorithms',
        image: '/images/projects/femminder.png',
        technologies: 'HTML, CSS, Python, Flask',
        category: 'Software Engineering',
        url: '#'
      },
      {
        title: 'Omnimap Website',
        description: 'Web-based system that analyzes students\' personalities using the OMNI (Big Five) model to recommend suitable campus activities, organizations, and events',
        image: '/images/projects/omnimap.png',
        technologies: 'HTML, CSS, Python, Machine Learning, Flask, PostgreSQL',
        category: 'Software Engineering',
        url: 'https://github.com/Yasminahanjani/Omnimap'
      },
      {
        title: 'Portfolio Website',
        description: 'Personal portfolio showcasing my interests, technical skills, and development projects',
        image: '/images/projects/porto.png',
        technologies: 'HTML, CSS, JS, Tailwind',
        category: 'Software Engineering',
        url: 'https://github.com/embunns/porto'
      },
      {
        title: 'Scopus-indexed Paper',
        description: 'Published research paper at COMNETSAT 2025 on toddler classification in Pemalang Regency using Logistic Regression and Decision Tree algorithms',
        image: '/images/projects/paper.png',
        technologies: 'Machine Learning, Python, Data Analysis',
        category: 'AI/ML',
        url: 'https://ieeexplore.ieee.org/document/11324760/'
      }
    ]

    for (const project of projects) {
      await prisma.project.create({ data: project })
    }

    // Seed Certificates
    const certificates = [
      {
        title: 'Azure AI Fundamentals',
        organization: 'Microsoft',
        year: '2025',
        description: 'Certified in fundamental AI concepts, machine learning models, and Azure AI services for building intelligent solutions',
        image: '/images/certificates/microsoftazureai.png',
        url: 'https://www.credly.com/badges/69dac0b9-67d0-4b40-9545-ec33e5603c9c'
      },
      {
        title: 'Data Analyst',
        organization: 'BNSP',
        year: '2025',
        description: 'Professional certification in data analysis, statistical methods, visualization techniques, and business intelligence',
        image: '/images/certificates/bnspda.png',
        url: 'https://drive.google.com/file/d/1V-6GoOMuC5q1BWN2sr137UHL1TsUnkLf/view?usp=drive_link'
      },
      {
        title: 'Application of Artificial Intelligence (AI) for Data Processing',
        organization: 'BNSP',
        year: '2025',
        description: 'Certified in applying AI algorithms and machine learning techniques for efficient data processing and analysis',
        image: '/images/certificates/bnspai.png',
        url: 'https://drive.google.com/file/d/12STukRHmrUiGnSOHAdVQ6Kt9c4R19rcj/view?usp=drive_link'
      },
      {
        title: 'Web Development Fundamentals',
        organization: 'IBM',
        year: '2024',
        description: 'Completed comprehensive training in HTML, CSS, JavaScript, and modern web development best practices',
        image: '/images/certificates/ibmwebdev.png',
        url: 'https://www.credly.com/badges/6be59d76-6cf8-4b8a-b00d-26e7eafb65b3/linked_in_profile'
      },
      {
        title: 'Bootcamp Data Analyst',
        organization: 'DQLab',
        year: '2024',
        description: 'Intensive bootcamp covering SQL, Python, data visualization, and end-to-end analytics project development',
        image: '/images/certificates/dqlabda.png',
        url: 'https://academy.dqlab.id/Certificate_check/result/DQLABDVIZ2JWGRQT#mycertificate'
      },
      {
        title: 'Bootcamp Machine Learning',
        organization: 'DQLab',
        year: '2024',
        description: 'Comprehensive training in supervised and unsupervised learning, model evaluation, and ML deployment strategies',
        image: '/images/certificates/dqlabml.png',
        url: 'https://academy.dqlab.id/Certificate_check/result/DQLABINTP1ICURWT#mycertificate'
      }
    ]

    for (const cert of certificates) {
      await prisma.certificate.create({ data: cert })
    }

    return NextResponse.json({ message: '✅ Database seeded successfully!' })
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json({ error: 'Failed to seed database', details: error }, { status: 500 })
  }
}