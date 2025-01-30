create table users(
 "id" serial primary key,
 "login" text not null,
 "parol" text not null,
 "time_create" timestamp default current_timestamp not null,
 "time_update" timestamp default current_timestamp not null
);
create table location(
 "id" serial primary key,
 "name" text not null,
 "lng" text not null,
 "amo_id" text not null,
 "info" text not null,
 "oldPrice" text not null,
 "newPrice" text not null,
 "type" text not null,
 "tip" text not null,
 "pasport" text not null,
 "format" text not null,
 "data" text not null,
 "kolechtvo" text not null,
 "vimos" text not null,
 "prixod" text not null,
 "tensport" text not null,
 "svetafor" text not null,
 "image" text,
 "subcategory" integer not null,
 "time_create" timestamp default current_timestamp not null,
 "time_update" timestamp default current_timestamp not null
);
ALTER SEQUENCE users_id_seq OWNED BY users.id;
GRANT USAGE, SELECT ON SEQUENCE users_id_seq TO abbasuz2_user;
ALTER SEQUENCE location_id_seq OWNED BY location.id;
GRANT USAGE, SELECT ON SEQUENCE location_id_seq TO abbasuz2_user;

