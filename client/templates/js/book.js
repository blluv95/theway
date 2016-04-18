Template.book.helpers({
    'dsNhaXe': function () {
        return NhaXe.find();
    },

});

var lTo = {};
var lFrom = {}
Template.book.events({
    'click #button_book': function (event) {
        event.preventDefault();
        console.log("click dat ve");
        var id = this._id;
        console.log(id);
        var data = ViewBook2.findOne({_id: id});
        console.log(data);


        var txtTall = $('[id=input_slTall]').val();
        var txtChild = $('[id=input_slChild]').val();
        var txtChilden = $('[id=input_slChildren]').val();
        var txtDate = $('[id=date_go]').val();
        var t1 = new Number(txtTall);
        var t2 = new Number(txtChild);
        var t3 = new Number(txtChilden);
        var total = t1 + t2 + t3;
        var SL = data.Null;
        console.log("~~~~~~>");
        console.log(txtDate);
        console.log(total);
        console.log(data.DiemDung);
        console.log(data.DiemKT);
        console.log(data.Ma);
        console.log(data.Gio);
        console.log(data.MaChuyen);
        console.log(data.MaTuyen);
        console.log(new Date());
        if (SL < total) {
            alert("Số lượng ghế không đủ .Vui lòng chọn chuyến khác!");
        } else {
            Meteor.call('insertDatVe', data.MaChuyen, data.MaTuyen, new Date(), txtDate, data.Gio, "", data.Ma, data.DiemDung, data.DiemKT, total);
            Session.set("tenxe", data.TenXe);
            Session.set("tenchuyen", data.TenChuyen);
            Session.set("diembatdau", data.DiemDung);
            Session.set("diemketthuc", data.DiemKT);
            Session.set("gio", data.Gio);
            Session.set("slnguoilon", txtTall);
            Session.set("slnguoilon_money", 10000);
            Session.set("sltreem", txtChilden);
            Session.set("sltreem_money", 7000);
            Session.set("slembe_money", 5000);
            Session.set("slembe", txtChild);
            Session.set("total", total);
            alert("Chúc mừng bạn đã đặt vé thành công!");
            Router.go('datvethanhcong');
        }
    },

    'click #btnSubmit': function (event) {
        event.preventDefault();
        Meteor.call('removeAllBook');
        Meteor.call('removeAllBook2');
        var count1 = ViewBook1.find().count();
        var count2 = ViewBook2.find().count();
        console.log("--->");
        console.log(count1);
        console.log(count2);
        console.log("---->")
        var to = $("#select_lTo :selected").text();
        var from = $("#select_lFrom :selected").text();
        var txtNhaXe = $('[id=select_dsNhaXe]').val();

        var txtDate = $('[id=date_go]').val();
        var txtTall = $('[id=input_slTall]').val();
        var txtChild = $('[id=input_slChild]').val();
        var txtChilden = $('[id=input_slChildren]').val();
        console.log("------------------");
        console.log(to);
        console.log(from);
        console.log(txtNhaXe);
        console.log(txtDate);
        console.log(txtTall);
        console.log(txtChilden);
        console.log(txtChild);
        if (txtTall > 10) {
            alert("Số lượng người quá mức cho phép!");
            return;
        }
        if (txtChild > 2) {
            alert("Số lượng người quá mức cho phép!");
            return;
        }
        if (txtChilden > 10) {
            alert("Số lượng người quá mức cho phép!");
            return;
        }

        var begin = Chuyen.findOne({DiemDung: to}).STT;
        var end = Chuyen.findOne({DiemDung: from}).STT;

        console.log(begin);
        console.log(end);

        var data = Chuyen.find({DiemDung: to}).fetch();
        console.log("data.length---->");
        console.log(data);
        console.log(data.length);


        for (var ii = 0; ii < data.length; ii++) {
            console.log("ii--->+++++++++++++++++++++++++++++++");
            console.log(ii);
            var data1 = Chuyen.findOne({MaChuyen: data[ii].MaChuyen, MaTuyen: data[ii].MaTuyen, DiemDung: from});
            console.log("data1--->");
            console.log(data1);
            if (data1 == undefined) {
                // console.log("====== null");
            }
            else {
                console.log("======");
                console.log(data[ii]);
                console.log(data1);
                var stt_start = data[ii].STT;
                var stt_end = data1.STT;
                console.log(stt_start);
                console.log(stt_end);
                console.log("======");
                var MaXe = Xe_Chuyen.findOne({MaChuyen: data1.MaChuyen, MaTuyen: data1.MaTuyen});
                console.log(MaXe);
                var Ma = MaXe.Ma;
                var MX = MaXe.MaXe;
                // // console.log("Ma---->" + Ma);
                var SoGhe = Xe.findOne({MaXe: MaXe.MaXe}).SoGhe;
                // console.log(SoGhe);
                // console.log("()----->");
                //
                var AllDiemDung = Chuyen.find({MaChuyen: MaXe.MaChuyen, MaTuyen: MaXe.MaTuyen}).fetch();
                console.log(AllDiemDung);
                // console.log("============");

                for (var j = stt_start; j < stt_end; j++) {
                    for (var i = 0; i < AllDiemDung.length; i++) {
                        console.log("jjjjjjjjjjjjjjjj->");
                        console.log(j);
                        console.log(i);
                        console.log(AllDiemDung[i].STT);
                        if (AllDiemDung[i].STT == j) {
                            console.log("STT ------>{}");
                            console.log(AllDiemDung[i]);
                            var Gio = AllDiemDung[i].Gio;
                            var DD = AllDiemDung[i].DiemDung;
                            //
                            var dataNull = ChoTrong.findOne({Ma: Ma, DiemDung: DD});
                            console.log("data null----->");
                            if(txtNhaXe=="Tất cả"){
                                txtNhaXe=Xe.findOne({MaXe:MX}).TenXe;
                                console.log(txtNhaXe);
                            }
                            console.log(dataNull);
                            if (dataNull == undefined) {
                                console.log("chua khoi tao cho chong!");
                                Meteor.call("insertNull", MX, SoGhe, DD, Gio, Ma, from);
                                ViewBook1.insert({
                                    TenXe: txtNhaXe,
                                    TenChuyen: AllDiemDung[i].TenChuyen,
                                    MaChuyen: AllDiemDung[i].MaChuyen,
                                    MaTuyen: AllDiemDung[i].MaTuyen,
                                    MaXe: MX,
                                    Null: SoGhe,
                                    DiemDung: DD,
                                    Gio: Gio,
                                    Ngay: new Date(),
                                    Ma: Ma,
                                    DiemKT: from,
                                    Gia: "10.000 đ"
                                });
                            }
                            else {
                                console.log("Da khoi tao cho chong!");
                                console.log(Ma);
                                console.log(DD);
                                var data1 = ChoTrong.findOne({Ma: Ma, DiemDung: DD});
                                console.log(data1);
                                console.log(txtNhaXe);
                                console.log(AllDiemDung[i].TenChuyen);
                                console.log(data1.MaXe);
                                console.log(data1.Null);
                                console.log(data1.DiemDung);
                                console.log(data1.Gio);
                                console.log(data1.Ngay);
                                console.log(data1.Ma);
                                console.log(from);

                                ViewBook1.insert({
                                    TenXe: txtNhaXe,
                                    TenChuyen: AllDiemDung[i].TenChuyen,
                                    MaChuyen: AllDiemDung[i].MaChuyen,
                                    MaTuyen: AllDiemDung[i].MaTuyen,
                                    MaXe: data1.MaXe,
                                    Null: data1.Null,
                                    DiemDung: data1.DiemDung,
                                    Gio: data1.Gio,
                                    Ngay: data1.Ngay,
                                    Ma: data1.Ma,
                                    DiemKT: from,
                                    Gia: "10.000 đ"
                                });
                                //                 //todo del ViewBook khi tim kiem cho trong.
                                //             }
                            }
                        }
                    }


                    //
                    var pp = ViewBook1.find({DiemDung: to, DiemKT: from}).fetch();
                    console.log("pp----------->");
                    console.log(to);
                    console.log(from);
                    console.log(pp);
                    for (var i2 = 0; i2 < pp.length; i2++) {
                        console.log("insert---->");
                        ViewBook2.insert(pp[i2]);
                    }

                    //d1 chứa số trống từ những điểm dừng trong khoảng khách đặt . find choTrong nho nhat
                    var d1 = ViewBook2.find().fetch();
                    for (var i3 = 0; i3 < d1.length; i3++) {
                        if (d1[i3].DiemDung == from) {

                        } else {
                            console.log(d1[i3].MaChuyen);
                            console.log(d1[i3].MaTuyen);
                            console.log(d1[i3].Ma);
                            var id = d1[i3]._id;
                            var machuyen = d1[i3].MaChuyen;
                            var matuyen = d1[i3].MaTuyen;
                            var ma = d1[i3].Ma;
                            var d2 = ViewBook1.find({Ma: ma, MaChuyen: machuyen, MaTuyen: matuyen}).fetch();
                            var min = d2[0].Null;
                            for (var i4 = 0; i4 < d2.length; i4++) {
                                if (min > d2[i4].Null) {
                                    min = d2[i4].Null;
                                }
                            }
                            console.log(min);
                            //update sl tai ma ,chuyen ,tuyen;
                            ViewBook2.update({_id: id}, {$set: {Null: min}});
                        }
                    }
                }
                // console.log("p---->");
            }
            console.log("end for-------------------------->");
        }
        $("#resultBook").css('visibility', 'visible');
    },
    'change #select_dsNhaXe': function () {
        $('#select_lTo')[0].options.length = 1;
        var txtNhaXe = $('[id=select_dsNhaXe]').val();
        var index = $("#select_dsNhaXe option:selected").index();
        var c=0;
        if (index == 1) {
            var AllMaNX = NhaXe.find().fetch();
            for (var i = 0; i < AllMaNX.length; i++) {
        console.log("i--->"+i);
                var AllMaTuyen = Tuyen.find({MaNhaXe: AllMaNX[i].MaNhaXe}).fetch();
                for (var i1 = 0; i1 < AllMaTuyen.length; i1++) {
                    console.log("i1---->"+i1);
                    var dbChuyen = Chuyen.find({MaTuyen: AllMaTuyen[i1].MaTuyen, MaChuyen: "C001"}).fetch();
                    for (var i3 = 0; i3 < dbChuyen.length; i3++) {
                        console.log("i3---->"+i3);
                        lTo[c] = dbChuyen[i3].STT;
                        if (i3 == (dbChuyen.length - 1)) {
                            console.log("del :" + dbChuyen[i3].DiemDung);
                        } else
                            $("#select_lTo").append(new Option(dbChuyen[i3].DiemDung, dbChuyen[i3].MaTuyen));
                        c++;
                    }
                }
            }

            //******************************************************************************
        } else {
            Meteor.call('fillfull');
        }

    },
    'change #select_lTo': function () {
        console.log("change");
        var to_value = $('[id=select_lTo]').val();
        var to_text = $("#select_lTo :selected").text();
        var to_text_from = $("#select_lFrom :selected").text();

        var index_to = $("#select_lTo option:selected").index()
        var index_from = $("#select_lFrom option:selected").index()

        console.log(index_to);
        console.log(index_from);

        if (index_from == 0) {
            Session.set("checkTo", 1); //check to
            console.log("1--->")
        }


        if (index_from != 0 && Session.get("checkTo") === 2) {
            console.log("null--->");
        }
        if (Session.get("checkTo") === 1 && index_to === 0) {
//load full from
            Meteor.call('fillfull');
        }
        else {
            $('#select_lFrom')[0].options.length = 1;
            var STT = Chuyen.findOne({MaTuyen: to_value, DiemDung: to_text}).STT;
            var data = Chuyen.find({MaTuyen: to_value, MaChuyen: "C001"}).fetch();
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                if (data[i].STT > STT) {
                    $("#select_lFrom").append(new Option(data[i].DiemDung, data[i].MaTuyen));
                }
            }
        }
    },
    'change #select_lFrom': function () {
        console.log("change--->");

        var to_value = $('[id=select_lFrom]').val();
        var to_text = $("#select_lFrom :selected").text();
        var to_text_to = $("#select_lTo :selected").text();

        var index_to = $("#select_lTo option:selected").index()
        var index_from = $("#select_lFrom option:selected").index()

        console.log(index_to);
        console.log(index_from);

        if (index_to === 0) {
            Session.set("checkTo", 2); //check to
            console.log("2--->");
        }


        // if (index_to != 0 && Session.get("checkTo") === 1) {
        //     console.log("khong lam gi--->");
        // } else {
        //     $('#select_lTo')[0].options.length = 1;
        //     var STT = Chuyen.findOne({MaTuyen: to_value, DiemDung: to_text}).STT;
        //     var data = Chuyen.find({MaTuyen: to_value, MaChuyen: "C001"}).fetch();
        //     console.log(data);
        //     for (var i = 0; i < data.length; i++) {
        //         if (data[i].STT < STT) {
        //         d    $("#select_lTo").append(new Option(data[i].DiemDung, data[i].MaTuyen));
        //         }
        //     }
        // }
    }
});


//----------------------------------------

Template.resultBook.rendered = function () {
    if (!this._rendered) {
        this._rendered = true;
        console.log('Template onLoad');
        Meteor.call('removeAllBook');
        Meteor.call('removeAllBook2');

        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);

        var today = now.getFullYear() + "-" + (month) + "-" + (day);
        $('#date_go').val(today);
    }
}


Template.resultBook.helpers({
    listVRS: function () {
        return ViewBook2.find();
    }
});


Meteor.methods({
    'fillfull': function () {
        console.log("fillllllllllllllll->>>>>>>>>>");
        console.log("change");
        $('#select_lFrom')[0].options.length = 1;
        var listTuyen = new ReactiveList({
            sort: function (a, b) {
                return a.key < b.key;
            }
        });
        var txtMaNX;
        var txtNhaXe = $('[id=select_dsNhaXe]').val();
        // if (txtMaNX == "") {
        //     //todo
        //     txtMaNX = NhaXe.find().fetch();
        //     console.log(txtMaNX);
        // } else

        txtMaNX = NhaXe.findOne({TenNhaXe: txtNhaXe}).MaNhaXe;

        var txtMaNX_Tuyen = Tuyen.find({MaNhaXe: txtMaNX}).fetch();

        for (var i = 0; i < txtMaNX_Tuyen.length; i++) {
            listTuyen.insert(i, {text: txtMaNX_Tuyen[i].MaTuyen});
        }

        var count = 0;
        listTuyen.forEach(function (value, key) {
            console.log('GOT: ' + value.text);
            var dbChuyen = Chuyen.find({MaTuyen: value.text, MaChuyen: "C001"}).fetch();
            for (var i = 0; i < dbChuyen.length; i++) {
                lTo[count] = dbChuyen[i].STT;
                if (i == (dbChuyen.length - 1)) {
                    console.log("del :" + dbChuyen[i].DiemDung);
                } else
                    $("#select_lTo").append(new Option(dbChuyen[i].DiemDung, dbChuyen[i].MaTuyen));

                console.log(lTo[count]);
                count++;
            }
            console.log(dbChuyen);
        }, true);

        console.log(lTo);

        console.log("you click button");
    }
});

