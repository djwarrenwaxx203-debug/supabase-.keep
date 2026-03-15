import { supabase } from "@/lib/supabase/client"

export default async function Home() {

  const { data: personas } = await supabase
    .from("personas")
    .select("*")

  return (
    <main style={{padding:"40px"}}>
      <h1>AURA Personas</h1>

      {personas?.map((p:any) => (
        <div key={p.id}>
          {p.name} — {p.persona_type}
        </div>
      ))}

    </main>
  )
}
