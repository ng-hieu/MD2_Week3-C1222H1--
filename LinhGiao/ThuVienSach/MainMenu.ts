import {TaiLieu} from "./TaiLieu";
import {Sach} from "./LoaiSach";
import {TapChi} from "./LoaiSach";
import {Bao} from "./LoaiSach";
import {QuanLyTaiLieu} from "./QuanLyTaiLieu";

let input = require('readline-sync');
let quanLyTaiLieu = new QuanLyTaiLieu();
function MainMenu() {
    let choice = -1;
    do {
        console.log(`
    ---Menu---
    1. Them tai lieu
    2. Hien thi tai lieu
    3. Tim tai lieu
    4. Xoa tai lieu
    0. Thoat
    `)
        choice = +input.question('Enter Choice: ');
        switch (choice) {
            case 1: chonLoaiTaiLieu();
                break;
            case 2:chonLoaiTaiLieuShow();
                break;
            case 3: chonLoaiTaiLieuFind()
                break;
            case 4: chonLoaiTaiLieuDelete()
                break;
        }
    } while (choice != 0)
}
function chonLoaiTaiLieu(){
    let choice = -1;
    do {
        console.log(`
    ---Chon loai tai lieu muon them---
    1. Sach
    2. Tap chi
    3. Bao
    0. Thoat
    `)
        choice = +input.question('Enter Choice: ');
        switch (choice) {
            case 1: addSach();
                break;
            case 2: addTapChi();
                break;
            case 3: addBao();
                break;
        }
    } while (choice != 0)
}
function chonLoaiTaiLieuShow(){
    let choice = -1;
    do {
        console.log(`
    ---Chon loai tai lieu muon xem---
    1. Sach
    2. Tap chi
    3. Bao
    4. Xem tat ca
    0. Thoat
    `)
        choice = +input.question('Enter Choice: ');
        switch (choice) {
            case 1: showSach();
                break;
            case 2: showTapChi()
                break;
            case 3: showBao();
                break;
            case 4: showTatCa();
                break;
        }
    } while (choice != 0)
}
function chonLoaiTaiLieuFind(){
    let choice = -1;
    do {
        console.log(`
    ---Chon loai tai lieu muon tim---
    1. Sach
    2. Tap chi
    3. Bao
    0. Thoat
    `)
        choice = +input.question('Enter Choice: ');
        switch (choice) {
            case 1: findSach()
                break;
            case 2: findTapChi()
                break;
            case 3: findBao()
                break;
        }
    } while (choice != 0)
}
function chonLoaiTaiLieuDelete(){
    let choice = -1;
    do {
        console.log(`
    ---Chon loai tai lieu muon xoa---
    1. Sach
    2. Tap chi
    3. Bao
    0. Thoat
    `)
        choice = +input.question('Enter Choice: ');
        switch (choice) {
            case 1: deleteSach()
                break;
            case 2: deleteTapChi()
                break;
            case 3: deleteBao()
                break;
        }
    } while (choice != 0)
}
function addSach(){
    console.log(`Them sach moi`);
    let id = quanLyTaiLieu.countId();
    let nxb = input.question(`Enter nha xuat ban: `);
    let soBan = input.question(`Enter so ban phat hanh: `);
    let tacGia = input.question(`Enter ten tac gia: `);
    let soTrang = input.question(`Enter so trang: `);
    let sach = new Sach(id, nxb, soBan, tacGia, soTrang);
    quanLyTaiLieu.addSach(sach);
    console.log(`Da them thanh cong`);
}
function addTapChi(){
    console.log(`Them tap chi moi`);
    let id = quanLyTaiLieu.countId();
    let nxb = input.question(`Enter nha xuat ban: `);
    let soBan = input.question(`Enter so ban phat hanh: `);
    let soPhatHanh = input.question(`Enter so phat hanh: `);
    let thangPhatHanh = input.question(`Enter thang phat hanh: `);
    let tapChi = new TapChi(id, nxb, soBan, soPhatHanh, thangPhatHanh);
    quanLyTaiLieu.addTapChi(tapChi);
    console.log(`Da them thanh cong`);
}
function addBao(){
    console.log(`Them bao moi`);
    let id = quanLyTaiLieu.countId();
    let nxb = input.question(`Enter nha xuat ban: `);
    let soBan = input.question(`Enter so ban phat hanh: `);
    let ngayPhatHanh = input.question(`Enter ngay phat hanh: `);
    let bao = new Bao(id, nxb, soBan, ngayPhatHanh)
    quanLyTaiLieu.addBao(bao);
    console.log(`Da them thanh cong`);
}
function showSach(){
    console.table(quanLyTaiLieu.showSach());
}
function showTapChi(){
    console.table(quanLyTaiLieu.showTapChi());
}
function showBao(){
    console.table(quanLyTaiLieu.showBao());
}
function showTatCa(){
    console.log("Danh sach sach");
    console.table(quanLyTaiLieu.showSach());
    console.log("Danh sach tap chi");
    console.table(quanLyTaiLieu.showTapChi());
    console.log("Danh sach bao");
    console.table(quanLyTaiLieu.showBao());
}
function findSach(){
    console.log(`---Tim sach theo Id---`);
    let id = +input.question('Enter id: ');
    quanLyTaiLieu.findSach(id);
}
function findTapChi(){
    console.log(`---Tim tap chi theo Id---`);
    let id = +input.question('Enter id: ');
    quanLyTaiLieu.findTapChi(id);
}
function findBao(){
    console.log(`---Tim bao theo Id---`);
    let id = +input.question('Enter id: ');
    quanLyTaiLieu.findBao(id);
}
function deleteSach(){
    console.log(`---Xoa sach theo Id---`);
    let id = +input.question('Enter id: ');
    quanLyTaiLieu.deleteSach(id);
    console.log(`Da xoa thanh cong`)
}
function deleteTapChi(){
    console.log(`---Xoa tap chi theo Id---`);
    let id = +input.question('Enter id: ');
    quanLyTaiLieu.deleteTapChi(id);
    console.log(`Da xoa thanh cong`)
}
function deleteBao(){
    console.log(`---Xoa bao theo Id---`);
    let id = +input.question('Enter id: ');
    quanLyTaiLieu.deleteBao(id);
    console.log(`Da xoa thanh cong`)
}
MainMenu();