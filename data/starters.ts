import { item, option, type MenuSection } from './types.ts';
const a = item('Appetizers', 'image1.jpeg');
const n = item('Nachos', 'image1.jpeg');
const q = item('Quesadillas', 'image1.jpeg');
const s = item('Salads', 'image1.jpeg');
const sp = item('Specials', 'image1.jpeg');
export const starters: MenuSection[] = [
  { id: 'appetizers', name: 'Appetizers', group: 'main', items: [
    a('', 'Guacamole Dip', '', null, { options: [option('Small', '6.25'), option('Medium', '8.99'), option('Large · 16 oz', '16.99')] }),
    a('', 'Cheese Dip', '', null, { options: [option('Small', '5.50'), option('Medium', '7.99'), option('Large · 16 oz', '14.99')] }),
    a('', 'Bean Dip', '', null, { options: [option('Small', '5.75'), option('Large · 16 oz', '16.99')] }),
    a('', 'Choriqueso', '', null, { options: [option('Small', '6.25'), option('Large · 16 oz', '16.99')] }),
    a('', 'Ground Beef with Cheese', '', '5.75'),
    a('', 'Los Tres Compadres', 'Choriqueso, ground beef with cheese, pico de gallo with avocado.', '13.99'),
    a('', 'Pico de Gallo with Avocado', '', '6.99'),
    a('', 'Garlic Shrimp', '8 large shrimp marinated in a garlic and lime sauce, pan-fried with fresh herbs.', '10.95'),
    a('', 'Cheese Fries', 'Served with ranch dressing.', '7.99'),
    a('', 'Chicken Wings (8)', 'Served with ranch dressing.', '11.99'),
  ] },
  { id: 'nachos', name: 'Nachos', group: 'main', items: [
    n('N1', 'Pork Carnitas or Grilled Pork Pastor', '', null, { options: [option('Half', '9.95'), option('Full', '12.95')] }),
    n('N2', 'Shrimp Fajita Nachos', '', null, { options: [option('Half', '11.95'), option('Full', '14.95')] }),
    n('N3', 'Fajita Nachos', 'Steak or grilled chicken.', null, { options: [option('Half', '11.95'), option('Full', '13.95')] }),
    n('N4', 'Texas Fajita Nachos', 'Grilled steak, chicken and shrimp.', '15.95', { notes: ['Full portion.'] }),
    n('N5', 'Nachos Supreme', 'With beans, chicken or ground beef, lettuce, sour cream, tomatoes, jalapeños, shredded cheese and cheese dip.', null, { options: [option('Half', '9.95'), option('Full', '11.95')] }),
  ] },
  { id: 'quesadillas', name: 'Quesadillas', group: 'main', items: [
    q('Q1', 'Quesadilla Quarters Roasted', 'Flour tortillas with melted cheese, shredded chicken or ground beef. Served with lettuce, tomatoes and sour cream.', '10.95', { options: [option('Pork carnitas, grilled pork pastor, grilled steak or grilled chicken', '12.95'), option('Vegetarian', '9.95')] }),
    q('Q2', 'Chicken or Beef Quesadilla', 'Served with rice and beans.', '10.95', { options: [option('Pork carnitas or grilled pork pastor', '12.95'), option('Grilled steak or grilled chicken', '12.95'), option('Chicken or steak fajita', '12.95'), option('Shrimp fajita', '13.95'), option('Vegetarian', '9.95')] }),
  ] },
  { id: 'salads', name: 'Salads', group: 'main', introduction: 'Dressings: honey mustard, Thousand Island, Italian or ranch.', items: [
    s('SA1', 'Guacamole Salad', 'Lettuce and guacamole.', '4.75'),
    s('SA2', 'Tossed Salad', 'Lettuce, tomato, onion and bell pepper.', '3.85'),
    s('SA3', 'Supreme Taco Salad', 'Tortilla shell filled with lettuce, sour cream, shredded cheese, tomatoes and your choice of ground beef or shredded chicken.', '10.95', { options: [option('Pork carnitas or grilled pork pastor', '11.95'), option('Steak or chicken fajita with sautéed bell peppers, onions and tomatoes', '11.95'), option('Vegetarian', '9.75'), option('Shrimp fajita with sautéed bell peppers, onions and tomatoes', '13.95')] }),
    s('SA4', 'Soriana’s Grilled Chicken Salad', 'Cheese, lettuce, pico de gallo and avocado.', '11.95'),
  ] },
  { id: 'specials', name: 'Specials', group: 'main', items: [
    sp('S1', 'Chicken Soup', 'Chicken broth-based soup with Spanish rice, shredded chicken breast, pico de gallo and avocado slices.', '8.75'),
    sp('S2', 'Chicken Tenders (4)', 'Served with fries and ranch.', '9.99'),
    sp('S3', 'Texas Steak Sandwich', 'Cooked with grilled steak, onions, bell peppers, mushrooms, mayo, lettuce, tomatoes and cheese. Served with fries.', '10.50'),
    sp('S4', 'Chili con Carne', 'Mild stew-style. Prepared with homemade chili sauce.', '6.95'),
  ] },
];
export const softDrinks: MenuSection = {
  id: 'soft-drinks', name: 'Soft Drinks & Aguas Frescas', group: 'drinks', items: [
    item('Drinks', 'image1.jpeg')('', 'Fountain Drinks', 'Coca-Cola, Diet Coke, Dr Pepper, Diet Dr Pepper, Sprite, Fanta, lemonade or Hi-C.', '3.99'),
    item('Drinks', 'image1.jpeg')('', 'Aguas Frescas', 'Orange, horchata, mango, pineapple or peach.', '5.75'),
    item('Drinks', 'image1.jpeg')('', 'Tea or Coffee', '', '3.99'),
    item('Drinks', 'image1.jpeg')('', 'Milk', '', '2.75'),
    item('Drinks', 'image1.jpeg')('', 'Mexican Drinks', 'Jarritos or Coca-Cola.', '3.99'),
  ],
};
