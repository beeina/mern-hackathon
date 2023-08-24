export default function OrderListItem({ order, isSelect, handleSelectOrder }) {
    return (
        <div className={`OrderListItem${isSelect ? 'select' : ''}`} onClick={() => handleSelectOrder(order)}>
          <div>Order Id: {order.orderId}</div>
          <div>{new Date(order.updatedAt).toLocaleDateString()}</div>
          <span>${order.orderTotal.toFixed(2)}</span>
          <div>{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
          </div>
        );
}



