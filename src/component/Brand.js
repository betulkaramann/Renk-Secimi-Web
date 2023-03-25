import React from 'react';
import { getContrastYIQ } from '../helper'
import MainContext from '../MainContext';
import { useContext } from 'react';
import Clipboard from 'react-clipboard.js';
import ClipboardButton from 'react-clipboard.js';



function Brand({ brand }) {


    const { selectedBrands, setSelectedBrand, setCopied } = useContext(MainContext)


    const toogleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            //selected edileni kırmızı içine alma kısmı
            setSelectedBrand(selectedBrands.filter(slug => slug !== brand.slug))
        }
        else {
            setSelectedBrand([...selectedBrands, brand.slug])
        }
    }

    const setColor = (color) => {
        setCopied(color)
    }


    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
            <h5 onClick={toogleSelected}>
                {brand.title}
            </h5>
            <div className="brand-colors">
                {brand.colors.map(color => (
                    <ClipboardButton data-clipboard-text={color} onSuccess={() => setColor(color)}
                        component="span"
                        style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}` }}>
                        {color}
                    </ClipboardButton>

                ))}
            </div>
        </div>
    );
}

export default Brand;