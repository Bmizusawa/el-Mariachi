import { item, option, type MenuSection } from './types.ts';
const k = item('Kids Meals', 'image7.jpeg');
export const kids: MenuSection[] = [{
  id: 'kids-meals', name: 'Kids Meals', group: 'kids', introduction: 'For children 12 and under. Drink included. Add $2.00 for adult portion.',
  items: [
    k('PNT', 'Soft or Hard Taco', 'Choice of beef or chicken, served with fries or rice and beans.', '7.75'),
    k('PNB', 'Burrito', 'Choice of beef or chicken, served with fries or rice and beans.', '7.75'),
    k('PNQ', 'Quesadillita', 'Choice of beef or chicken, served with fries or rice and beans.', '7.75'),
    k('PNE', 'Enchiladita', 'Choice of beef or chicken, served with fries or rice and beans.', '7.75'),
    k('PNCT', 'Chicken Tenders', 'Served with fries and your choice of honey mustard or ranch dressing.', '7.75'),
    k('PNM', 'Mac & Cheese', 'Served with toasted bread.', '7.75'),
  ].map(entry => ({ ...entry, options: [option('Adult portion', '9.75')] })),
}];
