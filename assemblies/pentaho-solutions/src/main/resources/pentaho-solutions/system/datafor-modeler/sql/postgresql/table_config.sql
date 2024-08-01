CREATE TABLE "public"."table_config" (
        "id" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,
        "dbconn" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
        "schema" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
        "tbname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
        "cols" text COLLATE "pg_catalog"."default",
        "add_time" timestamp(6),
        "add_by" varchar(200) COLLATE "pg_catalog"."default",
        "update_time" timestamp(6),
        "update_by" varchar(200) COLLATE "pg_catalog"."default"
)
;
COMMENT ON COLUMN "public"."table_config"."dbconn" IS 'jdbc连接名';
COMMENT ON COLUMN "public"."table_config"."schema" IS '数据库模式名';
COMMENT ON COLUMN "public"."table_config"."tbname" IS '表名';
COMMENT ON COLUMN "public"."table_config"."cols" IS '列和标题映射[{"f":"code","c":["name"]}]';
COMMENT ON COLUMN "public"."table_config"."add_time" IS '创建时间';
COMMENT ON COLUMN "public"."table_config"."add_by" IS '创建用户';
COMMENT ON COLUMN "public"."table_config"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."table_config"."update_by" IS '更新用户';

ALTER TABLE "public"."table_config" ADD CONSTRAINT "table_config_pkey" PRIMARY KEY ("id");