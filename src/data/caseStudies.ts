export interface CaseStudyData {
  id: string;
  title: string;
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
    id: 'grocery-retailer-analytics',
    title: 'Modernizing Analytics for a Leading Grocery Retailer',
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