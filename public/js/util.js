Ext.ns('Ext.ux.form'); // set up Ext.ux.form namespace

/**
 * @class Ext.ux.form.Spacer
 * @extends Ext.BoxComponent
 * Utility spacer class.
 * @constructor
 * @param {Number} height (optional) Spacer height in pixels (defaults to 22).
 */
Ext.ux.form.Spacer = Ext.extend(Ext.BoxComponent, {
  height: 22,
  autoEl: 'div' // thanks @jack =)
});
Ext.reg('spacer', Ext.ux.form.Spacer);