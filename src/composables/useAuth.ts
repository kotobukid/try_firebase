import {computed, inject, ref, type Ref} from "vue";
import type {User} from "firebase/auth";
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut as signOutWithProvider} from "firebase/auth";


export const useAuth = () => {
    const auth = inject('auth');
    const authenticatedUser: Ref<User> = ref(null);

    onAuthStateChanged(auth, user => {
        if (user) {
            authenticatedUser.value = user;
        } else {
            authenticatedUser.value = null;
        }
    });

    const login_processing = ref(false);

    const signInWithGoogle = async () => {
        login_processing.value = true;
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);

            const user = result.user;
            const firebaseIdToken = await user.getIdToken();

            authenticatedUser.value = result.user;
            login_processing.value = false;
        } catch (error) {
            console.error("Authentication Error: ", error);
            login_processing.value = false;
        }
    };

    const user = computed(() => authenticatedUser.value);

    const signOut = async () => {
        if (authenticatedUser.value) {
            await signOutWithProvider(auth);
        } else {
            alert('ログインしていません');
        }
    }

    return {
        user,
        signInWithGoogle,
        signOut,
        login_processing
    }
}