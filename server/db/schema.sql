CREATE DATABASE ecocheck;

\c ecocheck;

CREATE TABLE recycle_key(
  id SERIAL PRIMARY KEY,
  name_key TEXT,
  image TEXT,
  info TEXT,
  common_form TEXT
);

CREATE TABLE product_name(
  id SERIAL PRIMARY KEY,
  product_key TEXT,
  image TEXT,
  info TEXT,
  common_form TEXT
);

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  product_name TEXT,
  recycle_number TEXT,
  image TEXT,
  info TEXT,
  common_form TEXT
);

INSERT INTO products (product_name, recycle_number, image, info, common_form) VALUES ('Bread', 'FO (Food Organics)', '', 'Compost', 'Bread, Vegetables, Fruit');

INSERT INTO products (product_name, recycle_number, image, info, common_form) VALUES ('Milk Bottles', '2 HDPE', '', 'Recycle', 'Milk and juice bottles, detergent, shampoo and conditioner bottles, water pipes and grocery bags.');

INSERT INTO products (product_name, recycle_number, image, info, common_form) VALUES ('Egg Carton', 'FO (Food Organics)', '', 'Compost', 'Bread, Vegetables, Fruit');



UPDATE products SET image = '/compost.png' WHERE info = 'Compost';

-- INSERT INTO product_name (product_key, image, info, common_form) VALUES ('Milk', '', 'Recyclable', 'Milk and juice bottles, detergent, shampoo and conditioner bottles, water pipes and grocery bags.');
-- INSERT INTO product_name (product_key, image, info, common_form) VALUES ('Water Bottle', '', 'Recyclable', 'Water, soft drink and  sport drink bottles, condiment bottles, peanut butter, vegemite and jam jars.');

-- SELECT * FROM product_name;


-- INSERT INTO recycle_key (name_key, image, info, common_form) VALUES ('Food', '', 'Compost', 'Bread, Vegetables, Fruit');
-- INSERT INTO recycle_key (name_key, image, info, common_form) VALUES ('2 HDPE', '', 'Recyclable', 'Milk and juice bottles, detergent, shampoo and conditioner bottles, water pipes and grocery bags.');
-- INSERT INTO recycle_key (name_key, image, info, common_form) VALUES ('1 PET', '', 'Recyclable', 'Water, soft drink and  sport drink bottles, condiment bottles, peanut butter, vegemite and jam jars.');

-- SELECT * FROM recycle_key;

-- SELECT *     
-- FROM product_name  
-- JOIN recycle_key  
-- ON product_name.common_form = recycle_key.common_form; 