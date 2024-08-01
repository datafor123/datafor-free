#!/bin/sh

# *******************************************************************************************
# This program is free software; you can redistribute it and/or modify it under the
# terms of the GNU General Public License, version 2 as published by the Free Software
# Foundation.
#
# You should have received a copy of the GNU General Public License along with this
# program; if not, you can obtain a copy at http://www.gnu.org/licenses/gpl-2.0.html
# or from the Free Software Foundation, Inc.,
# 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
#
# This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
# without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
# See the GNU General Public License for more details.
#
#
# Copyright 2011 - 2020 Hitachi Vantara. All rights reserved.
# *******************************************************************************************

### ====================================================================== ###
##                                                                          ##
##  Hitachi Vantara Start Script                                                    ##
##                                                                          ##
### ====================================================================== ###

DIR_REL=`dirname $0`
cd $DIR_REL
DIR=`pwd`
#cd -

. "$DIR/set-datafor-env.sh"

setPentahoEnv "$DIR/jre"

### =========================================================== ###
## Set a variable for DI_HOME (to be used as a system property)  ##
## The plugin loading system for kettle needs this set to know   ##
## where to load the plugins from                                ##
### =========================================================== ###
DI_HOME="$DIR"/pentaho-solutions/system/kettle

errCode=0
if [ -f "$DIR/promptuser.sh" ]; then
  sh "$DIR/promptuser.sh"
  errCode="$?"
  rm "$DIR/promptuser.sh"
fi
if [ "$errCode" = 0 ]; then
  JAVA_HOME=$_PENTAHO_JAVA_HOME
  export JAVA_HOME
  if [ -e "$DIR/update/datafor-updater.jar" ]; then
      "$JAVA_HOME/bin/java" -jar "$DIR/update/datafor-updater.jar"
      mv "$DIR/update/datafor-updater.jar" "$DIR/update/datafor-updater_$(date +%Y%m%d%H%M%S).jar"
  fi
  if [ -e pgsql/bin/pg_ctl ]; then
      pgsql/bin/pg_ctl -D pgsql/data start
  fi
  CATALINA_OPTS="-Xms2048m -Xmx6144m -Dsun.rmi.dgc.client.gcInterval=3600000 -Dsun.rmi.dgc.server.gcInterval=3600000 -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8  -Djava.locale.providers=COMPAT,SPI -DDI_HOME=\"$DI_HOME\"  -Djava.awt.headless=true -Dhttps.protocols=TLSv1,TLSv1.1,TLSv1.2"
  export CATALINA_OPTS
  cd "$DIR/tomcat/bin"
  sh startup.sh
fi
