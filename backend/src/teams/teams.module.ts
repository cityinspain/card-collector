import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { CoreModule } from 'src/core/core.module';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService],
  imports: [CoreModule],
})
export class TeamsModule {}
