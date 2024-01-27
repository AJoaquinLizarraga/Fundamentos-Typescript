"use strict";
/** @format */
;
(() => {
    console.time();
    let isEnable = true;
    // isEnable = 'as'
    isEnable = false;
    console.log(isEnable);
    const random = Math.random();
    console.log("random ", random);
    console.timeEnd();
    //  isEnable = random >= 0.5 ? 'true' : 'false'   //esta mal
    isEnable = random >= 0.5 ? true : false;
})();
