// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Magic,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

// Import images
const images = {
  intro_realm_timeline: require('./assets/images/introducing-realm-timeline.png'),
  realm_customers: require('./assets/images/realm_customers.png'),
  benchmarks_counts: require('./assets/images/benchmarks_counts.png'),
  benchmarks_queries: require('./assets/images/benchmarks_queries.png'),
  benchmarks_inserts: require('./assets/images/benchmarks_inserts.png'),
  realm_studio: require('./assets/images/realm_studio.png'),
  react_native_state: require('./assets/images/react_native_state.png'),
  competitors: require('./assets/images/competitors.png')
};

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#7b233f',
    tertiary: '#000000',
    quartenary: '#6a5fdb',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const codeSnippets = {
  basicOperations: "=, ==, >=, <=, !=, <>"
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Realm
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            An alternative to SQLite
          </Text>
            <Cite>by Lewis King</Cite>
            <br/>
            <Cite>LinkedIn: lewis-robert-king</Cite>
            <Cite>GitHub: lewis-king </Cite>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={2} textColor="primary">
            What is Realm?
          </Heading>
          <Text size={6} textColor="primary">
            Realm is a platform centred around a mobile-first database
          </Text>
        </Slide>
        <Slide
          notes="Lots of innovation in the server side space and not any in mobile/embedded space.
                 SQLite was designed over 15 years ago for use on board the US Navy’s guided missile destroyers
                 Mobile revolution with like of the iPhone released in 2007, mobiles are getting more powerful.
                 Just like we've moved more to the client with innovations like the V8 engine, a gap has been present in the mobile space">
          <Image src={images.intro_realm_timeline.replace('/', '')}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Why Realm?
          </Heading>
          <List>
            <ListItem>Ease of use</ListItem>
            <ListItem>Speed</ListItem>
            <ListItem>Cross-platform</ListItem>
            <ListItem>100% Offline capability</ListItem>
            <ListItem>Well-documented</ListItem>
            <ListItem>Open-source and Free!</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"
          notes={'Realm data models are defined by the schema information passed into a Realm during initialization.' +
          ''}
        >
          <Heading size={5} textColor="primary">
            Ease of use
          </Heading>
          <Heading size={6} textColor="primary">
            Database Model
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/create_schema1.js
            source={'//db/realm.js\n' +
            'import Realm from \'realm\';\n' +
            '\n' +
            'class Question extends Realm.Object {}\n' +
            'Question.schema = {\n' +
            '  name: \'Question\',\n' +
            '  primaryKey: \'id\',\n' +
            '  properties: {\n' +
            '    id: \'int\',\n' +
            '    question: \'string\',\n' +
            '    acceptableAnswers: \'string[]\',\n' +
            '    answered: \'bool\'\n' +
            '  }\n' +
            '};\n' +
            '\n' +
            'export default new Realm({schema: [Question]});'}
          />
        </Slide>
        <Magic>
        <Slide bgColor="secondary" textColor="primary"
          notes={"Non-read-only operations must take place in a 'Write' transaction block."}
        >
          <Heading size={6} textColor="primary">
            Create
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/write_schema1.js
            source={'import realm from \'../db/realm\';\n' +
            '\n' +
            'realm.write(() => {\n' +
            '  realm.create(\'Question\',\n' +
            '    {\n' +
            '      id: 1,\n' +
            '      question: "I scored the first goal in the 2018 World Cup",\n' +
            '      acceptableAnswers: [""],\n' +
            '      answered: false,\n' +
            '    })\n' +
            '});'}
          />
        </Slide>
        <Slide bgColor="secondary" textColor="primary"
               notes={"Non-read-only operations must take place in a 'Write' transaction block."}
        >
          <Heading size={6} textColor="primary">
            Create
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/write_schema1.js
            source={'import realm from \'../db/realm\';\n' +
            '\n' +
            'realm.write(() => {\n' +
            '  realm.create(\'Question\',\n' +
            '    {\n' +
            '      id: 1,\n' +
            '      question: "I scored the first goal in the 2018 World Cup",\n' +
            '      acceptableAnswers: ["Yury Gazinsky", "Gazinsky"],\n' +
            '      answered: false,\n' +
            '    })\n' +
            '});'}
          />
        </Slide>
        </Magic>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">
            Read
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/read_schema1.js
            source={'import realm from \'../db/realm\';\n' +
            '\n' +
            'const questions = realm.objects("Question");'}
          />
        </Slide>
        <Magic>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={6} textColor="primary">
              Update
            </Heading>
            <CodePane
              lang="javascript"
              //code_snippets/realm/update_schema1.js
              source={'import realm from \'../db/realm\';\n' +
              '\n' +
              'realm.write(() => {\n' +
              '  realm.create(\'Question\', {id: 1, answered: true}, true);\n' +
              '});'}
            />
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={6} textColor="primary">
              Update 2
            </Heading>
            <CodePane
              lang="javascript"
              //code_snippets/realm/update_schema1.js
              source={'import realm from \'../db/realm\';\n' +
              '\n' +
              'realm.write(() => {\n' +
              '  question.answered = true;\n' +
              '});'}
            />
          </Slide>
        </Magic>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">
            Delete
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/update_schema1.js
            source={'import realm from \'../db/realm\';\n' +
            '\n' +
            'realm.write(() => {\n' +
            '  const questions = realm.objects(\'Question\');\n' +
            '  realm.delete(questions);\n' +
            '});'}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Transactionality?
          </Heading>
          <List>
            <ListItem>Exceptions thrown in <Code>write()</Code> will cancel the transaction</ListItem>
            <ListItem>Using a try/catch block is good practice</ListItem>
          </List>
          <CodePane
            lang="javascript"
            source={'try {\n' +
            '  realm.write(() => {\n' +
            '    //Insert create statement as seen in a previous slide\n' +
            '  });\n' +
            '} catch (e) {\n' +
            '    //Log the exception and notify the user something has gone wrong\n' +
            '}'}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">
            Querying
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/update_schema1.js
            source={'import realm from \'../db/realm\';\n' +
            '\n' +
            'let unansweredQuestions = realm.objects(\'Question\').filtered(\'answered == false\').sorted(\'id\');'}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"
          notes="Query language inspired by Apple's NSPredicate which is a cross between SQL's WHERE clause and Regular Expression syntax">
          <Heading size={5} textColor="primary">
            Filtering
          </Heading>
          <Heading size={6} textColor="primary">
            Query language inspired by Apple's NSPredicate
          </Heading>
          <List>
            <Text fit={true} textColor="primary">Basic Comparison - <Code>{codeSnippets.basicOperations}</Code> <br/><br/>
            Compound Operators - <Code>AND / &&, OR / ||, NOT / !</Code> <br/><br/>
            String Comparison - <Code>BEGINSWITH, CONTAINS, ENDSWITH, LIKE</Code> <br/><br/>
            Aggregate Expressions - <Code>@count/@size, @min, @max, @sum and @avg</Code> <br/><br/>
            Argument substitution - <Code>$ e.g. country.population >= $0</Code></Text>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Data Model Migration
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/update_schema1.js
            source={'//db/realm.js\n' +
            'import Realm from "realm";\n' +
            '\n' +
            'class Question extends Realm.Object {}\n' +
            'Question.schema = {\n' +
            '  name: \'Question\',\n' +
            '  primaryKey: \'id\',\n' +
            '  properties: {\n' +
            '    id: \'int\',\n' +
            '    question: \'string\',\n' +
            '    acceptableAnswers: \'string[]\',\n' +
            '    answered: \'bool\',\n' +
            '    clues: \'Clues\',\n' +
            '  }\n' +
            '};\n' +
            '\n' +
            'class Clues extends Realm.Object {}\n' +
            'Clues.schema = {\n' +
            '  name: \'Clues\',\n' +
            '  properties: {\n' +
            '    GK: \'bool\',\n' +
            '    DEF: \'bool\',\n' +
            '    MID: \'bool\',\n' +
            '    FWD: \'bool\',\n' +
            '    RET: \'bool\',\n' +
            '    ENG: \'bool\'\n' +
            '  }\n' +
            '};'}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Data Model Migration cont.
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/update_schema1.js
            source={'//db/realm.js\n' +
            'export default new Realm({\n' +
            '  schema: [Question, Clues],\n' +
            '  schemaVersion: 1,\n' +
            '  migration: (oldRealm, newRealm) => {\n' +
            '    // only apply this change if upgrading to schemaVersion 1\n' +
            '    if (oldRealm.schemaVersion < 1) {\n' +
            '      const oldObjects = oldRealm.objects(\'Question\');\n' +
            '      const newObjects = newRealm.objects(\'Question\');\n' +
            '      for (let i = 0; i < oldObjects.length; i++) {\n' +
            '        newObjects[i].id = oldObjects[i].id;\n' +
            '        newObjects[i].answered = oldObjects[i].answered;\n' +
            '      }\n' +
            '    }\n' +
            '  }\n' +
            '});'}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Map to state
          </Heading>
          <Image height={518} width={650} src={images.react_native_state.replace('/', '')}/>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Performance
          </Heading>
          <List>
            <ListItem>Database written in C++</ListItem>
            <ListItem>Object data store - avoids ORM, abstractions and memory copy</ListItem>
            <ListItem>Lazily loaded - access to raw database values on demand</ListItem>
          </List>
        </Slide>
        <Magic>
          <Slide bgColor="secondary" textColor="primary"
            note={"SQLite - Low-level, full access to database. No abstractions. Very verbose - it takes a good deal of code to do very simple things." +
                  "Core Data - Core Data is an object graph and persistence framework provided by Apple. High Level built on abstractions." +
                  "FMDB - This is an Objective-C wrapper around SQLite" +
                  "Couchbase Lite - Couchbase Lite is the renamed version of what was previously TouchDB." +
                  "It allows you to have database directly on mobile device storage"}>
            <Heading size={5} textColor="primary">
              Queries
            </Heading>
            <Image src={images.benchmarks_queries.replace('/', '')}/>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={5} textColor="primary">
              Inserts
            </Heading>
            <Image src={images.benchmarks_inserts.replace('/', '')}/>
          </Slide>
        </Magic>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"
          notes={"Realm Sync - realtime encrypted data sync across devices and server" +
          "Realm Studio - dashboard built on Electron" +
          "Realm Connect - converts REST APIs to live objects" +
          "Event Handling - react to data changes server-side"}>
          <Heading size={5} textColor="primary">
            Realm Platform
          </Heading>
          <List>
            <ListItem>Realm Sync</ListItem>
            <ListItem>Realm Studio</ListItem>
            <ListItem>Realm Connect</ListItem>
            <ListItem>Event Handling</ListItem>
            <ListItem>Permissions and Authentication</ListItem>
            <ListItem>Mostly Professional Edition and Enterprise Edition features ($$$)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Realm Studio
          </Heading>
          <Image src={images.realm_studio.replace('/', '')}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Customers using Realm
          </Heading>
          <Image src={images.realm_customers.replace('/', '')}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"
          notes="SQLite - is a relational database management system.
                RocksDB - persistent key-value store developed by Facebook.
                          AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app
                Firebase - Cloud Firestore - Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform.
                           Cloud Firestore caches data that your app is actively using, so the app can write, read, listen to, and query data even if the device is offline
                           Firebase most likely using MongoDB on the server and SQLite locally but this is opaque and not relevant to the API
                           Easy integration into other Google Cloud Platform offerings.">
          <Heading size={5} textColor="primary">
            Competitors
          </Heading>
          <List>
            <ListItem>SQLite</ListItem>
            <ListItem>RocksDB</ListItem>
            <ListItem>Firebase - Cloud Firestore</ListItem>
          </List>
          <Image src={images.competitors.replace('/', '')}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"
          notes="Similar to frameworks and approaches like React, Node, MongoDB with Mongoose where you can apply similar patterns and use the same language across all layers of the stack">
          <Heading size={5} textColor="primary">
            Thank you!
          </Heading>
          <BlockQuote>
            <Text textColor="primary" italic={true}>We are a database, but we’re very different from every other database out there. We’re really an object database. Which is so close to the language that it’s even hard to call a database. It’s just objects.</Text>
            {/*<Quote>We are database, but we’re very different from every other database out there. We’re really an object database. Which is so close to the language that it’s even hard to call a database. It’s just objects. The fact that they can be persisted and created and all the things you can do with a database is kind of a side benefit.</Quote>*/}
            <Cite>Alexander Stigsen (CEO & co-founder of Realm)</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
