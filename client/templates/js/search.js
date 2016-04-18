Router.route('/result/', {
    Template: 'result',
    name: 'result',
    data: function () {
        console.log("this page register");
    }
});

var data = {};
var tentuyen;
Template.search.events({
    'click button': function (event) {
        event.preventDefault();

        Meteor.call('removeAllPosts');
        var txtDiemdung = $('[name=input_diemdung_search]').val();
        console.log("-------------->");
        console.log(txtDiemdung);
        var txtNhaXe = $('[id=select_dsNhaXe]').val();
        // console.log(txtNhaXe);
        var from = $('[id=from]').val();
        var to = $('[id=to]').val();
        var f;
        if (from.substr(0, 1) == "0") {
            f = from.substr(1, 1) + from.substr(3, 5);
            // console.log(from.substr(1, 1));
            // console.log(from.substr(3, 5));
        } else {
            f = from.substr(0, 2) + from.substr(3, 5);
        }

        var t;
        if (to.substr(0, 1) == "0")
            t = to.substr(1, 1) + to.substr(3, 5);
        else {
            t = to.substr(0, 2) + to.substr(3, 5);
        }

        // console.log(f);
        // console.log(t);
        $("#result").css('visibility', 'visible');
        // var rs = Chuyen.find({DiemDung: new RegExp(txtDiemdung)}).fetch();

        var rs = Chuyen.find({
            $or: [{DiemDung: new RegExp(txtDiemdung)},
                {DiemDungEng: new RegExp(txtDiemdung)}
            ]
        }).fetch();
        // console.log(rs);
        for (var i = 0; i < rs.length; i++) {
            // console.log(rs[i].MaTuyen);
            var listTuyen = Tuyen.findOne({MaTuyen: rs[i].MaTuyen});
            // console.log(listTuyen.TenTuyen);
            // console.log(listTuyen.MaNhaXe);
            var NX = NhaXe.findOne({MaNhaXe: listTuyen.MaNhaXe}).TenNhaXe;

            var time = rs[i].Gio;
            // console.log("--->"+rs[i].Gio);
            // console.log("-------------------");
            if (time.length == 5)
                time = time.substr(0, 2) + time.substr(3, 5);
            else {
                time = time.substr(0, 1) + time.substr(2, 4);
            }
            if (f == "") f = 0;
            if (t == "") t = 2399;
            // console.log("=====");
            // console.log(f);
            // console.log(t);
            // console.log(time);
            var time1 = new Number(time);
            var f1 = new Number(f);
            var t1 = new Number(t);
            if (f1 <= time1 && time1 <= t1) {
                // console.log("insert rs[i].Gio :"+rs[i].Gio);
                // console.log(NX);
                // console.log(listTuyen.TenTuyen);
                // console.log(rs[i].DiemDung);
                // console.log(rs[i].Gio);
                // console.log(rs[i].TenChuyen);
                var sr = parseInt(rs[i].STT, 10);
                // console.log(sr);
                var id = Result.insert({
                    NhaXe: NX,
                    TenTuyen: listTuyen.TenTuyen,
                    DiemDung: rs[i].DiemDung,
                    Gio: rs[i].Gio,
                    TenChuyen: rs[i].TenChuyen,
                    STT: sr,
                    listGio: []
                });
                // console.log("1"+NX);
                // console.log("2"+txtNhaXe);

                if (txtNhaXe == "Tất Cả") {

                } else if (txtNhaXe === NX) {
                    // console.log("----------->>>>");

                } else {
                    // console.log("-111---------->>>>");

                    Result.remove(id);
                }
            }
        }


       //
        var lData = Result.find({}, {sort: {NhaXe: 1,DiemDung: 1 ,TenChuyen:1,NhaXe:1}}).fetch();
        console.log(lData);
        var lNX = lData[0].NhaXe;
        var lTuyen = lData[0].TenTuyen;
        var lDiemDung = lData[0].DiemDung;
        var change = 0;
        var id = lData[0]._id;
        var gio = lData[0].Gio;
        console.log("------------------>")
        console.log(id);
        console.log(lNX);
        console.log(lTuyen);
        console.log(lDiemDung);
        console.log(change);
        console.log(gio);
       Result.update({"_id": lData[0]._id}, {
            $push: {
                listGio: {
                    Time: gio
                }
            }
        });
        console.log("one------------>");
        console.log(lData);
        //
        for (var j = 1; j < lData.length; j++) {
            console.log(lData[j]);
            if (lData[j].NhaXe == lNX && lData[j].DiemDung == lDiemDung && lData[j].TenTuyen == lTuyen) {
                // console.log("update0--------->");
                var de = Result.update({"_id": id}, {
                    $push: {
                        listGio: {
                            Time: lData[j].Gio
                        }
                    }
                });
                Result.remove(lData[j]._id);
            } else {
                // console.log("update1--------->");
        //
                change = j;
                id = lData[j]._id;
                lDiemDung=lData[j].DiemDung;
                lNX = lData[j].NhaXe;
                lTuyen = lData[j].TenTuyen;
        //
                Result.update({"_id": id}, {
                    $push: {
                        listGio: {
                            Time: lData[change].Gio
                        }
                    }
                });
            }
        }
        var out = Result.find({}, {sort: { NhaXe: 1,DiemDung: 1,TenChuyen:1}}).fetch();
        console.log("-------------->");
        console.log(out);
        Router.go('result');

    },
});

var rs = {};
Template.search.helpers({
    'listNX': function () {
        return NhaXe.find();
    }
});

var k = 0;



