import React from 'react'
import CardNewProducts from '../Sections/Cards/CardNewProducts'

function NewProducts() {
    let prdDetail = {
        1: { colorBorder: '#ba8729', imgName: "bisketPrd1.png", colorProductName: "#c97022", productName: "Bourbon Bisket", colorDesc: "#b5641d", descText: "Criem Biskut  NetQnt:", quanTiy: "250g", colorPrice: "#ab8455", price: "$ 0.25" },
        2: { colorBorder: "#dbc45e", imgName: "cocoPrd1.png", colorProductName: "#c97022", productName: "Coconut Oil", colorDesc: "#b5641d", descText: "Pure Oil  NetQnt:", quanTiy: "250ml", colorPrice: "#dbc45e", price: "$ 0.10" },
        3: { colorBorder: "#dbc45e", imgName: "cocoPrd2.png", colorProductName: "#8c814f", productName: "Coconut Oil", colorDesc: "#8c814f", descText: "Pure Oil  NetQnt:", quanTiy: "250ml", colorPrice: "#8c814f", price: "$ 0.20" },
        4: { colorBorder: "#a4b85e", imgName: "cocoPrd3.png", colorProductName: "#a4b85e", productName: "Coconut Oil", colorDesc: "#8c814f", descText: "Pure Oil  NetQnt:", quanTiy: "750ml", colorPrice: "#a4b85e", price: "$ 3.90" },
        5: { colorBorder: "#dbc45e", imgName: "cocoPrd4.png", colorProductName: "#8c814f", productName: "Coconut Oil", colorDesc: "#8c814f", descText: "Pure Oil  NetQnt:", quanTiy: "250ml", colorPrice: "#8c814f", price: "$ 0.80" },
        6: { colorBorder: "#65d1db", imgName: "dairyPrd1.png", colorProductName: "#33828a", productName: "Dairy Combo", colorDesc: "#33828a", descText: "Pure Ghee, Milk, Butter:", quanTiy: "950ml", colorPrice: "#65d1db", price: "$ 5.10" },
        7: { colorBorder: "#dbc45e", imgName: "garamPrd1.png", colorProductName: "#8c814f", productName: "Garam Massala", colorDesc: "#8c814f", descText: "Pure Organic  NetQnt:", quanTiy: "550gm", colorPrice: "#8c814f", price: "$ 2.20" },
        8: { colorBorder: "#dbc45e", imgName: "garamPrd2.png", colorProductName: "#8c814f", productName: "Garam Massala", colorDesc: "#8c814f", descText: "Pure for Veg  NetQnt:", quanTiy: "350ml", colorPrice: "#8c814f", price: "$ 2.20" },
        9: { colorBorder: "#d6c73c", imgName: "gheePrd1.png", colorProductName: "#d6c73c", productName: "A2 Ghee", colorDesc: "#8068ad", descText: "Pure A2 Ghee  NetQnt:", quanTiy: "950ml", colorPrice: "#d6c73c", price: "$ 3.60" },
        10: { colorBorder: "#dbc45e", imgName: "gheePrd2.png", colorProductName: "#8c814f", productName: "Home Made Ghee", colorDesc: "#8c814f", descText: "Pure A2 Ghee  NetQnt:", quanTiy: "510ml", colorPrice: "#8c814f", price: "$ 3.20" },
        11: { colorBorder: "#d67f3c", imgName: "gheePrd3.png", colorProductName: "#d67f3c", productName: "Home Made Ghee", colorDesc: "#d67f3c", descText: "Pure A2Ghee  NetQnt:", quanTiy: "250ml", colorPrice: "#d67f3c", price: "$ 5.20" },
        12: { colorBorder: "#609943", imgName: "gheePrd4.png", colorProductName: "#8c814f", productName: "A2 Ghee", colorDesc: "#8c814f", descText: "Pure Oil  NetQnt:", quanTiy: "450ml", colorPrice: "#609943", price: "$ 0.20" },
        13: { colorBorder: "#dbc45e", imgName: "gheePrd5.png", colorProductName: "#8c814f", productName: "Ghee Home Made", colorDesc: "#8c814f", descText: "Pure Ghee  NetQnt:", quanTiy: "250ml", colorPrice: "#cbd173", price: "$ 3.50" },
        14: { colorBorder: "#bd2d43", imgName: "newPrd1.png", colorProductName: "#bd2d43", productName: "Tomato Catchup", colorDesc: "#bd2d43", descText: "Pure Ghee  NetQnt:", quanTiy: "250ml", colorPrice: "#bd2d43", price: "$ 0.20" },
        15: { colorBorder: "#bd2d43", imgName: "newPrd2.png", colorProductName: "#bd2d43", productName: "Tomato Catchup", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "550ml", colorPrice: "#bd2d43", price: "$ 3.20" },
        15: { colorBorder: "#bd2d43", imgName: "newPrd3.png", colorProductName: "#bd2d43", productName: "Tomato Catchup", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "250ml", colorPrice: "#bd2d43", price: "$ 2.20" },
        16: { colorBorder: "#d4b022", imgName: "pampPrd1.png", colorProductName: "#d4b022", productName: "Pampad", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "250gm", colorPrice: "#d4b022", price: "$ 3.20" },
        17: { colorBorder: "#6edb8d", imgName: "pampPrd2.png", colorProductName: "#bd2d43", productName: "Hara Pampad", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "250ml", colorPrice: "#6edb8d", price: "$ 3.20" },
        18: { colorBorder: "#f79d0c", imgName: "pampPrd3.png", colorProductName: "#bd2d43", productName: "Chana Pampad", colorDesc: "#bd2d43", descText: "Pure Oil  NetQnt:", quanTiy: "250gm", colorPrice: "#f79d0c", price: "$ 1.20" },
        19: { colorBorder: "#9c542a", imgName: "pampPrd4.png", colorProductName: "#9c542a", productName: "Garlic Pampad", colorDesc: "#bd2d43", descText: "  NetQnt:", quanTiy: "250gm", colorPrice: "#9c542a", price: "$ 3.20" },
        20: { colorBorder: "#c2a746", imgName: "pampPrd5.png", colorProductName: "#bd2d43", productName: "Butter Pampad", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "250gm", colorPrice: "#c2a746", price: "$ 0.90" },
        21: { colorBorder: "#d68f58", imgName: "pampPrd6.png", colorProductName: "#d68f58", productName: "Pampad", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "550gm", colorPrice: "#d68f58", price: "$ 1.20" },
        22: { colorBorder: "#d68458", imgName: "pampPrd7.png", colorProductName: "#d68458", productName: "Rosted Pampad", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "250ml", colorPrice: "#d68458", price: "$ 2.19" },
        23: { colorBorder: "#fcc883", imgName: "pampPrd8.png", colorProductName: "#fcc883", productName: "Pampad", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "750gm", colorPrice: "#fcc883", price: "$ 3.20" },
        24: { colorBorder: "#bd8337", imgName: "pinutPrd1.png", colorProductName: "#bd8337", productName: "Penaut Butter", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "500gm", colorPrice: "#bd8337", price: "$ 10.20" },
        25: { colorBorder: "#3c7891", imgName: "pinutPrd2.png", colorProductName: "#3c7891", productName: "Penaut Butter", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "450gm", colorPrice: "#3c7891", price: "$ 8.20" },
        26: { colorBorder: "#848a8c", imgName: "sampoPrd1.png", colorProductName: "#848a8c", productName: "Shampo", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "850ml", colorPrice: "#848a8c", price: "$ 0.90" },
        28: { colorBorder: "#28637d", imgName: "sampoPrd2.png", colorProductName: "#28637d", productName: "Shampo Beaden Sholder", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "850ml", colorPrice: "#28637d", price: "$ 0.50" },
        29: { colorBorder: "#571133", imgName: "sampoPrd3.png", colorProductName: "#571133", productName: "Shampo Dove", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "450ml", colorPrice: "#571133", price: "$ 0.20" },
        30: { colorBorder: "#e0d724", imgName: "vimPrd1.png", colorProductName: "#e0d724", productName: "Vim Liquid", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "250ml", colorPrice: "#e0d724", price: "$ 0.80" },
        31: { colorBorder: "#bab211", imgName: "vimPrd2.png", colorProductName: "#bab211", productName: "Vim Supper", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "250ml", colorPrice: "#bab211", price: "$ 0.80" },
        32: { colorBorder: "#f5bd64", imgName: "soyaPrd1.png", colorProductName: "#f5bd64", productName: "Soya Beeans", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "1kg", colorPrice: "#f5bd64", price: "$ 1.20" },
        33: { colorBorder: "#f5bd64", imgName: "soyaPrd2.png", colorProductName: "#f5bd64", productName: "Soya Beeans", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "1kg", colorPrice: "#f5bd64", price: "$ 2.20" },
        34: { colorBorder: "#f5bd64", imgName: "soyaPrd3.png", colorProductName: "#dea243", productName: "Soya Beeans", colorDesc: "#bd2d43", descText: "NetQnt:", quanTiy: "1kg", colorPrice: "#f5bd64", price: "$ 0.90" },

    }

    return (
        <>

            <div className="flex flex-wrap  mt-12 justify-center gap-24">

                {Object.values(prdDetail).map((card, index) => (
                    <CardNewProducts
                        key={index}
                        colorBorder={card.colorBorder}
                        imgName={card.imgName}
                        colorProductName={card.colorProductName}
                        productName={card.productName}
                        colorDesc={card.colorDesc}
                        descText={card.descText}
                        quanTiy={card.quanTiy}
                        colorPrice={card.colorPrice}
                        price={card.price}
                    />
                ))}



            </div>

        </>
    )
}

export default NewProducts