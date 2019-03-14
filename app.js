const validator = require('validator');
const yargs = require('yargs');
const getNotes = require('./notes.js');

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
    handler: function (argv)
    {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
});

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: function ()
    {
        console.log('Removing the note');
    }
});

yargs.command({
    command:'list',
    describe: 'list all the notes',
    handler: function ()
    {
        console.log('Listing out all notes');
    }
});

yargs.command({
    command:'read',
    describe: 'read a note',
    handler: function ()
    {
        console.log('Reading the note');
    }
});

// add, remove, read, list

yargs.parse();