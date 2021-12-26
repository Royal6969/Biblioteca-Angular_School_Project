export interface Book {
    $key?: string;
    author?: string;
    title?: string;
    price?: number;
    dateadded?: Date;
    // isRead?:boolean;
    dateread?: Date;
    description?: string;
    rate?: number;
    imageUrl?: string;
    imagePortada?: string;
    imageContra?: string;
    imageLomo?: string;
}

// export interface Book {
//     id: string,
//     author: string,
//     dateadded: string,
//     dateread: string,
//     description: string,
//     imageUrl: string,
//     price: number,
//     rate: number,
//     title: string
// }
