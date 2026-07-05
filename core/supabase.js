import { SUPABASE_URL, SUPABASE_KEY } from "./config.js"

export function saveEntry(data) {
  return fetch(`${SUPABASE_URL}/rest/v1/entries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`
    },
    body: JSON.stringify(data)
  })
}

export async function getEntries() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/entries?select=*`, {
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`
    }
  })
  return res.json()
}
