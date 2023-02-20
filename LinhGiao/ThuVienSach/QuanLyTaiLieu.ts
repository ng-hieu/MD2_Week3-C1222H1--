import {TaiLieu} from "./TaiLieu";
import {Sach} from "./LoaiSach";
import {TapChi} from "./LoaiSach";
import {Bao} from "./LoaiSach";
export class QuanLyTaiLieu {
    sachs:Sach[] = [];
    tapChis: TapChi[] = [];
    baos: Bao[] = [];
    count = 1;
    addSach(sach:Sach):void{
        this.sachs.push(sach);
    }
    addTapChi(tapChi:TapChi):void{
        this.tapChis.push(tapChi);
    }
    addBao(bao:Bao):void{
        this.baos.push(bao);
    }
    showSach():Sach[]{
        return this.sachs;
    }
    showTapChi():TapChi[]{
        return this.tapChis;
    }
    showBao():Bao[]{
        return this.baos;
    }
    findSach(id){
        let index = this.sachs.findIndex(function (value, index, obj){
            return value.id === id
        });
        if (index >= 0) {
            console.table(this.sachs[index]);
        } else {
            console.log("Khong tim thay")
        }
        return index;
    }
    findTapChi(id){
        let index = this.tapChis.findIndex(function (value, index, obj){
            return value.id === id
        })
        if (index >= 0) {
            console.table(this.tapChis[index]);
        } else {
            console.log("Khong tim thay")
        }
        return index;
    }
    findBao(id){
        let index = this.baos.findIndex(function (value, index, obj){
            return value.id === id
        })
        if (index >= 0) {
            console.table(this.baos[index]);
        } else {
            console.log("Khong tim thay")
        }
        return index;
    }
    deleteSach(id){
        let index = this.findSach(id);
        this.sachs.splice(index, 1);
    }
    deleteTapChi(id){
        let index = this.findTapChi(id);
        this.tapChis.splice(index, 1);
    }
    deleteBao(id){
        let index = this.findBao(id);
        this.baos.splice(index, 1);
    }
    countId(){
        return this.count++;
    }
}

