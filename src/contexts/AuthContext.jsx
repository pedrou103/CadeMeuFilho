import { createContext, useState, useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [isUserLoading, setIsUserLoading] = useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '169583151462-s42b1qaptp0huqiv8t0jthaahcbvdt6l.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    })

    async function signWithGoogle(access_token) {
        console.log(`Token de autenticação: ${access_token}`)
    }

    async function signIn() {
        try {
            setIsUserLoading(true)
            await promptAsync();

        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setIsUserLoading(false)
        }
    }

    useEffect(() => {
        if (response?.type === 'success' && response.authentication?.accessToken) {
            signWithGoogle(response.authentication.accessToken)
        }
    }, [response])

    return (
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
