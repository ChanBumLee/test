let bannerList = [];
let bannerIndex = 0;

function getBanner(){
  $.ajax({
    type: "get",
    dataType: "json",
    url: "./bannerList.json",
    success: function (data, status, xhr) {

      console.log(data);
      bannerList = data.banners;

      // 첫 번쩨 banner 로 초기화
      let banner = $("#banner");
      let bannerText = bannerList[bannerIndex].bannerText;
      banner.text(bannerText);
      bannerIndex++;

      // 주기적으로 update
      setInterval( changeBanner, 5000 );
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // httpRequest.status == 404, 500 ....
      alert("문제가 발생했습니다. " + jqXHR.status);
    },
  });

  function changeBanner(){

    let banner = $("#banner");
    let bannerText = bannerList[bannerIndex].bannerText;
    banner.text(bannerText);
    bannerIndex++;
    if( bannerIndex == 4 ) bannerIndex = 0;
  }
}