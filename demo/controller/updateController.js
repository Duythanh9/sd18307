window.updateny=function($scope,$http,$location,$routeParams){
    //$routerParams dùng để lấy  dữ liệu url
    $scope.title="from sửa thông tin sinh viên"
    const apiny="http://localhost:3000/danhsachny"
    // lấy id sinh viên cần sửa từ url
    let idny=$routeParams.id;
    console.log(idny)
    $http.get(
        `${apiny}/${idny}`
        
    )
    .then(function(response){
        if(response.status==200){
            $scope.oldny={
                idUpdate:response.data.id,
                hoten:response.data.hoten,
                tuoi:response.data.tuoi,
                Gioitinh:response.data.Gioitinh,
                quequan:response.data.quequan


            }
        }
    })
    $scope.updateny=function(){
        let newnymoi={
            hoten:$scope.oldny.hoten,
            tuoi:$scope.oldny.tuoi,
            Gioitinh:$scope.oldny.Gioitinh,
            quequan:$scope.oldny.quequan
        }
        $http.put(
            `${apiny}/${idny}`,newnymoi
        ).then(function(response){
            if(response.status==200){
                $location.path("trang-chu")
            }
        })
    }
}
