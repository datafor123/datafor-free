/*!
 *
 * This program is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License, version 2.1 as published by the Free Software
 * Foundation.
 *
 * You should have received a copy of the GNU Lesser General Public License along with this
 * program; if not, you can obtain a copy at http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
 * or from the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 *
 *
 * Copyright (c) 2002-2018 Hitachi Vantara. All rights reserved.
 *
 */

package org.pentaho.platform.plugin.action.jfreereport;

import org.pentaho.commons.connection.IPentahoResultSet;

/**
 * Creation-Date: 08.07.2006, 13:19:45
 * 
 * @author Thomas Morgner
 * @deprecated This is an empty stub in case we have to maintain backward compatiblity.
 */
@Deprecated
public class PentahoTableModel extends org.pentaho.platform.plugin.action.jfreereport.helper.PentahoTableModel {
  private static final long serialVersionUID = 3946748761053175483L;

  public PentahoTableModel( final IPentahoResultSet rs ) {
    super( rs );
  }
}
