window.onscroll = function () {
  if (window.scrollY > 100) {
    document.querySelector(".header-wavy").classList.add("header-scroll");
    document
      .querySelector(".header-wavy")
      .classList.remove("header-scroll-two");
  } else {
    document.querySelector(".header-wavy").classList.remove("header-scroll");
    document.querySelector(".header-wavy").classList.add("header-scroll-two");
  }
};

function getEle(id) {
  return document.getElementById(id);
}

var service = new Service();

// lấy danh sách API giáo viên, học viên
function getList() {
  service
    .getListAPI()
    .then(function (result) {
      renderList(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getList();

function renderList(data) {
  var content = "";
  data.forEach(function (list_api) {
    if (list_api.loaiND === "GV") {//lọc GV với HV
      content += `
      <div class="card" style="width: 17rem">
        <div class="img-card">
          <img
            class="card-img-top"
            src="./images/images/${list_api.hinhAnh}"
            alt="Card image cap"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">${list_api.ngonNgu}</h5>
          <h1 class="card-name">${list_api.hoTen}</h1>
          <p class="card-text">
            ${list_api.moTa}
          </p>
        </div>
      </div>
      `;
    }
  });
  getEle("listGV").innerHTML = content;
}
