export class Admin {
    movieId:number;
    movieName:string;
    language:string;
    amount:number;
    description:string;
    image:string;

    constructor(movieId:number,movieName: string,language: string,amount: number,description: string,image:string){
        this.movieId=movieId;
        this.movieName=movieName;
        this.language=language;
        this.amount=amount;
        this.description=description;
        this.image=image;
    }
    
}