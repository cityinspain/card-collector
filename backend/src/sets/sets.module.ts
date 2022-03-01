import { Module } from '@nestjs/common';
import { SetsService } from './sets.service';
import { SetsController } from './sets.controller';
import { CoreModule } from 'src/core/core.module';

@Module({
  controllers: [SetsController],
  providers: [SetsService],
  imports: [CoreModule],
})
export class SetsModule {}
