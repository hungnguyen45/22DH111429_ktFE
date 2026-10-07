document.addEventListener("DOMContentLoaded", function () {
    // Tinh tien cua tung mat hang = don gia x so luong
    function tinhTienMatHang(item) {
        var donGia = Number(item.dataset.price);
        var soLuong = Number(item.querySelector('.qty').textContent);
        var thanhTien = donGia * soLuong;
        item.querySelector('.item-total').textContent = '$' + thanhTien.toFixed(2);
        return thanhTien;
    }

    // Tinh tong so luong san pham trong gio hang
    function tinhTongSoLuong() {
        var tong = 0;
        document.querySelectorAll('.cart-item').forEach(function (item) {
            tong += Number(item.querySelector('.qty').textContent);
        });
        document.getElementById('cartCount').textContent = tong;
        document.getElementById('totalItems').textContent = tong;
        document.getElementById('sideItems').textContent = tong;
        return tong;
    }

    function capNhatGioHang() {
        var tongTien = 0;
        document.querySelectorAll('.cart-item').forEach(function (item) {
            tongTien += tinhTienMatHang(item);
        });
        tinhTongSoLuong();
        document.getElementById('cartSubtotal').textContent = '$' + tongTien.toFixed(2);
        document.getElementById('sideSubtotal').textContent = '$' + tongTien.toFixed(2);
    }

    document.querySelectorAll('.cart-item').forEach(function (item) {
        item.querySelector('.plus').addEventListener('click', function () {
            var qty = item.querySelector('.qty');
            qty.textContent = Number(qty.textContent) + 1;
            capNhatGioHang();
        });

        item.querySelector('.minus').addEventListener('click', function () {
            var qty = item.querySelector('.qty');
            if (Number(qty.textContent) > 1) qty.textContent = Number(qty.textContent) - 1;
            capNhatGioHang();
        });

        item.querySelector('.delete').addEventListener('click', function () {
            item.remove();
            capNhatGioHang();
        });
    });

    capNhatGioHang();

});
