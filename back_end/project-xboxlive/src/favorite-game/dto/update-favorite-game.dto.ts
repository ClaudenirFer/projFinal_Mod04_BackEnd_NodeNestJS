import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoriteGameDto } from './create-favorite-game.dto';

export class UpdateFavoriteGameDto extends PartialType(CreateFavoriteGameDto) {}
