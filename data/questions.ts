// data/questions.ts
export type Question = {
    id: number;
    question: string;
    options: string[];
    correctOption: string;
    explanation?: string;
};

// You can add more chapters as needed. Each chapter is an array of 10 questions.
export const CHAPTERS: { [chapter: string]: Question[] } = {
    "Chapter 1: Certified Productivity Specialist (CPS) Course": [
        {
            id: 1,
            question: "Which document defines the CPS scheme requirements referenced in this course?",
            options: [
                "ISO 9001:2015",
                "APO-PS 101: 2019 Issue 1, 2019",
                "APO-AB 101/2019 Issue 2",
                "TR 43: 2016"
            ],
            correctOption: "B"
        },
        {
            id: 2,
            question: "Which four core roles are identified for a Productivity Specialist?",
            options: [
                "Strategy, Auditing, Mentoring, Coaching",
                "Training, Promotion, Research, Consultancy",
                "Finance, HR, IT, Operations",
                "Design, Build, Test, Deploy"
            ],
            correctOption: "B"
        },
        {
            id: 3,
            question: "A “productivity solution” enfolds which of the following?",
            options: [
                "Only financial metrics and ROI",
                "Concepts, principles, benefits, challenges, applications, metrics, resources/timeline, launching/implementation, deliverables/outcomes, sustaining",
                "Marketing and sales enablement exclusively",
                "Legal and regulatory compliance only"
            ],
            correctOption: "B"
        },
        {
            id: 4,
            question: "Minimum CPD required for recertification in the preceding 3 years is:",
            options: [
                "30 hours",
                "60 hours",
                "90 hours",
                "120 hours"
            ],
            correctOption: "C"
        },
        {
            id: 5,
            question: "At the CPS level, the minimum recent work hours across consultancy/training/promotion/research in the last 12 months is:",
            options: [
                "100 hours",
                "200 hours",
                "500 hours",
                "1,000 hours"
            ],
            correctOption: "B"
        },
        {
            id: 6,
            question: "Which statement about the APO-CPS certification logo usage is correct?",
            options: [
                "It can be placed beside the organization’s logo.",
                "It is for the Certified Person and placed beside their name.",
                "It may be used only on internal memos.",
                "It is prohibited on online materials."
            ],
            correctOption: "B"
        },
        {
            id: 7,
            question: "Which disciplinary action applies to “Major” infringements (e.g., fraudulent practices)?",
            options: [
                "Written warning only",
                "Suspension up to 12 months",
                "Immediate withdrawal and delisting; bar from reapplying up to 36 months",
                "Counseling interview with reduction to warning"
            ],
            correctOption: "C"
        },
        {
            id: 8,
            question: "Which pathway is acceptable to satisfy the CPS ‘Productivity training’ requirement?",
            options: [
                "Aggregation of short programs covering at least 8 productivity solutions (Table 4)",
                "Attendance at one marketing seminar",
                "Self-study with no assessment",
                "On-the-job experience only"
            ],
            correctOption: "A"
        },
        {
            id: 9,
            question: "During the panel interview, which areas are verified?",
            options: [
                "Only academic qualifications",
                "Technical contents of qualifications/training/work experience/testimonials; domain expertise; process skills; people skills",
                "Accounting and tax compliance",
                "Social media presence and branding"
            ],
            correctOption: "B"
        },
        {
            id: 10,
            question: "Which sequence best reflects the consulting process described?",
            options: [
                "Close → Execute → Offer",
                "Plan → Execute → Sustain",
                "Design → Market → Sell",
                "Hire → Train → Fire"
            ],
            correctOption: "B"
        }
    ],
    "Chapter 2: Driving Productivity of the Nation": [
        {
            id: 11,
            question: "Which statement best captures the headline about Malaysia’s productivity trend? (S4)",
            options: [
                "Malaysia’s productivity has surpassed Singapore’s.",
                "Malaysia’s productivity is growing, but not fast enough.",
                "Malaysia’s productivity has been flat since 2000.",
                "Malaysia’s productivity is shrinking."
            ],
            correctOption: "B"
        },
        {
            id: 12,
            question: "Which ministry is highlighted in the governance slide addressing productivity challenges? (S9)",
            options: [
                "MOF — Ministry of Finance",
                "MOH — Ministry of Health",
                "MITI — Ministry of Investment, Trade and Industry",
                "MOSTI — Ministry of Science, Technology and Innovation"
            ],
            correctOption: "C"
        },
        {
            id: 13,
            question: "Which national bodies are cited, including their chairs? (S9)",
            options: [
                "NPC (Minister of Education), NOPC (Deputy Prime Minister)",
                "NPC (Chaired by Prime Minister), NOPC (Chaired by MITI Minister)",
                "NREB (Premier), NEAC (Chief Secretary)",
                "MPC (CEO), PEMUDAH (Private chair only)"
            ],
            correctOption: "B"
        },
        {
            id: 14,
            question: "Which are listed as Talent-related challenges? (S7)",
            options: [
                "High unemployment of PhDs only",
                "Skills mismatch; Shortage of workers; Dependency on low-skilled foreign workers",
                "Only shortage of engineers",
                "Brain drain exclusively"
            ],
            correctOption: "B"
        },
        {
            id: 15,
            question: "Which of the following is a Strategic Thrust in the Malaysia Productivity Blueprint (MPB)? (S8)",
            options: [
                "Liberalising Trade Tariffs",
                "Building Workforce of the Future",
                "Subsidy Rationalization",
                "Rural Electrification"
            ],
            correctOption: "B"
        },
        {
            id: 16,
            question: "Which initiative appears under the Technology strategy? (S16)",
            options: [
                "Academy in Industry (AiI)",
                "Unified Public Consultation (UPC)",
                "Productivity Digital Assessment (Readiness Assessment, P1010)",
                "MyMudah Units"
            ],
            correctOption: "C"
        },
        {
            id: 17,
            question: "In the “PlugFest” case, which impact is reported? (S17)",
            options: [
                "5% cost reduction; 10% yield improvement",
                "20% operational cost reduction; 60% production yield efficiency",
                "50% reduction in power usage",
                "100% elimination of downtime"
            ],
            correctOption: "B"
        },
        {
            id: 18,
            question: "Which tools are named on the Regulation slide for reducing burdens and improving transparency? (S18)",
            options: [
                "PLWS and P1010",
                "MyMudah and MyGP",
                "RURB and 3M",
                "MPKK and UPC only"
            ],
            correctOption: "B"
        },
        {
            id: 19,
            question: "Which sector is included among the 11 priority subsectors? (S11)",
            options: [
                "Oil & Gas Upstream only",
                "Higher Education",
                "Electrical and Electronics",
                "Aviation Security"
            ],
            correctOption: "C"
        },
        {
            id: 20,
            question: "Which slide explicitly frames growth as a “multiplier effect for economic growth”? (S5)",
            options: [
                "Malaysia’s Productivity is Growing slide",
                "MPC’s Major Milestones",
                "GDP Growth Through Productivity Framework",
                "Productive Enterprise Program"
            ],
            correctOption: "C"
        }
    ],
    "Chapter 3: Malaysia Business Excellence Framework (MBEF)": [
        {
            id: 21,
            question: "How many Criteria are in MBEF? (S5)",
            options: ["5", "7", "9", "11"],
            correctOption: "B"
        },
        {
            id: 22,
            question: "Which Leadership sub-criterion covers succession planning? (S9–S11)",
            options: ["1.1.3", "1.1.4", "1.2.2", "1.2.4"],
            correctOption: "B"
        },
        {
            id: 23,
            question: "Which item belongs under ‘Governance and Community Support’? (S11)",
            options: [
                "Create an environment for business success.",
                "Review personal leadership effectiveness.",
                "Ensure accountability and independence in audits.",
                "Develop strategic plan and objectives."
            ],
            correctOption: "C"
        },
        {
            id: 24,
            question: "Under Strategy Development, organizations should first… (S13)",
            options: [
                "Allocate resources.",
                "Identify strategic challenges using a robust strategic planning process.",
                "Set performance appraisals.",
                "Launch complaint management."
            ],
            correctOption: "B"
        },
        {
            id: 25,
            question: "Which is included in Information Management? (S16)",
            options: [
                "Recognition & reward system.",
                "Secure and user-friendly IT systems.",
                "Data accuracy, validity, reliability and currency.",
                "Supply-network agility."
            ],
            correctOption: "C"
        },
        {
            id: 26,
            question: "Which Customer item focuses on capturing information from potential customers? (S18)",
            options: ["4.1.3", "4.2.3", "4.2.5", "4.1.1"],
            correctOption: "A"
        },
        {
            id: 27,
            question: "Which Workforce sub-criterion addresses career progression? (S21)",
            options: ["5.1.4", "5.2.4", "5.1.2", "5.2.6"],
            correctOption: "A"
        },
        {
            id: 28,
            question: "What is the total point allocation for Results? (S27–S31/S32)",
            options: ["150", "120", "350", "90"],
            correctOption: "C"
        },
        {
            id: 29,
            question: "Which Process sub-criterion requires a safe operating environment and emergency preparedness? (S25)",
            options: ["6.1.1", "6.1.6", "6.1.7", "6.2.2"],
            correctOption: "C"
        },
        {
            id: 30,
            question: "A score of 720 falls into which interpretation band? (S34)",
            options: ["Practitioner", "System Implementer", "Best in Class", "Excellent"],
            correctOption: "C"
        }
    ],
    "Chapter 4: QE5S 5.0": [
        {
            id: 31,
            question: "Which statement best describes 5S? (S6)",
            options: [
                "A one-off clean-up event",
                "A process to organize workplace, keep it clean, and maintain effective and standard condition",
                "A financial reporting method",
                "A sales promotion tactic"
            ],
            correctOption: "B"
        },
        {
            id: 32,
            question: "Which list matches the Japanese terms as printed? (S6)",
            options: [
                "Seiri, Seiton, Seiso, Seigetsu, Shitsuke",
                "Se-i-ri, Se-i-to-n, Se-i-so, Se-i-ke-tsu, Shi-tsu-ke",
                "Seiri, Seiton, Seison, Seiketsu, Shitsuke",
                "Seiri, Seiton, Seiso, Seikatsu, Shitsuke"
            ],
            correctOption: "B"
        },
        {
            id: 33,
            question: "Which belongs to the ‘System Configuration of 5S’? (S8)",
            options: [
                "Blockchain Mining",
                "House of Quality; Lean Management; KAIZEN Programmes",
                "IPO Readiness",
                "Six Sigma Black Belt only"
            ],
            correctOption: "B"
        },
        {
            id: 34,
            question: "Which definition matches ‘Sort (SEIRI)’? (S9)",
            options: [
                "Create tasks and procedures so the first three S are performed the same way every day",
                "Put everything in a place easy to get to; clearly marked",
                "Remove all items not needed for current activities at workplace",
                "Make a habit of maintaining established procedures"
            ],
            correctOption: "C"
        },
        {
            id: 35,
            question: "Which phrase appears under ‘Set In Order (SEITON)’? (S9–S10)",
            options: [
                "Keep only needed items",
                "Remove dirt and keep the workplace clean on DAILY basis",
                "Put everything in a place that is easy to get to; all items clearly marked",
                "Create a best practice database"
            ],
            correctOption: "C"
        },
        {
            id: 36,
            question: "Which action characterizes ‘Shiny Clean (SEISO)’? (S9–S10)",
            options: [
                "Succession planning",
                "Emergency preparedness",
                "Keeping the workplace clean on DAILY basis",
                "Supplier selection"
            ],
            correctOption: "C"
        },
        {
            id: 37,
            question: "Which step appears in the ‘Step-by-Step of 5S Implementation’? (S14)",
            options: [
                "Pilot Program",
                "Patent Filing",
                "Tax Optimization",
                "Brand Repositioning"
            ],
            correctOption: "A"
        },
        {
            id: 38,
            question: "A ‘Keys to 5S Success’ item is to… (S17)",
            options: [
                "Avoid top management involvement",
                "Plan using the P-D-C-A cycle and train everyone adequately",
                "Eliminate performance measurement",
                "Reduce communication about 5S"
            ],
            correctOption: "B"
        },
        {
            id: 39,
            question: "Which pair is listed as ORGANIZATION benefits? (S18)",
            options: [
                "Clean & comfortable workplace; increase job satisfaction",
                "Stability in process; Zero defects",
                "Staff canteen upgrade; free parking",
                "Tax holidays; subsidies"
            ],
            correctOption: "B"
        },
        {
            id: 40,
            question: "Which mechanism supports sustaining 5S? (S20)",
            options: [
                "Annual dinner raffle",
                "Monthly Audit Scheduler and 5S Score Card",
                "Once-off audit after launch",
                "Outsourcing all audits to customers"
            ],
            correctOption: "B"
        }
    ],
    "Chapter 5: KAIZEN": [
        {
            id: 41,
            question: "What does the word “Kaizen” mean? (S3)",
            options: [
                "Optimize profits only",
                "Change (KAI) to become better (ZEN)",
                "Industrial automation",
                "Customer satisfaction"
            ],
            correctOption: "B"
        },
        {
            id: 42,
            question: "Which item is listed as the 1st stage in the Kaizen Journey? (S4)",
            options: [
                "Improve the flow oriented",
                "Improvement of daily management",
                "5S and visualization",
                "Standardization and establishment"
            ],
            correctOption: "C"
        },
        {
            id: 43,
            question: "Which phrase appears under the Principles of Kaizen? (S7)",
            options: [
                "Fix problems later",
                "Speak with data",
                "Prioritize output over process",
                "Customers are not part of the process"
            ],
            correctOption: "B"
        },
        {
            id: 44,
            question: "Which belongs to the FOUNDATION OF KAIZEN (Operation Stage)? (S6)",
            options: [
                "Market segmentation",
                "JIDOKA",
                "Patent filing",
                "Branding strategy"
            ],
            correctOption: "B"
        },
        {
            id: 45,
            question: "Which KPI is linked to “Number of accident, Heinrich’s law”? (S10)",
            options: [
                "M (Morale)",
                "D (Delivery)",
                "S (Safety)",
                "E (Energy)"
            ],
            correctOption: "C"
        },
        {
            id: 46,
            question: "Which set is shown under REQUIREMENT / PRACTICAL context? (S6, S10)",
            options: [
                "ISO 9001; ISO 50001; ISO 27000 / Productivity; Quality; Cost; Delivery; Safety; Morale; Energy",
                "ISO 31000; ISO 22301 / Branding; Creativity",
                "EFQM; MBNQA / Sales pipeline",
                "COBIT; ITIL / Social media reach"
            ],
            correctOption: "A"
        },
        {
            id: 47,
            question: "Which sequence appears in the KAIZEN METHOD? (S12)",
            options: [
                "Pilot after final rollout",
                "Identify Waste → Collect Data → Identify Desired Result → Find a Solution",
                "Design → Sell → Install → Audit",
                "Random trials → Publish"
            ],
            correctOption: "B"
        },
        {
            id: 48,
            question: "Which impact figure is stated? (S16)",
            options: [
                "Increase in Production Output 37%",
                "WIP reduction 5%",
                "OEE > 5%",
                "Manpower increase 20–50%"
            ],
            correctOption: "A"
        },
        {
            id: 49,
            question: "Which is listed as an “Issues and Challenges” item? (S17)",
            options: [
                "Overemphasis on tying kaizen to KPIs",
                "Abundant budget for kaizen",
                "Guaranteed executive sponsorship",
                "Fully automated training"
            ],
            correctOption: "A"
        },
        {
            id: 50,
            question: "Which conclusion statement appears in the slides? (S18)",
            options: [
                "Kaizen replaces human judgment entirely",
                "Kaizen boosts productivity",
                "Kaizen reduces teamwork",
                "Kaizen eliminates customer focus"
            ],
            correctOption: "B"
        }
    ],
    "Chapter 6: Lean Management": [
        {
            id: 51,
            question: "Lean is based on which two philosophies? (S5)",
            options: [
                "Market share & branding",
                "Continuous Improvement (KAIZEN) & Respect for People (HANSEI)",
                "Outsourcing & automation",
                "Total cost leadership & pricing"
            ],
            correctOption: "B"
        },
        {
            id: 52,
            question: "Which set belongs with Continuous Improvement on the slides? (S5)",
            options: [
                "MBO, KPI, OKR",
                "MUDA, MURA, MURI",
                "CAPEX, OPEX",
                "JIT, Jidoka"
            ],
            correctOption: "B"
        },
        {
            id: 53,
            question: "Which statement defines “Waste” in Lean? (S7)",
            options: [
                "Any activity customers enjoy",
                "Any activity that adds costs or time but does not add value",
                "Anything that requires planning",
                "Any investment in training"
            ],
            correctOption: "B"
        },
        {
            id: 54,
            question: "“Pure Waste” means… (S7)",
            options: [
                "Required by regulation",
                "Actions that could be stopped without affecting the customer",
                "Necessary for billing",
                "A type of Value-Adding activity"
            ],
            correctOption: "B"
        },
        {
            id: 55,
            question: "A Value-Adding activity must… (S8)",
            options: [
                "Reduce headcount",
                "Transform the product/service (change Form, Fit and Function) and be done correctly the first time",
                "Use the latest software",
                "Be performed by management"
            ],
            correctOption: "B"
        },
        {
            id: 56,
            question: "Which is Type 1 Non-Value-Added? (S9)",
            options: [
                "Pure (Unnecessary) Waste",
                "Value Enabler (Business necessary) — cannot eliminate now",
                "Value-Adding task",
                "Customer-delighting feature"
            ],
            correctOption: "B"
        },
        {
            id: 57,
            question: "Which item appears under Lean Manufacturing Tools? (S11)",
            options: [
                "ERP blueprint",
                "Poka-yoke",
                "Outsourcing matrix",
                "Social media plan"
            ],
            correctOption: "B"
        },
        {
            id: 58,
            question: "Which step sits in “Project Implementation – Systems Development”? (S12)",
            options: [
                "LEAN Hands-on Workshop (LEAN HoW)",
                "Value Stream Mapping",
                "Organisation LEAN Recognition",
                "Productivity Champion"
            ],
            correctOption: "B"
        },
        {
            id: 59,
            question: "Which is listed as a reduction from Lean projects? (S13)",
            options: [
                "Profit",
                "Customer satisfaction",
                "Lead time",
                "Process Capacity & Capability"
            ],
            correctOption: "C"
        },
        {
            id: 60,
            question: "Which challenge is highlighted for Lean? (S14)",
            options: [
                "Excess funding",
                "Engagement of staff in workplace productivity program",
                "Guaranteed leadership buy-in",
                "All benefits are immediate"
            ],
            correctOption: "B"
        }
    ],
    "Chapter 7: Quiz Behaviour Insight": [
        {
            id: 61,
            question: "Which statement captures the course aim?",
            options: [
                "To teach taxation policy only",
                "To introduce the concept and applications of Behavioural Insights (BI) in public policy-making",
                "To build a macroeconomics model",
                "To replace regulations entirely"
            ],
            correctOption: "B"
        },
        {
            id: 62,
            question: "Which item appears in the course objectives?",
            options: [
                "Write a PhD thesis on welfare economics",
                "Understand the BI guidance principal frameworks",
                "Learn advanced monetary policy tools",
                "Draft a new constitution"
            ],
            correctOption: "B"
        },
        {
            id: 63,
            question: "Which are the three policy tools listed?",
            options: [
                "Pricing, Promotion, Place",
                "Taxes, Tariffs, Trade",
                "Regulations, Incentives, Information",
                "Research, Development, Deployment"
            ],
            correctOption: "C"
        },
        {
            id: 64,
            question: "What is the traditional key assumption noted on the slides?",
            options: [
                "Human decisions are always emotional",
                "Human makes decision through thinking in details to maximise their benefits (rational)",
                "People never consider costs",
                "People cannot be influenced by presentation"
            ],
            correctOption: "B"
        },
        {
            id: 65,
            question: "Which pairing reflects the ‘Two ways of human thinking’?",
            options: [
                "Logical vs unethical",
                "Controlled/slow/rational vs Uncontrolled/fast/intuitive/‘unconcious’",
                "Private vs public",
                "Centralized vs decentralized"
            ],
            correctOption: "B"
        },
        {
            id: 66,
            question: "Which example is used to discuss defaults/social norms?",
            options: [
                "Coffee prices only",
                "Organ donors — CANADA 3% vs AUSTRIA 99%",
                "Stock trading fees",
                "Exchange rate quotes"
            ],
            correctOption: "B"
        },
        {
            id: 67,
            question: "Which classroom prompt appears exactly as written?",
            options: [
                "Which size of tea would you buy?",
                "Which size of coffee would you buy? Please share you reasoning.",
                "Why are taxes high in Austria?",
                "Which subsidy works best?"
            ],
            correctOption: "B"
        },
        {
            id: 68,
            question: "Which milestone is correctly matched with the contributor?",
            options: [
                "2010 — Behavioural Insights Team (UK) coined “BEHAVIOURAL INSIGHTS”",
                "1976 — Wundt built first psychology lab",
                "1890 — Thaler introduced mental accounting",
                "2015 — Sunstein proposes JIT"
            ],
            correctOption: "A"
        },
        {
            id: 69,
            question: "Which phrase appears under ‘What is BI?’",
            options: [
                "BI replaces traditional policy tools",
                "BI approach uses evidence about human behaviour to practical problems",
                "BI eliminates the need for data",
                "BI is purely theoretical"
            ],
            correctOption: "B"
        },
        {
            id: 70,
            question: "Which reason is listed for why BI is important?",
            options: [
                "Harder to implement",
                "More expensive than regulation",
                "Cheaper; Easier to implement",
                "Only works in the private sector"
            ],
            correctOption: "C"
        }
    ],
    "Chapter 8: RIA": [
        {
            id: 71,
            question: "Which statement is part of the “OBJECTIVES OF RIA”? (S2)",
            options: [
                "Reduce the number of ministries",
                "Support transparency in decision making by engaging stakeholders",
                "Privatize all regulators",
                "Remove all compliance costs"
            ],
            correctOption: "B"
        },
        {
            id: 72,
            question: "Within the OECD context, RIA is described as… (S3)",
            options: [
                "A campaign strategy",
                "A systematic policy tool to examine and measure likely benefits, costs and effects of regulation",
                "A tax policy only",
                "A procurement method"
            ],
            correctOption: "B"
        },
        {
            id: 73,
            question: "Which area is outside the Scope of RIA? (S5)",
            options: [
                "Business",
                "Investment",
                "Trade",
                "National security and sovereignty"
            ],
            correctOption: "D"
        },
        {
            id: 74,
            question: "Which set lists the “7 Elements of RIA” item correctly? (S6)",
            options: [
                "Problem statement; Objective; Option; Impact Analysis; Consultation; Conclusion & Recommendation; Strategy for Implementation",
                "Budgeting; Tendering; Procurement; Finance; HR; Legal; Audit",
                "Mission; Vision; Values; Strategy; KPIs; Quality; Safety",
                "Intake; Process; Output; Outcome; Feedback; Control; Review"
            ],
            correctOption: "A"
        },
        {
            id: 75,
            question: "Which statement appears under Element 3 options? (S10)",
            options: [
                "Do Nothing (status quo) is always the first option",
                "Outsource to an NGO",
                "Use only explicit regulation",
                "Skip baseline data"
            ],
            correctOption: "A"
        },
        {
            id: 76,
            question: "Which tool is the preferred decision tool for impact analysis? (S12)",
            options: [
                "SWOT",
                "Cost-benefit analysis (CBA)",
                "Brainstorming",
                "Delphi method"
            ],
            correctOption: "B"
        },
        {
            id: 77,
            question: "Which item is listed under “What are the cost you need to know?” (S13)",
            options: [
                "Marketing overheads only",
                "Financial cost; Compliance cost; Substantive cost; Administrative burdens",
                "Brand equity",
                "Opportunity cost only"
            ],
            correctOption: "B"
        },
        {
            id: 78,
            question: "Which is a method of impact analysis on the slides? (S14)",
            options: [
                "Porter’s Five Forces",
                "Standard Cost Model (SCM)",
                "Business Model Canvas",
                "Gantt Charting"
            ],
            correctOption: "B"
        },
        {
            id: 79,
            question: "Which is a stated benefit of consultation? (S16–S17)",
            options: [
                "Reduces transparency",
                "Encourages public ownership and commitment to the policy",
                "Eliminates the need for expertise",
                "Shortens all timelines to 1 day"
            ],
            correctOption: "B"
        },
        {
            id: 80,
            question: "Which component belongs in the “Strategy for Implementation”? (S20)",
            options: [
                "Executive bonuses",
                "Communication Plan, Enforcement Plan, Monitoring and Evaluation",
                "Press conference only",
                "Outsourcing of legislation"
            ],
            correctOption: "B"
        }
    ],
    "Chapter 9: Benchmarking": [
        {
            id: 81,
            question: "Which statement reflects the MPC definition of benchmarking? (S3)",
            options: [
                "A one-off comparison with a competitor",
                "A systematic and continuous process of searching, learning, adapting and implementing best practices to attain superior performance",
                "A branding exercise for market leaders",
                "A legal audit of processes"
            ],
            correctOption: "B"
        },
        {
            id: 82,
            question: "Which quote is from Quality Digest (July, 1992)? (S3)",
            options: [
                "Benchmarking is the origin of Toyota.",
                "Being humble enough to admit that someone else is better… and wise enough to learn how to match and surpass them.",
                "Best-in-class means perfect quality.",
                "Benchmarking eliminates the need for innovation."
            ],
            correctOption: "B"
        },
        {
            id: 83,
            question: "Which is one of the Benchmarking Main Goals? (S5)",
            options: [
                "Increase advertising spend",
                "Identify key performance measures for each function of a business operation",
                "Standardize salaries across firms",
                "Reduce product variety"
            ],
            correctOption: "B"
        },
        {
            id: 84,
            question: "Which advantage appears on the slides? (S6)",
            options: [
                "Increase taxes",
                "Thinking “Outside the Box”",
                "Eliminate customer feedback",
                "Centralize all decision making"
            ],
            correctOption: "B"
        },
        {
            id: 85,
            question: "Match the type: ‘A comparison of a specific process with that of a direct competitor.’ (S7)",
            options: [
                "Internal Benchmarking",
                "Competitive Benchmarking",
                "Functional Benchmarking",
                "Generic Benchmarking"
            ],
            correctOption: "B"
        },
        {
            id: 86,
            question: "Which description matches ‘Generic Benchmarking’? (S7)",
            options: [
                "Comparing unrelated industries to identify innovation",
                "Comparing pay scales within your HR department",
                "Comparing with non-profit organizations only",
                "Comparing salespeople’s commissions only"
            ],
            correctOption: "A"
        },
        {
            id: 87,
            question: "Which definition of “Benchmark” is correct? (S8)",
            options: [
                "Any KPI used in finance",
                "A measure of “best-in-class” achievement recognized as the standard of excellence for a particular process",
                "A quarterly sales target",
                "A minimum regulatory requirement"
            ],
            correctOption: "B"
        },
        {
            id: 88,
            question: "Which item is a Critical Success Factor? (S10)",
            options: [
                "Avoid external partners",
                "Agree to a code of conduct",
                "Keep processes undocumented",
                "Ignore verification of results"
            ],
            correctOption: "B"
        },
        {
            id: 89,
            question: "Which is part of the Code of Conduct? (S11)",
            options: [
                "Share any data publicly without permission",
                "Use information beyond the intended purpose",
                "Respect confidentiality of information",
                "Skip preparation for events"
            ],
            correctOption: "C"
        },
        {
            id: 90,
            question: "Which challenge is listed? (S14)",
            options: [
                "Unlimited resources for benchmarking",
                "Misconception: focusing on “how much” rather than “how to”",
                "Over-commitment from top management",
                "No difficulty finding best practices"
            ],
            correctOption: "B"
        }
    ],
    "Chapter 10: Good Regulatory Practices (GRP)": [
        {
            id: 91,
            question: "Which of the following appears as a GRP module objective? (S2)",
            options: [
                "To privatise regulatory agencies",
                "To know how Good Regulatory Practices drives national productivity",
                "To increase tax revenue",
                "To centralise all permits at federal level"
            ],
            correctOption: "B"
        },
        {
            id: 92,
            question: "Which document (with date) is listed under “Important Documents on GRP”? (S5)",
            options: [
                "National Digital Economy Blueprint (2021)",
                "National Policy on the Development and Implementation of Regulations — Pekeliling Am Bil. 1 Tahun 2013 (15 July 2013)",
                "Environmental Quality Act (1974)",
                "Competition Act (2010)"
            ],
            correctOption: "B"
        },
        {
            id: 93,
            question: "Which set contains GRP tools exactly as shown in the “House of GRP”? (S6)",
            options: [
                "SWOT; PESTLE; BPR; GRI",
                "RIA; RURB; MyCURE; GUILLOTINE; Risk Assessment",
                "GDP; CPI; PMI",
                "5S; TPM; QCC"
            ],
            correctOption: "B"
        },
        {
            id: 94,
            question: "In the swimming-pool metaphor for regulatory review, which is NOT one of the four tasks? (S8)",
            options: [
                "Clean the water (regulatory stock)",
                "Filter new water (regulatory flow)",
                "Maintain the pool infrastructure (institutions)",
                "Increase pool ticket prices (budgeting)"
            ],
            correctOption: "D"
        },
        {
            id: 95,
            question: "Which trait belongs to the “new-style regulation”? (S9)",
            options: [
                "Opaque and interest-group-based",
                "Means-oriented",
                "Transparent and empirically based",
                "Replacement of markets"
            ],
            correctOption: "C"
        },
        {
            id: 96,
            question: "Which item is under the GRP “Focus” areas? (S6)",
            options: [
                "Exchange-rate policy",
                "Non-Tariff Measures (NTM)",
                "Immigration quotas",
                "Monetary policy"
            ],
            correctOption: "B"
        },
        {
            id: 97,
            question: "According to S11, which is an objective of Monitoring & Reporting on GRP? (S11)",
            options: [
                "Publish ministry annual budgets",
                "Assess progress of NPDIR and review regulators’ performance",
                "Set judicial precedents",
                "Replace consultation with surveys only"
            ],
            correctOption: "B"
        },
        {
            id: 98,
            question: "Which statement about Regulatory Reform is shown on the slides? (S10)",
            options: [
                "It replaces markets to protect incumbents",
                "All regulations must be reviewed using Regulatory Impact Analysis (RIA)",
                "It focuses solely on innovation without competition",
                "It applies only to federal rules, not states"
            ],
            correctOption: "B"
        },
        {
            id: 99,
            question: "What is the intent of expanding GRP to states and local authorities since 2016? (S12)",
            options: [
                "Reduce transparency",
                "Provide greater consistency, accountability and transparency in rule-making",
                "Centralise licensing in MPC",
                "Suspend RN/RIS requirements"
            ],
            correctOption: "B"
        },
        {
            id: 100,
            question: "Which numeric outcome is on the “Impact of NPDIR” slide? (S13)",
            options: [
                "Total compliance cost savings 2014–2018 = RM2.66B",
                "RN total 2014–2018 = 74; RIS total = 315",
                "Total compliance cost savings 2014–2018 = RM6.66B; RN total = 315; RIS total = 74",
                "> 600 trained on RIA"
            ],
            correctOption: "C"
        }
    ],
    "Chapter 11: Quality Management System (QMS)": [
        {
            id: 101,
            question: "Which is not listed under “Objective QMS”? (S2)",
            options: [
                "To provide consistent high quality of product/service to customer",
                "To aid in compliance effort to local authority/ government",
                "To do continuous improvement in the operation",
                "To reduce marketing costs by 50%"
            ],
            correctOption: "D"
        },
        {
            id: 102,
            question: "What does the ISO number indicate, according to the slides? (S5)",
            options: [
                "The year the standard was published",
                "The family it belong to",
                "The number of clauses in the standard",
                "The country code of origin"
            ],
            correctOption: "B"
        },
        {
            id: 103,
            question: "Which standard is identified as the most common type of QMS? (S8)",
            options: [
                "ISO 27001",
                "ISO 9001",
                "AS 9100",
                "ISO 13485"
            ],
            correctOption: "B"
        },
        {
            id: 104,
            question: "Which QMS applies to the automotive industry? (S9)",
            options: [
                "ISO 22000",
                "ISO 13485",
                "IATF 16949",
                "ISO 14001"
            ],
            correctOption: "C"
        },
        {
            id: 105,
            question: "Which item is not one of the 7 Quality Management Principles? (S15–S21)",
            options: [
                "Evidence-based decision making",
                "Process approach",
                "Relationship management",
                "Zero-defects guarantee"
            ],
            correctOption: "D"
        },
        {
            id: 106,
            question: "Which statement best matches the EMS aim? (S25)",
            options: [
                "Improve sales conversion rates",
                "Improve environmental performance by reducing & controlling Aspects & Impacts",
                "Centralize HR functions",
                "Optimise advertising spend"
            ],
            correctOption: "B"
        },
        {
            id: 107,
            question: "Which definition appears for EMS? (S26)",
            options: [
                "A certification for food safety audits only",
                "A framework that helps an organization achieve its environmental goals through consistent review, evaluation and improvement of its environmental performance",
                "A tool to enforce criminal penalties",
                "A tax compliance checklist"
            ],
            correctOption: "B"
        },
        {
            id: 108,
            question: "ISO 45001 applies to any organization wanting to… (S31)",
            options: [
                "Increase marketing ROI",
                "Establish, implement and maintain an OHS management system to raise performance and minimize OHS risks",
                "Outsource safety responsibilities",
                "Eliminate environmental audits"
            ],
            correctOption: "B"
        },
        {
            id: 109,
            question: "Which action appears in the 9 steps to certification? (S38)",
            options: [
                "Hire a branding agency",
                "Document business process (min 3 months data)",
                "Purchase new ERP software",
                "Outsource all audits"
            ],
            correctOption: "B"
        },
        {
            id: 110,
            question: "Which sector pairing is correct from the slides? (S10–S13)",
            options: [
                "AS 9100 — medical devices",
                "ISO 27001 — information network",
                "ISO 13485 — aerospace",
                "ISO 22000 — automotive supply chain"
            ],
            correctOption: "B"
        }
    ],
};

