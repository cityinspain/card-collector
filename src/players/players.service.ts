import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/services/prisma.service';

@Injectable()
export class PlayersService {
  constructor(private prismaService: PrismaService) {}

  async getPlayers() {
    return await this.prismaService.player.findMany();
  }

  async getPlayerById(id: string) {
    return await this.prismaService.player.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async getCardsByPlayerId(playerId: string) {
    return await this.prismaService.card.findMany({
      where: {
        playerId: Number(playerId),
      },
    });
  }

  async createPlayer(data: Prisma.PlayerCreateInput) {
    return await this.prismaService.player.create({ data });
  }
}
