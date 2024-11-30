import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
} from '@aws-sdk/client-s3';
import { ConfigurationService } from 'src/configuration/configuration.service';
import { PutAssetDto } from './dto/put-asset.dto';

@Injectable()
export class AssetsService {
  private readonly s3Client: S3Client;

  constructor(private readonly config: ConfigurationService) {
    this.s3Client = new S3Client({
      credentials: {
        accessKeyId: config.ASSET_REPOSITORY_ACCESS_KEY,
        secretAccessKey: config.ASSET_REPOSITORY_SECRET_ACCESS_KEY,
      },
      region: config.ASSET_REPOSITORY_REGION,
    });
  }

  async save(asset: PutAssetDto): Promise<string> {
    const params: PutObjectCommandInput = {
      Bucket: this.config.ASSET_REPOSITORY_NAME,
      Key: asset.name,
      Body: asset.buffer,
      ContentType: asset.contentType,
    };

    const command = new PutObjectCommand(params);

    await this.s3Client.send(command);

    return asset.name;
  }
}
