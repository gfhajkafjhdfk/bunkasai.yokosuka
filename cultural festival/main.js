$(function(){
  // ローダー終了
  function end_loader() {
    $('#loader03').fadeOut(800);
  }
  // ローディング表示
  function show_load() {
    $('#loader03 .looping-rhombuses-spinner').fadeIn(400);
  }
  // ローディング非表示
  function hide_load() {
    $('#loader03 .looping-rhombuses-spinner').fadeOut(400);
  }
  // テキスト表示
  function show_txt() {
    $('#loader03 .txt').fadeIn(400);
  }
 
  // タイマー処理
  $(window).on('load', function () {
  // 処理①
  setTimeout(function () {
    show_load();
  }, 800)
  // 処理②
  setTimeout(function () {
    hide_load();
  }, 3500)
  // 処理③
  setTimeout(function () {
    show_txt();
  }, 4000)
  // 処理④
  setTimeout(function () {
    end_loader();
  }, 5000)
  })
})
