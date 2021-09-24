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

INSERT INTO products (product_name, recycle_number, image, info, common_form) VALUES ('Egg Carton', 'FO (Food Organics)', '', 'Compost', 'Bread, Vegetables, Fruit');


UPDATE products SET image = '/compost.png' WHERE info = 'Compost';

DELETE FROM products WHERE id = 4;

1 PET -> 
INSERT INTO products (product_name, recycle_number, image, info, common_form, bin_info) VALUES ('Water Bottle', '1 PET', '/recycle-bin.png', 'These items are a rigid/hard plastic, they can be recycled through your recycling bin.  However if you can, avoid purchasing plastic bottles and choose to use re-usable, refillable or glass  bottles instead.', 'Water, soft drink and  sport drink bottles, condiment bottles, peanut butter, vegemite and jam jars.', 'Recycle Bin');

2 HDPE -> 
INSERT INTO products (product_name, recycle_number, image, info, common_form, bin_info) VALUES ('Milk', '2 HDPE', '/recycle-bin.png', 'The rigid/hard plastic items can be recycled through your recycling bin. However lightweight soft plastic grocery bags cannot be recycled in the recycling bin. They get caught up in the machinery at the materials recycling facility (MRF) and mix with other materials such as paper. Please dispose of these at your local store or in your waste bin.', 'Milk and juice bottles, detergent, shampoo and conditioner bottles, water pipes and grocery bags.', 'Recycle Bin');

3 PVC-> 
INSERT INTO products (product_name, recycle_number, image, info, common_form, bin_info) VALUES ('Juice Bottle (Clear)', '3 PVC', '/recycle-bin.png', 'The rigid/hard plastic items can be recycled through your recycling bin. Soft plastics, mats and flooring cannot be recycled in the recycling bin. Please dispose of these at your local store or in your waste bin.', 'Flexible or rigid plastic used for plumbing pipes, clear cordial and juice bottles, bubble wrap, children’s toys and play mats, tablecloths, and vinyl flooring.', 'Recycle Bin');

4 LDPE -> 
INSERT INTO products (product_name, recycle_number, image, info, common_form, bin_info) VALUES ('Bread Bags', '4 LDPE', '/waste-bin.png', 'Lightweight soft plastic bags cannot be recycled  in the yellow lidded recycling bin. They get caught up in the machinery at the materials recycling facility (MRF) and mix with other materials such as paper. You can recycle them at REDcycle Bins at Woolworths or Coles.', 'Bread bags, dry cleaning bags, newspaper bags, produce bags and bin liner bags as well as a lining in milk cartons and takeaway beverage cups.', 'Waste Bin');

5 PP -> 
INSERT INTO products (product_name, recycle_number, image, info, common_form, bin_info) VALUES ('Ice Cream Containers', '5 PP', '/recycle-bin.png', 'Rigid hard plastic containers can be recycled. Bottle caps can be placed in loose.', 'Ice cream containers and lids, yoghurt , margarine and  butter containers, juice bottles, bottle caps, straws, plant pots and plastic takeaway containers.', 'Recycle Bin');

6 PS -> 
INSERT INTO products (product_name, recycle_number, image, info, common_form, bin_info) VALUES ('Yoghurt Containers (Foam)', '6 PS', '/waste-bin.png', 'Expanded polystyrene—foam cups , takeaway containers and  packaging cannot be recycled in your recycling bin. Polystyrene breaks up into many small pieces and contaminates recyclable materials. Rigid, hard forms such as yoghurt and margarine containers can be recycled in your recycling bin.', 'Foam cups and takeaway containers, moulded packaging, packing peanuts, meat trays,  yoghurt , margarine and  butter containers', 'Waste Bin');

7 OTHER -> 
INSERT INTO products (product_name, recycle_number, image, info, common_form, bin_info) VALUES ('Baby CDs and DVDs', '7 OTHER', '/waste-bin.png', 'As the number 7 includes a wide range of plastic types and items, the recyclability of these will depend on the individual item.', 'Nylon, safety and prescription glasses, sunglasses, baby milk bottles, headlight lenses, CDs and DVDs, water cooler bottles', 'Waste Bin');


ALTER TABLE products
ADD bin_info TEXT;

Common Food Products -> 

INSERT INTO products (product_name, recycle_number, image, info, common_form, bin_info) VALUES ('Bread', 'FO (Food Organics)', '/compost-bin.png', 'You can dispose of these items in your compost bin or if you do not own a compost bin, please follow the link below.', 'Compost', 'Compost Bin');

