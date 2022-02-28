import { Module } from '@nestjs/common';
import { CardsModule } from './cards/cards.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [CardsModule, PlayersModule],
  controllers: [],
})
export class AppModule {}
