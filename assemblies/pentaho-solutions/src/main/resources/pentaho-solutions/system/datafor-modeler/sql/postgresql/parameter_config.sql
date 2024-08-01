CREATE TABLE "public"."parameter_config" (
            "id" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,
            "name" varchar(200) COLLATE "pg_catalog"."default" NOT NULL,
            "effectconn" varchar(200) COLLATE "pg_catalog"."default",
            "dbconn" varchar(200) COLLATE "pg_catalog"."default",
            "schema" varchar(200) COLLATE "pg_catalog"."default",
            "detail" text COLLATE "pg_catalog"."default",
            "type" char(1) COLLATE "pg_catalog"."default",
            "default" varchar(2000) COLLATE "pg_catalog"."default",
            "datatype" varchar(2) COLLATE "pg_catalog"."default",
            "desc" varchar(2000) COLLATE "pg_catalog"."default",
            "add_time" timestamp(6),
            "update_time" timestamp(6),
            "add_by" varchar(200) COLLATE "pg_catalog"."default",
            "update_by" varchar(200) COLLATE "pg_catalog"."default"
)
;
COMMENT ON TABLE "public"."parameter_config" IS '参数配置表';
COMMENT ON COLUMN "public"."parameter_config"."id" IS 'pk';
COMMENT ON COLUMN "public"."parameter_config"."name" IS 'name';
COMMENT ON COLUMN "public"."parameter_config"."effectconn" IS 'effect jdbc name';
COMMENT ON COLUMN "public"."parameter_config"."dbconn" IS 'jdbc name';
COMMENT ON COLUMN "public"."parameter_config"."schema" IS 'database schema name';
COMMENT ON COLUMN "public"."parameter_config"."detail" IS 'string array or sql';
COMMENT ON COLUMN "public"."parameter_config"."type" IS '1list2sql3filter';
COMMENT ON COLUMN "public"."parameter_config"."default" IS 'default value';
COMMENT ON COLUMN "public"."parameter_config"."datatype" IS 'data type,1NUMBER2STRING3DATE4BOOLEAN5INTEGER6BIGNUMBER7SERIALIZABLE8BINARY9TIMESTAMP10INET';
COMMENT ON COLUMN "public"."parameter_config"."desc" IS 'description';

ALTER TABLE "public"."parameter_config" ADD CONSTRAINT "parameter_config_pkey" PRIMARY KEY ("id");
