import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/services/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {
  constructor(private prismaService: PrismaService) {}

  async create(createTeamDto: CreateTeamDto) {
    return await this.prismaService.team.create({
      data: {
        ...createTeamDto,
      },
    });
  }

  async findAll() {
    return await this.prismaService.team.findMany();
    return `This action returns all teams`;
  }

  async findOne(id: number) {
    return await this.prismaService.team.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    return await this.prismaService.team.update({
      where: {
        id,
      },
      data: {
        ...updateTeamDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.team.delete({
      where: {
        id,
      },
    });
  }
}
