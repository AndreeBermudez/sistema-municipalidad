import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../core/context"; 

export const useAuthMutate = () => {
	
    const navigate = useNavigate()
	const {loginNotification} = useToast()

	return useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			const {token, ...user} = data
			localStorage.setItem('authToken', token);
			localStorage.setItem('user', JSON.stringify(user));
            navigate('/admin/')
            loginNotification()
		},
	});
};