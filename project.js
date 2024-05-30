let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう
const programList = data.list.g1;

// 各番組の情報をコンソールに出力
console.log("検索結果の1件目");
console.log("開始時刻: " + programList[0].start_time);
console.log("終了時刻: " + programList[0].end_time);
console.log("チャンネル: " + programList[0].service.name);
console.log("タイトル: " + programList[0].title);
console.log("サブタイトル: " + programList[0].subtitle);
console.log("番組説明: " + programList[0].content);
console.log("出演者: " + programList[0].act + "記載なし");

console.log("検索結果の2件目");
console.log("開始時刻: " + programList[1].start_time);
console.log("終了時刻: " + programList[1].end_time);
console.log("チャンネル: " + programList[1].service.name);
console.log("タイトル: " + programList[1].title);
console.log("サブタイトル: " + programList[1].subtitle);
console.log("番組説明: " + programList[1].content);
console.log("出演者: " + programList[1].act + "記載なし");

// 番組情報を表示するdiv要素を取得
let resultDiv = document.querySelector('div#result');

// HTMLコンテンツを格納する変数を初期化
let htmlContent = '';


// 検索結果をdiv#resultに表示
htmlContent += `
  <li>NHK の番組表（検索結果は2件)</li>
  <dl>
    <dt><li>検索結果の1件目</li></dt>
    <dd><li>開始時刻: ${programList[0].start_time}</li></dd>
    <dd><li>終了時刻: ${programList[0].end_time}</li></dd>
    <dd><li>チャンネル: ${programList[0].service.name}</li></dd>
    <dd><li>タイトル: ${programList[0].title}</li></dd>
    <dd><li>サブタイトル: ${programList[0].subtitle}</li></dd>
    <dd><li>番組説明: ${programList[0].content}</li></dd>
    <dd><li>出演者: ${programList[0].act} 記載なし</li></dd>

    <dt><li>検索結果の2件目</li></dt>
    <dd><li>開始時刻: ${programList[1].start_time}</li></dd>
    <dd><li>終了時刻: ${programList[1].end_time}</li></dd>
    <dd><li>チャンネル: ${programList[1].service.name}</li></dd>
    <dd><li>タイトル: ${programList[1].title}</li></dd>
    <dd><li>サブタイトル: ${programList[1].subtitle}</li></dd>
    <dd><li>番組説明: ${programList[1].content}</li></dd>
    <dd><li>出演者: ${programList[1].act} 記載なし</li></dd>
  </dl>`;

// 結果をHTMLに挿入
resultDiv.innerHTML = htmlContent;

