import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider"; 

const useRole = () => {
    const { user, loading } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [isRoleLoading, setIsRoleLoading] = useState(true);

    useEffect(() => {
        
        if (!loading && user?.email) {
            setIsRoleLoading(true);
            fetch(`https://bookcourier.vercel.app/users/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data?.role);
                    setIsRoleLoading(false);
                })
                .catch(err => {
                    console.error("Failed to fetch role", err);
                    setIsRoleLoading(false);
                });
        } else {
            setIsRoleLoading(false);
        }
    }, [user, loading]);

    return [role, isRoleLoading];
};

export default useRole;