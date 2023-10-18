import React from 'react';
import './SkinsGallery.css';

const skinsData = [
    {
        name: "AWP | Gungnir",
        price: "$12,750.00",
        image: "https://dgvdyislmj77y.cloudfront.net/eyJidWNrZXQiOiJ0cmFkZWl0LXdpa2kiLCJrZXkiOiJpbWFnZXMvaXRlbXMvYXdwLWd1bmduaXItLWZhY3RvcnktbmV3LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxMjAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6IiMyNzI3M2YifSwiZmxhdHRlbiI6eyJiYWNrZ3JvdW5kIjoiIzI3MjczZiJ9LCJvdmVybGF5V2l0aCI6eyJidWNrZXQiOiJ0cmFkZWl0LXdpa2kiLCJrZXkiOiJ3YXRlcm1hcmstbG9nby5wbmciLCJvcHRpb25zIjp7ImdyYXZpdHkiOiJzb3V0aHdlc3QifX19fQ=="
    },
    {
        name: "Butterfly Knife | Lore",
        price: "$3,002.61",
        image: "https://dgvdyislmj77y.cloudfront.net/eyJidWNrZXQiOiJ0cmFkZWl0LXdpa2kiLCJrZXkiOiJpbWFnZXMvaXRlbXMvYnV0dGVyZmx5LWtuaWZlLWxvcmUtLWZhY3RvcnktbmV3LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjoiIzI3MjczZiJ9LCJmbGF0dGVuIjp7ImJhY2tncm91bmQiOiIjMjcyNzNmIn0sIm92ZXJsYXlXaXRoIjp7ImJ1Y2tldCI6InRyYWRlaXQtd2lraSIsImtleSI6IndhdGVybWFyay1sb2dvLnBuZyIsIm9wdGlvbnMiOnsiZ3Jhdml0eSI6InNvdXRod2VzdCJ9fX19"
    },
    // ... add all other skins here
];

function SkinsGallery() {
    return (
        <div className="skinsGallery">
            {skinsData.map((skin, index) => (
                <div key={index} className="skinCard">
                    <img src={skin.image} alt={skin.name} />
                    <p>{skin.name}</p>
                    <p>{skin.price}</p>
                </div>
            ))}
        </div>
    );
}

export default SkinsGallery;
