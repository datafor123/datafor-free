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

package org.pentaho.mantle.client.ui.xul;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;

public class JsTheme extends JavaScriptObject {

  // Overlay types always have protected, zero argument constructors.
  protected JsTheme() {
  }

  public final native String getId() /*-{ return this.id; }-*/; //

  public final native String getName() /*-{ return this.name; }-*/; //

  public static final native JsArray<JsTheme> getThemes( String json )
  /*-{
    var obj = JSON.parse(json);

    // Sort themes alphabetically
    obj.theme = obj.theme.sort(function(a, b) {
      return (a.name > b.name) ? 1 : (a.name == b.name)? 0 : -1;
    });

    return obj.theme;
  }-*/;

}
