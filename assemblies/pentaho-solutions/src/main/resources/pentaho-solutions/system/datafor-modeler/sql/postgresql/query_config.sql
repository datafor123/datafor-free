CREATE TABLE "public"."query_config" (
        "id" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,
        "dbconn" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
        "schema" varchar(255) COLLATE "pg_catalog"."default",
        "tbname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
        "sql" text COLLATE "pg_catalog"."default",
        "enable" char(1) COLLATE "pg_catalog"."default" NOT NULL,
        "add_time" timestamp(6),
        "add_by" varchar(200) COLLATE "pg_catalog"."default",
        "update_time" timestamp(6),
        "update_by" varchar(200) COLLATE "pg_catalog"."default"
)
;
COMMENT ON TABLE "public"."query_config" IS '查询对象配置表';
COMMENT ON COLUMN "public"."query_config"."dbconn" IS 'jdbc连接名';
COMMENT ON COLUMN "public"."query_config"."schema" IS '数据库模式名';
COMMENT ON COLUMN "public"."query_config"."tbname" IS '表名';
COMMENT ON COLUMN "public"."query_config"."sql" IS 'sql语句';
COMMENT ON COLUMN "public"."query_config"."enable" IS '是否启用';
COMMENT ON COLUMN "public"."query_config"."add_time" IS '创建时间';
COMMENT ON COLUMN "public"."query_config"."add_by" IS '创建用户';
COMMENT ON COLUMN "public"."query_config"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."query_config"."update_by" IS '更新用户';

ALTER TABLE "public"."query_config" ADD CONSTRAINT "query_config_pkey" PRIMARY KEY ("id");
