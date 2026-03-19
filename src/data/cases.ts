export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  techTags: string[];
  links: { label: string; url: string; type: "github" | "demo" | "audit" }[];
}

export const cases: CaseStudy[] = [
  {
    id: "aerostrategy",
    title: "Aerostrategy",
    subtitle: "Securing against MEV sandwich attacks",
    challenge:
      "Converting protocol revenue (USDC bribes) into protocol liquidity required executing massive market buybacks. However, executing these large trades all at once exposed the treasury to severe price slippage and predatory MEV sandwich attacks, threatening to drain protocol funds.",
    solution:
      "I implemented a Sherlock-audited 'Buyback & Burn' smart contract engine equipped with TWAP (Time-Weighted Average Price) protection. By slicing the massive buybacks into smaller, automated trades executed seamlessly via a Keeper System, the protocol successfully secured its revenue against MEV bots while completely automating manual treasury operations.",
    techTags: ["Solidity", "TWAP", "Keeper Systems", "DeFi"],
    links: [{ label: "Audit Report", url: "#", type: "audit" }],
  },
  {
    id: "onyx",
    title: "Onyx",
    subtitle: "Bypassing expensive data providers",
    challenge:
      "Our decentralized launchpad required real-time OHLCV (Open, High, Low, Close, Volume) charts for newly launched tokens. Relying on standard RPC nodes caused severe rate-limiting bottlenecks, and purchasing this live charting data from enterprise third-party APIs was prohibitively expensive for the team.",
    solution:
      "I built a custom, real-time indexing engine using Envio HyperIndex. By utilizing dynamic factory listeners, the indexer automatically tracked new token deployments and aggregated raw on-chain trading data into clean OHLCV formats on the fly. This completely eliminated the need to pay for external data providers and bypassed RPC limits entirely.",
    techTags: ["Envio HyperIndex", "TypeScript", "Indexer", "DeFi"],
    links: [{ label: "GitHub", url: "#", type: "github" }],
  },
  {
    id: "arx-research",
    title: "Arx Research Inc.",
    subtitle: "Bridging physical items on-chain",
    challenge:
      "Connecting real-world items to the blockchain requires a secure way for end-users to claim digital ownership of physical goods without relying on easily spoofed databases.",
    solution:
      'I authored the ProjectRegistrar smart contract, which serves as the central hub where end-users go to claim their chips. To ensure complete hardware authenticity, the contract manages the project\'s chips by requiring a "Custody Proof" — a unique cryptographic signature generated directly by the physical chip. This strict verification allows users to securely claim ownership of the physical item through a Physically Backed Token (PBT).',
    techTags: ["Solidity", "PBT", "Cryptography", "Hardware Auth"],
    links: [
      { label: "GitHub", url: "#", type: "github" },
      { label: "Live Demo", url: "#", type: "demo" },
    ],
  },
];
