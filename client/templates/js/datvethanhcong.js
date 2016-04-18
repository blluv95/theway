/**
 * Created by kill on 14/04/2016.
 */
Template.datvethanhcong.rendered = function () {
    if (!this._rendered) {
        this._rendered = true;
        console.log('Template  datvethanhcong onLoad');
        // info_nx

        var total_money_tall = Session.get("slnguoilon") * Session.get("slnguoilon_money");
        var total_money_children = Session.get("sltreem") * Session.get("sltreem_money");
        var total_money_child = Session.get("slembe") * Session.get("slembe_money");
        var sl_nguoilon = Session.get("slnguoilon");
        var sl_treem = Session.get("sltreem");
        var sl_embe = Session.get("slembe");
        $('input[id="info_nx"]').val(Session.get("tenxe"));
        $('input[id="info_tenchuyen"]').val(Session.get("tenchuyen"));
        $('input[id="info_start"]').val(Session.get("diembatdau"));
        $('input[id="info_end"]').val(Session.get("diemketthuc"));
        $('input[id="info_time"]').val(Session.get("gio"));
        $('input[id="info_tall"]').val(Session.get("slnguoilon"));

        if (sl_nguoilon != 0)
            $('input[id="tall_money"]').val(Session.get("slnguoilon_money"));
        else {
            $('input[id="tall_money"]').val(0);
        }
        //--------------
        $('input[id="info_chilren"]').val(Session.get("sltreem"));
        if (sl_treem != 0)
            $('input[id="info_chilren_money"]').val(Session.get("sltreem_money"));
        else {
            $('input[id="info_chilren_money"]').val(0);
//-------------------------
            $('input[id="info_child"]').val(Session.get("slembe"));

            if (sl_embe != 0)
                $('input[id="info_child_money"]').val(Session.get("slembe_money"));
            else
                $('input[id="info_child_money"]').val(0);

            var tt = total_money_tall + total_money_children + total_money_child;
            console.log(tt);
            $('input[id="total_money"]').val(tt);
            $('input[id="info_date"]').val(new Date());
        }
    }
}

Template.datvethanhcong.events({
    'click #button_success':function (event) {
        event.preventDefault();

            Router.go('/datvehot');
    }
});