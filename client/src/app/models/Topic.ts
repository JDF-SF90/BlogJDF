export interface Topic {
    topic_id?: number;
    name?: string;
    contenido?: string;
    categorie_id?: number;
    tiempo?: number;
    created_datetime?: Date;
    modified_datetime?: Date;
    link?: string;
    picture?: string;
    visitas?: number;
    likes?: number;
    isActive: number;
}
