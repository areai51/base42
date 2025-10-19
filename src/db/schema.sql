-- Users table for Google OAuth logins
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  google_id text unique not null,
  email text not null,
  name text,
  picture text,
  created_at timestamp with time zone default now(),
  last_login_at timestamp with time zone default now()
);

-- For Neon/Postgres, ensure pgcrypto or uuid-ossp equivalent is available.
-- If gen_random_uuid() is unavailable, use: id uuid primary key default uuid_generate_v4()

