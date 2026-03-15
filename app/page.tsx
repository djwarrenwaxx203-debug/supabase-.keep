"use client"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase/client"

export default function Page() {
  const [personas, setPersonas] = useState<any[]>([])

  useEffect(() => {
    const loadPersonas = async () => {
      const { data } = await supabase.from("personas").select("*")
      if (data) setPersonas(data)
    }

    loadPersonas()
  }, [])

  return (
    <div style={{
      background:"#000",
      minHeight:"100vh",
      color:"#e8e0d0",
      fontFamily:"sans-serif",
      padding:"40px"
    }}>
      <h1>AURA</h1>
      <p>A Blaq House Entertainment Company</p>

      <h2>Creators</h2>

      {personas.map((p) => (
        <div key={p.id} style={{marginBottom:"20px"}}>
          <strong>{p.name}</strong><br/>
          {p.persona_type} — {p.city}
        </div>
      ))}
    </div>
  )
}
