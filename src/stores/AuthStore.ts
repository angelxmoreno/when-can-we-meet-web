import { Store } from 'pullstate';

type AuthUser = {
    uid: string;
    email: string;
};
export interface IUser {
    id: string;
    email: string;
}

interface IUserStore {
    isLoggedIn: boolean;
    user?: IUser;
}

const UserStore = new Store<IUserStore>({
    isLoggedIn: false,
    user: undefined,
});

export const userFromAuthUser = (authUser: AuthUser): IUser => ({
    id: authUser.uid,
    email: authUser.email!,
});

export const updateAuthStore = (authUser?: AuthUser | null) => {
    const user = authUser ? userFromAuthUser(authUser) : undefined;
    UserStore.update(s => {
        s.user = user;
        s.isLoggedIn = !!user;
    });
};
export default UserStore;
