import React, { Component } from 'react'
import ArtikelService from '../../services/artikel-service'
import { Link } from 'react-router-dom';

export class DetailArtikel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        const data = window.location.href.split('/')
        const panjang = data.length
        const id = data[panjang-1]
        ArtikelService.getArtikelById(id)
        .then((res) => {
            this.setState({
                data: res.data
            });
        });
    }

    render() {
        const { id, authorName, title, body, createdAt, updatedAt } = this.state.data
        return (
            <div className="background p-10">
                <Link to={"/read-artikel"} className='submit-button pl-16'>
                    <input type="submit" value="Back"/>
                </Link>
                <div className="lg:p-56 lg:pt-0">
                    <h1 className="p-10 header-background uppercase font-medium">{authorName}</h1>
                    <p className="p-10 pt-0 text-right font-medium">{title}</p>
                    <p className="p-10 pt-0 text-right font-medium">{createdAt}</p>
                    <p className="break-artikel p-20 text-base leading-loose text-justify">{updatedAt}</p>
                    
                </div>
            </div>
        )
    }
}

export default DetailArtikel;