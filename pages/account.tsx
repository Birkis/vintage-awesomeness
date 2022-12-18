
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import {Account} from '../components'

function Profile(){
    const session = useSession()
    const supabase = useSupabaseClient()

    return (
        <Account session = {session}/>
    )
}

export default Profile