import { component$ } from "@builder.io/qwik";
import ImageLoader from "~/components/image-loader/image-loader";
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const loc = Number(useLocation().params?.amount);
    console.log("Loc: " + loc)
    return(
        <ImageLoader loadAmount={(loc)}/>
    );
});