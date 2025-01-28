create table users(
 "id" serial primary key,
 "login" text not null,
 "parol" text not null,
 "time_create" timestamp default current_timestamp not null,
 "time_update" timestamp default current_timestamp not null
);
create table category(
 "id" serial primary key,
 "category_id" text not null,
 "category_title" text not null,
 "image" text,
 "subcategory" integer not null,
 "time_create" timestamp default current_timestamp not null,
 "time_update" timestamp default current_timestamp not null
);
ALTER SEQUENCE header_category_id_seq OWNED BY header_category.id;
GRANT USAGE, SELECT ON SEQUENCE header_category_id_seq TO abbasuz2_user;

