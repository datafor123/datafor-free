<!DOCTYPE html>
<%@ page language="java" import="
org.pentaho.platform.engine.core.system.PentahoRequestContextHolder,
org.pentaho.platform.engine.core.system.PentahoSystem,
org.springframework.security.core.Authentication,
org.springframework.security.core.context.SecurityContextHolder" %>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=11" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="expires" content="-1" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0"
    />
    <link rel="icon" type="image/x-icon" href="/console/images/logo.png" />
    <title name="logined-userconsole">DATAFOR - Visualizer and Analytics</title>
    <link rel="stylesheet" href="../../console/umi.edfbe05e.css" />
    <script>
      window.routerBase = "/";
    </script>
		<% String
		contextPath=PentahoRequestContextHolder.getRequestContext().getContextPath();
		boolean isLogged=false; Authentication existingAuth =
		SecurityContextHolder.getContext().getAuthentication();
		if(existingAuth!=null&&!PentahoSystem.getSystemSetting(
		"anonymous-authentication/anonymous-user", "anonymousUser"
		).equals(existingAuth.getName())&&existingAuth.isAuthenticated()){
		isLogged=true; } %>

		<script>
			window.dataforLoginJspVarsImport = {
				isLogged: "<%=isLogged%>",
				contextPath: "<%=contextPath%>",
				startupTime: Date.now(),
			};
			// console.log("isLogged:<%=isLogged%>");
			// console.log("contextPath:<%=contextPath%>");
			//! umi version: 3.5.20
		</script>
  </head>
  <body>
    <link
      type="text/css"
      rel="stylesheet"
      href="../../console/themes/normal.css?_t=1686277708991"
      id="theme_extend"
    />
    <div id="sys-loading"></div>
    <div id="sys-modal"></div>
    <i id="react-empty-container"></i>

    <div id="root"></div>
    <script src="../../console/umi.f4269c00.js"></script>
  </body>
</html>
