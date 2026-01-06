function gridCard(){
    return(
        <div className="gridWrapper"> 
            <div className="firstContent">
                <h1 className="judulKonten">SKILLS ???</h1>
                <div className="skillWrapper">
                    <img className="socialIcon" src="src/assets/linkedin.png"></img>
                    <img className="socialIcon" src="src/assets/github.webp"></img>
                    <img className="socialIcon" src="src/assets/instagram.webp"></img>
                    <img className="socialIcon" src="src/assets/linkedin.png"></img>
                    <img className="socialIcon" src="src/assets/github.webp"></img>
                    <img className="socialIcon" src="src/assets/instagram.webp"></img>
                    <img className="socialIcon" src="src/assets/linkedin.png"></img>
                    <img className="socialIcon" src="src/assets/github.webp"></img>
                    <img className="socialIcon" src="src/assets/instagram.webp"></img>
                </div>        
            </div>
           
            <div className="secondContent">
                <h1 className="judulKonten">EDUCATION</h1>
                <div className="logoWrapper">
                    <img className="upnLogo" src="src/assets/logoUpn.png"></img>
                    <p className="teksHimmel">
                        Seorang mahasiswa biasa Jurusan Sistem Informasi Semester 4 dari UPN Veteran Jawa Timur,
                        dengan ketertarikan dibidang teknologi dan otomatiasi. Baru belajar jangan dihujat plis!!</p>
                </div>
            </div>
             <div className="thirdContent">
                <h1 className="judulKonten">PHILOSOPHY</h1>
                <div className="phiWrapper">
                    <img className="himmelGif" src="src/assets/himmel.gif"></img>
                    <p className="teksHimmel">Pahlawan Himmel pernah berkata <u>"Menjadi pahlawan bukan soal mengalahkan monster besar, tapi tentang keberanian membersihkan jalan dan menolong mereka yang kesulitan. Kebaikan tidak butuh panggung."</u></p>
                </div>
            </div>
        </div>
    )
}
export default gridCard;