import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/services/prisma.service';
import { CreateSetDto } from './dto/create-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';

@Injectable()
export class SetsService {
  constructor(private prismaService: PrismaService) {}

  async create(createSetDto: CreateSetDto) {
    return await this.prismaService.set.create({
      data: {
        ...createSetDto,
      },
    });
  }

  async findAll() {
    return await this.prismaService.set.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.set.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateSetDto: UpdateSetDto) {
    return await this.prismaService.set.update({
      where: {
        id,
      },
      data: {
        ...updateSetDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.set.delete({
      where: {
        id,
      },
    });
  }
}
