import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dzjiwpmsjmqskikwxfzv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6aml3cG1zam1xc2tpa3d4Znp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NTkzMjcsImV4cCI6MjA5MjUzNTMyN30.qOi7XgLthCzakUaTLPJ_pW08R6vDaBhjpij9WdH2nbY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
