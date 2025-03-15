import { useMutation } from "@tanstack/react-query";
import { createCodigoZonificacion } from "../api"; 

export const useZonificacionMutate = () => {
	return useMutation({
		mutationFn: createCodigoZonificacion
	});
};