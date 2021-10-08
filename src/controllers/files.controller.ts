import { Controller, Param, Body, Get, Post, HttpCode } from 'routing-controllers';
import fileService from '@services/files.service';

@Controller()
export class FilesController {
  public fileService = new fileService();

  @Get('/save/:id')
  async getFileById(@Param('id') id: number | string) {
    const data = await this.fileService.getFileById(id);
    const parseData = JSON.parse(data.toString());
    return { data: parseData, message: `Saved Data for ${id}` };
  }

  @Post('/save/:id')
  @HttpCode(201)
  async saveFileById(@Param('id') id: number | string, @Body() body) {
    const data = await this.fileService.saveFileById(id, body);
    return { data, message: 'Data save' };
  }
}
