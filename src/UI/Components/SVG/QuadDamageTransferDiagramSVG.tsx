
import React from 'react';

export default class QuadDamageTransferDiagramSVG extends React.Component<IQuadDamageTransferDiagramSVGProps, IQuadDamageTransferDiagramSVGState> {
    bgColor = "rgb(255,255,255)";
    strokeColor = "rgb(0,0,0)";
    theWidth = 744;
    theHeight = 627;
    xLoc = 0;
    yLoc = 0;
    constructor(props: IQuadDamageTransferDiagramSVGProps) {
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

        // if( typeof(standAlone) === "undefined" )
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
        viewBox="0 0 744.09448819 1052.3622047"
        height={this.theHeight + "px"}
        width={this.theWidth + "px"}
        x={this.props.xLoc}
        y={this.props.yLoc}
        id="QuadDamageTransferDiagram"
        version="1.1"
        >
            <g>
                <g
                    transform="translate(0,-3.75)"
                    id="layer1"
                >
                <path
                    d="m 19.651577,1043.9478 c -2.79209,-4.5177 -0.81598,-30.8519 3.04699,-40.6051 3.98388,-10.05832 17.73902,-24.04164 28.44999,-28.92189 5.45723,-2.48648 6.15612,-5.44309 8.85768,-37.47184 1.61314,-19.1248 3.70907,-57.37844 4.65763,-85.0081 1.20842,-35.19912 2.84746,-52.44056 5.47588,-57.6018 3.39966,-6.6757 3.24466,-8.01012 -1.65381,-14.2375 -2.97278,-3.77928 -5.40505,-8.5434 -5.40505,-10.58691 0,-2.04354 -4.78666,-8.13537 -10.63703,-13.5374 -18.47435,-17.05863 -17.06925,-40.68952 3.02908,-50.94292 5.57863,-2.84602 11.83036,-8.43763 13.89274,-12.42581 2.06237,-3.98819 6.15525,-9.42819 9.09529,-12.08889 4.3992,-3.98124 4.89165,-6.13957 2.78175,-12.19203 -3.24604,-9.31159 5.52572,-110.37503 15.73211,-181.25684 l 7.233533,-50.23573 17.11306,0.82325 c 9.41219,0.45281 19.19521,1.42532 21.74004,2.16117 12.62501,3.65055 3.21161,-14.42797 -45.608763,-87.59198 -30.75973,-46.09768 -50.23573,-77.77442 -50.23573,-81.7059 0,-4.3368 4.78489,-11.01891 14.74245,-20.58785 12.89726,-12.39392 14.51602,-15.06929 12.9333,-21.37534 -1.09119,-4.34767 -3.61101,-7.20823 -6.34961,-7.20823 -6.25024,0 -16.03817,-10.99578 -16.03817,-18.01732 0,-6.61629 8.65892,-16.3545 14.54193,-16.3545 2.18128,0 4.14444,-2.37959 4.36257,-5.28797 0.21813,-2.90839 0.51558,-6.49343 0.661,-7.96676 0.14542,-1.47333 -5.4859,-9.78258 -12.51404,-18.465 -16.8771,-20.84961 -15.90484,-25.02999 10.91692,-46.93886 11.12677,-9.088709 22.60002,-16.52492 25.49613,-16.52492 3.03696,0 11.498213,6.714403 19.991163,15.86392 13.75676,14.82027 21.15189,19.44223 21.15189,13.21993 0,-5.02013 10.59585,-13.21993 17.08291,-13.21993 7.43514,0 17.2889,9.28705 17.2889,16.29457 0,2.59684 3.61526,6.59105 8.03391,8.87602 8.02051,4.14756 8.05888,4.13224 23.00167,-9.18605 l 14.96776,-13.34055 27.89507,-0.10636 c 15.34229,-0.0585 84.88084,-0.0673 154.53012,-0.0196 l 126.63509,0.0867 14.21844,13.44721 14.21843,13.4472 8.52307,-4.97774 c 4.68768,-2.73775 8.94722,-7.2929 9.46566,-10.12256 1.49533,-8.16188 8.5388,-14.39887 16.26059,-14.39887 7.15481,0 15.86392,7.00901 15.86392,12.76713 0,7.35255 10.1152,1.76984 20.64429,-11.39385 17.31309,-21.645199 21.85464,-21.603815 47.92365,0.43668 26.10786,22.07334 26.7339,25.50041 8.68307,47.53358 -13.1482,16.04892 -15.30942,26.04152 -6.31932,29.21762 8.3692,2.95672 13.67586,9.52577 13.67586,16.92913 0,7.65239 -8.74979,18.20112 -15.09716,18.20112 -1.93825,0 -4.95972,3.15085 -6.71437,7.00188 -3.02917,6.64828 -2.42544,7.68595 11.95462,20.54734 12.01121,10.74273 15.14451,15.17499 15.14314,21.42097 -10e-4,5.81588 -13.13868,27.58228 -50.23399,83.22912 -27.62773,41.44448 -50.23301,77.36552 -50.23399,79.82454 -0.003,6.59849 2.0548,7.02144 23.79413,4.89169 10.90644,-1.06849 20.05241,-1.80328 20.3244,-1.63285 0.27196,0.17027 4.09487,26.46109 8.49536,58.42371 10.05667,73.04594 17.13909,151.97184 15.15628,168.90017 -1.36884,11.68674 -0.74679,13.83701 6.3369,21.9049 4.32011,4.92032 7.85475,10.0785 7.85475,11.46258 0,1.38407 4.21341,4.27696 9.36312,6.42866 6.86749,2.86942 10.71804,6.97518 14.44651,15.40397 6.61713,14.9591 3.15506,28.15536 -9.67892,36.89287 -4.84363,3.2976 -8.81474,7.0551 -8.82468,8.35002 -0.0106,1.29492 -2.642,7.60834 -5.84905,14.02981 -4.69924,9.40929 -5.2334,12.63231 -2.7522,16.60537 1.70962,2.73753 3.72892,20.60247 4.54065,40.17191 0.80403,19.38306 2.82142,58.1237 4.48311,86.09031 2.77574,46.71662 3.44144,50.98171 8.19258,52.48965 7.14638,2.26817 25.3306,19.08083 29.63015,27.39525 1.95205,3.7748 3.62969,15.4648 3.72812,25.9776 l 0.179,19.1143 -97.72939,0 -97.7294,0 0.26702,-17.7987 c 0.14674,-9.7892 1.29307,-20.4973 2.54716,-23.7959 l 2.28009,-5.99722 -69.9393,0 -69.9393,0 0.13881,-16.52492 c 0.18032,-21.44426 7.29899,-36.66949 21.81487,-46.6567 l 10.97672,-7.55215 -3.32918,-73.69755 c -2.26143,-50.06155 -2.47382,-75.64537 -0.66218,-79.77091 4.58464,-10.44036 3.2851,-23.81563 -2.62096,-26.97646 -4.8694,-2.60602 -5.28797,-5.53603 -5.28797,-37.01581 0,-31.99078 0.35545,-34.37602 5.53624,-37.14867 4.84135,-2.59102 5.31954,-4.5109 3.80975,-15.29596 -0.94959,-6.78317 -2.3385,-22.14883 -3.08651,-34.14592 l -1.36004,-21.81289 -48.53182,0 -48.53185,0 -1.31356,23.13488 c -0.72247,12.72419 -2.1118,28.08805 -3.08741,34.1419 -1.52814,9.48226 -1.0059,11.41803 3.7699,13.97395 5.18946,2.77732 5.54376,5.14805 5.54376,37.09581 0,31.76517 -0.38782,34.40051 -5.59986,38.05117 -4.80513,3.36563 -5.29852,5.35682 -3.47663,14.03084 2.48347,11.82391 1.86385,99.6314 -0.97312,137.90456 l -1.96134,26.45993 11.71892,8.80159 c 16.23378,12.1925 21.44391,23.15394 21.44391,45.11516 l 0,17.88815 -70.15864,0 c -68.54451,0 -70.0957,0.11766 -67.42166,5.11412 1.50536,2.8129 2.73701,13.521 2.73701,23.796 l 0,18.6817 -96.34945,0 c -52.992203,0 -96.996373,-1.0468 -97.787063,-2.3261 z M 203.21215,1030.566 c 0,-1.3684 -1.31797,-3.3025 -2.92881,-4.2981 -1.81283,-1.1204 -2.30679,-5.7 -1.29637,-12.0188 1.54829,-9.6825 1.05186,-10.6306 -9.63012,-18.39257 -6.19442,-4.50112 -13.03977,-9.18825 -15.2119,-10.4158 -3.36745,-1.90311 -3.12472,-3.13724 1.64745,-8.37622 4.51753,-4.95941 5.94417,-10.98791 7.39819,-31.26213 0.99077,-13.81482 5.21954,-48.76637 9.39726,-77.67008 5.52128,-38.19925 6.89154,-54.4047 5.01708,-59.33488 -1.41832,-3.73046 -1.80664,-12.96246 -0.86294,-20.51557 1.34323,-10.75089 3.01152,-14.32326 7.68287,-16.45167 5.46438,-2.48974 6.12856,-5.12992 7.88431,-31.34054 1.78445,-26.63928 1.55906,-28.85962 -3.2539,-32.0553 -4.24451,-2.81825 -4.96223,-5.66619 -4.00526,-15.89305 0.64124,-6.85274 2.82011,-16.6238 4.84194,-21.71347 2.02183,-5.08968 5.60472,-30.88192 7.96199,-57.31607 4.22963,-47.43068 9.01564,-151.0118 7.15557,-154.86383 -0.52665,-1.09064 -8.0261,-1.98299 -16.66543,-1.98299 l -15.70788,0 0,14.6249 c 0,15.99709 -2.73744,18.97993 -14.66995,15.98506 -6.51761,-1.63581 -6.67181,-2.16876 -4.97276,-17.18639 l 1.75343,-15.49825 -10.22426,-1.52127 c -24.59437,-3.65941 -51.20604,-4.85378 -51.20604,-2.29821 0,1.4625 -2.97511,23.316 -6.61135,48.56339 -10.542863,73.20178 -17.380093,157.43259 -13.852113,170.6502 2.81498,10.54636 2.59586,11.34368 -5.09074,18.52403 -4.41779,4.12684 -9.94202,11.19622 -12.27606,15.7098 -2.78747,5.39035 -6.87479,8.73266 -11.91099,9.73992 -15.39527,3.07905 -16.89296,27.15709 -2.10822,33.89347 3.86237,1.75981 8.15668,7.46307 10.76817,14.30116 2.38908,6.2557 6.06585,12.80321 8.17062,14.55002 4.81733,3.99802 4.906,13.88209 0.20768,23.15069 -2.51718,4.96575 -4.18929,24.32076 -5.49166,63.5669 -1.02988,31.03498 -2.86347,66.13389 -4.07465,77.99759 -1.75484,17.18887 -1.44493,22.41823 1.52567,25.74452 5.32621,5.96394 4.61736,9.56965 -2.22114,11.2982 -16.56866,4.18803 -45.57367,29.92774 -36.95985,32.79904 3.89245,1.2975 4.35348,12.8676 0.60504,15.1843 -9.02013,5.5747 4.02365,6.6099 83.285563,6.6099 51.93079,0 85.92955,-0.9843 85.92955,-2.4879 z m 507.63343,-1.4924 c -2.11455,-2.5478 -2.71246,-7.6755 -1.6614,-14.2484 1.52326,-9.526 0.86329,-10.9716 -9.13071,-20.00059 -5.92496,-5.35283 -16.0742,-12.00494 -22.55387,-14.78245 -11.62399,-4.98261 -11.7251,-5.13562 -7.57695,-11.46649 3.65693,-5.58119 3.85663,-10.66494 1.53397,-39.05175 -1.46863,-17.94942 -3.42479,-53.42579 -4.34701,-78.8364 -1.15013,-31.69098 -2.84741,-48.46498 -5.40428,-53.40942 -4.78747,-9.25789 -4.75505,-17.08682 0.0785,-18.94157 2.09329,-0.80327 5.87163,-7.27649 8.39632,-14.38493 3.30797,-9.31384 6.67818,-13.84859 12.06385,-16.23254 14.75896,-6.53295 12.86183,-28.39808 -2.90908,-33.52786 -6.07191,-1.97503 -10.49509,-5.94675 -13.80271,-12.39398 -2.67709,-5.21817 -7.42818,-11.2812 -10.55794,-13.47338 -5.11181,-3.58046 -5.50914,-5.52924 -3.90686,-19.162 2.09782,-17.84934 -3.8351,-90.33144 -13.06529,-159.61718 -9.12072,-68.46394 -5.97247,-61.5528 -27.05551,-59.3934 -9.76051,0.99972 -18.87671,2.87425 -20.25819,4.16565 -1.38149,1.29141 -5.35844,2.34802 -8.83766,2.34802 -6.01372,0 -6.28119,0.71636 -5.42017,14.51694 0.96217,15.42409 -0.33875,17.2109 -12.53062,17.2109 -5.2797,0 -6.39371,-1.32445 -6.39371,-7.60146 0,-4.18081 -0.75378,-11.37031 -1.67505,-15.97669 l -1.67504,-8.37519 -17.49386,0.77373 -17.49385,0.77377 0.60203,46.26975 c 0.76353,58.6814 7.82591,148.79358 12.74389,162.60516 2.07121,5.81677 4.56032,16.38185 5.53132,23.47796 1.55345,11.35259 1.0642,13.43095 -4.07385,17.30661 -5.73468,4.32567 -5.78679,4.92355 -2.9076,33.36774 1.61244,15.92973 4.07849,29.36683 5.48012,29.86023 1.40163,0.49337 4.46878,2.81743 6.81593,5.16455 3.52766,3.52769 3.98165,7.98613 2.61871,25.71747 -1.21936,15.86358 0.0367,33.45486 4.82358,67.54505 3.55981,25.35231 7.74759,59.18282 9.30622,75.17894 2.39329,24.56216 3.72527,29.83178 8.56739,33.89453 4.78284,4.01302 5.09935,5.21193 1.90877,7.23048 -2.10361,1.33088 -4.71367,2.43802 -5.80014,2.46028 -1.08644,0.0212 -6.65314,4.26658 -12.37041,9.43179 -9.22757,8.33653 -10.2293,10.41263 -8.91925,18.48553 0.88949,5.4813 0.16075,10.6787 -1.83427,13.0826 -2.93921,3.5415 6.53712,3.9883 84.589,3.9883 77.97329,0 87.52601,-0.4494 84.59565,-3.9803 z M 338.05544,985.61823 c 0,-1.36837 -1.32577,-3.30731 -2.94614,-4.30878 -1.76663,-1.09183 -2.39217,-5.95092 -1.56246,-12.1369 1.73776,-12.95587 -5.85318,-22.93653 -23.97596,-31.52393 -16.14125,-7.64847 -15.56885,-6.80559 -9.28301,-13.66954 4.99885,-5.45859 5.69115,-11.42768 8.5657,-73.85378 2.22644,-48.35211 2.31306,-69.43658 0.30064,-73.1968 -1.55463,-2.90487 -2.8266,-11.82348 -2.8266,-19.81914 0,-12.21548 0.84464,-14.80566 5.28797,-16.21591 4.86054,-1.54268 5.28797,-4.00043 5.28797,-30.40584 0,-26.79172 -0.37129,-28.84536 -5.51028,-30.47641 -5.03317,-1.59747 -5.37768,-3.15811 -3.97877,-18.02506 0.84232,-8.9519 2.25423,-26.09199 3.13759,-38.08908 l 1.60611,-21.81289 -7.79349,0 c -14.39518,0 -15.77193,-4.25956 -24.39817,-75.48665 -4.39404,-36.28165 -7.99402,-66.85895 -7.99994,-67.9496 -0.005,-1.09064 -2.55687,-1.98299 -5.66868,-1.98299 -5.27718,0 -5.55692,0.9783 -4.15727,14.53957 1.41842,13.74321 1.14939,14.6277 -4.91216,16.14905 -11.31036,2.83871 -14.35655,-0.25607 -14.35655,-14.58568 0,-7.23078 -1.01823,-13.77618 -2.26275,-14.54531 -2.747,-1.69776 -5.66921,30.38046 -5.66921,62.23317 0,38.55794 -10.42658,148.25782 -14.72325,154.90605 -5.51631,8.53531 -4.8407,23.14746 1.27298,27.53238 4.82609,3.4614 4.91369,5.23763 1.91353,38.79965 -3.03371,33.93734 -4.19458,37.62152 -12.85577,40.79943 -1.05525,0.38719 -0.72509,30.90601 0.73369,67.81957 2.37263,60.03853 3.20232,67.888 7.8684,74.44091 l 5.21609,7.32532 -11.24097,6.58765 c -6.18253,3.62318 -13.22448,8.79308 -15.64879,11.48865 -5.8976,6.55745 -7.37383,32.08456 -2.05023,35.45271 5.13379,3.24803 142.62978,3.25784 142.62978,0.0102 z m 210.58963,-0.28439 c 1.57291,-1.57291 2.23684,-8.72233 1.5346,-16.52492 -1.40776,-15.64137 -6.96738,-23.32675 -22.71591,-31.4014 l -10.21264,-5.23629 6.65415,-7.06534 c 6.65132,-7.06237 6.65486,-7.09418 8.37906,-75.35646 1.66983,-66.11012 1.56119,-68.33393 -3.402,-69.63181 -5.6246,-1.47087 -6.78343,-7.31459 -9.87539,-49.80011 -1.56965,-21.56824 -1.24452,-24.23613 3.47296,-28.49879 5.47767,-4.94952 5.02074,-13.70674 -1.68599,-32.3129 -3.91146,-10.85139 -10.54314,-94.47917 -12.63659,-159.3518 -0.94935,-29.419 -2.66794,-53.48909 -3.81913,-53.48909 -1.15117,0 -2.9007,7.13877 -3.88783,15.86392 -1.44917,12.80892 -2.70572,15.86392 -6.52501,15.86392 -11.03476,0 -13.09466,-2.77849 -13.09466,-17.66265 0,-12.33755 -0.67673,-14.32261 -4.62367,-13.56249 -3.9953,0.76943 -5.74274,10.13226 -12.85768,68.89113 -4.70672,38.87045 -9.66052,69.71948 -11.564,72.01303 -1.83149,2.20681 -7.43917,4.01238 -12.4615,4.01238 l -9.13154,0 1.4617,20.4909 c 0.80396,11.26999 2.18171,28.42803 3.06169,38.12898 1.45488,16.03863 1.10079,17.90523 -3.90438,20.58393 -5.00787,2.68013 -5.50433,5.30857 -5.50433,29.14273 0,23.69789 0.53496,26.57161 5.60795,30.12487 5.82182,4.07776 5.8454,4.6877 1.69971,43.96364 -0.38372,3.63549 0.32082,35.16502 1.56566,70.06564 2.09375,58.7008 2.67239,63.90065 7.72206,69.39422 6.27931,6.83129 6.60962,6.25194 -7.66799,13.44946 -18.74023,9.4472 -25.54233,18.81497 -26.05167,35.87812 l -0.44178,14.7995 69.06591,0 c 44.65027,0 70.04596,-0.98004 71.83824,-2.77232 z M 204.73921,925.55347 c -0.83988,-2.18869 -1.52706,-9.47417 -1.52706,-16.18995 0,-17.1761 -4.33599,-10.90792 -6.6306,9.58532 -1.86552,16.66092 -1.83961,16.75172 3.90337,13.67816 3.5458,-1.89766 5.19086,-4.63287 4.25429,-7.07353 z m 339.95221,-19.41088 -2.43086,-14.54192 -0.30911,16.36886 c -0.17318,9.16958 -1.64813,17.19646 -3.3536,18.25051 -2.10065,1.29825 -1.48584,3.02932 1.98299,5.5836 4.60331,3.38964 5.09139,3.07673 5.78448,-3.70856 0.41632,-4.07581 -0.33692,-13.95443 -1.6739,-21.95249 z M 443.68443,585.55926 c 1.32012,-3.27193 5.46983,-32.12443 9.22164,-64.11666 7.10981,-60.62664 9.43528,-138.80928 4.12874,-138.80928 -1.45419,0 -2.64398,5.35407 -2.64398,11.89794 0,6.54386 -0.86033,11.89793 -1.91184,11.89793 -2.95534,0 -35.10397,-32.55371 -35.10397,-35.5463 0,-3.10608 31.92703,-35.84132 34.95643,-35.84132 1.13266,0 2.05938,4.75917 2.05938,10.57594 0,5.81677 1.18979,10.57595 2.64398,10.57595 1.7076,0 2.64399,-29.97265 2.64399,-84.62997 0,-83.9681 -0.0412,-84.60414 -5.28797,-81.32757 -6.66798,4.16422 -7.26567,19.16876 -0.90535,22.72817 4.00196,2.23962 4.10764,5.98261 1.21663,43.09616 -1.74128,22.35393 -3.84856,45.70014 -4.68282,51.88046 l -1.51686,11.23694 -77.69736,0 -77.69739,0 -0.0327,-5.94897 c -0.0179,-3.27193 -1.78794,-25.58057 -3.93332,-49.57474 -4.78329,-53.49702 -4.78329,-50.23574 0,-50.23574 6.38356,0 5.2973,-19.04846 -1.322,-23.18228 -5.24662,-3.27657 -5.28797,-2.64053 -5.28797,81.32757 0,73.46399 0.52327,84.62997 3.96598,84.62997 2.89924,0 3.96598,-3.00333 3.96598,-11.16603 l 0,-11.16603 18.51018,18.36835 18.51017,18.36833 -17.84918,18.01972 -17.84918,18.01971 -1.32199,-11.13578 c -0.7271,-6.12469 -2.80924,-11.62479 -4.62698,-12.22243 -6.32187,-2.07857 -4.00661,66.0918 4.68089,137.82455 4.38037,36.16849 8.61001,66.80568 9.39921,68.08264 0.78921,1.27697 32.91972,2.32174 71.40119,2.32174 l 69.96627,0 2.40016,-5.94897 z M 240.22795,440.50092 c 0,-4.705 -1.25346,-5.40409 -7.93195,-4.42389 -4.36258,0.6403 -7.93196,0.12929 -7.93196,-1.13535 0,-1.26473 4.90628,-8.79787 10.90287,-16.74027 l 10.9029,-14.44079 10.25663,9.26625 c 5.64113,5.09644 10.84809,9.26624 11.57098,9.26624 0.72292,0 1.31438,-8.92345 1.31438,-19.8299 l 0,-19.82989 -7.93196,0 c -7.75568,0 -7.93196,-0.29378 -7.93196,-13.21993 0,-12.92616 0.17636,-13.21993 7.93196,-13.21993 l 7.93196,0 0,-117.65739 0,-117.65739 -23.34531,0 -23.34529,0 -16.46369,14.89878 -16.46369,14.89878 -14.39272,-7.28205 c -11.02917,-5.58026 -14.39273,-8.67747 -14.39273,-13.25305 0,-8.12651 -7.38884,-14.38364 -10.73697,-9.09244 -1.32109,2.08778 -2.4202,5.77352 -2.44247,8.19054 -0.0283,3.0677 -3.28753,4.94316 -10.7946,6.21147 -5.91476,0.99929 -11.03725,1.40132 -11.38332,0.89339 -7.12286,-10.45417 -27.079103,-31.32934 -29.950233,-31.32934 -5.00909,0 -35.16388,26.2163 -35.16388,30.57115 0,1.83605 5.8319,10.31773 12.95979,18.8482 l 12.95978,15.50993 -3.31235,13.04537 c -2.89184,11.38925 -4.39208,13.32516 -11.81741,15.24926 -9.96091,2.58113 -9.55802,7.98136 0.73797,9.89156 5.54306,1.02839 8.59403,4.499 13.73776,15.62725 l 6.61221,14.30526 -17.91331,16.39694 -17.91332,16.39694 50.888193,76.42502 c 38.8506,58.34672 50.88817,78.37393 50.88817,84.66398 0,6.87939 1.19983,8.4744 7.27097,9.66578 3.99903,0.78473 8.29759,0.43221 9.55237,-0.78339 3.62914,-3.51589 -0.68355,-7.95895 -7.72542,-7.95895 -9.52862,0 -8.01507,-3.31191 7.61665,-16.6665 l 14.07058,-12.02089 11.04729,14.14488 c 6.07601,7.77969 11.04729,15.21807 11.04729,16.52975 0,1.31168 -3.56938,1.86103 -7.93196,1.22073 -5.89691,-0.86548 -7.93196,-0.11475 -7.93196,2.92629 0,4.5766 6.72817,6.08976 29.74484,6.68952 13.83736,0.36056 15.20292,-0.10576 15.20292,-5.19192 z m 29.08385,-1.0219 c 0,-4.8473 -1.41012,-6.60996 -5.28797,-6.60996 -5.15876,0 -7.47024,7.51233 -3.52531,11.45726 4.01376,4.01378 8.81328,1.37403 8.81328,-4.8473 z m 214.16288,0 c 0,-4.8473 -1.41012,-6.60996 -5.28798,-6.60996 -3.87785,0 -5.28797,1.76266 -5.28797,6.60996 0,4.8473 1.41012,6.60997 5.28797,6.60997 3.87786,0 5.28798,-1.76267 5.28798,-6.60997 z m 70.87194,1.98299 c -0.54141,-2.77291 -3.53266,-4.78744 -7.46485,-5.02743 -3.60877,-0.22025 -7.52327,-0.51769 -8.69892,-0.661 -1.17563,-0.1433 3.43432,-7.50154 10.24433,-16.35168 l 12.38187,-16.09117 11.33278,11.1223 11.33276,11.12227 50.47153,-75.63847 c 27.75932,-41.60116 50.4715,-77.02716 50.4715,-78.72444 0,-1.69728 -7.22987,-9.62862 -16.06637,-17.62519 -10.58311,-9.57717 -15.60538,-15.98012 -14.71571,-18.76116 6.83872,-21.37656 9.35493,-25.41558 16.64696,-26.72178 9.54088,-1.70903 10.00482,-8.94006 0.64336,-10.02705 -5.9509,-0.69097 -7.34452,-2.72786 -10.3024,-15.05767 l -3.42057,-14.25861 13.83917,-15.97476 c 7.61154,-8.78612 13.4374,-17.04189 12.94636,-18.34616 -1.64297,-4.36395 -33.34447,-29.42525 -37.22172,-29.42525 -2.10474,0 -9.55259,7.13877 -16.55079,15.86392 -13.24037,16.50772 -13.991,16.8995 -27.2848,14.24074 -6.28621,-1.25724 -8.29797,-3.19448 -8.92346,-8.59296 -1.1432,-9.86675 -8.53198,-9.08515 -9.52208,1.00727 -0.65409,6.66722 -3.13124,9.20672 -15.08632,15.466 l -14.30372,7.48896 -7.38756,-5.32109 c -4.06318,-2.9266 -11.48783,-9.58885 -16.49922,-14.80501 l -9.1116,-9.48391 -24.59922,0 -24.5992,0 0,117.48987 0,117.48986 8.59296,0.82852 c 8.29883,0.80015 8.59295,1.23575 8.59295,12.72646 0,11.49071 -0.29412,11.92631 -8.59295,12.72645 l -8.59296,0.82852 0,21.53488 0,21.53487 11.63203,-11.416 11.63204,-11.41596 12.16217,15.49244 c 6.68921,8.52085 12.16295,16.40746 12.16385,17.52582 9.2e-4,1.11835 -3.10053,1.25475 -6.89208,0.30313 -6.81612,-1.71071 -12.8397,2.79546 -9.96167,7.45221 0.71697,1.16007 12.62363,2.10924 26.45927,2.10924 22.53932,0 25.06173,-0.48123 24.25228,-4.62698 z m 29.12242,-2.67101 c 0.6417,-4.49779 -0.47103,-5.92194 -4.62697,-5.92194 -4.11558,0 -5.47187,1.68644 -5.47187,6.80382 0,8.67846 8.84506,7.90607 10.09884,-0.88188 z M 439.5077,298.68676 c 0.79507,-5.45323 2.13843,-20.0282 2.98519,-32.38884 0.84676,-12.36063 2.19012,-26.93561 2.98519,-32.38883 1.15204,-7.90148 0.59302,-9.91495 -2.75278,-9.91495 -3.5059,0 -4.19839,-3.70685 -4.19839,-22.47388 0,-21.78141 0.1901,-22.47388 6.16929,-22.47388 8.52913,0 9.68146,-1.89264 6.5761,-10.80072 -2.40653,-6.9034 -3.87336,-7.70718 -14.06487,-7.70718 -10.20092,0 -11.94302,-0.95744 -16.83809,-9.25396 l -5.45997,-9.25395 -43.45378,0 -43.45377,0 -5.45997,9.25395 c -4.92968,8.3552 -6.59423,9.25396 -17.13869,9.25396 -9.87626,0 -11.9248,0.91815 -13.27299,5.94896 -2.75535,10.28154 -1.85891,12.55894 4.94349,12.55894 6.5322,0 6.60996,0.2644 6.60996,22.47388 0,15.14693 -0.98922,22.47388 -3.03424,22.47388 -2.98738,0 -2.233,24.17639 2.12447,68.08265 l 1.64001,16.52491 66.82413,0 66.82411,0 1.4456,-9.91494 z M 299.56455,147.31854 c 10.56498,0 12.38005,-0.89885 16.01701,-7.93195 l 4.10177,-7.93196 51.42194,0 51.42193,0 4.10177,7.93196 c 3.71105,7.17637 5.33615,7.93195 17.05995,7.93195 10.11783,0 13.22319,1.01421 14.1673,4.62698 0.66504,2.54484 1.34719,-3.40413 1.51588,-13.21993 l 0.3067,-17.84691 -88.57353,0 -88.57354,0 0.16763,19.1689 c 0.124,14.17493 0.79055,17.61905 2.55877,13.21993 1.98384,-4.93551 4.42106,-5.94897 14.30645,-5.94897 z"

                    id="path4738"
                    style={{fill: this.strokeColor}}
                    ></path>
                </g>
            </g>
        </svg>
      );
    }
}

interface IQuadDamageTransferDiagramSVGProps {
    bgColor?: string;
    strokeColor?: string;

    yLoc?: number;
    xLoc?: number;

    width?: number;
}

interface IQuadDamageTransferDiagramSVGState {
}