import { useMutation } from "@tanstack/react-query"
import { getCiudadanoByDni } from "../api"; 

export const useDniMutate = () => {
  return useMutation({
    mutationFn: getCiudadanoByDni,
    // onSuccess,
    // onError
  });
};