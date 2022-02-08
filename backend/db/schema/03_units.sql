DROP TABLE IF EXISTS units CASCADE;
CREATE TABLE units(
    id SERIAL PRIMARY KEY NOT NULL,
    owner VARCHAR (255) NOT NULL,
    unit_number INTEGER NOT NULL,
    number_of_bedrooms INTEGER NOT NULL,
    number_of_washrooms INTEGER NOT NULL,
    size VARCHAR (50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    parking_spot_number VARCHAR(50) NOT NULL,
    building_id INTEGER REFERENCES buildings(id) ON DELETE CASCADE
);