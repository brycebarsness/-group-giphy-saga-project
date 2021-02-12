CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

SELECT * FROM "favorites";

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR(200) NOT NULL,
    "alt_text" VARCHAR(200),
    "category_id" integer REFERENCES category
);

INSERT INTO "favorites" ("url", "alt_text", "category_id")
VALUES ('https://media1.giphy.com/media/KpLPyE3D6HJPa/200_d.gif?cid=aa0989470ffmrtqvhlpr8y1b03j83ppzgevma2jnb79otraa&rid=200_d.gif', 'mcdonalds GIF', '3');

DROP TABLE "favorites";
