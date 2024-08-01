CREATE TABLE "auth_config" (
       "id" varchar(250) NOT NULL ,
       "dbconn" varchar(255) NOT NULL,
       "schema" varchar(255),
       "tbname" varchar(255) NOT NULL,
       "cols" varchar(65535),
       "rows" varchar(65535),
       "sql" varchar(65535),
       "enable" char(1) NOT NULL,
       "visible" char(1) NOT NULL,
       "add_time" timestamp(6),
       "add_by" varchar(200),
       "update_time" timestamp(6),
       "update_by" varchar(200),
       "name" varchar(255),
       "type" varchar(1),
       "editable" char(1) NOT NULL
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

ALTER TABLE "auth_config" ADD CONSTRAINT "auth_config_pkey" PRIMARY KEY ("id");