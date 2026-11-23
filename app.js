const standouts = [
  { tag: "Her No. 1 pick · Request 1", title: "The Privatter", body: "Teach young children to read, write, and do arithmetic at the quality of a private tutor, at consumer scale. Her words: the private tutor teaching young children to read, write and do math is awesome. An at-home learning opportunity." },
  { tag: "Her No. 2 pick · Request 7", title: "AI for the Aging Population", body: "Voice interfaces, monitoring, home robotics, and caregiver coordination software built for elder adults. Her reasoning: the population is aging, there are going to be so many needs to fulfil. Can you build something in this space?" },
  { tag: "Her No. 3 pick · Request 11", title: "Proving You're Human", body: "Rebuild the trust layer of the internet, knowing that's a verified human on the other end of a call, message, or transaction. Her reasoning: as AI increases, a trust layer is going to be needed so you can actually verify that somebody on the other end is in fact a human." },
];

const requests = [
  { tag: "Request 1", title: "The Privatter", body: "Teach young children to read, write, and do arithmetic at the quality of a private tutor, at consumer scale." },
  { tag: "Request 2", title: "The Future of American Defense", body: "Low-cost interceptors, next-gen sensors, drones, and satellite logistics, and advanced manufacturing." },
  { tag: "Request 3", title: "A Cloud for Small Software", body: "A cloud built specifically for purpose-built tools that will only have one or a handful of users." },
  { tag: "Request 4", title: "Multiplayer AI", body: "AI that's multiplayer by default, where anyone can drop into the same live agent session to watch it work, redirect it, and hand it off." },
  { tag: "Request 5", title: "Compute at Sea", body: "Move compute offshore into standard modular compute facilities operating together as one global cloud." },
  { tag: "Request 6", title: "AI-Powered Consumer Products for 1 Billion People", body: "Consumer products for a billion people as intelligence gets good enough and cheap enough." },
  { tag: "Request 7", title: "AI for the Aging Population", body: "Voice interfaces, monitoring, home robotics, and caregiver coordination software built for elder adults." },
  { tag: "Request 8", title: "New Operating Systems for the Physical World", body: "Operating systems that route work between AI agents, robots, and humans in the field." },
  { tag: "Request 9", title: "The Best Time to Build in Crypto", body: "Crypto rails, new stablecoins and stablecoin apps, agentic commerce, trading, and institutional products." },
  { tag: "Request 10", title: "Data for the Real World", body: "New ways to collect dense physical-world data to enable precise modelling for energy, agriculture, logistics, and conservation." },
  { tag: "Request 11", title: "Proving You're Human", body: "Rebuild the trust layer of the internet, knowing that's a verified human on the other end of a call, message, or transaction." },
  { tag: "Request 12", title: "AI-Native Compliance Infrastructure", body: "Compliance infrastructure that consolidates fragmented tools and reduces reliance on specialised headcount." },
  { tag: "Request 13", title: "Self-Maintaining APIs", body: "Agents that don't just announce API changes but scan customer codebases and open a PR with the fix." },
];

function card(item) {
  const el = document.createElement("article");
  el.className = "card";
  const count = document.createElement("div");
  count.className = "count";
  count.textContent = item.tag;
  const h = document.createElement("h3");
  h.textContent = item.title;
  const p = document.createElement("p");
  p.textContent = item.body;
  el.append(count, h, p);
  return el;
}

document.getElementById("standouts").replaceChildren(...standouts.map(card));
document.getElementById("requests").replaceChildren(...requests.map(card));
