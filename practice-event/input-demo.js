// 1. イベントハンドラの登録

let b = document.querySelector('#print');
b.addEventListener('click', greeting);

// 2. イベントハンドラの定義
function greeting() {
	let i = document.querySelector('input[name="shimei"]');
	let shimei = i.value;        // ユーザが記入した文字列
	console.log('こんにちは! ' + shimei + ' さん');
}

