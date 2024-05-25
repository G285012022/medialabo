//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!



// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42');
let p = document.createElement('p');
p.textContent ='写真表と都市の緯度軽度のページです';
h2.insertAdjacentElement('afterend', p);
p.style.textEmphasis = 'sesame green';





// 練習4-3 写真表作成プログラム
let phototable = document.querySelector('div#phototable');

let imgtaro = document.createElement('img');        //img要素を作成
imgtaro.setAttribute('src', 'taro.png');            //img要素のsrc属性を設定
let p1 = document.createElement('p');               //p要素を作成                               
p1.insertAdjacentElement('beforeend', imgtaro);     //p要素の中の最後に img 要素を追加
phototable.insertAdjacentElement('beforeend', p1);  //div#phototable の中の最後に p 要素を追加

let imgjiro = document.createElement('img');        //img要素を作成
imgjiro.setAttribute('src', 'jiro.png');            //img要素のsrc属性を設定
let p2 = document.createElement('p');               //p要素を作成                               
p2.insertAdjacentElement('beforeend', imggiro);     //p要素の中の最後に img 要素を追加
phototable.insertAdjacentElement('beforeend', p2);  //div#phototable の中の最後に p 要素を追加

let imghanako = document.createElement('img');      //img要素を作成
imghanako.setAttribute('src', 'hanako.png');        //img要素のsrc属性を設定
let p3 = document.createElement('p');               //p要素を作成                               
p3.insertAdjacentElement('beforeend', imghanako);   //p要素の中の最後に img 要素を追加
phototable.insertAdjacentElement('beforeend', p3);  //div#phototable の中の最後に p 要素を追加


// 練習4-4 箇条書き削除プログラム



let loc = document.querySelectorAll('ul#location > li');
for (let liElement of loc) {
    liElement.remove();
}



// 練習4-5 箇条書き追加プログラム




let kei = document.querySelector('ul#location');
for (let i = 0; i < data.length; i++) {
    let city = data[i];
    let listItem = document.createElement('li');
    listItem.textContent = city.name + ' ... 緯度: ' + city.lat + ', 経度: ' + city.lng;
    kei.appendChild(listItem);
}






