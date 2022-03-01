import { Module } from '@nestjs/common';
import { CardsModule } from './cards/cards.module';
import { PlayersModule } from './players/players.module';
import { SetsModule } from './sets/sets.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [CardsModule, PlayersModule, SetsModule, TeamsModule],
  controllers: [],
})
export class AppModule {}
