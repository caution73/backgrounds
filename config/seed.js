require('dotenv').config();
require('./database');

const Category = require('../models/Category');
const Item = require('../models/Item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Supercars', sortOrder: 10},
    {name: 'Muscle/Pony Cars', sortOrder: 20},
    {name: 'Hypercars', sortOrder: 30},
    {name: 'Backyard Build', sortOrder: 40},
    {name: 'Tuners', sortOrder: 50},
    {name: 'Trucks/SUVs', sortOrder: 60},
    {name: 'Classic', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    // {name: 'Scenic1', imgUrl: 'https://www.instagram.com/p/CN55lmgBBN_/media/?size=l', category: categories[0]},
    // {name: 'Scenic2', imgUrl: 'https://www.instagram.com/p/Cj5yH2hOqIj/media/?size=l', category: categories[0]},
    // {name: 'Scenic3', imgUrl: 'https://www.instagram.com/p/CUoEAVosO_E/media/?size=l', category: categories[0]},
    {name: 'Jeep Grand Cherokee SRT (WK2)', src: '/GC_SRT_1.jpg', category: categories[5]},
    {name: 'Ferrari 458 (widebody)', src: '/458_1.jpg', category: categories[0]},
    {name: 'McLaren P1', src: '/P1_1.jpg', category: categories[2]},
    // {name: 'Taco', imgUrl: '🌮', category: categories[2]},
    // {name: 'Burrito', imgUrl: '🌯', category: categories[2]},
    // {name: 'Pizza Slice', imgUrl: '🍕', category: categories[3]},
    // {name: 'Spaghetti', imgUrl: '🍝', category: categories[3]},
    // {name: 'Garlic Bread', imgUrl: '🍞', category: categories[3]},
    // {name: 'French Fries', imgUrl: '🍟', category: categories[4]},
    // {name: 'Green Salad', imgUrl: '🥗', category: categories[4]},
    // {name: 'Ice Cream', imgUrl: '🍨', category: categories[5]},
    // {name: 'Cup Cake', imgUrl: '🧁', category: categories[5]},
    //  {name: 'Bridge', imgUrl: 'https://www.instagram.com/p/CgK79xGPNO-/media/?size=l', category: categories[5]},
    // {name: 'Strawberry Shortcake', imgUrl: '🍰', category: categories[5]},
    // {name: 'Milk', imgUrl: '🥛', category: categories[6]},
    // {name: 'Coffee', imgUrl: '☕', category: categories[6]},
    // {name: 'Mai Tai', imgUrl: '🍹', category: categories[6]},
    // {name: 'Beer', imgUrl: '🍺', category: categories[6]},
    // {name: 'Wine', imgUrl: '🍷', category: categories[6]},
  ]);

  console.log(items)

  process.exit();

})();