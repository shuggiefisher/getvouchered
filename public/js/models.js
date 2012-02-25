
// localStorage models
Ext.regModel('LocalUser', {
    fields: ['email'],
    proxy: {
        type: 'localstorage',
        id  : 'user'
    }
});


// remoteStorage models