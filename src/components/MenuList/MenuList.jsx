import './MenuList.css';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleAddToOrder }) {
  const items = menuItems.map(item =>
    <MenuListItem
    handleAddToOrder={handleAddToOrder}
      key={item._id}
      menuItem={item}
    />
  );
  return (
    <main className="MenuList">
      {items}
    </main>
  );
}