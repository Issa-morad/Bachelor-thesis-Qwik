import { component$, Resource} from '@builder.io/qwik';

import { Videos, createClient, Video } from 'pexels';

interface props {
    loadAmount? : number;
}

export function loadImages(loadAmount: number) {
    const client = createClient('8O3ITulBd3IwZW3T6EbbeILdffoBpma48W0ObpVqRfysfvyBTX0eveeL');
    const query = 'Dogs';

    console.log("TESTING: " + loadAmount)

    return client.videos.search({ query, per_page: loadAmount })
}

export default component$<props>( ({loadAmount = 0}) => {
    const items = loadImages(loadAmount);

    return (
    <>
        <div>
            <h2><a href="https://www.pexels.com">Videos provided by Pexels</a></h2>
            <h3>Loaded {loadAmount} videos</h3>
            <Resource 
                value={items}
                onPending={() => "Loading"}
                onResolved={(data) => (data as Videos).videos.map((item, key) => {
                    return(
                        <div key={key}>
                            <VideoElement video={item}/>
                        </div>
                    )
                })
                    
                }
            />
        </div>
    </>
    )
});
export const VideoElement = ((props : { video: Video}) => {
    return (
        <div>
            <a href={props.video.url}><video height={props.video.video_files[0].height!} width={props.video.video_files[0].width!} controls><source src={props.video.video_files[0].link}/></video></a>
            <p>Video by <a href={props.video.user.url}>{props.video.user.name}</a></p>
        </div>
    );
});