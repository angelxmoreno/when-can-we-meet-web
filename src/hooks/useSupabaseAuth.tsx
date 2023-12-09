import supabase from '@app/services/supabase';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const useSupabaseAuth = () => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data, error }) => {
            setSession(data.session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, authSession) => {
            setSession(authSession);
            console.log({ authSession });
        });

        return () => subscription.unsubscribe();
    }, []);

    const logOut = () => supabase.auth.signOut();

    const loginWithDiscord = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'discord',
        });
        return { user: data, error };
    };
    return { isLoggedIn: session !== null, session, logOut, loginWithDiscord };
};
export default useSupabaseAuth;
