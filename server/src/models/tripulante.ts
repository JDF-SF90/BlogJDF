export interface Tripulante {
    tripulante_id?: number; 
    name?: string;
    apellido?: string;
    picture?: string;
    provider_id?: string;
	mail?: string;
    pass?: string;
    is_active?: number;
    created_datetime?: Date;
    created_userId?: number;
    modified_datetime?: Date;
    modified_userId?: number;
}