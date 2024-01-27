window.addController=function($scope,$http,$location){
    // $location hỗ trợ điều hướng về trnag chủ
    $scope.title="thêm sinh viên"
    // thêm dữ liệu vào funtion
    $scope.addsinhvien=function(){
        const apidanhsachsinhvien="http://localhost:3000/danhsachsinhvien";
        let newsinhvien={
            id:$scope.sinhvien.id,
            hoten:$scope.sinhvien.hoten,
            tuoi:$scope.sinhvien.tuoi,
            Gioitinh:$scope.sinhvien.Gioitinh,
            quequan:$scope.sinhvien.quequan,

        }
        console.log(newsinhvien)
        $http.post(apidanhsachsinhvien,newsinhvien)
        .then(function(response){
            if(response.status==201){
                $location.path("trang-chu")
            }
        })
    }
}