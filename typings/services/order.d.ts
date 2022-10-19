namespace Service {
    interface Item {
        name: string;
        stock: number;
        orderId: string;
        price: number;
    }
    interface OrderListReq {
        currentPage: number;
        pageSize: number;
    }
    interface OrderListRes {
        orderList: Array<Item>;
    }
    interface OrderDetailReq {
        orderId: string;
    }
    interface OrderDetailRes extends Item { }

    type TableDataRecord = Record<"date" | "name" | "address", string>
    interface TableDataRes {
        tableList: TableDataRecord[];
    }
}
