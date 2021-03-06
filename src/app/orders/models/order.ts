import { OrderItem } from './order-items';

export class Order {
    id: number;
    fullName: string;
    email: string;
    phones: string;
    isSelfDelivery: boolean;
    address: string;
    items: Array<OrderItem>;
}
