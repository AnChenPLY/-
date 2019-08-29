let h = document.querySelector(".hour");
let m = document.querySelector(".minutes");
let s = document.querySelector(".seconds");
let hValue = h.innerHTML;
let mValue = m.innerHTML;
let sValue = s.innerHTML;
clock();
function clock() {
    clockTime = setInterval(() => {
        if (hValue == 0 && mValue == 0 && sValue == 0) {
            hValue = 23;
            mValue = 59;
            sValue = 59;
        } else sValue--;
        if (sValue < 0) {
            sValue = 59;
            mValue--;
            if (mValue < 0) {
                mValue = 59;
                hValue--;
            }
        }
        s.innerHTML = num(sValue);
        m.innerHTML = num(mValue);
        h.innerHTML = num(hValue);
    }, 1000);
}
function num(obj) {
    return obj < 10 ? "0" + obj : obj;
}
