import {TaiLieu} from "./TaiLieu";
export class Sach extends TaiLieu {
    tacGia: string;
    soTrang: string;

    constructor(id: number, nxb: string, soBan: number, tacGia: string, soTrang: string) {
        super(id, nxb, soBan);
        this.tacGia = tacGia;
        this.soTrang = soTrang;
    }
}

export class TapChi extends TaiLieu {
    soPhatHanh: string;
    thangPhatHanh: string;

    constructor(id: number, nxb: string, soBan: number, soPhatHanh: string, thangPhatHanh: string) {
        super(id, nxb, soBan);
        this.soPhatHanh = soPhatHanh;
        this.thangPhatHanh = thangPhatHanh;
    }
}

export class Bao extends TaiLieu {
    ngayPhatHanh: string;

    constructor(id: number, nxb: string, soBan: number, ngayPhatHanh: string) {
        super(id, nxb, soBan);
        this.ngayPhatHanh = ngayPhatHanh;
    }
}