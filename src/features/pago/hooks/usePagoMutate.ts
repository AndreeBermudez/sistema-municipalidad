import { useMutation } from "@tanstack/react-query";
import { createCodigoPago } from "../api"; 

export const usePagoMutate = () => {
	return useMutation({
		mutationFn: (payload : {codigoPago: string, ciudadanoId : number})=> 
            createCodigoPago(payload.codigoPago, payload.ciudadanoId)
	});
};