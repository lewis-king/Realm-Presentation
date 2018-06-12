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
  benchmarks_inserts: require('./assets/images/benchmarks_inserts.png')
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
            <Cite>LinkedIn: lewis-king-08176639 </Cite>
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
        <Slide>
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
            source={'//db/schema/realm.js\n' +
            'import Realm from \'realm\';\n' +
            '\n' +
            'class Question extends Realm.Object {}\n' +
            'Question.schema = {\n' +
            '  name: \'Question\',\n' +
            '  primaryKey: \'id\',\n' +
            '  properties: {\n' +
            '    id: \'int\',\n' +
            '    question: \'string\',\n' +
            '    acceptableAnswers: \'string\',\n' +
            '    answered: \'bool\'\n' +
            '  }\n' +
            '};\n' +
            '\n' +
            'export default new Realm({schema: [Question]});'}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary"
          notes={"Non-read-only operations must take place in a 'Write' transaction block."}
        >
          <Heading size={5} textColor="primary">
            Ease of use
          </Heading>
          <Heading size={6} textColor="primary">
            Create
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/write_schema1.js
            source={'import realm from \'../db/schema/realm\';\n' +
            '\n' +
            'realm.write(() => {\n' +
            '  realm.create(\'Question\',\n' +
            '    {\n' +
            '      id: 1,\n' +
            '      question: "I scored the first goal in the World Cup 2018",\n' +
            '      acceptableAnswers: "Don\'t know yet...",\n' +
            '      answered: false,\n' +
            '    }, true)\n' +
            '});'}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Ease of use
          </Heading>
          <Heading size={6} textColor="primary">
            Read
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/read_schema1.js
            source={'import realm from \'../db/schema/realm\';\n' +
            '\n' +
            'const questions = realm.objects("Question");'}
          />
        </Slide>
        <Magic>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={5} textColor="primary">
              Ease of use
            </Heading>
            <Heading size={6} textColor="primary">
              Update
            </Heading>
            <CodePane
              lang="javascript"
              //code_snippets/realm/update_schema1.js
              source={'import realm from \'../db/schema/realm\';\n' +
              '\n' +
              'realm.write(() => {\n' +
              '  realm.create(\'Question\', {id: 1, answered: true}, true);\n' +
              '});'}
            />
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={5} textColor="primary">
              Ease of use
            </Heading>
            <Heading size={6} textColor="primary">
              Update 2
            </Heading>
            <CodePane
              lang="javascript"
              //code_snippets/realm/update_schema1.js
              source={'import realm from \'../db/schema/realm\';\n' +
              '\n' +
              'realm.write(() => {\n' +
              '  question.answered = true;\n' +
              '});'}
            />
          </Slide>
        </Magic>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Ease of use
          </Heading>
          <Heading size={6} textColor="primary">
            Delete
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/update_schema1.js
            source={'import realm from \'../db/schema/realm\';\n' +
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
          <Heading size={5} textColor="primary">
            Ease of use
          </Heading>
          <Heading size={6} textColor="primary">
            Querying
          </Heading>
          <CodePane
            lang="javascript"
            //code_snippets/realm/update_schema1.js
            source={'import realm from \'../db/schema/realm\';\n' +
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
            <Text fit={true}>Basic Comparison - <Code>{codeSnippets.basicOperations}</Code> <br/>
            Compound Operators - <Code>AND / &&, OR / ||, NOT / !</Code> <br/>
            String Comparison - <Code>BEGINSWITH, CONTAINS, ENDSWITH, LIKE</Code> <br/>
            Aggregate Expressions - <Code>@count/@size, @min, @max, @sum and @avg</Code> <br/>
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
            source={'//db/schema/realm.js\n' +
            'import Realm from "realm";\n' +
            '\n' +
            'class Question extends Realm.Object {}\n' +
            'Question.schema = {\n' +
            '  name: \'Question\',\n' +
            '  primaryKey: \'id\',\n' +
            '  properties: {\n' +
            '    id: \'int\',\n' +
            '    question: \'string\',\n' +
            '    acceptableAnswers: \'string\',\n' +
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
            source={'//db/schema/realm.js\n' +
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
          <Slide bgColor="secondary" textColor="primary">
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
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Trends
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Realm Platform
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Customers using Realm
          </Heading>
          <Image src={images.realm_customers.replace('/', '')}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Text textColor="primary" italic={true}>We are database, but we’re very different from every other database out there. We’re really an object database. Which is so close to the language that it’s even hard to call a database. It’s just objects.</Text>
            {/*<Quote>We are database, but we’re very different from every other database out there. We’re really an object database. Which is so close to the language that it’s even hard to call a database. It’s just objects. The fact that they can be persisted and created and all the things you can do with a database is kind of a side benefit.</Quote>*/}
            <Cite>Alexander Stigsen (CEO & co-founder of Realm)</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary">
            Competitors
          </Heading>
          <Heading size={6} textColor="primary">
            Firebase - Cloud Firestore
          </Heading>
          <Image src={images.realm_customers.replace('/', '')}/>
        </Slide>
      </Deck>
    );
  }
}
