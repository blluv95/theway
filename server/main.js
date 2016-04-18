Meteor.startup(function () {
    console.log('Server started');

    if (Xe.find().count() === 0) {
        console.log('Adding Tuyen');
        var dataXe = [
            {
                MaXe: 'X01',
                MaNhaXe: 'NX01',
                TenXe: 'Gia Tặng 01',
                SoGhe: 10,
                BKS: '29A-K34 15627',
            }, {
                MaXe: 'X02',
                MaNhaXe: 'NX01',
                TenXe: 'Gia Tặng 02',
                SoGhe: 10,
                BKS: '29A-K34 15628',
            }, {
                MaXe: 'X03',
                MaNhaXe: 'NX01',
                TenXe: 'Gia Tặng 03',
                SoGhe: 60,
                BKS: '29A-K34 15629',
            },{
                MaXe: 'X04',
                MaNhaXe: 'NX01',
                TenXe: 'Gia Tặng 04',
                SoGhe: 60,
                BKS: '29A-K34 15629',
            },{
                MaXe: 'X05',
                MaNhaXe: 'NX01',
                TenXe: 'Gia Tặng 05',
                SoGhe: 60,
                BKS: '29A-K34 15630',
            },{
                MaXe: 'X06',
                MaNhaXe: 'NX01',
                TenXe: 'Gia Tặng 05',
                SoGhe: 36,
                BKS: '29A-K34 15630',
            }

            ,{
                MaXe: 'X11',
                MaNhaXe: 'NX02',
                TenXe: 'Hải Âu 01',
                SoGhe: 40,
                BKS: '29A-K34 53373',
            },{
                MaXe: 'X12',
                MaNhaXe: 'NX02',
                TenXe: 'Hải Âu 01',
                SoGhe: 40,
                BKS: '29A-K34 53374',
            },{
                MaXe: 'X13',
                MaNhaXe: 'NX02',
                TenXe: 'Hải Âu 01',
                SoGhe: 40,
                BKS: '29A-K34 53375',
            },{
                MaXe: 'X14',
                MaNhaXe: 'NX02',
                TenXe: 'Hải Âu 01',
                SoGhe: 40,
                BKS: '29A-K34 53376',
            }
            //---------------------------------------
        ];


        _.each(dataXe, function (post) {
            Xe.insert(post);
        });
    }
    //-------------------------------------
    if (NhaXe.find().count() === 0) {
        console.log('Adding Tuyen');
        var dataXe = [
            {
                MaNhaXe: 'NX01',
                TenNhaXe: 'Gia Tặng',
                DiaChi: 'Hà Nội',
                DienThoai: '01668082122',
            }, {
                MaNhaXe: 'NX02',
                TenNhaXe: 'Hải Âu',
                DiaChi: 'Hà Nội',
                DienThoai: '0987623133',
            }, {
                MaNhaXe: 'NX03',
                TenNhaXe: 'Bình Minh',
                DiaChi: 'Hà Nội',
                DienThoai: '01653938416',
            }
        ];


        _.each(dataXe, function (post) {
            NhaXe.insert(post);
        });
    }
// ------------------------------------------------------------------------------------

    if (Tuyen.find().count() === 0) {
        console.log('Adding Tuyen');
        var dataTuyen = [
            {
                MaTuyen: 'T001',
                TenTuyen: 'Ecopark-Ba Đình',
                DiemDau: 'Ecopark',
                DiemCuoi: 'Ba Đình',
                MaNhaXe: 'NX01',
            }, {
                MaTuyen: 'T002',
                TenTuyen: 'Ba Đình-Ecopark',
                DiemDau: 'Ba Đình',
                DiemCuoi: 'Ecopark',
                MaNhaXe: 'NX01',
            }, 
            // {
            //     MaTuyen: 'T003',
            //     TenTuyen: 'Ecopark-Cầu Giấy',
            //     DiemDau: 'Ecopark',
            //     DiemCuoi: 'Cầu Giấy',
            //     MaNhaXe: 'NX01',
            // },
            {
                MaTuyen: 'T004',
                TenTuyen: 'Cầu Giấy-Ecopark',
                DiemDau: 'Ecopark',
                DiemCuoi: 'Cầu Giấy',
                MaNhaXe: 'NX02',
            }, {
                MaTuyen: 'T005',
                TenTuyen: 'Ecopark-Láng',
                DiemDau: 'Ecopark',
                DiemCuoi: 'Cầu Giấy',
                MaNhaXe: 'NX02',
            }, {
                MaTuyen: 'T006',
                TenTuyen: 'Láng-Ecopark',
                DiemDau: 'Ecopark',
                DiemCuoi: 'Cầu Giấy',
                MaNhaXe: 'NX02',
            }, {
                MaTuyen: 'T007',
                TenTuyen: 'Ecopark-Hoàn Kiếm',
                DiemDau: 'Ecopark',
                DiemCuoi: 'Cầu Giấy',
                MaNhaXe: 'NX03',
            }, {
                MaTuyen: 'T008',
                TenTuyen: 'Hoàn Kiếm-Ecopark',
                DiemDau: 'Ecopark',
                DiemCuoi: 'Cầu Giấy',
                MaNhaXe: 'NX03',
            }, {
                MaTuyen: 'T009',
                TenTuyen: 'Ecopark-Tây Hồ',
                DiemDau: 'Ecopark',
                DiemCuoi: 'Cầu Giấy',
                MaNhaXe: 'NX03',
            }, {
                MaTuyen: 'T010',
                TenTuyen: 'Tây Hồ-Ecopark',
                DiemDau: 'Ecopark',
                DiemCuoi: 'Cầu Giấy',
                MaNhaXe: 'NX03',
            },
        ];

        _.each(dataTuyen, function (post) {
            Tuyen.insert(post);
        });
    }
//-----------------------------------------------
    if (Xe_Chuyen.find().count() === 0) {
        console.log('Adding Xe_Chuyen');
        var dataXe = [
            {
                Ma: '1',
                MaXe: 'X01',
                MaChuyen: 'C001',
                MaTuyen: 'T001',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '2',
                MaXe: 'X02',
                MaChuyen: 'C002',
                MaTuyen: 'T001',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '3',
                MaXe: 'X01',
                MaChuyen: 'C003',
                MaTuyen: 'T001',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },    {
                Ma: '4',
                MaXe: 'X02',
                MaChuyen: 'C004',
                MaTuyen: 'T001',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '5',
                MaXe: 'X01',
                MaChuyen: 'C005',
                MaTuyen: 'T001',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '6',
                MaXe: 'X02',
                MaChuyen: 'C006',
                MaTuyen: 'T001',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '7',
                MaXe: 'X01',
                MaChuyen: 'C007',
                MaTuyen: 'T001',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '8',
                MaXe: 'X02',
                MaChuyen: 'C008',
                MaTuyen: 'T001',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },//---------------------------------

            {
                Ma: '9',
                MaXe: 'X11',
                MaChuyen: 'C001',
                MaTuyen: 'T002',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '10',
                MaXe: 'X12',
                MaChuyen: 'C002',
                MaTuyen: 'T002',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '11',
                MaXe: 'X11',
                MaChuyen: 'C003',
                MaTuyen: 'T002',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },    {
                Ma: '12',
                MaXe: 'X12',
                MaChuyen: 'C004',
                MaTuyen: 'T002',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '13',
                MaXe: 'X11',
                MaChuyen: 'C005',
                MaTuyen: 'T002',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '14',
                MaXe: 'X12',
                MaChuyen: 'C006',
                MaTuyen: 'T002',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '15',
                MaXe: 'X11',
                MaChuyen: 'C007',
                MaTuyen: 'T002',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '16',
                MaXe: 'X12',
                MaChuyen: 'C008',
                MaTuyen: 'T002',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            //tuyen 3
            /*{
                Ma: '17',
                MaXe: 'X03',
                MaChuyen: 'C001',
                MaTuyen: 'T003',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '18',
                MaXe: 'X04',
                MaChuyen: 'C002',
                MaTuyen: 'T003',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '19',
                MaXe: 'X03',
                MaChuyen: 'C003',
                MaTuyen: 'T003',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '20',
                MaXe: 'X04',
                MaChuyen: 'C004',
                MaTuyen: 'T003',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '21',
                MaXe: 'X03',
                MaChuyen: 'C005',
                MaTuyen: 'T003',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '22',
                MaXe: 'X04',
                MaChuyen: 'C006',
                MaTuyen: 'T003',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '23',
                MaXe: 'X03',
                MaChuyen: 'C007',
                MaTuyen: 'T003',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '24',
                MaXe: 'X04',
                MaChuyen: 'C008',
                MaTuyen: 'T003',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '25',
                MaXe: 'X03',
                MaChuyen: 'C009',
                MaTuyen: 'T003',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },*/

            //tuyen 4
            {
                Ma: '26',
                MaXe: 'X05',
                MaChuyen: 'C001',
                MaTuyen: 'T004',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '27',
                MaXe: 'X06',
                MaChuyen: 'C002',
                MaTuyen: 'T004',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '28',
                MaXe: 'X05',
                MaChuyen: 'C003',
                MaTuyen: 'T004',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },    {
                Ma: '29',
                MaXe: 'X06',
                MaChuyen: 'C004',
                MaTuyen: 'T004',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '30',
                MaXe: 'X05',
                MaChuyen: 'C005',
                MaTuyen: 'T004',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '31',
                MaXe: 'X06',
                MaChuyen: 'C006',
                MaTuyen: 'T004',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '32',
                MaXe: 'X05',
                MaChuyen: 'C007',
                MaTuyen: 'T004',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },


            //tuyen 5
            {
                Ma: '33',
                MaXe: 'X05',
                MaChuyen: 'C001',
                MaTuyen: 'T005',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '34',
                MaXe: 'X06',
                MaChuyen: 'C002',
                MaTuyen: 'T005',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '35',
                MaXe: 'X05',
                MaChuyen: 'C003',
                MaTuyen: 'T005',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },    {
                Ma: '36',
                MaXe: 'X06',
                MaChuyen: 'C004',
                MaTuyen: 'T005',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '37',
                MaXe: 'X05',
                MaChuyen: 'C005',
                MaTuyen: 'T005',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '38',
                MaXe: 'X06',
                MaChuyen: 'C006',
                MaTuyen: 'T005',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '39',
                MaXe: 'X05',
                MaChuyen: 'C007',
                MaTuyen: 'T005',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            //tuyen 6
            {
                Ma: '40',
                MaXe: 'X01',
                MaChuyen: 'C001',
                MaTuyen: 'T006',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '41',
                MaXe: 'X02',
                MaChuyen: 'C002',
                MaTuyen: 'T006',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '42',
                MaXe: 'X01',
                MaChuyen: 'C003',
                MaTuyen: 'T006',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },    {
                Ma: '43',
                MaXe: 'X02',
                MaChuyen: 'C004',
                MaTuyen: 'T006',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '44',
                MaXe: 'X01',
                MaChuyen: 'C005',
                MaTuyen: 'T006',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '45',
                MaXe: 'X02',
                MaChuyen: 'C006',
                MaTuyen: 'T006',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '46',
                MaXe: 'X01',
                MaChuyen: 'C007',
                MaTuyen: 'T006',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '47',
                MaXe: 'X02',
                MaChuyen: 'C008',
                MaTuyen: 'T006',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },//-------------
            //tuyen 7

            {
                Ma: '48',
                MaXe: 'X03',
                MaChuyen: 'C001',
                MaTuyen: 'T007',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '49',
                MaXe: 'X04',
                MaChuyen: 'C002',
                MaTuyen: 'T007',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '50',
                MaXe: 'X03',
                MaChuyen: 'C003',
                MaTuyen: 'T007',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },    {
                Ma: '51',
                MaXe: 'X04',
                MaChuyen: 'C004',
                MaTuyen: 'T007',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '52',
                MaXe: 'X03',
                MaChuyen: 'C005',
                MaTuyen: 'T007',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '53',
                MaXe: 'X04',
                MaChuyen: 'C006',
                MaTuyen: 'T007',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '54',
                MaXe: 'X03',
                MaChuyen: 'C007',
                MaTuyen: 'T007',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '55',
                MaXe: 'X04',
                MaChuyen: 'C008',
                MaTuyen: 'T007',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '56',
                MaXe: 'X03',
                MaChuyen: 'C009',
                MaTuyen: 'T007',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            //tuyen 08
            {
                Ma: '57',
                MaXe: 'X05',
                MaChuyen: 'C001',
                MaTuyen: 'T008',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '58',
                MaXe: 'X06',
                MaChuyen: 'C002',
                MaTuyen: 'T008',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '59',
                MaXe: 'X05',
                MaChuyen: 'C003',
                MaTuyen: 'T008',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },    {
                Ma: '60',
                MaXe: 'X06',
                MaChuyen: 'C004',
                MaTuyen: 'T008',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '61',
                MaXe: 'X05',
                MaChuyen: 'C005',
                MaTuyen: 'T008',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '62',
                MaXe: 'X06',
                MaChuyen: 'C006',
                MaTuyen: 'T008',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '63',
                MaXe: 'X05',
                MaChuyen: 'C007',
                MaTuyen: 'T008',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            //tuyen 09
            {
                Ma: '64',
                MaXe: 'X01',
                MaChuyen: 'C001',
                MaTuyen: 'T009',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },
            {
                Ma: '65',
                MaXe: 'X02',
                MaChuyen: 'C002',
                MaTuyen: 'T009',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },
            {
                Ma: '66',
                MaXe: 'X01',
                MaChuyen: 'C003',
                MaTuyen: 'T009',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },    {
                Ma: '67',
                MaXe: 'X02',
                MaChuyen: 'C004',
                MaTuyen: 'T009',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '68',
                MaXe: 'X01',
                MaChuyen: 'C005',
                MaTuyen: 'T009',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '69',
                MaXe: 'X02',
                MaChuyen: 'C006',
                MaTuyen: 'T009',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            }, {
                Ma: '70',
                MaXe: 'X01',
                MaChuyen: 'C007',
                MaTuyen: 'T009',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX01',
            },{
                Ma: '71',
                MaXe: 'X02',
                MaChuyen: 'C008',
                MaTuyen: 'T009',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },{
                Ma: '72',
                MaXe: 'X02',
                MaChuyen: 'C009',
                MaTuyen: 'T009',
                NhanXet: 'Good',
                Diem: '9',
                NgayTao: '6/4/2016',
                MaLX: 'LX02',
            },

        ];


        _.each(dataXe, function (post) {
            Xe_Chuyen.insert(post);
        });
    }

    //------------------------------------------
    if (Chuyen.find().count() === 0) {
        console.log('Adding Chuyen');
        var dataChuyen = [
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Cổng trước Ecopark',
                    STT:'1',
                    Gio: '6:10',
                    DiemDungEng: 'Cong truoc Ecopark',
                },
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'2',
                    Gio: '6:27',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }, {
                    MaChuyen: 'C001',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '6:35',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai',
                }, {
                    MaChuyen: 'C001',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'4',
                    Gio: '6:42',
                    DiemDungEng: 'Số 63 Lý Thái Tổ',

                }, {
                    MaChuyen: 'C001',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 10 Tràng Thi',
                    STT:'5',
                    Gio: '6:48',
                    DiemDungEng: 'So 10 Trang Thi',
                }, {
                    MaChuyen: 'C001',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 19C Hoàng Diệu',
                    STT:'6',
                    Gio: '6:54',
                    DiemDungEng: 'So 19C Hoang Dieu',
                }, {
                    MaChuyen: 'C001',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Cổng Khách sạn Sofitel Plaza-Yên Phụ',
                    STT:'7',
                    Gio: '7:02',
                    DiemDungEng: 'Cong Khach san Sofitel Plaza-Yen Phu',
                },


//------------

                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Cổng trước Ecopark',
                    STT:'1',
                    Gio: '6:40',
                    DiemDungEng: 'Cong truoc Ecopark'

                },
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'2',
                    Gio: '7:07',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien'
                },
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '7:15',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai'
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'4',
                    Gio: '7:22',
                    DiemDungEng: 'Số 63 Lý Thái Tổ'
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 10 Tràng Thi',
                    STT:'5',
                    Gio: '7:28',
                    DiemDungEng: 'So 10 Trang Thi'
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 19C Hoàng Diệu',
                    STT:'6',
                    Gio: '7:34',
                    DiemDungEng: 'So 19C Hoang Dieu'
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Cổng Khách sạn Sofitel Plaza-Yên Phụ',
                    STT:'7',
                    Gio: '7:42',
                    DiemDungEng: 'Cong Khach san Sofitel Plaza-Yen Phu'
                }
                ,


//--------------
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Cổng trước Ecopark',
                    STT:'1',
                    Gio: '10:10',
                    DiemDungEng: 'Cong truoc Ecopark'

                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'2',
                    Gio: '10:27',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien'
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '10:35',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai'
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'4',
                    Gio: '10:42',
                    DiemDungEng: 'Số 63 Lý Thái Tổ'
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 10 Tràng Thi',
                    STT:'5',
                    Gio: '10:48',
                    DiemDungEng: 'So 10 Trang Thi'
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 19C Hoàng Diệu',
                    STT:'6',
                    Gio: '10:54',
                    DiemDungEng: 'So 19C Hoang Dieu'
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Cổng Khách sạn Sofitel Plaza-Yên Phụ',
                    STT:'7',
                    Gio: '11:02',
                    DiemDungEng: 'Cong Khach san Sofitel Plaza-Yen Phu'
                }
                ,

//----------------------
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Cổng trước Ecopark',
                    STT:'1',
                    Gio: '12:00',
                    DiemDungEng: 'Cong truoc Ecopark'

                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'2',
                    Gio: '12:17',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien'
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '12:25',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai'
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'4',
                    Gio: '12:32',
                    DiemDungEng: 'Số 63 Lý Thái Tổ'
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 10 Tràng Thi',
                    STT:'5',
                    Gio: '12:38',
                    DiemDungEng: 'So 10 Trang Thi'
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 19C Hoàng Diệu',
                    STT:'6',
                    Gio: '12:44',
                    DiemDungEng: 'So 19C Hoang Dieu'
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Cổng Khách sạn Sofitel Plaza-Yên Phụ',
                    STT:'7',
                    Gio: '12:52',
                    DiemDungEng: 'Cong Khach san Sofitel Plaza-Yen Phu'
                }
                ,


//------------------------
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Cổng trước Ecopark',
                    STT:'1',
                    Gio: '16:10',
                    DiemDungEng: 'Cong truoc Ecopark'

                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'2',
                    Gio: '16:37',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien'
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '16:45',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai'
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'4',
                    Gio: '16:52',
                    DiemDungEng: 'Số 63 Lý Thái Tổ'
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 10 Tràng Thi',
                    STT:'5',
                    Gio: '16:58',
                    DiemDungEng: 'So 10 Trang Thi'
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 19C Hoàng Diệu',
                    STT:'6',
                    Gio: '17:04',
                    DiemDungEng: 'So 19C Hoang Dieu'
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Cổng Khách sạn Sofitel Plaza-Yên Phụ',
                    STT:'7',
                    Gio: '17:12',
                    DiemDungEng: 'Cong Khach san Sofitel Plaza-Yen Phu'
                }
                ,


//-------------------
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Cổng trước Ecopark',
                    STT:'1',
                    Gio: '17:10',
                    DiemDungEng: 'Cong truoc Ecopark',

                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'2',
                    Gio: '17:27',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '17:35',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'4',
                    Gio: '17:42',
                    DiemDungEng: 'Số 63 Lý Thái Tổ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 10 Tràng Thi',
                    STT:'5',
                    Gio: '17:48',
                    DiemDungEng: 'So 10 Trang Thi',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 19C Hoàng Diệu',
                    STT:'6',
                    Gio: '17:54',
                    DiemDungEng: 'So 19C Hoang Dieu',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Cổng Khách sạn Sofitel Plaza-Yên Phụ',
                    STT:'7',
                    Gio: '18:02',
                    DiemDungEng: 'Cong Khach san Sofitel Plaza-Yen Phu',
                }
                ,

//-------------------
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Cổng trước Ecopark',
                    STT:'1',
                    Gio: '18:20',
                    DiemDungEng: 'Cong truoc Ecopark',

                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'2',
                    Gio: '18:37',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '18:45',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'4',
                    Gio: '18:52',
                    DiemDungEng: 'Số 63 Lý Thái Tổ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 10 Tràng Thi',
                    STT:'5',
                    Gio: '18:58',
                    DiemDungEng: 'So 10 Trang Thi',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 19C Hoàng Diệu',
                    STT:'6',
                    Gio: '19:04',
                    DiemDungEng: 'So 19C Hoang Dieu',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Cổng Khách sạn Sofitel Plaza-Yên Phụ',
                    STT:'7',
                    Gio: '19:12',
                    DiemDungEng: 'Cong Khach san Sofitel Plaza-Yen Phu',
                }
                ,


//-----------------
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Cổng trước Ecopark',
                    STT:'1',
                    Gio: '20:00',
                    DiemDungEng: 'Cong truoc Ecopark',

                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'2',
                    Gio: '20:17',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '20:25',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'4',
                    Gio: '20:32',
                    DiemDungEng: 'Số 63 Lý Thái Tổ',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 10 Tràng Thi',
                    STT:'5',
                    Gio: '20:38',
                    DiemDungEng: 'So 10 Trang Thi',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 19C Hoàng Diệu',
                    STT:'6',
                    Gio: '20:44',
                    DiemDungEng: 'So 19C Hoang Dieu',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T001',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Cổng Khách sạn Sofitel Plaza-Yên Phụ',
                    STT:'7',
                    Gio: '20:52',
                    DiemDungEng: 'Cong Khach san Sofitel Plaza-Yen Phu',
                }
                ,

                /*tuyen 2*/
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Cổng khách sạn Sofitel Plaza Yên Phụ',
                    STT:'1',
                    Gio: '7:02',
                    DiemDungEng: 'Cong khach san Sofitel Plaza Yen Phu',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 34A Hoàng Diệu',
                    STT:'2',
                    Gio: '7:10',
                    DiemDungEng: 'So 34A Hoang Dieu',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 39D Hai Bà Trưng',
                    STT:'3',
                    Gio: '7:16',
                    DiemDungEng: 'So 39D Hai Ba Trung',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 1 Tràng Tiền(Nhà Hát Lớn)',
                    STT:'4',
                    Gio: '7:22',
                    DiemDungEng: 'So 1 Trang Tien(Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'5',
                    Gio: '7:29',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Cổng sau Aeon Mall Long Biên( Trước cổng bãi đỗ xe C5)',
                    STT:'6',
                    Gio: '7:37',
                    DiemDungEng: 'Cong sau Aeon Mall Long Bien( Truoc cong bai do xe C5)',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Cổng sau Ecopark',
                    STT:'7',
                    Gio: '7:54',
                    DiemDungEng: 'Cong sau Ecopark',
                }
                ,


//---------------------------
                {

                    MaChuyen: 'C002',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Cổng khách sạn Sofitel Plaza Yên Phụ',
                    STT:'1',
                    Gio: '7:42',
                    DiemDungEng: 'Cong khach san Sofitel Plaza Yen Phu',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 34A Hoàng Diệu',
                    STT:'2',
                    Gio: '7:50',
                    DiemDungEng: 'So 34A Hoang Dieu',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 39D Hai Bà Trưng',
                    STT:'3',
                    Gio: '7:56',
                    DiemDungEng: 'So 39D Hai Ba Trung',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 1 Tràng Tiền(Nhà Hát Lớn)',
                    STT:'4',
                    Gio: '8:02',
                    DiemDungEng: 'So 1 Trang Tien(Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'5',
                    Gio: '8:09',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Cổng sau Aeon Mall Long Biên( Trước cổng bãi đỗ xe C5)',
                    STT:'6',
                    Gio: '8:17',
                    DiemDungEng: 'Cong sau Aeon Mall Long Bien( Truoc cong bai do xe C5)',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Cổng sau Ecopark',
                    STT:'7',
                    Gio: '8:34',
                    DiemDungEng: 'Cong sau Ecopark',
                }
                ,
//---------------------------
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Cổng khách sạn Sofitel Plaza Yên Phụ',
                    STT:'1',
                    Gio: '11:02',
                    DiemDungEng: 'Cong khach san Sofitel Plaza Yen Phu',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 34A Hoàng Diệu',
                    STT:'2',
                    Gio: '11:12',
                    DiemDungEng: 'So 34A Hoang Dieu',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 39D Hai Bà Trưng',
                    STT:'3',
                    Gio: '11:16',
                    DiemDungEng: 'So 39D Hai Ba Trung',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 1 Tràng Tiền(Nhà Hát Lớn)',
                    STT:'4',
                    Gio: '11:22',
                    DiemDungEng: 'So 1 Trang Tien(Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'5',
                    Gio: '11:29',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Cổng sau Aeon Mall Long Biên( Trước cổng bãi đỗ xe C5)',
                    STT:'6',
                    Gio: '11:37',
                    DiemDungEng: 'Cong sau Aeon Mall Long Bien( Truoc cong bai do xe C5)',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Cổng sau Ecopark',
                    STT:'7',
                    Gio: '11:54',
                    DiemDungEng: 'Cong sau Ecopark',
                }
                ,
//---------------------------
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Cổng khách sạn Sofitel Plaza Yên Phụ',
                    STT:'1',
                    Gio: '12:52',
                    DiemDungEng: 'Cong khach san Sofitel Plaza Yen Phu',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 34A Hoàng Diệu',
                    STT:'2',
                    Gio: '13:00',
                    DiemDungEng: 'So 34A Hoang Dieu',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 39D Hai Bà Trưng',
                    STT:'3',
                    Gio: '13:06',
                    DiemDungEng: 'So 39D Hai Ba Trung',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 1 Tràng Tiền(Nhà Hát Lớn)',
                    STT:'4',
                    Gio: '13:12',
                    DiemDungEng: 'So 1 Trang Tien(Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'5',
                    Gio: '13:19',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Cổng sau Aeon Mall Long Biên( Trước cổng bãi đỗ xe C5)',
                    STT:'6',
                    Gio: '13:27',
                    DiemDungEng: 'Cong sau Aeon Mall Long Bien( Truoc cong bai do xe C5)',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Cổng sau Ecopark',
                    STT:'7',
                    Gio: '13:44',
                    DiemDungEng: 'Cong sau Ecopark',
                }
                ,
//---------------------------
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Cổng khách sạn Sofitel Plaza Yên Phụ',
                    STT:'1',
                    Gio: '17:12',
                    DiemDungEng: 'Cong khach san Sofitel Plaza Yen Phu',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 34A Hoàng Diệu',
                    STT:'2',
                    Gio: '17:20',
                    DiemDungEng: 'So 34A Hoang Dieu',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 39D Hai Bà Trưng',
                    STT:'3',
                    Gio: '17:26',
                    DiemDungEng: 'So 39D Hai Ba Trung',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 1 Tràng Tiền(Nhà Hát Lớn)',
                    STT:'4',
                    Gio: '117:32',
                    DiemDungEng: 'So 1 Trang Tien(Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'5',
                    Gio: '17:39',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Cổng sau Aeon Mall Long Biên( Trước cổng bãi đỗ xe C5)',
                    STT:'6',
                    Gio: '17:47',
                    DiemDungEng: 'Cong sau Aeon Mall Long Bien( Truoc cong bai do xe C5)',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Cổng sau Ecopark',
                    STT:'7',
                    Gio: '18:04',
                    DiemDungEng: 'Cong sau Ecopark',
                }
                ,
//---------------------------
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Cổng khách sạn Sofitel Plaza Yên Phụ',
                    STT:'1',
                    Gio: '18:02',
                    DiemDungEng: 'Cong khach san Sofitel Plaza Yen Phu',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 34A Hoàng Diệu',
                    STT:'2',
                    Gio: '18:10',
                    DiemDungEng: 'So 34A Hoang Dieu',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 39D Hai Bà Trưng',
                    STT:'3',
                    Gio: '18:16',
                    DiemDungEng: 'So 39D Hai Ba Trung',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 1 Tràng Tiền(Nhà Hát Lớn)',
                    STT:'4',
                    Gio: '18:22',
                    DiemDungEng: 'So 1 Trang Tien(Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'5',
                    Gio: '18:29',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Cổng sau Aeon Mall Long Biên( Trước cổng bãi đỗ xe C5)',
                    STT:'6',
                    Gio: '18:37',
                    DiemDungEng: 'Cong sau Aeon Mall Long Bien( Truoc cong bai do xe C5)',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Cổng sau Ecopark',
                    STT:'7',
                    Gio: '18:54',
                    DiemDungEng: 'Cong sau Ecopark',
                }
                ,
//---------------------------
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Cổng khách sạn Sofitel Plaza Yên Phụ',
                    STT:'1',
                    Gio: '19:12',
                    DiemDungEng: 'Cong khach san Sofitel Plaza Yen Phu',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 34A Hoàng Diệu',
                    STT:'2',
                    Gio: '19:20',
                    DiemDungEng: 'So 34A Hoang Dieu',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 39D Hai Bà Trưng',
                    STT:'3',
                    Gio: '19:26',
                    DiemDungEng: 'So 39D Hai Ba Trung',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 1 Tràng Tiền(Nhà Hát Lớn)',
                    STT:'4',
                    Gio: '19:32',
                    DiemDungEng: 'So 1 Trang Tien(Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'5',
                    Gio: '19:39',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Cổng sau Aeon Mall Long Biên( Trước cổng bãi đỗ xe C5)',
                    STT:'6',
                    Gio: '19:47',
                    DiemDungEng: 'Cong sau Aeon Mall Long Bien( Truoc cong bai do xe C5)',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T002',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Cổng sau Ecopark',
                    STT:'7',
                    Gio: '20:04',
                    DiemDungEng: 'Cong sau Ecopark',
                }
                ,


                /*----tuyen 3-----------------------------------------------*/
//                 {
//                     MaChuyen: 'C001',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #1',
//                     DiemDung: 'Trước cửa Aeon Mall Long Biên',
//                     STT:'1',
//                     Gio: '6:30',
//                     DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C001',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #1',
//                     DiemDung: 'Đối diện 256 Nguyễn Khoái',
//                     STT:'2',
//                     Gio: '6:57',
//                     DiemDungEng: 'Đoi dien 256 Nguyen Khoai',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C001',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #1',
//                     DiemDung: 'Số 42 Thanh Nhàn  (Bệnh viện Thanh Nhàn) ',
//                     STT:'3',
//                     Gio: '7:05',
//                     DiemDungEng: 'So 42 Thanh Nhan (Benh vien Thanh Nhan) ',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C001',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #1',
//                     DiemDung: 'Cổng công viên Thống Nhất - Đại Cồ Việt',
//                     STT:'4',
//                     Gio: '7:10',
//                     DiemDungEng: 'Cong cong vien Thong Nhat - Đai Co Viet',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C001',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #1',
//                     DiemDung: 'Số 474 Xã Đàn',
//                     STT:'5',
//                     Gio: '7:15',
//                     DiemDungEng: 'So 474 Xa Đan',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C001',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #1',
//                     DiemDung: 'Số 188 Tây Sơn',
//                     STT:'6',
//                     Gio: '7:37',
//                     DiemDungEng: 'So 188 Tay Son',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C001',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #1',
//                     DiemDung: 'Số 87 Láng Hạ  (Rạp Chiếu phim quốc gia)',
//                     STT:'7',
//                     Gio: '7:20',
//                     DiemDungEng: 'So 87 Lang Ha (Rap Chieu phim quoc gia)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C001',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #1',
//                     DiemDung: 'Số 111 Núi Trúc',
//                     STT:'8',
//                     Gio: '7:25',
//                     DiemDungEng: 'So 111 Nui Truc',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C001',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #1',
//                     DiemDung: 'Số 360 Kim Mã (Khách sạn Daewoo)',
//                     STT:'9',
//                     Gio: '7:30',
//                     DiemDungEng: 'So 360 Kim Ma (Khach san Daewoo)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C001',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #1',
//                     DiemDung: 'Số 3 Cầu Giấy  (Đại học Giao thông Vận tải) ',
//                     STT:'10',
//                     Gio: '7:45',
//                     DiemDungEng: 'So 3 Cau Giay (Dai hoc Giao thong Van tai) ',
//                 }
//                 ,
//
// //---------
//                 {
//                     MaChuyen: 'C002',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #2',
//                     DiemDung: 'Trước cửa Aeon Mall Long Biên',
//                     STT:'1',
//                     Gio: '6:40',
//                     DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C002',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #2',
//                     DiemDung: 'Đối diện 256 Nguyễn Khoái',
//                     STT:'2',
//                     Gio: '7:12',
//                     DiemDungEng: 'Đoi dien 256 Nguyen Khoai',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C002',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #2',
//                     DiemDung: 'Số 42 Thanh Nhàn  (Bệnh viện Thanh Nhàn) ',
//                     STT:'3',
//                     Gio: '7:20',
//                     DiemDungEng: 'So 42 Thanh Nhan (Benh vien Thanh Nhan) ',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C002',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #2',
//                     DiemDung: 'Cổng công viên Thống Nhất - Đại Cồ Việt',
//                     STT:'4',
//                     Gio: '7:25',
//                     DiemDungEng: 'Cong cong vien Thong Nhat - Đai Co Viet',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C002',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #2',
//                     DiemDung: 'Số 474 Xã Đàn',
//                     STT:'5',
//                     Gio: '7:30',
//                     DiemDungEng: 'So 474 Xa Đan',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C002',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #2',
//                     DiemDung: 'Số 188 Tây Sơn',
//                     STT:'6',
//                     Gio: '7:35',
//                     DiemDungEng: 'So 188 Tay Son',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C002',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #2',
//                     DiemDung: 'Số 87 Láng Hạ  (Rạp Chiếu phim quốc gia)',
//                     STT:'7',
//                     Gio: '7:40',
//                     DiemDungEng: 'So 87 Lang Ha (Rap Chieu phim quoc gia)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C002',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #2',
//                     DiemDung: 'Số 111 Núi Trúc',
//                     STT:'8',
//                     Gio: '7:45',
//                     DiemDungEng: 'So 111 Nui Truc',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C002',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #2',
//                     DiemDung: 'Số 360 Kim Mã (Khách sạn Daewoo)',
//                     STT:'9',
//                     Gio: '7:53',
//                     DiemDungEng: 'So 360 Kim Ma (Khach san Daewoo)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C002',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #2',
//                     DiemDung: 'Số 3 Cầu Giấy  (Đại học Giao thông Vận tải) ',
//                     STT:'10',
//                     Gio: '8:00',
//                     DiemDungEng: 'So 3 Cau Giay (Dai hoc Giao thong Van tai) ',
//                 }
//                 ,
//
// //---------------
//                 {
//                     MaChuyen: 'C003',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #3',
//                     DiemDung: 'Trước cửa Aeon Mall Long Biên',
//                     STT:'1',
//                     Gio: '8:35',
//                     DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C003',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #3',
//                     DiemDung: 'Đối diện 256 Nguyễn Khoái',
//                     STT:'2',
//                     Gio: '8:52',
//                     DiemDungEng: 'Đoi dien 256 Nguyen Khoai',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C003',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #3',
//                     DiemDung: 'Số 42 Thanh Nhàn  (Bệnh viện Thanh Nhàn) ',
//                     STT:'3',
//                     Gio: '9:00',
//                     DiemDungEng: 'So 42 Thanh Nhan (Benh vien Thanh Nhan) ',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C003',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #3',
//                     DiemDung: 'Cổng công viên Thống Nhất - Đại Cồ Việt',
//                     STT:'4',
//                     Gio: '9:05',
//                     DiemDungEng: 'Cong cong vien Thong Nhat - Đai Co Viet',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C003',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #3',
//                     DiemDung: 'Số 474 Xã Đàn',
//                     STT:'5',
//                     Gio: '9:10',
//                     DiemDungEng: 'So 474 Xa Đan',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C003',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #3',
//                     DiemDung: 'Số 188 Tây Sơn',
//                     STT:'6',
//                     Gio: '9:15',
//                     DiemDungEng: 'So 188 Tay Son',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C003',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #3',
//                     DiemDung: 'Số 87 Láng Hạ  (Rạp Chiếu phim quốc gia)',
//                     STT:'7',
//                     Gio: '9:20',
//                     DiemDungEng: 'So 87 Lang Ha (Rap Chieu phim quoc gia)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C003',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #3',
//                     DiemDung: 'Số 111 Núi Trúc',
//                     STT:'8',
//                     Gio: '9:25',
//                     DiemDungEng: 'So 111 Nui Truc',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C003',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #3',
//                     DiemDung: 'Số 360 Kim Mã (Khách sạn Daewoo)',
//                     STT:'9',
//                     Gio: '9:33',
//                     DiemDungEng: 'So 360 Kim Ma (Khach san Daewoo)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C003',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #3',
//                     DiemDung: 'Số 3 Cầu Giấy  (Đại học Giao thông Vận tải) ',
//                     STT:'10',
//                     Gio: '9:40',
//                     DiemDungEng: 'So 3 Cau Giay (Dai hoc Giao thong Van tai) ',
//                 }
//                 ,
// //---------------
//                 {
//                     MaChuyen: 'C004',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #4',
//                     DiemDung: 'Trước cửa Aeon Mall Long Biên',
//                     STT:'1',
//                     Gio: '9:00',
//                     DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C004',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #4',
//                     DiemDung: 'Đối diện 256 Nguyễn Khoái',
//                     STT:'2',
//                     Gio: '9:17',
//                     DiemDungEng: 'Đoi dien 256 Nguyen Khoai',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C004',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #4',
//                     DiemDung: 'Số 42 Thanh Nhàn  (Bệnh viện Thanh Nhàn) ',
//                     STT:'3',
//                     Gio: '9:25',
//                     DiemDungEng: 'So 42 Thanh Nhan (Benh vien Thanh Nhan) ',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C004',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #4',
//                     DiemDung: 'Cổng công viên Thống Nhất - Đại Cồ Việt',
//                     STT:'4',
//                     Gio: '9:30',
//                     DiemDungEng: 'Cong cong vien Thong Nhat - Đai Co Viet',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C004',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #4',
//                     DiemDung: 'Số 474 Xã Đàn',
//                     STT:'5',
//                     Gio: '9:35',
//                     DiemDungEng: 'So 474 Xa Đan',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C004',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #4',
//                     DiemDung: 'Số 188 Tây Sơn',
//                     STT:'6',
//                     Gio: '9:40',
//                     DiemDungEng: 'So 188 Tay Son',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C004',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #4',
//                     DiemDung: 'Số 87 Láng Hạ  (Rạp Chiếu phim quốc gia)',
//                     STT:'7',
//                     Gio: '9:45',
//                     DiemDungEng: 'So 87 Lang Ha (Rap Chieu phim quoc gia)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C004',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #4',
//                     DiemDung: 'Số 111 Núi Trúc',
//                     STT:'8',
//                     Gio: '9:50',
//                     DiemDungEng: 'So 111 Nui Truc',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C004',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #4',
//                     DiemDung: 'Số 360 Kim Mã (Khách sạn Daewoo)',
//                     STT:'9',
//                     Gio: '9:58',
//                     DiemDungEng: 'So 360 Kim Ma (Khach san Daewoo)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C004',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #4',
//                     DiemDung: 'Số 3 Cầu Giấy  (Đại học Giao thông Vận tải) ',
//                     STT:'10',
//                     Gio: '10:05',
//                     DiemDungEng: 'So 3 Cau Giay (Dai hoc Giao thong Van tai) ',
//                 }
//                 ,
// //---------------
//                 {
//                     MaChuyen: 'C005',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #5',
//                     DiemDung: 'Trước cửa Aeon Mall Long Biên',
//                     STT:'1',
//                     Gio: '9:45',
//                     DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C005',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #5',
//                     DiemDung: 'Đối diện 256 Nguyễn Khoái',
//                     STT:'2',
//                     Gio: '10:02',
//                     DiemDungEng: 'Đoi dien 256 Nguyen Khoai',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C005',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #5',
//                     DiemDung: 'Số 42 Thanh Nhàn  (Bệnh viện Thanh Nhàn) ',
//                     STT:'3',
//                     Gio: '10:10',
//                     DiemDungEng: 'So 42 Thanh Nhan (Benh vien Thanh Nhan) ',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C005',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #5',
//                     DiemDung: 'Cổng công viên Thống Nhất - Đại Cồ Việt',
//                     STT:'4',
//                     Gio: '10:15',
//                     DiemDungEng: 'Cong cong vien Thong Nhat - Đai Co Viet',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C005',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #5',
//                     DiemDung: 'Số 474 Xã Đàn',
//                     STT:'5',
//                     Gio: '10:20',
//                     DiemDungEng: 'So 474 Xa Đan',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C005',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #5',
//                     DiemDung: 'Số 188 Tây Sơn',
//                     STT:'6',
//                     Gio: '10:25',
//                     DiemDungEng: 'So 188 Tay Son',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C005',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #5',
//                     DiemDung: 'Số 87 Láng Hạ  (Rạp Chiếu phim quốc gia)',
//                     STT:'7',
//                     Gio: '10:30',
//                     DiemDungEng: 'So 87 Lang Ha (Rap Chieu phim quoc gia)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C005',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #5',
//                     DiemDung: 'Số 111 Núi Trúc',
//                     STT:'8',
//                     Gio: '10:35',
//                     DiemDungEng: 'So 111 Nui Truc',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C005',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #5',
//                     DiemDung: 'Số 360 Kim Mã (Khách sạn Daewoo)',
//                     STT:'9',
//                     Gio: '10:43',
//                     DiemDungEng: 'So 360 Kim Ma (Khach san Daewoo)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C005',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #5',
//                     DiemDung: 'Số 3 Cầu Giấy  (Đại học Giao thông Vận tải) ',
//                     STT:'10',
//                     Gio: '10:50',
//                     DiemDungEng: 'So 3 Cau Giay (Dai hoc Giao thong Van tai) ',
//                 }
//                 ,
// //---------------
//                 {
//                     MaChuyen: 'C006',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #6',
//                     DiemDung: 'Trước cửa Aeon Mall Long Biên',
//                     STT:'1',
//                     Gio: '12:30',
//                     DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C006',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #6',
//                     DiemDung: 'Đối diện 256 Nguyễn Khoái',
//                     STT:'2',
//                     Gio: '12:47',
//                     DiemDungEng: 'Đoi dien 256 Nguyen Khoai',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C006',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #6',
//                     DiemDung: 'Số 42 Thanh Nhàn  (Bệnh viện Thanh Nhàn) ',
//                     STT:'3',
//                     Gio: '12:55',
//                     DiemDungEng: 'So 42 Thanh Nhan (Benh vien Thanh Nhan) ',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C006',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #6',
//                     DiemDung: 'Cổng công viên Thống Nhất - Đại Cồ Việt',
//                     STT:'4',
//                     Gio: '13:00',
//                     DiemDungEng: 'Cong cong vien Thong Nhat - Đai Co Viet',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C006',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #6',
//                     DiemDung: 'Số 474 Xã Đàn',
//                     STT:'5',
//                     Gio: '13:05',
//                     DiemDungEng: 'So 474 Xa Đan',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C006',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #6',
//                     DiemDung: 'Số 188 Tây Sơn',
//                     STT:'6',
//                     Gio: '13:10',
//                     DiemDungEng: 'So 188 Tay Son',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C006',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #6',
//                     DiemDung: 'Số 87 Láng Hạ  (Rạp Chiếu phim quốc gia)',
//                     STT:'7',
//                     Gio: '13:15',
//                     DiemDungEng: 'So 87 Lang Ha (Rap Chieu phim quoc gia)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C006',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #6',
//                     DiemDung: 'Số 111 Núi Trúc',
//                     STT:'8',
//                     Gio: '13:20',
//                     DiemDungEng: 'So 111 Nui Truc',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C006',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #6',
//                     DiemDung: 'Số 360 Kim Mã (Khách sạn Daewoo)',
//                     STT:'9',
//                     Gio: '13:28',
//                     DiemDungEng: 'So 360 Kim Ma (Khach san Daewoo)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C006',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #6',
//                     DiemDung: 'Số 3 Cầu Giấy  (Đại học Giao thông Vận tải) ',
//                     STT:'10',
//                     Gio: '13:35',
//                     DiemDungEng: 'So 3 Cau Giay (Dai hoc Giao thong Van tai) ',
//                 }
//                 ,
// //---------------
//                 {
//                     MaChuyen: 'C007',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #7',
//                     DiemDung: 'Trước cửa Aeon Mall Long Biên',
//                     STT:'1',
//                     Gio: '14:00',
//                     DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C007',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #7',
//                     DiemDung: 'Đối diện 256 Nguyễn Khoái',
//                     STT:'2',
//                     Gio: '14:05',
//                     DiemDungEng: 'Đoi dien 256 Nguyen Khoai',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C007',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #7',
//                     DiemDung: 'Số 42 Thanh Nhàn  (Bệnh viện Thanh Nhàn) ',
//                     STT:'3',
//                     Gio: '14:10',
//                     DiemDungEng: 'So 42 Thanh Nhan (Benh vien Thanh Nhan) ',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C007',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #7',
//                     DiemDung: 'Cổng công viên Thống Nhất - Đại Cồ Việt',
//                     STT:'4',
//                     Gio: '14:15',
//                     DiemDungEng: 'Cong cong vien Thong Nhat - Đai Co Viet',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C007',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #7',
//                     DiemDung: 'Số 474 Xã Đàn',
//                     STT:'5',
//                     Gio: '14:20',
//                     DiemDungEng: 'So 474 Xa Đan',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C007',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #7',
//                     DiemDung: 'Số 188 Tây Sơn',
//                     STT:'6',
//                     Gio: '14:25',
//                     DiemDungEng: 'So 188 Tay Son',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C007',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #7',
//                     DiemDung: 'Số 87 Láng Hạ  (Rạp Chiếu phim quốc gia)',
//                     STT:'7',
//                     Gio: '14:30',
//                     DiemDungEng: 'So 87 Lang Ha (Rap Chieu phim quoc gia)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C007',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #7',
//                     DiemDung: 'Số 111 Núi Trúc',
//                     STT:'8',
//                     Gio: '14:35',
//                     DiemDungEng: 'So 111 Nui Truc',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C007',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #7',
//                     DiemDung: 'Số 360 Kim Mã (Khách sạn Daewoo)',
//                     STT:'9',
//                     Gio: '14:43',
//                     DiemDungEng: 'So 360 Kim Ma (Khach san Daewoo)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C007',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #7',
//                     DiemDung: 'Số 3 Cầu Giấy  (Đại học Giao thông Vận tải) ',
//                     STT:'10',
//                     Gio: '15:00',
//                     DiemDungEng: 'So 3 Cau Giay (Dai hoc Giao thong Van tai) ',
//                 }
//                 ,
// //---------------
//                 {
//                     MaChuyen: 'C008',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #8',
//                     DiemDung: 'Trước cửa Aeon Mall Long Biên',
//                     STT:'1',
//                     Gio: '15:05',
//                     DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C008',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #8',
//                     DiemDung: 'Đối diện 256 Nguyễn Khoái',
//                     STT:'2',
//                     Gio: '15:10',
//                     DiemDungEng: 'Đoi dien 256 Nguyen Khoai',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C008',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #8',
//                     DiemDung: 'Số 42 Thanh Nhàn  (Bệnh viện Thanh Nhàn) ',
//                     STT:'3',
//                     Gio: '15:15',
//                     DiemDungEng: 'So 42 Thanh Nhan (Benh vien Thanh Nhan) ',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C008',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #8',
//                     DiemDung: 'Cổng công viên Thống Nhất - Đại Cồ Việt',
//                     STT:'4',
//                     Gio: '15:20',
//                     DiemDungEng: 'Cong cong vien Thong Nhat - Đai Co Viet',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C008',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #8',
//                     DiemDung: 'Số 474 Xã Đàn',
//                     STT:'5',
//                     Gio: '15:25',
//                     DiemDungEng: 'So 474 Xa Đan',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C008',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #8',
//                     DiemDung: 'Số 188 Tây Sơn',
//                     STT:'6',
//                     Gio: '15:30',
//                     DiemDungEng: 'So 188 Tay Son',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C008',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #8',
//                     DiemDung: 'Số 87 Láng Hạ  (Rạp Chiếu phim quốc gia)',
//                     STT:'7',
//                     Gio: '15:35',
//                     DiemDungEng: 'So 87 Lang Ha (Rap Chieu phim quoc gia)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C008',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #8',
//                     DiemDung: 'Số 111 Núi Trúc',
//                     STT:'8',
//                     Gio: '15:40',
//                     DiemDungEng: 'So 111 Nui Truc',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C008',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #8',
//                     DiemDung: 'Số 360 Kim Mã (Khách sạn Daewoo)',
//                     STT:'9',
//                     Gio: '15:45',
//                     DiemDungEng: 'So 360 Kim Ma (Khach san Daewoo)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C008',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #8',
//                     DiemDung: 'Số 3 Cầu Giấy  (Đại học Giao thông Vận tải) ',
//                     STT:'10',
//                     Gio: '15:53',
//                     DiemDungEng: 'So 3 Cau Giay (Dai hoc Giao thong Van tai) ',
//                 }
//                 ,
// //---------------
//                 {
//                     MaChuyen: 'C009',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #9',
//                     DiemDung: 'Trước cửa Aeon Mall Long Biên',
//                     STT:'1',
//                     Gio: '16:40',
//                     DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C009',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #9',
//                     DiemDung: 'Đối diện 256 Nguyễn Khoái',
//                     STT:'2',
//                     Gio: '16:45',
//                     DiemDungEng: 'Đoi dien 256 Nguyen Khoai',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C009',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #9',
//                     DiemDung: 'Số 42 Thanh Nhàn  (Bệnh viện Thanh Nhàn) ',
//                     STT:'3',
//                     Gio: '16:53',
//                     DiemDungEng: 'So 42 Thanh Nhan (Benh vien Thanh Nhan) ',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C009',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #9',
//                     DiemDung: 'Cổng công viên Thống Nhất - Đại Cồ Việt',
//                     STT:'4',
//                     Gio: '17:05',
//                     DiemDungEng: 'Cong cong vien Thong Nhat - Đai Co Viet',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C009',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #9',
//                     DiemDung: 'Số 474 Xã Đàn',
//                     STT:'5',
//                     Gio: '17:10',
//                     DiemDungEng: 'So 474 Xa Đan',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C009',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #9',
//                     DiemDung: 'Số 188 Tây Sơn',
//                     STT:'6',
//                     Gio: '17:15',
//                     DiemDungEng: 'So 188 Tay Son',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C009',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #9',
//                     DiemDung: 'Số 87 Láng Hạ  (Rạp Chiếu phim quốc gia)',
//                     STT:'7',
//                     Gio: '17:20',
//                     DiemDungEng: 'So 87 Lang Ha (Rap Chieu phim quoc gia)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C009',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #9',
//                     DiemDung: 'Số 111 Núi Trúc',
//                     STT:'8',
//                     Gio: '17:25',
//                     DiemDungEng: 'So 111 Nui Truc',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C009',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #9',
//                     DiemDung: 'Số 360 Kim Mã (Khách sạn Daewoo)',
//                     STT:'9',
//                     Gio: '17:33',
//                     DiemDungEng: 'So 360 Kim Ma (Khach san Daewoo)',
//                 }
//                 ,
//                 {
//                     MaChuyen: 'C009',
//                     MaTuyen: 'T003',
//                     TenChuyen: 'Chuyến #9',
//                     DiemDung: 'Số 3 Cầu Giấy  (Đại học Giao thông Vận tải) ',
//                     STT:'10',
//                     Gio: '17:40',
//                     DiemDungEng: 'So 3 Cau Giay (Dai hoc Giao thong Van tai) ',
//                 }
//                 ,
                /*-----Tuyen 4----*/
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 255 Cầu Giấy',
                    STT:'1',
                    Gio: '7:47',
                    DiemDungEng: 'So 255 Cau Giay',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 521 Kim Mã (Toà nhà Handi Resco)',
                    STT:'2',
                    Gio: '6:54',
                    DiemDungEng: 'So 521 Kim Ma (Toa nha Handi Resco)',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Ngõ 12 Núi Trúc (Trường Quốc tế Pháp)',
                    STT:'3',
                    Gio: '7:02',
                    DiemDungEng: 'Ngo 12 Nui Truc (Truong Quoc te Phap)',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 165 Thái Hà ',
                    STT:'4',
                    Gio: '7:09',
                    DiemDungEng: 'So 165 Thai Ha ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 169 Tây Sơn (Đại học Công đoàn)',
                    STT:'5',
                    Gio: '7:13',
                    DiemDungEng: 'So 169 Tay Son (Dai học Cong Doan)',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 259 Xã Đàn ',
                    STT:'6',
                    Gio: '7:29',
                    DiemDungEng: 'So 259 Xa Dan ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 81 Đại Cồ Việt ',
                    STT:'7',
                    Gio: '7:34',
                    DiemDungEng: 'So 81 Dai Co Viet ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 31 Thanh Nhàn  (Đối diện bệnh viện Thanh Nhàn) ',
                    STT:'8',
                    Gio: '7:42',
                    DiemDungEng: 'So 31 Thanh Nhan  (Doi dien benh vien Thanh Nhan) ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 256 Nguyễn Khoái ',
                    STT:'9',
                    Gio: '7:59',
                    DiemDungEng: 'So 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5)',
                    STT:'10',
                    Gio: '8:03',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5)',
                }
                ,
//--------------
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 255 Cầu Giấy',
                    STT:'1',
                    Gio: '7:47',
                    DiemDungEng: 'So 255 Cau Giay',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 521 Kim Mã (Toà nhà Handi Resco)',
                    STT:'2',
                    Gio: '7:49',
                    DiemDungEng: 'So 521 Kim Ma (Toa nha Handi Resco)',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Ngõ 12 Núi Trúc (Trường Quốc tế Pháp)',
                    STT:'3',
                    Gio: '7:56',
                    DiemDungEng: 'Ngo 12 Nui Truc (Truong Quoc te Phap)',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 165 Thái Hà ',
                    STT:'4',
                    Gio: '8:04',
                    DiemDungEng: 'So 165 Thai Ha ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 169 Tây Sơn (Đại học Công đoàn)',
                    STT:'5',
                    Gio: '8:11',
                    DiemDungEng: 'So 169 Tay Son (Dai học Cong Doan)',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 259 Xã Đàn ',
                    STT:'6',
                    Gio: '8:19',
                    DiemDungEng: 'So 474 Xa Dan',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 81 Đại Cồ Việt ',
                    STT:'7',
                    Gio: '8:24',
                    DiemDungEng: 'So 81 Dai Co Viet ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 31 Thanh Nhàn  (Đối diện bệnh viện Thanh Nhàn) ',
                    STT:'8',
                    Gio: '8:29',
                    DiemDungEng: 'So 31 Thanh Nhan  (Doi dien benh vien Thanh Nhan) ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 256 Nguyễn Khoái ',
                    STT:'9',
                    Gio: '8:37',
                    DiemDungEng: 'So 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5)',
                    STT:'10',
                    Gio: '8:42',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5)',
                }
                ,
//--------------
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 255 Cầu Giấy',
                    STT:'1',
                    Gio: '8:02',
                    DiemDungEng: 'So 255 Cau Giay',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 521 Kim Mã (Toà nhà Handi Resco)',
                    STT:'2',
                    Gio: '8:04',
                    DiemDungEng: 'So 521 Kim Ma (Toa nha Handi Resco)',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Ngõ 12 Núi Trúc (Trường Quốc tế Pháp)',
                    STT:'3',
                    Gio: '8:11',
                    DiemDungEng: 'Ngo 12 Nui Truc (Truong Quoc te Phap)',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 165 Thái Hà ',
                    STT:'4',
                    Gio: '8:19',
                    DiemDungEng: 'So 165 Thai Ha ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 169 Tây Sơn (Đại học Công đoàn)',
                    STT:'5',
                    Gio: '8:24',
                    DiemDungEng: 'So 169 Tay Son (Dai học Cong Doan)',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 259 Xã Đàn ',
                    STT:'6',
                    Gio: '8:29',
                    DiemDungEng: 'So 474 Xa Dan',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 81 Đại Cồ Việt ',
                    STT:'7',
                    Gio: '8:34',
                    DiemDungEng: 'So 81 Dai Co Viet ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 31 Thanh Nhàn  (Đối diện bệnh viện Thanh Nhàn) ',
                    STT:'8',
                    Gio: '8:39',
                    DiemDungEng: 'So 31 Thanh Nhan  (Doi dien benh vien Thanh Nhan) ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 256 Nguyễn Khoái ',
                    STT:'9',
                    Gio: '8:44',
                    DiemDungEng: 'So 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5)',
                    STT:'10',
                    Gio: '8:52',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5)',
                }
                ,
//--------------
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 255 Cầu Giấy',
                    STT:'1',
                    Gio: '9:42',
                    DiemDungEng: 'So 255 Cau Giay',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 521 Kim Mã (Toà nhà Handi Resco)',
                    STT:'2',
                    Gio: '9:44',
                    DiemDungEng: 'So 521 Kim Ma (Toa nha Handi Resco)',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Ngõ 12 Núi Trúc (Trường Quốc tế Pháp)',
                    STT:'3',
                    Gio: '9:51',
                    DiemDungEng: 'Ngo 12 Nui Truc (Truong Quoc te Phap)',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 165 Thái Hà ',
                    STT:'4',
                    Gio: '9:59',
                    DiemDungEng: 'So 165 Thai Ha ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 169 Tây Sơn (Đại học Công đoàn)',
                    STT:'5',
                    Gio: '10:04',
                    DiemDungEng: 'So 169 Tay Son (Dai học Cong Doan)',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 259 Xã Đàn ',
                    STT:'6',
                    Gio: '10:09',
                    DiemDungEng: 'So 474 Xa Dan',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 81 Đại Cồ Việt ',
                    STT:'7',
                    Gio: '10:14',
                    DiemDungEng: 'So 81 Dai Co Viet ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 31 Thanh Nhàn  (Đối diện bệnh viện Thanh Nhàn) ',
                    STT:'8',
                    Gio: '10:29',
                    DiemDungEng: 'So 31 Thanh Nhan  (Doi dien benh vien Thanh Nhan) ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 256 Nguyễn Khoái ',
                    STT:'9',
                    Gio: '10:34',
                    DiemDungEng: 'So 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5)',
                    STT:'10',
                    Gio: '10:42',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5)',
                }
                ,
//--------------
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 255 Cầu Giấy',
                    STT:'1',
                    Gio: '10:07',
                    DiemDungEng: 'So 255 Cau Giay',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 521 Kim Mã (Toà nhà Handi Resco)',
                    STT:'2',
                    Gio: '10:14',
                    DiemDungEng: 'So 521 Kim Ma (Toa nha Handi Resco)',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Ngõ 12 Núi Trúc (Trường Quốc tế Pháp)',
                    STT:'3',
                    Gio: '10:21',
                    DiemDungEng: 'Ngo 12 Nui Truc (Truong Quoc te Phap)',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 165 Thái Hà ',
                    STT:'4',
                    Gio: '10:29',
                    DiemDungEng: 'So 165 Thai Ha ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 169 Tây Sơn (Đại học Công đoàn)',
                    STT:'5',
                    Gio: '10:34',
                    DiemDungEng: 'So 169 Tay Son (Dai học Cong Doan)',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 259 Xã Đàn ',
                    STT:'6',
                    Gio: '10:39',
                    DiemDungEng: 'So 474 Xa Dan',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 81 Đại Cồ Việt ',
                    STT:'7',
                    Gio: '10:44',
                    DiemDungEng: 'So 81 Dai Co Viet ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 31 Thanh Nhàn  (Đối diện bệnh viện Thanh Nhàn) ',
                    STT:'8',
                    Gio: '10:52',
                    DiemDungEng: 'So 31 Thanh Nhan  (Doi dien benh vien Thanh Nhan) ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 256 Nguyễn Khoái ',
                    STT:'9',
                    Gio: '10:59',
                    DiemDungEng: 'So 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5)',
                    STT:'10',
                    Gio: '11:09',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5)',
                }
                ,
//--------------
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 255 Cầu Giấy',
                    STT:'1',
                    Gio: '12:47',
                    DiemDungEng: 'So 255 Cau Giay',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 521 Kim Mã (Toà nhà Handi Resco)',
                    STT:'2',
                    Gio: '12:55',
                    DiemDungEng: 'So 521 Kim Ma (Toa nha Handi Resco)',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Ngõ 12 Núi Trúc (Trường Quốc tế Pháp)',
                    STT:'3',
                    Gio: '13:00',
                    DiemDungEng: 'Ngo 12 Nui Truc (Truong Quoc te Phap)',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 165 Thái Hà ',
                    STT:'4',
                    Gio: '13:05',
                    DiemDungEng: 'So 165 Thai Ha ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 169 Tây Sơn (Đại học Công đoàn)',
                    STT:'5',
                    Gio: '13:10',
                    DiemDungEng: 'So 169 Tay Son (Dai học Cong Doan)',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 259 Xã Đàn ',
                    STT:'6',
                    Gio: '13:15',
                    DiemDungEng: 'So 474 Xa Dan',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 81 Đại Cồ Việt ',
                    STT:'7',
                    Gio: '13:20',
                    DiemDungEng: 'So 81 Dai Co Viet ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 31 Thanh Nhàn  (Đối diện bệnh viện Thanh Nhàn) ',
                    STT:'8',
                    Gio: '13:28',
                    DiemDungEng: 'So 31 Thanh Nhan  (Doi dien benh vien Thanh Nhan) ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 256 Nguyễn Khoái ',
                    STT:'9',
                    Gio: '13:35',
                    DiemDungEng: 'So 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5)',
                    STT:'10',
                    Gio: '13:42',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5)',
                }
                ,

//--------------
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 255 Cầu Giấy',
                    STT:'1',
                    Gio: '14:00',
                    DiemDungEng: 'So 255 Cau Giay',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 521 Kim Mã (Toà nhà Handi Resco)',
                    STT:'2',
                    Gio: '14:04',
                    DiemDungEng: 'So 521 Kim Ma (Toa nha Handi Resco)',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Ngõ 12 Núi Trúc (Trường Quốc tế Pháp)',
                    STT:'3',
                    Gio: '14:11',
                    DiemDungEng: 'Ngo 12 Nui Truc (Truong Quoc te Phap)',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 165 Thái Hà ',
                    STT:'4',
                    Gio: '14:19',
                    DiemDungEng: 'So 165 Thai Ha ',

                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 169 Tây Sơn (Đại học Công đoàn)',
                    STT:'5',
                    Gio: '14:24',
                    DiemDungEng: 'So 169 Tay Son (Dai học Cong Doan)',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 259 Xã Đàn ',
                    STT:'6',
                    Gio: '14:39',
                    DiemDungEng: 'So 474 Xa Dan',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 81 Đại Cồ Việt ',
                    STT:'7',
                    Gio: '14:44',
                    DiemDungEng: 'So 81 Dai Co Viet ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 31 Thanh Nhàn  (Đối diện bệnh viện Thanh Nhàn) ',
                    STT:'8',
                    Gio: '14:52',
                    DiemDungEng: 'So 31 Thanh Nhan  (Doi dien benh vien Thanh Nhan) ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 256 Nguyễn Khoái ',
                    STT:'9',
                    Gio: '14:59',
                    DiemDungEng: 'So 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T004',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5)',
                    STT:'10',
                    Gio: '15:09',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5)',
                }
                ,

                /*---Tuyen 5---*/
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 634 đường Lĩnh Nam  (Gần ngã tư Lĩnh Nam) ',
                    STT:'1',
                    Gio: '6:15',
                    DiemDungEng: 'So 634 duong Linh Nam (Gan nga tu Linh Nam) ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Ngã tư Tam Trinh (Hướng lên cầu Thanh Trì) ',
                    STT:'2',
                    Gio: '6:20',
                    DiemDungEng: 'Nga tu Tam Trinh (Huong len cau Thanh Tri) ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Ngã 3 Pháp Vân (Showroom Toyota) ',
                    STT:'3',
                    Gio: '6:25',
                    DiemDungEng: 'Nga 3 Phap Van (Showroom Toyota) ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 85 Nguyễn Xiển',
                    STT:'4',
                    Gio: '6:30',
                    DiemDungEng: 'So 85 Nguyen Xien',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 231 Nguyễn Trãi',
                    STT:'5',
                    Gio: '6:35',
                    DiemDungEng: 'So 231 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 39 Nguyễn Trãi ',
                    STT:'6',
                    Gio: '6:40',
                    DiemDungEng: 'So 39 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 568 Đường Láng',
                    STT:'7',
                    Gio: '6:45',
                    DiemDungEng: 'So 568 Duong Lang',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 634 đường Lĩnh Nam  (Gần ngã tư Lĩnh Nam) ',
                    STT:'1',
                    Gio: '7:43',
                    DiemDungEng: 'So 634 duong Linh Nam (Gan nga tu Linh Nam) ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Ngã tư Tam Trinh (Hướng lên cầu Thanh Trì) ',
                    STT:'2',
                    Gio: '7:47',
                    DiemDungEng: 'Nga tu Tam Trinh (Huong len cau Thanh Tri) ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Ngã 3 Pháp Vân (Showroom Toyota) ',
                    STT:'3',
                    Gio: '7:53',
                    DiemDungEng: 'Nga 3 Phap Van (Showroom Toyota) ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 85 Nguyễn Xiển',
                    STT:'4',
                    Gio: '7:59',
                    DiemDungEng: 'So 85 Nguyen Xien',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 231 Nguyễn Trãi',
                    STT:'5',
                    Gio: '8:05',
                    DiemDungEng: 'So 231 Nguyen Trai',

                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 39 Nguyễn Trãi ',
                    STT:'6',
                    Gio: '8:13',
                    DiemDungEng: 'So 39 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 568 Đường Láng',
                    STT:'7',
                    Gio: '8:25',
                    DiemDungEng: 'So 568 Duong Lang',
                }
                ,
//-------------
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 634 đường Lĩnh Nam  (Gần ngã tư Lĩnh Nam) ',
                    STT:'1',
                    Gio: '8:23',
                    DiemDungEng: 'So 634 duong Linh Nam (Gan nga tu Linh Nam) ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Ngã tư Tam Trinh (Hướng lên cầu Thanh Trì) ',
                    STT:'2',
                    Gio: '8:29',
                    DiemDungEng: 'Nga tu Tam Trinh (Huong len cau Thanh Tri) ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Ngã 3 Pháp Vân (Showroom Toyota) ',
                    STT:'3',
                    Gio: '8:35',
                    DiemDungEng: 'Nga 3 Phap Van (Showroom Toyota) ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 85 Nguyễn Xiển',
                    STT:'4',
                    Gio: '8:49',
                    DiemDungEng: 'So 85 Nguyen Xien',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 231 Nguyễn Trãi',
                    STT:'5',
                    Gio: '8:55',
                    DiemDungEng: 'So 231 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 39 Nguyễn Trãi ',
                    STT:'6',
                    Gio: '9:03',
                    DiemDungEng: 'So 39 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 568 Đường Láng',
                    STT:'7',
                    Gio: '9:10',
                    DiemDungEng: 'So 568 Duong Lang',
                }
                ,
//-------------
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 634 đường Lĩnh Nam  (Gần ngã tư Lĩnh Nam) ',
                    STT:'1',
                    Gio: '8:30',
                    DiemDungEng: 'So 634 duong Linh Nam (Gan nga tu Linh Nam) ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Ngã tư Tam Trinh (Hướng lên cầu Thanh Trì) ',
                    STT:'2',
                    Gio: '8:35',
                    DiemDungEng: 'Nga tu Tam Trinh (Huong len cau Thanh Tri) ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Ngã 3 Pháp Vân (Showroom Toyota) ',
                    STT:'3',
                    Gio: '8:42',
                    DiemDungEng: 'Nga 3 Phap Van (Showroom Toyota) ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 85 Nguyễn Xiển',
                    STT:'4',
                    Gio: '8:49',
                    DiemDungEng: 'So 85 Nguyen Xien',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 231 Nguyễn Trãi',
                    STT:'5',
                    Gio: '8:57',
                    DiemDungEng: 'So 231 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 39 Nguyễn Trãi ',
                    STT:'6',
                    Gio: '9:10',
                    DiemDungEng: 'So 39 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 568 Đường Láng',
                    STT:'7',
                    Gio: '9:25',
                    DiemDungEng: 'So 568 Duong Lang',
                }
                ,

//-------------
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 634 đường Lĩnh Nam  (Gần ngã tư Lĩnh Nam) ',
                    STT:'1',
                    Gio: '9:13',
                    DiemDungEng: 'So 634 duong Linh Nam (Gan nga tu Linh Nam) ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Ngã tư Tam Trinh (Hướng lên cầu Thanh Trì) ',
                    STT:'2',
                    Gio: '9:25',
                    DiemDungEng: 'Nga tu Tam Trinh (Huong len cau Thanh Tri) ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Ngã 3 Pháp Vân (Showroom Toyota) ',
                    STT:'3',
                    Gio: '9:30',
                    DiemDungEng: 'Nga 3 Phap Van (Showroom Toyota) ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 85 Nguyễn Xiển',
                    STT:'4',
                    Gio: '9:47',
                    DiemDungEng: 'So 85 Nguyen Xien',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 231 Nguyễn Trãi',
                    STT:'5',
                    Gio: '9:56',
                    DiemDungEng: 'So 231 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 39 Nguyễn Trãi ',
                    STT:'6',
                    Gio: '10:09',
                    DiemDungEng: 'So 39 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 568 Đường Láng',
                    STT:'7',
                    Gio: '10:17',
                    DiemDungEng: 'So 568 Duong Lang',
                }
                ,
//-------------
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 634 đường Lĩnh Nam  (Gần ngã tư Lĩnh Nam) ',
                    STT:'1',
                    Gio: '12:00',
                    DiemDungEng: 'So 634 duong Linh Nam (Gan nga tu Linh Nam) ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Ngã tư Tam Trinh (Hướng lên cầu Thanh Trì) ',
                    STT:'2',
                    Gio: '12:09',
                    DiemDungEng: 'Nga tu Tam Trinh (Huong len cau Thanh Tri) ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Ngã 3 Pháp Vân (Showroom Toyota) ',
                    STT:'3',
                    Gio: '12:15',
                    DiemDungEng: 'Nga 3 Phap Van (Showroom Toyota) ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 85 Nguyễn Xiển',
                    STT:'4',
                    Gio: '12:29',
                    DiemDungEng: 'So 85 Nguyen Xien',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 231 Nguyễn Trãi',
                    STT:'5',
                    Gio: '12:35',
                    DiemDungEng: 'So 231 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 39 Nguyễn Trãi ',
                    STT:'6',
                    Gio: '12:43',
                    DiemDungEng: 'So 39 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 568 Đường Láng',
                    STT:'7',
                    Gio: '12:50',
                    DiemDungEng: 'So 568 Duong Lang',
                }
                ,
//-------------
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 634 đường Lĩnh Nam  (Gần ngã tư Lĩnh Nam) ',
                    STT:'1',
                    Gio: '13:13',
                    DiemDungEng: 'So 634 duong Linh Nam (Gan nga tu Linh Nam) ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Ngã tư Tam Trinh (Hướng lên cầu Thanh Trì) ',
                    STT:'2',
                    Gio: '13:20',
                    DiemDungEng: 'Nga tu Tam Trinh (Huong len cau Thanh Tri) ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Ngã 3 Pháp Vân (Showroom Toyota) ',
                    STT:'3',
                    Gio: '13:27',
                    DiemDungEng: 'Nga 3 Phap Van (Showroom Toyota) ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 85 Nguyễn Xiển',
                    STT:'4',
                    Gio: '13:39',
                    DiemDungEng: 'So 85 Nguyen Xien',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 231 Nguyễn Trãi',
                    STT:'5',
                    Gio: '13:45',
                    DiemDungEng: 'So 231 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 39 Nguyễn Trãi ',
                    STT:'6',
                    Gio: '13:53',
                    DiemDungEng: 'So 39 Nguyen Trai',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T005',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 568 Đường Láng',
                    STT:'7',
                    Gio: '14:05',
                    DiemDungEng: 'So 568 Duong Lang',
                }
                ,

                /*----Tuyen 6---*/

                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 340 Đường Láng',
                    STT:'1',
                    Gio: '6:53',
                    DiemDungEng: 'So 340 duonng Lang',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 122 Nguyễn Xiển ',
                    STT:'2',
                    Gio: '7:00',
                    DiemDungEng: 'So 122 Nguyen Xien ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Khách sạn Mường Thanh  (Mặt đường Nguyễn Xiển) ',
                    STT:'3',
                    Gio: '7:15',
                    DiemDungEng: 'Khach san Muong Thanh  (Mat duong Nguyen Xien) ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 1 Trần Thủ Độ ',
                    STT:'4',
                    Gio: '7:29',
                    DiemDungEng: 'So 1 Tran Thu Do ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Ngã tư Tam  Trinh ',
                    STT:'5',
                    Gio: '7:35',
                    DiemDungEng: 'Nga tu Tam  Trinh ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 1,Tổ 2  Phường Trần Phú ',
                    STT:'6',
                    Gio: '7:43',
                    DiemDungEng: 'So 1,To 2 phuong Tran Phu ',
                }
                ,
//------------

                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 340 Đường Láng',
                    STT:'1',
                    Gio: '7:33',
                    DiemDung: 'Số 340 Đường Láng',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 122 Nguyễn Xiển ',
                    STT:'2',
                    Gio: '7:40',
                    DiemDungEng: 'So 122 Nguyen Xien ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Khách sạn Mường Thanh  (Mặt đường Nguyễn Xiển) ',
                    STT:'3',
                    Gio: '7:57',
                    DiemDungEng: 'Khach san Muong Thanh  (Mat duong Nguyen Xien)',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 1 Trần Thủ Độ ',
                    STT:'4',
                    Gio: '8:09',
                    DiemDungEng: 'So 1 Tran Thu Do ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Ngã tư Tam  Trinh ',
                    STT:'5',
                    Gio: '8:15',
                    DiemDungEng: 'Nga tu Tam  Trinh ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 1,Tổ 2  Phường Trần Phú ',
                    STT:'6',
                    Gio: '8:33',
                    DiemDungEng: 'So 1,To 2 phuong Tran Phu ',

                }
                ,
//------------
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 340 Đường Láng',
                    STT:'1',
                    Gio: '8:00',
                    DiemDung: 'Số 340 Đường Láng',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 122 Nguyễn Xiển ',
                    STT:'2',
                    Gio: '8:10',
                    DiemDungEng: 'So 122 Nguyen Xien ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Khách sạn Mường Thanh  (Mặt đường Nguyễn Xiển) ',
                    STT:'3',
                    Gio: '8:20',
                    DiemDungEng: 'Khach san Muong Thanh  (Mat duong Nguyen Xien)',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 1 Trần Thủ Độ ',
                    STT:'4',
                    Gio: '8:29',
                    DiemDungEng: 'So 1 Tran Thu Do ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Ngã tư Tam  Trinh ',
                    STT:'5',
                    Gio: '8:35',
                    DiemDungEng: 'Nga tu Tam  Trinh ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 1,Tổ 2  Phường Trần Phú ',
                    STT:'6',
                    Gio: '8:47',
                    DiemDungEng: 'So 1,To 2 phuong Tran Phu ',

                }
                ,
//------------
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 340 Đường Láng',
                    STT:'1',
                    Gio: '8:33',
                    DiemDung: 'Số 340 Đường Láng',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 122 Nguyễn Xiển ',
                    STT:'2',
                    Gio: '8:40',
                    DiemDungEng: 'So 122 Nguyen Xien ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Khách sạn Mường Thanh  (Mặt đường Nguyễn Xiển) ',
                    STT:'3',
                    Gio: '8:47',
                    DiemDungEng: 'Khach san Muong Thanh  (Mat duong Nguyen Xien)',

                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 1 Trần Thủ Độ ',
                    STT:'4',
                    Gio: '8:59',
                    DiemDungEng: 'So 1 Tran Thu Do ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Ngã tư Tam  Trinh ',
                    STT:'5',
                    Gio: '9:05',
                    DiemDungEng: 'Nga tu Tam  Trinh ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 1,Tổ 2  Phường Trần Phú ',
                    STT:'6',
                    Gio: '9:13',
                    DiemDungEng: 'So 1,To 2 phuong Tran Phu ',
                }
                ,
//------------
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 340 Đường Láng',
                    STT:'1',
                    Gio: '9:00',
                    DiemDung: 'Số 340 Đường Láng',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 122 Nguyễn Xiển ',
                    STT:'2',
                    Gio: '9:10',
                    DiemDungEng: 'So 122 Nguyen Xien ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Khách sạn Mường Thanh  (Mặt đường Nguyễn Xiển) ',
                    STT:'3',
                    Gio: '9:17',
                    DiemDungEng: 'Khach san Muong Thanh  (Mat duong Nguyen Xien)',

                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 1 Trần Thủ Độ ',
                    STT:'4',
                    Gio: '9:29',
                    DiemDungEng: 'So 1 Tran Thu Do ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Ngã tư Tam  Trinh ',
                    STT:'5',
                    Gio: '9:35',
                    DiemDungEng: 'Nga tu Tam  Trinh ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 1,Tổ 2  Phường Trần Phú ',
                    STT:'6',
                    Gio: '9:48',
                    DiemDungEng: 'So 1,To 2 phuong Tran Phu ',
                }
                ,
//------------
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 340 Đường Láng',
                    STT:'1',
                    Gio: '11:00',
                    DiemDung: 'Số 340 Đường Láng',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 122 Nguyễn Xiển ',
                    STT:'2',
                    Gio: '11:10',
                    DiemDungEng: 'So 122 Nguyen Xien ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Khách sạn Mường Thanh  (Mặt đường Nguyễn Xiển) ',
                    STT:'3',
                    Gio: '11:23',
                    DiemDungEng: 'Khach san Muong Thanh  (Mat duong Nguyen Xien)',

                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 1 Trần Thủ Độ ',
                    STT:'4',
                    Gio: '11:38',
                    DiemDungEng: 'So 1 Tran Thu Do ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Ngã tư Tam  Trinh ',
                    STT:'5',
                    Gio: '11:45',
                    DiemDungEng: 'Nga tu Tam  Trinh ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 1,Tổ 2  Phường Trần Phú ',
                    STT:'6',
                    Gio: '11:53',
                    DiemDungEng: 'So 1,To 2 phuong Tran Phu ',
                }
                ,
//------------
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 340 Đường Láng',
                    STT:'1',
                    Gio: '12:00',
                    DiemDung: 'Số 340 Đường Láng',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 122 Nguyễn Xiển ',
                    STT:'2',
                    Gio: '12:10',
                    DiemDungEng: 'So 122 Nguyen Xien ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Khách sạn Mường Thanh  (Mặt đường Nguyễn Xiển) ',
                    STT:'3',
                    Gio: '12:18',
                    DiemDungEng: 'Khach san Muong Thanh  (Mat duong Nguyen Xien)',

                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 1 Trần Thủ Độ ',
                    STT:'4',
                    Gio: '12:29',
                    DiemDungEng: 'So 1 Tran Thu Do ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Ngã tư Tam  Trinh ',
                    STT:'5',
                    Gio: '12:35',
                    DiemDungEng: 'Nga tu Tam  Trinh ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 1,Tổ 2  Phường Trần Phú ',
                    STT:'6',
                    Gio: '12:47',
                    DiemDungEng: 'So 1,To 2 phuong Tran Phu ',
                }
                ,
//------------
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 340 Đường Láng',
                    STT:'1',
                    Gio: '13:13',
                    DiemDung: 'Số 340 Đường Láng',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 122 Nguyễn Xiển ',
                    STT:'2',
                    Gio: '13:20',
                    DiemDungEng: 'So 122 Nguyen Xien ',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Khách sạn Mường Thanh  (Mặt đường Nguyễn Xiển) ',
                    STT:'3',
                    Gio: '13:27',
                    DiemDungEng: 'Khach san Muong Thanh  (Mat duong Nguyen Xien)',

                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 1 Trần Thủ Độ ',
                    STT:'4',
                    Gio: '13:39',
                    DiemDungEng: 'So 1 Tran Thu Do ',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Ngã tư Tam  Trinh ',
                    STT:'5',
                    Gio: '13:45',
                    DiemDungEng: 'Nga tu Tam  Trinh ',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T006',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 1,Tổ 2  Phường Trần Phú ',
                    STT:'6',
                    Gio: '13:53',
                    DiemDungEng: 'So 1,To 2 phuong Tran Phu ',
                }
                ,
//------------


                /*---Tuyen 7-----*/

                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'1',
                    Gio: '6:58',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái ',
                    STT:'2',
                    Gio: '7:09',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'3',
                    Gio: '7:15',
                    DiemDungEng: 'So 63 Ly Thai To ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 8 Lê Thái Tổ',
                    STT:'4',
                    Gio: '7:33',
                    DiemDungEng: 'So 8 Le Thai To',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'1',
                    Gio: '7:15',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái ',
                    STT:'2',
                    Gio: '7:23',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'3',
                    Gio: '7:30',
                    DiemDungEng: 'So 63 Ly Thai To ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 8 Lê Thái Tổ',
                    STT:'4',
                    Gio: '7:43',
                    DiemDungEng: 'So 8 Le Thai To',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'1',
                    Gio: '7:35',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái ',
                    STT:'2',
                    Gio: '7:53',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'3',
                    Gio: '8:10',
                    DiemDungEng: 'So 63 Ly Thai To ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 8 Lê Thái Tổ',
                    STT:'4',
                    Gio: '8:23',
                    DiemDungEng: 'So 8 Le Thai To',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'1',
                    Gio: '8:00',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái ',
                    STT:'2',
                    Gio: '8:13',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'3',
                    Gio: '8:27',
                    DiemDungEng: 'So 63 Ly Thai To ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 8 Lê Thái Tổ',
                    STT:'4',
                    Gio: '8:39',
                    DiemDungEng: 'So 8 Le Thai To',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'1',
                    Gio: '9:00',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái ',
                    STT:'2',
                    Gio: '9:13',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'3',
                    Gio: '9:20',
                    DiemDungEng: 'So 63 Ly Thai To ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 8 Lê Thái Tổ',
                    STT:'4',
                    Gio: '9:33',
                    DiemDungEng: 'So 8 Le Thai To',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'1',
                    Gio: '9:45',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái ',
                    STT:'2',
                    Gio: '9:58',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'3',
                    Gio: '10:10',
                    DiemDungEng: 'So 63 Ly Thai To ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 8 Lê Thái Tổ',
                    STT:'4',
                    Gio: '10:23',
                    DiemDungEng: 'So 8 Le Thai To',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'1',
                    Gio: '12:00',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái ',
                    STT:'2',
                    Gio: '12:13',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'3',
                    Gio: '12:30',
                    DiemDungEng: 'So 63 Ly Thai To ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 8 Lê Thái Tổ',
                    STT:'4',
                    Gio: '12:43',
                    DiemDungEng: 'So 8 Le Thai To',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'1',
                    Gio: '14:15',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái ',
                    STT:'2',
                    Gio: '14:29',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'3',
                    Gio: '14:40',
                    DiemDungEng: 'So 63 Ly Thai To ',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 8 Lê Thái Tổ',
                    STT:'4',
                    Gio: '14:53',
                    DiemDungEng: 'So 8 Le Thai To',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C009',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #9',
                    DiemDung: 'Trước cửa Aeon Mall Long Biên',
                    STT:'1',
                    Gio: '15:00',
                    DiemDungEng: 'Truoc cua Aeon Mall Long Bien',
                }
                ,
                {
                    MaChuyen: 'C009',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #9',
                    DiemDung: 'Đối diện 256 Nguyễn Khoái ',
                    STT:'2',
                    Gio: '15:13',
                    DiemDungEng: 'Doi dien 256 Nguyen Khoai ',
                }
                ,
                {
                    MaChuyen: 'C009',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #9',
                    DiemDung: 'Số 63 Lý Thái Tổ',
                    STT:'3',
                    Gio: '15:20',
                    DiemDungEng: 'So 63 Ly Thai To ',
                }
                ,
                {
                    MaChuyen: 'C009',
                    MaTuyen: 'T007',
                    TenChuyen: 'Chuyến #9',
                    DiemDung: 'Số 8 Lê Thái Tổ',
                    STT:'4',
                    Gio: '15:43',
                    DiemDungEng: 'So 8 Le Thai To',
                }
                ,
//-----------------

                /*----Tuyen 8----*/

                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 32 Lê Thái Tổ',
                    STT:'1',
                    Gio: '7:00',
                    DiemDungEng: 'So 32 Le Thai To',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 1 Tràng Tiền (Nhà Hát Lớn)',
                    STT:'2',
                    Gio: '7:13',
                    DiemDungEng: 'So 1 Trang Tien (Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '7:20',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5) ',
                    STT:'4',
                    Gio: '7:43',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5) ',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 32 Lê Thái Tổ',
                    STT:'1',
                    Gio: '7:20',
                    DiemDungEng: 'So 32 Le Thai To',

                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 1 Tràng Tiền (Nhà Hát Lớn)',
                    STT:'2',
                    Gio: '7:33',
                    DiemDungEng: 'So 1 Trang Tien (Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '7:40',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5) ',
                    STT:'4',
                    Gio: '7:53',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5) ',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 32 Lê Thái Tổ',
                    STT:'1',
                    Gio: '8:00',
                    DiemDungEng: 'So 32 Le Thai To',

                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 1 Tràng Tiền (Nhà Hát Lớn)',
                    STT:'2',
                    Gio: '8:10',
                    DiemDungEng: 'So 1 Trang Tien (Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '8:17',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5) ',
                    STT:'4',
                    Gio: '8:33',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5) ',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 32 Lê Thái Tổ',
                    STT:'1',
                    Gio: '8:15',
                    DiemDungEng: 'So 32 Le Thai To',

                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 1 Tràng Tiền (Nhà Hát Lớn)',
                    STT:'2',
                    Gio: '8:23',
                    DiemDungEng: 'So 1 Trang Tien (Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '8:30',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5) ',
                    STT:'4',
                    Gio: '8:43',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5) ',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 32 Lê Thái Tổ',
                    STT:'1',
                    Gio: '9:00',
                    DiemDungEng: 'So 32 Le Thai To',

                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 1 Tràng Tiền (Nhà Hát Lớn)',
                    STT:'2',
                    Gio: '9:13',
                    DiemDungEng: 'So 1 Trang Tien (Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '9:20',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5) ',
                    STT:'4',
                    Gio: '9:43',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5) ',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 32 Lê Thái Tổ',
                    STT:'1',
                    Gio: '9:10',
                    DiemDungEng: 'So 32 Le Thai To',

                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 1 Tràng Tiền (Nhà Hát Lớn)',
                    STT:'2',
                    Gio: '9:33',
                    DiemDungEng: 'So 1 Trang Tien (Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '9:40',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5) ',
                    STT:'4',
                    Gio: '9:48',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5) ',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 32 Lê Thái Tổ',
                    STT:'1',
                    Gio: '13:00',
                    DiemDungEng: 'So 32 Le Thai To',

                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 1 Tràng Tiền (Nhà Hát Lớn)',
                    STT:'2',
                    Gio: '13:13',
                    DiemDungEng: 'So 1 Trang Tien (Nha Hat Lon)',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 256 Nguyễn Khoái',
                    STT:'3',
                    Gio: '13:20',
                    DiemDungEng: 'So 256 Nguyen Khoai',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T008',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Cổng sau Aeon Mall – Đường Himlam Sakura (Trước bãi đỗ xe C5) ',
                    STT:'4',
                    Gio: '13:43',
                    DiemDungEng: 'Cong sau Aeon Mall – Duong Himlam Sakura (Truoc bai do xe C5) ',
                }
                ,
//-----------------


                /*------Tuyen 9-----*/
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 249 - Nguyễn Văn Linh ',
                    STT:'1',
                    Gio: '6:58',
                    DiemDungEng: 'So 249 - Nguyen Van Linh ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 459 Nguyễn Văn Cừ ',
                    STT:'2',
                    Gio: '7:13',
                    DiemDungEng: 'So 459 Nguyen Van Cu ',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Trước số 56 Hồng Hà',
                    STT:'3',
                    Gio: '7:28',
                    DiemDungEng: 'Truoc so 56 Hong Ha',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 26 Nghi Tàm',
                    STT:'4',
                    Gio: '7:43',
                    DiemDungEng: 'So 26 Nghi Tam',
                }
                ,
                {
                    MaChuyen: 'C001',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #1',
                    DiemDung: 'Số 236 Âu Cơ',
                    STT:'5',
                    Gio: '7:43',
                    DiemDungEng: 'So 236 Au Co',
                }
                ,
//-----------------

                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 249 - Nguyễn Văn Linh ',
                    STT:'1',
                    Gio: '7:37',
                    DiemDungEng: 'So 249 - Nguyen Van Linh ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 459 Nguyễn Văn Cừ ',
                    STT:'2',
                    Gio: '7:53',
                    DiemDungEng: 'So 459 Nguyen Van Cu ',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Trước số 56 Hồng Hà',
                    STT:'3',
                    Gio: '8:14',
                    DiemDungEng: 'Truoc so 56 Hong Ha',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 26 Nghi Tàm',
                    STT:'4',
                    Gio: '8:23',
                    DiemDungEng: 'So 26 Nghi Tam',
                }
                ,
                {
                    MaChuyen: 'C002',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #2',
                    DiemDung: 'Số 236 Âu Cơ',
                    STT:'5',
                    Gio: '8:43',
                    DiemDungEng: 'So 236 Au Co',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 249 - Nguyễn Văn Linh ',
                    STT:'1',
                    Gio: '9:00',
                    DiemDungEng: 'So 249 - Nguyen Van Linh ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 459 Nguyễn Văn Cừ ',
                    STT:'2',
                    Gio: '9:13',
                    DiemDungEng: 'So 459 Nguyen Van Cu ',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Trước số 56 Hồng Hà',
                    STT:'3',
                    Gio: '9:24',
                    DiemDungEng: 'Truoc so 56 Hong Ha',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 26 Nghi Tàm',
                    STT:'4',
                    Gio: '9:43',
                    DiemDungEng: 'So 26 Nghi Tam',
                }
                ,
                {
                    MaChuyen: 'C003',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #3',
                    DiemDung: 'Số 236 Âu Cơ',
                    STT:'5',
                    Gio: '9:53',
                    DiemDungEng: 'So 236 Au Co',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 249 - Nguyễn Văn Linh ',
                    STT:'1',
                    Gio: '10:00',
                    DiemDungEng: 'So 249 - Nguyen Van Linh ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 459 Nguyễn Văn Cừ ',
                    STT:'2',
                    Gio: '10:13',
                    DiemDungEng: 'So 459 Nguyen Van Cu ',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Trước số 56 Hồng Hà',
                    STT:'3',
                    Gio: '10:20',
                    DiemDungEng: 'Truoc so 56 Hong Ha',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 26 Nghi Tàm',
                    STT:'4',
                    Gio: '10:43',
                    DiemDungEng: 'So 26 Nghi Tam',
                }
                ,
                {
                    MaChuyen: 'C004',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #4',
                    DiemDung: 'Số 236 Âu Cơ',
                    STT:'5',
                    Gio: '11:00',
                    DiemDungEng: 'So 236 Au Co',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 249 - Nguyễn Văn Linh ',
                    STT:'1',
                    Gio: '12:00',
                    DiemDungEng: 'So 249 - Nguyen Van Linh ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 459 Nguyễn Văn Cừ ',
                    STT:'2',
                    Gio: '12:13',
                    DiemDungEng: 'So 459 Nguyen Van Cu ',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Trước số 56 Hồng Hà',
                    STT:'3',
                    Gio: '12:20',
                    DiemDungEng: 'Truoc so 56 Hong Ha',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 26 Nghi Tàm',
                    STT:'4',
                    Gio: '12:43',
                    DiemDungEng: 'So 26 Nghi Tam',
                }
                ,
                {
                    MaChuyen: 'C005',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #5',
                    DiemDung: 'Số 236 Âu Cơ',
                    STT:'5',
                    Gio: '12:53',
                    DiemDungEng: 'So 236 Au Co',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 249 - Nguyễn Văn Linh ',
                    STT:'1',
                    Gio: '13:10',
                    DiemDungEng: 'So 249 - Nguyen Van Linh ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 459 Nguyễn Văn Cừ ',
                    STT:'2',
                    Gio: '13:13',
                    DiemDungEng: 'So 459 Nguyen Van Cu ',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Trước số 56 Hồng Hà',
                    STT:'3',
                    Gio: '13:20',
                    DiemDungEng: 'Truoc so 56 Hong Ha',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 26 Nghi Tàm',
                    STT:'4',
                    Gio: '13:43',
                    DiemDungEng: 'So 26 Nghi Tam',
                }
                ,
                {
                    MaChuyen: 'C006',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #6',
                    DiemDung: 'Số 236 Âu Cơ',
                    STT:'5',
                    Gio: '13:58',
                    DiemDungEng: 'So 236 Au Co',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 249 - Nguyễn Văn Linh ',
                    STT:'1',
                    Gio: '14:20',
                    DiemDungEng: 'So 249 - Nguyen Van Linh ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 459 Nguyễn Văn Cừ ',
                    STT:'2',
                    Gio: '14:33',
                    DiemDungEng: 'So 459 Nguyen Van Cu ',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Trước số 56 Hồng Hà',
                    STT:'3',
                    Gio: '14:40',
                    DiemDungEng: 'Truoc so 56 Hong Ha',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 26 Nghi Tàm',
                    STT:'4',
                    Gio: '14:53',
                    DiemDungEng: 'So 26 Nghi Tam',
                }
                ,
                {
                    MaChuyen: 'C007',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #7',
                    DiemDung: 'Số 236 Âu Cơ',
                    STT:'5',
                    Gio: '15:03',
                    DiemDungEng: 'So 236 Au Co',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 249 - Nguyễn Văn Linh ',
                    STT:'1',
                    Gio: '15:00',
                    DiemDungEng: 'So 249 - Nguyen Van Linh ',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 459 Nguyễn Văn Cừ ',
                    STT:'2',
                    Gio: '15:09',
                    DiemDungEng: 'So 459 Nguyen Van Cu ',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Trước số 56 Hồng Hà',
                    STT:'3',
                    Gio: '15:18',
                    DiemDungEng: 'Truoc so 56 Hong Ha',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 26 Nghi Tàm',
                    STT:'4',
                    Gio: '15:33',
                    DiemDungEng: 'So 26 Nghi Tam',
                }
                ,
                {
                    MaChuyen: 'C008',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #8',
                    DiemDung: 'Số 236 Âu Cơ',
                    STT:'5',
                    Gio: '15:44',
                    DiemDungEng: 'So 236 Au Co',
                }
                ,
//-----------------
                {
                    MaChuyen: 'C009',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #9',
                    DiemDung: 'Số 249 - Nguyễn Văn Linh ',
                    STT:'1',
                    Gio: '16:00',
                    DiemDungEng: 'So 249 - Nguyen Van Linh ',
                }
                ,
                {
                    MaChuyen: 'C009',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #9',
                    DiemDung: 'Số 459 Nguyễn Văn Cừ ',
                    STT:'2',
                    Gio: '16:13',
                    DiemDungEng: 'So 459 Nguyen Van Cu ',
                }
                ,
                {
                    MaChuyen: 'C009',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #9',
                    DiemDung: 'Trước số 56 Hồng Hà',
                    STT:'3',
                    Gio: '16:20',
                    DiemDungEng: 'Truoc so 56 Hong Ha',
                }
                ,
                {
                    MaChuyen: 'C009',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #9',
                    DiemDung: 'Số 26 Nghi Tàm',
                    STT:'4',
                    Gio: '16:43',
                    DiemDungEng: 'So 26 Nghi Tam',
                }
                ,
                {
                    MaChuyen: 'C009',
                    MaTuyen: 'T009',
                    TenChuyen: 'Chuyến #9',
                    DiemDung: 'Số 236 Âu Cơ',
                    STT:'5',
                    Gio: '16:53',
                    DiemDungEng: 'So 236 Au Co',
                }
                ,

            ]
            ;
        _.each(dataChuyen, function (post) {
            Chuyen.insert(post);
        });
    }


});