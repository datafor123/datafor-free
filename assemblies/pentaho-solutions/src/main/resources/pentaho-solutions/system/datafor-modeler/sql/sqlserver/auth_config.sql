CREATE TABLE "auth_config" (
       "id" varchar(250) NOT NULL ,
       "dbconn" varchar(255) NOT NULL,
       "schema" varchar(255),
       "tbname" varchar(255) NOT NULL,
       "cols" nvarchar(4000),
       "rows" nvarchar(4000),
       "sql" nvarchar(4000),
       "enable" char(1) NOT NULL,
       "visible" char(1) NOT NULL,
       "add_time" datetime2(7),
       "add_by" varchar(200),
       "update_time" datetime2(7),
       "update_by" varchar(200),
       "name" varchar(255),
       "type" varchar(1),
       "editable" char(1) NOT NULL
)
;
ALTER TABLE "auth_config" ADD CONSTRAINT "auth_config_pkey" PRIMARY KEY ("id");