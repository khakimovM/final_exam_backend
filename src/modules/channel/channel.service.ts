import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { PrismaService } from 'src/core/database/prisma.service';

@Injectable()
export class ChannelService {
  constructor(private db: PrismaService) {}
  async updateChannel(
    banner: string,
    channelData: UpdateChannelDto,
    id: string,
  ) {
    const findChannel = await this.db.prisma.users.findFirst({ where: { id } });
    if (!findChannel) throw new NotFoundException('channel not found');
    const updatedChannel = await this.db.prisma.users.update({
      where: { id },
      data: { ...channelData, channelBanner: banner },
    });
    const { password, ...channelInfo } = updatedChannel;
    return channelInfo;
  }
}
