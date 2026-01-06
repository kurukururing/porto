import React from 'react';
import './ImageCarousel.css';

// Contoh data gambar (Ganti dengan URL gambar Anda sendiri)
const sampleImages = [
    "https://picsum.photos/id/101/300/200",
    "https://picsum.photos/id/102/300/200",
    "https://picsum.photos/id/103/300/200",
    "https://picsum.photos/id/104/300/200",
    "https://picsum.photos/id/106/300/200",
    "https://picsum.photos/id/108/300/200",
];

function ImageCarousel() {
    // TRIK KUNCI: Menduplikasi array gambar agar looping berjalan mulus
    // Kita menggabungkan sampleImages dengan dirinya sendiri.
    const doubledImages = [...sampleImages, ...sampleImages];

    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {doubledImages.map((src, index) => (
                    <img 
                        key={index} // Menggunakan index sebagai key karena ada duplikasi URL
                        src={src} 
                        alt={`slide-${index}`} 
                        className="carousel-image" 
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageCarousel;