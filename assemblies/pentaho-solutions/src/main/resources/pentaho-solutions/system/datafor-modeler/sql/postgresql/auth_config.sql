CREATE TABLE "public"."auth_config" (
       "id" varchar(250) COLLATE "pg_catalog"."default" NOT NULL,
       "dbconn" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
       "schema" varchar(255) COLLATE "pg_catalog"."default",
       "tbname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
       "cols" text COLLATE "pg_catalog"."default",
       "rows" text COLLATE "pg_catalog"."default",
       "sql" text COLLATE "pg_catalog"."default",
       "enable" char(1) COLLATE "pg_catalog"."default" NOT NULL,
       "visible" char(1) COLLATE "pg_catalog"."default" NOT NULL,
       "add_time" timestamp(6),
       "add_by" varchar(200) COLLATE "pg_catalog"."default",
       "update_time" timestamp(6),
       "update_by" varchar(200) COLLATE "pg_catalog"."default",
       "name" varchar(255) COLLATE "pg_catalog"."default",
       "type" varchar(1) COLLATE "pg_catalog"."default",
       "editable" char(1) COLLATE "pg_catalog"."default" NOT NULL DEFAULT 1
)
;
COMMENT ON TABLE "auth_config" IS 'data security config';
COMMENT ON COLUMN "auth_config"."dbconn" IS 'connection name';
COMMENT ON COLUMN "auth_config"."schema" IS 'schema name';
COMMENT ON COLUMN "auth_config"."tbname" IS 'table name';
COMMENT ON COLUMN "auth_config"."cols" IS 'columns config';
COMMENT ON COLUMN "auth_config"."rows" IS 'rows config';
COMMENT ON COLUMN "auth_config"."sql" IS 'sql config';
COMMENT ON COLUMN "auth_config"."enable" IS 'enable(0false,1true)';
COMMENT ON COLUMN "auth_config"."visible" IS 'table visible,0false,1true,2not set';
COMMENT ON COLUMN "auth_config"."add_time" IS 'add time';
COMMENT ON COLUMN "auth_config"."add_by" IS 'creator';
COMMENT ON COLUMN "auth_config"."update_time" IS 'update time';
COMMENT ON COLUMN "auth_config"."update_by" IS 'updator';
COMMENT ON COLUMN "auth_config"."name" IS 'username or rolename';
COMMENT ON COLUMN "auth_config"."type" IS '0user1role';
COMMENT ON COLUMN "auth_config"."editable" IS 'editable:0false1true';

ALTER TABLE "public"."auth_config" ADD CONSTRAINT "auth_config_pkey" PRIMARY KEY ("id");