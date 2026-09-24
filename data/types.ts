export type MenuGroup = 'main' | 'lunch' | 'drinks' | 'kids' | 'a-la-carte';
export type MenuOption = { label: string; price: string | null };
export type MenuItem = {
  id: string;
  section: string;
  itemCode: string;
  itemName: string;
  description: string;
  price: string | null;
  options: MenuOption[];
  notes: string[];
  sourceImage: string;
  confidence: number;
  reviewFields: string[];
};
export type MenuSection = {
  id: string;
  name: string;
  group: MenuGroup;
  introduction?: string;
  notes?: string[];
  items: MenuItem[];
};
export function item(section: string, sourceImage: string) {
  return (itemCode: string, itemName: string, description: string, price: string | null, extra: Partial<Pick<MenuItem, 'options' | 'notes' | 'confidence' | 'reviewFields'>> = {}): MenuItem => ({
    id: `${section}-${itemCode || itemName}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
    section, itemCode, itemName, description, price, options: [], notes: [], sourceImage, confidence: 0.97, reviewFields: [], ...extra,
  });
}
export const option = (label: string, price: string | null): MenuOption => ({ label, price });
