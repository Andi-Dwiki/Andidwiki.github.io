// event pada saat link di klik
// jquary tolong panggilkan class page-scroll yang saat di click akan menjalankan fungsi berikut

$('.page-scroll').on('click', function(e){

    // ambil isi href, variabel tujuan  yang bersangkutan(this) memanggil isi dari attribut(href)
    // console.log untuk memastikan fungsi tersebut berjalan
    var tujuan = $(this).attr('href');

    // tangkap elemen yang bersangkutan
    var elemenTujuan  = $(tujuan);


    // console.log(elementujuan.offset().top); iniuntuk mengetahui jarak dari tiap section keatas web di console
    
    // pindahkan scroll(sama seperti fungsi href)
    // $('body').scrolltop(elementujuan.offset().top);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top-50
    }, 1000, 'easeInOutExpo');

    // 1000, satuan milisecon(1s)lamanya animasi, swing untuk tambahan efek ayunan
    // bisa menambahkan animasi dari jquery.easing
    e.preventDefault();

});




// parallax