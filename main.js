//セクション遷移
$(function () {
    $('.section').hide();

    $('.secList').on('click', function () {
        // クリックした要素の ID と違うクラス名のセクションを非表示
        $('.section').not($('.' + $(this).attr('id'))).hide();
        // クリックした要素の ID と同じクラスのセクションを表示
        $('.' + $(this).attr('id')).show();

        // toggle にすると、同じボタンを 2 回押すと非表示になる
        // $('.'+$(this).attr('id')).toggle();
    });
});

//選択肢をクリックしたときに呼び出す
function onClickPlayerIcon(self) {
    //すでにselectのクラス値が与えられているHTMLエレメントのselectedを消去する
    $(".selected").each(function () {
        $(this).toggleClass("selected");
    });
    //クリックされたHTMLエレメントにselectedのクラス値を与える
    $(self).toggleClass("selected")
}

$("#test1").on("click", function () {
    // document.getElementById("#test1").addEventListener("click", function () {
    // $('.waiting').children('img').attr('src', '/ジャンケン用画像/kicker_1.JPG');
    $("#enemy").remove();
    $("#test").append('<img id="enemy" src="/ジャンケン用画像/kicker_0.JPG" width="400">');
});


//乱数で0,1,2のどれかを作成する
const evalue1 = Math.floor(Math.random() * 3.0);
//自分の手として選択されている画像のファイル名を取得する
const pfilename1 = $(".selected").attr("src")
//画像のファイル名から正規表現を用いて、数字の部分だけを抽出する
const pvalue1 = pfilename1.substr(-1);
//数字の引き算によって勝敗を判別する
const result1 = (pvalue1 + 3 - evalue1) % 3;
//判別結果から画像パスを生成
$("#enemyPanel1").append("<img id = 'enemy1' src = 'janken" + result1 + ".png'/>");


//繰り返し
const evalue2 = Math.floor(Math.random() * 3.0);
const pfilename2 = $(".selected").attr("src")
const pvalue2 = pfilename2.substr(-1);
const result2 = (pvalue2 + 3 - evalue2) % 3;
$("#enemyPanel2").append("<img id = 'enemy2' src = 'janken" + result2 + ".png'/>");

//繰り返し
const evalue3 = Math.floor(Math.random() * 3.0);
const pfilename3 = $(".selected").attr("src")
const pvalue3 = pfilename3.substr(-1);
const result3 = (pvalue3 + 3 - evalue3) % 3;
$("#enemyPanel3").append("<img id = 'enemy3' src = 'janken" + result3 + ".png'/>");

//繰り返し
const evalue4 = Math.floor(Math.random() * 3.0);
const pfilename4 = $(".selected").attr("src")
const pvalue4 = pfilename4.substr(-1);
const result4 = (pvalue4 + 3 - evalue4) % 3;
$("#enemyPanel4").append("<img id = 'enemy4' src = 'janken" + result4 + ".png'/>");

//繰り返し
const evalue5 = Math.floor(Math.random() * 3.0);
const pfilename5 = $(".selected").attr("src")
const pvalue5 = pfilename5.substr(-1);
const result5 = (pvalue5 + 3 - evalue5) % 3;
$("#enemyPanel5").append("<img id = 'enemy5' src = 'janken" + result5 + ".png'/>");

//繰り返し
const evalue6 = Math.floor(Math.random() * 3.0);
const pfilename6 = $(".selected").attr("src")
const pvalue6 = pfilename6.substr(-1);
const result6 = (pvalue6 + 3 - evalue6) % 3;
$("#enemyPanel6").append("<img id = 'enemy6' src = 'janken" + result6 + ".png'/>");
