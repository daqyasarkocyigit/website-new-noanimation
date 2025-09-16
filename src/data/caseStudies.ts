import AzureArchitectureDiagram from '../components/architecture/AzureArchitectureDiagram';
import PowerPlatformArchitectureDiagram from '../components/architecture/PowerPlatformArchitectureDiagram';

export interface CaseStudyData {
  id: string;
  title: string;
  image?: string;
  architectureDiagram?: React.ComponentType;
  challenge: string;
  solution: string;
  detailedSections?: DetailedSection[];
  results: string[];
  technologies: string[];
  industry: string;
  duration: string;
  teamSize?: string;
  conclusion?: string;
  keySuccessFactors?: string[];
}

interface DetailedSection {
  title: string;
  content: string;
  subsections?: { title: string; content: string; }[];
}

export const dataEngineeringCaseStudies: CaseStudyData[] = [
  {
    id: 'metadata-driven-ingestion-framework',
    title: 'Metadata-Driven Ingestion Framework with Medallion Architecture',
    architectureDiagram: AzureArchitectureDiagram,
    industry: 'Retail/E-commerce',
    duration: '12 weeks',
    teamSize: '5 specialists',
    challenge: 'A major retail chain was experiencing significant performance issues with their analytics infrastructure. Their existing ETL processes were slow, manual, and difficult to scale. Each new data source required custom pipeline development, creating a maintenance nightmare. Power BI reports connected via DirectQuery to Dedicated SQL Pool became increasingly slow during peak hours, especially during Monday morning executive reviews when hundreds of users accessed dashboards simultaneously.',
    solution: 'We implemented a comprehensive metadata-driven data ingestion framework using Azure Data Factory, Databricks, and medallion architecture. The solution automated the entire data pipeline process through configuration-based approach, eliminating manual coding for each data source.',
    detailedSections: [
      {
        title: 'Metadata-Driven Architecture Design',
        content: 'Instead of building individual pipelines for each data source, we developed a revolutionary configuration-based framework that automatically generates data pipelines based on metadata definitions stored in control tables.',
        subsections: [
          {
            title: 'Control Table Structure',
            content: 'Centralized metadata repository containing source system configurations, data transformation rules, and processing schedules'
          },
          {
            title: 'Dynamic Pipeline Generation',
            content: 'Azure Data Factory master pipeline that reads control tables and dynamically creates processing workflows'
          },
          {
            title: 'Configuration-Based Processing',
            content: 'Zero-code approach for onboarding new data sources - simply add configuration records to control tables'
          }
        ]
      },
      {
        title: 'Medallion Architecture Implementation',
        content: 'We structured the data lake into three distinct layers following Databricks medallion architecture best practices, ensuring data quality and performance at each stage.',
        subsections: [
          {
            title: 'Bronze Layer (Raw Ingestion)',
            content: 'Raw data preservation in original format with minimal transformation, maintaining full data lineage and audit capabilities'
          },
          {
            title: 'Silver Layer (Cleansed & Standardized)', 
            content: 'Business rules applied, data quality checks implemented, standardized schemas with Delta Lake ACID transactions'
          },
          {
            title: 'Gold Layer (Analytics-Ready)',
            content: 'Pre-aggregated business metrics, KPIs, and analytics-ready datasets optimized for reporting consumption'
          }
        ]
      },
      {
        title: 'Advanced Technical Implementation',
        content: 'The implementation leveraged cutting-edge Azure technologies and best practices for enterprise-scale data processing.',
        subsections: [
          {
            title: 'Azure Data Factory Orchestration',
            content: 'Master pipeline with parallel processing capabilities, dynamic parameter passing, and comprehensive error handling'
          },
          {
            title: 'Databricks Processing Engine',
            content: 'Scala and Python notebooks for Delta Lake operations, data quality validation, and business logic transformation'
          },
          {
            title: 'Unity Catalog Integration',
            content: 'Centralized metadata management, data lineage tracking, and fine-grained access control across all layers'
          },
          {
            title: 'Performance Optimization',
            content: 'Delta Lake liquid clustering, Z-ordering, and partition optimization for sub-second query performance'
          }
        ]
      },
      {
        title: 'DevOps & CI/CD Pipeline',
        content: 'Enterprise-grade deployment automation ensuring consistent and reliable releases across environments.',
        subsections: [
          {
            title: 'Azure DevOps Integration',
            content: 'ARM template-based deployments with environment-specific parameter files and automated testing'
          },
          {
            title: 'Infrastructure as Code',
            content: 'Complete infrastructure provisioning through ARM templates including Data Factory, Databricks, and storage accounts'
          },
          {
            title: 'Approval Workflows',
            content: 'Multi-stage approval gates with automated testing in development and staging environments before production deployment'
          }
        ]
      }
    ],
    results: [
      'Reduced data pipeline development time from weeks to hours through metadata-driven approach',
      'Achieved 99.7% data pipeline reliability with automated error handling and retry mechanisms',
      'Improved Power BI report performance by 85% through gold layer pre-aggregations',
      'Eliminated timeout errors during peak usage with sub-second query response times',
      'Reduced infrastructure costs by 45% by migrating from Dedicated SQL Pool to Serverless architecture',
      'Enabled parallel processing of 50+ data sources with automated dependency management',
      'Achieved zero-downtime deployments with automated CI/CD pipeline',
      'Reduced manual intervention by 90% through configuration-driven data onboarding'
    ],
    keySuccessFactors: [
      'Configuration-Driven Architecture: The metadata-driven approach enabled rapid scaling and consistent processing patterns. New data sources could be onboarded in minutes rather than weeks, dramatically reducing time-to-value for business users.',
      'Medallion Architecture Benefits: The three-layer approach (Bronze-Silver-Gold) provided clear separation of concerns, enabling different teams to work independently while maintaining data quality and governance standards.',
      'Performance-First Design: By implementing pre-aggregated gold layer tables and migrating from DirectQuery to Import mode in Power BI, we eliminated performance bottlenecks and delivered consistent user experience.',
      'Enterprise-Grade DevOps: ARM template-based deployments and automated testing ensured reliable, repeatable releases across environments, reducing deployment risk and enabling faster iteration cycles.'
    ],
    conclusion: 'This metadata-driven ingestion framework represents a paradigm shift from traditional ETL development. By treating data pipeline configuration as data itself, we created a self-service platform that empowers business users while maintaining enterprise-grade governance and performance. The framework has processed over 2.5 billion records across 50+ data sources with 99.7% reliability, demonstrating its production readiness and scalability. This approach has become our standard methodology for all new data engineering projects, consistently delivering faster time-to-value and lower total cost of ownership.',
    technologies: [
      'Azure Data Factory',
      'Azure Databricks', 
      'Delta Lake',
      'Unity Catalog',
      'Azure Synapse Serverless SQL Pool',
      'Power BI Premium',
      'Azure Data Lake Storage Gen2',
      'Azure DevOps',
      'ARM Templates',
      'Apache Spark',
      'Python',
      'Scala',
      'SQL'
    ]
  },
  {
    id: 'grocery-retailer-analytics',
    title: 'Modernizing Analytics for a Leading Grocery Retailer',
    architectureDiagram: AzureArchitectureDiagram,
    industry: 'Retail',
    duration: '10 weeks',
    teamSize: '5 specialists',
    challenge: 'A major grocery retail chain was experiencing significant performance issues with their business intelligence infrastructure. Their Power BI reports, which connected directly to a Dedicated SQL Pool via DirectQuery, became increasingly slow during peak business hours—particularly during Monday morning executive reviews when hundreds of users accessed dashboards simultaneously.',
    solution: 'We implemented a modern data architecture using our proven metadata-driven ingestion framework, transforming their analytics infrastructure through the following approach:',
    detailedSections: [
      {
        title: 'Metadata-Driven Data Ingestion',
        content: 'Instead of building individual pipelines for each data source, we deployed a configuration-based framework that automatically generates data pipelines based on metadata definitions. This approach enabled rapid onboarding of new data sources and consistent processing patterns across all tables.'
      },
      {
        title: 'Medallion Architecture Implementation',
        content: 'We structured the data lake into three distinct layers:',
        subsections: [
          {
            title: 'Bronze Layer',
            content: 'Raw data ingestion maintaining source system formats'
          },
          {
            title: 'Silver Layer', 
            content: 'Cleansed and standardized data with business rules applied'
          },
          {
            title: 'Gold Layer',
            content: 'Pre-aggregated, analytics-ready datasets optimized for reporting'
          }
        ]
      },
      {
        title: 'Technology Stack Transformation',
        content: 'The complete technology transformation included:',
        subsections: [
          {
            title: 'Orchestration',
            content: 'Azure Data Factory with metadata-driven patterns'
          },
          {
            title: 'Processing',
            content: 'Azure Databricks for scalable data transformations'
          },
          {
            title: 'Storage',
            content: 'Delta Lake format on Azure Data Lake Storage'
          },
          {
            title: 'Serving',
            content: 'Synapse Serverless SQL Pool for on-demand compute'
          },
          {
            title: 'Reporting',
            content: 'Power BI using Import mode instead of DirectQuery'
          }
        ]
      },
      {
        title: 'Implementation Approach',
        content: 'The project followed a phased approach over 10 weeks:',
        subsections: [
          {
            title: 'Foundation Phase',
            content: 'Established the metadata framework and control tables that drive the entire ingestion process. This eliminated the need for repetitive pipeline development.'
          },
          {
            title: 'Data Ingestion Phase',
            content: 'Implemented parallel processing pipelines capable of handling millions of daily transactions from POS systems, inventory management, and supply chain applications.'
          },
          {
            title: 'Transformation Phase',
            content: 'Built automated data quality checks and business logic transformations in the Silver layer, ensuring consistent and reliable data for analytics.'
          },
          {
            title: 'Optimization Phase',
            content: 'Created pre-aggregated Gold layer tables specifically designed for Power BI consumption, dramatically reducing query complexity and improving performance.'
          },
          {
            title: 'Migration Phase',
            content: 'Converted Power BI reports from DirectQuery to Import mode, leveraging the optimized Gold layer tables for superior performance.'
          }
        ]
      }
    ],
    results: [
      'Report loading times reduced from minutes to seconds',
      'Eliminated timeout errors during peak usage',
      'Enabled support for hundreds of concurrent users',
      'Achieved consistent sub-second query response times',
      'Reduced infrastructure costs by 40%',
      'Automated data refresh cycles replacing manual processes'
    ],
    keySuccessFactors: [
      'Metadata-Driven Approach: The configuration-based framework enabled rapid scaling and consistent processing patterns, significantly reducing development time and maintenance effort.',
      'Separation of Compute and Storage: Moving from an always-on Dedicated SQL Pool to on-demand Serverless SQL Pool optimized resource utilization and reduced costs.',
      'Pre-Aggregation Strategy: Gold layer optimizations eliminated repeated calculations in Power BI, delivering consistent performance regardless of user load.',
      'Modern Architecture: The lakehouse pattern provided flexibility to handle structured and semi-structured data while maintaining enterprise-grade governance and security.'
    ],
    conclusion: 'This transformation demonstrates how modern cloud-native architectures can address performance challenges while providing a foundation for future growth. By implementing a metadata-driven medallion architecture, the grocery retailer now has a scalable, cost-effective analytics platform that delivers consistent performance even during peak usage periods. The success of this project highlights the importance of choosing the right architectural patterns and technologies to meet both current needs and future requirements in enterprise analytics.',
    technologies: [
      'Azure Data Factory',
      'Azure Databricks',
      'Delta Lake',
      'Synapse Serverless SQL Pool',
      'Power BI',
      'Azure Data Lake Storage'
    ]
  }
];

export const powerPlatformCaseStudies: CaseStudyData[] = [
  {
    id: 'power-platform-ticket-automation',
    title: 'End-to-End Ticket Automation with Microsoft Power Platform',
    architectureDiagram: PowerPlatformArchitectureDiagram,
    industry: 'Infrastructure & Energy Solutions',
    duration: '8 weeks',
    teamSize: '4 specialists',
    challenge: 'A leading infrastructure and energy solutions company with expanding national presence in the HVAC, plumbing, and controls systems industry was experiencing significant inefficiencies with their ticketing system. Manual ticket creation was causing delays and inconsistencies across departments, while limited visibility into request status and SLA adherence was hindering operational excellence. The lack of centralized reporting made it impossible to track performance metrics and optimize resource allocation across their growing network of service locations.',
    solution: 'We implemented a comprehensive end-to-end ticket automation system leveraging Microsoft Power Platform to eliminate manual processes and create seamless cross-departmental communication.',
    detailedSections: [
      {
        title: 'Automated Data Collection & Processing',
        content: 'The solution begins with Microsoft Forms serving as the primary data collection point for employee equipment requests. This user-friendly interface ensures consistent data capture while maintaining simplicity for end-users across all company locations.',
        subsections: [
          {
            title: 'Microsoft Forms Integration',
            content: 'Customized forms designed for different request types including equipment procurement, maintenance requests, and facility issues. Dynamic form logic ensures relevant information collection based on request category.'
          },
          {
            title: 'Power Automate Workflow Orchestration',
            content: 'Sophisticated workflows triggered automatically upon form submission, orchestrating the entire process from data validation to ticket creation without human intervention.'
          },
          {
            title: 'SharePoint Data Repository',
            content: 'Centralized logging system maintaining complete audit trails, request history, and status tracking for compliance and performance monitoring.'
          }
        ]
      },
      {
        title: 'ConnectWise API Integration',
        content: 'The heart of the automation lies in the seamless integration with ConnectWise PSA through robust API connectivity, enabling automatic ticket creation with full context and proper categorization.',
        subsections: [
          {
            title: 'Real-time Ticket Generation',
            content: 'Automated ticket creation in ConnectWise with proper priority assignment, category mapping, and initial routing based on request type and business rules.'
          },
          {
            title: 'Bi-directional Data Sync',
            content: 'Status updates from ConnectWise automatically reflected back to SharePoint and notification systems, ensuring real-time visibility across all stakeholders.'
          },
          {
            title: 'Smart Routing & Assignment',
            content: 'Intelligent ticket assignment based on geographic location, expertise requirements, and current workload distribution across field technicians.'
          }
        ]
      },
      {
        title: 'Multi-Department Communication System',
        content: 'Automated email distribution system ensuring relevant departments receive immediate notification with ticket URLs for direct access and action.',
        subsections: [
          {
            title: 'Department-Specific Notifications',
            content: 'Customized email templates for IT, HR, Finance, Facilities, and Fleet Services departments with relevant context and action items.'
          },
          {
            title: 'Employee Confirmation System',
            content: 'Automatic confirmation emails sent to requestors with ticket numbers, expected timelines, and contact information for follow-up.'
          },
          {
            title: 'Escalation Management',
            content: 'Automated escalation workflows triggered by SLA thresholds, ensuring critical issues receive appropriate attention and management visibility.'
          }
        ]
      },
      {
        title: 'Power BI Analytics & Reporting',
        content: 'Comprehensive analytics platform built on top of SharePoint and ConnectWise data, providing real-time insights into operational performance and SLA compliance.',
        subsections: [
          {
            title: 'Real-time Dashboard Development',
            content: 'Executive dashboards displaying key performance indicators including ticket volume, resolution times, department performance, and SLA compliance rates.'
          },
          {
            title: 'Trend Analysis & Forecasting',
            content: 'Advanced analytics identifying patterns in request types, seasonal variations, and resource utilization to support strategic planning and capacity management.'
          },
          {
            title: 'Compliance & Audit Reporting',
            content: 'Automated generation of compliance reports with complete audit trails, supporting regulatory requirements and internal quality assurance processes.'
          }
        ]
      }
    ],
    results: [
      'Achieved 95% faster ticket creation through complete automation of manual processes',
      'Eliminated human error in ticket routing and priority assignment',
      'Established 100% audit trail compliance with automated logging in SharePoint',
      'Reduced average response time by 75% through instant departmental notifications',
      'Implemented real-time SLA monitoring preventing deadline violations',
      'Enhanced cross-departmental communication with automated ticket URL distribution',
      'Enabled proactive management through predictive analytics and trend reporting',
      'Achieved 99.2% system uptime with robust error handling and failover mechanisms'
    ],
    keySuccessFactors: [
      'API-First Architecture: The robust ConnectWise API integration enabled real-time, bi-directional data synchronization, ensuring consistency across all systems while maintaining existing workflows and user familiarity.',
      'User-Centric Design: Microsoft Forms provided an intuitive interface that required minimal training, leading to immediate user adoption across all company locations and departments.',
      'Comprehensive Automation: End-to-end process automation from form submission to ticket resolution eliminated manual handoffs, reducing processing time from hours to minutes.',
      'Multi-Platform Integration: Seamless integration between Microsoft Power Platform and ConnectWise created a unified ecosystem that enhanced rather than disrupted existing business processes.',
      'Analytics-Driven Insights: Power BI dashboards transformed operational data into actionable insights, enabling data-driven decision making and continuous process optimization.'
    ],
    conclusion: 'This Power Platform implementation represents a complete digital transformation of the client\'s ticketing and request management processes. By leveraging Microsoft\'s low-code/no-code capabilities alongside robust API integration, we created a scalable, maintainable solution that grows with the business. The system now processes hundreds of requests monthly with near-zero manual intervention, while providing leadership with unprecedented visibility into operational performance. This foundation enables the company to scale efficiently across new markets while maintaining consistent service quality and operational excellence.',
    technologies: [
      'Microsoft Forms',
      'Power Automate',
      'SharePoint Online',
      'ConnectWise PSA API',
      'Power BI',
      'Microsoft 365',
      'Azure Active Directory',
      'Power Platform Premium',
      'REST APIs',
      'JSON Data Processing'
    ]
  }
];

export const dataVisualizationCaseStudies: CaseStudyData[] = [
  {
    id: 'financial-dashboard-transformation',
    title: 'Real-Time Financial Dashboard for Investment Firm',
    industry: 'Finance',
    duration: '8 weeks',
    teamSize: '4 specialists',
    challenge: 'A leading investment firm needed real-time visibility into portfolio performance, risk metrics, and market trends. Their existing Excel-based reports were updated manually once daily and couldn\'t provide the real-time insights needed for critical investment decisions.',
    solution: 'We built a comprehensive real-time dashboard solution using Power BI Premium with DirectQuery connections to live data sources. The solution included automated data refresh, custom DAX calculations for complex financial metrics, and interactive visualizations that allowed drill-down capabilities across portfolios, sectors, and time periods.',
    results: [
      'Real-time portfolio monitoring with sub-minute data refresh',
      'Reduced report generation time from 4 hours to real-time',
      'Enabled data-driven investment decisions with live market data',
      'Improved risk management with automated alerts',
      'Increased trader productivity by 35%',
      'Enhanced client reporting capabilities'
    ],
    technologies: [
      'Power BI Premium',
      'Power Query',
      'DAX',
      'Azure SQL Database',
      'Power Automate',
      'Excel Services'
    ]
  }
];

export const businessIntelligenceCaseStudies: CaseStudyData[] = [
  {
    id: 'healthcare-predictive-analytics',
    title: 'Predictive Analytics Platform for Healthcare Network',
    industry: 'Healthcare',
    duration: '12 weeks',
    teamSize: '6 specialists',
    challenge: 'A regional healthcare network with 15 hospitals was struggling with patient flow management, resource allocation, and predicting readmission risks. They had data scattered across multiple systems but lacked the analytics capabilities to derive actionable insights for improving patient outcomes and operational efficiency.',
    solution: 'We implemented a comprehensive business intelligence platform that unified data from Electronic Health Records (EHR), financial systems, and operational databases. The solution included predictive models for patient readmission risk, capacity planning algorithms, and automated reporting for regulatory compliance.',
    results: [
      'Reduced patient readmission rates by 22%',
      'Improved bed utilization efficiency by 28%',
      'Decreased average length of stay by 1.8 days',
      'Enhanced staff scheduling optimization',
      'Automated compliance reporting saving 40 hours/week',
      'Improved patient satisfaction scores by 15%'
    ],
    technologies: [
      'Azure Machine Learning',
      'Azure Synapse Analytics',
      'Power BI',
      'Azure Data Factory',
      'SQL Server',
      'Python',
      'R'
    ]
  }
];

export const cloudModernizationCaseStudies: CaseStudyData[] = [
  {
    id: 'manufacturing-cloud-migration',
    title: 'Complete Cloud Migration for Manufacturing Giant',
    industry: 'Manufacturing',
    duration: '16 weeks',
    teamSize: '8 specialists',
    challenge: 'A global manufacturing company with operations in 20 countries was running on legacy on-premises infrastructure that was costly to maintain, difficult to scale, and hindering their digital transformation initiatives. They needed to migrate 200+ databases and applications while ensuring zero downtime for critical production systems.',
    solution: 'We executed a phased cloud migration strategy using Azure landing zones and a hub-and-spoke network architecture. The migration included database modernization with Azure SQL Managed Instance, application containerization with Azure Kubernetes Service, and implementation of cloud-native monitoring and security solutions.',
    results: [
      'Achieved 99.9% uptime during migration with zero production outages',
      'Reduced infrastructure costs by 45%',
      'Improved application performance by 60%',
      'Enhanced disaster recovery with 15-minute RTO',
      'Enabled global scalability and elasticity',
      'Improved security posture with advanced threat protection'
    ],
    technologies: [
      'Azure Migrate',
      'Azure SQL Managed Instance',
      'Azure Kubernetes Service',
      'Azure DevOps',
      'Azure Monitor',
      'Azure Security Center',
      'ARM Templates'
    ]
  }
];

export const aiEngineeringCaseStudies: CaseStudyData[] = [
  {
    id: 'e-commerce-recommendation-engine',
    title: 'AI-Powered Recommendation Engine for E-commerce Platform',
    industry: 'E-commerce',
    duration: '14 weeks',
    teamSize: '7 specialists',
    challenge: 'A rapidly growing e-commerce platform with 2 million active users was seeing declining conversion rates and customer engagement. Their basic recommendation system was rule-based and couldn\'t adapt to changing customer preferences or provide personalized experiences at scale.',
    solution: 'We developed a sophisticated AI recommendation engine using machine learning algorithms including collaborative filtering, content-based filtering, and deep learning models. The solution was deployed on Azure Machine Learning with real-time inference capabilities and A/B testing framework for continuous optimization.',
    results: [
      'Increased conversion rates by 34%',
      'Improved average order value by 28%',
      'Enhanced customer engagement with 45% higher click-through rates',
      'Reduced customer churn by 19%',
      'Achieved 99.5% model uptime with sub-100ms inference time',
      'Enabled personalization for 2M+ users in real-time'
    ],
    technologies: [
      'Azure Machine Learning',
      'Python',
      'TensorFlow',
      'Azure Cosmos DB',
      'Azure Functions',
      'Azure Container Instances',
      'MLflow'
    ]
  }
];