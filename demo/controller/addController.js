window.addController=function($scope,$http,$location){
    //$location để hỗ trợ điều hướng về trang chủ
    $scope.title="đây là trang thêm"
    //funtion thêm dữ liệu
    $scope.addny=function(){
        const apiListny="http://localhost:3000/danhsachny";
        let newny={
            id:$scope.nguoiYeu.id,
            hoten:$scope.nguoiYeu.hoten,
            tuoi:$scope.nguoiYeu.tuoi,
            Gioitinh:$scope.nguoiYeu.Gioitinh,
            quequan:$scope.nguoiYeu.quequan


        }
        console.log(newny)

        $http.post(apiListny,newny)
        .then(function(response){
            if(response.status==201){
                $location.path("trang-chu")
            }
        })
    }
}