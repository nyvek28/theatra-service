import { PutAssetDto } from 'src/assets/dto/put-asset.dto';

export class CreateOrderDto {
  holderData: {
    id: string;
    name: string;
    email: string;
    tierId: string;
  }[];
  voucherImage: PutAssetDto;
}
