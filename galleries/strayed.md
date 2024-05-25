---
title: "Strayed Gallery"

embed_title: "Liam Reese's Strayed Gallery"
embed_description: "A gallery of various features and areas of Strayed VR that Liam Reese has worked on"

layout: gallery
---

{% capture geomipmapping_videos %}

{% include gallery_video.html 

    title = "Chunk Detail"
    url = "https://zcubed.xyz/cdn/videos/strayed/chunk_zoom.mp4"

%}

{% include gallery_video.html 

    title = "Detail Stitching"
    url = "https://zcubed.xyz/cdn/videos/strayed/chunk_stitching.mp4"

%}

{% include gallery_video.html 

    title = "LOD System"
    url = "https://zcubed.xyz/cdn/videos/strayed/chunk_zones.mp4"

%}

{% endcapture %}

{% include gallery_section.html

    title="Geomipmapping"

    description = "This is a geomipmapping system I developed to allow for our procedural islands to render more efficicently on the constrained hardware of the Meta Quest 2"

    content=geomipmapping_videos

%}