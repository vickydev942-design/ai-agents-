import { useState, useRef, useEffect } from "react";
const INITIAL_JSON = {
  "rootNodes": ["artboard_1778485662755_3"],
  "imageUrl": "https://res.cloudinary.com/dzydbgyfj/image/upload/v1778502510/Instagram_Post_1080x1080_19_iw9uqy.png",
  "nodes": {
    "img_1778485681535_4": {
      "x": -2.480199702295863, "y": 0,
      "id": "img_1778485681535_4", "nh": 1, "nw": 1, "nx": -0.0022964812058295027, "ny": 0,
      "data": { "fit": "cover", "assetId": "asset_1778485681534_jl4fd6", "sourceUrl": "https://res.cloudinary.com/dzydbgyfj/image/upload/v1778485682/qgi9ecexyirh7vbvij9k.png" },
      "name": "Background.png", "type": "image",
      "style": { "layout": {}, "visual": { "borderRadius": 0 } },
      "width": 1080, "height": 1080, "parentId": "artboard_1778485662755_3"
    },
    "img_1778486846247_10": {
      "x": 333.4017235189475, "y": 124.94234803158162,
      "id": "img_1778486846247_10", "nh": 0.037741738009449737, "nw": 0.034185517608088176, "nx": 0.30870529955458104, "ny": 0.11568735928850149,
      "data": { "fit": "cover", "assetId": "asset_1778486846244_9hw86o", "sourceUrl": "https://res.cloudinary.com/dzydbgyfj/image/upload/v1778486847/c2pgksvxa3ec61bchter.png" },
      "name": "Vector (2).png", "type": "image",
      "style": { "layout": {}, "visual": { "borderRadius": 0 } },
      "width": 36.920359016735226, "height": 40.761077050205714, "parentId": "artboard_1778485662755_3"
    },
    "img_1778486856821_11": {
      "x": 229.76161365259213, "y": 126.70185327118239,
      "id": "img_1778486856821_11", "nh": 0.03774173800944972, "nw": 0.034185517608088176, "nx": 0.21274223486351124, "ny": 0.11731653080665036,
      "data": { "fit": "cover", "assetId": "asset_1778486856821_s8v1en", "sourceUrl": "https://res.cloudinary.com/dzydbgyfj/image/upload/v1778486857/ksyoela4vnvrtlt49lf1.png" },
      "name": "Vector (1).png", "type": "image",
      "style": { "layout": {}, "visual": { "borderRadius": 0 } },
      "width": 36.920359016735226, "height": 40.7610770502057, "parentId": "artboard_1778485662755_3"
    },
    "img_1778487081392_12": {
      "x": 283.7974713072252, "y": 127.86270704831685,
      "id": "img_1778487081392_12", "nh": 0.03503770188284304, "nw": 0.03418551760808818, "nx": 0.2627754363955789, "ny": 0.1183913954151082,
      "data": { "fit": "cover", "assetId": "asset_1778487081391_spprg9", "sourceUrl": "https://res.cloudinary.com/dzydbgyfj/image/upload/v1778487081/y6sbozdszgf0hc9wjmev.png" },
      "name": "Vector (1).png", "type": "image",
      "style": { "layout": {}, "visual": { "borderRadius": 0 } },
      "width": 36.92035901673524, "height": 37.84071803347048, "parentId": "artboard_1778485662755_3"
    },
    "img_1778487101466_13": {
      "x": 432.5602419818531, "y": 126.70185327118239,
      "id": "img_1778487101466_13", "nh": 0.03233366575623633, "nw": 0.039593589861301584, "nx": 0.4005187425757899, "ny": 0.11731653080665036,
      "data": { "fit": "cover", "assetId": "asset_1778487101465_wnrgke", "sourceUrl": "https://res.cloudinary.com/dzydbgyfj/image/upload/v1778487101/oe2lgnfgtpl63vffqvuc.png" },
      "name": "Vector (1).png", "type": "image",
      "style": { "layout": {}, "visual": { "borderRadius": 0 } },
      "width": 42.761077050205714, "height": 34.92035901673523, "parentId": "artboard_1778485662755_3"
    },
    "img_1778487110538_14": {
      "x": 380.54333909425605, "y": 127.86270704831685,
      "id": "img_1778487110538_14", "nh": 0.03233366575623633, "nw": 0.03688955373469488, "nx": 0.35235494360579267, "ny": 0.1183913954151082,
      "data": { "fit": "cover", "assetId": "asset_1778487110536_5gy5sx", "sourceUrl": "https://res.cloudinary.com/dzydbgyfj/image/upload/v1778487110/nxe2gyhmho4ncbhjpb08.png" },
      "name": "Vector (2).png", "type": "image",
      "style": { "layout": {}, "visual": { "borderRadius": 0 } },
      "width": 39.84071803347047, "height": 34.92035901673523, "parentId": "artboard_1778485662755_3"
    },
    "img_1778489515746_17": {
      "x": 89.82235511988935, "y": 571.8382567085082,
      "id": "img_1778489515746_17", "nh": 0.3152992662905912, "nw": 0.7637522830873364, "nx": 0.08316884733323088, "ny": 0.5294798673226928,
      "data": { "fit": "cover", "assetId": "asset_1778489515744_q47n31", "sourceUrl": "https://res.cloudinary.com/dzydbgyfj/image/upload/v1778489518/mfkzgbakd77adfnbbcsv.png" },
      "name": "Product.png", "type": "image",
      "style": { "layout": {}, "visual": { "borderRadius": 0 } },
      "width": 824.8524657343233, "height": 340.5232075938385, "parentId": "artboard_1778485662755_3"
    },
    "text_1778486004640_6": {
      "x": 346.02118499384466, "y": 956.9792790379693,
      "id": "text_1778486004640_6", "nh": 0.06804963433919406, "nw": 0.45466173716839364, "nx": 0.3203899861054117, "ny": 0.8860919250351568,
      "data": { "content": "Limited time offer" },
      "name": "Text", "type": "text",
      "style": { "layout": {}, "visual": { "fill": { "type": "none" }, "color": { "type": "solid", "value": "#FFFF" }, "fontSize": 48, "fontFamily": "Arial", "fontWeight": 600 } },
      "width": 491.03467614186513, "height": 73.49360508632958, "parentId": "artboard_1778485662755_3", "fontSizeRatio": 0.044444444444444446
    },
    "text_1778486136643_7": {
      "x": 194.38702539993648, "y": 350.16045634860865,
      "id": "text_1778486136643_7", "nh": 0.037037037037037035, "nw": 0.7120318482825286, "nx": 0.17998798648142267, "ny": 0.32422264476723023,
      "data": { "content": "Comfort that defines modern living." },
      "name": "Text", "type": "text",
      "style": { "layout": {}, "visual": { "fill": { "type": "none" }, "color": { "type": "solid", "value": "#FFFF" }, "fontSize": 48, "fontFamily": "Arial", "fontWeight": 600 } },
      "width": 768.994396145131, "height": 40, "parentId": "artboard_1778485662755_3", "fontSizeRatio": 0.044444444444444446
    },
    "text_1778486306230_8": {
      "x": 133.38976610032938, "y": 175.51991211747026,
      "id": "text_1778486306230_8", "nh": 0.3503396592170152, "nw": 0.7815649104172034, "nx": 0.12350904268549016, "ny": 0.1625184371458058,
      "data": { "content": " Luxury Comfort, \n Surprisingly Attainable" },
      "name": "Text", "type": "text",
      "style": { "layout": {}, "visual": { "fill": { "type": "none" }, "color": { "type": "solid", "value": "#FFFF" }, "fontSize": 72, "fontStyle": "italic", "fontFamily": "Arial", "fontWeight": 700 } },
      "width": 844.0901032505798, "height": 378.36683195437644, "parentId": "artboard_1778485662755_3", "fontSizeRatio": 0.06666666666666667
    },
    "text_1778486552508_9": {
      "x": 482.7000303705086, "y": 121.09848637690123,
      "id": "text_1778486552508_9", "nh": 0.04541430724262293, "nw": 0.43652086535182927, "nx": 0.44694447256528574, "ny": 0.1121282281267604,
      "data": { "content": "Over 8,000 happy homes" },
      "name": "Text", "type": "text",
      "style": { "layout": {}, "visual": { "fill": { "type": "none" }, "color": { "type": "solid", "value": "#FFFF" }, "fontSize": 40, "fontFamily": "Arial", "fontWeight": 600 } },
      "width": 471.4425345799756, "height": 49.04745182203276, "parentId": "artboard_1778485662755_3", "fontSizeRatio": 0.037037037037037035
    },
    "text_1778489078397_16": {
      "x": 130.87523314340268, "y": 448.5125264397059,
      "id": "text_1778489078397_16", "nh": 0.13998918694820744, "nw": 0.16302282390535613, "nx": 0.12118077142907656, "ny": 0.415289376333061,
      "data": { "content": "20%\nOFF" },
      "name": "Text", "type": "text",
      "style": { "layout": {}, "visual": { "fill": { "type": "none" }, "color": { "type": "solid", "value": "#FFFF" }, "fontSize": 56, "fontFamily": "Arial", "fontWeight": 700 } },
      "width": 176.0646498177846, "height": 151.18832190406403, "parentId": "artboard_1778485662755_3", "fontSizeRatio": 0.05185185185185185
    },
    "circle_1778488914968_15": {
      "x": 103.6984883092603, "y": 437.4183771828574,
      "id": "circle_1778488914968_15", "nh": 0.14248292500533227, "nw": 0.14789099725854568, "nx": 0.09601711880487064, "ny": 0.4050170159100531,
      "data": { "shapeType": "circle" },
      "name": "Circle", "type": "shape",
      "style": { "layout": {}, "visual": { "fill": { "type": "solid", "value": "#F4CF1B" }, "stroke": { "type": "solid", "value": "#F4CF1B" }, "strokeWidth": 2 } },
      "width": 159.72227703922934, "height": 153.88155900575885, "parentId": "artboard_1778485662755_3"
    },
    "artboard_1778485662755_3": {
      "x": -479.700399885017, "y": -724.4991007769831,
      "id": "artboard_1778485662755_3",
      "data": { "preset": "instagram-post", "showLabel": true, "backgroundColor": "#ffffff" },
      "name": "Instagram Post", "type": "artboard",
      "style": { "layout": {}, "visual": {} },
      "width": 1080, "height": 1080,
      "children": [
        "img_1778485681535_4","text_1778486004640_6","text_1778486136643_7",
        "text_1778486306230_8","text_1778486552508_9","img_1778486846247_10",
        "img_1778486856821_11","img_1778487081392_12","img_1778487101466_13",
        "img_1778487110538_14","circle_1778488914968_15","text_1778489078397_16",
        "img_1778489515746_17"
      ]
    }
  }
};

const SYSTEM_PROMPT = `You are a layout agent for a design tool. You receive a design JSON and a user instruction to modify the layout.

The artboard is currently either 1080x1080 (Instagram Post 1:1) or may be changed to 1080x1920 (9:16).

Nodes have these fields you can modify: x, y, width, height, and for text nodes: style.visual.fontSize and fontSizeRatio.
Also update nx = x/artboardWidth, ny = y/artboardHeight, nw = width/artboardWidth, nh = height/artboardHeight after any position/size change.

Semantic roles of nodes:
- "text_1778486306230_8" = Headline ("Luxury Comfort, Surprisingly Attainable") — large italic text
- "text_1778486136643_7" = Subheadline ("Comfort that defines modern living.")
- "img_1778489515746_17" = Product image (Product.png)
- "circle_1778488914968_15" = Offer badge circle (yellow circle)
- "text_1778489078397_16" = Offer badge text ("20% OFF") — always move with circle
- "text_1778486004640_6" = "Limited time offer" bottom text
- "text_1778486552508_9" = "Over 8,000 happy homes" social proof
- "img_1778485681535_4" = Background (do NOT move or resize)
- "img_1778486846247_10", "img_1778486856821_11", "img_1778487081392_12", "img_1778487101466_13", "img_1778487110538_14" = Star rating icons (small, move together if needed)

Instructions to handle:
- "Convert to 9:16" → set artboard height to 1920, scale all y values by (1920/1080), update background height to 1920, keep x positions same
- "Move headline to top" → set text_1778486306230_8 y to ~40
- "Move offer badge higher" → decrease y of circle_1778488914968_15 and text_1778489078397_16 by ~120
- "Keep product large" → do not shrink img_1778489515746_17, if 9:16 conversion increase its height proportionally
- "Make headline smaller" → reduce text_1778486306230_8 style.visual.fontSize by 20%, update fontSizeRatio = fontSize/1080
- "Make headline larger" → increase fontSize by 20%

IMPORTANT RULES:
- Return ONLY the complete updated JSON object.
- No markdown, no code blocks, no explanation. Raw JSON only.
- Keep ALL nodes and ALL fields intact. Only change what the instruction requires.
- Always recalculate nx, ny, nw, nh after changing x, y, width, height.`;

export default function App() {
  const [apiKey, setApiKey] = useState("");
  const [keySubmitted, setKeySubmitted] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I'm your layout agent. Design JSON is loaded.\n\nTry:\n• Convert this design to 9:16\n• Keep the product large\n• Move the headline to the top\n• Move the offer badge higher\n• Make the headline smaller"
    }
  ]);
  const [input, setInput] = useState("");
  const [currentJson, setCurrentJson] = useState(INITIAL_JSON);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("json");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const prompt = `Current design JSON:\n${JSON.stringify(currentJson, null, 2)}\n\nUser instruction: "${userMsg}"\n\nReturn the complete updated JSON only.`;

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: [{ parts: [{ text: prompt }] }]
          })
        }
      );

      const data = await res.json();

      if (data.error) throw new Error(data.error.message);

      let raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      raw = raw.replace(/```json|```/g, "").trim();
      const updated = JSON.parse(raw);
      setCurrentJson(updated);
      setMessages(prev => [...prev, { role: "assistant", text: "✅ Done! Layout JSON updated." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", text: "❌ Error: " + (e.message || "Something went wrong.") }]);
    }
    setLoading(false);
  }

  function WireframePreview() {
    const artboard = currentJson.nodes["artboard_1778485662755_3"];
    const W = artboard.width;
    const H = artboard.height;
    const scale = 320 / Math.max(W, H);
    const nodeList = Object.values(currentJson.nodes).filter(n => n.type !== "artboard");

    const getStyle = (node) => {
      if (node.name === "Background.png") return { bg: "#1a1a2e", border: "#2a2a4a" };
      if (node.name === "Product.png") return { bg: "#1864ab44", border: "#4dabf7" };
      if (node.type === "shape") return { bg: "#F4CF1B66", border: "#F4CF1B" };
      if (node.type === "text") return { bg: "#2f9e4433", border: "#69db7c" };
      return { bg: "#86198f22", border: "#e879f9" };
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ fontSize: 10, color: "#555", fontFamily: "monospace" }}>Canvas: {W} × {H}px</div>
        <div style={{
          position: "relative", width: W * scale, height: H * scale,
          background: "#0a0a12", border: "1px solid #222", borderRadius: 4, overflow: "hidden"
        }}>
          {nodeList.map(node => {
            const { bg, border } = getStyle(node);
            return (
              <div key={node.id} title={node.data?.content || node.name} style={{
                position: "absolute",
                left: node.x * scale, top: node.y * scale,
                width: node.width * scale, height: node.height * scale,
                background: bg, border: `1px solid ${border}`,
                borderRadius: node.data?.shapeType === "circle" ? "50%" : 2,
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden", boxSizing: "border-box"
              }}>
                <span style={{ fontSize: 6, color: border, fontFamily: "monospace", textAlign: "center", padding: 1, wordBreak: "break-all", lineHeight: 1.2 }}>
                  {(node.data?.content || node.name).replace(/\n/g, " ").slice(0, 18)}
                </span>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: 10, fontSize: 9, color: "#555", fontFamily: "monospace", flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{ color: "#4dabf7" }}>■ product</span>
          <span style={{ color: "#69db7c" }}>■ text</span>
          <span style={{ color: "#F4CF1B" }}>■ shape</span>
          <span style={{ color: "#e879f9" }}>■ icon</span>
        </div>
      </div>
    );
  }

  // API key screen
  if (!keySubmitted) {
    return (
      <div style={{ minHeight: "100vh", background: "#09090f", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Courier New', monospace" }}>
        <div style={{ background: "#12121a", border: "1px solid #1e1e2a", borderRadius: 12, padding: 40, width: 360, textAlign: "center" }}>
          <div style={{ fontSize: 30, marginBottom: 10 }}>🎨</div>
          <h2 style={{ color: "#fff", margin: "0 0 6px", fontSize: 16, letterSpacing: 2 }}>LAYOUT AGENT</h2>
          <p style={{ color: "#555", fontSize: 11, margin: "0 0 6px", lineHeight: 1.7 }}>
            Chat-based design layout editor.<br />Enter your free Gemini API key.
          </p>
          <p style={{ color: "#4dabf7", fontSize: 10, margin: "0 0 22px" }}>Get free key → aistudio.google.com</p>
          <input
            type="password" placeholder="AIza..." value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            onKeyDown={e => e.key === "Enter" && apiKey && setKeySubmitted(true)}
            style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #1e1e2a", background: "#09090f", color: "#fff", fontSize: 12, boxSizing: "border-box", outline: "none", marginBottom: 10, fontFamily: "monospace" }}
          />
          <button onClick={() => apiKey && setKeySubmitted(true)}
            style={{ width: "100%", padding: "11px 0", borderRadius: 8, background: "#4dabf7", color: "#000", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer", letterSpacing: 2 }}>
            START →
          </button>
        </div>
      </div>
    );
  }

  const QUICK = [
    "Convert this design to 9:16",
    "Keep the product large",
    "Move the headline to the top",
    "Move the offer badge higher",
    "Make the headline smaller"
  ];

  return (
    <div style={{ height: "100vh", display: "flex", background: "#09090f", fontFamily: "'Courier New', monospace", color: "#fff", overflow: "hidden" }}>

      {/* Chat Panel */}
      <div style={{ width: 340, display: "flex", flexDirection: "column", borderRight: "1px solid #1e1e2a", flexShrink: 0 }}>
        <div style={{ padding: "14px 18px", borderBottom: "1px solid #1e1e2a", background: "#0d0d15" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#4dabf7", letterSpacing: 2 }}>LAYOUT AGENT</div>
          <div style={{ fontSize: 10, color: "#444", marginTop: 2 }}>Gemini · Design JSON Editor</div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
              <div style={{
                maxWidth: "88%", padding: "9px 13px", borderRadius: 10,
                background: m.role === "user" ? "#1864ab" : "#13131f",
                color: m.role === "user" ? "#e8f4fd" : "#bbb",
                fontSize: 12, lineHeight: 1.6,
                border: m.role === "assistant" ? "1px solid #1e1e2a" : "none",
                whiteSpace: "pre-wrap"
              }}>{m.text}</div>
            </div>
          ))}
          {loading && <div style={{ color: "#444", fontSize: 11 }}>⏳ Updating layout...</div>}
          <div ref={chatEndRef} />
        </div>

        {/* Quick prompts — exactly from doc */}
        <div style={{ padding: "8px 14px", borderTop: "1px solid #1e1e2a", display: "flex", flexWrap: "wrap", gap: 5 }}>
          {QUICK.map(q => (
            <button key={q} onClick={() => setInput(q)} style={{
              padding: "3px 8px", borderRadius: 20, fontSize: 9,
              background: "#13131f", color: "#555", border: "1px solid #1e1e2a",
              cursor: "pointer", fontFamily: "monospace"
            }}>{q}</button>
          ))}
        </div>

        <div style={{ padding: 12, borderTop: "1px solid #1e1e2a", display: "flex", gap: 8 }}>
          <input
            value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
            placeholder="Type instruction..." disabled={loading}
            style={{ flex: 1, padding: "9px 12px", borderRadius: 8, border: "1px solid #1e1e2a", background: "#13131f", color: "#fff", fontSize: 12, outline: "none", fontFamily: "monospace" }}
          />
          <button onClick={sendMessage} disabled={loading || !input.trim()}
            style={{ padding: "9px 14px", borderRadius: 8, background: loading || !input.trim() ? "#1e1e2a" : "#4dabf7", color: loading || !input.trim() ? "#444" : "#000", border: "none", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", fontSize: 13 }}>
            →
          </button>
        </div>
      </div>

      {/* JSON + Preview Panel */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ display: "flex", borderBottom: "1px solid #1e1e2a", background: "#0d0d15", padding: "0 18px", alignItems: "center" }}>
          {["json", "preview"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "12px 18px", background: "none", border: "none",
              borderBottom: tab === t ? "2px solid #4dabf7" : "2px solid transparent",
              color: tab === t ? "#4dabf7" : "#444",
              cursor: "pointer", fontSize: 10, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: 2
            }}>{t}</button>
          ))}
          <div style={{ flex: 1 }} />
          <button
            onClick={() => { setCurrentJson(INITIAL_JSON); setMessages(prev => [...prev, { role: "assistant", text: "↩ Reset to original JSON." }]); }}
            style={{ padding: "6px 12px", margin: "8px 0", borderRadius: 6, background: "#13131f", color: "#555", border: "1px solid #1e1e2a", cursor: "pointer", fontSize: 10, fontFamily: "monospace" }}>
            Reset
          </button>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: 20 }}>
          {tab === "json" ? (
            <pre style={{ margin: 0, fontSize: 11, color: "#7ec8e3", lineHeight: 1.7, background: "#0d0d15", padding: 20, borderRadius: 8, border: "1px solid #1e1e2a", whiteSpace: "pre-wrap", wordBreak: "break-word", fontFamily: "monospace" }}>
              {JSON.stringify(currentJson, null, 2)}
            </pre>
          ) : (
            <div style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}>
              <WireframePreview />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
