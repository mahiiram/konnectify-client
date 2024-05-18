import React,{ useState} from 'react';
import axios from 'axios';

function ImageUpload() {
    const [file,setFile] = useState();
    const handleSubmit = (e) =>{
        const formdata = new FormData();
        formdata.append('file',file)
         axios.post(`http://localhost:5000/api/upload`,formdata)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return (
            <section className="bg-image">   
                <div className="mask d-flex align-items-center h-100">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center mt-5">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-5">
                                        <div className='d-flex justify-content-center align-items-center mb-3'>
                                          <h4 className='text-uppercase'>Konnectify</h4>
                                        </div>
                                            <div className="form-outline mb-4">
                                                <input type="file" id="name" onChange={e=>setFile(e.target.files[0])} className="form-control form-control-md" name='AvatarImage' placeholder='Set Profile'/>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button onClick={handleSubmit}
                                                    className="btn btn-success">upload</button>
                                            </div>
                                  
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>            
    )
}

export default ImageUpload