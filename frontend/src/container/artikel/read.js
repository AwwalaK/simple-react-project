import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'

import ArtikelService from '../../services/artikel-service'

class ReadArtikel extends Component {
    state = {
        artikel: {}
    }

    componentDidMount = async () =>{
        await ArtikelService.getArtikel()
        .then((res) => {
            this.setState({
                artikel: res.data
            });
        });
    }

    render() {        
        const { data } = this.state.artikel
        const { currentPage, items, itemsPerPage, nextLink, previousLink, totalItems, totalPages } = data || {}
        
        return (
            <>
                <div className="background p-10">
                    <h1 className="h1 text-2xl py-5">ARTIKEL PAGE</h1>
                    <div className="create-button py-5">
                        <Link className="create-button-link" to='/create-artikel'>CREATE Artikel</Link>
                    </div>
                    <table className='tabel'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th className='px-4'>Penulis Artikel</th>
                                <th className='px-4'>Judul Artikel</th>
                                <th className='px-4'>Isi Artikel</th>
                                <th className='px-4'>Artikel Dibuat</th>
                                <th className='px-4'>Artikel Di-Update</th>
                                <th className='px-4'>Pengaturan</th>
                            </tr>
                        </thead>
                        <tbody>
                        {(items || []).map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td className='px-4'>{item.authorName}</td>
                                <td className='px-4'>{item.title}</td>
                                <td className='px-4'>{item.body.substr(0, 50)}...</td>
                                <td className='px-4'>{item.createdAt}</td>
                                <td className='px-4'>{item.updatedAt}</td>
                                <td className="flex">
                                    <Link className='px-2' to={"/read-detail-artikel/" + item.id}><AiOutlineEye /></Link>
                                    <Link className='px-2' to={"/update-artikel/" + item.id}><BiEdit /></Link>
                                    <Link className='px-2' to={"/delete-artikel/" + item.id}><BsTrash /></Link>
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

export default ReadArtikel