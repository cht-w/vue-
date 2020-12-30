import request from '../http/request'

export function getList() {
    return request({
        url:'/home/swiperdata',
        method:'get'
    })
}

// get 
export function listDbTable(query) {
    return request({
      url: '/system/tools/gen/dataList',
      method: 'get',
      params: query
    })
  }
// 使用
//   getList() {
//     listDbTable(this.queryParams).then(res => {
//       if (res.code === 0) {
//         this.dbTableList = res.data.list;
//         this.total = res.data.total;
//       }
//     });
//   },

// post 
export function importTable(data) {
    return request({
      url: '/system/tools/gen/importTableSave',
      method: 'post',
      params: data
    })
  }

// 使用
//   handleImportTable() {
//     importTable({ tables: this.tables.join(",") }).then(res => {
//       this.msgSuccess(res.msg);
//       if (res.code === 0) {
//         this.visible = false;
//         this.$emit("ok");
//       }
//     });
//   }



// get 


// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

// axios({
//     method: 'get',
//     url: '/user/12345',
//     params: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   });



// ==============================

// post


// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   });