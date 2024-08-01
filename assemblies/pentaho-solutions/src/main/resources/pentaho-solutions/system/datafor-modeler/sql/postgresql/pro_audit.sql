-- hinernate.public下
CREATE TABLE "pro_audit" (
  "job_id" varchar(200) COLLATE "pg_catalog"."default",
  "inst_id" varchar(200) COLLATE "pg_catalog"."default",
  "obj_id" varchar(1024) COLLATE "pg_catalog"."default",
  "obj_type" varchar(200) COLLATE "pg_catalog"."default",
  "actor" varchar(200) COLLATE "pg_catalog"."default",
  "message_type" varchar(200) COLLATE "pg_catalog"."default",
  "message_name" varchar(200) COLLATE "pg_catalog"."default",
  "message_text_value" varchar(1024) COLLATE "pg_catalog"."default",
  "message_num_value" numeric(19,0),
  "duration" numeric(19,3),
  "audit_time" timestamp(6)
)
;
COMMENT ON TABLE "pro_audit" IS '审计表';
alter table pro_audit owner to hibuser;
CREATE INDEX "idx_pro_audit_message_type" ON "pro_audit" USING btree (
  "message_type" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_pro_audit_tracker_audit_time" ON "pro_audit" USING btree (
  "audit_time" "pg_catalog"."timestamp_ops" ASC NULLS LAST
);

