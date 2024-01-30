import react from 'react';
import Welcome from './welcomeComponent';
import './App.css';
import React from 'react';

class MyComponent extends react.Component {
    handleClick = () => {
        console.log('Clicked!');
    }

    render() {
        return (
            <div>
                <div style={{ border: '1px solid red', padding: '10px', marginBottom: '20px' }}>
                    <h3 style={{ color: 'red' }}>Hi, Saya Nana</h3>
                    <p style={{ color: 'black' }}>Saya dari batch 53 sedang belajar react :D</p>
                    <form style={{ border: '1px solid grey', padding: '10px', marginBottom: '20px' }}>
                        <label htmlFor="nama-lengkap">Nama lengkap:</label>
                        <input type="text" id="nama-lengkap" name="nama-lengkap" /><br />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" /><br />

                        <label htmlFor="batch-pelatihan">Batch Pelatihan:</label>
                        <input type="text" id="batch-pelatihan" name="batch-pelatihan" /><br />

                        <button style={{ backgroundColor: 'purple', color: 'white' }}>Tambah</button>
                    </form>

                    <table style={{ border: '2px solid blue', width: '100%', marginBottom: '20px' }}>
                        <thead style={{ backgroundColor: 'purple', color: 'white' }}>
                            <tr>
                                <th>NO</th>
                                <th>NAMA</th>
                                <th>NAMA KELAS</th>
                                <th>NILAI A</th>
                                <th>NILAI B</th>
                                <th>PERINGKAT KELAS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ border: '1px solid blue', cursor: 'pointer' }} onClick={this.handleClick}>
                                <td>1</td>
                                <td>Mahen</td>
                                <td>Batch 53</td>
                                <td>80</td>
                                <td>90</td>
                                <td>Keempat</td>
                                <button>Delete</button>
                            </tr>
                            <tr style={{ border: '1px solid blue', cursor: 'pointer' }} onClick={this.handleClick}>
                                <td>2</td>
                                <td>Lee Jeno</td>
                                <td>Batch 53</td>
                                <td>85</td>
                                <td>95</td>
                                <td>Ketiga</td>
                                <button>Delete</button>
                            </tr>
                            <tr style={{ border: '1px solid blue', cursor: 'pointer' }} onClick={this.handleClick}>
                                <td>3</td>
                                <td>Jaemin</td>
                                <td>Batch 353</td>
                                <td>90</td>
                                <td>100</td>
                                <td>Kedua</td>
                                <button>Delete</button>
                            </tr>
                            <tr style={{ border: '1px solid blue', cursor: 'pointer' }} onClick={this.handleClick}>
                                <td>4</td>
                                <td>Bella</td>
                                <td>Batch 39</td>
                                <td>95</td>
                                <td>100</td>
                                <td>Pertama</td>
                                <button>Delete</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MyComponent;
