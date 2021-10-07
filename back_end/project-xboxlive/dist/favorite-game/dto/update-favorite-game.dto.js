"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFavoriteGameDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_favorite_game_dto_1 = require("./create-favorite-game.dto");
class UpdateFavoriteGameDto extends (0, mapped_types_1.PartialType)(create_favorite_game_dto_1.CreateFavoriteGameDto) {
}
exports.UpdateFavoriteGameDto = UpdateFavoriteGameDto;
//# sourceMappingURL=update-favorite-game.dto.js.map