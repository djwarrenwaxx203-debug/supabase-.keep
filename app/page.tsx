"use client";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main style={{
      background:"#000",
      minHeight:"100vh",
      color:"#e8e0d0",
      fontFamily:"sans-serif",
      padding:"40px"
    }}>
      <h1>AURA</h1>
      <p>A Blaq House Entertainment Company</p>

      <div style={{
        background:"#0a0a0a",
        border:"1px solid #333",
        borderRadius:"10px",
        padding:"30px",
        marginTop:"20px"
      }}>
        <h2>Agency Dashboard</h2>
        <p>AURA Studio initializing...</p>
        <p>Persona engine loading...</p>
      </div>
    </main>
  );
}
