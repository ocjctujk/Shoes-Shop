
export class Product{
    constructor(
        public id: string,
        public name: string,
        public manufacturer: string,
        public price: number,
        public discount: number,
        public colors: string[],
        public sizes: string[],
        public images: string[]
    ){}
}