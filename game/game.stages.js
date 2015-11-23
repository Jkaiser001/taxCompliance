/**
 * # Game stages definition file
 * Copyright(c) 2015 J.Orellana,M.Lopez <jose.orellanan@usach.cl>
 * MIT Licensed
 *
 * Stages are defined using the stager API
 *
 * http://www.nodegame.org
 * ---
 */

module.exports = function(stager, settings) {

     stager
         .next('precache')
         .next('selectLanguage')
         .next('instructions')
        //.repeat('game', settings.REPEAT)
        //.next('end')
        //.gameover();

    // Modify the stager to skip one stage.
    // stager.skip('instructions');

    return stager.getState();
};
