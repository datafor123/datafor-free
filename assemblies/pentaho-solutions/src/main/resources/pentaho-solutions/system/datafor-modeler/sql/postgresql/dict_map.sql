CREATE TABLE "public"."dict_map" (
  "id" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "dict" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "type" varchar(1) COLLATE "pg_catalog"."default" NOT NULL,
  "dbconn" varchar(255) COLLATE "pg_catalog"."default",
  "schema" varchar(255) COLLATE "pg_catalog"."default",
  "table" varchar(255) COLLATE "pg_catalog"."default",
  "field" varchar(255) COLLATE "pg_catalog"."default"
)
;
COMMENT ON TABLE "public"."dict_map" IS '表名字段名成员名字典映射表';
COMMENT ON COLUMN "public"."dict_map"."id" IS 'uuid';
COMMENT ON COLUMN "public"."dict_map"."dict" IS '字典名';
COMMENT ON COLUMN "public"."dict_map"."type" IS '1表名2字段名3成员名';
COMMENT ON COLUMN "public"."dict_map"."dbconn" IS '连接名';
COMMENT ON COLUMN "public"."dict_map"."schema" IS '模式名';
COMMENT ON COLUMN "public"."dict_map"."table" IS '表名';
COMMENT ON COLUMN "public"."dict_map"."field" IS '字段名';
ALTER TABLE "public"."dict_map" ADD CONSTRAINT "dict_map_pkey" PRIMARY KEY ("id");
