function Service() {
  this.arr = [];
  this.getListAPI = function () {
    return axios({
      url: "https://628e534c368687f3e714f327.mockapi.io/api/ListTeacher",
      method: "GET",
    });
  };
}
