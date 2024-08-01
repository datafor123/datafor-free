CREATE TABLE `auth_config` (
       `id` varchar(250) NOT NULL,
       `dbconn` varchar(255) NOT NULL COMMENT 'connection name',
       `schema` varchar(255) COMMENT 'schema name',
       `tbname` varchar(255) NOT NULL COMMENT 'table name',
       `cols` text COMMENT 'columns config',
       `rows` text COMMENT 'rows config',
       `sql` text COMMENT 'sql config',
       `enable` char(1) NOT NULL COMMENT 'enable(0false,1true)',
       `visible` char(1) NOT NULL COMMENT 'table visible,0false,1true,2not set',
       `add_time` timestamp(6) COMMENT 'add time',
       `add_by` varchar(200) COMMENT 'creator',
       `update_time` timestamp(6) COMMENT 'update time',
       `update_by` varchar(200) COMMENT 'updator',
       `name` varchar(255) COMMENT 'username or rolename',
       `type` varchar(1) COMMENT '0user1role',
       `editable` char(1) NOT NULL COMMENT 'editable:0false1true'
)  COMMENT = 'data security config';


ALTER TABLE `auth_config` ADD CONSTRAINT `auth_config_pkey` PRIMARY KEY (`id`);