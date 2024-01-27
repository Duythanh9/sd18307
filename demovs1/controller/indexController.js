window.indexController=function($scope,$http){
    $scope.title="danh sach sinh vien"
    //định nghĩa đường dẫn api
    const apidanhsach="http://localhost:3000/danhsachsinhvien";
    //sử dụng $http để truy cập vào api
    $http.get(apidanhsach).then(function(response){
        console.log(response)
        if(response.data){
            $scope.danhsachsinhvien=response.data
        }
    })
    //delete
    $scope.deletedanhsachsinhvien=function(id){
        console.log(id)
        let confirm=window.confirm("bạn có chắc muốn xóa người này")//hỏi
        if(confirm){
            $http.delete(
                `${apidanhsach}/${id}`
            ).then(function(response){
                if(response.status==200){
                    alert("xóa thành công")
                }
            })
            .catch(function(error){
                console.log(error)
                alert("faill")
            })
        }
    }
}