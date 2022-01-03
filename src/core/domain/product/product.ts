import { Pageable } from "../utils/pageable";

export interface ProductResponse {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
}

export interface ProductCreateRequest {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
}

export interface ProductUpdateRequest {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
}

export interface ProductListRequest {
    pageable: Pageable;
}

export interface ProductFindByIdRequest {
    id: string;
}