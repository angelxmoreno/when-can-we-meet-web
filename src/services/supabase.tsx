import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    String(process.env.REACT_APP_SUPABASE_URL),
    String(process.env.REACT_APP_SUPABASE_KEY),
);

export default supabase;
