import { createClient } from '@supabase/supabase-js'

const REACT_APP_SUPABASE_URL = 'https://qnfjwotbmzyjskqprqvr.supabase.co'
const REACT_APP_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZmp3b3RibXp5anNrcXBycXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NTA2MTEsImV4cCI6MjAxMzEyNjYxMX0.ZP-rg_WnvFBSZc8dw2cgPqWXl8sHH9ZCij6MZPY-kBM'

export const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_ANON_KEY)
