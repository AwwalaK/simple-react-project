import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'

import ListBeritaService from '../../services/list-berita-service';

class GetListBerita extends Component {
    state = {
        artikel: []
    }

    componentDidMount = async () =>{
        await ListBeritaService.getListBerita('/get-news')
        .then((res) => {
            this.setState({
                artikel: res.data
            });
        });
        console.log(this.state.artikel);
    }

    render() {        
        return (
            <>
                <div className="background p-10">
                    <h1 className="h1 font-bold text-2xl">ARTIKEL ADMIN PAGE</h1>
                    <div className="create-button">
                        <Link className="create-button-link" to='/admin/create-artikel-admin'>CREATE</Link>
                    </div>
                    <table className='tabel'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Judul ListBerita</th>
                                <th>Link ListBerita</th>
                                <th>Isi ListBerita</th>
                                <th>Tanggal ListBerita</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.artikel.map(item => (
                            <tr>
                                <td className="td-propos">{item.id}</td>
                                <td className="td-propos">{item.judul}</td>
                                <td className="td-propos">
                                    <img
                                        src={('/images/artikel/' + item.foto)}
                                        alt={item.foto}
                                        className="w-10 h-10 lg:w-20 lg:h-20"
                                    />
                                </td>
                                <td className="td-propos">{item.isi.substr(0, 50)}...</td>
                                <td className="td-propos">{item.tanggal}</td>
                                <td className="td-propos-setting">
                                    <Link className='button-links' to={"/admin/read-artikel-detail/" + item.id}><AiOutlineEye /></Link>
                                    <Link className='button-links' to={"/admin/update-artikel-admin/" + item.id}><BiEdit /></Link>
                                    <Link className='button-links' to={"/admin/delete-artikel-admin/" + item.id}><BsTrash /></Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>            
            </>
        )
    }
}

export default GetListBerita