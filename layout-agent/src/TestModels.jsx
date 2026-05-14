import { useState } from "react";

export default function TestModels() {
  const [apiKey, setApiKey] = useState("");
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchModels() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
      );
      const data = await res.json();
      const filtered = data.models
        .filter(m => m.supportedGenerationMethods?.includes("generateContent"))
        .map(m => m.name);
      setModels(filtered);
    } catch (e) {
      setModels(["Error: " + e.message]);
    }
    setLoading(false);
  }

  return (
    <div style={{ padding: 40, fontFamily: "monospace", background: "#09090f", minHeight: "100vh", color: "#fff" }}>
      <h2 style={{ color: "#4dabf7" }}>Available Gemini Models</h2>
      <input
        type="password" placeholder="Paste your Gemini API key"
        value={apiKey} onChange={e => setApiKey(e.target.value)}
        style={{ padding: 10, width: 400, borderRadius: 8, border: "1px solid #333", background: "#13131f", color: "#fff", fontSize: 13, marginRight: 10 }}
      />
      <button onClick={fetchModels}
        style={{ padding: "10px 20px", background: "#4dabf7", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>
        {loading ? "Loading..." : "Fetch Models"}
      </button>
      <ul style={{ marginTop: 24, lineHeight: 2 }}>
        {models.map(m => <li key={m} style={{ color: "#69db7c" }}>{m}</li>)}
      </ul>
    </div>
  );
}