export class CreateOrderDto {
  holderData: {
    id: string;
    name: string;
    email: string;
    tierId: string;
  }[];
}
