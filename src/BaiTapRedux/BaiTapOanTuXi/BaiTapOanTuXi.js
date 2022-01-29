import React from 'react'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'

export default function BaiTapOanTuXi() {
    return (
        <div className="gameOanTuXi">
                <div className="row mt-3">
                    <div className="col-4">
                        <Player/>
                    </div>
                    <div className="col-4playerGame">
                        <KetQuaTroChoi/>
                        <button className="btn btn-success p-2 display-4 mt-3">Play game</button>
                    </div>
                    <div className="col-4">
                        <Computer/>
                    </div>
                </div>
            </div>
    )
}
