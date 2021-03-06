export const createOrdersTableQuery = `
    CREATE TABLE IF NOT EXISTS orders (
        order_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
        user_id integer REFERENCES users(user_id) NOT NULL,
        order_date TIMESTAMPTZ NOT NULL DEFAULT NOW() NOT NULL,
        total_price DECIMAL(8,2) NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );`;

export const seedOrdersTableQuery = `
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('2f369959-f0ba-48f8-af67-a98491e59fb1', 27, '2020-07-14', 758.55, '2020-07-14');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('0f25d42f-505a-402d-bcaa-ace38a1e7cc1', 22, '2020-11-02', 1169.42, '2020-11-02');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('ffff6ba5-0fb1-4d16-9542-eb5bbff746dc', 81, '2021-05-30', 638.31, '2021-05-30');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('861a2ca7-c7cf-4b8f-8464-b30c8aaccdc1', 13, '2020-08-05', 781.13, '2020-08-05');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('3c19c375-8648-414c-a34b-8cc8136b3b7c', 46, '2020-06-25', 590.91, '2020-06-25');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('f7a119d1-9a39-42c2-b50e-2caccef7cb5c', 14, '2020-07-18', 145.02, '2020-07-18');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('e5d591ff-9132-41a5-810a-f008ba2bb4e8', 75, '2021-06-12', 1451.19, '2021-06-12');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('4ffab6d7-a7bd-4663-b512-c4ccf476895e', 12, '2020-09-23', 449.91, '2020-09-23');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('a0a09c82-5de0-494a-bab7-df1808fa8123', 15, '2021-06-18', 7.78, '2021-06-18');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('b5e60db3-f4c0-4376-bdaf-6f387ed9b61b', 20, '2020-11-06', 230.92, '2020-11-06');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('155a5ca7-56b6-4162-82ac-3f0a0af24d4e', 35, '2020-12-22', 470.37, '2020-12-22');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('81d4fa05-b256-4a7e-a7e5-d1a75445ca7e', 14, '2020-09-05', 392.5, '2020-09-05');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('bf05bc60-5b48-4d00-9916-f8688f2edbbf', 51, '2021-03-24', 607.79, '2021-03-24');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('ca3c1731-9c58-4469-821f-e199b29aee16', 57, '2020-06-24', 874.82, '2020-06-24');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('f4186f93-3e51-4334-90ee-8873488f8068', 76, '2020-11-14', 1326.99, '2020-11-14');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('6fe41ff3-ea77-4bd8-9a70-39267d682c55', 99, '2021-04-09', 1228.08, '2021-04-09');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('c5305ace-9b87-404f-a513-49ed517e9469', 23, '2020-07-15', 127.35, '2020-07-15');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('6a4aa47e-f2e4-4838-a82c-f600f01aa220', 55, '2020-10-27', 1122.22, '2020-10-27');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('6e66fb0d-6596-4bfe-b2d9-1315acd80c7e', 42, '2020-07-02', 690.37, '2020-07-02');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('fe5dc4b0-f3c4-4c0b-889d-4a8c6d965db4', 29, '2021-06-09', 731.42, '2021-06-09');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('8583011f-d029-4e1d-8396-ddf2658aa459', 73, '2021-06-20', 949.72, '2021-06-20');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('a4764905-9795-462c-92cd-222f2ee21ca6', 93, '2020-11-06', 1150.62, '2020-11-06');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('8e36238b-8869-4786-8e92-507a00b7dd20', 82, '2021-03-06', 1134.43, '2021-03-06');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('efb26213-c177-4d06-8b7d-207ffd993eb9', 99, '2021-04-15', 304.13, '2021-04-15');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('b2c127b0-6857-41f5-ba3e-ff9df458f90f', 69, '2021-04-19', 403.65, '2021-04-19');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('9a0eec16-4048-41cb-a1a5-ee18802da68b', 27, '2021-05-16', 1252.78, '2021-05-16');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('f7f37f7b-0696-444f-8877-45c6ebeb6021', 25, '2021-01-10', 1226.01, '2021-01-10');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('81b045d5-c42b-454e-8083-6e13d9018dd7', 12, '2021-01-07', 171.54, '2021-01-07');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('a0524347-ebef-4bce-95fb-a5ddf9739bf5', 23, '2021-04-19', 634.49, '2021-04-19');
    insert into orders (order_id, user_id, order_date, total_price, created_at) values ('a8522dd9-f178-42e3-b4d8-617736c4e966', 99, '2020-09-23', 659.21, '2020-09-23');`;

export const dropOrdersTableQuery = 'DROP TABLE IF EXISTS orders;';
