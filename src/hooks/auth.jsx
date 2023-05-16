import { createContext, useContext } from "react";
import { api } from '../'

const AuthContext = createContext({});

function AuthProvider({ children }) {
    async function SignIn({ email, password}) {

    }

    return (
        <AuthContext.Provider value={{ name: 'Luan', email: 'luan@email.com' }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext); 

    return context
}

export { AuthProvider, useAuth };