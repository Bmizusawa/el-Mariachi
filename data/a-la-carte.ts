import { item, option, type MenuSection } from './types.ts';
const a = item('A la carte', 'image7.jpeg');
export const aLaCarte: MenuSection[] = [{
  id: 'a-la-carte', name: 'A la carte', group: 'a-la-carte', items: [
    a('A1', 'Burrito', 'Choice of shredded chicken or ground beef, topped with red sauce.', '6.95', { options: [option('Steak or grilled chicken', '7.95')] }),
    a('A2', 'Quesadilla', 'Choice of shredded chicken or ground beef.', '6.95', { options: [option('Steak or grilled chicken', '7.95')] }),
    a('A3', 'Enchilada', 'Choice of shredded chicken or ground beef, topped with red enchilada sauce.', '3.50', { options: [option('Steak', '4.00')] }),
    a('A4', 'Soft or Hard Taco', 'Choice of shredded chicken or ground beef, with lettuce, tomatoes and cheese.', '3.50', { options: [option('Steak or grilled chicken', '4.00')] }),
    a('A5', 'Flauta', 'Rolled corn tortilla filled with chicken or shredded beef, cheese and lettuce.', '3.50', { options: [option('Steak or grilled chicken', '4.00')] }),
    a('A6', 'Chile Relleno', 'Poblano pepper filled with cheese and ground beef, egg battered and smothered with tomato sauce.', '5.50', { options: [option('Steak or grilled chicken', '6.75'), option('Shrimp', '7.75')] }),
    a('A7', 'Grilled Mushrooms', 'Sautéed with onions.', '3.95'),
    a('A8', 'Rice or Beans', '', '3.50'),
    a('A9', 'Pork Tamale', 'Corn meal casing with shredded pork inside.', '3.50'),
    a('A10', 'Chalupa', 'Corn tortilla topped with refried beans, melted cheese, lettuce, guacamole and tomatoes.', '3.95'),
    a('A11', 'Tostada', 'Flat corn tortilla topped with your choice of ground beef or shredded chicken, lettuce, tomatoes, cheese and sour cream.', '4.95', { options: [option('Steak or grilled chicken', '5.95'), option('Shrimp', '8.95')] }),
    { ...a('A11', 'Fajita Quesadilla', 'Choice of steak or grilled chicken with sautéed bell peppers, onions and tomatoes.', '7.95', { options: [option('Shrimp', '8.75')], notes: ['The printed menu uses A11 for both Tostada and Fajita Quesadilla.'], confidence: 0.99, reviewFields: ['itemCode'] }), id: 'a-la-carte-a11-fajita' },
    a('A12', 'Hot and Spicy Burrito', 'Filled with pico de gallo, rice, beans and jalapeños. Choice of ground beef or shredded chicken, topped with chile con carne and sour cream.', '9.95', { options: [option('Steak or grilled chicken', '12.95')] }),
    a('A13', 'Order of Steak or Grilled Chicken', '', '10.95'),
  ],
}];
