import { useMutation } from "@tanstack/react-query";
import { createCiudadano } from "../api/createCiudadano";

export const useCiudadanoMutate = () => {
	return useMutation({
		mutationFn: createCiudadano,
	});
};