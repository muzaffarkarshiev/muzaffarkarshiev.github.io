// Cloudflare Worker: API kalitini yashirin saqlaydigan vositachi.
// Sozlash: Cloudflare -> Workers -> Create -> shu kodni qo'ying ->
// Settings -> Variables -> ANTHROPIC_API_KEY (Secret) qo'shing.
// So'ng worker manzilini index.html dagi PROXY_URL ga yozing.
const ALLOWED_ORIGIN = "https://muzaffarkarshiev.github.io";
const MODEL = "claude-sonnet-5-5";

export default {
  async fetch(req, env) {
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "content-type",
    };
    if (req.method === "OPTIONS") return new Response(null, { headers: cors });
    if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: cors });
    if (req.headers.get("Origin") !== ALLOWED_ORIGIN) return new Response("Forbidden", { status: 403, headers: cors });

    const body = await req.json();
    body.model = MODEL;                                  // modelni o'zgartirib bo'lmaydi
    body.max_tokens = Math.min(body.max_tokens || 4000, 8000);

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(body),
    });
    return new Response(r.body, { status: r.status, headers: { ...cors, "content-type": "application/json" } });
  },
};
