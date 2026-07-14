// app/components/Experience.tsx
'use client'
import { motion } from 'framer-motion'
import { Timeline } from './ui/Timeline'

const experiences = [
    {
        company: 'CBRE',
        role: 'Lead AI Engineer | Client: Innovation Studio Platform',
        period: 'Jun 2026 - Present',
        location: 'Richardson, TX',
        tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Coder', 'PostgreSQL', 'Azure AD SSO', 'Azure OpenAI', 'LiteLLM', 'Snowflake'],
        highlights: [
            'Own technical design and day-to-day delivery across backend services, React web applications, platform integrations, and cloud automation',
            'Designed project and workspace lifecycle APIs for creation, provisioning, status checks, start, stop, restart, extension requests, and failure recovery',
            'Built FastAPI microservices with asynchronous handling, service and repository layers, Pydantic validation, async SQLAlchemy, Alembic migrations, and PostgreSQL',
            'Integrated Coder REST APIs, Azure AD SSO, JWT validation, secure session cookies, project membership checks, and role-based access controls',
            'Developed Snowflake OAuth workflows and Azure OpenAI access through LiteLLM gateway patterns for governed enterprise AI and data use cases'
        ]
    },
    {
        company: 'Mphasis',
        role: 'Senior Full Stack Developer | Client: JPMorgan Chase & Co. - Dispute Processing Platform',
        period: 'Apr 2024 - May 2026',
        location: 'Tampa, FL / Remote',
        tech: ['Java 17/21', 'Spring Boot', 'React', 'Angular', 'TypeScript', 'Kafka', 'Elasticsearch', 'AWS ECS/EKS'],
        highlights: [
            'Developed Java 17/21 Spring Boot microservices for dispute intake, case processing, workflow updates, notifications, document handling, and downstream integrations',
            'Designed REST and GraphQL APIs with validation, response contracts, exception handling, pagination, security controls, and reusable service-layer patterns',
            'Built Kafka producers and consumers with retry handling, idempotency, consumer-group tuning, dead-letter scenarios, and message traceability',
            'Improved Elasticsearch case search through mappings, analyzers, Query DSL searches, aggregations, and ELK-based troubleshooting',
            'Built React and Angular components for dashboards, case details, search, filters, workflow actions, operational views, route protection, and error handling'
        ]
    },
    {
        company: 'U.S. Bank',
        role: 'Senior Full Stack Developer',
        period: 'Sep 2022 - Mar 2024',
        location: 'Irving, TX',
        tech: ['Java 11/17', 'Spring Boot', 'React', 'Angular', 'TypeScript', 'Kafka', 'Redis', 'Azure AKS'],
        highlights: [
            'Designed Spring Boot microservices and APIs for banking, payments, account servicing, trading, and automated-testing workflows',
            'Built REST and GraphQL endpoints integrated with React and Angular screens using consistent validation, error responses, and API documentation',
            'Developed reusable UI components, responsive layouts, routing, forms, Redux, NgRx, RxJS, React Router, and Angular Router workflows',
            'Implemented real-time transaction notifications and status updates using Kafka, WebSocket, Redis, and stream-processing flows',
            'Applied DevSecOps controls with Fortify, Black Duck, SonarQube, OWASP checks, dependency review, and secrets management'
        ]
    },
    {
        company: 'TransAmerica',
        role: 'Lead Full Stack Developer',
        period: 'Jul 2021 - Aug 2022',
        location: 'Remote',
        tech: ['Java 8/11', 'Spring Boot', 'Angular', 'React', 'Node.js', 'Python', 'Kafka', 'AWS ECS/Fargate'],
        highlights: [
            'Developed Spring Boot microservices, standalone Java batch programs, and enhancements to legacy Struts and JSP modules',
            'Implemented REST APIs with JAX-RS, RESTEasy, Jersey, validation, exception handling, and JWT-based authentication',
            'Built Angular and React components for participant and internal-user workflows with responsive layouts and reusable UI elements',
            'Created Node.js middleware and Python scripts for integration utilities, file manipulation, validation, reconciliation, and support tasks',
            'Deployed AWS services with ECS, Fargate, Lambda, S3, RDS, DynamoDB, API Gateway, Aurora, CloudFormation, Terraform, and Chef'
        ]
    },
    {
        company: 'AT&T',
        role: 'Full Stack Developer',
        period: 'Feb 2018 - Jul 2021',
        location: 'Plano, TX',
        tech: ['Java 8', 'Spring Boot', 'React', 'Angular', 'MongoDB', 'Oracle', 'Kafka', 'JMS'],
        highlights: [
            'Developed Java and Spring Boot services plus REST/SOAP APIs for retail sales, inventory, order management, and telecom provisioning workflows',
            'Designed MongoDB collections, indexes, aggregation queries, and sharding strategies while tuning Oracle SQL and stored procedures',
            'Built React, Angular, JSP, JavaScript, HTML5, CSS3, Bootstrap, and jQuery screens for internal and store users',
            'Integrated Kafka and JMS messaging for asynchronous order events, inventory updates, billing notifications, and downstream processing',
            'Automated Azure deployments with Jenkins, Git, Docker, and Kubernetes and supported production troubleshooting across application boundaries'
        ]
    },
    {
        company: 'Wipro / NIKE',
        role: 'Full Stack Developer',
        period: 'Aug 2016 - Jan 2018',
        location: 'Beaverton, OR',
        tech: ['Java 6/8', 'Spring MVC', 'AngularJS', 'Node.js', 'MongoDB', 'Oracle/MySQL', 'AWS Elastic Beanstalk'],
        highlights: [
            'Developed global offers platform features for promotion data, market-specific rules, customer eligibility, and personalized offer experiences',
            'Built single-page application features using Angular, Node.js, JavaScript, AJAX, HTML5, CSS3, Bootstrap, and jQuery',
            'Implemented Java, Spring MVC, Spring Security, Spring ORM, Hibernate, REST/SOAP integrations, and relational database services',
            'Optimized MongoDB and Oracle/MySQL queries, indexes, stored procedures, triggers, and functions and deployed to AWS Elastic Beanstalk'
        ]
    },
    {
        company: 'Fujitsu',
        role: 'Java Developer',
        period: 'Jun 2014 - Apr 2015',
        location: 'Hyderabad, India',
        tech: ['Java', 'J2EE', 'Struts2', 'Spring', 'Hibernate', 'JSP', 'Servlets', 'WebLogic'],
        highlights: [
            'Implemented MVC components using Struts2 and integrated Spring dependency injection with Struts action classes',
            'Developed Java model, action, service, and DAO classes using object-oriented and common design patterns',
            'Built JSP and Servlet-based user and business flows using HTML, JavaScript, XML, JDBC, Hibernate, HQL, and transaction-management practices',
            'Prepared test plans and test cases and performed unit and system testing using JUnit in WebLogic-based environments'
        ]
    }
]

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Professional Experience
            </span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Nearly 11 years building enterprise full-stack systems, cloud platforms, and AI-enabled workspaces
                    </p>
                </motion.div>
                <Timeline items={experiences} />
            </div>
        </section>
    )
}
