CREATE TABLE "public"."driver_manager" (
      "id" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
      "name" varchar(200) COLLATE "pg_catalog"."default",
      "type" varchar(200) COLLATE "pg_catalog"."default",
      "typeuse" varchar(1) COLLATE "pg_catalog"."default",
      "file_names" varchar(2000) COLLATE "pg_catalog"."default" NOT NULL,
      "driver_class" varchar(200) COLLATE "pg_catalog"."default",
      "version" varchar(200) COLLATE "pg_catalog"."default",
      "add_by" varchar(255) COLLATE "pg_catalog"."default",
      "add_time" timestamp(6),
      "update_by" varchar(200) COLLATE "pg_catalog"."default",
      "update_time" timestamp(6) NOT NULL
)
;
COMMENT ON TABLE "public"."driver_manager" IS '驱动管理配置表';
COMMENT ON COLUMN "public"."driver_manager"."id" IS '名称';
COMMENT ON COLUMN "public"."driver_manager"."file_names" IS '多个文件名数组["",""]';
COMMENT ON COLUMN "public"."driver_manager"."driver_class" IS '驱动类';
COMMENT ON COLUMN "public"."driver_manager"."version" IS '版本';
COMMENT ON COLUMN "public"."driver_manager"."add_by" IS '创建者';
COMMENT ON COLUMN "public"."driver_manager"."add_time" IS '创建时间';
COMMENT ON COLUMN "public"."driver_manager"."name" IS '名称';
COMMENT ON COLUMN "public"."driver_manager"."update_by" IS '更新者';
COMMENT ON COLUMN "public"."driver_manager"."update_time" IS '更新时间，不能为空，用于判断版本';
COMMENT ON COLUMN "public"."driver_manager"."type" IS '数据库类型';
COMMENT ON COLUMN "public"."driver_manager"."typeuse" IS '类型默认驱动1是0否';

-- ----------------------------
-- Records of driver_manager
-- ----------------------------
INSERT INTO "public"."driver_manager" VALUES ('mssqlnative', 'mssqlnative', 'MSSQLNative', '1', '["sqljdbc4.jar"]', 'com.microsoft.sqlserver.jdbc.SQLServerDriver', '3.0','admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('mongodb', 'mongodb', 'MONGODB', '1', '["mongosql-auth-1.0.0.jar","mysql-connector-java-5.1.49.jar"]', 'com.mysql.jdbc.Driver', '5.1.49','admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('mysql8', 'mysql8', 'MYSQL', '1', '["mysql-connector-java-8.0.29.jar"]', 'com.mysql.cj.jdbc.Driver', '8.0.29','admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('mysql5', 'mysql5', 'MYSQL', '0', '["mysql-connector-java-5.1.49.jar"]', 'com.mysql.jdbc.Driver', '5.1.49','admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('postgresql', 'postgresql', 'POSTGRESQL', '1', '["postgresql-42.5.1.jar"]', 'org.postgresql.Driver', '42.5.1','admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('gaussdb200', 'gaussdb200', 'GAUSSDB200', '1', '["postgresql-42.5.1.jar"]', 'org.postgresql.Driver','42.5.1', 'admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('opengauss', 'opengauss', 'OPENGAUSS', '1', '["postgresql-42.5.1.jar"]', 'org.postgresql.Driver', '42.5.1','admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('greenplum', 'greenplum', 'GREENPLUM', '1', '["postgresql-42.5.1.jar"]', 'org.postgresql.Driver', '42.5.1', 'admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('tidb', 'tidb', 'TIDB', '1', '["mysql-connector-java-5.1.49.jar"]', 'com.mysql.jdbc.Driver', '5.1.49', 'admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('hana', 'hana', 'HANA', '1', '["ngdbc-2.14.7.jar"]', 'com.sap.db.jdbc.Driver', '2.14.7', 'admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('influxdb', 'influxdb', 'INFLUXDB', '1', '["converter-moshi-2.5.0.jar","hamcrest-core-1.3.jar","influxdb-java-2.15.jar","influxdb-jdbc-driver-1.0.0.jar","logging-interceptor-3.13.1.jar","moshi-1.5.0.jar","msgpack-core-0.8.16.jar","okhttp-3.13.1.jar","okio-1.17.2.jar","retrofit-2.5.0.jar"]', 'com.datafor.influxdb.jdbc.InfluxdbDriver', '1.0', 'admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('oracle', 'oracle', 'ORACLE', '1', '["ojdbc6.11.2.0.4.0.jar"]', 'oracle.jdbc.driver.OracleDriver' ,'11.2.0.4.0', 'admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('doris', 'doris', 'DORIS', '1', '["mysql-connector-java-5.1.49.jar"]', 'com.mysql.jdbc.Driver' ,'5.1.49', 'admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('clickhouse', 'clickhouse', 'CLICKHOUSE', '1', '["lz4-java-1.8.0.jar","clickhouse-jdbc-0.3.2-patch9.jar","clickhouse-http-client-0.3.2-patch9-shaded.jar","clickhouse-grpc-client-0.3.2-patch9-netty.jar"]', 'com.clickhouse.jdbc.ClickHouseDriver', '0.3.2', 'admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('redshift', 'redshift', 'REDSHIFT', '1', '["aws-java-sdk-core-1.11.118.jar","aws-java-sdk-redshift-1.11.118.jar","aws-java-sdk-sts-1.11.118.jar","commons-codec-1.9.jar","commons-logging-1.2.jar","httpclient-4.5.2.jar","httpcore-4.4.4.jar","jackson-annotations-2.6.0.jar","jackson-core-2.6.6.jar","jackson-databind-2.6.6.jar","jackson-dataformat-cbor-2.6.6.jar","joda-time-2.8.1.jar","redshift-jdbc42-2.0.0.4.jar"]', 'com.amazon.redshift.jdbc.Driver', '2.0.0.4', 'admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('transwarpinceptor', 'transwarpinceptor', 'TRANSWARPINCEPTOR', '1', '["inceptor-driver-8.16.0.jar"]', 'org.apache.hive.jdbc.HiveDriver', '8.16', 'admin', '2023-08-22 14:00:00', 'admin', '2023-08-22 14:00:00');
INSERT INTO "public"."driver_manager" VALUES ('snowflake', 'snowflake', 'SNOWFLAKEHV', NULL, '["snowflake-jdbc-3.15.0.jar"]', 'net.snowflake.client.jdbc.SnowflakeDriver', '3.15', 'admin', '2024-04-01 17:10:21.851', 'admin', '2024-04-01 17:10:21.851');

-- ----------------------------
-- Primary Key structure for table driver_manager
-- ----------------------------
ALTER TABLE "public"."driver_manager" ADD CONSTRAINT "drivermanager_pkey" PRIMARY KEY ("id");
