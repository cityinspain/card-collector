import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { CoreModule } from 'src/core/core.module';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

@Module({
  imports: [CoreModule],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
