
import React from 'react';

export default class BattlmechDiagramSVG extends React.Component<IBattlmechDiagramSVGProps, IBattlmechDiagramSVGState> {
    bgColor = "rgb(255,255,255)";
    strokeColor = "rgb(0,0,0)";
    theWidth = 744;
    theHeight = 627;
    xLoc = 0;
    yLoc = 0;
    constructor(props: IBattlmechDiagramSVGProps) {
        super(props);
        this.state = {
        }
        if( this.props.bgColor ) {
            this.bgColor = this.props.bgColor;
        }
        if( this.props.strokeColor ) {
            this.strokeColor = this.props.strokeColor;
        }


        let baseWidth = 744.09448819;
        let baseHeight = 1052.3622047;
        if( this.props.width ) {
            this.theWidth = this.props.width;
            this.theHeight = Math.round( this.props.width / baseWidth * baseHeight );

        }

        if( this.props.xLoc  ) {
            this.xLoc = this.props.xLoc;
        }

        if( this.props.yLoc ) {
            this.yLoc = this.props.yLoc;
        }

        // if( typeof(standAlone) == "undefined" )
        //     standAlone = true;

        // if( !baseFillColor )
        //     baseFillColor = colorTan;

        // if( !lineColor )
        //     lineColor = colorGold;
    }

    render() {



        // var svg = "";

        // if( standAlone ) {
        //     var svg = "<!DOCTYPE HTML><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" height=\"" + theHeight  + " px\" width=\"" + theWidth  + "px\" viewBox=\"0 0 790 100\" ><g>\n";

        return (
            <svg
            //    xmlns:dc="http://purl.org/dc/elements/1.1/"
            //    xmlns:cc="http://creativecommons.org/ns#"
            //    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            //    xmlns:svg="http://www.w3.org/2000/svg"
            //    xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="rearArmor"
            y="0px"
            x="0px"
            width="422"
            height="565"
            viewBox="0 0 422.05333 948.30109"
        >
        <g
            transform="matrix(1.0031948,0,0,0.97901571,-163.52526,-89.756917)"
            id="g4">

            <g
                transform="translate(0,-3.75)"
                id="layer1">
            <path
                style={{fill: this.strokeColor}}
         d="m 58.482148,1046.717 v -9.3952 l 4.532781,-2.1616 c 3.1421,-1.4983 5.347263,-3.8621 7.1875,-7.7044 2.379444,-4.9681 3.56203,-5.9107 11.404719,-9.0907 32.008692,-12.9787 32.313422,-13.1431 35.504702,-19.1587 1.64544,-3.10168 2.76752,-5.85691 2.4935,-6.12271 -0.27401,-0.2658 -3.8732,-2.11175 -7.9982,-4.1021 -4.64506,-2.24129 -7.38092,-4.30887 -7.18716,-5.4316 0.17206,-0.99702 2.80935,-12.1714 5.86063,-24.83192 l 5.5478,-23.01917 -6.79813,-8.19012 c -6.70304,-8.07554 -6.79809,-8.30436 -6.7942,-16.35584 0.004,-7.88185 0.8309,-10.03431 23.79165,-61.91572 16.76366,-37.87865 24.74473,-54.5392 27.02876,-56.4227 l 3.24105,-2.6727 -0.85546,-22.9523 c -0.85527,-22.947 -0.85444,-22.95733 3.5923,-44.72644 2.44627,-11.97579 4.44776,-21.93551 4.44776,-22.13274 0,-0.19724 4.04207,-0.52387 8.98239,-0.72586 l 8.98238,-0.36726 17.86465,-66.25 c 9.82555,-36.4375 17.87723,-66.95313 17.89262,-67.8125 0.0186,-1.038 -1.99688,-1.5625 -6.00415,-1.5625 -4.81327,0 -6.62355,-0.62957 -8.9592,-3.11575 l -2.9271,-3.11577 2.10005,-29.69673 c 1.15503,-16.33322 2.11081,-30.5405 2.12396,-31.57175 0.061,-4.78679 3.14162,-5.97468 27.4817,-10.59702 13.38574,-2.54203 24.48871,-4.77052 24.6733,-4.9522 0.18457,-0.18167 -1.67665,-5.54065 -4.13604,-11.90883 -8.36791,-21.66727 -15.90165,-53.85885 -19.02461,-81.29195 l -0.92495,-8.125 -22.27418,-3.23572 c -20.94481,-3.0426 -22.48873,-3.45292 -25.86923,-6.875 -3.53572,-3.57921 -3.60962,-3.94602 -4.47619,-22.21906 l -0.88111,-18.57977 -4.147,-1.73273 c -5.37988,-2.24785 -5.47428,-2.2293 -5.49435,1.07978 -0.0271,4.47862 -1.40352,8.43586 -2.94123,8.45663 -4.17729,0.0565 -4.65046,2.52062 -8.23377,42.87918 -3.22663,36.34121 -3.92009,41.24826 -6.30189,44.59319 -1.57658,2.2141 -2.06938,3.7585 -1.19929,3.7585 1.0054,0 1.20866,1.29711 0.6366,4.0625 -0.99505,4.81017 -1.00269,7.36053 -0.0421,14.0625 0.39416,2.75 -1.51285,29.16361 -4.23782,58.69691 l -4.95446,53.69691 -4.167,3.5154 c -3.59299,3.03116 -4.8988,3.41535 -9.4795,2.789 -2.92187,-0.39952 -5.3125,-0.23996 -5.3125,0.35458 0,0.59455 1.89476,6.70733 4.21059,13.58397 4.13447,12.27699 4.19101,12.73433 3.12841,25.30109 -1.23287,14.58032 -2.94879,18.81502 -9.18579,22.6697 -5.1927,3.20927 -5.48263,4.1965 -5.62196,19.14327 -0.0746,8.0042 -3.50294,10.20527 -18.562812,11.91774 -19.472571,2.21426 -17.476687,2.9383 -29.581458,-10.73107 l -10.792514,-12.1875 0.78307,-13.125 c 0.430687,-7.21875 1.089171,-14.39063 1.463296,-15.9375 0.622371,-2.57329 0.240099,-2.8125 -4.494515,-2.8125 -2.988788,0 -5.426354,-0.66004 -5.770375,-1.5625 -0.3276,-0.85938 2.783803,-10.18157 6.91423,-20.71597 4.130426,-10.53441 7.509866,-19.67503 7.509866,-20.3125 0,-0.63747 -1.969887,-1.15903 -4.377529,-1.15903 -4.074501,0 -4.966654,-0.80039 -12.888059,-11.5625 -4.680792,-6.35938 -10.325195,-14.1302 -12.543118,-17.2685 l -4.032588,-5.706 9.479888,-44.27649 c 7.623808,-35.60755 10.01574,-44.84689 12.216739,-47.18975 3.286905,-3.49875 4.270823,-11.41435 2.749759,-22.12176 -0.390656,-2.75 0.953457,-23.28125 2.986919,-45.625 l 3.697205,-40.625 -3.165232,-2.39784 c -1.740878,-1.31881 -9.899747,-8.33164 -18.130819,-15.58405 l -14.965586,-13.1862 0.825597,-11.29096 c 0.454079,-6.21003 1.087665,-12.22219 1.407971,-13.36038 0.455948,-1.62019 3.421478,-2.4059 13.660613,-3.61937 7.193032,-0.85247 13.07824,-1.99675 13.07824,-2.54284 0,-0.5461 -4.982951,-6.78026 -11.073225,-13.85371 l -11.073226,-12.8608 4.907356,-13.75689 c 2.699046,-7.56629 5.010122,-13.84055 5.135726,-13.9428 0.125603,-0.10225 7.822119,0.49879 17.103369,1.33566 9.28125,0.83686 17.072497,1.37026 17.313885,1.18533 0.36509,-0.27972 -6.859396,-35.1487 -9.28384,-44.80845 -0.643674,-2.56461 0.52666,-3.66218 10.018124,-9.3953 l 10.74694,-6.49146 18.095693,9.47253 c 9.95264,5.20989 18.37999,9.47253 18.72745,9.47253 0.34746,0 0.63175,-4.41359 0.63175,-9.80797 0,-5.39439 0.35661,-14.83194 0.79247,-20.97235 l 0.79247,-11.16438 13.74671,-4.82151 13.74671,-4.8215 18.4984,19.23135 18.4984,19.23135 7.53161,17.09016 7.53162,17.09015 -2.1317,8.47627 -2.13169,8.47626 -8.37904,5.01289 c -4.60846,2.75708 -8.2004,5.19151 -7.98206,5.40984 0.3797,0.37971 72.67174,-3.82808 94.1736,-5.48141 l 10.3125,-0.79295 v -22.71924 -22.71924 l 3.4375,-3.2621 c 2.90965,-2.76119 5.02439,-3.39801 13.77167,-4.14716 l 10.33418,-0.88506 5.08299,-9.77015 c 2.79565,-5.37358 8.32971,-13.31572 12.29791,-17.6492 6.59766,-7.20499 7.29435,-8.52069 8.14345,-15.37906 0.7763,-6.27031 1.57444,-8.05527 4.86791,-10.88669 l 3.93939,-3.386705 21.31729,-0.0508 21.3173,-0.0508 3.84255,4.062505 c 2.92215,3.08942 4.04597,5.68604 4.69186,10.84064 0.7299,5.82509 1.71966,7.73044 7.03915,13.55081 5.09616,5.57601 12.14204,16.35541 17.35164,26.54605 0.63647,1.24501 4.30918,2.29499 10.93091,3.125 7.8976,0.98993 10.79544,1.94839 13.92835,4.6068 l 3.95595,3.3568 v 22.5807 c 0,18.30597 0.32477,22.5807 1.7156,22.5807 0.94359,0 24.09134,1.42471 51.43945,3.16602 27.34811,1.7413 50.30727,2.97154 51.02036,2.73384 0.71309,-0.2377 -2.32529,-2.61243 -6.75195,-5.27716 -4.42665,-2.66475 -8.41315,-5.38252 -8.85886,-6.03948 -0.44573,-0.65696 -1.47193,-4.5569 -2.28045,-8.66653 l -1.47004,-7.47206 7.28045,-16.83958 7.28044,-16.83958 18.75,-19.34913 18.75,-19.34914 13.75,4.7789 13.75,4.7789 0.77847,13.75 c 0.42817,7.5625 0.85004,17.02203 0.9375,21.02118 l 0.15903,7.27119 18.50979,-9.54209 18.50978,-9.54209 10.2095,6.0209 c 6.18155,3.64549 10.2216,6.83927 10.2402,8.09518 0.0169,1.14085 -1.93802,11.41801 -4.34427,22.83814 -2.40625,11.42012 -4.375,21.47877 -4.375,22.35257 0,1.27888 3.23004,1.30242 16.5625,0.12063 9.10937,-0.80744 16.92457,-1.11201 17.3671,-0.67685 0.87341,0.85887 9.8204,25.47941 9.8204,27.024 0,0.5186 -4.78125,6.46449 -10.625,13.2131 -5.84375,6.7486 -10.625,12.7866 -10.625,13.41777 0,0.63119 5.84591,1.84042 12.99091,2.68719 l 12.99091,1.5396 0.81115,8.32978 c 0.44613,4.58137 1.10389,10.57977 1.4617,13.32977 l 0.65057,5 -16.86935,14.6875 c -9.27815,8.07813 -17.46933,14.6875 -18.20263,14.6875 -1.68207,0 -1.96394,-5.01424 2.55861,45.51666 3.65619,40.85105 3.77527,43.86289 1.86219,47.10147 -1.39942,2.36902 -1.61617,3.72406 -0.6875,4.29801 0.74594,0.46101 1.19626,3.05391 1.00074,5.762 -0.28944,4.00869 0.24836,5.43704 2.89366,7.68532 2.96705,2.52175 4.02999,6.50613 12.24145,45.88654 4.94575,23.71875 9.08909,43.80936 9.20743,44.64581 0.11837,0.83644 -5.29147,9.10207 -12.02178,18.36804 -11.81696,16.26903 -12.40516,16.86035 -17.13815,17.22919 l -4.90121,0.38196 8.07565,20.38664 c 4.44161,11.21267 8.07565,20.9158 8.07565,21.56252 0,0.64673 -2.55471,1.17587 -5.67713,1.17587 h -5.67712 l 0.77651,9.6875 c 0.42709,5.32812 1.22196,11.11083 1.7664,12.85047 1.59678,5.10214 -1.13352,10.2986 -11.79125,22.44178 -10.49735,11.96045 -13.5676,13.74076 -19.89862,11.53845 -2.13058,-0.74114 -7.72185,-1.7382 -12.42504,-2.21568 -12.58348,-1.27749 -14.41159,-3.30781 -15.12908,-16.80252 -0.45188,-8.49915 -1.00956,-10.8751 -2.78726,-11.875 -5.11995,-2.8798 -10.2371,-9.10397 -10.86372,-13.21392 -3.24144,-21.2598 -3.19674,-22.1633 1.83851,-37.16577 l 4.74231,-14.12968 -5.44494,0.81652 c -4.98976,0.74826 -5.81105,0.46652 -9.82448,-3.37032 l -4.37955,-4.18683 -4.93464,-56.25 c -4.47229,-50.97952 -4.76018,-56.5962 -3.07255,-59.94493 1.31062,-2.60067 1.44297,-3.83464 0.44687,-4.16666 -1.72108,-0.5737 -1.91106,-9.01341 -0.2029,-9.01341 0.66679,0 -0.0509,-1.86147 -1.59483,-4.13659 -2.53723,-3.73883 -3.15554,-8.07316 -6.4301,-45.07481 l -3.62294,-40.93822 -3.53223,-0.70643 c -3.13578,-0.62717 -3.53222,-1.2418 -3.53222,-5.47643 0,-5.91521 -1.08168,-6.63257 -6.55354,-4.34627 -4.2724,1.78511 -4.32794,1.90877 -5.1328,11.43028 -0.44751,5.29412 -0.81366,13.53454 -0.81366,18.31207 0,8.14552 -0.25296,8.93567 -4.0625,12.68966 -3.94578,3.88824 -4.69251,4.08791 -25.9892,6.94909 l -21.9267,2.94582 -2.72514,19.48841 c -3.28257,23.47477 -8.32144,44.51205 -15.2966,63.86342 -2.8498,7.90625 -5.46732,15.28243 -5.81674,16.39153 -0.53813,1.70818 3.11803,2.73447 23.90958,6.71144 20.7947,3.97759 24.7996,5.10188 26.2122,7.35846 1.08996,1.74119 2.41304,13.40593 3.82066,33.68458 l 2.15331,31.02101 -2.80332,2.984 c -2.1243,2.26123 -4.37263,3.07361 -9.28223,3.35399 l -6.4789,0.36999 18.20529,67.79677 18.20529,67.79679 8.75276,0.0158 8.75278,0.0158 4.65853,23.4375 4.65855,23.4375 -0.99131,21.25 -0.9913,21.25 3.40761,3.125 c 2.35657,2.16112 10.76698,19.80031 27.2675,57.18824 22.5175,51.02153 23.85988,54.49488 23.85988,61.7367 0,7.45396 -0.20049,7.92166 -7.00641,16.34522 l -7.00642,8.67171 5.75642,23.00585 c 3.16602,12.65323 5.75641,23.75662 5.75641,24.6742 0,0.91759 -3.375,3.28144 -7.5,5.25302 -4.125,1.97157 -7.5,4.10778 -7.5,4.74713 0,0.63937 1.22112,3.33518 2.71361,5.99072 2.50438,4.45593 4.20179,5.45703 22.0125,12.98263 10.61438,4.485 19.81949,8.1545 20.4558,8.1545 0.63631,0 2.208,2.452 3.49263,5.449 1.45322,3.3902 3.96958,6.4587 6.66021,8.1216 3.63291,2.2453 4.45172,3.6008 5.11989,8.4755 0.43745,3.1916 0.79536,7.4118 0.79536,9.3784 v 3.5755 h -95 -95 v -9.7661 c 0,-9.1911 0.21794,-9.975 3.70151,-13.3124 2.54024,-2.4337 3.96156,-5.2804 4.5304,-9.0737 0.77733,-5.1836 1.24939,-5.7336 7.59036,-8.8435 l 6.76148,-3.3162 -0.35438,-11.82978 -0.35437,-11.82983 -3.84855,-0.99454 c -3.75205,-0.9696 -3.93359,-1.36517 -7.23959,-15.77498 l -3.39104,-14.78045 -12.55901,-2.01703 c -6.90745,-1.10935 -12.7275,-2.20139 -12.93344,-2.42674 -0.20593,-0.22536 -4.41692,-6.82837 -9.35775,-14.67338 l -8.98331,-14.26364 1.28671,-59.77428 c 0.70769,-32.87585 1.80273,-60.76971 2.43343,-61.98636 0.79169,-1.52722 0.0636,-5.98961 -2.35161,-14.41352 -2.72347,-9.49889 -3.24557,-13.08275 -2.3572,-16.18032 0.62762,-2.18837 0.78408,-7.01667 0.34771,-10.72955 -0.79116,-6.73162 -0.82465,-6.77533 -11.85738,-15.47818 -6.08518,-4.80013 -11.06397,-9.22034 -11.06397,-9.82269 0,-2.93173 3.1576,-7.46281 5.20065,-7.46281 1.26464,0 2.29935,-0.7903 2.29935,-1.75623 0,-0.96592 -3.01628,-12.6378 -6.70283,-25.9375 -3.68656,-13.2997 -9.63938,-35.15002 -13.22851,-48.55627 l -6.52569,-24.375 h -44.30745 -44.30746 l -1.31369,5 c -4.8393,18.41861 -22.63605,83.59465 -24.18203,88.56047 -1.81688,5.83593 -1.79314,6.08498 0.6405,6.72139 3.27227,0.85571 6.80847,7.46606 5.07957,9.49542 -0.69007,0.81 -5.72365,4.84772 -11.18575,8.97272 -11.14974,8.42032 -11.46666,9.17668 -11.46666,27.36593 0,5.06613 -1.04789,12.55629 -2.43546,17.40838 -1.72899,6.04597 -2.09277,9.30816 -1.25405,11.24602 0.64978,1.50132 1.69101,29.44842 2.31385,62.10467 l 1.13245,59.375 -8.57739,13.75 -8.5774,13.75 -7.2385,2.17607 c -3.98118,1.19684 -9.9057,2.52563 -13.16561,2.95286 -6.67565,0.87492 -6.01343,-0.39546 -10.54473,20.22848 -2.1362,9.72277 -2.50547,10.4168 -6.0269,11.32674 l -3.75126,0.96932 -0.35495,11.87721 -0.35495,11.8772 6.27316,2.9382 c 6.27084,2.9371 6.69138,3.4943 8.15826,10.8094 0.43074,2.1481 2.16023,5.1992 3.84332,6.7804 2.77163,2.6038 3.06016,3.8561 3.06016,13.282 v 10.4071 h -94.375 -94.375002 v -9.3952 z m 183.750002,-2.0867 c 0,-5.007 -0.64,-7.1591 -2.8125,-9.4579 -1.54688,-1.6367 -3.39161,-5.3292 -4.09941,-8.2055 -1.11343,-4.5247 -2.12447,-5.6619 -7.5,-8.4355 l -6.21309,-3.2059 -0.34938,-15.79308 -0.34936,-15.79309 4.42351,-0.82985 c 3.11523,-0.58443 4.60455,-1.61989 5.0356,-3.50106 0.33665,-1.46917 1.8876,-8.2729 3.44655,-15.11943 l 2.83448,-12.44824 10.6043,-1.60218 c 5.83236,-0.88122 11.81774,-1.8865 13.30081,-2.23398 1.7622,-0.41287 5.40433,-5.0131 10.5115,-13.27669 l 7.81498,-12.6449 -0.86232,-57.67288 c -0.5639,-37.71458 -1.35291,-59.03562 -2.28,-61.61069 -1.19455,-3.31796 -0.87947,-5.8344 2.00174,-15.98713 2.27354,-8.01146 3.14074,-13.31821 2.58779,-15.83577 -0.4574,-2.08254 -0.44349,-7.6515 0.0309,-12.37548 l 0.86257,-8.58903 10.48007,-7.8874 c 5.76404,-4.33808 10.49159,-8.26565 10.50565,-8.72797 0.0141,-0.4623 -1.89925,-1.47581 -4.25184,-2.25223 l -4.27742,-1.41168 2.56561,-8.99776 c 1.41109,-4.94878 8.03983,-29.15729 14.73053,-53.79671 11.87591,-43.73463 12.10881,-44.85123 9.80338,-46.99907 -1.93917,-1.80661 -2.91145,-6.87266 -5.43633,-28.32603 -1.69114,-14.36928 -3.08235,-26.55493 -3.09158,-27.07924 -0.009,-0.52431 -20.07932,-0.80556 -44.60022,-0.625 l -44.58342,0.32829 -18.85403,70.2528 -18.85404,70.2528 -8.72191,0.3722 -8.7219,0.3722 -4.08299,19.375 c -4.05286,19.23201 -4.07701,19.55396 -3.27303,43.62503 l 0.80995,24.25004 -3.81322,3.24996 c -2.97228,2.53324 -8.94221,14.82798 -27.07043,55.74997 -27.86405,62.89935 -27.42013,60.89576 -16.37647,73.9134 3.78125,4.45712 6.875,8.94092 6.875,9.96398 0,1.56795 -8.77679,37.91528 -10.74783,44.50999 -0.48947,1.63768 1.42283,3.17561 8.1795,6.57821 4.85008,2.44247 8.81833,4.67359 8.81833,4.95807 0,0.28447 -2.19086,4.29367 -4.86858,8.90933 -5.3782,9.2705 -2.12343,7.285 -33.428989,20.3926 -12.176255,5.0981 -12.752197,5.5144 -14.705802,10.6299 -1.479197,3.8732 -3.220391,5.89 -6.389932,7.4015 -3.907542,1.8634 -4.356699,2.5951 -4.356699,7.0978 v 5.0202 h 89.375002 89.375 v -6.4819 z m 436.25,1.0884 c 0,-4.8722 -0.39911,-5.5838 -4.12964,-7.3627 -2.99661,-1.429 -4.58697,-3.3551 -5.79656,-7.0202 l -1.66694,-5.0508 -20.76592,-8.6401 -20.76594,-8.6401 -4.77596,-8.2975 c -2.62679,-4.56363 -4.45432,-8.81798 -4.06117,-9.45411 0.39315,-0.63612 4.31969,-2.84351 8.72567,-4.90531 l 8.01083,-3.74874 -5.48113,-21.68096 c -3.01463,-11.92453 -5.49512,-22.96159 -5.51219,-24.52679 -0.0179,-1.63815 2.88647,-6.38289 6.84395,-11.18071 10.61877,-12.87364 11.26067,-10.07548 -16.86451,-73.51544 -13.05673,-29.45114 -24.19784,-53.86487 -24.75802,-54.25277 -7.0397,-4.87458 -6.57126,-2.37882 -5.41153,-28.83172 1.04196,-23.76672 1.00095,-24.44182 -2.49984,-41.14337 -1.95755,-9.33909 -3.85833,-18.24579 -4.22395,-19.79266 -0.61091,-2.5846 -1.37189,-2.8125 -9.39096,-2.8125 -4.7994,0 -8.72619,-0.22644 -8.72619,-0.50319 0,-0.53951 -35.8765,-134.8977 -36.9983,-138.55931 -0.62178,-2.02954 -3.86676,-2.1875 -44.93713,-2.1875 h -44.26695 l -0.58472,2.8125 c -0.3216,1.54687 -1.77388,13.5 -3.22728,26.5625 -2.15877,19.40222 -3.08552,24.22207 -5.0624,26.32877 -2.40216,2.55991 -2.33756,2.88354 8.82845,44.23329 6.18659,22.90997 11.24833,42.59015 11.24833,43.73372 0,1.14357 0.47886,2.61359 1.06414,3.26672 1.08087,1.20618 5.18586,15.2247 5.18586,17.70972 0,0.74701 -1.6875,1.94648 -3.75,2.66548 -2.0625,0.71898 -3.75,1.78873 -3.75,2.37722 0,0.58848 4.03439,4.13336 8.9653,7.87753 4.93091,3.74415 9.63592,7.47462 10.45559,8.28992 1.98017,1.96966 3.48707,17.88973 2.05706,21.7324 -0.83055,2.23183 -0.14536,6.49369 2.58862,16.10124 2.85343,10.02727 3.40118,13.57357 2.35522,15.24842 -0.88085,1.41047 -1.82644,22.81157 -2.67333,60.50378 l -1.31037,58.32136 7.65876,12.39213 c 4.21231,6.81567 8.58562,12.87496 9.71845,13.46508 1.13284,0.59013 6.94565,1.78937 12.91737,2.66498 5.97172,0.87561 11.35422,1.92867 11.96109,2.34012 0.60689,0.41147 2.50365,7.21687 4.21503,15.12312 l 3.11158,14.375 4.61482,1.15796 4.61481,1.15795 v 15.41812 15.41815 l -6.77559,3.323 c -5.8534,2.8708 -6.88879,3.9264 -7.60722,7.756 -0.45739,2.4382 -2.47088,6.3 -4.4744,8.5819 -2.81529,3.2064 -3.64279,5.3695 -3.64279,9.5221 0,2.9552 0.375,5.7481 0.83334,6.2065 0.45832,0.4583 40.67707,0.8333 89.375,0.8333 h 88.54166 z M 87.191031,650.75574 c -0.02261,-0.83519 -2.187649,-3.66692 -4.811187,-6.29274 -4.048386,-4.0519 -5.454602,-4.71381 -9.2946,-4.375 l -4.524531,0.39922 6.738896,7.2833 c 5.960915,6.44246 7.038689,7.12285 9.335718,5.89351 1.428251,-0.76438 2.578318,-2.0731 2.555703,-2.90829 z m 580.167379,-1.83102 c 8.24509,-8.81663 8.32753,-9.07667 2.83929,-8.95669 -4.01484,0.0878 -5.55693,0.93917 -9.04014,4.99125 -7.41651,8.62775 -1.62362,12.3323 6.20085,3.96544 z m -560.8535,1.42876 c 4.01749,-1.54165 2.14527,-4.24126 -2.94139,-4.24126 -5.674778,0 -11.331372,1.85655 -11.331372,3.71906 0,1.37562 10.999972,1.77809 14.272762,0.5222 z m 544.47724,-0.96001 c 0,-1.85137 -5.2429,-3.28125 -12.03125,-3.28125 -4.58798,0 -5.4961,1.63178 -2.03125,3.64987 3.40619,1.98393 14.0625,1.70459 14.0625,-0.36862 z M 91.767873,641.76912 c 1.139163,-2.96862 -4.652454,-9.25835 -8.598225,-9.33774 -1.890625,-0.038 -3.4375,0.24992 -3.4375,0.63991 0,0.38999 1.828125,2.9111 4.0625,5.60246 4.288365,5.16547 6.804079,6.14212 7.973225,3.09537 z m 568.905917,-4.0944 4.38207,-5.3125 h -3.7635 c -2.83339,0 -4.58957,1.08305 -7.10607,4.38235 -3.38525,4.4383 -3.30162,7.32141 0.19218,6.62436 1.05229,-0.20994 3.88518,-2.77234 6.29532,-5.69421 z m -551.3212,1.47055 c 0.27728,-0.84403 -1.88927,-1.30784 -5.83892,-1.25 -4.283669,0.0627 -6.280054,0.61037 -6.280649,1.72293 -0.0011,2.02022 11.447279,1.57347 12.119569,-0.47293 z m 536.95931,0.40445 c 0.42787,-1.11944 -1.31479,-1.60884 -6.1456,-1.72594 -5.60386,-0.13583 -6.50088,0.12811 -5.31044,1.5625 1.78931,2.15599 10.64615,2.28234 11.45604,0.16344 z M 70.419269,630.45755 c -3.522842,-4.61868 -3.600361,-6.21251 -1.13849,-23.40783 0.619594,-4.32765 0.435177,-4.6875 -2.402301,-4.6875 -2.85034,0 -3.132193,0.56705 -3.883238,7.8125 -0.445402,4.29687 -1.139282,10.71688 -1.541956,14.2667 -0.696049,6.1361 -0.556277,6.54948 2.835865,8.38746 1.9624,1.06327 4.900387,1.95576 6.52886,1.98329 l 2.960862,0.05 -3.359602,-4.40467 z m 609.374501,2.10612 c 2.77527,-2.24728 2.81322,-2.60282 1.70099,-15.9375 -1.08654,-13.02664 -1.27094,-13.65782 -4.10725,-14.05898 -2.94957,-0.4172 -2.96361,-0.3623 -2.0782,8.125 0.49028,4.69976 1.36124,9.0359 1.93546,9.63586 1.24365,1.29938 -0.84047,6.63302 -4.00117,10.23973 -1.2438,1.41931 -2.26145,2.96619 -2.26145,3.4375 0,1.76549 6.0793,0.77089 8.81162,-1.44161 z m -572.47513,-1.27014 2.86345,-2.31868 -4.47316,-0.83917 c -2.46024,-0.46154 -5.936478,-1.99021 -7.724973,-3.39704 l -3.251809,-2.55787 v 3.125 c 0,3.14943 5.063046,8.30645 8.155092,8.30645 0.86237,0 2.8565,-1.04342 4.4314,-2.31869 z m 538.41641,0.13119 c 2.4177,-2.09053 4.94585,-7.8125 3.4518,-7.8125 -0.39256,0 -2.81276,1.125 -5.37823,2.5 -2.56545,1.375 -6.07903,2.51871 -7.80796,2.54158 l -3.14351,0.0416 2.95097,2.45841 c 3.64619,3.03758 6.63299,3.11909 9.92693,0.27091 z m -557.52231,-5.625 c 0.707688,-0.85938 1.695584,-7.36774 2.195324,-14.46303 l 0.908618,-12.90051 -4.854768,0.79726 c -10.76734,1.76824 -11.730905,2.1082 -11.807045,4.1656 -0.0425,1.14849 -0.490572,6.21455 -0.995708,11.25791 -0.836961,8.35633 -0.694552,9.32654 1.605411,10.9375 3.122282,2.18693 11.210693,2.31515 12.948168,0.20527 z m 580.76862,-0.066 c 1.97653,-1.44527 2.12661,-2.91228 1.33424,-13.04127 l -0.89281,-11.41281 -5.15782,-0.77565 c -2.8368,-0.4266 -6.69992,-1.07042 -8.5847,-1.43072 -3.37277,-0.64473 -3.41785,-0.56965 -2.85498,4.75441 0.31453,2.97521 0.86863,8.97296 1.23132,13.32832 0.36269,4.35537 0.9775,8.43349 1.36626,9.0625 1.06722,1.7268 11.02068,1.3709 13.55849,-0.48478 z m -549.09871,-6.88273 c 2.67809,-2.99704 3.44007,-5.42191 4.17786,-13.29515 0.4963,-5.29626 0.57519,-9.95675 0.1753,-10.35662 -0.77136,-0.77137 -25.980266,1.98236 -26.947476,2.94363 -0.312847,0.31093 -0.789142,4.05937 -1.058432,8.32984 -0.415764,6.5933 -0.06822,8.29876 2.30396,11.30618 3.625978,4.59695 6.921538,5.92548 13.073288,5.27026 3.53262,-0.37626 5.96127,-1.60831 8.2755,-4.19814 z m 521.82411,2.40439 c 5.36513,-3.27165 7.05958,-8.02368 5.85335,-16.41553 l -0.98497,-6.85263 -9.35899,-1.48405 c -5.14745,-0.81623 -11.2675,-1.51935 -13.60011,-1.5625 l -4.24113,-0.0785 0.67451,9.84095 c 0.76535,11.16617 2.05235,14.32892 6.90165,16.96055 4.67857,2.53896 10.17175,2.38695 14.75569,-0.40834 z m -225.3844,-3.59591 c 3.11408,-3.25039 3.49409,-5.04435 6.48386,-30.60868 2.70683,-23.1449 3.17724,-32.55877 3.18484,-63.73475 0.009,-34.0116 0.40245,-40.5705 5.61609,-93.45382 l 5.60717,-56.875 -0.0965,-71.875 -0.0965,-71.875 -2.3384,10.3574 c -3.1858,14.1108 -8.83701,25.10155 -16.75911,32.59395 -12.24084,11.57686 -24.24001,15.64273 -46.31672,15.6942 -21.8603,0.051 -36.62104,-5.01867 -47.64845,-16.36504 -6.36527,-6.54936 -13.39487,-20.47455 -15.34908,-30.40551 -0.74407,-3.78125 -1.5744,-8 -1.84517,-9.375 -0.27077,-1.375 -0.55468,30.96875 -0.63092,71.875 l -0.13862,74.375 5.17604,51.25 c 4.62151,45.75951 5.27943,56.4057 6.14122,99.375 1.15593,57.63531 3.71613,84.10187 8.64274,89.34601 l 2.96302,3.15399 h 42.04824 42.04825 l 3.30794,-3.45275 z M 92.857148,593.51427 c 15.812502,-2.1365 29.423042,-4.08428 30.245642,-4.3284 1.05303,-0.31253 0.35792,-3.8847 -2.34895,-12.07127 -2.11453,-6.39506 -4.24702,-12.07433 -4.73887,-12.62061 -1.3206,-1.46671 -46.330429,-5.10237 -47.476118,-3.83487 -1.149568,1.2718 -13.806704,33.85908 -13.806704,35.547 0,1.936 8.113276,1.36315 38.125,-2.69185 z m 596.281672,1.66045 c -0.47343,-1.20313 -3.70711,-9.64063 -7.18595,-18.75 -5.35998,-14.03519 -6.72727,-16.56017 -8.96043,-16.54715 -3.85773,0.0225 -44.92067,3.7156 -45.1839,4.06377 -1.156,1.52896 -7.87664,24.03869 -7.33899,24.58075 1.1103,1.11938 54.03244,8.50524 62.20884,8.68193 6.49972,0.14045 7.22465,-0.0872 6.46043,-2.0293 z M 133.31765,557.31293 c 2.87607,-2.3958 3.10066,-4.02486 7.87662,-57.13303 5.16457,-57.42923 5.1517,-60.31768 -0.26835,-60.31768 -4.01598,0 -2.8944,-6.50203 1.30623,-7.57249 l 3.125,-0.79635 -3.24276,-1.5525 c -4.28445,-2.05121 -3.66853,-7.57866 0.8445,-7.57866 1.67205,0 3.52072,-1.09388 4.2956,-2.54174 1.12181,-2.09613 8.65511,-75.29906 8.71088,-84.64576 0.0128,-2.12847 0.74429,-2.8125 3.00804,-2.8125 3.54289,0 4.50874,-2.03018 4.50874,-9.47724 0,-3.03751 0.26042,-5.52276 0.57872,-5.52276 0.3183,0 3.50037,1.1516 7.07125,2.55911 l 6.49254,2.55912 -0.84639,-20.99662 c -0.4655,-11.54814 -1.20527,-28.2144 -1.64393,-37.03614 l -0.79757,-16.03952 -4.27705,0.80237 -4.27705,0.80238 0.88805,-11.35193 c 1.51339,-19.34569 0.78817,-18.08552 15.58062,-27.07295 18.9754,-11.52883 19.81223,-14.83312 9.59538,-37.88751 -6.53828,-14.75368 -6.88347,-15.23448 -23.57927,-32.8431 l -16.94386,-17.87022 -10.60974,3.45447 -10.60975,3.45446 -0.81098,11.42507 c -0.44603,6.28379 -0.81958,15.97928 -0.83011,21.54554 -0.01,5.56626 -0.51439,10.90252 -1.11967,11.85837 -0.87639,1.38394 -5.13012,-0.36999 -20.88538,-8.61161 l -19.784831,-10.34952 -6.694805,3.61162 c -3.682142,1.98638 -7.259179,4.28785 -7.948969,5.11437 -0.860276,1.0308 0.391828,9.19908 3.986784,26.00836 2.88252,13.47809 4.952226,24.79433 4.599348,25.1472 -0.35288,0.35289 -8.606369,-0.0374 -18.341088,-0.86724 -10.272519,-0.87571 -18.122267,-1.04355 -18.70703,-0.39997 -0.554147,0.60989 -2.145575,4.48389 -3.536505,8.60889 -1.390929,4.125 -2.885394,8.3653 -3.321031,9.42287 -0.534676,1.29803 3.71324,7.18796 13.072032,18.125 7.720138,9.02205 13.13537,16.33584 12.219692,16.50386 -0.904425,0.16597 -8.300953,1.10375 -16.436729,2.08399 -8.135776,0.98024 -14.950636,1.96945 -15.144133,2.19826 -0.193496,0.22882 -0.723407,4.67744 -1.17758,9.88584 l -0.825767,9.46981 14.7199,12.85874 c 8.095945,7.0723 16.266775,13.41279 18.1574,14.08996 1.890625,0.67718 3.442912,2.16058 3.449529,3.29645 0.0066,1.13587 -1.756098,21.27413 -3.91714,44.75169 -2.161043,23.47756 -3.577602,44.08724 -3.14791,45.79926 0.48526,1.93343 1.969362,3.41098 3.91714,3.89984 4.571913,1.14748 4.364176,6.39605 -0.301619,7.62054 -3.427291,0.89946 -3.429148,0.906 -0.625,2.20152 1.95387,0.9027 2.8125,2.38593 2.8125,4.85838 0,3.07801 -0.480609,3.55899 -3.556265,3.55899 -1.955946,0 -4.559594,1.10866 -5.785882,2.4637 -1.529597,1.69018 -5.05376,15.72046 -11.224731,44.6875 l -8.995115,42.2238 10.910637,15 10.910637,15 36.057859,3.27186 c 19.831822,1.79952 36.620362,3.32769 37.307862,3.39591 0.6875,0.0682 2.58222,-0.9857 4.2105,-2.34206 z m 520.39511,-1.37179 34.6056,-2.79739 10.90123,-15.0408 10.90122,-15.0408 -9.06197,-42.53747 c -9.56933,-44.91904 -10.28985,-46.91246 -16.95644,-46.91246 -2.57329,0 -4.37025,-2.08153 -4.37025,-5.06232 0,-0.60931 1.48874,-1.88787 3.30831,-2.84125 l 3.30833,-1.7334 -3.30833,-0.83033 c -4.26849,-1.07133 -4.16931,-2.59704 0.51568,-7.93294 3.5024,-3.98903 3.7635,-4.8964 3.10473,-10.79003 -0.39557,-3.5391 -2.11672,-22.74723 -3.82476,-42.68473 -1.70805,-19.9375 -3.2903,-37.8057 -3.51614,-39.70712 -0.3399,-2.86182 0.17569,-3.61516 2.99424,-4.375 1.87266,-0.50483 9.96456,-6.54288 17.98203,-13.41788 l 14.57718,-12.5 -0.5893,-9.8605 c -0.32411,-5.42329 -1.205,-10.24104 -1.95752,-10.70613 -0.75253,-0.46509 -8.11289,-1.57079 -16.35634,-2.4571 -8.24346,-0.88632 -14.98811,-1.85862 -14.98811,-2.16067 0,-0.30205 6.11422,-7.6491 13.58717,-16.32678 l 13.58718,-15.77761 -3.68621,-10.10048 c -2.02743,-5.55527 -3.9034,-10.31766 -4.16883,-10.58308 -0.26542,-0.26544 -8.67787,0.22837 -18.69431,1.09735 -10.01644,0.86897 -18.41789,1.36508 -18.66989,1.10247 -0.25199,-0.26261 1.99839,-11.72747 5.00085,-25.47747 6.19948,-28.39094 6.66045,-25.46099 -5.00869,-31.83552 l -5.35342,-2.92444 -20.60764,10.76529 -20.60764,10.76529 -0.81428,-15.14406 c -0.44787,-8.32924 -0.81429,-18.69222 -0.81429,-23.02884 0,-8.93646 0.54151,-8.39104 -12.9798,-13.07339 l -8.6048,-2.97979 -17.6452,18.26705 -17.6452,18.26704 -6.64936,15.72287 c -6.63423,15.68705 -6.64553,15.73646 -4.96383,21.6907 1.62744,5.76206 2.15841,6.25957 15.39938,14.42892 l 13.71381,8.46109 1.34666,14.68389 c 0.74068,8.07615 1.2153,14.86552 1.05473,15.08752 -0.16058,0.22199 -2.31345,-0.15455 -4.78418,-0.83675 -4.15215,-1.14646 -4.49525,-1.03507 -4.53227,1.47139 -0.022,1.49145 -0.82918,18.17022 -1.79364,37.06394 -0.96445,18.89371 -1.60121,34.50455 -1.41503,34.69073 0.18619,0.1862 3.46812,-0.7382 7.29315,-2.0542 l 6.95462,-2.39273 1.06298,7.02368 c 0.9175,6.06247 1.49065,7.124 4.18798,7.75664 l 3.125,0.73295 3.76495,42.58376 c 2.59066,29.30199 4.29536,43.22287 5.46555,44.63285 0.93534,1.12702 3.03799,2.04912 4.67255,2.04912 4.04965,0 4.16691,5.52251 0.16277,7.66546 l -2.80916,1.50342 3.43416,1.14473 c 4.25577,1.41859 5.02867,7.18639 0.96299,7.18639 -1.35915,0 -3.25495,1.26562 -4.21289,2.8125 -1.51516,2.44668 -1.10005,9.88486 3.19155,57.1875 4.84687,53.42281 4.98763,54.42433 8.03828,57.19238 1.92911,1.7504 4.14162,2.60277 5.84214,2.25067 1.50541,-0.3117 18.30963,-1.82557 37.34272,-3.36413 z M 310.98114,521.42472 c -9.4e-4,-34.15563 -0.40858,-41.29125 -5,-87.52205 l -4.99899,-50.33454 v -82.99194 -82.99192 l -7.8125,-0.52437 c -4.29688,-0.2884 -30.875,0.84725 -59.0625,2.52368 -43.61576,2.594 -51.57881,3.36196 -53.45734,5.15541 -2.10926,2.01371 -2.06412,5.1323 1.0155,70.17779 3.13649,66.24636 3.29613,68.14226 5.95735,70.75057 2.28119,2.23585 6.15351,3.12432 23.35949,5.35958 11.34375,1.47369 21.80685,2.92919 23.25132,3.23445 2.33174,0.49276 2.71645,1.72744 3.42977,11.00725 2.16553,28.17291 11.79776,66.95035 22.8227,91.87969 1.66572,3.7665 2.86833,7.00843 2.67247,7.2043 -0.19586,0.19586 -12.05164,2.56413 -26.34617,5.26283 -14.29453,2.6987 -26.45533,5.40512 -27.02399,6.01425 -0.56865,0.60914 -1.97336,14.22712 -3.12158,30.26219 -1.61237,22.51733 -1.7508,29.56055 -0.60802,30.9375 1.23759,1.4912 9.93986,1.78283 53.20155,1.78283 h 51.72195 l -10e-4,-37.1875 z m 226.02012,35.5907 c 0.93754,-1.12967 0.72136,-10.31507 -0.73892,-31.39844 -1.92418,-27.78073 -2.23677,-29.87329 -4.60967,-30.85809 -2.151,-0.8927 -49.6162,-9.90104 -52.15168,-9.89777 -0.47089,6e-4 1.01458,-4.07703 3.30107,-9.0614 9.4998,-20.70892 17.9747,-53.39689 21.56274,-83.16828 1.93497,-16.05522 2.40862,-17.90925 4.69716,-18.38606 1.39985,-0.29166 11.54519,-1.72274 22.54519,-3.18018 27.78465,-3.68131 26.27454,-1.90423 27.36839,-32.20656 1.30233,-36.07822 4.41356,-98.9709 5.20988,-105.31672 0.55574,-4.42862 0.2095,-6.27975 -1.55678,-8.32313 -2.15214,-2.48975 -4.96425,-2.7869 -53.52149,-5.65554 -28.1875,-1.66525 -54.76563,-2.79175 -59.0625,-2.50335 l -7.8125,0.52437 -0.005,80.20147 -0.005,80.20148 -5.61954,56.84702 c -5.06509,51.22889 -5.62046,60.07204 -5.62046,89.47918 0,17.94767 0.375,33.00713 0.83334,33.46546 0.45832,0.45834 24.01445,0.83334 52.34693,0.83334 40.27602,0 51.80272,-0.34834 52.83884,-1.5968 z M 383.69734,282.35632 c 12.58992,-1.82108 21.42291,-5.6405 28.94641,-12.51657 11.64785,-10.64547 17.3608,-24.94906 19.12336,-47.87941 l 0.83385,-10.84812 h 8.5656 8.56559 v -21.68127 c 0,-26.23589 0.49505,-25.38176 -15.42015,-26.6051 l -10.90565,-0.83828 -5.66314,-10.96488 c -3.25809,-6.30827 -8.78664,-14.37363 -13.01801,-18.99143 -6.51936,-7.11473 -7.45168,-8.79434 -8.20696,-14.7853 -0.5176,-4.10563 -1.85697,-7.86278 -3.41198,-9.57125 -2.43535,-2.67565 -3.46371,-2.8125 -21.13599,-2.8125 -23.09091,0 -24.11157,0.46663 -25.40545,11.61466 -0.84427,7.27435 -1.35706,8.22459 -8.74367,16.20281 -4.97536,5.37385 -9.73615,12.28923 -13.00983,18.89772 l -5.16303,10.42244 -10.82583,0.83214 c -15.82352,1.2163 -15.34031,0.37843 -15.34031,26.59897 v 21.68127 h 8.75 8.75 l 0.0436,7.1875 c 0.0975,16.07358 5.02489,33.88618 12.29782,44.45701 10.70907,15.56512 34.61417,23.32561 60.37376,19.59959 z m -210.56988,-49.6816 c -0.2864,-1.89063 -0.52074,-0.34375 -0.52074,3.4375 0,3.78125 0.23434,5.32812 0.52074,3.4375 0.28641,-1.89063 0.28641,-4.98438 0,-6.875 z m 398.3181,0.625 c -0.73757,-8.31347 -2.3888,-13.17878 -3.94466,-11.62292 -0.34375,0.34375 0.0978,1.49584 0.98107,2.5602 1.13465,1.36718 1.3842,4.31133 0.85017,10.03022 -0.61914,6.63016 -0.42357,8.095 1.08077,8.095 1.52064,0 1.69834,-1.55948 1.03265,-9.0625 z"
                id="path4147"
            />
            </g>
            </g></svg>
      );
    }
}

interface IBattlmechDiagramSVGProps {
    bgColor?: string;
    strokeColor?: string;

    yLoc?: number;
    xLoc?: number;

    width?: number;
}

interface IBattlmechDiagramSVGState {
}