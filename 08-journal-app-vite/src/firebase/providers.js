
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const { displayName, email, photoURL, uid } = user;

        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid

        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }

    }
}

export const registerUserWithEmailPassword = async ( { email, password, displayName } ) => {
    
    try {
        console.log({ email, password, displayName })
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        
        await updateProfile( FirebaseAuth.currentUser, { displayName } )

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

        
    } catch (error) {
        console.log(error)
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
        
    }

}