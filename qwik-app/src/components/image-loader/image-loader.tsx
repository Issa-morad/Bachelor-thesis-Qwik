import { component$, Resource} from '@builder.io/qwik';

import { Photo, PhotosWithTotalResults, createClient } from 'pexels';

interface props {
    loadAmount? : number;
}

export function loadImages(loadAmount: number) {
    const client = createClient('8O3ITulBd3IwZW3T6EbbeILdffoBpma48W0ObpVqRfysfvyBTX0eveeL');
    const query = 'Dogs';

    console.log("TESTING: " + loadAmount)

    return client.photos.search({ query, per_page: loadAmount })
}

export default component$<props>( ({loadAmount = 0}) => {
    const items = loadImages(loadAmount);

    return (
    <>
        <div class="photoInfo.length">
            <h2><a href="https://www.pexels.com">Photos provided by Pexels</a></h2>
            <h3 class="amountOfPicturesLoaded > 0">Loaded {loadAmount} images</h3>
            <Resource 
                value={items}
                onPending={() => "Loading"}
                onResolved={(data) => (data as PhotosWithTotalResults).photos.map((item, key) => {
                    return(
                        <div key={key}>
                            <Picture photo={item}/>
                        </div>
                    )
                })
                    
                }
            />
        </div>
    </>
    )
});
export const Picture = ((props : { photo: Photo}) => {
    return (
        <div class="let photo of photoInfo">
        <a href={props.photo.url}><img src={props.photo.src.small} alt={props.photo.alt!}/></a>
        <p>Photo by <a href={props.photo.photographer_url}>{props.photo.photographer}</a></p>
    </div>
    );
});