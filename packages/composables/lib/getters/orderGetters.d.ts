import { UserOrderGetters } from '@vue-storefront/core';
import { Order, OrderItem } from '../types';
export declare const getDate: (order: any) => string;
export declare const getId: (order: any) => string;
export declare const getStatus: (order: any) => string;
export declare const getPaymentStatus: (order: any) => string;
export declare const getPrice: (order: any) => number | null;
export declare const getSubtotalPrice: (order: any) => number | null;
export declare const getTaxPrice: (order: any) => number | null;
export declare const getItems: (order: any) => any[];
export declare const getItemSku: (item: any) => string;
export declare const getItemName: (item: any) => string;
export declare const getItemId: (item: any) => string;
export declare const getItemSlug: (item: any) => string;
export declare const getItemQty: (item: any) => number;
export declare const getItemPrice: (item: any) => number;
export declare const getFormattedPrice: (price: number) => string;
declare const orderGetters: UserOrderGetters<Order, OrderItem>;
export default orderGetters;
