const stateDefault = {
    mangDatCuoc: [
        {ma:'keo', hinhAnh:'./img/gameOanTuXi/keo.png', datCuoc:false},
        {ma:'bua', hinhAnh:'./img/gameOanTuXi/bua.png', datCuoc:false},
        {ma:'bao', hinhAnh:'./img/gameOanTuXi/bao.png', datCuoc:false},
    ],
    ketQua: "I'm iron man, i love you 3000!!!",
    soBanThang:0,
    soBanChoi:0,
    computer:{ma:'keo', hinhAnh:'./img/gameOanTuXi/keo.png'},

}

const BaiTapOanTuXiReducer = (state=stateDefault,action) => {

    switch(action.type){
        default:return {...state}
    }
}

export default BaiTapOanTuXiReducer;