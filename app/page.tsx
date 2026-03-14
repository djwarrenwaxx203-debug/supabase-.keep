"use client";

export default function Home() {
  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "#e8e0d0",
        fontFamily: "Arial, sans-serif",
        padding: "40px"
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "5px" }}>
        AURA
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "40px" }}>
        A Blaq House Entertainment Company
      </p>

      <div
        style={{
          border: "1px solid #333",
          borderRadius: "12px",
          padding: "30px",
          background: "#0a0a0a"
        }}
      >
        <h2>AURA Studio</h2>

        <p>Virtual Influencer Operating System initializing…</p>

        <ul>
          <li>✔ Persona Engine</li>
          <li>✔ ARIA AI Assistant</li>
          <li>✔ Campaign Marketplace</li>
          <li>✔ Licensing Platform</li>
          <li>✔ Creator Studio</li>
        </ul>

        <p style={{ marginTop: "20px", opacity: 0.7 }}>
          System status: ONLINE
        </p>
      </div>
    </main>
  );
}
