export interface Pageable {
    page: number;
    size: number;
    sort?: Sort[] | null;
}

export interface Sort {
    direction: string;
    property: string;
}

export class Page<T> {
    content: T[];
    pageInfo: PageInfo;

    constructor(content: T[], pageInfo: PageInfo) {
        this.content = content;
        this.pageInfo = pageInfo;
    }
}

export interface PageInfo {
    totalPages: number;
    totalSize: number;
    page: number;
    size: number;
    offset: number;
}