import React, { Component } from 'react'
import { connect } from 'react-redux'

function Player() {
    return (
        <div className="text-center playerGame">
            <div className="theThink">
                <img style={{ transform: 'rotate(120deg)' }} className="mt-3" width={100} height={100} src="./img/gameOanTuXi/bua.png" alt="" />
            </div>
            <div className="speech-bubble"></div>
            <img style={{ width: 200, height: 200 }} src="./img/gameOanTuXi/player.png" alt="" />

            {/* <div className="row">
                {this.props.mangDatCuoc.map((item,index)=>{
                    return <div className="col-4">
                    <button className="btnItem">
                        <img width={50} height={50} src="item.hinhAnh" alt="" />
                    </button>
                </div>
                })}
                
            </div> */}

            <div className="col-4">
                <button className="btnItem">
                    <img width={50} height={50} src="./img/gameOanTuXi/bua.png" alt="" />
                </button>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

export default connect(mapStateToProps)(Player)