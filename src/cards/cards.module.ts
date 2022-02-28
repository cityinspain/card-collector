import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { CoreModule } from 'src/core/core.module';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';

@Module({
  imports: [CoreModule],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
