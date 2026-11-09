import { getStore } from "@netlify/blobs";
export const config = { path: "/api" };
const J = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", "cache-control": "no-store" } });
export default async (req) => {
  const st = getStore("ganesh"), a = new URL(req.url).searchParams.get("a");
  const adm = !!process.env.ADMIN_PASSWORD && req.headers.get("x-pw") === process.env.ADMIN_PASSWORD;
  const get = async (k, d) => (await st.get(k, { type: "json" })) ?? d;
  if (req.method === "GET") {
    const site = await get("site", null);
    return J({ site, admin: adm, visits: adm ? await get("visits", 0) : undefined });
  }
  const b = await req.json().catch(() => ({}));
  if (a === "visit") { await st.setJSON("visits", (await get("visits", 0)) + 1); return J({ ok: 1 }); }
  if (!adm) return J({ error: "Wrong password" }, 401);
  if (a === "save") { await st.setJSON("site", b); return J({ ok: 1 }); }
  return J({ error: "Unknown action" }, 400);
};
