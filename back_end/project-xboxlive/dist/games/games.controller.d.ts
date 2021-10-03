import { GamesService } from './games.service';
export declare class GamesController {
    private gamesService;
    constructor(gamesService: GamesService);
    findAll(): {
        id: number;
        texto: string;
    }[];
    getById(parans: any): {
        id: number;
        texto: string;
    };
}
