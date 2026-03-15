import { createClient } from "/lib/supabase/client"

export default async function Page() {

  const supabase = createClient()

  const { data } = await supabase
    .from("personas")
    .select("*")

  return (
    <main>
      <h1>AURA Creators</h1>

      {data?.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>{p.persona_type}</p>
          <p>{p.city}, {p.country}</p>
        </div>
      ))}
    </main>
  )
}
