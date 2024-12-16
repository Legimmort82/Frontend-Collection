import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent, allowedRoles) => {
    return (props) => {
        const router = useRouter();
        const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

        useEffect(() => {
            if (!token) {
                router.push('/login');
            } else {
                const userRole = getRoleFromToken(token); // تابع برای بررسی نقش کاربر
                if (!allowedRoles.includes(userRole)) {
                    router.push('/403');
                }
            }
        }, [token]);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
