Ext.ns('vouchrd', 'vouchrd.views');

HasCookie = Ext.extend(Ext.Panel, {
    initComponent: function() {

        this.items = [{ 
        	xtype: 'form', 
        	items: [{ 
        		html: 'You\'re only 3 stamps away from being vouchrd.'
    		}]
    	}];

        HasCookie.superclass.initComponent.call(this);
    }
});

Ext.reg('hascookie', HasCookie);



                	
