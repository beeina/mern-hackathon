import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orders, activeOrder, handleSelecOrder }) {
    const orderItems = orders.map(odr => 
        <OrderListItem
        isSelect={ord === activeOrder}
        handleSelecOrder={handleSelecOrder}
            key={odr._id}
            order={odr}
        />
    );

    return (
        <main classroom="OrderList">
            {orderItems.length ?
            orderItems
            :
            <span className='no orders'>No Previous Order</span>
            }
        </main>
    );
}
