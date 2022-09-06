export type Game = {
    id: string, title: string, price: number, imageUrl: string 
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERORR = 'error'
}

export interface CatalogGameSliceState {
    games: Game[],
    status: 'loading' | 'success' | 'error'
}

export type SearchGameParams = {
    category: string, search: string, sortBy: string, order: string, currentPage: string
}