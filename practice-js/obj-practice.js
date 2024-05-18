//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

console.log(campus.address);//「八王子市館町」を出力
console.log(campus.buildingD[0]);//「D101」を出力
console.log(campus.buildingD[1]);//「D102」を出力
console.log(campus.buildingD[1]);//「D103」を出力
console.log(campus.buildingD[2]);//「D201」を出力
console.log(campus.buildingD[3]);//「D202」を出力
console.log(campus.buildingD[4]);//「D203」を出力
console.log(campus.buildingD[5]);//「D204」を出力
console.log(campus.buildingD[6]);//「D205」を出力

console.log(gakka[0].name);//「機械システム工学科」を出力
console.log(gakka[1].name);//「電子システム工学科」を出力
console.log(gakka[2].name);//「情報工学科」を出力
console.log(gakka[3].name);//「デザイン学科」を出力