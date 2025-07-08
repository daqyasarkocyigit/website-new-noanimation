import React from 'react';

const AzureArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden">
      <div className="w-full overflow-x-auto">
        <svg 
          viewBox="0 0 1400 820" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto min-w-[800px] lg:min-w-[1200px]"
          preserveAspectRatio="xMidYMid meet"
        >
        {/* Background */}
        <rect width="1400" height="820" fill="#f5f5f5"/>
        
        {/* Define icons */}
        <defs>
          {/* Azure Data Factory Icon */}
          <g id="adf-icon">
            <rect width="16" height="16" fill="#0078D4" rx="2"/>
            <rect x="2" y="2" width="12" height="12" fill="#40E0D0" rx="1"/>
            <circle cx="5" cy="5" r="1" fill="#0078D4"/>
            <circle cx="11" cy="5" r="1" fill="#0078D4"/>
            <circle cx="8" cy="8" r="1" fill="#0078D4"/>
            <circle cx="5" cy="11" r="1" fill="#0078D4"/>
            <circle cx="11" cy="11" r="1" fill="#0078D4"/>
            <path d="M5 5 L8 8 L11 5" stroke="#0078D4" strokeWidth="0.5" fill="none"/>
            <path d="M5 11 L8 8 L11 11" stroke="#0078D4" strokeWidth="0.5" fill="none"/>
          </g>

          {/* Databricks Icon */}
          <g id="databricks-icon">
            <circle cx="8" cy="8" r="8" fill="#FF3621"/>
            <path d="M4 6 L8 4 L12 6 L8 8 Z" fill="#ffffff"/>
            <path d="M4 8 L8 6 L12 8 L8 10 Z" fill="#ffffff" opacity="0.8"/>
            <path d="M4 10 L8 8 L12 10 L8 12 Z" fill="#ffffff" opacity="0.6"/>
          </g>

          {/* Power BI Icon */}
          <g id="powerbi-icon">
            <rect width="16" height="16" fill="#F2C811" rx="2"/>
            <rect x="3" y="8" width="2" height="6" fill="#000000"/>
            <rect x="6" y="5" width="2" height="9" fill="#000000"/>
            <rect x="9" y="3" width="2" height="11" fill="#000000"/>
            <rect x="12" y="6" width="2" height="8" fill="#000000"/>
          </g>

          {/* Azure Storage Icon */}
          <g id="storage-icon">
            <rect width="16" height="16" fill="#0078D4" rx="2"/>
            <rect x="2" y="6" width="12" height="2" fill="#ffffff"/>
            <rect x="2" y="9" width="12" height="2" fill="#ffffff"/>
            <rect x="2" y="12" width="12" height="2" fill="#ffffff"/>
            <circle cx="4" cy="4" r="1" fill="#ffffff"/>
            <circle cx="8" cy="4" r="1" fill="#ffffff"/>
            <circle cx="12" cy="4" r="1" fill="#ffffff"/>
          </g>

          {/* SQL Database Icon */}
          <g id="sql-icon">
            <ellipse cx="8" cy="4" rx="6" ry="2" fill="#0078D4"/>
            <rect x="2" y="4" width="12" height="8" fill="#0078D4"/>
            <ellipse cx="8" cy="12" rx="6" ry="2" fill="#0078D4"/>
            <ellipse cx="8" cy="6" rx="6" ry="1.5" fill="#40E0D0"/>
            <ellipse cx="8" cy="8" rx="6" ry="1.5" fill="#40E0D0"/>
            <ellipse cx="8" cy="10" rx="6" ry="1.5" fill="#40E0D0"/>
          </g>

          {/* Key Vault Icon */}
          <g id="keyvault-icon">
            <rect width="16" height="16" fill="#FFB900" rx="2"/>
            <rect x="4" y="6" width="8" height="6" fill="#000000" rx="1"/>
            <circle cx="8" cy="5" r="2" fill="none" stroke="#000000" strokeWidth="1"/>
            <circle cx="8" cy="9" r="1" fill="#FFB900"/>
            <rect x="7.5" y="9" width="1" height="2" fill="#FFB900"/>
          </g>

          {/* Azure AD Icon */}
          <g id="azuread-icon">
            <rect width="16" height="16" fill="#00BCF2" rx="2"/>
            <circle cx="6" cy="6" r="2" fill="#ffffff"/>
            <path d="M2 12 Q6 10 10 12" fill="#ffffff"/>
            <rect x="10" y="4" width="4" height="8" fill="#ffffff" rx="1"/>
            <rect x="11" y="5" width="2" height="1" fill="#00BCF2"/>
            <rect x="11" y="7" width="2" height="1" fill="#00BCF2"/>
            <rect x="11" y="9" width="2" height="1" fill="#00BCF2"/>
          </g>

          {/* Unity Catalog Icon */}
          <g id="unity-icon">
            <rect width="16" height="16" fill="#44B556" rx="2"/>
            <rect x="3" y="3" width="10" height="1" fill="#ffffff"/>
            <rect x="3" y="5" width="8" height="1" fill="#ffffff"/>
            <rect x="3" y="7" width="6" height="1" fill="#ffffff"/>
            <rect x="3" y="9" width="4" height="1" fill="#ffffff"/>
            <rect x="3" y="11" width="2" height="1" fill="#ffffff"/>
            <circle cx="13" cy="6" r="1" fill="#ffffff"/>
            <circle cx="11" cy="9" r="1" fill="#ffffff"/>
            <circle cx="9" cy="12" r="1" fill="#ffffff"/>
          </g>

          {/* Synapse Icon */}
          <g id="synapse-icon">
            <rect width="16" height="16" fill="#9B4F96" rx="2"/>
            <path d="M2 8 L8 2 L14 8 L8 14 Z" fill="#ffffff"/>
            <circle cx="8" cy="8" r="2" fill="#9B4F96"/>
          </g>
        </defs>
        
        {/* Company Logo - Top Left Corner */}
        <g id="company-logo">
          {/* DAQ Text */}
          <text x="30" y="40" fontFamily="Inter, Arial, sans-serif" fontSize="18" fontWeight="700" fill="#ef4444">
            DAQ
          </text>
        </g>
        
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
          <use href="#sql-icon" x="75" y="145"/>
          <text x="105" y="160" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">SQL Server</text>
          <text x="105" y="175" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">(On-premises)</text>
          
          <rect x="70" y="200" width="160" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#sql-icon" x="75" y="205"/>
          <text x="105" y="220" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">ERP Systems</text>
          <text x="105" y="235" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">(SAP, Oracle)</text>
          
          <rect x="70" y="260" width="160" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <circle cx="83" cy="277" r="8" fill="#0078D4"/>
          <text x="88" y="282" fontFamily="Arial, sans-serif" fontSize="8" fill="#fff">API</text>
          <text x="105" y="280" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">External APIs</text>
          <text x="105" y="295" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">(REST/SOAP)</text>
          
          <rect x="70" y="320" width="160" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#storage-icon" x="75" y="325"/>
          <text x="105" y="340" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Flat Files</text>
          <text x="105" y="355" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">(CSV, Excel)</text>
        </g>
        
        {/* Ingest */}
        <g id="ingest">
          <rect x="280" y="80" width="200" height="300" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="280" y="80" width="200" height="40" fill="#e8e8e8" rx="2"/>
          <text x="380" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">INGEST</text>
          
          {/* Azure Data Factory */}
          <rect x="300" y="140" width="160" height="100" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#adf-icon" x="305" y="145"/>
          <text x="330" y="165" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Azure Data Factory</text>
          <text x="330" y="185" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Master Pipeline</text>
          <text x="330" y="200" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Bronze Ingestion</text>
          <text x="330" y="215" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Metadata-driven</text>
          <text x="330" y="230" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Self-hosted IR</text>
          
          {/* Control Database */}
          <rect x="300" y="260" width="160" height="90" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#sql-icon" x="305" y="265"/>
          <text x="330" y="285" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Control Database</text>
          <text x="330" y="305" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Tables Config</text>
          <text x="330" y="320" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Processing Status</text>
          <text x="330" y="335" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• UC Metadata</text>
        </g>
        
        {/* Process & Store */}
        <g id="process-store">
          <rect x="510" y="80" width="400" height="300" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="510" y="80" width="400" height="40" fill="#e8e8e8" rx="2"/>
          <text x="710" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">PROCESS & STORE</text>
          
          {/* Databricks */}
          <rect x="530" y="140" width="360" height="80" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#databricks-icon" x="535" y="145"/>
          <text x="565" y="165" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Azure Databricks</text>
          <text x="565" y="185" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• bronze_to_silver.py notebook</text>
          <text x="565" y="200" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Delta operations & ACID transactions</text>
          <text x="565" y="215" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• Data quality & deduplication</text>
          
          {/* Storage Layers */}
          <rect x="530" y="240" width="110" height="120" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="530" y="240" width="110" height="30" fill="#cd7f32" rx="2"/>
          <use href="#storage-icon" x="535" y="245" opacity="0.8"/>
          <text x="560" y="260" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#fff">Bronze</text>
          <text x="585" y="285" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Raw Data</text>
          <text x="585" y="300" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Parquet</text>
          <text x="585" y="315" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Partitioned</text>
          <text x="585" y="330" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">by Date</text>
          
          <rect x="665" y="240" width="110" height="120" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="665" y="240" width="110" height="30" fill="#c0c0c0" rx="2"/>
          <use href="#storage-icon" x="670" y="245" opacity="0.8"/>
          <text x="695" y="260" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Silver</text>
          <text x="720" y="285" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Cleaned</text>
          <text x="720" y="300" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Delta Lake</text>
          <text x="720" y="315" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Validated</text>
          <text x="720" y="330" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Deduplicated</text>
          
          <rect x="800" y="240" width="90" height="120" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="800" y="240" width="90" height="30" fill="#ffd700" rx="2"/>
          <use href="#storage-icon" x="805" y="245" opacity="0.8"/>
          <text x="825" y="260" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Gold</text>
          <text x="845" y="285" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Business</text>
          <text x="845" y="300" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">KPIs</text>
          <text x="845" y="315" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Aggregated</text>
          <text x="845" y="330" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Analytics</text>
          
          {/* Azure Data Lake Storage */}
          <rect x="530" y="365" width="360" height="12" fill="#f0f0f0" rx="2"/>
          <use href="#storage-icon" x="535" y="365" transform="scale(0.75)"/>
          <text x="560" y="374" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Azure Data Lake Storage Gen2</text>
        </g>
        
        {/* Serve */}
        <g id="serve">
          <rect x="940" y="80" width="200" height="300" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="940" y="80" width="200" height="40" fill="#e8e8e8" rx="2"/>
          <text x="1040" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">SERVE</text>
          
          {/* Unity Catalog */}
          <rect x="960" y="140" width="160" height="90" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#unity-icon" x="965" y="145"/>
          <text x="990" y="165" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#333">Unity Catalog</text>
          <text x="990" y="185" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• main.bronze_raw</text>
          <text x="990" y="200" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• main.silver_prod</text>
          <text x="990" y="215" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">• main.gold_analytics</text>
          
          {/* Power BI */}
          <rect x="960" y="250" width="160" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#powerbi-icon" x="965" y="257"/>
          <text x="990" y="275" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Power BI</text>
          
          {/* Synapse Analytics */}
          <rect x="960" y="300" width="160" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#synapse-icon" x="965" y="307"/>
          <text x="990" y="325" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Synapse Analytics</text>
        </g>
        
        {/* Governance */}
        <g id="governance">
          <rect x="1170" y="80" width="180" height="300" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="1170" y="80" width="180" height="40" fill="#e8e8e8" rx="2"/>
          <text x="1260" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">GOVERNANCE</text>
          
          <rect x="1190" y="140" width="140" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#keyvault-icon" x="1195" y="145"/>
          <text x="1220" y="160" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Azure Key Vault</text>
          <text x="1220" y="175" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Secrets</text>
          
          <rect x="1190" y="200" width="140" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#azuread-icon" x="1195" y="205"/>
          <text x="1220" y="220" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Azure AD</text>
          <text x="1220" y="235" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">RBAC</text>
          
          <rect x="1190" y="260" width="140" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#unity-icon" x="1195" y="265"/>
          <text x="1220" y="280" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Data Lineage</text>
          <text x="1220" y="295" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">Unity Catalog</text>
          
          <rect x="1190" y="320" width="140" height="50" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <circle cx="1203" cy="337" r="8" fill="#00BCF2"/>
          <text x="1208" y="342" fontFamily="Arial, sans-serif" fontSize="6" fill="#fff">MON</text>
          <text x="1220" y="340" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Monitoring</text>
          <text x="1220" y="355" fontFamily="Arial, sans-serif" fontSize="10" fill="#666">App Insights</text>
        </g>
        
        {/* CI/CD Pipeline */}
        <g id="cicd">
          <rect x="50" y="420" width="1300" height="120" fill="#ffffff" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <rect x="50" y="420" width="1300" height="40" fill="#e8e8e8" rx="2"/>
          <circle cx="70" cy="440" r="10" fill="#0078D4"/>
          <text x="75" y="445" fontFamily="Arial, sans-serif" fontSize="8" fill="#fff">AZ</text>
          <text x="90" y="445" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500" fill="#333">CI/CD PIPELINE - AZURE DEVOPS</text>
          
          {/* Pipeline stages */}
          <rect x="100" y="480" width="200" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#adf-icon" x="105" y="487"/>
          <text x="130" y="505" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Development ADF</text>
          
          <rect x="350" y="480" width="200" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <circle cx="363" cy="497" r="8" fill="#333"/>
          <text x="368" y="502" fontFamily="Arial, sans-serif" fontSize="6" fill="#fff">GIT</text>
          <text x="380" y="505" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">adf_publish Branch</text>
          
          <rect x="600" y="480" width="200" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <circle cx="613" cy="497" r="8" fill="#28a745"/>
          <text x="618" y="502" fontFamily="Arial, sans-serif" fontSize="6" fill="#fff">TEST</text>
          <text x="630" y="505" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Test Environment</text>
          
          <rect x="850" y="480" width="200" height="40" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <circle cx="863" cy="497" r="8" fill="#ffc107"/>
          <text x="868" y="502" fontFamily="Arial, sans-serif" fontSize="6" fill="#333">APP</text>
          <text x="880" y="505" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">Approval Gates</text>
          
          <rect x="1100" y="480" width="200" height="40" fill="#333" stroke="#d0d0d0" strokeWidth="1" rx="2"/>
          <use href="#adf-icon" x="1105" y="487"/>
          <text x="1130" y="505" fontFamily="Arial, sans-serif" fontSize="12" fill="#fff">Production ADF</text>
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
          <text x="100" y="750" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• External & Managed table support</text>
          
          <text x="500" y="650" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Parallel processing with batch control</text>
          <text x="500" y="670" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Automated data quality validation</text>
          <text x="500" y="690" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Comprehensive error handling</text>
          <text x="500" y="710" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Row-level security support</text>
          <text x="500" y="730" fontFamily="Arial, sans-serif" fontSize="12" fill="#333">• Incremental & full load patterns</text>
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
    </div>
  );
};

export default AzureArchitectureDiagram;