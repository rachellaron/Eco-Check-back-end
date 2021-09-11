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

INSERT INTO recycle_key (name_key, image, info, common_form) VALUES ('1 PET', 'IMAGE URL TEST', 'INFO TEST', 'COMMON_FORM TEST');

INSERT INTO product_name (product_key, image, info, common_form) VALUES ('BREAD', 'IMAGE URL TEST', 'INFO TEST', 'COMMON_FORM TEST');

-- INSERT INTO parks (name, address, lat, lng) VALUES ('Jacobs Reserve', 'Brunswick West', -37.756972741, 144.94606131);

-- INSERT INTO parks (name, address, lat, lng) VALUES ('Dunstan Reserve', '24 Peacock St, Brunswick West', -37.75490494072, 144.9402438);

