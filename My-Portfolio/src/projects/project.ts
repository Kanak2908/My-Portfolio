import Hard from "../assets/75Hard.png";
import coinflip from "../assets/coinflip.png";
import NftBridge from "../assets/loomia-bridge.png";
import Loomia from "../assets/Loomia.png";
import TravelLink from "../assets/TravelLink.png";

export const projects = [
  {
    name: "Distributed Rate Limiter",
    description: "Go-based distributed API gateway with Redis rate limiting, JWT/API-key authentication, and zero-downtime configuration reloads.",
    tags: ["go", "redis", "jwt"],
    image: coinflip,
    source_code_link: "https://github.com/Kanak2908/Distributed-rate-limiter",
    deployed_link: "https://distributed-rate-limiter.vercel.app",
  },
  {
    name: "Trend AI",
    description:
      "Full-stack AI platform using RetinaFace, BiSeNet, KMeans, and LLMs for personalized color analysis.",
    tags: [
      "python",
      "opencv",
      "llms",
      "retinaface",
      "bisenet",
      "kmeans",
    ],
    image: TravelLink,
    source_code_link: "https://github.com/DavidGoyal/Travel-Link",
    deployed_link: "https://travellink-india.vercel.app",
  },
];
