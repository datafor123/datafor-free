# Datafor Visualization and Analysis

Datafor Visualization and Analysis is a self-service agile BI tool that provides intuitive and user-friendly data visualization and analysis capabilities to help users quickly explore, analyze, and make decisions with their data.

Datafor is developed based on [Pentaho BA Server Core](https://github.com/pentaho/pentaho-platform).


## Features

**Data Connectivity:** Supports connecting to various data sources, including relational databases, NoSQL databases, data warehouses, cloud data sources, and file data sources.

**Data Visualization:** Offers a rich variety of visual charts and elements with customization options, enabling users to easily create beautiful data analysis reports and data visualization pages.

**Multidimensional Analysis:** Provides powerful multidimensional analysis capabilities to help users delve into the patterns and relationships behind the data, uncovering potential business opportunities and issues.

**Embedded Analytics:** Supports embedding data visualization and analysis functions into other applications to achieve real-time data visualization and analysis.

## Screenshots

#### WYSIWYG Designer


<div style="text-align:center">
  <img class="img-responsive" src="https://github.com/datafor123/docs/raw/main/images/1%20visualizer.PNG"  />
</div>

#### Create multi-dimensional models in a few clicks

<div style="text-align:center">
  <img class="img-responsive" src="https://github.com/datafor123/docs/raw/main/images/4%20modeler.png"  />
</div>

#### Interactive analysis report

<div style="text-align:center">
  <img class="img-responsive" src="https://github.com/datafor123/docs/raw/main/images/demo2.gif"  width="100%" />
</div>

#### Cool visualization

<div style="text-align:center">
  <img class="img-responsive" src="https://github.com/datafor123/docs/raw/main/images/5%20demo.PNG"  />
</div>

## Get Datafor

You can download Datafor for the following platforms:

- [Linux](https://github.com/datafor123/datafor-free/releases/download/6.06/datafor-server-free-linux-6.06.zip)
- [Windows](https://github.com/datafor123/datafor-free/releases/download/6.06/datafor-server-free-windows-6.06.zip)

## Install Manual

- [CentOS](https://help.datafor.com.cn/docs/en/20%20setup/datafor-centos)
- [Ubuntu](https://help.datafor.com.cn/docs/en/20%20setup/datafor-ubuntu)
- [Windows](https://help.datafor.com.cn/docs/en/20%20setup/datafor-windows)
- [Docker](https://help.datafor.com.cn/docs/en/20%20setup/datafor-docker)

## Get Help

- For bug reports and feature requests, visit our [GitHub Issues](https://github.com/datafor123/datafor-free//issues) page.
- For general questions, email us at [support@datafor.com.cn](mailto:support@datafor.com.cn).
- Refer to the [help](https://help.datafor.com.cn/docs/en/) documentation for additional assistance.

## Free Edition V.S. Enterprise Edition

The Enterprise Edition offers significant advantages over the Free Edition, including support for more data sources, advanced analysis and visualization features, enhanced security, improved integration options, and optimized system performance.

<table>
  <tr>
    <th colspan="2" style="width:40%;text-align:center;">Features</th>
    <th style="width:30%;text-align:center;">Free Edition</th>
    <th style="width:30%;text-align:center;">Enterprise Edition</th>
  </tr>
  <tr>
    <td rowspan="2" style="width:15%">Data Sources</td>
    <td style="width:25%">Relational Databases</td>    
    <td align="center">MySQL, PostgreSQL, Oracle, MS SQL Server</td>
    <td align="center">Addition: GaussDB, Gaussdb2000, Greenplum, Tidb, Clickhouse, SparkSQL, Cloudera Impala, Snowflake, Impala, Hadoop Hive 2, Hana, InfluxDB, MongoDB,  Doris, Redshift</td>
  </tr>
  <tr>
    <td >File Upload (CSV, Excel)</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td rowspan="5">Analysis Models</td>
    <td>Multidimensional Modeling</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Data Masking</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Data Dictionary</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Calculated Fields</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Calculated Measures</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td rowspan="8">Visualization</td>
    <td>Charts</td>
    <td align="center">Pivot Table, Table, KPI Card, Dimension Field Information, Clustered Column Chart, Stacked Column Chart, 100% Stacked Column Chart, Clustered Bar Chart, Stacked Bar Chart, 100% Stacked Bar Chart, Line Chart, Column Line Chart, Pie Chart, Scatter Plot, Sunburst Chart, Gauge, Sankey</td>
    <td align="center">Addition：Parent-Child Tree Table, Hierarchical Tree Table, </td>
  </tr>
  <tr>
    <td>Maps</td>
    <td align="center">Filled GeoJson Map, Marker GeoJson Map, GIS Marker Map</td>
    <td align="center">Addition：Heat Map, Mapbox/AMap, Image Map</td>
  </tr>
  <tr>
    <td>Assists Components</td>
    <td align="center">Image File, Tabs, Text, SVG, Icon Fonts, Rectangle, Line, Ellipse, Hyperlink</td>
    <td align="center">Addition: Hyperlink</td>
  </tr>
  <tr>
    <td>Filter Components</td>
    <td align="center">Dropdown, List Box, Button, Radio/Checkbox, Date, Date Range, Timeline, Range Timeline, Numeric Range Filter</td>
    <td align="center">Addition: Pager, Search</td>
  </tr>
  <tr>
    <td>Custom Styles</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Parameter Controller</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Mobile Layout</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Export to PDF, PNG, CSV, Excel</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td rowspan="6">Analysis</td>
    <td>Cross-Model analytics</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Drill Down</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Custom Events</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Drill Through</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Parameters</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Calculated Measures</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td rowspan="3">Security</td>
    <td>File, Folder, and Analysis Model Access Control</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Row-Level Security</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Object-Level Security</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td rowspan="7">Integration and Embedding</td>
    <td>Single Sign-On</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Share Links</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>LDAP</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>CAS</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>JWT</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>WeChat</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>DingTalk</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td rowspan="8">System</td>
    <td>Users and Roles</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Report Export/Import</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Analysis Model Export/Import</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Lineage Analysis</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Log Auditing</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>ETL Scheduling (Integrated with Kettle)</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Backup and Restore</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Enterprise Data Portal</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td rowspan="2">Performance</td>
    <td>Pre-Aggregated Tables</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Query and Model Caching</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td rowspan="4">Support</td>
    <td>Help document</td>
    <td align="center">&#x2705;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Training</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Technical Support</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
  <tr>
    <td>Customization</td>
    <td align="center">&#x274C;</td>
    <td align="center">&#x2705;</td>
  </tr>
</table>


## Contact us

marketing@datafor.com.cn





