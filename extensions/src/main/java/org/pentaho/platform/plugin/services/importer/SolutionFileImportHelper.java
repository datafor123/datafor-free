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

package org.pentaho.platform.plugin.services.importer;

import org.pentaho.platform.api.mimetype.IMimeType;
import org.pentaho.platform.api.mimetype.IPlatformMimeResolver;
import org.pentaho.platform.engine.core.system.PentahoSystem;

public class SolutionFileImportHelper {

  IPlatformMimeResolver mimeResolver;
  static IPlatformMimeResolver testMimeResolver; // Allows Injection for unit tests

  SolutionFileImportHelper() {
    mimeResolver = testMimeResolver == null ? PentahoSystem.get( IPlatformMimeResolver.class ) : testMimeResolver;
  }

  public String getMime( String fileName ) {
    return mimeResolver.resolveMimeForFileName( fileName );
  }

  public IMimeType getMimeType( String fileName ) {
    return mimeResolver.resolveMimeTypeForFileName( fileName );
  }

  public boolean isInApprovedExtensionList( String fileName ) {
    boolean isInTheApprovedExtensionList = false;
    IMimeType mimeType = getMimeType( fileName );
    if ( mimeType != null ) {
      isInTheApprovedExtensionList = ( mimeType.getConverter() != null );
    }
    return isInTheApprovedExtensionList;
  }

  public boolean isInHiddenList( String fileName ) {
    boolean isInTheHiddenList = false;
    IMimeType mimeType = getMimeType( fileName );
    if ( mimeType != null ) {
      isInTheHiddenList = mimeType.isHidden();
    }
    return isInTheHiddenList;

  }
}
