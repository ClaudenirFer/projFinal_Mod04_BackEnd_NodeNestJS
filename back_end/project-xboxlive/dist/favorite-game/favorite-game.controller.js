"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteGameController = void 0;
const common_1 = require("@nestjs/common");
const favorite_game_service_1 = require("./favorite-game.service");
const create_favorite_game_dto_1 = require("./dto/create-favorite-game.dto");
const update_favorite_game_dto_1 = require("./dto/update-favorite-game.dto");
let FavoriteGameController = class FavoriteGameController {
    constructor(favoriteGameService) {
        this.favoriteGameService = favoriteGameService;
    }
    create(createFavoriteGameDto) {
        return this.favoriteGameService.create(createFavoriteGameDto);
    }
    findAll() {
        return this.favoriteGameService.findAll();
    }
    findOne(id) {
        return this.favoriteGameService.findOne(+id);
    }
    update(id, updateFavoriteGameDto) {
        return this.favoriteGameService.update(+id, updateFavoriteGameDto);
    }
    remove(id) {
        return this.favoriteGameService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_favorite_game_dto_1.CreateFavoriteGameDto]),
    __metadata("design:returntype", void 0)
], FavoriteGameController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavoriteGameController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavoriteGameController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_favorite_game_dto_1.UpdateFavoriteGameDto]),
    __metadata("design:returntype", void 0)
], FavoriteGameController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavoriteGameController.prototype, "remove", null);
FavoriteGameController = __decorate([
    (0, common_1.Controller)('favorite-game'),
    __metadata("design:paramtypes", [favorite_game_service_1.FavoriteGameService])
], FavoriteGameController);
exports.FavoriteGameController = FavoriteGameController;
//# sourceMappingURL=favorite-game.controller.js.map