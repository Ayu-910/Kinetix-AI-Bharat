# Kinetix AI Bharat — Autonomous Enterprise Business Optimizer

Kinetix AI Bharat is an AI-powered enterprise optimization engine built for Indian businesses. It simulates autonomous agents that handle GST compliance, vendor reconciliation, and business process automation — helping enterprises reduce manual tax and compliance workload.

## Features

- **GST Reconciler** — Automatically matches purchase registers against GSTR-2B filings to detect mismatches.
- **Compliance Shield** — Monitors active vendor deals and flags compliance risks in real time.
- **WhatsApp Vendor Alerts** — Simulates automated WhatsApp reminders to vendors when a GSTR-2B mismatch is found, updating their status to "Alerted."
- **Swarm Copilot** — An AI agent layer that coordinates multiple business optimization tasks simultaneously.
- **Dataset Selector** — Switch between simulated Indian enterprise datasets (values in Lakhs & Crores INR) to test different business scenarios.
- **Agent Run Buttons** — Trigger individual AI agents directly from the UI to run specific optimization tasks on demand.

## Tech Stack

- HTML
- CSS
- JavaScript (Vanilla JS)

## Setup Instructions

No installation or build tools required — this is a static front-end project.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayu-910/Kinetix-AI-Bharat.git
   ```

2. **Move into the project folder**
   ```bash
   cd Kinetix-AI-Bharat
   ```

3. **Open the app**
   Simply open `index.html` in any modern web browser (Chrome, Edge, Firefox):
   - Double-click `index.html`, **or**
   - Right-click `index.html` → Open with → your browser

4. **Explore the demo**
   - Select a dataset from the Dataset Selector.
   - Click the agent run buttons to trigger AI-driven business optimization tasks.
   - Try the GST Reconciler to see purchase register vs. GSTR-2B mismatch detection.
   - Click "WhatsApp Vendor" on a mismatched entry (e.g., Global HR Tool) to simulate an automated compliance reminder.

## Project Structure

```
Kinetix-AI-Bharat/
├── index.html      # Main UI structure
├── styles.css      # Styling for the dashboard
└── app.js          # Core application logic and simulated AI agent engine
```

## License

This project was built as part of a capstone/demo submission and is intended for educational and demonstration purposes.
