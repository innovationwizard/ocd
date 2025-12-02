-- Enable Row Level Security (RLS) on all tables
-- This prevents unauthorized access via PostgREST while allowing Prisma (service_role) to work normally

-- Enable RLS on User table
ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service_role full access (used by Prisma)
CREATE POLICY "user_service_role_all" ON "User"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy: Deny anon and authenticated roles (prevent PostgREST access)
CREATE POLICY "user_deny_anon_auth" ON "User"
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Enable RLS on Item table
ALTER TABLE "Item" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "item_service_role_all" ON "Item"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "item_deny_anon_auth" ON "Item"
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Enable RLS on StatusChange table
ALTER TABLE "StatusChange" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "statuschange_service_role_all" ON "StatusChange"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "statuschange_deny_anon_auth" ON "StatusChange"
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Enable RLS on Decision table
ALTER TABLE "Decision" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "decision_service_role_all" ON "Decision"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "decision_deny_anon_auth" ON "Decision"
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Enable RLS on AIAnalysis table
ALTER TABLE "AIAnalysis" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "aianalysis_service_role_all" ON "AIAnalysis"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "aianalysis_deny_anon_auth" ON "AIAnalysis"
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Enable RLS on Rule table
ALTER TABLE "Rule" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "rule_service_role_all" ON "Rule"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "rule_deny_anon_auth" ON "Rule"
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Enable RLS on SystemMessage table
ALTER TABLE "SystemMessage" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "systemmessage_service_role_all" ON "SystemMessage"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "systemmessage_deny_anon_auth" ON "SystemMessage"
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Enable RLS on Opus table
ALTER TABLE "Opus" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "opus_service_role_all" ON "Opus"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "opus_deny_anon_auth" ON "Opus"
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Enable RLS on OpusTypeConfig table
ALTER TABLE "OpusTypeConfig" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "opustypeconfig_service_role_all" ON "OpusTypeConfig"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "opustypeconfig_deny_anon_auth" ON "OpusTypeConfig"
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Enable RLS on _prisma_migrations table (Prisma system table)
ALTER TABLE "_prisma_migrations" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "prisma_migrations_service_role_all" ON "_prisma_migrations"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "prisma_migrations_deny_anon_auth" ON "_prisma_migrations"
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);
