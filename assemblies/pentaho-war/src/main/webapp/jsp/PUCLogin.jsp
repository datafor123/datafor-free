<%--
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
* Copyright (c) 2002-2020 Hitachi Vantara..  All rights reserved.
--%>

<%@ taglib prefix='c' uri='http://java.sun.com/jstl/core'%>
<%@
    page language="java"
    import="org.springframework.security.web.savedrequest.SavedRequest,
            org.pentaho.platform.web.http.security.PreventBruteForceException,
            org.pentaho.platform.engine.core.system.PentahoSystem,
            org.pentaho.platform.util.messages.LocaleHelper,
            org.pentaho.platform.api.engine.IPentahoSession,
            org.pentaho.platform.api.engine.IPluginManager,
            org.pentaho.platform.web.jsp.messages.Messages,
            java.util.ArrayList,
            java.util.Iterator,
            java.util.LinkedHashMap,
            java.util.List,
            java.util.Map,
            java.util.StringTokenizer,
            javax.servlet.http.HttpSession,
            org.pentaho.platform.engine.core.system.PentahoSessionHolder,
            org.owasp.encoder.Encode"%>>
<%!
  // List of request URL strings to look for to send 401

  private List<String> send401RequestList;

  public final String SPRING_SECURITY_SAVED_REQUEST_KEY = "SPRING_SECURITY_SAVED_REQUEST";

  public void jspInit() {
    // super.jspInit();
    send401RequestList = new ArrayList<String>();
    String unauthList = getServletConfig().getInitParameter("send401List"); //$NON-NLS-1$
    if (unauthList == null) {
      send401RequestList.add("AdhocWebService"); //$NON-NLS-1$
    } else {
      StringTokenizer st = new StringTokenizer(unauthList, ","); //$NON-NLS-1$
      String requestStr;
      while (st.hasMoreElements()) {
        requestStr = st.nextToken();
        send401RequestList.add(requestStr.trim());
      }
    }
  }
%>
<%
  response.setCharacterEncoding(LocaleHelper.getSystemEncoding());
  String path = request.getContextPath();

  IPentahoSession userSession = PentahoSessionHolder.getSession();
  // SPRING_SECURITY_SAVED_REQUEST_KEY contains the URL the user originally wanted before being redirected to the login page
  // if the requested url is in the list of URLs specified in the web.xml's init-param send401List,
  // then return a 401 status now and don't show a login page (401 means not authenticated)
  Object reqObj = request.getSession().getAttribute(SPRING_SECURITY_SAVED_REQUEST_KEY);
  String requestedURL = "";
  if (reqObj != null) {
    requestedURL = ((SavedRequest) reqObj).getRedirectUrl();

    String lookFor;
    for (int i=0; i<send401RequestList.size(); i++) {
      lookFor = send401RequestList.get(i);
      if ( requestedURL.indexOf(lookFor) >=0 ) {
        response.sendError(401);
        return;
      }
    }
  }

  boolean loggedIn = request.getRemoteUser() != null && request.getRemoteUser() != "";
  int year = (new java.util.Date()).getYear() + 1900;

  boolean showUsers = Boolean.parseBoolean(PentahoSystem.getSystemSetting("login-show-sample-users-hint", "true"));
%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" class="bootstrap">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <!--title><--%=Messages.getInstance().getString("UI.PUC.TITLE")%></title-->
  <title>Login</title>
  <%
    String ua = request.getHeader( "User-Agent" );
    if ( ua != null ) {
      ua = ua.toLowerCase();
    } else {
      ua = "none";
    }
    if ( !"desktop".equalsIgnoreCase( request.getParameter( "mode") ) ) {
      if ( ua.contains( "ipad" )   || ua.contains( "ipod" )    ||
           ua.contains( "iphone" ) || ua.contains( "android" ) ||
           "mobile".equalsIgnoreCase( request.getParameter( "mode" ) ) ) {

        IPluginManager pluginManager = PentahoSystem.get( IPluginManager.class, PentahoSessionHolder.getSession() );
        List<String> pluginIds = pluginManager.getRegisteredPlugins();
        for ( String id : pluginIds ) {
          String mobileRedirect = (String)pluginManager.getPluginSetting( id, "mobile-redirect", null );
          if ( mobileRedirect != null ) {
            // we have a mobile redirect
            String queryString = request.getQueryString();
            if( queryString != null ) {
              final Map<String, String> queryPairs = new LinkedHashMap<String, String>();
              //Check for deep linking by fetching the name and startup-url values from URL query parameters
              String[] pairs = queryString.split( "&" );
              for ( String pair : pairs ) {
                int delimiter = pair.indexOf( "=" );
                queryPairs.put( Encode.forJavaScript( pair.substring( 0, delimiter ) ),  Encode.forJavaScript( pair.substring( delimiter + 1 ) ) );
              }
              if ( queryPairs.size() > 0 ) {
                mobileRedirect += "?";
                Iterator it = queryPairs.entrySet().iterator();
                while ( it.hasNext() ) {
                  Map.Entry entry = (Map.Entry) it.next();
                  mobileRedirect += entry.getKey() + "=" + entry.getValue();
                  it.remove();
                    if ( it.hasNext() ){
                      mobileRedirect += "&";
                    }
                }
              }
            }
  %>
</head>
<BODY>
<!-- this div is here for authentication detection (used by mobile, PIR, etc) -->
</BODY>
</HTML>
<%
          return;
        }
      }
    }
  }
%>

<meta name="gwt:property" content="locale=<%=Encode.forHtmlAttribute(request.getLocale().toString())%>">
<link rel="stylesheet" href="../console/umi.css" />
 <script type="text/javascript">
	function pageLoaded(){
    if (<%=loggedIn%>) {
      window.location.href = "/datafor/console";
    }
	}
</script>
</head>
<body onload="pageLoaded()" group="datafor-actual-login-agent">
<link
  type="text/css"
  rel="stylesheet"
  href="../console/themes/light.css"
  id="theme_extend"
/>
<script>
  window.routerBase = "/";
</script>
<script>
  //! umi version: 3.2.24
</script>
<div id="root"></div>
<script src="../console/umi.js"></script>

</body>
