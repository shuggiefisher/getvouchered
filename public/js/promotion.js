Ext.ns('vouchrd', 'vouchrd.views');

new Ext.Application({
    launch: function() {

		// create some test data
		// localUser = localUserStore.first();
		// if (localUser == undefined) {
			// localUserStore.add({email:'sven@poppelmann.net'});
			// localUserStore.sync();
		// } 
		// clear out all the data
		// if (localUser != undefined) {
			// localUserStore.getProxy().clear();
			// localUserStore.sync();
		// }
		


		// now determine the view to show by loading the first cached user
		localUser = localUserStore.first();
		if (localUser == undefined) {
			// if we haven't been here before show the nocookie screen
			view = { 
				xtype: 'nocookie' 
			};	
		} else {
			// if we know who we're dealing with, show the cookie screen
			view = { 
				xtype: 'hascookie'
			};
		}
		
    	// Ext.regModel('User', {
		    // fields: [
		    	// 'email' 
			// ],
// 			
			// proxy: {
		        // type: 'rest',
		        // url : '/users'
		    // }
		// });

		// var user = Ext.ModelMgr.create({name: 'Ed Spencer', email: 'ed@sencha.com'}, 'User');
		// user.save();
    	
    	
    	
        new Ext.Panel({
            fullscreen: true,
            
            dockedItems: [{
		        xtype: 'toolbar',
		        title: 'promotion'
		    }],
		    
            // html: 'Hello World!'
            // items: [{ xtype: 'cookie' }]
//             
            items : [view]
            // items : [{ xtype: 'hascookie' }]
        	
        });
    }
});
