let b=document.querySelector('#do');
b.addEventListener('click',wado );
function wado(){
  
  let q = document.querySelector('select#guru');
    let wo = q.selectedIndex;  

    let oq = q.querySelectorAll('option');

    let a = oq.item(wo);       

    console.log('選択された ' + wo + ' 番目の option の情報:');
    console.log('  value=' + a.getAttribute('value'));  
    console.log('  textContent='+a.textContent);

//URL
  let url;
    let fu;
    if(wo<10){
      fu=wo;
       url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/G00'+fu+'.json';
    }else{
      fu=wo;
       url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/G0'+fu+'.json';
    }
  //通信
  axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);

}
function showResult(resp) {
  
  let t1 =resp.data;
  if (typeof t1 === 'string') {
    t1 = JSON.parse(t1);
  }
  let t2=t1.results;
  let t3=t2.shop;
  console.log(t1);
  console.log(t2)
  console.log(t3);

  let elements = [
    document.querySelector('ul#gu1'),
    document.querySelector('ul#gu2'),
    document.querySelector('ul#gu3'),
    document.querySelector('ul#gu4'),
    document.querySelector('ul#gu5'),
    document.querySelector('ul#gu6'),
    document.querySelector('ul#gu7'),
    document.querySelector('ul#gu8'),
  ];
  
  for (let n of t3) {
    elements[0].textContent = n.access;
    elements[1].textContent = n.address;
    elements[2].textContent = n.budget.name;
    elements[3].textContent = n.catch;
    elements[4].textContent = n.genre.name;
    elements[5].textContent = n.name;
    elements[6].textContent = n.open;
    elements[7].textContent = n.station_name;
  }
}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('Ajax 通信が終わりました');
}
