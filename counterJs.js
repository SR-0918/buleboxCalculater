//コピペ本体
$(function(){
    
    var arySpinnerCtrl = [];
    
    //長押し押下時
    $('.btnspinner').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl['interval']) return false;
        var target = $(this).data('target');
        arySpinnerCtrl['target'] = target;
        arySpinnerCtrl['timestamp'] = e.timeStamp;
        arySpinnerCtrl['cal'] = Number($(this).data('cal'));
        //クリックは単一の処理に留める
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl = [];
            return false;
        }
    });
    
    //長押し解除時 画面スクロールも解除に含む
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl['interval']){
            clearInterval(arySpinnerCtrl['interval']);
            arySpinnerCtrl = [];
        }
    });
    
    //変動計算関数
    function spinnerCal(){
        var target = $(arySpinnerCtrl['target']);
        var num = Number(target.val());
        num = num + arySpinnerCtrl['cal'];
        if(num > Number(target.data('max'))){
            target.val(Number(target.data('max')));
        }else if(Number(target.data('min')) > num){
            target.val(Number(target.data('min')));
        }else{
            target.val(num);
        }
    }
    
});
/*ここから適用されるやつ*/
$(function(){
    
    var arySpinnerCtrl_1 = [];
    
    $('.btnspinner_1').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl_1['interval']) return false;
        var target_1 = $(this).data('target_1');
        arySpinnerCtrl_1['target_1'] = target_1;
        arySpinnerCtrl_1['timestamp'] = e.timeStamp;
        arySpinnerCtrl_1['cal_1'] = Number($(this).data('cal_1'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl_1 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl_1['interval']){
            clearInterval(arySpinnerCtrl_1['interval']);
            arySpinnerCtrl_1 = [];
        }
    });
    
    
    function spinnerCal(){
        var target_1 = $(arySpinnerCtrl_1['target_1']);
        var num_1 = Number(target_1.val());
        num_1 = num_1 + arySpinnerCtrl_1['cal_1'];
        if(num_1 > Number(target_1.data('max_1'))){
            target_1.val(Number(target_1.data('max_1')));
        }else if(Number(target_1.data('min_1')) > num_1){
            target_1.val(Number(target_1.data('min_1')));
        }else{
            target_1.val(num_1);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl_2 = [];
    
    $('.btnspinner_2').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl_2['interval']) return false;
        var target_2 = $(this).data('target_2');
        arySpinnerCtrl_2['target_2'] = target_2;
        arySpinnerCtrl_2['timestamp'] = e.timeStamp;
        arySpinnerCtrl_2['cal_2'] = Number($(this).data('cal_2'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl_2 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl_2['interval']){
            clearInterval(arySpinnerCtrl_2['interval']);
            arySpinnerCtrl_2 = [];
        }
    });
    
    
    function spinnerCal(){
        var target_2 = $(arySpinnerCtrl_2['target_2']);
        var num_2 = Number(target_2.val());
        num_2 = num_2 + arySpinnerCtrl_2['cal_2'];
        if(num_2 > Number(target_2.data('max_2'))){
            target_2.val(Number(target_2.data('max_2')));
        }else if(Number(target_2.data('min_2')) > num_2){
            target_2.val(Number(target_2.data('min_2')));
        }else{
            target_2.val(num_2);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl_3 = [];
    
    $('.btnspinner_3').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl_3['interval']) return false;
        var target_3 = $(this).data('target_3');
        arySpinnerCtrl_3['target_3'] = target_3;
        arySpinnerCtrl_3['timestamp'] = e.timeStamp;
        arySpinnerCtrl_3['cal_3'] = Number($(this).data('cal_3'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl_3 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl_3['interval']){
            clearInterval(arySpinnerCtrl_3['interval']);
            arySpinnerCtrl_3 = [];
        }
    });
    
    
    function spinnerCal(){
        var target_3 = $(arySpinnerCtrl_3['target_3']);
        var num_3 = Number(target_3.val());
        num_3 = num_3 + arySpinnerCtrl_3['cal_3'];
        if(num_3 > Number(target_3.data('max_3'))){
            target_3.val(Number(target_3.data('max_3')));
        }else if(Number(target_3.data('min_3')) > num_3){
            target_3.val(Number(target_3.data('min_3')));
        }else{
            target_3.val(num_3);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl_4 = [];
    
    $('.btnspinner_4').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl_4['interval']) return false;
        var target_4 = $(this).data('target_4');
        arySpinnerCtrl_4['target_4'] = target_4;
        arySpinnerCtrl_4['timestamp'] = e.timeStamp;
        arySpinnerCtrl_4['cal_4'] = Number($(this).data('cal_4'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl_4 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl_4['interval']){
            clearInterval(arySpinnerCtrl_4['interval']);
            arySpinnerCtrl_4 = [];
        }
    });
    
    
    function spinnerCal(){
        var target_4 = $(arySpinnerCtrl_4['target_4']);
        var num_4 = Number(target_4.val());
        num_4 = num_4 + arySpinnerCtrl_4['cal_4'];
        if(num_4 > Number(target_4.data('max_4'))){
            target_4.val(Number(target_4.data('max_4')));
        }else if(Number(target_4.data('min_4')) > num_4){
            target_4.val(Number(target_4.data('min_4')));
        }else{
            target_4.val(num_4);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl_5 = [];
    
    $('.btnspinner_5').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl_5['interval']) return false;
        var target_5 = $(this).data('target_5');
        arySpinnerCtrl_5['target_5'] = target_5;
        arySpinnerCtrl_5['timestamp'] = e.timeStamp;
        arySpinnerCtrl_5['cal_5'] = Number($(this).data('cal_5'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl_5 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl_5['interval']){
            clearInterval(arySpinnerCtrl_5['interval']);
            arySpinnerCtrl_5 = [];
        }
    });
    
    
    function spinnerCal(){
        var target_5 = $(arySpinnerCtrl_5['target_5']);
        var num_5 = Number(target_5.val());
        num_5 = num_5 + arySpinnerCtrl_5['cal_5'];
        if(num_5 > Number(target_5.data('max_5'))){
            target_5.val(Number(target_5.data('max_5')));
        }else if(Number(target_5.data('min_5')) > num_5){
            target_5.val(Number(target_5.data('min_5')));
        }else{
            target_5.val(num_5);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl_6 = [];
    
    $('.btnspinner_6').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl_6['interval']) return false;
        var target_6 = $(this).data('target_6');
        arySpinnerCtrl_6['target_6'] = target_6;
        arySpinnerCtrl_6['timestamp'] = e.timeStamp;
        arySpinnerCtrl_6['cal_6'] = Number($(this).data('cal_6'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl_6 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl_6['interval']){
            clearInterval(arySpinnerCtrl_6['interval']);
            arySpinnerCtrl_6 = [];
        }
    });
    
    
    function spinnerCal(){
        var target_6 = $(arySpinnerCtrl_6['target_6']);
        var num_6 = Number(target_6.val());
        num_6 = num_6 + arySpinnerCtrl_6['cal_6'];
        if(num_6 > Number(target_6.data('max_6'))){
            target_6.val(Number(target_6.data('max_6')));
        }else if(Number(target_6.data('min_6')) > num_6){
            target_6.val(Number(target_6.data('min_6')));
        }else{
            target_6.val(num_6);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl_7 = [];
    
    $('.btnspinner_7').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl_7['interval']) return false;
        var target_7 = $(this).data('target_7');
        arySpinnerCtrl_7['target_7'] = target_7;
        arySpinnerCtrl_7['timestamp'] = e.timeStamp;
        arySpinnerCtrl_7['cal_7'] = Number($(this).data('cal_7'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl_7 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl_7['interval']){
            clearInterval(arySpinnerCtrl_7['interval']);
            arySpinnerCtrl_7 = [];
        }
    });
    
    
    function spinnerCal(){
        var target_7 = $(arySpinnerCtrl_7['target_7']);
        var num_7 = Number(target_7.val());
        num_7 = num_7 + arySpinnerCtrl_7['cal_7'];
        if(num_7 > Number(target_7.data('max_7'))){
            target_7.val(Number(target_7.data('max_7')));
        }else if(Number(target_7.data('min_7')) > num_7){
            target_7.val(Number(target_7.data('min_7')));
        }else{
            target_7.val(num_7);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl_8 = [];
    
    $('.btnspinner_8').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl_8['interval']) return false;
        var target_8 = $(this).data('target_8');
        arySpinnerCtrl_8['target_8'] = target_8;
        arySpinnerCtrl_8['timestamp'] = e.timeStamp;
        arySpinnerCtrl_8['cal_8'] = Number($(this).data('cal_8'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl_8 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl_8['interval']){
            clearInterval(arySpinnerCtrl_8['interval']);
            arySpinnerCtrl_8 = [];
        }
    });
    
    
    function spinnerCal(){
        var target_8 = $(arySpinnerCtrl_8['target_8']);
        var num_8 = Number(target_8.val());
        num_8 = num_8 + arySpinnerCtrl_8['cal_8'];
        if(num_8 > Number(target_8.data('max_8'))){
            target_8.val(Number(target_8.data('max_8')));
        }else if(Number(target_8.data('min_8')) > num_8){
            target_8.val(Number(target_8.data('min_8')));
        }else{
            target_8.val(num_8);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl_9 = [];
    
    $('.btnspinner_9').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl_9['interval']) return false;
        var target_9 = $(this).data('target_9');
        arySpinnerCtrl_9['target_9'] = target_9;
        arySpinnerCtrl_9['timestamp'] = e.timeStamp;
        arySpinnerCtrl_9['cal_9'] = Number($(this).data('cal_9'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl_9 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl_9['interval']){
            clearInterval(arySpinnerCtrl_9['interval']);
            arySpinnerCtrl_9 = [];
        }
    });
    
    
    function spinnerCal(){
        var target_9 = $(arySpinnerCtrl_9['target_9']);
        var num_9 = Number(target_9.val());
        num_9 = num_9 + arySpinnerCtrl_9['cal_9'];
        if(num_9 > Number(target_9.data('max_9'))){
            target_9.val(Number(target_9.data('max_9')));
        }else if(Number(target_9.data('min_9')) > num_9){
            target_9.val(Number(target_9.data('min_9')));
        }else{
            target_9.val(num_9);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl_10 = [];
    
    $('.btnspinner_10').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl_10['interval']) return false;
        var target_10 = $(this).data('target_10');
        arySpinnerCtrl_10['target_10'] = target_10;
        arySpinnerCtrl_10['timestamp'] = e.timeStamp;
        arySpinnerCtrl_10['cal_10'] = Number($(this).data('cal_10'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl_10 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl_10['interval']){
            clearInterval(arySpinnerCtrl_10['interval']);
            arySpinnerCtrl_10 = [];
        }
    });
    
    
    function spinnerCal(){
        var target_10 = $(arySpinnerCtrl_10['target_10']);
        var num_10 = Number(target_10.val());
        num_10 = num_10 + arySpinnerCtrl_10['cal_10'];
        if(num_10 > Number(target_10.data('max_10'))){
            target_10.val(Number(target_10.data('max_10')));
        }else if(Number(target_10.data('min_10')) > num_10){
            target_10.val(Number(target_10.data('min_10')));
        }else{
            target_10.val(num_10);
        }
    }
    
});

//グランデの青箱カウント
$(function(){
    
    var arySpinnerCtrl2_1 = [];
    
    $('.btnspinner2_1').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl2_1['interval']) return false;
        var target2_1 = $(this).data('target2_1');
        arySpinnerCtrl2_1['target2_1'] = target2_1;
        arySpinnerCtrl2_1['timestamp'] = e.timeStamp;
        arySpinnerCtrl2_1['cal2_1'] = Number($(this).data('cal2_1'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl2_1 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl2_1['interval']){
            clearInterval(arySpinnerCtrl2_1['interval']);
            arySpinnerCtrl2_1 = [];
        }
    });
    
    
    function spinnerCal(){
        var target2_1 = $(arySpinnerCtrl2_1['target2_1']);
        var num2_1 = Number(target2_1.val());
        num2_1 = num2_1 + arySpinnerCtrl2_1['cal2_1'];
        if(num2_1 > Number(target2_1.data('max2_1'))){
            target2_1.val(Number(target2_1.data('max2_1')));
        }else if(Number(target2_1.data('min2_1')) > num2_1){
            target2_1.val(Number(target2_1.data('min2_1')));
        }else{
            target2_1.val(num2_1);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl2_2 = [];
    
    $('.btnspinner2_2').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl2_2['interval']) return false;
        var target2_2 = $(this).data('target2_2');
        arySpinnerCtrl2_2['target2_2'] = target2_2;
        arySpinnerCtrl2_2['timestamp'] = e.timeStamp;
        arySpinnerCtrl2_2['cal2_2'] = Number($(this).data('cal2_2'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl2_2 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl2_2['interval']){
            clearInterval(arySpinnerCtrl2_2['interval']);
            arySpinnerCtrl2_2 = [];
        }
    });
    
    
    function spinnerCal(){
        var target2_2 = $(arySpinnerCtrl2_2['target2_2']);
        var num2_2 = Number(target2_2.val());
        num2_2 = num2_2 + arySpinnerCtrl2_2['cal2_2'];
        if(num2_2 > Number(target2_2.data('max2_2'))){
            target2_2.val(Number(target2_2.data('max2_2')));
        }else if(Number(target2_2.data('min2_2')) > num2_2){
            target2_2.val(Number(target2_2.data('min2_2')));
        }else{
            target2_2.val(num2_2);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl2_3 = [];
    
    $('.btnspinner2_3').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl2_3['interval']) return false;
        var target2_3 = $(this).data('target2_3');
        arySpinnerCtrl2_3['target2_3'] = target2_3;
        arySpinnerCtrl2_3['timestamp'] = e.timeStamp;
        arySpinnerCtrl2_3['cal2_3'] = Number($(this).data('cal2_3'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl2_3 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl2_3['interval']){
            clearInterval(arySpinnerCtrl2_3['interval']);
            arySpinnerCtrl2_3 = [];
        }
    });
    
    
    function spinnerCal(){
        var target2_3 = $(arySpinnerCtrl2_3['target2_3']);
        var num2_3 = Number(target2_3.val());
        num2_3 = num2_3 + arySpinnerCtrl2_3['cal2_3'];
        if(num2_3 > Number(target2_3.data('max2_3'))){
            target2_3.val(Number(target2_3.data('max2_3')));
        }else if(Number(target2_3.data('min2_3')) > num2_3){
            target2_3.val(Number(target2_3.data('min2_3')));
        }else{
            target2_3.val(num2_3);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl2_4 = [];
    
    $('.btnspinner2_4').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl2_4['interval']) return false;
        var target2_4 = $(this).data('target2_4');
        arySpinnerCtrl2_4['target2_4'] = target2_4;
        arySpinnerCtrl2_4['timestamp'] = e.timeStamp;
        arySpinnerCtrl2_4['cal2_4'] = Number($(this).data('cal2_4'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl2_4 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl2_4['interval']){
            clearInterval(arySpinnerCtrl2_4['interval']);
            arySpinnerCtrl2_4 = [];
        }
    });
    
    
    function spinnerCal(){
        var target2_4 = $(arySpinnerCtrl2_4['target2_4']);
        var num2_4 = Number(target2_4.val());
        num2_4 = num2_4 + arySpinnerCtrl2_4['cal2_4'];
        if(num2_4 > Number(target2_4.data('max2_4'))){
            target2_4.val(Number(target2_4.data('max2_4')));
        }else if(Number(target2_4.data('min2_4')) > num2_4){
            target2_4.val(Number(target2_4.data('min2_4')));
        }else{
            target2_4.val(num2_4);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl2_5 = [];
    
    $('.btnspinner2_5').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl2_5['interval']) return false;
        var target2_5 = $(this).data('target2_5');
        arySpinnerCtrl2_5['target2_5'] = target2_5;
        arySpinnerCtrl2_5['timestamp'] = e.timeStamp;
        arySpinnerCtrl2_5['cal2_5'] = Number($(this).data('cal2_5'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl2_5 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl2_5['interval']){
            clearInterval(arySpinnerCtrl2_5['interval']);
            arySpinnerCtrl2_5 = [];
        }
    });
    
    
    function spinnerCal(){
        var target2_5 = $(arySpinnerCtrl2_5['target2_5']);
        var num2_5 = Number(target2_5.val());
        num2_5 = num2_5 + arySpinnerCtrl2_5['cal2_5'];
        if(num2_5 > Number(target2_5.data('max2_5'))){
            target2_5.val(Number(target2_5.data('max2_5')));
        }else if(Number(target2_5.data('min2_5')) > num2_5){
            target2_5.val(Number(target2_5.data('min2_5')));
        }else{
            target2_5.val(num2_5);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl2_6 = [];
    
    $('.btnspinner2_6').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl2_6['interval']) return false;
        var target2_6 = $(this).data('target2_6');
        arySpinnerCtrl2_6['target2_6'] = target2_6;
        arySpinnerCtrl2_6['timestamp'] = e.timeStamp;
        arySpinnerCtrl2_6['cal2_6'] = Number($(this).data('cal2_6'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl2_6 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl2_6['interval']){
            clearInterval(arySpinnerCtrl2_6['interval']);
            arySpinnerCtrl2_6 = [];
        }
    });
    
    
    function spinnerCal(){
        var target2_6 = $(arySpinnerCtrl2_6['target2_6']);
        var num2_6 = Number(target2_6.val());
        num2_6 = num2_6 + arySpinnerCtrl2_6['cal2_6'];
        if(num2_6 > Number(target2_6.data('max2_6'))){
            target2_6.val(Number(target2_6.data('max2_6')));
        }else if(Number(target2_6.data('min2_6')) > num2_6){
            target2_6.val(Number(target2_6.data('min2_6')));
        }else{
            target2_6.val(num2_6);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl2_7 = [];
    
    $('.btnspinner2_7').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl2_7['interval']) return false;
        var target2_7 = $(this).data('target2_7');
        arySpinnerCtrl2_7['target2_7'] = target2_7;
        arySpinnerCtrl2_7['timestamp'] = e.timeStamp;
        arySpinnerCtrl2_7['cal2_7'] = Number($(this).data('cal2_7'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl2_7 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl2_7['interval']){
            clearInterval(arySpinnerCtrl2_7['interval']);
            arySpinnerCtrl2_7 = [];
        }
    });
    
    
    function spinnerCal(){
        var target2_7 = $(arySpinnerCtrl2_7['target2_7']);
        var num2_7 = Number(target2_7.val());
        num2_7 = num2_7 + arySpinnerCtrl2_7['cal2_7'];
        if(num2_7 > Number(target2_7.data('max2_7'))){
            target2_7.val(Number(target2_7.data('max2_7')));
        }else if(Number(target2_7.data('min2_7')) > num2_7){
            target2_7.val(Number(target2_7.data('min2_7')));
        }else{
            target2_7.val(num2_7);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl2_8 = [];
    
    $('.btnspinner2_8').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl2_8['interval']) return false;
        var target2_8 = $(this).data('target2_8');
        arySpinnerCtrl2_8['target2_8'] = target2_8;
        arySpinnerCtrl2_8['timestamp'] = e.timeStamp;
        arySpinnerCtrl2_8['cal2_8'] = Number($(this).data('cal2_8'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl2_8 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl2_8['interval']){
            clearInterval(arySpinnerCtrl2_8['interval']);
            arySpinnerCtrl2_8 = [];
        }
    });
    
    
    function spinnerCal(){
        var target2_8 = $(arySpinnerCtrl2_8['target2_8']);
        var num2_8 = Number(target2_8.val());
        num2_8 = num2_8 + arySpinnerCtrl2_8['cal2_8'];
        if(num2_8 > Number(target2_8.data('max2_8'))){
            target2_8.val(Number(target2_8.data('max2_8')));
        }else if(Number(target2_8.data('min2_8')) > num2_8){
            target2_8.val(Number(target2_8.data('min2_8')));
        }else{
            target2_8.val(num2_8);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl2_9 = [];
    
    $('.btnspinner2_9').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl2_9['interval']) return false;
        var target2_9 = $(this).data('target2_9');
        arySpinnerCtrl2_9['target2_9'] = target2_9;
        arySpinnerCtrl2_9['timestamp'] = e.timeStamp;
        arySpinnerCtrl2_9['cal2_9'] = Number($(this).data('cal2_9'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl2_9 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl2_9['interval']){
            clearInterval(arySpinnerCtrl2_9['interval']);
            arySpinnerCtrl2_9 = [];
        }
    });
    
    
    function spinnerCal(){
        var target2_9 = $(arySpinnerCtrl2_9['target2_9']);
        var num2_9 = Number(target2_9.val());
        num2_9 = num2_9 + arySpinnerCtrl2_9['cal2_9'];
        if(num2_9 > Number(target2_9.data('max2_9'))){
            target2_9.val(Number(target2_9.data('max2_9')));
        }else if(Number(target2_9.data('min2_9')) > num2_9){
            target2_9.val(Number(target2_9.data('min2_9')));
        }else{
            target2_9.val(num2_9);
        }
    }
    
});

//つよばはの青箱カウント
$(function(){
    
    var arySpinnerCtrl3_1 = [];
    
    $('.btnspinner3_1').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl3_1['interval']) return false;
        var target3_1 = $(this).data('target3_1');
        arySpinnerCtrl3_1['target3_1'] = target3_1;
        arySpinnerCtrl3_1['timestamp'] = e.timeStamp;
        arySpinnerCtrl3_1['cal3_1'] = Number($(this).data('cal3_1'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl3_1 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl3_1['interval']){
            clearInterval(arySpinnerCtrl3_1['interval']);
            arySpinnerCtrl3_1 = [];
        }
    });
    
    
    function spinnerCal(){
        var target3_1 = $(arySpinnerCtrl3_1['target3_1']);
        var num3_1 = Number(target3_1.val());
        num3_1 = num3_1 + arySpinnerCtrl3_1['cal3_1'];
        if(num3_1 > Number(target3_1.data('max3_1'))){
            target3_1.val(Number(target3_1.data('max3_1')));
        }else if(Number(target3_1.data('min3_1')) > num3_1){
            target3_1.val(Number(target3_1.data('min3_1')));
        }else{
            target3_1.val(num3_1);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl3_2 = [];
    
    $('.btnspinner3_2').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl3_2['interval']) return false;
        var target3_2 = $(this).data('target3_2');
        arySpinnerCtrl3_2['target3_2'] = target3_2;
        arySpinnerCtrl3_2['timestamp'] = e.timeStamp;
        arySpinnerCtrl3_2['cal3_2'] = Number($(this).data('cal3_2'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl3_2 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl3_2['interval']){
            clearInterval(arySpinnerCtrl3_2['interval']);
            arySpinnerCtrl3_2 = [];
        }
    });
    
    
    function spinnerCal(){
        var target3_2 = $(arySpinnerCtrl3_2['target3_2']);
        var num3_2 = Number(target3_2.val());
        num3_2 = num3_2 + arySpinnerCtrl3_2['cal3_2'];
        if(num3_2 > Number(target3_2.data('max3_2'))){
            target3_2.val(Number(target3_2.data('max3_2')));
        }else if(Number(target3_2.data('min3_2')) > num3_2){
            target3_2.val(Number(target3_2.data('min3_2')));
        }else{
            target3_2.val(num3_2);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl3_3 = [];
    
    $('.btnspinner3_3').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl3_3['interval']) return false;
        var target3_3 = $(this).data('target3_3');
        arySpinnerCtrl3_3['target3_3'] = target3_3;
        arySpinnerCtrl3_3['timestamp'] = e.timeStamp;
        arySpinnerCtrl3_3['cal3_3'] = Number($(this).data('cal3_3'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl3_3 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl3_3['interval']){
            clearInterval(arySpinnerCtrl3_3['interval']);
            arySpinnerCtrl3_3 = [];
        }
    });
    
    
    function spinnerCal(){
        var target3_3 = $(arySpinnerCtrl3_3['target3_3']);
        var num3_3 = Number(target3_3.val());
        num3_3 = num3_3 + arySpinnerCtrl3_3['cal3_3'];
        if(num3_3 > Number(target3_3.data('max3_3'))){
            target3_3.val(Number(target3_3.data('max3_3')));
        }else if(Number(target3_3.data('min3_3')) > num3_3){
            target3_3.val(Number(target3_3.data('min3_3')));
        }else{
            target3_3.val(num3_3);
        }
    }
    
});

$(function(){
    
    var arySpinnerCtrl3_4 = [];
    
    $('.btnspinner3_4').on('touchstart mousedown click', function(e){
        if(arySpinnerCtrl3_4['interval']) return false;
        var target3_4 = $(this).data('target3_4');
        arySpinnerCtrl3_4['target3_4'] = target3_4;
        arySpinnerCtrl3_4['timestamp'] = e.timeStamp;
        arySpinnerCtrl3_4['cal3_4'] = Number($(this).data('cal3_4'));
    
        if(e.type == 'click'){
            spinnerCal();
            arySpinnerCtrl3_4 = [];
            return false;
        }
    });
    
    
    $(document).on('touchend mouseup scroll', function(e){
        if(arySpinnerCtrl3_4['interval']){
            clearInterval(arySpinnerCtrl3_4['interval']);
            arySpinnerCtrl3_4 = [];
        }
    });
    
    
    function spinnerCal(){
        var target3_4 = $(arySpinnerCtrl3_4['target3_4']);
        var num3_4 = Number(target3_4.val());
        num3_4 = num3_4 + arySpinnerCtrl3_4['cal3_4'];
        if(num3_4 > Number(target3_4.data('max3_4'))){
            target3_4.val(Number(target3_4.data('max3_4')));
        }else if(Number(target3_4.data('min3_4')) > num3_4){
            target3_4.val(Number(target3_4.data('min3_4')));
        }else{
            target3_4.val(num3_4);
        }
    }
    
});