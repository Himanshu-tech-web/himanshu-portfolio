import React from 'react';

export const ProjectVisual = ({ type }) => {
  switch (type) {
    case 'smartbuild':
      return (
        <div style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}>
            {/* Monitor Stand */}
            <path d="M140 165 L130 185 H190 L180 165 Z" fill="#DCD7D0" stroke="#111111" strokeWidth="1.5" />
            <rect x="110" y="183" width="100" height="5" rx="2.5" fill="#111111" />
            
            {/* Monitor Frame */}
            <rect x="20" y="15" width="280" height="150" rx="10" fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />
            
            {/* Window Header */}
            <path d="M20 25 C20 19 25 15 31 15 H289 C295 15 300 19 300 25 V35 H20 Z" fill="#FFF3E8" stroke="#EAE7E3" strokeWidth="1" />
            <circle cx="35" cy="25" r="3.5" fill="#FF5F56" />
            <circle cx="47" cy="25" r="3.5" fill="#FFBD2E" />
            <circle cx="59" cy="25" r="3.5" fill="#27C93F" />
            <rect x="80" y="21" width="160" height="8" rx="4" fill="#FFFFFF" />
            <text x="88" y="28" fontFamily="Poppins, sans-serif" fontSize="6" fill="#8E8E8E">smartbuild.equipment/dashboard</text>

            {/* Content Sidebar */}
            <rect x="28" y="42" width="55" height="115" rx="4" fill="#F8F6F2" />
            <rect x="34" y="48" width="43" height="6" rx="3" fill="#111111" />
            <rect x="34" y="60" width="35" height="4" rx="2" fill="#F47B20" />
            <rect x="34" y="70" width="40" height="4" rx="2" fill="#D0CCC7" />
            <rect x="34" y="80" width="32" height="4" rx="2" fill="#D0CCC7" />
            <rect x="34" y="90" width="38" height="4" rx="2" fill="#D0CCC7" />

            {/* Equipment Analytics Stats */}
            <rect x="90" y="42" width="58" height="35" rx="6" fill="#FFF3E8" stroke="#F47B20" strokeWidth="1" />
            <text x="96" y="53" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="600" fill="#F47B20">Active Fleet</text>
            <text x="96" y="68" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="700" fill="#111111">28 Units</text>

            <rect x="154" y="42" width="58" height="35" rx="6" fill="#FFFFFF" stroke="#EAE7E3" strokeWidth="1" />
            <text x="160" y="53" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="600" fill="#5F5F5F">Diesel Expense</text>
            <text x="160" y="68" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="700" fill="#111111">$4,850</text>

            <rect x="218" y="42" width="74" height="35" rx="6" fill="#FFFFFF" stroke="#EAE7E3" strokeWidth="1" />
            <text x="224" y="53" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="600" fill="#5F5F5F">Hours Logged</text>
            <text x="224" y="68" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="700" fill="#111111">1,240 hrs</text>

            {/* Equipment Machine Cards / Chart */}
            <rect x="90" y="85" width="122" height="72" rx="6" fill="#FFFFFF" stroke="#EAE7E3" strokeWidth="1" />
            <text x="98" y="97" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="600" fill="#111111">Operational Hours Bar</text>
            {/* Bar graph bars */}
            <rect x="98" y="135" width="10" height="15" fill="#FFF3E8" />
            <rect x="98" y="125" width="10" height="25" fill="#F47B20" rx="1" />
            <rect x="114" y="110" width="10" height="40" fill="#111111" rx="1" />
            <rect x="130" y="120" width="10" height="30" fill="#F47B20" rx="1" />
            <rect x="146" y="105" width="10" height="45" fill="#111111" rx="1" />
            <rect x="162" y="130" width="10" height="20" fill="#FFF3E8" />

            {/* Machine Status Card */}
            <rect x="218" y="85" width="74" height="72" rx="6" fill="#FFF3E8" stroke="#FCD6B8" strokeWidth="1" />
            <circle cx="236" cy="105" r="10" fill="#F47B20" />
            <text x="252" y="103" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="700" fill="#111111">CAT 320</text>
            <text x="252" y="111" fontFamily="Poppins, sans-serif" fontSize="6" fill="#5F5F5F">Excavator</text>
            <rect x="226" y="125" width="58" height="22" rx="4" fill="#FFFFFF" />
            <text x="232" y="139" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="600" fill="#2ECC71">• In Operation</text>
          </svg>
        </div>
      );

    case 'salespilot':
      return (
        <div style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}>
            {/* Outer Container */}
            <rect x="20" y="15" width="280" height="160" rx="10" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
            
            {/* Header Bar */}
            <rect x="20" y="15" width="280" height="28" fill="#FFF3E8" rx="8" />
            <text x="35" y="32" fontFamily="Poppins, sans-serif" fontSize="9" fontWeight="700" fill="#111111">SalesPilot AI</text>
            <rect x="100" y="22" width="60" height="14" rx="7" fill="#F47B20" />
            <text x="110" y="32" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="600" fill="#FFFFFF">n8n + Gemini</text>

            {/* Workflow Node Connections */}
            {/* Node 1: Lead Discovery */}
            <rect x="35" y="55" width="70" height="42" rx="6" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
            <rect x="42" y="62" width="20" height="8" rx="4" fill="#FFF3E8" />
            <text x="42" y="85" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="700" fill="#111111">SerpAPI Leads</text>

            {/* Line Arrow 1 */}
            <path d="M105 76 L130 76" stroke="#F47B20" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="118" cy="76" r="3" fill="#F47B20" />

            {/* Node 2: AI Gemini Analyzer */}
            <rect x="130" y="55" width="75" height="42" rx="6" fill="#FFF3E8" stroke="#F47B20" strokeWidth="1.5" />
            <text x="138" y="70" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="700" fill="#F47B20">✦ Gemini 1.5</text>
            <text x="138" y="85" fontFamily="Poppins, sans-serif" fontSize="6" fill="#5F5F5F">Research &amp; Proposal</text>

            {/* Line Arrow 2 */}
            <path d="M205 76 L230 76" stroke="#F47B20" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="218" cy="76" r="3" fill="#F47B20" />

            {/* Node 3: CRM Outreach */}
            <rect x="230" y="55" width="60" height="42" rx="6" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
            <text x="236" y="72" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="700" fill="#111111">HubSpot</text>
            <text x="236" y="85" fontFamily="Poppins, sans-serif" fontSize="6" fill="#2ECC71">Auto-Sent</text>

            {/* Lower Summary Pipeline Panel */}
            <rect x="35" y="110" width="255" height="50" rx="6" fill="#F8F6F2" stroke="#EAE7E3" strokeWidth="1" />
            <text x="45" y="125" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="600" fill="#5F5F5F">Automated Pipeline Progress</text>
            
            {/* Progress Track */}
            <rect x="45" y="132" width="235" height="8" rx="4" fill="#FFFFFF" stroke="#EAE7E3" strokeWidth="1" />
            <rect x="45" y="132" width="180" height="8" rx="4" fill="#F47B20" />
            <text x="45" y="152" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="600" fill="#111111">142 Leads Analyzed Today • 94% Accuracy</text>
          </svg>
        </div>
      );

    case 'echotune':
      return (
        <div style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}>
            <rect x="20" y="15" width="280" height="160" rx="10" fill="#111111" stroke="#333333" strokeWidth="2" />
            
            {/* Left Sidebar */}
            <rect x="20" y="15" width="70" height="160" fill="#1A1A1A" rx="8" />
            <circle cx="40" cy="35" r="8" fill="#F47B20" />
            <text x="53" y="38" fontFamily="Poppins, sans-serif" fontSize="8" fontWeight="700" fill="#FFFFFF">Echo</text>
            <rect x="30" y="55" width="50" height="5" rx="2.5" fill="#FFFFFF" />
            <rect x="30" y="68" width="40" height="5" rx="2.5" fill="#5F5F5F" />
            <rect x="30" y="81" width="45" height="5" rx="2.5" fill="#5F5F5F" />

            {/* Main Player Area */}
            <rect x="100" y="25" width="190" height="80" rx="8" fill="#242424" />
            {/* Album Cover */}
            <rect x="110" y="35" width="60" height="60" rx="6" fill="#F47B20" />
            <circle cx="140" cy="65" r="16" fill="#FFFFFF" opacity="0.2" />
            <circle cx="140" cy="65" r="8" fill="#FFFFFF" />

            {/* Song Info */}
            <text x="180" y="52" fontFamily="Poppins, sans-serif" fontSize="9" fontWeight="700" fill="#FFFFFF">Midnight Resonance</text>
            <text x="180" y="64" fontFamily="Poppins, sans-serif" fontSize="7" fill="#8E8E8E">Full-Stack Synthwave • MongoDB</text>

            {/* Waveform bars */}
            <rect x="180" y="75" width="3" height="12" fill="#F47B20" rx="1.5" />
            <rect x="185" y="72" width="3" height="18" fill="#F47B20" rx="1.5" />
            <rect x="190" y="78" width="3" height="8" fill="#F47B20" rx="1.5" />
            <rect x="195" y="70" width="3" height="22" fill="#F47B20" rx="1.5" />
            <rect x="200" y="74" width="3" height="14" fill="#F47B20" rx="1.5" />
            <rect x="205" y="80" width="3" height="6" fill="#FFFFFF" rx="1.5" />
            <rect x="210" y="76" width="3" height="10" fill="#FFFFFF" rx="1.5" />

            {/* Bottom Audio Scrubber */}
            <rect x="100" y="115" width="190" height="48" rx="8" fill="#1A1A1A" />
            <circle cx="195" cy="138" r="12" fill="#F47B20" />
            <path d="M192 133 L200 138 L192 143 Z" fill="#FFFFFF" />
            <line x1="115" y1="152" x2="275" y2="152" stroke="#333333" strokeWidth="3" strokeLinecap="round" />
            <line x1="115" y1="152" x2="200" y2="152" stroke="#F47B20" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'linkedin-agent':
      return (
        <div style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}>
            <rect x="20" y="15" width="280" height="160" rx="10" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
            
            {/* Top Bar */}
            <rect x="20" y="15" width="280" height="30" fill="#FFF3E8" rx="8" />
            <rect x="32" y="23" width="14" height="14" rx="3" fill="#0077B5" />
            <text x="36" y="34" fontFamily="Poppins, sans-serif" fontSize="9" fontWeight="700" fill="#FFFFFF">in</text>
            <text x="52" y="34" fontFamily="Poppins, sans-serif" fontSize="8" fontWeight="700" fill="#111111">LinkedIn Agent Workflow</text>

            {/* Left Box: RSS Input Feed */}
            <rect x="32" y="55" width="80" height="105" rx="6" fill="#F8F6F2" stroke="#EAE7E3" strokeWidth="1" />
            <text x="40" y="68" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="700" fill="#F47B20">RSS Tech News</text>
            <rect x="40" y="75" width="64" height="18" rx="3" fill="#FFFFFF" stroke="#EAE7E3" strokeWidth="1" />
            <rect x="44" y="81" width="40" height="4" rx="2" fill="#111111" />
            <rect x="40" y="98" width="64" height="18" rx="3" fill="#FFFFFF" stroke="#EAE7E3" strokeWidth="1" />
            <rect x="44" y="104" width="48" height="4" rx="2" fill="#111111" />

            {/* Center Box: AI Content Synthesizer */}
            <rect x="122" y="55" width="76" height="105" rx="6" fill="#FFF3E8" stroke="#F47B20" strokeWidth="1.5" />
            <text x="130" y="68" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="700" fill="#111111">✦ n8n + LLM</text>
            <rect x="130" y="75" width="60" height="40" rx="4" fill="#FFFFFF" />
            <rect x="135" y="82" width="50" height="3" rx="1.5" fill="#5F5F5F" />
            <rect x="135" y="89" width="42" height="3" rx="1.5" fill="#5F5F5F" />
            <rect x="135" y="96" width="46" height="3" rx="1.5" fill="#F47B20" />
            <rect x="130" y="122" width="60" height="16" rx="8" fill="#F47B20" />
            <text x="138" y="133" fontFamily="Poppins, sans-serif" fontSize="6" fontWeight="700" fill="#FFFFFF">Auto Schedule</text>

            {/* Right Box: Scheduled Output */}
            <rect x="208" y="55" width="80" height="105" rx="6" fill="#F8F6F2" stroke="#EAE7E3" strokeWidth="1" />
            <text x="216" y="68" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="700" fill="#2ECC71">✓ Queue Ready</text>
            <rect x="216" y="75" width="64" height="75" rx="4" fill="#FFFFFF" stroke="#EAE7E3" strokeWidth="1" />
            <circle cx="228" cy="87" r="5" fill="#0077B5" />
            <rect x="238" y="85" width="36" height="4" rx="2" fill="#111111" />
          </svg>
        </div>
      );

    case 'business-solutions':
      return (
        <div style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}>
            <rect x="20" y="15" width="280" height="160" rx="10" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
            {/* Header */}
            <rect x="20" y="15" width="280" height="25" fill="#FFF3E8" rx="8" />
            <rect x="35" y="24" width="30" height="6" rx="3" fill="#111111" />
            <rect x="210" y="24" width="20" height="6" rx="3" fill="#5F5F5F" />
            <rect x="235" y="24" width="20" height="6" rx="3" fill="#5F5F5F" />
            <rect x="260" y="21" width="30" height="12" rx="6" fill="#F47B20" />

            {/* Hero Banner */}
            <rect x="35" y="48" width="250" height="65" rx="6" fill="#F8F6F2" stroke="#EAE7E3" strokeWidth="1" />
            <rect x="48" y="58" width="120" height="8" rx="4" fill="#111111" />
            <rect x="48" y="70" width="90" height="5" rx="2.5" fill="#F47B20" />
            <rect x="48" y="82" width="55" height="16" rx="8" fill="#111111" />

            {/* Hero Graphic Right */}
            <rect x="190" y="55" width="80" height="50" rx="4" fill="#FFFFFF" stroke="#EAE7E3" strokeWidth="1" />
            <circle cx="210" cy="75" r="10" fill="#FFF3E8" />
            <rect x="225" y="70" width="35" height="4" rx="2" fill="#F47B20" />
            <rect x="225" y="78" width="25" height="4" rx="2" fill="#5F5F5F" />

            {/* Feature Cards Grid */}
            <rect x="35" y="120" width="75" height="45" rx="6" fill="#FFFFFF" stroke="#EAE7E3" strokeWidth="1" />
            <rect x="43" y="128" width="12" height="12" rx="3" fill="#F47B20" />
            
            <rect x="122" y="120" width="75" height="45" rx="6" fill="#FFFFFF" stroke="#EAE7E3" strokeWidth="1" />
            <rect x="130" y="128" width="12" height="12" rx="3" fill="#111111" />

            <rect x="210" y="120" width="75" height="45" rx="6" fill="#FFFFFF" stroke="#EAE7E3" strokeWidth="1" />
            <rect x="218" y="128" width="12" height="12" rx="3" fill="#F47B20" />
          </svg>
        </div>
      );

    default: // workflow-hub
      return (
        <div style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 320 190" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}>
            <rect x="20" y="15" width="280" height="160" rx="10" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
            <rect x="20" y="15" width="280" height="26" fill="#FFF3E8" rx="8" />
            <text x="35" y="32" fontFamily="Poppins, sans-serif" fontSize="8" fontWeight="700" fill="#111111">API Webhook &amp; Middleware Router</text>
            
            <rect x="35" y="55" width="80" height="45" rx="6" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
            <text x="43" y="70" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="700" fill="#111111">POST /webhook</text>
            <text x="43" y="82" fontFamily="Poppins, sans-serif" fontSize="6" fill="#F47B20">Client Payload</text>

            <path d="M115 77 H150" stroke="#F47B20" strokeWidth="2" strokeDasharray="3 3" />

            <rect x="150" y="55" width="135" height="45" rx="6" fill="#FFF3E8" stroke="#F47B20" strokeWidth="1.5" />
            <text x="158" y="70" fontFamily="Poppins, sans-serif" fontSize="7" fontWeight="700" fill="#111111">Node.js Express Router</text>
            <text x="158" y="82" fontFamily="Poppins, sans-serif" fontSize="6" fill="#5F5F5F">Auth • Validation • Forwarding</text>

            {/* Code preview lower box */}
            <rect x="35" y="110" width="250" height="50" rx="6" fill="#111111" />
            <text x="45" y="125" fontFamily="Poppins, sans-serif" fontSize="6" fill="#2ECC71">200 OK — {`{"status": "success", "processed": true}`}</text>
            <text x="45" y="140" fontFamily="Poppins, sans-serif" fontSize="6" fill="#8E8E8E">&gt; Payload validated &amp; synchronized with n8n pipeline</text>
          </svg>
        </div>
      );
  }
};
