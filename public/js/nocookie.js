Ext.ns('vouchrd', 'vouchrd.views');

NoCookie = Ext.extend(Ext.Panel, {
    initComponent: function() {

        this.items = [{ 
        	xtype: 'form', 
        	items: [{ 
        		html: 'Welcome back!<br/>You\'re only 8 stamps away from being vouchrd.'
    		}, {
    			xtype: 'emailfield',
    			name: 'email',
    			placeholder: 'email'
    		}, { 
    			xtype: 'spacer' 
			}, {
    			xtype: 'button',
    			name: 'submit',
    			text: 'submit'
    		}]
    	}];

        NoCookie.superclass.initComponent.call(this);
    }
});

Ext.reg('nocookie', NoCookie);



                	
