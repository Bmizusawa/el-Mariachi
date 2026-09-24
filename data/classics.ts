import { item, option, type MenuSection } from './types.ts';
const f = item('Fajitas', 'image2.jpeg');
const e = item('Enchiladas', 'image2.jpeg');
const b = item('Burritos', 'image2.jpeg');
const d = item('Desserts', 'image2.jpeg');
export const classics: MenuSection[] = [
  { id: 'fajitas', name: 'Fajitas', group: 'main', introduction: 'Served in a sizzling skillet with sautéed bell peppers, onions and tomatoes. With rice, beans, lettuce, guacamole, pico de gallo, sour cream and tortillas.', items: [
    f('F1', 'Chicken or Steak Fajitas', '', null, { options: [option('For one', '15.50'), option('For two', '27.95')] }),
    f('F2', 'Texas Fajitas', 'Steak, chicken and shrimp.', null, { options: [option('For one', '16.95'), option('For two', '29.95')] }),
    f('F3', 'Shrimp Fajitas', '', null, { options: [option('For one', '16.95'), option('For two', '29.95')] }),
    f('F4', 'Vegetarian Fajitas', '', null, { options: [option('For one', '9.95'), option('For two', '16.95')] }),
    f('F5', 'Molcajete', 'Traditional Mexican dish prepared with chile con carne, beans, steak, shrimp, Spanish sausage, chile toreado and fresh Mexican cheese. Served with one portion of rice and beans and tortillas.', null, { options: [option('For one', '24.95'), option('For two', '38.95')] }),
  ] },
  { id: 'enchiladas', name: 'Enchiladas', group: 'main', items: [
    e('E1', 'Green or Red Enchiladas (2)', 'Two shredded chicken or ground beef enchiladas topped with green or red salsa and shredded cheese. Served with rice and beans.', '11.95'),
    e('E2', 'Mix Enchiladas (3)', 'One shredded chicken, one ground beef and one cheese enchilada. Topped with green or red salsa and shredded cheese. Served with rice and beans.', '12.95'),
    e('E3', 'Steak Enchiladas (3)', 'Topped with green salsa and shredded cheese. Served with guacamole salad, sour cream and rice.', '13.50'),
    e('E4', 'Grilled Pork Pastor or Carnitas (3)', 'Three enchiladas topped with green or red salsa and fresh cheese. Served with guacamole salad, sour cream and rice.', '13.50'),
    e('E5', 'Vegetarian Enchiladas (3)', 'Topped with cheese dip. Served with guacamole salad, sour cream and rice.', '11.95'),
    e('E6', 'Enchiladas Norteñas (3)', 'Three cheese enchiladas topped with green salsa, grilled onions and pulled pork carnitas. Served with rice and beans.', '13.95'),
    e('E7', 'Enchiladas Supreme (3)', 'Three enchiladas stuffed with your choice of shredded chicken or ground beef, with green or red salsa, lettuce, tomatoes and sour cream on top.', '12.95'),
  ] },
  { id: 'burritos', name: 'Burritos', group: 'main', items: [
    b('B1', 'Burrito Supreme', 'Rolled flour tortilla filled with beans and your choice of shredded chicken or ground beef. Topped with burrito salsa, lettuce, tomatoes, sour cream and guacamole dip.', '9.50', { options: [option('With rice and beans', '11.95')] }),
    b('B2', 'Regular Burrito', 'Rolled flour tortilla stuffed with shredded chicken or ground beef. Served with rice and beans.', '10.95', { options: [option('Steak or grilled chicken', '12.95'), option('Pork carnitas or grilled pork pastor', '12.95'), option('Grilled chicken fajita or grilled steak fajita', '13.75'), option('Shrimp fajita', '13.95')] }),
    b('B3', 'Burrito California', 'Flour tortilla stuffed with steak, sautéed bell peppers, onions, tomatoes, rice and beans inside. Topped with burrito salsa, guacamole and sour cream.', '12.95'),
    b('B4', 'Chris’s Burrito Supreme', 'Flour tortilla stuffed with steak, shrimp, chicken, bell peppers, onions, tomato, rice, beans and pineapple. Topped with cheese dip, sour cream and guacamole.', '13.95'),
    b('B5', 'Burrito Blanco', 'Flour tortilla stuffed with your choice of steak or chicken, sautéed with bell peppers, onions and tomatoes. Topped with cheese dip, lettuce, tomatoes and sour cream.', '12.95'),
    b('B6', 'Burrito Bandera', 'Flour tortilla stuffed with grilled steak, grilled chicken, grilled pork pastor or grilled pork carnitas. Cooked with bell peppers, tomatoes and onions. Topped with three different salsas.', '12.95'),
  ] },
  { id: 'desserts', name: 'Desserts', group: 'main', items: [
    d('', 'Fried Ice Cream', '', '4.95'),
    d('', 'Sopapilla', '', '2.99'),
    d('', 'Sopapilla with Ice Cream', '', '6.95'),
    d('', 'Churros', '', '4.50'),
    d('', 'Churros with Ice Cream', '', '9.95'),
    d('', 'Cheesecake Chimichanga', '', '6.75'),
  ] },
];
