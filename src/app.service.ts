import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

export interface CardItem {
  id: number;
  url: string;
  title: string;
}


@Injectable()
export class AppService {
  private cardCache: CardItem[] = [];

  private readonly dataPath = path.join(process.cwd(), 'data', 'cards.json');

  async getRandomCard(): Promise<CardItem> {
    try {
      const rawData = await fs.readFile(this.dataPath, 'utf-8');
      const dataset: CardItem[] = JSON.parse(rawData);

      const randomIndex = Math.floor(Math.random() * dataset.length);
      return dataset[randomIndex];
    } catch (error) {
      throw new InternalServerErrorException('Can not read dataset', error)
    }
  }
}
