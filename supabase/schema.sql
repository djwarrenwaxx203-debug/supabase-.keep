create table personas (
  id uuid primary key default gen_random_uuid(),
  name text,
  persona_type text,
  age int,
  city text,
  country text,
  created_at timestamp default now()
);

create table posts (
  id uuid primary key default gen_random_uuid(),
  persona_id uuid references personas(id),
  caption text,
  media_url text,
  platform text,
  created_at timestamp default now()
);

create table campaigns (
  id uuid primary key default gen_random_uuid(),
  brand_name text,
  campaign_name text,
  budget numeric,
  created_at timestamp default now()
);

create table revenue (
  id uuid primary key default gen_random_uuid(),
  persona_id uuid references personas(id),
  source text,
  amount numeric,
  created_at timestamp default now()
);
