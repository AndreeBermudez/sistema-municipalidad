import { Ciudadano } from "../../ciudadanos/models/types";

export interface CodigoZonificacion  {
    estado: string;
    numeroCodigo: string;
    ciudadanoDto: Partial<Ciudadano>;
} 