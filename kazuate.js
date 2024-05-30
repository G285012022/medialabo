let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;


// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b = document.querySelector('#print');     // 1. 回答ボタンのクリックイベントハンドラとして hantei を登録
b.addEventListener('click', hantei);










// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let spn = document.querySelector('span#kaisu');       //span#kaisu要素を検索
    spn.textContent = kaisu;                              // 要素のテキストを設定

  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="kazu"]');
  let kazu = parseInt(i.value);
  let yoso = kazu;

  let ans = document.querySelector('span#answer');
  ans.textContent = yoso;

  kaisu++;
  let resultMessage = kaisu + '回目の予想 ' + yoso + '<br>'; 
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  
  let res = document.querySelector('p#result'); // p#result 要素を検索
  let mes = '';
  if (yoso === kotae) {
    if (kaisu === 1) {
        mes = '正解です！おめでとう！';
    } else {
        mes = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    }
  }
  else {
    if (kaisu === 3) {
        mes = 'まちがい．残念でした答えは ' + kotae + ' です．';
    } else if (kaisu >= 4) {
        mes = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    } else {
        if (yoso < kotae) {
            mes = 'まちがい．答えはもっと大きいですよ';
        } else {
            mes = 'まちがい．答えはもっと小さいですよ';
        }
    }
}

console.log(mes);
res.textContent = mes;
}

