import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  getPlayers() {
    return this.playersService.getPlayers();
  }

  @Post()
  createPlayer(@Body() data: Prisma.PlayerCreateInput) {
    return this.playersService.createPlayer(data);
  }

  @Get(':id')
  getPlayerById(@Param('id') id: string) {
    return this.playersService.getPlayerById(id);
  }

  @Get(':id/cards')
  getPlayerCards(@Param('id') playerId: string) {
    return this.playersService.getCardsByPlayerId(playerId);
  }
  //   @Get('cards')
  //   getCards() {
  //     return this.appService.getCards();
  //   }

  //   @Post('cards')
  //   createCard() {
  //     return this.appService.createCard();
  //   }

  //   @Post('players')
  //   createPlayer() {
  //     return this.appService.createPlayer();
  //   }

  //   @Get('players')
  //   getPlayers() {
  //     return this.appService.getPlayers();
  //   }
}
