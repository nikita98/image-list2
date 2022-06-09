export interface IImage {
    id: string;
    download_url: string;
    author?: string;
    favorite?: boolean;
    width: string;
    height: string;
}

export interface IPagination {
    totalPages: number;
    currentPage: number;
    favoriteCurrentPage: number;
}
