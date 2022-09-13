export interface ProductModel { 
    id: number;
    title: string;
    price: number;
    description: string;
    category: {id?: number, name?: string, image?: string};
    images: string[];


  }
  export interface CartProduct { 
    id?: number;
    title?: string;
    price?: number;
    image?: string;
    quantity?: number;
    total?: number;

  }
