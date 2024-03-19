import { component$ } from "@builder.io/qwik";
import VideoLoader from "~/components/video-loader/video-loader";
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const loc = Number(useLocation().params?.amount);
    console.log("Loc: " + loc)
    return(
        <VideoLoader loadAmount={(loc)}/>
    );
});