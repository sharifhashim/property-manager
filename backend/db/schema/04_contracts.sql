DROP TABLE IF EXISTS contracts CASCADE;
CREATE TABLE contracts(
    id SERIAL PRIMARY KEY NOT NULL,
    tenant_name VARCHAR(255) NOT NULL,
    annual_rent INTEGER NOT NULL,
    number_of_payments INTEGER NOT NULL,
    start_date TIMESTAMP(0) NOT NULL,
    end_date TIMESTAMP(0) NOT NULL,
    note TEXT NOT NULL,
    unit_id INTEGER REFERENCES units(id) ON DELETE CASCADE,
);