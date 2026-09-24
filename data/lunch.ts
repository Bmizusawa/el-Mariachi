import { item, option, type MenuSection } from './types.ts';
const l = item('Lunch Menu', 'image7.jpeg');
export const lunch: MenuSection[] = [{
  id: 'lunch', name: 'Lunch Menu', group: 'lunch', introduction: 'Monday through Friday · 11am to 2pm',
  items: [
    l('L1', 'Huevos Rancheros', 'Two fried or scrambled eggs, topped with mild sauce. Served with rice, beans and tortillas.', null, { options: [option('Eggs with ham or eggs a la Mexicana', '9.50'), option('Eggs with Spanish sausage', '9.95')], confidence: 0.83, reviewFields: ['price'], notes: ['Base price not separately printed; please ask.'] }),
    l('L2', 'Quesadilla Quarter', 'Choice of shredded chicken or ground beef, served with lettuce, tomatoes and sour cream on the side.', '8.95'),
    l('L3', 'Regular Quesadilla', 'Choice of shredded chicken or ground beef. Served with rice and beans.', '9.25'),
    l('L4', 'Fajita Quesadilla', 'Choice of steak or grilled chicken with bell peppers, onions and tomatoes. Served with rice and beans.', '9.95'),
    l('L5', 'Veggie Quesadilla', 'Stuffed with mushrooms, potatoes, onions and bell peppers. Served with rice and salad.', '8.25'),
    l('L6', 'Burrito', 'Choice of ground beef or shredded chicken, topped with mild salsa. Served with rice and beans.', '9.25'),
    l('L7', 'Veggie Burrito', 'Stuffed with beans, mushrooms, onions, tomatoes and bell peppers, topped with melted cheese. Served with rice and beans.', '8.25'),
    l('L8', 'Burrito Supreme', 'Choice of shredded chicken or ground beef, topped with lettuce, tomatoes, sour cream and guacamole.', '8.25', { options: [option('With rice and beans', '9.75')] }),
    l('L9', 'Veggie Burrito Supreme', 'Stuffed with beans, mushrooms, potatoes, onions and bell peppers. Topped with lettuce, tomatoes, sour cream and guacamole dip.', '8.25'),
    l('L10', 'Sherreli’s Fiesta Omelet', 'Filled with mushrooms, bell peppers, tomatoes, beans and potatoes. Served with toast and bacon.', '10.75', { confidence: 0.86, reviewFields: ['itemName'] }),
    l('L11', 'Enchiladas with Mole', 'Two enchiladas with your choice of shredded chicken or ground beef, topped with Mexican mole sauce. Served with rice and beans.', '8.95'),
    l('L12', 'Green Enchiladas', 'Two enchiladas with your choice of shredded chicken or ground beef, topped with green sauce. Served with rice and beans.', '8.95'),
    l('L13', 'Veggie Enchiladas', 'Two enchiladas stuffed with mushrooms, tomatoes, onions and bell peppers. Topped with cheese dip, served with guacamole salad.', '8.95'),
    l('L14', 'Chimichanga', 'Flour tortilla deep-fried to a golden brown, stuffed with your choice of ground beef or shredded chicken, topped with cheese sauce, lettuce, tomatoes, sour cream and guacamole dip.', '8.75', { options: [option('With rice and beans', '9.95')] }),
    l('L15', 'Taco Salad', 'Choice of shredded chicken or ground beef, with beans, lettuce, tomatoes, sour cream, shredded cheese and guacamole dip.', '8.75'),
    l('L16', 'Grilled Taco Salad', 'Choice of grilled chicken or steak with sautéed bell peppers, onions, tomatoes, guacamole, sour cream, shredded cheese and beans.', '9.95'),
    l('L17', 'Soft or Hard Tacos (3)', 'Stuffed with shredded chicken or ground beef with lettuce, tomatoes and shredded cheese.', '8.75'),
    l('L18', 'Nachos Supreme', 'Tortilla chips topped with your choice of shredded chicken or ground beef, lettuce, tomatoes, cheese sauce, sour cream, beans, guacamole dip and jalapeños.', '8.95'),
    l('L19', 'Fajita Lunch', 'Choice of grilled chicken or steak, sautéed with bell peppers, onions and tomatoes. Served with rice, beans, tossed salad and tortillas.', '10.95'),
  ],
}];
