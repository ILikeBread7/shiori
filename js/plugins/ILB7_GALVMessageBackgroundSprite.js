//=============================================================================
// ILB7_GALVMessageBackgroundSprite.js
//=============================================================================

/*:
 * @plugindesc Modifies GALV_MessageBackground plugin to make an image display below the default window
 * @author I_LIKE_BREAD7
 *
 * @param Image var ID
 * @desc ID of the in-game variable used to determine which image to use
 * @default 1
 * 
 * @param Disable value
 * @desc What value of 'Image var ID' will be treated as no background image
 * @default 0
 *
 * @help
 * This plugin uses the GALV_MessageBackground plugin which you can get here
 * https://galvs-scripts.com/2015/10/25/mv-message-background/
 * This plugin needs to be placed below GALV's plugin in the plugin manager
 */

(function() {

    var parameters = PluginManager.parameters('ILB7_GALVMessageBackgroundSprite');
    var imageVarId = Number(parameters['Image var ID'] || 0);
    var disableValue = Number(parameters['Disable value'] || 0);

    Window_Message.prototype.setBackgroundType = Galv.MBG.Window_Message_setBackgroundType;

    var baseLoadBitmap = Sprite_GalvMsgBg.prototype.loadBitmap;
    Sprite_GalvMsgBg.prototype.loadBitmap = function() {
        if ($gameVariables.value(imageVarId) === disableValue) {
            return;
        }
        baseLoadBitmap.call(this);
    }

    var baseControlBitmap = Sprite_GalvMsgBg.prototype.controlBitmap;
    Sprite_GalvMsgBg.prototype.controlBitmap = function() {
        if ($gameVariables.value(imageVarId) === disableValue) {
            this.opacity = 0;
            return;
        }
        baseControlBitmap.call(this);
    }

})();