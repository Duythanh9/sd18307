window.indexController=function($scope,$http){
    $scope.title='danh sach ny'
    // định nghĩa đường dẫn api
     const apiListStuden="http://localhost:3000/danhsachny";
    //  sử dụng $http để truy cập vào api
    $http.get(apiListStuden).then(function(response){
        console.log(response)
        if(response.data){
            $scope.danhsachny=response.data
        }

    })
    $scope.deleteDanhSachny=function(id){
        console.log(id)
        let confirm=window.confirm("may co muon xoa ny nay ko")
        if(confirm){
            $http.delete(
            `${apiListStuden}/${id}`
            ).then(function(response){
                if(response.status==200){
                    alert("xóa thành công")
                }
            })
            .catch(function(error){
            console.log(error)
            alert("lỗi r")
            })
        }
    }
}