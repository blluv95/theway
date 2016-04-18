if (Meteor.isClient) {
    // counter starts at 0

}

if (Meteor.isServer) {
    Meteor.startup(function () {

 



        return Meteor.methods({
            removeAllPosts: function () {
                return Result.remove({});
            },
            removeAllBook: function () {
                return ViewBook1.remove({});
            },
            removeAllBook2: function () {
                return ViewBook2.remove({});
            },
            insertNull: function (MX, SoGhe, DD, Gio, Ma, from) {
                console.log("insert---->");
                console.log(MX);
                console.log(SoGhe);
                console.log(DD);
                console.log(Ma);
                console.log(Gio);
                ChoTrong.insert({
                    MaXe: MX,
                    Null: SoGhe,
                    DiemDung: DD,
                    Gio: Gio,
                    Ngay: new Date(),
                    Ma: Ma,
                    DiemKT: from
                });

            },
            // Meteor.call('insertDatVe',data.MaChuyen,new Date(),txtDate,data.Gio,"",data.Ma,data.DiemDung,data.DiemKT,total);
            insertDatVe: function (MC, MT, TGDAT, NGAYDI, GIODI, DOITUONG, MA, START, END, SL) {
                DatVe.insert({
                    MaChuyen: MC,
                    ThoiGianDat: TGDAT,
                    NgayDi: NGAYDI,
                    GioDi: GIODI,
                    DoiTuong: DOITUONG,
                    Ma: MA,
                    DiemDung: START,
                    DiemKT: END,
                    SL: SL
                });
                var order = new Number(SL);
                var sl = -order;
                var data = ViewBook1.find({MaTuyen: MT, MaChuyen: MC, Ma: MA}).fetch();
                console.log(data);
                for (var k = 0; k < data.length; k++)
                    ChoTrong.update({Ma: data[k].Ma, DiemDung: data[k].DiemDung, Gio: data[k].Gio}, {$inc: {Null: sl}});
            }
        });
    });
}
