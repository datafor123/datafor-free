/*!
 *
 * This program is free software; you can redistribute it and/or modify it under the
 * terms of the GNU General Public License, version 2 as published by the Free Software
 * Foundation.
 *
 * You should have received a copy of the GNU General Public License along with this
 * program; if not, you can obtain a copy at http://www.gnu.org/licenses/gpl-2.0.html
 * or from the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 *
 * Copyright (c) 2002-2018 Hitachi Vantara. All rights reserved.
 *
 */

package org.pentaho.platform.util.xml;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.dom4j.io.SAXReader;
import org.xml.sax.EntityResolver;
import org.xml.sax.SAXException;
import org.xml.sax.SAXNotRecognizedException;
import org.xml.sax.SAXNotSupportedException;

import javax.xml.XMLConstants;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParserFactory;

public class XMLParserFactoryProducer {

  private static final Log logger = LogFactory.getLog( XMLParserFactoryProducer.class );
  /**
   * Creates an instance of {@link DocumentBuilderFactory} class
   * with enabled {@link XMLConstants#FEATURE_SECURE_PROCESSING} property.
   * Enabling this feature prevents from some XXE attacks (e.g. XML bomb)
   * See PPP-3506 for more details.
   *
   * @throws ParserConfigurationException if feature can't be enabled
   *
   */
  public static DocumentBuilderFactory createSecureDocBuilderFactory() throws ParserConfigurationException {
    DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();
    docBuilderFactory.setFeature( XMLConstants.FEATURE_SECURE_PROCESSING, true );
    docBuilderFactory.setFeature( "http://apache.org/xml/features/disallow-doctype-decl", true );

    return docBuilderFactory;
  }

  /**
   * Creates an instance of {@link SAXParserFactory} class with enabled {@link XMLConstants#FEATURE_SECURE_PROCESSING} property.
   * Enabling this feature prevents from some XXE attacks (e.g. XML bomb)
   *
   * @throws ParserConfigurationException if a parser cannot
   *     be created which satisfies the requested configuration.
   *
   * @throws SAXNotRecognizedException When the underlying XMLReader does
   *            not recognize the property name.
   *
   * @throws SAXNotSupportedException When the underlying XMLReader
   *            recognizes the property name but doesn't support the
   *            property.
   */
  public static SAXParserFactory createSecureSAXParserFactory()
    throws SAXNotSupportedException, SAXNotRecognizedException, ParserConfigurationException {
    SAXParserFactory factory = SAXParserFactory.newInstance();
    factory.setFeature( XMLConstants.FEATURE_SECURE_PROCESSING, true );
    factory.setFeature( "http://xml.org/sax/features/external-general-entities", false );
    factory.setFeature( "http://xml.org/sax/features/external-parameter-entities", false );
    factory.setFeature( "http://apache.org/xml/features/nonvalidating/load-external-dtd", false );
    return factory;
  }

  public static SAXReader getSAXReader( final EntityResolver resolver ) {
    SAXReader reader = new SAXReader();
    if ( resolver != null ) {
      reader.setEntityResolver( resolver );
    }
    try {
      reader.setFeature( XMLConstants.FEATURE_SECURE_PROCESSING, true );
      reader.setFeature( "http://xml.org/sax/features/external-general-entities", false );
      reader.setFeature( "http://xml.org/sax/features/external-parameter-entities", false );
      reader.setFeature( "http://apache.org/xml/features/nonvalidating/load-external-dtd", false );
    } catch ( SAXException e ) {
      logger.error( "Some parser properties are not supported." );
    }
    reader.setIncludeExternalDTDDeclarations( false );
    reader.setIncludeInternalDTDDeclarations( false );
    return reader;
  }
}
