import "./Alamat.css";

const Alamat = (props) => {
   return (
      <>
         <div className="container-fluid">
            <div className="row">
               <div className="col-12">
                  <h1 className="text-center h1-alamat">{props.alamat}</h1>
                  <hr />
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="maps-div">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.1301466945642!2d109.22948897414979!3d-7.450850673426219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655d7236a6d259%3A0x30f029e375150602!2sPonpes%20Hidayatul%20Mubtadiien%20Bersole!5e0!3m2!1sen!2sid!4v1711982767093!5m2!1sen!2sid" className="maps" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Alamat;
