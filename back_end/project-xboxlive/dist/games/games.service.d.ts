export declare class GamesService {
    games: {
        id: number;
        texto: string;
    }[];
    findAll(): {
        id: number;
        texto: string;
    }[];
    findById(id: number): {
        id: number;
        texto: string;
    };
}
