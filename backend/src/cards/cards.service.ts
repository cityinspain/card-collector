import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/services/prisma.service';

@Injectable()
export class CardsService {
  constructor(private prismaService: PrismaService) {}

  async getCards() {
    return await this.prismaService.card.findMany({
      include: {
        team: true,
        player: true,
      },
    });
  }

  async createCard(data: Prisma.CardCreateInput) {
    console.log(data);
    return await this.prismaService.card.create({ data });
  }

  async updateCard(id: string, data: Prisma.CardUpdateInput) {
    return await this.prismaService.card.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }

  async getCardById(id: string) {
    return await this.prismaService.card.findUnique({
      where: {
        id: Number(id),
      },
    });
  }
}
