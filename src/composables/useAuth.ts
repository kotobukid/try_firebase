import {computed, inject, ref, type Ref} from "vue";
import type {User, Auth} from "firebase/auth";
import {
    GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut as signOutWithProvider,
    type UserCredential
} from "firebase/auth";


export const useAuth = () => {
    const auth = inject('auth') as Auth;
    const authenticatedUser: Ref<User | null> = ref(null);

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
            const provider: GoogleAuthProvider = new GoogleAuthProvider();
            const result: UserCredential = await signInWithPopup(auth, provider);

            const user: User | null = result.user;
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
            await signOutWithProvider(auth as Auth);
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