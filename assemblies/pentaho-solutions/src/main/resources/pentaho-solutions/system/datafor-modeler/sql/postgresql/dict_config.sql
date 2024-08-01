CREATE TABLE "public"."dict_config" (
       "id" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,
       "name" varchar(255) COLLATE "pg_catalog"."default",
       "dbconn" varchar(255) COLLATE "pg_catalog"."default",
       "schema" varchar(255) COLLATE "pg_catalog"."default",
       "detail" text COLLATE "pg_catalog"."default",
       "type" char(1) COLLATE "pg_catalog"."default",
       "default" varchar(255) COLLATE "pg_catalog"."default",
       "desc" varchar(255) COLLATE "pg_catalog"."default",
       "add_time" timestamp(6),
       "update_time" timestamp(6),
       "add_by" varchar(255) COLLATE "pg_catalog"."default",
       "update_by" varchar(255) COLLATE "pg_catalog"."default",
       "expire" varchar(255) COLLATE "pg_catalog"."default"
)
;
COMMENT ON TABLE "public"."dict_config" IS '字典配置表';
ALTER TABLE "public"."dict_config" ADD CONSTRAINT "dict_config_pkey" PRIMARY KEY ("id");