import {useNavigate} from 'react-router-dom';
import React from 'react'

type KatalogItemProps = {
    imageUrl: string,
    title: string,
    priceMain: number, 
    priceOld: number, 
    category: [], 
    info: [], 
    id: string
}

const KatalogItem: React.FC<KatalogItemProps> = ({imageUrl, title, priceMain, priceOld, category, info, id}) => {
    const router = useNavigate()
    return (
        <button className="katalog__item" onClick={() => router(`/catalog/game/${id}`)}>
            <img src={imageUrl} alt=""/>
            <div className="katalog__infos">
                {
                    info.map((value, index) => (
                        <div key={index} className="katalog__info">{value}</div>
                    ))
                }
            </div>
            <div className="katalog__price">
                <div className="katalog__price-main">{priceMain}₽</div>
                <div className="katalog__price-old">{priceOld}₽</div>
            </div>
            <div className="katalog__discount">-{100-(Math.round((priceMain * 100) / priceOld))}%</div>
            <div className="katalog__title">
                <h4>{title}</h4>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.9871 24C6.55357 24 1.96259 20.3969 0.478453 15.4517C0.480996 15.4426 0.483523 15.4336 0.486033 15.4247L4.71565 17.135C4.93891 18.1127 5.62334 18.9704 6.63312 19.3829C8.28523 20.0594 10.1901 19.2884 10.8774 17.6686C11.0562 17.2452 11.1396 16.8012 11.1276 16.3581L15.2259 13.4878C15.2591 13.4888 15.2933 13.4898 15.3264 13.4898C17.779 13.4898 19.7724 11.5303 19.7724 9.12403C19.7724 6.71754 17.779 4.75985 15.3264 4.75985C12.8748 4.75985 10.8804 6.71754 10.8804 9.12403C10.8804 9.14333 10.8804 9.16263 10.8814 9.18074L8.01706 13.2584C7.55307 13.2377 7.08747 13.3175 6.64598 13.4957C6.45136 13.5735 6.269 13.669 6.09789 13.7793L0.0901613 11.3555C0.06087 11.3053 0.0308073 11.2544 0 11.2027C0.411429 4.94719 5.62069 0 11.9871 0C18.6215 0 24 5.3726 24 12C24 18.6273 18.6215 24 11.9871 24ZM6.91807 18.7114C8.1937 19.2323 9.66123 18.6385 10.1931 17.387C10.4504 16.7825 10.4514 16.1129 10.1972 15.5064C9.94296 14.8998 9.4633 14.4252 8.84508 14.1731C8.23188 13.923 7.57557 13.9309 6.99824 14.1456L8.49442 14.7531C9.43466 15.1371 9.87967 16.1966 9.48741 17.1192C9.09636 18.0408 8.01706 18.478 7.07631 18.094L5.62897 17.5062C5.88528 18.031 6.32958 18.4711 6.91807 18.7114ZM12.3644 9.12403C12.3644 10.7278 13.6937 12.0325 15.3264 12.0325C16.9601 12.0325 18.2894 10.7278 18.2894 9.12403C18.2894 7.52151 16.9601 6.21645 15.3264 6.21645C13.6937 6.21645 12.3644 7.52151 12.3644 9.12403ZM15.3314 6.93455C14.1036 6.93455 13.1069 7.9131 13.1069 9.1196C13.1069 10.3262 14.1036 11.3039 15.3314 11.3039C16.5602 11.3039 17.557 10.3262 17.557 9.1196C17.557 7.9131 16.5602 6.93455 15.3314 6.93455Z" fill="#313131" />
                </svg>
            </div>
            <div className="katalog__category">
                {
                    category.map((value, index) => (
                        <div key={index} className="katalog__category-item">{value}</div>
                    ))
                }
            </div>
        </button>
    )
}

export default KatalogItem
