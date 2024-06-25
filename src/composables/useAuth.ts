import {computed, inject, ref, type Ref} from "vue";
import type {User} from "firebase/auth";
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from "firebase/auth";


export const useAuth = () => {
    const auth = inject('auth');
    const authenticatedUser: Ref<User> = ref(null);

    onAuthStateChanged(auth, user => {
        if (user) {
            authenticatedUser.value = user;
        }
    });

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);

            const user = result.user;
            const firebaseIdToken = await user.getIdToken();

            authenticatedUser.value = result.user;
        } catch (error) {
            console.error("Authentication Error: ", error);
        }
    };

    const user = computed(() => authenticatedUser.value);

    return {
        user,
        signInWithGoogle
    }
}