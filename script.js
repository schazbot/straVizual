//consts
const body = document.querySelector("body");
const mymap = L.map("mapid").setView([51.505, -0.09], 13);
let currentPolyline = null;

const activities = [
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 27901.9,
    moving_time: 5258,
    elapsed_time: 48229,
    total_elevation_gain: 122,
    type: "Ride",
    workout_type: null,
    id: 2890947230,
    external_id: "garmin_push_4284358755",
    upload_id: 3071712953,
    start_date: "2019-11-11T08:00:53Z",
    start_date_local: "2019-11-11T08:00:53Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 0,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 19,
    kudos_count: 0,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2890947230",
      summary_polyline:
        "ym_yHfqFJPPtBm@n@wBz@gBsBsAeAwAk@iC?aEr@k@t@U?uAdI{IiGa@`A}ArIu@|ByFnLgBpJ{E`IBhAxBlFSj@kDlF^nSsAxIaEzPsAzEcDpJuBbEcEnJu@v@aLdFUlBkDe@eB_A_Be@i@^iB`D_BxAcNrIeDtCcAL]WkB?yDr@GLAjD[vD{BtO]nDMjD?rGsCz@}DvCqHjNe@jAe@dDoArOWtAk@PoBKyINgPpCIJBbArAvGqBx@eBvAaI|CwPzIsL`JoFfDa@g@Cy@SFyArBoAGoBd@ONShCc@nAg@IShAUGe@w@_CeBoB_DaBiDuBcGoCuFc@j@}@pCkFnRaAnCk@l@}@kByCaKkDqCuEsCaB{AuDoE{AgAi@}AoAqBuCgCaEWmIoBsCgA{@kAaBY{KzH}AzA]h@Id@_GvCaKsDkAGsBgB_Dg@kB_AsAWe@~Bu@~Aa@I_@iCWD{EkGKkAzAHLeFfAcDViBj@CR[l@kALcAcHmBnAAeDuDI_@fAsBSkB|AFtA{DCw@K}@`@iFMkBk@yB^sBRkEM_IdEL^mBD}AW_CkDBKm@I{HbAwDT_@j@kCOkIE}HDoFIgA~E_Cx@AzS{COSrRyBzC}@@yZVkDHmJZyAGsDgAePOoHe@uFU}KNyCGsDSiBx@cAToAFmAi@}Bx@sC\\_@L}@f@{AXiGr@]dBT^qAxAkMN{@l@uAx@mNKmAkBiHe@gCMaDRyCM{Cn@}AN{AVw@]bABv@hCtBdDd@tBDp@UEqJaEo@o@mBx@wKf@iDJMCiAL_CVMFc@x@N]bCE[`A_Bf@uAR{DRAFe@VJLd@|AZfGFMNMvEqGbAQ`A?x@YlBMbCd@`EhDfEaB~InHdMFmBu@sBDIp@AnDxArCKz@ZXRS|Ac@z@iFwDAgIvDbAdB~@MiBzBhAm@gATOAMpKfApBkA`CA|CnAxBkAfANbAe@b@s@tEa@`CoCzGQpA]|FeDbDiDzBsDxC_JjAcCtA_EfD}MRoCD_H]gJgAqL|@aAxC{AlS|Bp@g@~@IfEd@FOeAeE`@cA~CeBdApER^x@Yj@NhFzEz@hA~@Uz@m@pEyDzAGdBrAjHlOz@~Cb@|DVh@jAlAzA`AXrAGrHi@pHq@lDkC|JIxE_@|EFfBfAApBg@dBeAj@ZtPdXXp@nBdBbo@h`@dClAvG_A|DZfBjA`DvDrIvGhHjEfJtG^DlE_AjB@rBX|B~AfApAhADrBoAc@gDo@`@",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "3071712953",
    average_speed: 5.307,
    max_speed: 26.7,
    average_temp: 7,
    average_watts: 57.9,
    kilojoules: 304.6,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 10.8,
    elev_low: -43.2,
    pr_count: 7,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 22750.8,
    moving_time: 4345,
    elapsed_time: 43579,
    total_elevation_gain: 119,
    type: "Ride",
    workout_type: null,
    id: 2848714385,
    external_id: "garmin_push_4231818552",
    upload_id: 3020403455,
    start_date: "2019-11-07T08:03:51Z",
    start_date_local: "2019-11-07T08:03:51Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 0,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 7,
    kudos_count: 2,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2848714385",
      summary_polyline:
        "an_yHnlFs@}FL{C]a@iAo@cDuCmHuFcCeAuG\\YPkAbBqDfLs@vCQXq@Sk@a@YEsDiCiB_B}CeEeB{Au@_@[GmB@eD`@w@XoD|DeBt@sJxCqG`Bg@IkB{AgBq@qBYkAEsBPaBj@uBD}F}A}Ck@iB_A{AqBgAoBeAgCmAuB[ViFbI{CbEi@fAk@dBWxA?tBF`AbAfE|BzMj@vFIR_Cb@kCz@GPGvAy@r@_EnAmAB}Ar@_BjAuApBeA`Cg@|AsDw@Wz@QtAg@~ASfAJvBLfAQvAm@`Dc@|@c@[kB}B{B_AiEXaCE[VI`@YJsBa@eB{@k@RiAhAcA~AgA~BcAnCy@fDaAhEyA`J@hBY`HYbFSvB\\xCBdB_@dFTlD\\nC_AdA{BXQj@i@LyL_@SN]nA@hAQlDKr@uHsAwF~CoB\\oGTgDxAiAvKc@dDs@bDaAvCqCnG_ApCyCfKaD|HcBhDwDdGiAtCo@fD_A`DkA`DuBnKq@nCmA`Dq@|Ci@vFIhBFp@CD}@e@eEKqD}@kC_AuBiA{A[wAw@INmBtAiDfBqEvCYtAc@D}FrE[Dk@MaF_CaCu@o@[A[mBy@wB[eHeCo@mAuAd@Et@e@|BjBt@FMGeA}GEZa@b@`@N@LU`ASfCyAPFIN|B_E]FC`ERKnAnABXT\\dBdArChA`ALXGnF|AtDVNJxE}B`@GIAb@SpC}BnDwA|AsA`CeBr@M|An@nBd@fKpBjEvAfBz@lAjBb@ZIXnAzBN|AjBpB`BrAzDdCbCnALf@hBt@XBBPdDlF|HtOj@w@`AeCzAeC`BgBlGaIhA_BtBOlDj@JZTtENNhBk@pCg@~@}@f@tAPUdAs@hBy@hFaDzCyB`EwB`IeFhHmD|EmBfCwAD}BM{Ai@sDbAu@lBBfIgAvBK|I@hBW\\w@h@_Dr@yNN}@l@y@\\{@x@cAxE}Jx@w@xB{A~Aw@d@GVaCMkGd@cE|AkHRoA\\oD@wAFW`AH~AvAXjAFnBz@`@lBHn@GPa@jDo@Xo@BeB[sDmAeI~EoCfBu@tHcExA_BdAcCjJEjBs@nHqDbB{AVe@nHePrBaHrBkGhEuRr@wHMcLOwD^sA~AgBhAgBS}@kBqEOy@bF_Hh@aBZoDNeARq@xFmL`AgCb@aEhAaG`B{FJKXDjCdBNA`BjAr@^`@F`FcApBFlB\\l@P~ApAhAvAbC}@T]i@wCSF",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "3020403455",
    average_speed: 5.236,
    max_speed: 9.2,
    average_temp: 6,
    average_watts: 61.7,
    kilojoules: 268,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 793.2,
    elev_low: 42.8,
    pr_count: 0,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 21830.3,
    moving_time: 4114,
    elapsed_time: 45496,
    total_elevation_gain: 154,
    type: "Ride",
    workout_type: null,
    id: 2848714303,
    external_id: "garmin_push_4231818463",
    upload_id: 3020403382,
    start_date: "2019-11-06T07:57:00Z",
    start_date_local: "2019-11-06T07:57:00Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 0,
    start_latlng: [51.45, -0.03],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.03,
    achievement_count: 6,
    kudos_count: 2,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2848714303",
      summary_polyline:
        "mv_yHvvEkAg@cIiGyAaAe@IqBHu@nBaAb@eAvA_G`QOn@eA_@yEsCiA{@cB_BwAkBsBsBuAa@sBIuBLiBh@oBtBaBrAoPlFgCb@SAQScA[cAu@sBk@iCUoBHkBh@mBNyEmAkDe@eB_@}AiBqAuBgDmHg@\\mK`OoA`EIpALpDpBnLb@bDx@fHEx@m@BuEbAItA_@f@cFfBaA?oB`A_B~AsApB{AnD}@?kB]U@MlASx@c@hAWtARdCBjAaAlF_@v@m@UqAcB_A]aAk@uAHiACm@JmCIUf@e@TuAIeA_@w@c@m@NeBhB{@pAkAdCwAnEeBhIqA~GHjASrDIlDc@jH`@dEM|CWdBBdBp@hG_@d@iBf@y@DCPe@f@mCIcFHmAYm@^KnDWhDgAN{@G{Ds@o@ZiBXcBxAqAZw@@kFn@o@RoBx@Ip@CjA_@fDi@pDm@dD{@zCcBnEu@`BoAzBM`@a@rBgA|DcAjCy@rAw@lBoBhEaBjCoAlC_@fA}BpJcC`Hq@vCGB}CxKgAvCIb@UvFWpC?b@YfBaA_@k@a@uFiA}@IuBw@KFwBs@aCeAw@m@U?uAr@{AnAi@Rg@FoB~@aCbDkExByAhBSf@q@a@_Bk@}DwBkDq@iGcB_CqA^@eApCYZgAVBSUMSk@doA_BhBh@~A^d@v@VhAz@`@XVBH?JC?BTdCnEnCtD|@`@~DnCtFnBn@z@nAbCpCxGpC~F^b@l@lAtAvBdAlAdBzAhBfAn@v@Vr@dEnCtAvAZ~@bAEf@k@pBWnAC|@a@V}@NeB^}@lAcAjC}AF[dBoAhB}@xAgB|@YnJiErEgBdB}@vGqEhBi@hBAnE`CbBl@hBUzLi@lH{@bMo@`Dq@nBeAzCMJrAmA~CaAvAp@aCNEf@yAEIFAXq@OeId@eDFeBTkBDcAp@gIByEC}ASkBMeCa@kNCsJOiDw@wHUgDFo@IuAAkFNwB|@qEt@aE^{CTqDPYt@@z@\\`A~@L~@DvBf@^fD?bAu@bBKt@gC]gE_AqI`GoDlHyDbBeArAwB~@eAlCJrDC|@WjIaEh@[dBaBzE}J~BwFdE{MrDgPrAkKAyFSgKXo@hDqES_AiAaDk@mAJw@vE{G`@}An@}FrIoQh@sFj@aCRM^LhIvE\\{@b@iFLYd@Ar@i@dB]tBQjBHjBx@dBvAd@l@h@PxB{@JMA_@]}B",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "3020403382",
    average_speed: 5.306,
    max_speed: 14.8,
    average_temp: 6,
    average_watts: 64.5,
    kilojoules: 265.2,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 1522.2,
    elev_low: -57.6,
    pr_count: 2,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 21733.5,
    moving_time: 4045,
    elapsed_time: 39047,
    total_elevation_gain: 93,
    type: "Ride",
    workout_type: null,
    id: 2848714229,
    external_id: "garmin_push_4231818379",
    upload_id: 3020403302,
    start_date: "2019-11-05T08:00:58Z",
    start_date_local: "2019-11-05T08:00:58Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 0,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 2,
    kudos_count: 2,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2848714229",
      summary_polyline:
        "}m_yHvpFBQiAkJNwCu@w@iAu@kJwHaAu@cCiAcGR[Bc@`@aAxAaEvM]bB@LIH_Ba@gGmE}A_ByAaCoBkBYOoBSuBAoBZiBz@eBxBcBfAqIjCaIdByBcAi@g@sDs@iCIyCv@oBRyKcC_AGq@i@mB_CiAmBqC_G}@r@wJpNg@fAu@rCGhCNtBhC~NBb@lAbIALg@ZcFtAQh@@v@c@d@kEzAmA@uCvAcBhBsA`C}@bCoDg@W|@Eb@q@pBYxAR|CS~B_@xBQx@Yd@w@[eA}AgCiAcEPgCISFE`@e@b@uAMkCqAgBtAq@v@iBrDeAnCu@zCiBtIu@lEJ~AKv@k@zMSd@d@bGOfDWdBFfBd@dG]f@oC\\u@hAqKGWOY@k@|@Az@[hFm@^qDe@gAg@sDdAgBxA}Eh@kBJg@G}CdB[vDe@vDeBvIaAzCqBbFcBnD_AvEgChGcCrFcGxKiAnEg@bD_A~CmAzCeArEcFxOe@xH[xCYnAq@IgB{@s@AsDgAkCc@WOeAiAo@Q{ACkAu@}B|@aDjCe@D_Bz@eB~AaGtDe@p@g@`@kJoDaFi@]UoB]w@a@kAiAa@Tm@fBq@@AXE?e@kAnOhAaAcAQCXZnBhAnB|@t@VrAFjBp@Ci@\\s@Hy@GsCBu@~@e@pAiB\\qAPQzA{@hCR^EJg@lGtBt@i@nALrF|B|E~A|BPhGtAt@^`@t@|AdBF^jAxCAXXl@|ClCdCfBvDxB|CvAPoDXkA~Am@zDqCJQ^oBIe@?_@dGqJx@UxAwArFKtBmAdBKdAk@l@}@b@aDbAsA`ARn@g@Xi@|AmBhEqEVm@vE_GzA}AjAu@t@oA`A_D|B_G`@q@p@cCdBaEpAaCpCaHZg@\\OpAPbFDtIWV}Bb@u@l@[fAd@jBPd@EfAq@pBo@bAOnAcA~@G|A}@pBg@`FeB|Be@v@WfAu@bFM~Bq@X_AvAq@r@Jd@O^\\P?tIa@f@StD}CrIaFnD{Av@q@`BuC^]?O`@O`C`@pDEnEkBtFkCfAu@lEqHv@aBnCwG~AiF|@eBn@oBlDgSdAgHC_JE}DIuB^_A`DgEqC}Hf@oAbDmEj@_AjAiHh@yAhCaFtA}BtAaDvAgKNMZNpB`BrDbC`@_@DQn@uFLc@\\?hAm@nB_@`EDlBz@rCrCb@BrAo@n@g@c@{Cc@N",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "3020403302",
    average_speed: 5.373,
    max_speed: 17.2,
    average_temp: 9,
    average_watts: 65.4,
    kilojoules: 264.7,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: -5.8,
    elev_low: -108,
    pr_count: 0,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 27625.7,
    moving_time: 5022,
    elapsed_time: 51668,
    total_elevation_gain: 92,
    type: "Ride",
    workout_type: null,
    id: 2848714158,
    external_id: "garmin_push_4231818276",
    upload_id: 3020403206,
    start_date: "2019-11-04T07:01:40Z",
    start_date_local: "2019-11-04T07:01:40Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 0,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 12,
    kudos_count: 2,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2848714158",
      summary_polyline:
        "yt_yH`zEyByAeCeAuFcE{E@{AXwAjBsEdOk@rAyCqA}FiEkDuEwAmAsE]}CXeAp@iCxC_Ah@kKjDyGtAiBo@a@c@u@U{Dy@aCA_Dx@}AHwFsAgFm@yD{EoB}Dy@{BYFgKlNaChFEjCVdCfB~HhApHp@|FQv@UNsACiCp@e@~BqE`BiBL{BnAgBhBmApBeApCa@HsCc@[bBiAjEAh@TbB@jAeApF_@`@c@O_BqByBeAcJNE\\a@Z_ACmBg@y@e@c@T_B~AwBtDkBjFwD~RDfAo@bPKTCbB`@tDg@dGBfBr@fGs@b@yB^OJSn@u@LkGIyC]k@`@It@AvDObBw@LcGq@cAh@eA|@QCiBn@qKrAaC`A_AbJ}AdIs@`CyBtFaCxEiB~HqDxHuEpIkAzCmEjP}@|B{@fEqFfRg@bGY|Es@NePeEc@O_ByAgAAq@c@Y?cCbCaCp@{@f@y@D{@j@aAhB}DdB{AzAc@F_FmA{DyAuB?iJqDU\\g@tB}@f@y@}@EQe@Osc@}Zs@]FB{La@uDo@mB_AqB]sIz@yGs@eFMmAi@q@w@j@t@j@^fH\\vAVE~@JtEIdKx@fDERgBrAeCjBeFfDs@cCs@eBu@_FR]zHpHfAcAuAmHcBEFiAMyQ\\QtB@rI`@r@PEbFH`CxAVLpGSgGw@A|@ANrGlAo@j@ItC?fB|Aj@r@vBfAjGlAvAOzAx@bA@vAsAPmAsA_LOiDdAiDhE}IrAuBbAcCxFgKt@}Cv@_AfAuBzBqCtFoFp@SjJ[dDaCxLuKhGoDvEeEvDoChBaA`AUP`BnAvHJdBl@jBHt@kA`@NbBpAhBhBl@rCvAfJ|@jFpDbHvDbDhCr@\\jAfAjAZn@QpC{E|AeElAwD^aC|BmHzHsUn@{EDqCPiAdBq@jMyBhBaA|Bq@`Cd@fDLJCTkDHuDPOrALpKALm@tBc@dBw@o@gJf@iGi@iF^qB\\kKTqBCiBhAeG`B}HtBiGrAqCzAeBhA_AfCtAhB\\f@o@fJe@jCtAbAtA\\TXON_@r@yFQ{CNoBl@gBX{BbEPbCcF~BcCxBmAvAIxEgBZO?mAb@i@fFaB{@wEOiCsCwPMsAAuC`@kCtFmHrF{Gt@t@jDbHxAzB`Ax@hOvB|E}@fFJjCx@rB`BpDs@lOgFxAmAnAcBfBq@xBUvE`@dAp@dExEvBhBhHpEdPlLh@DjGkAdCRhCxAjAdA^j@b@@xBoA[gD_@V",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "3020403206",
    average_speed: 5.501,
    max_speed: 12.4,
    average_temp: 7,
    average_watts: 61.5,
    kilojoules: 308.6,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 340.2,
    elev_low: 267.6,
    pr_count: 6,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 22040,
    moving_time: 3819,
    elapsed_time: 39401,
    total_elevation_gain: 124,
    type: "Ride",
    workout_type: null,
    id: 2831601466,
    external_id: "garmin_push_4210239474",
    upload_id: 3001216867,
    start_date: "2019-10-31T07:56:12Z",
    start_date_local: "2019-10-31T07:56:12Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 0,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 7,
    kudos_count: 2,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2831601466",
      summary_polyline:
        "cn_yHpoFPa@wA}HPkDsAq@gNkKkAw@g@Q}FTg@Hc@^q@bA}FvQIBWCaFoCcBmAgAcAiCoDsAkAi@S}BYoBFyBj@mAx@}AfBw@h@qNnEsD~@q@?iB_AMQoBq@mB[kCI{ElAs@I{E{AqFk@i@c@wAeBmCcFaBoDu@^sG|JiAvAg@`Ac@nAo@tD@~@VvCf@nB~AnInAdKGPIJeGbBU`Bm@p@yDrA_BBgBz@{AvAsArBkAhCi@x@wCg@Qt@Ed@q@rB_@`CTlCMnBw@zDiAJqAkB[YaBu@wEPmCAg@t@mBG}BoAi@`@yA~Ag@t@kA~BcArC{@zCs@|CeB`KEnBi@fOYfAHfB\\bDKdC[zCBbAl@`G}@r@eCb@]n@sCUmIKMTMhAS|FK^uCSoBm@k@AwC`BQRaC|@cFb@mBb@kCdAeAvI[lDk@jDuC|G}C~Fu@lDMRAr@[pAuApDoH|MgAjCaAvCuBtHw@hDq@lBe@z@o@fC]KGNe@vDm@bD{AhEKh@M~BDRWbAIfADbBIdAo@VwDq@aGaBqAQwC}AaCu@aAg@SHuAxA_ALsArAqElCSR]nA{@\\qBrA_BtAUWy@A}HeCqAU_@?oCsAqCy@yAiAq@~AaB`A]}@_@Of`Bbd@u@a@sC{B`A{DXd@kH{GJ`@XB`BjB?v@jKdAd@k@|AbACUMlFtBTdB|@zAc@ml@yPm@o@VHwSgHUgAlBuBn@_At@{@MsA|AsALFJUEu@tABxKtCdFt@rF`BIOn@r@`@tArC`DnDdFxAhBbFnDnDrA^yAGY~@_AbEiAnAm@`Aw@@URU`H_HhKeM~CsBvAqCTgBZa@dBFl@_@pDeFlBaC~A}ArBwCxAaCLAz@}@p@gAxIoUjEwHbAoCt@aCnFf@pBDhFOjBY\\qCl@o@^KrAd@dBT`@Gx@o@hDeAvAo@|AUlBaA|EgBvFyAlAw@zEQlB]j@w@x@k@dA]b@HhFKt@HfCM^KzJmHvHaEnAaAZa@dAsBXSxIPbC_AxA}@zEaCxAkAdDsHnBaEjEkLhBiGfAeGj@aC|@gCr@aHL{BBgBEwGMuEh@kAfAkAjA}ABY}B{FKq@jA{BvAmBdAuBn@eDb@oCPm@tDeHhCeGNq@rAgINQRFfCxBdEjCLOLo@p@}F@g@h@DbAk@hBUtBGjBR`BdAxCrCt@[|@s@R[IgA_@qAUN",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "3001216867",
    average_speed: 5.771,
    max_speed: 15.5,
    average_temp: 6,
    average_watts: 74.5,
    kilojoules: 284.5,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 378.6,
    elev_low: 31.2,
    pr_count: 3,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 21962.2,
    moving_time: 4015,
    elapsed_time: 39187,
    total_elevation_gain: 126,
    type: "Ride",
    workout_type: null,
    id: 2831601376,
    external_id: "garmin_push_4210239359",
    upload_id: 3001216767,
    start_date: "2019-10-30T08:01:12Z",
    start_date_local: "2019-10-30T08:01:12Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 0,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 2,
    kudos_count: 1,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2831601376",
      summary_polyline:
        "{m_yHxoFyAmJN_DgDsB{FgEyD_DeAk@c@CuETk@NcArA[r@{@vCsD|Kc@KiBw@gBkAgEoDaByBy@y@eBkAqDUaAFiBb@}@h@s@bAmCxBsJ`D_IxAkCoAoBo@oBa@qBEeFjA}@BsGgBiEm@{AmBsAwBmBuDw@{BaA\\sFnI{BzDm@bB[~BBxD`AhHp@rDl@dF\\lBLpACf@g@b@kCd@cBn@It@q@bAcFbB}@BoB|@_Ax@yAfBkAdC[nAs@LuBi@g@dAeA`FL|BH|@M`B{@~DkADoAmBaCmAaFVyB?]j@mB@iCiAm@VwAdBc@n@iA~BaAlC{@dDcDpP?lCKhBKtDWjEUp@f@hGK|B]hD@~@r@nGgAt@oATwAl@wBKoIEg@rCQxDKl@_ALiFkAyGhCiB^yEn@kA\\aBp@OVeAfJyAhIgCzGyC`GgAnFUx@kAnCgHxMGZiAnCwCxIa@jBgExLg@xD_A`DiCzGM~COdAC|@HpCM~@c@ReAKkDu@gHqBmAa@uA{@e@IcBaAQk@UAaCjCk@d@iAt@cDnAeBnC}HbGiByAs@w@yFoAY?W[oCs@oAGeBgAi@k@_@SMT?HcAlCwBsAxBrBQSNSDBGULIKUMs@RU|AFHMz@EhBp@CJ~@rAhCbBUEnCW`BAxBTnBt@vAt@?FzDqBFIM?DOrAy@hAaAb@aAvBeAlA{@z@u@T[?KpBMvBNzE~@jBl@bFhA`EjAfAf@PVj@tA`CbDf@bAdD~EbEbDdB`AnCr@n@kAj@UHWdEiDbEwEfEwDt@i@zAsBLYfB}AxAeBnB_B|BuAj@{@f@aEdBi@fBmAvAmBfEsEvDgFnDkEhA_CdAoClAeCdAqCbBcF|@sA|AyChAiCbAsDVOfI`@pB@tGSNw@FyAp@_AZM`D~@|@?lAs@pBw@vC}@hAObEqBxFkBp@G|As@p@m@jBOvA@lBa@hAqAjBe@tA?z@JlBWbF@jBs@fJyI~FsB`B{Av@oBRM`FHfDOjKaFvBwAh@_AjDyHzFgOv@aCr@oClDuOhA}JD}@@uDImGIuBVs@fC{DL[Dk@yBqGX{@t@sA?YrAsBp@wA^_Bn@kE\\_AnA}BnCmG~AuCjB}Jj@@tEvDjBjA`@}@r@eHf@A`@WpB_@vEIhBp@jCnCn@Vp@[|@g@LOCiBo@cDg@iDGuAT_DF`@CnDb@~Ch@bCp@~DCBiAgDi@L",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "3001216767",
    average_speed: 5.47,
    max_speed: 13.1,
    average_temp: 7,
    average_watts: 69.3,
    kilojoules: 278.4,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 76.4,
    elev_low: 10.4,
    pr_count: 0,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 24857.3,
    moving_time: 4548,
    elapsed_time: 39589,
    total_elevation_gain: 104,
    type: "Ride",
    workout_type: null,
    id: 2831601241,
    external_id: "garmin_push_4210239237",
    upload_id: 3001216666,
    start_date: "2019-10-29T08:03:17Z",
    start_date_local: "2019-10-29T08:03:17Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 0,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 6,
    kudos_count: 1,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2831601241",
      summary_polyline:
        "on_yHfoFWkB]mEPsDe@q@y@I_NmKuBkAyG`@mAxA}E`Om@pAMBeBo@kEsCsBiBwAkB_B{AgBeAwBOkBFeCb@{E`FsLnDqFhAgAS{A}@kBm@mB[oBC{EfA_A?gG_BcFq@wBmC{C}FeAiCk@b@}IpMsAhC[tAKhCXnDfB`KzArM_BdAgDz@Up@?b@k@n@gFbBe@?cBp@gB`B}AjBiA`CeAhAmCc@Qn@Iz@_ApDVvDO`Bo@`D]v@iA_@aA{A}BkAaHPkAHO`@mB@iCgAqBfB{@hAsBpEaAzC_B|HsAhIBbAs@xOSv@f@fGg@zHv@nHo@t@_B^cB~@iMw@GJa@nDWxE}@PoFuAs@ReDvB{@XoGd@wEpAORWt@mAnJWnD{AtD_AzCwDzHc@jBo@|AMhBSj@_FxKcCfDi@fAwGbVmCjH{@nEmC|GYlA@hEc@jG_BNkEk@cHeBuBeA}@]kDk@oAbA{GbEcBrAMx@e@j@eGbDkBG}A}AaEmAcDi@qDmA_BmAkAO_AvCWG_@JGi@UYu@Q?TzDvQc@_K@qAGaASy@AH_Bn@YC?_BYoBOKYs@FwBCsDA}AKQl@a@@uA\\{@RaESkAa@[`@Ia@_Bg@cAM_BKoESkAA{Dl@sEEm@L}@dAc@{@cEKcDhAeD@eAnCSz@D@aKOoBWK}EZeSeA}Ab@}@COVm@dCvAbDvApBXnA^bEpLf@|A{BdC{ApKRjCuBzAsBbEsDz@iA@Q`@m@dB{@lBc@x@o@fB}@lDyChBoAl@eAvBwAvBYHHBp@BlBrAnJd@bC\\nDzAbBhAv@dBv@nI|@vA^|IpGbJvFJj@\\X~Ag@~CcF`D_Gn@aB\\gDj@_ClBqDrAyCv@gCVgBnC{LTcFdBaAhJoAlCiA|@PjDiAvGRHSX}ITUjBVxIDp@GFu@dDw@\\cB[sGZ}Ga@{F^yB^uJNkBBsC~AwIvB_IdCgGpDwDXBpA`AzCv@VaA|CNxE[dFvDVYLg@j@cEFq@[sCNkBr@{BPyBhEd@rBiFvAcB`BoAlAi@zAApEgBZU?u@l@gAlEkAMsBa@aBMqAAmAK{@eCqNGsDRkC`BsC`@}AhHgJzAk@pFjKdAtA~@z@rN|B`FgA|ENlDz@rAjAl@DlB_@fCkAjJ_DxAu@rDmDnFi@fCVzBzAnCrDnJtGtC~BvDtBdGxE|@PjCo@pBSnBBrBd@hE~DxByAGgDa@T",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "3001216666",
    average_speed: 5.466,
    max_speed: 12.4,
    average_temp: 7,
    average_watts: 63.6,
    kilojoules: 289.2,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 52.2,
    elev_low: -6,
    pr_count: 1,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 29812.1,
    moving_time: 5451,
    elapsed_time: 49403,
    total_elevation_gain: 154,
    type: "Ride",
    workout_type: null,
    id: 2831601198,
    external_id: "garmin_push_4210239112",
    upload_id: 3001216534,
    start_date: "2019-10-28T07:50:13Z",
    start_date_local: "2019-10-28T07:50:13Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 0,
    start_latlng: [51.45, -0.03],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.03,
    achievement_count: 11,
    kudos_count: 1,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2831601198",
      summary_polyline:
        "qm`yHzoEY?qAbBeB~FwCbIcAFaFeDsDcD}AwBiBuAcFo@aE`AyEvEqStGi@M_DmBcCs@sDO}DbA}AFyEsAyFs@}BoCsEcJi@g@aLnOaA`D[dCFpC~B~LzAdLDb@]h@wFxAAtAq@`AyEzAg@AmBt@iBjAsAhBiBlEu@HaCc@]hBkArDVnCQrCq@rDi@l@u@i@}@{A}BgAwHRi@FWf@kB?aCiAmDxCaC`F}@xCcB|HqAdIBz@y@bPSv@f@dGMtDSlB@tAf@lF{@fAuBPk@~@gKy@yAL_@bB_@tGaHk@mDhCwDx@{E`@eFbBeAvIyAhJoDdJoBvDq@bCgAt@S`B_BdGgDrGo@tBqDjIeA|C_@~BmEbL]Xi@dEi@bCm@pAeApEKlCo@nEG`CWZa@?aKiDoBWeIyCmCxB_L|ETfAyCfAeBbBO`@{@Z}FcC_FeBkFkCsAYoATe@pBc@BBk@qAaBnD{DKtAd@p@WRD`@Q\\m@BIq@`DKnDfAxEtCvCb@pHdCj@m@vF_D`@u@t@q@rDmAp@o@`@}@xA{@dBYzMzB`LbDVZRn@r@v@TrC~AtAbAvCxBt@vDzCfGlC`B|A`@t@bBhHXf@j@\\t@dDxAnCfB~A`EvEjGzFrDpBhAxArAn@Ru@rDMn@[PUn@_D`AeCpAiA`@y@|@Qv@uAp@m@t@_@zA@pE}AvSoJ~A{AfBeAhBa@lBMtBf@tD~AdFA|U{B|Kk@rB]lBy@nCe@JVGd@w@tC{A~CYmCf@nAZi@hAgCTkAEyI`@gCJwDtAwQc@mJ[qSU_HiA{PMaJ^aFlBeJz@kJZD`CbBXvAH`Cb@RrDMp@q@fBIv@wABaAc@uFaA{GxPgJ`BkAvBiDzIElBo@rIoEhA_AfAmBfFgLlEsMlCiK`A}E~AqLMySdEeGkCeIjFcITm@z@cHfIwPnAwITw@RCjJzE~@wHpDmApBUjBFlBf@xCdCxBpEbD~CnBdC~AfAvHHrKg@lBHb@kO}@eX?uERmDr@qEBeDe@gD_CoHq@cD[wH[kAaBqBwAwEoBqQn@QfTx@jB?dAUjAqAd@sBL}BCkAXaAbEcDrNyE|PcBt@o@jCmAtAuAXm@Wi@YVb@xAsBdCwEdBgM`AuPhFaBhA_BlBaApGcArCyA|@_WgAe@t@FhArApMp@hC_@nBmDlIu@fAaAl@wAhLSl@a@^o@JAbJNpAw@vFe@rAqFpEs@b@KnBlArIs@V",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "3001216534",
    average_speed: 5.469,
    max_speed: 11,
    average_temp: 6,
    average_watts: 69.1,
    kilojoules: 376.4,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: -90.8,
    elev_low: -154.8,
    pr_count: 6,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Lunch Ride ",
    distance: 14719.7,
    moving_time: 4396,
    elapsed_time: 47957,
    total_elevation_gain: 139,
    type: "Ride",
    workout_type: null,
    id: 2813051224,
    external_id: "garmin_push_4186990166",
    upload_id: 2981133361,
    start_date: "2019-10-23T11:03:48Z",
    start_date_local: "2019-10-23T12:03:48Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 3600,
    start_latlng: [51.52, -0.09],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.52,
    start_longitude: -0.09,
    achievement_count: 2,
    kudos_count: 1,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2813051224",
      summary_polyline:
        "okmyHpgP?s@r@{@N?fIbE?L|AP`DLnFdBl@j@hDq@tIiGlEeDf@e@f@eAb@ChGxBhHv@bHpBpA`B|B~ApAdExBvC~LpH`@b@d@F|AiBlG{DdBmCzFuFdD_FzCwChGwEXw@h@kDxAw@n@Lh@c@vGwIzGiH|AoBfH{Np@}C`A{C`FwJ`B}Dr@UxHRpHSXIZsCnAy@hB`@nBDtAu@hIkB~AiA~HsB~CsAlAw@jI{@`AcApBg@~IEpDq@|GwE`GeDjE}CpAoBJa@nBIhFA|GgC~DuBz@q@rDwGl@gBzAyBlAaDxEsP~CmMt@uF^mFEeH[wFNo@hD{EIw@sB{FJy@pAaCxAqB`AeBfAkHzCiHdDqGrBuKpIzFb@w@bAgGpBiAjD[nBFdBt@tDfDtC{AWqCo@BGRBj@WALS\\Xo@AITZ[TYQVLOWBE`@_@`@f@_@e@Lt@y@F@Qh@VICi@_@N@?NTX?@I]e@g@@\\A[nAPWQBfPsR}ErGmBzC_FpDgB|@RUCQ\\s@e@pDAhDh@wFA_@dA}@CGj@FBJo@GLVj@a@i@GnAQ_A`@FKCNZ?_EFxAHc@LvBWP_@pG{EqLvIvAcAp@y@AZd@Wk@NLe@ILJ?EF\\_@mAdBFTHEi@gA?~@FBIhCtAyEQo@AeFTpGYd@RBm@KLDkAJ`CKgAd@VWOPhNoDcKhCy@n@a@i@Rm@OjEHyDQTIVBLEC`@uADx@NSrAxA_Co@r@QGCO@u@`@jAs@g@F?Pf@b@u@g@^HEDTMb@|@qBgAW?CV|@y@Lm@k@~CEDtAeDcA~BuAd@r@U@OfBgAiBdBdDgCqBn@HABXMG@KH^uAIzBm@@ROVeACb@Km@Mv@ToGrD|FyCGDr@i@AMH@BOWd@p@c@O\\gAPIM\\Bq@GKF|BAYCa@FFCJVSQbAWw@DR@s@pAP_AGDn@g@[`@h@Bg@a@Lf@FCg@QZX_@PXs@DLJGo@HEb@d@{@S?rA|@YGW}Ab@s@a@hAi@F@N`@LHIm@CPPQG\\EDMgAKb@RY[v@d@WQt@`Aj@`@cBaBTGLVi@O^L]DGNTKGb@Ja@QLb@eAYlAVc@`AIoBl@@Xl@}@F@[AU\\uBITUxAOQ@@P_@T}@|AI@zBuBGGXBECNBSJp@g@S`@",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "2981133361",
    average_speed: 3.348,
    max_speed: 13.4,
    average_temp: 14,
    average_watts: 42.9,
    kilojoules: 188.5,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 150.6,
    elev_low: 44,
    pr_count: 1,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 10662.2,
    moving_time: 1864,
    elapsed_time: 2323,
    total_elevation_gain: 36,
    type: "Ride",
    workout_type: null,
    id: 2813051088,
    external_id: "garmin_push_4186990019",
    upload_id: 2981133216,
    start_date: "2019-10-23T07:08:26Z",
    start_date_local: "2019-10-23T08:08:26Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 3600,
    start_latlng: [51.45, -0.03],
    end_latlng: [51.52, -0.09],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.03,
    achievement_count: 2,
    kudos_count: 1,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2813051088",
      summary_polyline:
        "wl`yHtnEMAg@Fi@`BRDKI_@ZO^Kf@Y|@eAzCYh@w@vBi@nBQZKHKCuE}BkBqAcB}AoAgBwA}AiAo@iAGuBUqBHeBb@aBbBaBrAyHfCgBf@_B^uBr@iAVo@GaA]KMkBg@uBg@yBIuBTiBXuBKkBe@uCa@oBSo@M[WsAiBcD}H]]m@a@o@NaBbBwG`I_AbBi@`BMfAHrBzA~IzBdQFnA?VCIcBj@{Av@mAz@[x@qAt@oAl@kAb@q@?iAd@gBnAkAlAqApB_AxBm@HkCQq@vCSh@UvAHlBFt@WrBw@fEKZm@Me@o@YW_AWs@a@{@GuB?o@DcCIg@BALQXqB?mBq@cCvAUV]b@oAdCcAfCuBrHwAbIQnA@^SjBOnDOzEChAOfBX~BFpASzDSrABhBb@xEw@xAeC|@AJ[~@i@D{@AsBMmBCeBMq@LSn@OnD}@dBW?w@JqBKk@@eBv@INmBkBu@pCOTo@HYJoAJkBZuBAuBl@Yd@Oz@S|Cq@dDk@fDi@nEe@|AgAtCi@bAwAvB_ArC[f@U`AM^e@vBQf@U`@wAlE_AtASRoAdCK\\wAdB_@r@q@dDqBzI}@bDm@zAc@v@WB_AnCKh@_BpFo@zAWdA_@xDo@`IDXRj@EhAFICQY?s@DoAQmDm@iBc@gAc@a@IsA_@gB{@{AWwBi@Eb@a@x@y@|@oE~BeAJgBvB_BpAkCd@k@@]dAk@dAgB_@qBu@wBeAa@U{AQ}CiAQKgBy@y@s@cBWCJKFg@bBMH",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "2981133216",
    average_speed: 5.72,
    max_speed: 12.7,
    average_temp: 15,
    average_watts: 66.5,
    kilojoules: 123.9,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 79.8,
    elev_low: 43.8,
    pr_count: 1,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 20161.4,
    moving_time: 3806,
    elapsed_time: 39428,
    total_elevation_gain: 109,
    type: "Ride",
    workout_type: null,
    id: 2813050996,
    external_id: "garmin_push_4186989901",
    upload_id: 2981133108,
    start_date: "2019-10-22T06:55:13Z",
    start_date_local: "2019-10-22T07:55:13Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 3600,
    start_latlng: [51.45, -0.03],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.03,
    achievement_count: 2,
    kudos_count: 1,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2813050996",
      summary_polyline:
        "_m`yHtoEeDb@t@v@Y|@i@bDkBzCy@zBQbAAl@a@RqB_AiDsBgBaB{D}E_BqA[OsBSkCBiBl@}ApAo@fAaBlAcSbGsC_Aq@i@sBq@aBUuB@sE`AoBYaCk@eHiAUO}AiB_AuAo@iAwBeFOO_BlBwDnFeBnCo@rAkA|EAjARfExAlIL`@hArIFv@?|@ELU?{EbBc@xBoFpBiBRwAv@aB~AwAzBmAnCoDS]jAO`A_@hAMp@Eb@RfCUpCs@jDQ^c@Mi@c@s@{@oAe@c@[cGDwBCo@v@U?mBg@kAo@qAbAq@v@eAdBoAhCg@vAuBvHs@fDk@hDMfA?`Bk@tLCfAW|@d@rFWtDOlAB~Af@vGm@r@sAd@U@k@dA_JU_B?iAPEfBUbEUt@qGg@y@V_FrC_Kv@cDv@Ov@YzD]~Ck@rDs@dDwAhDK`@gArCsA~Cs@pDc@nAUpAcA`DaAhCkDdFUj@y@fAsAhCgBrFgArG]hAOZ}@t@a@jDc@|AaApCe@pC{AzDk@rFSjAO`C@d@DHQlAKPs@Y{Ci@cJgCu@]Gq@_@Os@b@sB[g@WI@Oh@]p@}@p@aBz@oAXo@^yCNOd@sAzBcEzCUJi@AKb@_FwBwEwBaDw@wB}@uBwAk@d@s@fAO^[ICMe@a@DOy@Lv^_BnAyDd@cFlAoClBSrBjLt@`ChCbBjBgDGq@j@uA^qAb@}@^I`AVlAh@xBbBlBzBr@\\nBj@hIlBb@TnB|AbAd@dBrBxCjG~GnFlBr@fAv@TK^Wr@eAb@_@nEeC~@aAzAoBnBqB~EaHb@w@rBqAlHsFf@cANCl@_Dd@cApANRGzB}CxAeBtGmHtDaF`CsDnDmIhBgFjAoC|CgGvByF~ER~LWHCf@eC`AaAz@XpBJ|Ao@t@MxGiBnBgAvC{@~EaBjBq@r@e@l@UnCK|Do@z@q@fAe@xBDrCUvBBtBWbBs@vBuA|AyA`HiDhEuCjB}CjIOnBk@dBw@vGaDt@g@hAmBxAiBd@cAPy@nAgCpDcKjAyBv@oCn@qDvBuHl@}C\\kEPqDM}JOwBb@}A~AiCz@cBmAyC{@qC?QNg@zEuIr@iDl@qBVc@t@aBhAgCZeAjAcCBWx@yCLs@|A}F`@?|EpCjAh@d@g@r@yCToBhAk@rBe@zAKnBHdB|@rChC~@QhBw@Fi@Cm@]y@Y@",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "2981133108",
    average_speed: 5.297,
    max_speed: 11.9,
    average_temp: 18,
    average_watts: 67.3,
    kilojoules: 256.2,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: -99,
    elev_low: -155,
    pr_count: 0,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 21783.5,
    moving_time: 3952,
    elapsed_time: 41515,
    total_elevation_gain: 155,
    type: "Ride",
    workout_type: null,
    id: 2796942895,
    external_id: "garmin_push_4167102898",
    upload_id: 2963849479,
    start_date: "2019-10-17T06:20:27Z",
    start_date_local: "2019-10-17T07:20:27Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 3600,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 15,
    kudos_count: 2,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2796942895",
      summary_polyline:
        "ek_yHppFGNAPBd@]n@Fn@r@bDd@dD~@dDzApAb@L`E@zAL|FChC]@yAP?x@h@\\MF]m@x@?\\OV_@AwDl@sHJkAMiCEm@_@kBmBkBcA_EyA{HgDqJqEYt@{@lGWBeImF_@j@g@nC[pA_@dC_@t@gA~Cw@xAqCzG}@zF[tAc@z@oBlCoAjCRjAxAnEa@lAqCvELrGBdEP~CkAnIoA|FwCtLkCtIiAbDkHlOu@fAiK|Ei@^UtAkDEYIcAo@gAa@_@@YTwAxBi@n@cBjA{EjCoBrAcGvEcAl@}@Lw@GmBD_CT]UeAFsBj@sA`AmBXoEDcCrA{AXo@TqAP_Aj@gE`Bs@p@cBb@k@X_D|@s@Nq@d@g@PaFo@c@Rc@pAM|Am@VgFDiK]qDfK}CfGaBfE}CnGkBtD{AbCoOjTmAfCw@pEeB`@}@_@s@d@u@|AkExGkD`FyCvDyCfDo@bA_Az@cBdAq@NcDvAk@t@g@IuBaBeB}@cCaBwD}C{@wAmAqAoAuBgBcCs@a@aA{@m@_@}B_A{@UaACUMy@BcFqAiBu@sBg@q@]{@`@mAfA{CrBaE`CQ^Gl@yD`CcBn@k@c@}EmAiEqAeDyAuC_A{@a@cASOf@Ir@Yz@i@x@o@CQWAYECTq@CEo@PxA_AFo@\\k@h@Z`@n@tBn@nElBEHj@~AdAZrBFvDd@rAZl@d@`@NjG{E^i@h@a@~BwAvB}AfEoDF?nC|@vOdDhFbBf@d@~B~ClE`J`BhArAf@rF~Cz@r@NQXw@xAgBvAmAvCuAhBgAlBoBx@gAhFcFlCoDxDsEzBcB|@oCh@mBbAKXDp@i@vAmB|JiK|DmF|@mAlAaCrCmG`AiC|@{CbAeCzAoChAmCzAiEnDOzD?`F]pAFf@{Bn@k@f@Or@P~CDzCeBpBa@p@UZ]z@KvCoAzCiBpAGfAo@fBIdB_AdBMXFpBSlBa@r@w@RGxCGp@SdIMbBw@bBeAjCqBxB}@jBmAjB{@fBkAxBqCnAiAz@IjFJlBa@dBw@zCeBxA_@XBxAuAfHqPhBsErDkMlCoLj@eDn@qGOcJO{E`@kAlCwDPm@[i@e@iAaAqCC[dA_CnAyBdAsAZy@fAwG^iAlDeHzBiF~AaJTo@`Bv@jFlD^w@~@sGb@CdCm@pBWzB@fBn@zBlBpAr@|B}@a@qCYN",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "2963849479",
    average_speed: 5.512,
    max_speed: 10.2,
    average_temp: 10,
    average_watts: 66.2,
    kilojoules: 261.7,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 2474.4,
    elev_low: 278.6,
    pr_count: 8,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Afternoon Ride ",
    distance: 13157.7,
    moving_time: 2408,
    elapsed_time: 6762,
    total_elevation_gain: 72,
    type: "Ride",
    workout_type: null,
    id: 2796942834,
    external_id: "garmin_push_4167102822",
    upload_id: 2963849405,
    start_date: "2019-10-16T16:21:38Z",
    start_date_local: "2019-10-16T17:21:38Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 3600,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 6,
    kudos_count: 2,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2796942834",
      summary_polyline:
        "ym_yHvpFEKGE@LBLu@ZHA^S@M_@iCGi@Ak@U_CNaDi@w@e@IM^A`@KfTiAGq@k@}Aw@kBUsABy@LoB`@cAt@Qv@u@nFWTO?ECg@q@mDeC{@i@]Mi@bASfAq@zCi@fB]h@gAfDYn@oA|BeAdCWt@{@zFQdAWf@aDlEWb@e@bA~@nCjAzCYdAu@dA}AlB]h@RpBD`GJlDFfAIdA[`Bc@pD{@hEmBdIi@dB}@nD{CrJ]x@iC`FmCrGOVa@f@SNeBx@eC~@}Ar@{Ax@IFMrA}@HqBKaAe@g@]s@WIKMASF}AdByAdBs@j@mBnAaFnCgCnBGhBb@fDNj@rArIXbC_@ZUBqB@oAGgAMsBFqBK[oACw@Gs@[q@{@w@q@]EBc@tEi@hD}@vEIr@G~@EHYvD@rDDrDRtDZrD^xCF~ADbDAdHPjHZnJHxDSfEc@vD]pDMnCc@tEAr@RbC?~AQ~@aApCi@~@Sj@X@`AsC^q@Jo@Nk@@qBGaBLcDN_APuDfAcNF{A?mDw@gQCoCBwDFkDWsDo@iEy@}IIkIRoDhBmIf@eD\\mDNaAh@@f@X^^`@f@X~AFzAnAd@pB@PCTg@~Cg@b@kCUmDc@iFSeBb@u@XYvFyCd@[l@[lBiA`BkAZ[z@sArA}ApBLnBBdBCpBq@fAc@lAm@rDkBxAmApAgCvDaIlAmCPg@zCsJjBqH^sBp@aC^gBf@_D`@aDRgBBk@OgJSqE\\{@bCeDXa@BMQy@]{@eAsCKm@@KlA_C|BeDRa@d@_Bj@sENi@n@qAlAqCjA}BlAkCVe@Z_Ah@uCr@oEDG`@JxAbA~CjBlAl@Tm@`@cDPiBF]DCrDm@pBIrBFfBt@dD|C~@]bAg@TQC]Ku@]_A]P",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "2963849405",
    average_speed: 5.464,
    max_speed: 9,
    average_temp: 12,
    average_watts: 61.9,
    kilojoules: 149,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 1332,
    elev_low: 7,
    pr_count: 1,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 15331.8,
    moving_time: 2863,
    elapsed_time: 37274,
    total_elevation_gain: 47,
    type: "Ride",
    workout_type: null,
    id: 2796942262,
    external_id: "garmin_push_4167102761",
    upload_id: 2963849354,
    start_date: "2019-10-15T07:05:54Z",
    start_date_local: "2019-10-15T08:05:54Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 3600,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.55, -0.07],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 1,
    kudos_count: 2,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2796942262",
      summary_polyline:
        "sm_yH`rFFaAAU[kDUyBKuADsAw@cA_Ai@eDkCyC{B}CgCuA}@]IiA?oENYHOPo@jAYn@mAlEuApEk@xCWTeGyD_BqA_BeBq@_A{AcBg@g@k@YgDg@yAHy@NwAf@KHcCpCiB~@eA\\IFkDtAqD`AgATk@ZgBTwAo@GCK?y@k@sBi@kCWoB@mBf@eBNsBYkBe@uBc@kB[]A]IcBmAuBeDmA}Bi@_B{@PmDlEgDlEYd@]`Am@pDCRAvADl@rAtIrA|L^~BB|@ARm@NsBZqA\\Yd@G~@u@r@iEzAK@g@AiBp@qA~@}AhBsA`Cg@xA[H}C[]lAUnA[z@U|ADjALjAGfAm@nEYn@IBi@KIEQKm@}@]Ys@Um@_@_AAi@Dy@Am@JcBCk@KM@Mj@_@JoAEmBy@g@c@_Ar@eArAcAfBeA`CsA~DmAbFaBfIMnAB`Ak@xNSvCLvBDhBCv@SxDFfAl@nGq@n@k@J]JgALI\\UXuIKcBK_@FYp@YvCGPIzCWN_@AqBYsBc@[?gBt@oAR{Ap@sBd@uBTiBZ_D~@QXUjDa@nDcAtFSpAK\\cCfHoBrDi@rA[pAe@~AAJs@zB}AxDQ^_BhEy@rAq@nAE\\g@v@uAdCiB~F_AvF_AvCm@hAc@tAUpAQ|Ak@~B_A`CiAhDc@jDMhBKh@SpBE|@DV[tAe@Gs@[}Ac@cFaA_Cs@{BiAmBi@SMk@Qg@YaAZm@h@e@j@eC`CkBn@aAh@Y`BS^OJw@ZeEjBo@Bk@YqKqCc@Sm@K]KgBcAwBm@wBgAq@jASTUh@Wv@EFQd@CIKA@ESqCG?jCbCCCOg@wA\\}Ar@?}Ac@iBFqB?eBb@_BN{COWWw@sF_BeB_@{AQsACoBWiDOoDi@y@@KRe@Oe@Yo@Pi@UGGmBMgGKmBSuCo@s@e@m@OsAMuE@wBLsB@sGk@mBAc@CiAo@yAeBUK{H}@EEi@K}EmAmB]kBg@oBa@uBWsBe@qDi@uA_BGMwImS[w@E[uEs@sBKw@Iy@OiBg@SCoBM_B?sBGuCSq@DgAQcDOMC",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "2963849354",
    average_speed: 5.355,
    max_speed: 10.8,
    average_temp: 12,
    average_watts: 60.8,
    kilojoules: 174.1,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 905,
    elev_low: -11.6,
    pr_count: 1,
    total_photo_count: 0,
    has_kudoed: false
  },
  {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 23015.9,
    moving_time: 4545,
    elapsed_time: 44126,
    total_elevation_gain: 184,
    type: "Ride",
    workout_type: null,
    id: 2796942213,
    external_id: "garmin_push_4167102690",
    upload_id: 2963849281,
    start_date: "2019-10-14T07:00:23Z",
    start_date_local: "2019-10-14T08:00:23Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 3600,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 5,
    kudos_count: 2,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2796942213",
      summary_polyline:
        "im_yHdrFA]q@kCSoAEq@LaD_@s@qBaCwDgDmEiDkCiAiG?a@BUNc@r@iAdCgAfDuAnGYV[BiCu@wG_E}DaEcC}Aa@w@cCMsBTaAXoDnDiIfCeFpAiBv@oAJgA[W[e@SoBi@kBQoB?qB^mBJmPkCoAgA}AcCaAmBiA}CYOmElFiEbGmArDSzCTxD`@jD|@nFJnAdAdH?j@UV}EhAEDm@`CKFmE`Bw@BmBt@_An@}A~AsArBqAjC{CS[v@Ij@aA~CC~Eo@nFYj@QJeAw@u@y@iBw@gFR}BOODCTMXqAOiCmAkBxAw@~@eA~AgAdCaAvCkBbIq@lD]jDkAtRZhECzDOzBb@jIi@pAo@`@_ANcAn@uKA_AT[pASTKnFc@ZiFw@UD}B~AiRzBeBx@IvC_@jDeAbHqA~EeD`IMx@a@pAyAdCSh@E`A_ArCkAjFiAbCqAjAa@zAmAfCiAjD_BbDcA~CmBvDq@f@UnDRf@PtAn@hCDKiC|Bu@jDSbBc@jAh@pAtCnBlDnBdABqQKkBPgCOqAWa@_@a@k@u@oBwBg@g@u@uD]w@F_ClBi@lBwCtAOr@]f@oCvAFHjAOYC_FlCuAvAuG[yEaAmFyCkA[_CmAc@J}@bAI`AQf@]U_@^Ee@RoAU?rAvEZUbADVc@iCWEMeA{@TKBS~@ARs@b@GIT_BrA^x@hGk@\\l@`BvAzBf@nBF~Ei@zDTdGcC\\g@bGgFlBg@\\y@~A@tAb@jF^xG|AlDhAr@ZMbANl@d@b@|BdAd@d@xGbJfDvBvFrCNz@W^~@Z~AjBxA|BhBbDMTD\\n@vAvAzBbEpFtBvBbBfAtAzAlA\\ItATPbAKhA|BzAn@hIaA]@hBsE~@a@`M}JdBiA`UuKzEmDnAg@zDrAp@^v@JbMD~BeAl@J`@_@d@IjAo@pBj@vOm@nB]vE}AjBYXFRh@WhCw@|AGz@[d@BDdAuEv@sBIeF^iHr@mIb@kDNmDImFWqGa@cGMaOu@uI]cHS{J\\oE~AuHd@oDTgDb@cAtAn@v@dAZ`Dx@`ApCJGkBW_O^a@~A_AjAe@~EqDhBs@jEoCz@u@dCiDlIKjB_@tHcDj@u@jBoAtCsGrBcEpEkMhAcEb@cC|CeNv@cHF_EYcMb@y@nCyDFUYyAyAyFdAeCtAmBlAyBt@mGRq@xC{FhCyFj@gB|AiIj@CtFbDzAp@Rw@t@yGpDq@rBQrA?nBn@~DfDtCsAAa@SoB",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "2963849281",
    average_speed: 5.064,
    max_speed: 17,
    average_temp: 15,
    average_watts: 61.5,
    kilojoules: 279.5,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 2596.4,
    elev_low: 186.4,
    pr_count: 3,
    total_photo_count: 0,
    has_kudoed: false
  }
];

//leaflet stuff
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken:
      "pk.eyJ1IjoiY2hhcmx5ZmxhdGlyb24iLCJhIjoiY2s1bW9lbnQ3MGducjNycWl5b3cxNnpnayJ9.xCGIYxp4_LVQTo6ALIqI8A"
  }
).addTo(mymap);

//functions
const renderMapFromPolylineString = polylineString => {
  currentPolyline ? mymap.removeLayer(currentPolyline) : null;
  var encodedRoutes = [polylineString];
  for (let encoded of encodedRoutes) {
    var coordinates = L.Polyline.fromEncoded(encoded).getLatLngs();

    let polyline = L.polyline(coordinates, {
      color: "blue",
      weight: 2,
      opacity: 0.7,
      lineJoin: "round"
    }).addTo(mymap);
    mymap.fitBounds(polyline.getBounds());
    currentPolyline = polyline;
  }
};

const startDateFormat = activity => {
  let stDt = activity.start_date;
  let formatted = [];
  const dateArr = stDt.split(/\D+/g);
  formatted.push(dateArr[0], dateArr[1], dateArr[2]);
  return formatted.reverse().join("/");
};

const renderActivityCard = () => {
  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("Date:");

  d3.select(".chart")
    .selectAll("div")
    .data(activities)
    .enter()
    .append("div")
    .attr("class", "chart-bar")
    .on("mouseover", d => {
      tooltip.text(startDateFormat(d));
      return tooltip.style("visibility", "visible");
    })
    .on("mousemove", () => {
      return tooltip
        .style("top", event.pageY - 10 + "px")
        .style("left", event.pageX + 10 + "px");
    })
    .on("mouseout", () => {
      return tooltip.style("visibility", "hidden");
    })
    .style("width", "0")
    .transition()
    .duration(2000)
    .style("width", function(d) {
      return (d.distance / 1000) * 10 + "px";
    })
    .style("background-color", function(d) {
      if (d.distance / 1000 <= 20) {
        return "rgb(185, 222, 240)";
      } else if (d.distance / 1000 >= 20 && d.distance / 1000 <= 50) {
        return "rgb(122, 208, 250)";
      } else if (d.distance / 1000 >= 50) {
        return "rgb(0, 141, 178)";
      }
    })
    .text(d => {
      let formattedDistance = (d.distance / 1000).toFixed(1);
      return `${formattedDistance}km`;
    });

  d3.selectAll("div").on("click", d => {
      renderMapFromPolylineString(d.map.summary_polyline);
  });
};

const showActivityDetails = (activity) => { 
    const div = document.createElement('div')
    
}

function mouseOver(d) {
  d3.select(d)
    .append("text")
    .attr("class", "label") //adding a label class
    .text(d.start_date);
}

gsap.to("#bike-svg", { duration: 2, x: "400px" });

renderActivityCard();
