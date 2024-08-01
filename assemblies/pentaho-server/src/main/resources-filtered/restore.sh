sh stop-datafor.sh
"java/bin/java" -cp "./pentaho-solutions/system/datafor-backup/lib/commons-io-2.2.jar":"./pentaho-solutions/system/datafor-backup/lib/datafor-backup-plugin-1.0.0.jar" com.datafor.backup.RestoreTask
sh start-datafor.sh
