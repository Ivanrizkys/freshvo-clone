import Image from "next/image"

const Input = () => {
    return (
        <form style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <div style={{display: "flex", justifyContent: "center", width: "15%", marginTop: "16px", backgroundColor: "#F1F2F6", borderRadius: "100px 0 0 100px"}}>
                <Image src="/search-icon.svg" width={24} height={24} alt="search-icon"/>
            </div>
            <input type="text" placeholder="Cari produk" style={{width: "85%", height: "50px", borderRadius: "0 100px 100px 0", marginTop: "16px", backgroundColor: "#F1F2F6", outline: "none", border: "none"}} />
        </form>
    )
}

export default Input;