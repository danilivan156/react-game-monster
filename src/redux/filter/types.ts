export enum sortPropertyEnum {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price'
}

export type Sort = {
    name: string,
    sortProperty: sortPropertyEnum
}

export interface FilterSliceState {
    categoryId: number,
    currentPage: number,
    sort: Sort
}