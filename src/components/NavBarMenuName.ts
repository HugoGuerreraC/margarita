export interface NavBarMenuNameProps {
    name: string;
    path: string;
}

export const NavBarMenuName : NavBarMenuNameProps[] = [
    { name: 'Accueil', path: '/' },
    { name: 'A propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Basics', path: '/basics' },
]