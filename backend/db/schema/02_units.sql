DROP TABLE IF EXISTS units CASCADE;
CREATE TABLE units(
    id SERIAL PRIMARY KEY NOT NULL,
    owner VARCHAR (255) NOT NULL,
    building_name varchar(255) NOT NULL,
    unit_number INTEGER NOT NULL,
    number_of_bedrooms INTEGER NOT NULL,
    number_of_washrooms DECIMAL NOT NULL,
    size VARCHAR (50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    parking_spot_number VARCHAR(50) NOT NULL,
    city varchar(50),
    building_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);