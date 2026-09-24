import type { MenuItem as Item } from '@/data/types';

export default function MenuItem({ item }: { item: Item }) {
  return (
    <article className="menu-item">
      <div className="menu-item-top">
        {item.itemCode && <span className="menu-item-code">{item.itemCode}</span>}
        <h3 className="menu-item-name" style={{ margin: 0 }}>{item.itemName}</h3>
        <span className="menu-item-dots" aria-hidden="true" />
        {item.price && <span className="menu-item-price">${item.price}</span>}
      </div>
      {item.description && <p className="menu-item-desc">{item.description}</p>}
      {item.options.length > 0 && (
        <div className="menu-item-options">
          {item.options.map((o, i) => (
            <span className="menu-option" key={i}>
              {o.label}{o.price ? ` · $${o.price}` : ''}
            </span>
          ))}
        </div>
      )}
      {item.notes.map((n, i) => <p className="menu-note" key={i}>{n}</p>)}
    </article>
  );
}
