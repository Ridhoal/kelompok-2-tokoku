const Footer =() => {
    return(
        <div style={{background: "#252525",color:"white"}}>
            <div className="p-5 pt-4">
                <p className="fs">ABOUT US</p>
                <p className="fs-5 text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellat ea illum ipsum atque at expedita maxime accusamus quod cum. 
                    Consectetur ullam ex aut architecto ipsum porro labore assumenda, temporibus magni.
                </p>

                <div>
                    <a href="https://web.whatsap.com/">
                    <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/acounts/login">
                    <i class="fa-brands fa-instagram"></i>

                    </a>
                    <a href="https://id-id.facebook.com/login/device-based/regular/login/?login_attemp=1">
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                </div>
            </div>
            <div>
                <p className="mb-0 p-2 opacity-50 text center "
                    style={{background:"black"}}
                >
                    copyright 2023 © | Developed by Kelompok 2

                </p>
            </div>
        </div>
    )
}

export default Footer