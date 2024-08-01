CREATE TABLE "public"."dataset_file" (
  "id" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "dbconn" varchar(50) COLLATE "pg_catalog"."default",
  "schema" varchar(50) COLLATE "pg_catalog"."default",
  "file_name" varchar(100) COLLATE "pg_catalog"."default",
  "batch" varchar(50) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6),
  "status" varchar(2) COLLATE "pg_catalog"."default",
  "lock" varchar(2) COLLATE "pg_catalog"."default",
  "create_by" varchar(50) COLLATE "pg_catalog"."default",
  "error_msg" varchar(2000) COLLATE "pg_catalog"."default",
  "count" varchar(2000) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "dataset" varchar(50) COLLATE "pg_catalog"."default",
  "config" varchar(2000) COLLATE "pg_catalog"."default"
)
;
COMMENT ON TABLE "public"."dataset_file" IS '文件上传配置表';
COMMENT ON COLUMN "public"."dataset_file"."id" IS 'id';
COMMENT ON COLUMN "public"."dataset_file"."dbconn" IS '数据库连接名称';
COMMENT ON COLUMN "public"."dataset_file"."schema" IS 'schema';
COMMENT ON COLUMN "public"."dataset_file"."file_name" IS '文件名称';
COMMENT ON COLUMN "public"."dataset_file"."batch" IS '批次号';
COMMENT ON COLUMN "public"."dataset_file"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."dataset_file"."status" IS '1:成功，2：失败，3：等待';
COMMENT ON COLUMN "public"."dataset_file"."lock" IS '0:未锁定1:锁定';
COMMENT ON COLUMN "public"."dataset_file"."create_by" IS '创建者';
COMMENT ON COLUMN "public"."dataset_file"."error_msg" IS '错误信息';
COMMENT ON COLUMN "public"."dataset_file"."count" IS '上传数量,{"table":num}';
COMMENT ON COLUMN "public"."dataset_file"."dataset" IS '数据集';
COMMENT ON COLUMN "public"."dataset_file"."config" IS '配置';

ALTER TABLE "public"."dataset_file" ADD CONSTRAINT "dataset_file_pkey" PRIMARY KEY ("id");
