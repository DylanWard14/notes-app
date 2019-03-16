const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'The body of the note',
            demand: true,
            type: 'string'
        }
    },
    handler (argv)
    {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv)
    {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command:'list',
    describe: 'list all the notes',
    handler ()
    {
        notes.listNotes();
    }
});

yargs.command({
    command:'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv)
    {
        notes.readNote(argv.title);
    }
});

// add, remove, read, list

yargs.parse();