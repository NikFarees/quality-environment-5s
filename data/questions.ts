// data/questions.ts
export type Question = {
    id: number;
    question: string;
    options: string[];
    correctOption: string;
    explanation?: string;
};

export const QUESTIONS: Question[] = [
    {
        id: 1,
        question: "Which statement best describes 5S? (S6)",
        options: [
            "A marketing framework for branding only",
            "A process to organize workplace, keep it clean, and maintain effective and standard condition",
            "A one-off clean-up event",
            "A financial reporting method"
        ],
        correctOption: "B",
        explanation: "S6 definition."
    },

    {
        id: 2,
        question: "Which is the correct list of Japanese 5S terms as shown? (S6)",
        options: [
            "Seiri, Seiton, Seiso, Seigetsu, Shitsuke",
            "Se-i-ri, Se-i-to-n, Se-i-so, Se-i-ke-tsu, Shi-tsu-ke",
            "Seiri, Seiton, Seison, Seiketsu, Shitsuke",
            "Seiri, Seiton, Seiso, Seikatsu, Shitsuke"
        ],
        correctOption: "B",
        explanation: "S6 prints them with hyphens."
    },

    {
        id: 3,
        question: "Which is NOT listed under the 'SYSTEM CONFIGURATION OF 5S'? (S8)",
        options: [
            "HOUSE OF QUALITY; LEAN MANAGEMENT; KAIZEN PROGRAMMES",
            "DOCUMENTATION: Internal Audit Criteria; 5S Committee Files",
            "REQUIREMENT: ISO 9001; ISO 50001; ISO 27000",
            "Blockchain Mining"
        ],
        correctOption: "D"
    },

    {
        id: 4,
        question: "Match the element to its definition: 'Remove all items not needed for current activities at workplace'. (S9)",
        options: [
            "Set In Order (SEITON)",
            "Sort (SEIRI)",
            "Shiny Clean (SEISO)",
            "Standardize Clean Up (SEIKETSU)"
        ],
        correctOption: "B"
    },

    {
        id: 5,
        question: "Which phrase appears under 'Set In Order (SEITON)'? (S9–S10)",
        options: [
            "Keep only needed items",
            "Make a habit of maintaining established procedures",
            "Put everything in a place that is easy to get to; clearly mark items",
            "Remove all dirt and grime on a monthly basis"
        ],
        correctOption: "C"
    },

    {
        id: 6,
        question: "Which statement aligns with 'Shiny Clean (SEISO)'? (S9–S10)",
        options: [
            "Determine support processes and security measures",
            "Keeping the workplace clean on DAILY basis",
            "Create succession planning for leaders",
            "Select qualified suppliers and partners"
        ],
        correctOption: "B"
    },

    {
        id: 7,
        question: "Which step is included in the 'STEP‑BY‑STEP OF 5S IMPLEMENTATION'? (S14)",
        options: [
            "Best Practice and Evaluate",
            "IPO Listing and Hedge",
            "Patent Filing and M&A",
            "Only Train, then Stop"
        ],
        correctOption: "A"
    },

    {
        id: 8,
        question: "Which is a 'Keys to 5S Success' action? (S17)",
        options: [
            "Avoid leadership involvement",
            "Plan using the PDCA Cycle and train everyone adequately",
            "Eliminate all performance measurement",
            "Reduce communication about 5S"
        ],
        correctOption: "B"
    },

    {
        id: 9,
        question: "Which benefit pair is listed under ORGANIZATION? (S18)",
        options: [
            "Clean and comfortable workplace; increase job satisfaction",
            "Stability in process; Zero defects",
            "Only goodwill increase",
            "Tax incentives and grants"
        ],
        correctOption: "B"
    },

    {
        id: 10,
        question: "Which mechanism supports sustaining 5S? (S20)",
        options: [
            "Monthly Audit Scheduler and 5S Score Card",
            "Quarterly tax audit only",
            "Employee share options plan",
            "Annual dinner raffle"
        ],
        correctOption: "A"
    },

    {
        id: 11,
        question: "Which is included in the 'Implementation Area of 5S'? (S15)",
        options: [
            "Canteen only",
            "Accounting ledger",
            "File Cabinet",
            "Parking lot only"
        ],
        correctOption: "C"
    },

    {
        id: 12,
        question: "What does PDCA stand for, as referenced? (S17)",
        options: [
            "Plan‑Design‑Create‑Act",
            "Plan‑Do‑Check‑Act",
            "Prepare‑Do‑Control‑Audit",
            "Pilot‑Deliver‑Calibrate‑Adjust"
        ],
        correctOption: "B"
    },

    {
        id: 13,
        question: "Which set is listed under 'REQUIREMENT' in System Configuration? (S8)",
        options: [
            "ISO 9001; ISO 50001; ISO 27000",
            "ISO 31000; ISO 22301; ISO 14001",
            "Six Sigma; Kaizen; TPM",
            "TQM; MBNQA; EFQM"
        ],
        correctOption: "A"
    },

    {
        id: 14,
        question: "Which is a BENEFIT for WORKERS? (S18)",
        options: [
            "Zero breakdown",
            "Waste elimination",
            "Increase job satisfaction",
            "Zero complaint"
        ],
        correctOption: "C"
    },

    {
        id: 15,
        question: "Which S focuses on creating tasks and procedures so the first three S are performed the same way every day? (S9–S10)",
        options: [
            "SEIRI",
            "SEITON",
            "SEISO",
            "SEIKETSU"
        ],
        correctOption: "D"
    },

    {
        id: 16,
        question: "Which frequency is emphasized in 'Shiny Clean (SEISO)'? (S9–S10)",
        options: [
            "Weekly",
            "Monthly",
            "Daily",
            "Quarterly"
        ],
        correctOption: "C"
    },

    {
        id: 17,
        question: "Which pair belongs to System Configuration examples? (S8)",
        options: [
            "Just‑in‑Time; Total Productive Maintenance",
            "Market research; Brand storytelling",
            "ERP rollout; Blockchain ledger",
            "IPO timetable; Investor deck"
        ],
        correctOption: "A"
    },

    {
        id: 18,
        question: "Which is NOT listed as an Issue/Challenge? (S21)",
        options: [
            "Financial constraint",
            "Lack of teamwork",
            "No proper vision & mission",
            "Access to unlimited budget"
        ],
        correctOption: "D"
    },

    {
        id: 19,
        question: "Which item appears in Sustaining 5S? (S20)",
        options: [
            "5S Issue Reporter",
            "Quarterly IPO pipeline",
            "M&A Integration Office",
            "Monthly investor call"
        ],
        correctOption: "A"
    },

    {
        id: 20,
        question: "Which statement aligns with the reminder on S10?",
        options: [
            "5S is mainly about buying expensive equipment",
            "5S is about Culture and People",
            "5S is a one‑off clean‑up event",
            "5S is optional for safety"
        ],
        correctOption: "B"
    }
];