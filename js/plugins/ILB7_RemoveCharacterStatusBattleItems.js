//=============================================================================
// ILB7_RemoveCharacterStatusBattleItems.js
//=============================================================================

/*:
 * @plugindesc Removes battle related items on the character status screen
 * @author I_LIKE_BREAD7
 *
 * @help This plugin does not provide plugin commands.
 */

(function() {

    Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
        var lineHeight = this.lineHeight();
        this.drawActorName(actor, x, y, width);
        this.drawActorClass(actor, x, y + lineHeight, width);
    };

})();