import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gjkjrnllsviegbbrjfui.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqa2pybmxsc3ZpZWdiYnJqZnVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1MDI2NDAsImV4cCI6MjA0MjA3ODY0MH0.wO9psEpivg0KoceBBIGARdzvG7ksJurq5pDu9ZG4Wfo";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
