import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  getCards() {
    return this.cardsService.getCards();
  }

  @Get(':id')
  getCardById(@Param('id') id: string) {
    return this.cardsService.getCardById(id);
  }

  @Post()
  createCard(@Body() data: Prisma.CardCreateInput) {
    console.log(data);
    return this.cardsService.createCard(data);
  }

  @Patch(':id')
  updateCard(@Param('id') id: string, @Body() data: Prisma.CardUpdateInput) {
    return this.cardsService.updateCard(id, data);
  }
}
