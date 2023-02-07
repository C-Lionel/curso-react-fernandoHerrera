
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, getAuth, signOut  } from 'firebase/auth';
import { logout } from '../store/auth';
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
        // console.log({ email, password, displayName })
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


export const loginWithEmalPassword = async ( { email, password } ) => {

    try {

        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName

        }
        
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
        
    }
}

export const logoutFirebase = () => {
    return async(dispatch) => {
        const auth = getAuth();
        await signOut(auth);
        dispatch(logout());
    }
}

