/*
# Create demo_requests table

1. New Tables
- `demo_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person requesting the demo
  - `company` (text, not null) — company name
  - `email` (text, not null) — work email address
  - `job_title` (text) — optional job title
  - `industry` (text) — optional industry (automotive, aerospace, industrial manufacturing, etc.)
  - `area_of_interest` (text) — what they want to learn about (AI Supervisor, Process Monitoring, etc.)
  - `problem_description` (text) — brief description of the manufacturing workflow/problem
  - `status` (text, default 'new') — internal tracking status
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `demo_requests`.
- Allow anon + authenticated to INSERT (public demo request form, no sign-in required).
- No SELECT/UPDATE/DELETE for anon — only service role can read and manage requests.
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  job_title text,
  industry text,
  area_of_interest text,
  problem_description text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_demo_requests" ON demo_requests;
CREATE POLICY "anon_insert_demo_requests"
ON demo_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);
