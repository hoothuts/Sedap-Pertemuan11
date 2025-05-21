export default function HelloWorld() {

    const HeyItsMeGoku = {
        nama : "Goku",
        nim : "686790246298364",
        tanggal : "2025-01-01"
    }

    return (
        
        <div>
                    <h1>Hello World</h1>
                    <p>Skibidi Ohio</p>
                    <p>Tempe Mendoan</p>
                    <KigNov/>
                    <Quote/>
                    <UserCard
                    nama="Abimanyu Ananta Wijaya"
                    nim="235531004"
                    tanggal={new Date().toLocaleDateString}
                    />
                    <UserCard {...HeyItsMeGoku}/>
                    <img src="public\img\kig_nov.jpg" alt="logo" />
        </div>
    )
}

function KigNov() {
    return (
        <p>Kig Nov</p>
    )
}

function Quote() {
    const text = "Mulutmu Harimau mu";
    const text2 = "Rawr";

    return (
        <div>
            <hr />
            <p>{text.toLowerCase()}</p>
            <p>{text.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props) {
    return (
        <div>
            <hr />
            <h3>Nama : {props.nama}</h3>
            <h3>NIM : {props.nim}</h3>
            <h3>Tanggal : {props.tanggal}</h3>
        </div>
    )
}