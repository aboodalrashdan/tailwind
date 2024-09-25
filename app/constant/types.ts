export interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    wax: string; 
    fragrance: string; 
    warrantyInformation: string;
    dimensions: Dimensions;
    weight: string;
    rating: number;
};
  