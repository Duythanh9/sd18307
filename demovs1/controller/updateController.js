window.updatesinhvien=function($scope,$http,$location,$routeParams){
    // $routeParams để lấy dữ liệu từ url
    $scope.title="update sinh vien"
    const apidanhsachsinhvien="http://localhost:3000/danhsachsinhvien";
    let idsinhvien=$routeParams.id;
    console.log(idsinhvien)//kiểm tra id sinh viên
    $http.get(
        `${apidanhsachsinhvien}/${idsinhvien}`
    )
    .then(function(response){
        $scope.oldsinhvien={
            idUpdate:response.data.id,
            hoten:response.data.hoten,
            tuoi:response.data.tuoi,
            Gioitinh:response.data.Gioitinh,
            quequan:response.data.quequan
        }
    })
    $scope.updatesinhvien=function(){
        let sinhvienupdate={
            hoten:$scope.oldsinhvien.hoten,
            tuoi:$scope.oldsinhvien.tuoi,
            Gioitinh:$scope.oldsinhvien.Gioitinh,
            quequan:$scope.oldsinhvien.quequan,
        }
        $http.put(
            `${apidanhsachsinhvien}/${idsinhvien}`,sinhvienupdate
        ).then(function(response){
            if(response.status==200){
                $location.path("trang-chu")
            }
        })
    }
    
}