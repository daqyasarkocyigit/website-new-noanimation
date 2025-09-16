import React from 'react';

const PowerPlatformArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden">
      <div className="w-full overflow-x-auto">
        <svg 
          viewBox="0 0 1400 800" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto min-w-[800px] lg:min-w-[1200px]"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background */}
          <rect width="1400" height="800" fill="#f8fafc"/>
          
          {/* Title */}
          <text x="700" y="40" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="24" fontWeight="600" fill="#1f2937">
            Microsoft Forms to ConnectWise Ticketing Architecture
          </text>
          
          {/* Step 1: Data Collection */}
          <g id="step1">
            <rect x="50" y="80" width="300" height="180" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" rx="8"/>
            <rect x="50" y="80" width="300" height="40" fill="#FF3333" rx="8 8 0 0"/>
            <text x="200" y="105" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="16" fontWeight="600" fill="#ffffff">
              1. Data Collection
            </text>
            
            {/* Employee Icon */}
            <circle cx="120" cy="160" r="25" fill="#3b82f6" stroke="#ffffff" strokeWidth="3"/>
            <text x="120" y="166" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="14" fill="#ffffff">👤</text>
            <text x="120" y="200" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fill="#6b7280">Employees</text>
            
            {/* Microsoft Forms */}
            <rect x="200" y="130" width="120" height="60" fill="#7c2d91" rx="6"/>
            <text x="260" y="150" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#ffffff">Microsoft Forms</text>
            <text x="260" y="170" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">Equipment Request</text>
            
            {/* Arrow from employee to forms */}
            <path d="M 145 160 L 195 160" stroke="#FF3333" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="170" y="152" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#6b7280">Submit Request</text>
          </g>
          
          {/* Step 2: Processing & Ticketing System */}
          <g id="step2">
            <rect x="400" y="80" width="600" height="180" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" rx="8"/>
            <rect x="400" y="80" width="600" height="40" fill="#FF3333" rx="8 8 0 0"/>
            <text x="700" y="105" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="16" fontWeight="600" fill="#ffffff">
              2. Processing &amp; Ticketing System
            </text>
            
            {/* Power Automate */}
            <rect x="420" y="140" width="140" height="80" fill="#0078d4" rx="6"/>
            <text x="490" y="165" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#ffffff">Power Automate</text>
            <text x="490" y="180" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">Workflow</text>
            <text x="490" y="195" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">Orchestration</text>
            <text x="490" y="210" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">API Integration</text>
            
            {/* SharePoint */}
            <rect x="580" y="140" width="140" height="80" fill="#0b6fc0" rx="6"/>
            <text x="650" y="165" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#ffffff">SharePoint</text>
            <text x="650" y="180" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">Data Repository</text>
            <text x="650" y="195" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">Audit Trail</text>
            <text x="650" y="210" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">Logging</text>
            
            {/* ConnectWise PSA */}
            <rect x="740" y="140" width="140" height="80" fill="#FF3333" rx="6"/>
            <text x="810" y="165" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#ffffff">ConnectWise</text>
            <text x="810" y="180" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#ffe5e5">Ticket Management</text>
            <text x="810" y="195" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#ffe5e5">API Integration</text>
            <text x="810" y="210" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#ffe5e5">Auto Creation</text>
            
            {/* Flow arrows */}
            <path d="M 560 180 L 575 180" stroke="#FF3333" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="567" y="172" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="9" fill="#6b7280">Log Data</text>
            
            <path d="M 720 180 L 735 180" stroke="#FF3333" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="727" y="172" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="9" fill="#6b7280">API Call</text>
          </g>
          
          {/* Step 3: Email Distribution */}
          <g id="step3">
            <rect x="50" y="320" width="950" height="200" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" rx="8"/>
            <rect x="50" y="320" width="950" height="40" fill="#FF3333" rx="8 8 0 0"/>
            <text x="525" y="345" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="16" fontWeight="600" fill="#ffffff">
              3. Email Distribution with Ticket URL
            </text>
            
            {/* Department boxes */}
            <rect x="100" y="380" width="120" height="60" fill="#0078d4" rx="6"/>
            <text x="160" y="405" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#ffffff">IT Department</text>
            <text x="160" y="420" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">Ticket Notification</text>
            
            <rect x="250" y="380" width="120" height="60" fill="#0078d4" rx="6"/>
            <text x="310" y="405" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#ffffff">HR Department</text>
            <text x="310" y="420" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">Staff Requests</text>
            
            <rect x="400" y="380" width="120" height="60" fill="#0078d4" rx="6"/>
            <text x="460" y="405" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#ffffff">Fleet Services</text>
            <text x="460" y="420" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">Vehicle &amp; Equipment</text>
            
            <rect x="550" y="380" width="120" height="60" fill="#0078d4" rx="6"/>
            <text x="610" y="405" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#ffffff">Finance</text>
            <text x="610" y="420" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">Budget Approval</text>
            
            <rect x="700" y="380" width="120" height="60" fill="#0078d4" rx="6"/>
            <text x="760" y="405" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#ffffff">Facilities</text>
            <text x="760" y="420" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#e5e7eb">Infrastructure</text>
            
            {/* Employee Confirmation */}
            <rect x="850" y="380" width="120" height="60" fill="#10b981" rx="6"/>
            <text x="910" y="400" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#ffffff">Employee</text>
            <text x="910" y="415" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#d1fae5">Confirmation</text>
            <text x="910" y="430" textAnchor="middle" fontFamily="Inter, Arial, Sans-serif" fontSize="10" fill="#d1fae5">Email</text>
            
            {/* Distribution arrows */}
            <path d="M 490 240 L 490 280 L 160 280 L 160 375" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)"/>
            <path d="M 490 280 L 310 280 L 310 375" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)"/>
            <path d="M 490 280 L 460 280 L 460 375" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)"/>
            <path d="M 490 280 L 610 280 L 610 375" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)"/>
            <path d="M 490 280 L 760 280 L 760 375" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)"/>
            <path d="M 810 240 L 810 280 L 910 280 L 910 375" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)"/>
          </g>
          
          {/* Step 4: Analytics & Reporting */}
          <g id="step4">
            <rect x="1050" y="80" width="300" height="440" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" rx="8"/>
            <rect x="1050" y="80" width="300" height="40" fill="#FF3333" rx="8 8 0 0"/>
            <text x="1200" y="105" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="16" fontWeight="600" fill="#ffffff">
              4. Analytics &amp; Reporting
            </text>
            
            {/* Power BI */}
            <rect x="1080" y="150" width="240" height="80" fill="#f2c811" rx="6"/>
            <text x="1200" y="175" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="500" fill="#1f2937">Power BI Analytics</text>
            <text x="1200" y="195" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#6b7280">• Real-time Dashboards</text>
            <text x="1200" y="210" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#6b7280">• SLA Monitoring</text>
            <text x="1200" y="225" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#6b7280">• Performance Metrics</text>
            
            {/* Capabilities */}
            <rect x="1080" y="260" width="240" height="120" fill="#f8fafc" stroke="#e5e7eb" strokeWidth="1" rx="6"/>
            <text x="1200" y="280" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#1f2937">System Capabilities</text>
            <text x="1090" y="300" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#6b7280">• Real-time form-to-ticket conversion</text>
            <text x="1090" y="318" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#6b7280">• Automated email notifications</text>
            <text x="1090" y="336" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#6b7280">• Complete audit trail in SharePoint</text>
            <text x="1090" y="354" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#6b7280">• SLA compliance tracking</text>
            <text x="1090" y="372" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#6b7280">• Cross-department visibility</text>
            
            {/* Key Metrics */}
            <rect x="1080" y="400" width="240" height="100" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" rx="6"/>
            <text x="1200" y="420" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="500" fill="#dc2626">Key Metrics</text>
            <text x="1090" y="440" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#7f1d1d">✓ 95% faster ticket creation</text>
            <text x="1090" y="458" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#7f1d1d">✓ 100% automated workflow</text>
            <text x="1090" y="476" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#7f1d1d">✓ Real-time departmental alerts</text>
            <text x="1090" y="494" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#7f1d1d">✓ Complete audit transparency</text>
          </g>
          
          {/* Main flow arrows */}
          <path d="M 350 160 L 395 160" stroke="#FF3333" strokeWidth="3" markerEnd="url(#arrow)"/>
          <text x="372" y="150" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fill="#6b7280">Trigger Flow</text>
          
          {/* Connection to analytics */}
          <path d="M 880 180 L 920 180 L 920 300 L 1045 300" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)"/>
          <text x="965" y="292" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="9" fill="#6b7280">Data Feed</text>
          
          <path d="M 720 210 L 920 210 L 920 320 L 1045 320" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)"/>
          
          {/* Footer */}
          <text x="700" y="770" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fill="#6b7280">
            © 2025 DAQ Consulting - Enterprise Power Platform Architecture
          </text>
          
          {/* Arrow marker definition */}
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#666"/>
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default PowerPlatformArchitectureDiagram;