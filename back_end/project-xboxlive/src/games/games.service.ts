import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesService {
    
    public games = [
        
        {
            id: 1,
            texto: "Primeiro"
        },

        {
            id: 2,
            texto: "Segundo"
        }
        
    ]

    
    findAll() {
        return this.games
    }

    findById(id: number) {
        return this.games.find(game => game.id === id)
    }
}
