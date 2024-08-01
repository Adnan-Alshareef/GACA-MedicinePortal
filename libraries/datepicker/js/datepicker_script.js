$(function() {
    hijriCalender();
    gregorianCalender();
});

function hijriCalender() {
    let locale_data = 'en-us'
    if (document.dir == 'rtl') {
        locale_data = 'ar-sa'
    }
    $(".datepicker-h").hijriDatePicker({
        hijri: true,
        showSwitcher: false,
        locale: locale_data,
        hijriFormat: 'iDD/iMM/iYYYY',
    });
}

function gregorianCalender() {
    let locale_data = 'en-us'
    if (document.dir == 'rtl') {
        locale_data = 'ar-sa'
    }
    $(".datepicker-g").hijriDatePicker({
        hijri: false,
        showSwitcher: false,
        isRTL: true,
        locale: locale_data,
        format: 'DD/MM/YYYY',
    });
}