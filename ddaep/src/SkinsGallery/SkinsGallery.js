import React from 'react';
import './SkinsGallery.css';

const skinsData = [
    {
        name: "AWP | Gungnir",
        suggestedPrice: "$14,633.18",
        price: "$12,750.00",
        discount: "-13%",
        image: "https://dgvdyislmj77y.cloudfront.net/eyJidWNrZXQiOiJ0cmFkZWl0LXdpa2kiLCJrZXkiOiJpbWFnZXMvaXRlbXMvYXdwLWd1bmduaXItLWZhY3RvcnktbmV3LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxMjAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6IiMyNzI3M2YifSwiZmxhdHRlbiI6eyJiYWNrZ3JvdW5kIjoiIzI3MjczZiJ9LCJvdmVybGF5V2l0aCI6eyJidWNrZXQiOiJ0cmFkZWl0LXdpa2kiLCJrZXkiOiJ3YXRlcm1hcmstbG9nby5wbmciLCJvcHRpb25zIjp7ImdyYXZpdHkiOiJzb3V0aHdlc3QifX19fQ==",
        type: "Factory New Covert Sniper Rifle",
        float: "0.066",
    },
    // ... add all other skins similarly
];

function SkinsGallery() {
    return (
        <div className="skinsGallery">
            {skinsData.map((skin, index) => (
                <div key={index} className="skinCard">
                    <div className="skinImageContainer">
                        <img src={skin.image} alt={skin.name} />
                        <span className="tradeableBadge">Tradable</span>
                    </div>
                    <div className="skinInfo">
                        <h2 className="skinPrice">{skin.price}</h2>
                        <p className="suggestedPrice">{skin.suggestedPrice}</p>
                        <h1 className="skinName">{skin.name}</h1>
                        <p className="skinType">{skin.type}</p>
                        <div className="skinFloatBar">
                            <div className="currentFloat" style={{width: `${parseFloat(skin.float) * 100}%`}}></div>
                        </div>
                        <p className="skinFloatValue">{skin.float}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkinsGallery;
