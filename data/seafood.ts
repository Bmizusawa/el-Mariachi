import { item, option, type MenuSection } from './types.ts';
const m = item('Seafood', 'image4.jpeg');
const f = item('Flautas', 'image4.jpeg');
const ch = item('Chimichangas', 'image4.jpeg');
const c = item('Combinations', 'image4.jpeg');
export const seafood: MenuSection[] = [
  { id: 'seafood', name: 'Seafood', group: 'main', items: [
    m('M1', 'Shrimp Soup', 'Prepared with shrimp, vegetables and special spices. Served with a small portion of rice and corn or flour tortillas.', '15.99'),
    m('M2', 'Shrimp and Fish Soup', 'Prepared with shrimp and tilapia, vegetables and special spices. Served with a small portion of rice and tortillas.', '16.99'),
    m('M3', 'Shrimp Cocktail', 'Cooked Mexican style, cocktail sauce mixed with avocado, onions, cilantro, lime juice and jalapeño peppers. Served with crackers and lime.', '15.99'),
    m('M4', 'Garlic Shrimp', 'Large shrimp marinated in garlic sauce. Served with rice and salad.', '14.99'),
    m('M5', 'Shrimp Demon', 'Large shrimp topped with spicy sauce. Served with rice and salad.', '15.99'),
    m('M6', 'Fish Tacos (3)', 'Three corn or flour tortillas stuffed with chunks of tilapia fish, served with rice, pico de gallo and avocado.', '13.99'),
    m('M7', 'Shrimp Tacos (3)', 'Three corn or flour tortillas stuffed with shrimp, served with rice, pico de gallo and avocado.', '13.99'),
    m('M8', 'Fish Fillet', 'Grilled tilapia, served with rice, salad and avocado slices.', '14.99'),
  ] },
  { id: 'flautas', name: 'Flautas', group: 'main', items: [
    f('FL1', 'Chicken or Shredded Beef Flautas (4)', 'Four fried corn tortillas filled with chicken or shredded beef. Topped with green salsa, lettuce, tomatoes, guacamole dip, sour cream and fresh cheese. Served with rice and beans.', '12.95'),
    f('FL2', 'Mixed Flautas (4)', 'Four fried corn tortillas: two filled with chicken and two with shredded beef. Topped with fresh cheese. Served with guacamole salad, sour cream and rice.', '12.95'),
    f('FL3', 'Pork Carnitas Flautas (3)', 'Three fried corn tortillas topped with fresh cheese, served with guacamole salad, sour cream and rice.', '11.95'),
  ] },
  { id: 'chimichangas', name: 'Chimichangas', group: 'main', items: [
    ch('Ch1', 'Chimichanga', 'Flour tortilla deep-fried to a golden brown, stuffed with your choice of ground beef or shredded chicken. Topped with cheese dip, lettuce, tomatoes, sour cream and guacamole dip.', '9.75'),
    ch('Ch2', 'Chimichanga Supreme', 'Flour tortilla deep-fried to a golden brown, stuffed with your choice of ground beef or shredded chicken. Topped with cheese dip, lettuce, tomatoes, sour cream and guacamole dip. Served with rice and beans.', '11.75', { options: [option('Pork carnitas or grilled pork pastor', '12.75'), option('Steak or chicken fajita', '12.95'), option('Shrimp fajita', '13.95'), option('Vegetarian', '10.95')] }),
  ] },
  { id: 'combinations', name: 'Combinations', group: 'main', items: [
    c('C1', 'Enchilada, Burrito, Taco and Chalupa', '', '12.95'),
    c('C2', 'Flauta, Tostada and Enchilada', '', '9.95'),
    c('C3', 'Chile Relleno, Enchilada, Taco, Rice and Beans', '', '13.95'),
    c('C4', 'Chalupa, Taco, Rice and Beans', '', '11.95'),
    c('C5', 'Enchilada, Chalupa and 2 Tacos', '', '11.95'),
    c('C6', 'Enchilada, Taco and Rice', '', '8.95'),
    c('C7', 'Quesadilla, Rice and Enchilada', '', '10.95'),
    c('C8', 'Burrito, Taco, Flauta and Salad', '', '11.25'),
    c('C9', 'Quesadilla, Flauta and Tamale', '', '11.75'),
    c('C10', 'Enchilada, Burrito and Tostada', '', '11.75'),
    c('C11', 'Taco, Enchilada, Rice and Beans', '', '10.75'),
    c('C12', 'Three Tacos (Soft or Hard)', '', '8.95'),
    c('C13', 'Burrito, Taco and Mushrooms', '', '11.75'),
    c('C14', 'Quesadilla, Mushrooms and Rice', '', '11.75'),
    c('C15', 'Two Tacos, Rice and Beans', '', '10.75'),
    c('C16', 'Tamale, Taco, Enchilada and Rice', '', '11.75', { confidence: 0.99, reviewFields: ['description'], notes: ['Photo caption says rice or beans; please confirm side choice.'] }),
    c('C17', 'Taco, Rice and Beans', '', '8.95'),
  ] },
];
