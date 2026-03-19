The objective of this project is to build a high-performance, responsive personal portfolio website to showcase software engineering process & experience, specifically focusing on my solution engineering process, my software architecture process, how I use AI tools for development, Web3, smart contract development, and modern frontend skills. The site must serve as a professional landing page for potential clients, open-source collaborators, and recruiters.

## App Shell

- Simple logo
- Navigation: Home, Cases, Contact

### Home

- Headline: Building Secure Smart Contracts & Scalable Web Applications.
- Sub-headline: Hi, I'm Cyan. I'm a full-stack software developer with over 5 years of experience, specializing in Solidity, EVM ecosystems, and modern React/Node.js infrastructure.
- CTA buttons: "View Problem Cases" and "Download Resume"

### Cases

- A grid of 3 selected problem cases.
- The 3 selected problem cases are:
  - Aerostrategy (The MEV & Slippage Challenge)
    - The Challenge: Converting protocol revenue (USDC bribes) into protocol liquidity required executing massive market buybacks. However, executing these large trades all at once exposed the treasury to severe price slippage and predatory MEV sandwich attacks, threatening to drain protocol funds.
    - The Solution: I implemented a Sherlock-audited 'Buyback & Burn' smart contract engine equipped with TWAP (Time-Weighted Average Price) protection. By slicing the massive buybacks into smaller, automated trades executed seamlessly via a Keeper System, the protocol successfully secured its revenue against MEV bots while completely automating manual treasury operations.
  - Onyx (The Data Cost Bottleneck)
    - The Challenge: Our decentralized launchpad required real-time OHLCV (Open, High, Low, Close, Volume) charts for newly launched tokens. Relying on standard RPC nodes caused severe rate-limiting bottlenecks, and purchasing this live charting data from enterprise third-party APIs was prohibitively expensive for the team.
    - The Solution: I built a custom, real-time indexing engine using Envio HyperIndex. By utilizing dynamic factory listeners, the indexer automatically tracked new token deployments and aggregated raw on-chain trading data into clean OHLCV formats on the fly. This completely eliminated the need to pay for external data providers and bypassed RPC limits entirely.
  - Arx Research Inc. (The Security Gatekeeper)
    - The Challenge: Connecting real-world items to the blockchain requires a secure way for end-users to claim digital ownership of physical goods without relying on easily spoofed databases.
    - The Solution: I authored the ProjectRegistrar smart contract, which serves as the central hub where end-users go to claim their chips. To ensure complete hardware authenticity, the contract manages the project's chips by requiring a "Custody Proof" - a unique cryptographic signature generated directly by the physical chip. This strict verification allows users to securely claim ownership of the physical item through a Physically Backed Token (PBT).
- Each project card must include:
  - Project Title.
  - The Challenge
  - The Solution
  - Tech stack tags used in that specific project.
  - External links: GitHub repo, Live Demo, or Audit Report. If none, hide the link.
- Each card must be clickable and expand to show more details about the project.
- When a card it expands it should be a smooth animation that brings it center and grows

### Contact

- Brief professional bio.
- Links to LinkedIn, GitHub, and Twitter/X.
- A simple `mailto:` link or a basic contact form.

# Tech Stack

Layer Technology Version
Framework React 19.2
Language TypeScript 5.9
Build tool Vite 7.3
Linting ESLint 9.39 (with react-hooks and react-refresh plugins)
Styling TailwindCSS 4.2
