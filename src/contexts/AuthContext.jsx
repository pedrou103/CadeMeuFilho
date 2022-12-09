import { createContext, useState, useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { z } from "zod";

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
        try {
            setIsUserLoading(true);

            const response = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            })

            const userData = await response.json();

            const userInfoSchema = z.object({
                id: z.string(),
                email: z.string().email(),
                name: z.string(),
                picture: z.string().url(),
            });
            
            const userTeste = userInfoSchema.parse(userData);
            
            setUser(userTeste);
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            setIsUserLoading(false);
        }
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
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}
