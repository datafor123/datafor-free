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

package org.pentaho.platform.plugin.action.jfreereport.outputs;

import org.pentaho.reporting.engine.classic.core.MasterReport;
import org.pentaho.reporting.engine.classic.core.ReportProcessingException;
import org.pentaho.reporting.engine.classic.core.layout.output.YieldReportListener;
import org.pentaho.reporting.engine.classic.core.modules.output.table.base.StreamReportProcessor;
import org.pentaho.reporting.engine.classic.core.modules.output.table.rtf.StreamRTFOutputProcessor;

import java.io.IOException;
import java.io.OutputStream;

/**
 * Creation-Date: 07.07.2006, 20:42:17
 * 
 * @author Thomas Morgner
 */
public class JFreeReportRTFComponent extends AbstractGenerateStreamContentComponent {
  private static final long serialVersionUID = -4095237855917616138L;

  public JFreeReportRTFComponent() {
  }

  @Override
  protected String getMimeType() {
    return "application/rtf"; //$NON-NLS-1$
  }

  @Override
  protected String getExtension() {
    return ".rtf"; //$NON-NLS-1$
  }

  @Override
  protected boolean performExport( final MasterReport report, final OutputStream outputStream ) {
    try {
      final StreamRTFOutputProcessor target =
          new StreamRTFOutputProcessor( report.getConfiguration(), outputStream, report.getResourceManager() );
      final StreamReportProcessor proc = new StreamReportProcessor( report, target );
      final int yieldRate = getYieldRate();
      if ( yieldRate > 0 ) {
        proc.addReportProgressListener( new YieldReportListener( yieldRate ) );
      }
      proc.processReport();
      proc.close();
      outputStream.close();
      close();
      return true;
    } catch ( ReportProcessingException e ) {
      return false;
    } catch ( IOException e ) {
      return false;
    }
  }
}
