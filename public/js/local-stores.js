
//our Store automatically picks up the LocalStorageProxy defined on the Search model
localUserStore = new Ext.data.Store({
    model: "LocalUser"
});
//loads any existing data from localStorage
localUserStore.load();