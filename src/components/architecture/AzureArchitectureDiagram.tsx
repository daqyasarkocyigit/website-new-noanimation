import React from 'react';

const AzureArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden">
      <svg viewBox="0 0 1400 820" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Background */}
        <rect width="1400" height="820" fill="#f5f5f5"/>
        
        {/* Title */}
        <text x="700" y="40" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="500" fill="#333">
          Azure Data Pipeline Architecture - Medallion Architecture with Unity Catalog
        </text>
        
        {/* Main container boxes */}
        {/* Data Sources */}
        <g id="data-sources">
          <rect x="50" y="80" width="200" height="300" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="50" y="80" width="200" height="40" fill="#e8e8e8" rx="2"/>
          <text x="150" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">DATA SOURCES</text>
          
          {/* Source Systems */}
          <rect x="70" y="140" width="160" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="150" y="160" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">SQL Server</text>
          <text x="150" y="175" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">(On-premises)</text>
          
          <rect x="70" y="200" width="160" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="150" y="220" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">ERP Systems</text>
          <text x="150" y="235" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">(SAP, Oracle)</text>
          
          <rect x="70" y="260" width="160" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="150" y="280" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">External APIs</text>
          <text x="150" y="295" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">(REST/SOAP)</text>
          
          <rect x="70" y="320" width="160" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="150" y="340" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Flat Files</text>
          <text x="150" y="355" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">(CSV, Excel)</text>
        </g>
        
        {/* Ingest */}
        <g id="ingest">
          <rect x="280" y="80" width="200" height="300" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="280" y="80" width="200" height="40" fill="#e8e8e8" rx="2"/>
          <text x="380" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">INGEST</text>
          
          {/* Azure Data Factory */}
          <rect x="300" y="140" width="160" height="100" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="380" y="165" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Azure Data Factory</text>
          <text x="380" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Master Pipeline</text>
          <text x="380" y="200" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Bronze Ingestion</text>
          <text x="380" y="215" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Metadata-driven</text>
          <text x="380" y="230" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Self-hosted IR</text>
          
          {/* Control Database */}
          <rect x="300" y="260" width="160" height="90" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="380" y="285" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Control Database</text>
          <text x="380" y="305" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Tables Config</text>
          <text x="380" y="320" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Processing Status</text>
          <text x="380" y="335" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• UC Metadata</text>
        </g>
        
        {/* Process & Store */}
        <g id="process-store">
          <rect x="510" y="80" width="400" height="300" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="510" y="80" width="400" height="40" fill="#e8e8e8" rx="2"/>
          <text x="710" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">PROCESS &amp; STORE</text>
          
          {/* Databricks */}
          <rect x="530" y="140" width="360" height="80" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="710" y="165" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Azure Databricks</text>
          <text x="710" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• bronze_to_silver.py notebook</text>
          <text x="710" y="200" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Delta operations &amp; ACID transactions</text>
          <text x="710" y="215" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Data quality &amp; deduplication</text>
          
          {/* Storage Layers */}
          <rect x="530" y="240" width="110" height="120" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="530" y="240" width="110" height="30" fill="#cd7f32" rx="2"/>
          <text x="585" y="260" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#fff">Bronze</text>
          <text x="585" y="285" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Raw Data</text>
          <text x="585" y="300" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Parquet</text>
          <text x="585" y="315" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Partitioned</text>
          <text x="585" y="330" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">by Date</text>
          
          <rect x="665" y="240" width="110" height="120" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="665" y="240" width="110" height="30" fill="#c0c0c0" rx="2"/>
          <text x="720" y="260" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Silver</text>
          <text x="720" y="285" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Cleaned</text>
          <text x="720" y="300" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Delta Lake</text>
          <text x="720" y="315" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Validated</text>
          <text x="720" y="330" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Deduplicated</text>
          
          <rect x="800" y="240" width="90" height="120" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="800" y="240" width="90" height="30" fill="#ffd700" rx="2"/>
          <text x="845" y="260" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Gold</text>
          <text x="845" y="285" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Business</text>
          <text x="845" y="300" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">KPIs</text>
          <text x="845" y="315" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Aggregated</text>
          <text x="845" y="330" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Analytics</text>
          
          {/* Azure Data Lake Storage */}
          <rect x="530" y="365" width="360" height="12" fill="#f0f0f0" rx="2"/>
          <text x="710" y="374" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Azure Data Lake Storage Gen2</text>
        </g>
        
        {/* Serve */}
        <g id="serve">
          <rect x="940" y="80" width="200" height="300" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="940" y="80" width="200" height="40" fill="#e8e8e8" rx="2"/>
          <text x="1040" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">SERVE</text>
          
          {/* Unity Catalog */}
          <rect x="960" y="140" width="160" height="90" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="1040" y="165" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Unity Catalog</text>
          <text x="1040" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• main.bronze_raw</text>
          <text x="1040" y="200" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• main.silver_prod</text>
          <text x="1040" y="215" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• main.gold_analytics</text>
          
          {/* Consumption */}
          <rect x="960" y="250" width="160" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="1040" y="275" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Power BI</text>
          
          <rect x="960" y="300" width="160" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="1040" y="325" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Synapse Analytics</text>
        </g>
        
        {/* Governance */}
        <g id="governance">
          <rect x="1170" y="80" width="180" height="300" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="1170" y="80" width="180" height="40" fill="#e8e8e8" rx="2"/>
          <text x="1260" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">GOVERNANCE</text>
          
          <rect x="1190" y="140" width="140" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="1260" y="160" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Azure Key Vault</text>
          <text x="1260" y="175" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Secrets</text>
          
          <rect x="1190" y="200" width="140" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="1260" y="220" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Azure AD</text>
          <text x="1260" y="235" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">RBAC</text>
          
          <rect x="1190" y="260" width="140" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="1260" y="280" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Data Lineage</text>
          <text x="1260" y="295" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Unity Catalog</text>
          
          <rect x="1190" y="320" width="140" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="1260" y="340" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Monitoring</text>
          <text x="1260" y="355" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">App Insights</text>
        </g>
        
        {/* CI/CD Pipeline */}
        <g id="cicd">
          <rect x="50" y="420" width="1300" height="120" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="50" y="420" width="1300" height="40" fill="#e8e8e8" rx="2"/>
          <text x="700" y="445" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">CI/CD PIPELINE - AZURE DEVOPS</text>
          
          {/* Pipeline stages */}
          <rect x="100" y="480" width="200" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="200" y="505" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Development ADF</text>
          
          <rect x="350" y="480" width="200" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="450" y="505" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">adf_publish Branch</text>
          
          <rect x="600" y="480" width="200" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="700" y="505" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Test Environment</text>
          
          <rect x="850" y="480" width="200" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="950" y="505" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Approval Gates</text>
          
          <rect x="1100" y="480" width="200" height="40" fill="#333" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <text x="1200" y="505" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fill="#fff">Production ADF</text>
        </g>
        
        {/* Key Features */}
        <g id="features">
          <rect x="50" y="580" width="1300" height="200" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="50" y="580" width="1300" height="40" fill="#e8e8e8" rx="2"/>
          <text x="700" y="605" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">KEY ARCHITECTURE FEATURES</text>
          
          <text x="100" y="650" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Metadata-driven pipeline orchestration</text>
          <text x="100" y="670" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Delta Lake ACID transactions</text>
          <text x="100" y="690" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Unity Catalog centralized governance</text>
          <text x="100" y="710" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• External locations (ABFSS paths)</text>
          <text x="100" y="730" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Self-hosted Integration Runtime</text>
          <text x="100" y="750" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• External &amp; Managed table support</text>
          
          <text x="500" y="650" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Parallel processing with batch control</text>
          <text x="500" y="670" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Automated data quality validation</text>
          <text x="500" y="690" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Comprehensive error handling</text>
          <text x="500" y="710" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Row-level security support</text>
          <text x="500" y="730" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Incremental &amp; full load patterns</text>
          <text x="500" y="750" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• SET/UNSET MANAGED conversions</text>
          
          <text x="900" y="650" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• ARM template deployment</text>
          <text x="900" y="670" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Environment-specific configurations</text>
          <text x="900" y="690" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Automated trigger management</text>
          <text x="900" y="710" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Zero-downtime deployments</text>
          <text x="900" y="730" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Production approval workflows</text>
          <text x="900" y="750" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Intelligent table type selection</text>
        </g>
        
        {/* Footer */}
        <text x="700" y="800" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#666">
          © 2025 DAQ Consulting - Enterprise Analytics Architecture
        </text>
        
        {/* Flow arrows */}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#666"/>
          </marker>
        </defs>
        
        {/* Data flow connections */}
        <path d="M 250 230 L 280 230" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d="M 480 230 L 510 230" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d="M 640 300 L 665 300" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d="M 775 300 L 800 300" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)"/>
        <path d="M 890 300 L 940 300" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* CI/CD flow */}
        <path d="M 300 500 L 350 500" stroke="#666" strokeWidth="1" markerEnd="url(#arrow)"/>
        <path d="M 550 500 L 600 500" stroke="#666" strokeWidth="1" markerEnd="url(#arrow)"/>
        <path d="M 800 500 L 850 500" stroke="#666" strokeWidth="1" markerEnd="url(#arrow)"/>
        <path d="M 1050 500 L 1100 500" stroke="#666" strokeWidth="1" markerEnd="url(#arrow)"/>
      </svg>
    </div>
  );
};

export default AzureArchitectureDiagram;