---
title: "Project LVR Gallery"

embed_title: "Liam Reese's LVR Gallery"
embed_description: "A gallery of Liam's graphical work on LVR and his URP fork"

layout: gallery
---

<!-- AO Section -->

{% capture ao_images %}

<div class="flex_row">

{% include gallery_image.html 

    title = "Pre Baked AO - Our Method"
    url = "https://zcubed.xyz/cdn/images/lvr/pbao_tweak.jpg"

%}

{% include gallery_image.html 

    title = "Pre Baked AO - Unity's Method"
    url = "https://zcubed.xyz/cdn/images/lvr/pbao_vanilla.jpg"

%}

</div>

{% endcapture %}

{% include gallery_section.html

    title="URP AO Revamp"

    description = "I replaced the URP's AO to fade out more than just reflections, it now acts as true AO, blocking all indirect and direct light"

    content=ao_images

%}

<!-- KMotion Fork Section -->

{% capture km_fork_contents %}

{% include gallery_video.html 

    title = "Motion Blur"
    url = "https://zcubed.xyz/cdn/videos/lvr/motion_blur.mp4"

%}

{% endcapture %}

{% include gallery_section.html

    title="KMotion Fork"

    description = "I forked and integrated Kink3D's kMotion into my URP stack, adding some tweaks for quality. 
    
Credit goes to [Kink3D for making kMotion](https://github.com/Kink3d/kMotion)"

    content=km_fork_contents

%}

<!-- Blacklight Section -->

{% capture blacklight_content %}

{% include gallery_video.html 

    title = "Blacklight Demo"
    url = "https://zcubed.xyz/cdn/videos/lvr/blacklight.mp4"

%}

{% endcapture %}

{% include gallery_section.html

    title="Blacklights"

    description = "I modified the URP light data, allowing for blacklight effects in shaders"

    content=blacklight_content

%}

<!-- Shaders Section -->

{% capture shaders_contents %}

<div class="flex_row">

{% include gallery_video.html 

    title = "Iridescence (Rifles)"
    url = "https://zcubed.xyz/cdn/videos/lvr/thin_film_rifles.mp4"

%}

{% include gallery_video.html 

    title = "Iridescence (Pistols)"
    url = "https://zcubed.xyz/cdn/videos/lvr/thin_film_pistols.mp4"

%}

</div>

{% include gallery_video.html 

    title = "Proximity Fade"
    url = "https://zcubed.xyz/cdn/videos/lvr/prox_fade.mp4"

%}

{% include gallery_video.html 

    title = "Code Rain"
    url = "https://zcubed.xyz/cdn/videos/lvr/code_rain.mp4"

%}

{% endcapture %}

{% include gallery_section.html

    title="Shaders"

    description = "
#### Iridescence  

The iridescent / \"thin film\" shader is a modified URP Lit that uses an iridescent method from [this shadertoy](https://www.shadertoy.com/view/7sV3Rh) which **was originally made by al-ro**


#### Proximity Fade

This feature is integrated into URP Lit itself, the idea comes from The Walking Dead: Saints and Sinners

#### Code Rain

The Matrix 4 came out and the marketing inspired me to make a code rain effect in my own style
"

    content=shaders_contents

%}

<!-- Fog Gallery Section -->

{% capture vfog_contents %}

<div class="flex_row">

{% include gallery_image.html 

    title = "Atrium - Fog On"
    url = "https://zcubed.xyz/cdn/images/lvr/atrium_fog_on.jpg"

%}

{% include gallery_image.html 

    title = "Atrium - Fog Off"
    url = "https://zcubed.xyz/cdn/images/lvr/atrium_fog_off.jpg"

%}

</div>

<div class="flex_row">

{% include gallery_image.html 

    title = "Neon - Fog On"
    url = "https://zcubed.xyz/cdn/images/lvr/neon_fog_on.jpg"

%}

{% include gallery_image.html 

    title = "Neon - Fog Off"
    url = "https://zcubed.xyz/cdn/images/lvr/neon_fog_off.jpg"

%}

</div>

<div class="flex_row">

{% include gallery_image.html 

    title = "Range - Fog On"
    url = "https://zcubed.xyz/cdn/images/lvr/range_fog_on.jpg"

%}

{% include gallery_image.html 

    title = "Range - Fog Off"
    url = "https://zcubed.xyz/cdn/images/lvr/range_fog_off.jpg"

%}

</div>

<div class="flex_row">

{% include gallery_image.html 

    title = "Cubes - Fog On"
    url = "https://zcubed.xyz/cdn/images/lvr/cubes_fog_on.jpg"

%}

{% include gallery_image.html 

    title = "Cubes - Fog Off"
    url = "https://zcubed.xyz/cdn/images/lvr/cubes_fog_off.jpg"

%}

</div>

<div class="flex_row">

{% include gallery_image.html 

    title = "Monolith - Fog On"
    url = "https://zcubed.xyz/cdn/images/lvr/monolith_fog_on.jpg"

%}

{% include gallery_image.html 

    title = "Monolith - Fog Off"
    url = "https://zcubed.xyz/cdn/images/lvr/monolith_fog_off.jpg"

%}

</div>

{% endcapture %}

{% include gallery_section.html

    title="Baked Volumetrics"

    description = "Through an optional render pass, we can precompute and display baked volumetrics in game, allowing light to feel as if it was propogating further"

    content=vfog_contents

%}